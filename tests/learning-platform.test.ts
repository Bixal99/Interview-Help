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
    expect(course.phases).toHaveLength(43);
    expect(course.phases[0]).toMatchObject({ id: "1", title: expect.stringContaining("Programming Foundations") });
    expect(course.phases[0].lessons[0]).toMatchObject({ id: "1.1", slug: "from-source-code-to-a-running-program" });
    expect(course.phases[0].lessons[0].videos[0].href).toContain("QXjU9qTsYCc");
    expect(course.phases[2]).toMatchObject({ id: "3", title: expect.stringContaining("How Programs Run") });
    expect(course.phases[25]).toMatchObject({ id: "26", title: expect.stringContaining("Linear Data Structures") });
    expect(headingRouteMap(course).get("from-source-code-to-a-running-program")).toBe("/courses/computer-science/phase/1/from-source-code-to-a-running-program");
    expect(extractPractice(course.phases[0].lessons[0].markdown)?.kind).toBe("checklist");
    expect(new Set(course.phases.map((phase) => phase.id)).size).toBe(43);
    expect(course.phases.find((phase) => phase.id === "5")?.goal).toMatch(/named functions and modules/i);
    expect(course.phases.find((phase) => phase.id === "6")?.goal).toMatch(/Feel the \*problem\* OOP was invented to solve/i);
    expect(course.phases.find((phase) => phase.id === "38")?.lessons.find((lesson) => lesson.id === "38.5")?.children).toEqual([
      { id: "38.5.1", title: "SQL Injection" },
      { id: "38.5.2", title: "XSS" },
      { id: "38.5.3", title: "CSRF" },
      { id: "38.5.4", title: "CORS" },
    ]);
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

  it("extracts CS beginner glossary tables for the course home", () => {
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

  it("groups CS phases into sequential storyline chapters", () => {
    const chapters = chaptersFor("computer-science", Array.from({ length: 43 }, (_, index) => String(index + 1)));
    expect(chapters[0]).toMatchObject({ id: "foundations", phaseIds: ["1", "2"] });
    expect(chapters[0].summary).toMatch(/computer actually does/i);
    expect(chapters.find((chapter) => chapter.id === "programming")?.phaseIds).toEqual(["3", "4", "5"]);
    expect(chapters.find((chapter) => chapter.id === "oop-revision")?.phaseIds).toEqual(["33"]);
  });

  it("places programming after CS phase 2 in the CS storyline", () => {
    const chapters = chaptersFor("computer-science", ["1", "2", "3", "4", "6", "26"]);
    expect(chapters.map((chapter) => chapter.id)).toEqual(["foundations", "programming", "thinking", "algorithms"]);
    expect(chapters.find((chapter) => chapter.id === "programming")?.phaseIds).toEqual(["3", "4"]);
  });

  it("continues the software engineer path through OOP, Git, then data structures", () => {
    const steps = learningPathById["software-engineer"].steps;
    expect(nextStep(steps, "computer-science", "2")).toEqual({ course: "computer-science", phaseId: "3" });
    expect(nextStep(steps, "computer-science", "25")).toEqual({ course: "git", phaseId: "1" });
    expect(nextStep(steps, "git", "10")).toEqual({ course: "computer-science", phaseId: "26" });
  });

  it("rewrites old OOP URLs into sequential Computer Science phases", () => {
    expect(rewriteLegacyPath("/courses/object-oriented-programming")).toBe("/courses/computer-science");
    expect(rewriteLegacyPath("/courses/object-oriented-programming/learn")).toBeNull();
    expect(rewriteLegacyPath("/courses/object-oriented-programming/phase/1")).toBe("/courses/computer-science/phase/6");
    expect(rewriteLegacyPath("/courses/object-oriented-programming/phase/f1/how-programs-run")).toBe("/courses/computer-science/phase/3/how-programs-run");
    expect(rewriteLegacyPath("/courses/object-oriented-programming/phase/oop-1")).toBe("/courses/computer-science/phase/6");
    expect(rewriteLegacyPath("/projects/object-oriented-programming/phase/2")).toBe("/projects/computer-science/phase/7");
  });

  it("returns empty phases for malformed content without throwing", () => {
    const course = parseCourseMarkdown("# Title\n\nNo phases here.\n", "broken");
    expect(course.phases).toEqual([]);
    expect(course.introMarkdown).toContain("No phases here");
  });
});

describe("project mapping", () => {
  it("maps CS phase 1 and sequential phase 3 projects from Projects.md", () => {
    const projects = parseProjectsDocument(read("content/guides/Projects.md"));
    const cs1 = projects.find((project) => project.coursePrefix === "cs" && project.phaseId === "1");
    const cs3 = projects.find((project) => project.coursePrefix === "cs" && project.phaseId === "3");
    expect(cs1?.title.toLowerCase()).toContain("expression");
    expect(cs3?.title.toLowerCase()).toContain("execution");
    expect(cs3?.id).toBe("cs-phase-3-project");
    expect(cs1?.gitCheckpoint).toContain("git commit");
  });

  it("parses a build brief and returns a commented starter", async () => {
    const { parseProjectBrief } = await import("../lib/parse-project-brief");
    const { getProjectStarter } = await import("../lib/project-starters");
    const projects = parseProjectsDocument(read("content/guides/Projects.md"));
    const cs2 = projects.find((project) => project.id === "cs-phase-2-project");
    const brief = parseProjectBrief(cs2?.markdown ?? "");
    expect(brief.title.toLowerCase()).toContain("algorithm growth");
    expect(brief.topic).toMatch(/complexity/i);
    expect(brief.spec.length).toBeGreaterThanOrEqual(3);
    expect(brief.steps.length).toBeGreaterThanOrEqual(3);
    const starter = getProjectStarter("cs-phase-2-project", brief);
    expect(starter.project.files["src/main.py"]).toContain("def quadratic");
    expect(starter.project.files["src/main.py"]).toContain("operation");
  });
});

describe("internal link conversion", () => {
  it("maps roadmap fragments to lesson routes and project pages", () => {
    expect(convertMarkdownHref("./Git.md#phase-4---branching")).toBe("/courses/git/phase/4");
    expect(convertMarkdownHref("cloud.md#phase-12")).toBe("/courses/cloud/phase/12");
    expect(convertMarkdownHref("../roadmaps/Git.md#phase-4---branching", "content/guides/Projects.md")).toBe("/courses/git/phase/4");
    expect(convertMarkdownHref("../guides/Projects.md#cs-phase-1-project", "content/roadmaps/CS.md")).toBe("/projects/computer-science/phase/1");
    expect(convertMarkdownHref("#phase-2---complexity-analysis", "content/roadmaps/CS.md")).toBe("/courses/computer-science/phase/2");
    expect(convertMarkdownHref("./OOP.md#phase-1", "content/roadmaps/CS.md")).toBe("/courses/computer-science/phase/6");
    expect(convertMarkdownHref("#phase-f1", "content/roadmaps/OOP.md")).toBe("/courses/computer-science/phase/3");
    expect(convertMarkdownHref("../guides/Projects.md#oop-phase-1-project", "content/roadmaps/OOP.md")).toBe("/projects/computer-science/phase/6");
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
    expect(migrated.version).toBe(3);
    expect(migrated.courses.git.completedPhases).toContain("1");
    expect(migrated.legacyIds).toContain("git:unknown-id");
  });

  it("gates next phase on project completion", () => {
    const steps = learningPathById["software-engineer"].steps;
    let progress = emptyProgress();
    expect(canEnterPhase(progress, steps, "computer-science", "1")).toBe(true);
    expect(canEnterPhase(progress, steps, "computer-science", "2")).toBe(false);
    progress = withCourse(progress, "computer-science", { completedProjects: ["1"] });
    expect(canEnterPhase(progress, steps, "computer-science", "2")).toBe(true);
    progress = withCourse(progress, "computer-science", { completedProjects: ["1", "2"] });
    expect(canEnterPhase(progress, steps, "computer-science", "3")).toBe(true);
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
    expect(migrated.version).toBe(3);
    expect(migrated.courses["object-oriented-programming"]).toBeUndefined();
    expect(migrated.courses["computer-science"].completedProjects).toEqual(["6", "3"]);
    expect(migrated.courses["computer-science"].completedLessons).toEqual(["6.1"]);
    expect(migrated.courses["computer-science"].visitedLessons).toEqual(["6.1", "3.1"]);
  });

  it("calculates resume-related percent from lessons and projects", () => {
    expect(coursePercent({ lastVisitedAt: "", visitedLessons: [], completedLessons: ["1.1"], completedExercises: [], completedProjects: ["1"], completedGitCheckpoints: [], completedPhases: ["1"] }, 3)).toBe(33);
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

  it("validates import JSON and rejects malformed files", () => {
    expect(parseProgressV2(null).version).toBe(3);
    expect(() => validateImportedProgress({ version: 2, courses: {} })).not.toThrow();
    expect(() => validateImportedProgress({ version: 3, courses: {} })).not.toThrow();
    expect(() => validateImportedProgress({ hello: true })).toThrow(/valid Interview Help progress backup/);
  });
});
