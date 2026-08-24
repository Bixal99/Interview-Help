import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { headingRouteMap, parseCourseMarkdown } from "../lib/parse-course";
import { parseProjectsDocument } from "../lib/parse-projects";
import { convertMarkdownHref } from "../lib/content-utils";
import { canEnterPhase, coursePercent, emptyProgress, migrateV1Progress, nextStep, parseProgressV2, resumeHref, validateImportedProgress, withCourse } from "../lib/progress-storage";
import { chaptersFor, learningPathById } from "../lib/learning-paths";
import { rewriteLegacyPath } from "../lib/legacy-routes";
import { extractPractice } from "../lib/practice";

const root = path.join(process.cwd());

function read(relative: string) {
  return fs.readFileSync(path.join(root, relative), "utf8");
}

describe("course parsing", () => {
  it("extracts CS phases, stable lesson ids, and YouTube from real source", () => {
    const course = parseCourseMarkdown(read("content/roadmaps/CS.md"), "computer-science");
    expect(course.phases).toHaveLength(105);
    expect(course.phases[0]).toMatchObject({ id: "1", title: expect.stringContaining("What Is Computer Science?") });
    expect(course.phases[0].lessons[0]).toMatchObject({ id: "1.1", slug: "problems-inputs-outputs" });
    expect(course.phases[0].lessons[0].videos[0].href).toContain("PLhQjrBD2T380F_inVRXMIHCqLaNUd7bN4");
    expect(course.phases[6]).toMatchObject({ id: "7", title: expect.stringContaining("Variables, Values & Types") });
    expect(course.phases[39]).toMatchObject({ id: "40", title: expect.stringContaining("Searching") });
    expect(headingRouteMap(course).get("complete-execution-journey")).toBe("/courses/computer-science/phase/5/source-code");
    const practiceLesson = course.phases[0].lessons.find((lesson) => extractPractice(lesson.markdown)?.kind === "checklist");
    expect(course.phases[0].lessons.find((lesson) => lesson.id === "1.7") && practiceLesson?.id).toBe("1.7");
    expect(new Set(course.phases.map((phase) => phase.id)).size).toBe(105);
    expect(course.phases.find((phase) => phase.id === "9")?.goal).toMatch(/local vs global scope/i);
    expect(course.phases.find((phase) => phase.id === "21")?.goal).toMatch(/Feel the \*problem\* OOP was invented to solve/i);
    expect(course.phases.find((phase) => phase.id === "65")?.lessons.find((lesson) => lesson.id === "65.9")?.children).toEqual([
      { id: "65.9.1", title: "Document Databases" },
      { id: "65.9.2", title: "Key-Value Databases" },
      { id: "65.9.3", title: "Wide-Column Databases" },
      { id: "65.9.4", title: "Graph Databases" },
    ]);
    expect(headingRouteMap(course).get("chapter-opening-so-what-exactly-is-a-computer"))
      .toBe("/courses/computer-science/phase/1/problems-inputs-outputs");
  });

  it("extracts Git 15 phases", () => {
    const course = parseCourseMarkdown(read("content/roadmaps/Git.md"), "git");
    expect(course.phases).toHaveLength(15);
  });

  it("extracts the Cloud beginner intro for the course home", () => {
    const course = parseCourseMarkdown(read("content/roadmaps/Cloud.md"), "cloud");
    expect(course.beginnerIntro?.heading).toMatch(/cloud computing is completely new/i);
    expect(course.beginnerIntro?.everydayTerms.map((item) => item.term)).toEqual(
      expect.arrayContaining(["Cloud", "Cloud provider", "Region"]),
    );
    expect(course.beginnerIntro?.terms.map((item) => item.term)).toEqual(
      expect.arrayContaining(["IAM", "FinOps"]),
    );
  });

  it("extracts CS beginner glossary tables for unit glossary pages", () => {
    const course = parseCourseMarkdown(read("content/roadmaps/CS.md"), "computer-science");
    expect(course.beginnerIntro?.paragraphs.join(" ")).not.toMatch(/there is no clock|sections are connected/i);
    expect(course.beginnerIntro?.everydayTerms).toEqual(
      expect.arrayContaining([
        { term: "Program", meaning: "A set of **instructions** a computer follows" },
        { term: "Algorithm", meaning: "The **ordered method** used to solve a problem" },
      ]),
    );
    expect(course.beginnerIntro?.everydayTerms.map((item) => item.term)).toEqual([
      "Program",
      "Algorithm",
      "Data structure",
      "Memory",
      "System",
    ]);
    expect(course.beginnerIntro?.terms[0]).toMatchObject({
      term: "Runtime",
      meaning: "The time when a program is **executing**",
    });
  });

  it("groups Odoo phases into 24 stories covering 96 phases", () => {
    const ids = Array.from({ length: 96 }, (_, index) => String(index + 1));
    const chapters = chaptersFor("odoo", ids);
    expect(chapters).toHaveLength(24);
    expect(chapters[0]).toMatchObject({ id: "story-1", phaseIds: ["1", "2", "3"] });
    expect(chapters[10]).toMatchObject({ id: "story-11", phaseIds: ["43"] });
    expect(chapters[23]).toMatchObject({ id: "story-24", phaseIds: ["96"] });
    expect(chapters.flatMap((chapter) => chapter.phaseIds)).toEqual(ids);
  });

  it("groups CS phases into sequential storyline chapters", () => {
    const chapters = chaptersFor("computer-science", Array.from({ length: 105 }, (_, index) => String(index + 1)));
    expect(chapters[0]).toMatchObject({ id: "story-1", phaseIds: ["1", "2", "3", "4", "5"] });
    expect(chapters[0].summary).toMatch(/what you are actually programming/i);
    expect(chapters.find((chapter) => chapter.id === "story-2")?.phaseIds).toEqual(
      Array.from({ length: 10 }, (_, index) => String(index + 6)),
    );
    expect(chapters.find((chapter) => chapter.id === "story-4")?.phaseIds).toEqual(
      Array.from({ length: 10 }, (_, index) => String(index + 21)),
    );
  });

  it("places story II right after story I in the CS storyline, even with gaps", () => {
    const chapters = chaptersFor("computer-science", ["1", "2", "3", "6", "21"]);
    expect(chapters.map((chapter) => chapter.id)).toEqual(["story-1", "story-2", "story-4"]);
    expect(chapters.find((chapter) => chapter.id === "story-1")?.phaseIds).toEqual(["1", "2", "3"]);
    expect(chapters.find((chapter) => chapter.id === "story-2")?.phaseIds).toEqual(["6"]);
  });

  it("continues the software engineer path through OOP, Git, then data structures", () => {
    const steps = learningPathById["software-engineer"].steps;
    expect(nextStep(steps, "computer-science", "2")).toEqual({ course: "computer-science", phaseId: "3" });
    expect(nextStep(steps, "computer-science", "30")).toEqual({ course: "git", phaseId: "1" });
    expect(nextStep(steps, "git", "10")).toEqual({ course: "computer-science", phaseId: "31" });
  });

  it("rewrites old OOP URLs into their new Computer Science phase numbers", () => {
    expect(rewriteLegacyPath("/courses/object-oriented-programming")).toBe("/courses/computer-science");
    expect(rewriteLegacyPath("/courses/object-oriented-programming/learn")).toBeNull();
    expect(rewriteLegacyPath("/courses/object-oriented-programming/phase/1")).toBe("/courses/computer-science/phase/21");
    expect(rewriteLegacyPath("/courses/object-oriented-programming/phase/f1/how-programs-run")).toBe("/courses/computer-science/phase/6/how-programs-run");
    expect(rewriteLegacyPath("/courses/object-oriented-programming/phase/oop-1")).toBe("/courses/computer-science/phase/21");
    expect(rewriteLegacyPath("/projects/object-oriented-programming/phase/2")).toBe("/projects/computer-science/phase/22");
  });

  it("returns empty phases for malformed content without throwing", () => {
    const course = parseCourseMarkdown("# Title\n\nNo phases here.\n", "broken");
    expect(course.phases).toEqual([]);
    expect(course.introMarkdown).toContain("No phases here");
  });
});

describe("project mapping", () => {
  it("maps every CS chapter project from its course catalog", () => {
    const projects = parseProjectsDocument(read("content/projects/computer-science.md"), "content/projects/computer-science.md");
    const cs5 = projects.find((project) => project.coursePrefix === "cs" && project.phaseId === "5");
    const cs7 = projects.find((project) => project.coursePrefix === "cs" && project.phaseId === "7");
    expect(cs5?.title.toLowerCase()).toContain("compilation pipeline");
    expect(cs7?.title.toLowerCase()).toContain("type-safe unit conversion");
    expect(cs7?.id).toBe("cs-phase-7-project");
    expect(cs5?.gitCheckpoint).toContain("git commit");
  });

  it("parses a build brief and returns a commented starter", async () => {
    const { parseProjectBrief } = await import("../lib/parse-project-brief");
    const { getProjectStarter } = await import("../lib/project-starters");
    const projects = parseProjectsDocument(read("content/projects/computer-science.md"), "content/projects/computer-science.md");
    const cs31 = projects.find((project) => project.id === "cs-phase-31-project");
    const brief = parseProjectBrief(cs31?.markdown ?? "");
    expect(brief.title.toLowerCase()).toContain("growth");
    expect(brief.topic).toMatch(/complexity|growth/i);
    expect(brief.spec.length).toBeGreaterThanOrEqual(3);
    expect(brief.steps.length).toBeGreaterThanOrEqual(3);
  });
});

describe("internal link conversion", () => {
  it("maps roadmap fragments to lesson routes and project pages", () => {
    expect(convertMarkdownHref("./Git.md#phase-4---branching")).toBe("/courses/git/phase/4");
    expect(convertMarkdownHref("cloud.md#phase-12")).toBe("/courses/cloud/phase/12");
    expect(convertMarkdownHref("../roadmaps/Git.md#phase-4---branching", "content/guides/Projects.md")).toBe("/courses/git/phase/4");
    expect(convertMarkdownHref("../guides/Projects.md#cs-phase-5-project", "content/roadmaps/CS.md")).toBe("/projects/computer-science/phase/5");
    expect(convertMarkdownHref("#phase-31---complexity-analysis", "content/roadmaps/CS.md")).toBe("/courses/computer-science/phase/31");
    expect(convertMarkdownHref("./OOP.md#phase-1", "content/roadmaps/CS.md")).toBe("/courses/computer-science/phase/21");
    expect(convertMarkdownHref("#phase-f1", "content/roadmaps/OOP.md")).toBe("/courses/computer-science/phase/6");
    expect(convertMarkdownHref("../guides/Projects.md#oop-phase-1-project", "content/roadmaps/OOP.md")).toBe("/projects/computer-science/phase/21");
    expect(convertMarkdownHref("../guides/Projects.md", "content/roadmaps/Web.md")).toBe("/projects");
    expect(convertMarkdownHref("./data/Job_Tracker.xlsx", "README.md")).toBe("/downloads/job-tracker");
  });
});

describe("progress v3", () => {
  it("migrates v1 heading ids without dropping unknown values", () => {
    const migrated = migrateV1Progress(
      ["git:phase-1", "git:phase-1", "git:unknown-id"],
      [{ slug: "git", phaseHeadingIds: ["phase-1"], projectHeadingIds: [], gitHeadingIds: [], practiceHeadingIds: [] }],
    );
    expect(migrated.version).toBe(5);
    expect(migrated.courses.git.completedPhases).toContain("1");
    expect(migrated.legacyIds).toContain("git:unknown-id");
  });

  it("gates the next chapter on previous lessons and project", () => {
    const steps = learningPathById["software-engineer"].steps;
    const requirements = {
      "computer-science": {
        "1": { lessons: [{ id: "1.1", href: "/1.1" }, { id: "1.2", href: "/1.2" }], projectRequired: true, projectHref: "/project/1" },
        "2": { lessons: [{ id: "2.1", href: "/2.1" }], projectRequired: true, projectHref: "/project/2" },
      },
    };
    let progress = emptyProgress();
    expect(canEnterPhase(progress, steps, "computer-science", "1", requirements)).toBe(true);
    expect(canEnterPhase(progress, steps, "computer-science", "2", requirements)).toBe(false);
    progress = withCourse(progress, "computer-science", { completedLessons: ["1.1", "1.2"] });
    expect(canEnterPhase(progress, steps, "computer-science", "2", requirements)).toBe(false);
    progress = withCourse(progress, "computer-science", { completedLessons: ["1.1", "1.2"], completedProjects: ["1"] });
    expect(canEnterPhase(progress, steps, "computer-science", "2", requirements)).toBe(true);
    progress = withCourse(progress, "computer-science", { completedLessons: ["1.1", "1.2", "2.1"], completedProjects: ["1", "2"] });
    expect(canEnterPhase(progress, steps, "computer-science", "3", requirements)).toBe(true);
  });

  it("moves saved OOP progress into sequential Computer Science ids", () => {
    const migrated = parseProgressV2(JSON.stringify({
      version: 2,
      courses: {
        "object-oriented-programming": {
          lastVisitedAt: "2026-01-01T00:00:00.000Z",
          visitedLessons: ["1.1", "f1.1"],
          completedLessons: ["1.1"],
          completedExercises: [],
          completedProjects: ["1", "f1"],
          completedGitCheckpoints: [],
          completedPhases: ["1"],
        },
      },
    }));
    expect(migrated.version).toBe(5);
    expect(migrated.courses["object-oriented-programming"]).toBeUndefined();
    expect(migrated.courses["computer-science"].completedProjects).toEqual(["21", "6"]);
    expect(migrated.courses["computer-science"].completedLessons).toEqual(["21.1"]);
    expect(migrated.courses["computer-science"].visitedLessons).toEqual(["21.1", "6.1"]);
  });

  it("calculates percent from required lessons and projects", () => {
    expect(coursePercent({ lastVisitedAt: "", visitedLessons: [], completedLessons: ["1.1"], completedExercises: [], completedProjects: ["1"], completedGitCheckpoints: [], completedPhases: ["1"] }, 3, 1)).toBe(50);
    expect(coursePercent({ lastVisitedAt: "", visitedLessons: [], completedLessons: [], completedExercises: [], completedProjects: [], completedGitCheckpoints: [], completedPhases: ["1"] }, 3, 1)).toBe(0);
    expect(coursePercent({ lastVisitedAt: "", visitedLessons: [], completedLessons: ["1.1", "1.2", "1.3"], completedExercises: [], completedProjects: [], completedGitCheckpoints: [], completedPhases: [] }, 3, 1)).toBe(75);
    expect(coursePercent({ lastVisitedAt: "", visitedLessons: [], completedLessons: ["1.1", "1.2", "1.3"], completedExercises: [], completedProjects: ["1"], completedGitCheckpoints: [], completedPhases: ["1"] }, 3, 1)).toBe(100);
  });

  it("resumes a project stop to the project page, not a fake lesson path", () => {
    const progress = withCourse(emptyProgress(), "computer-science", {
      currentPhaseId: "2",
      currentLessonId: "project:2",
    });
    const hrefFor = (slug: string, phaseId: string, lessonId?: string) =>
      lessonId ? `/courses/${slug}/phase/${phaseId}/${lessonId}` : `/courses/${slug}/phase/${phaseId}`;
    expect(resumeHref(progress, hrefFor)).toMatchObject({
      slug: "computer-science",
      phaseId: "2",
      href: "/projects/computer-science/phase/2",
    });
  });

  it("resumes a phase checkpoint stop to the phase page, not a fake lesson path", () => {
    const progress = withCourse(emptyProgress(), "odoo", {
      currentPhaseId: "1",
      currentLessonId: "phase:1",
    });
    const hrefFor = (slug: string, phaseId: string, lessonId?: string) =>
      lessonId ? `/courses/${slug}/phase/${phaseId}/${lessonId}` : `/courses/${slug}/phase/${phaseId}`;
    expect(resumeHref(progress, hrefFor)).toMatchObject({
      slug: "odoo",
      phaseId: "1",
      href: "/courses/odoo/phase/1",
    });
  });

  it("resumes a glossary stop to the unit glossary page, not a fake lesson path", () => {
    const progress = withCourse(emptyProgress(), "odoo", {
      currentPhaseId: "3",
      currentLessonId: "glossary:story-1",
    });
    const hrefFor = (slug: string, phaseId: string, lessonId?: string) =>
      lessonId ? `/courses/${slug}/phase/${phaseId}/${lessonId}` : `/courses/${slug}/phase/${phaseId}`;
    expect(resumeHref(progress, hrefFor)).toMatchObject({
      slug: "odoo",
      phaseId: "3",
      href: "/courses/odoo/unit/story-1/glossary",
    });
  });

  it("validates import JSON and rejects malformed files", () => {
    expect(parseProgressV2(null).version).toBe(5);
    expect(() => validateImportedProgress({ version: 2, courses: {} })).not.toThrow();
    expect(() => validateImportedProgress({ version: 3, courses: {} })).not.toThrow();
    expect(() => validateImportedProgress({ version: 5, courses: {} })).not.toThrow();
    expect(() => validateImportedProgress({ hello: true })).toThrow(/valid Interview Help progress backup/);
  });

  it("semantically migrates v4 CS lessons while dropping structural headings", () => {
    const migrated = parseProgressV2(JSON.stringify({
      version: 4,
      courses: {
        "computer-science": {
          lastVisitedAt: "2026-08-01T00:00:00.000Z",
          currentPhaseId: "1",
          currentLessonId: "computers-as-problem-solving-machines",
          visitedLessons: ["computers-as-problem-solving-machines", "chapter-roadmap-where-are-we-going"],
          completedLessons: ["1.3", "1.8"],
          completedExercises: ["1.8:practice"],
          completedProjects: ["1"],
          completedGitCheckpoints: ["1"],
          completedPhases: ["1"],
        },
      },
    }));
    expect(migrated.version).toBe(5);
    expect(migrated.courses["computer-science"]).toMatchObject({
      currentLessonId: "1.1",
      visitedLessons: ["1.1"],
      completedLessons: ["1.1", "1.7"],
      completedExercises: ["1.7:practice"],
      completedProjects: ["1"],
      completedGitCheckpoints: ["1"],
      completedPhases: ["1"],
    });
  });
});
