import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { headingRouteMap, parseCourseMarkdown } from "../lib/parse-course";
import { parseProjectsDocument } from "../lib/parse-projects";
import { convertMarkdownHref } from "../lib/content-utils";
import { canEnterPhase, coursePercent, emptyProgress, migrateV1Progress, nextStep, parseProgressV2, validateImportedProgress, withCourse } from "../lib/progress-storage";
import { chaptersFor, learningPathById } from "../lib/learning-paths";
import { extractPractice } from "../lib/practice";

const root = path.join(process.cwd());

function read(relative: string) {
  return fs.readFileSync(path.join(root, relative), "utf8");
}

describe("course parsing", () => {
  it("extracts CS phases, stable lesson ids, and YouTube from real source", () => {
    const course = parseCourseMarkdown(read("content/roadmaps/CS.md"), "computer-science");
    expect(course.phases).toHaveLength(20);
    expect(course.phases[0]).toMatchObject({ id: "1", title: expect.stringContaining("Programming Foundations") });
    expect(course.phases[0].lessons[0]).toMatchObject({ id: "1.1", slug: "from-source-code-to-a-running-program" });
    expect(course.phases[0].lessons[0].videos[0].href).toContain("QXjU9qTsYCc");
    expect(headingRouteMap(course).get("from-source-code-to-a-running-program")).toBe("/courses/computer-science/phase/1/from-source-code-to-a-running-program");
    expect(extractPractice(course.phases[0].lessons[0].markdown)?.kind).toBe("checklist");
    expect(new Set(course.phases.map((phase) => phase.id)).size).toBe(20);
  });

  it("extracts OOP Part 0 as f1-f3 phases with F1.1 lessons", () => {
    const course = parseCourseMarkdown(read("content/roadmaps/OOP.md"), "object-oriented-programming");
    expect(course.phases[0].id).toBe("f1");
    expect(course.phases.find((phase) => phase.id === "f1")?.lessons.map((lesson) => lesson.id)).toEqual(["f1.1", "f1.2"]);
    expect(course.phases.some((phase) => phase.id === "1")).toBe(true);
  });

  it("extracts Git 15 phases", () => {
    const course = parseCourseMarkdown(read("content/roadmaps/Git.md"), "git");
    expect(course.phases).toHaveLength(15);
  });

  it("groups CS phases into README chapters", () => {
    const chapters = chaptersFor("computer-science", Array.from({ length: 20 }, (_, index) => String(index + 1)));
    expect(chapters[0]).toMatchObject({ id: "foundations", phaseIds: ["1", "2"] });
    expect(chapters.find((chapter) => chapter.id === "oop-revision")?.phaseIds).toEqual(["10"]);
  });

  it("recommends OOP after CS phase 2 on the software engineer path", () => {
    expect(nextStep(learningPathById["software-engineer"].steps, "computer-science", "2")).toEqual({
      course: "object-oriented-programming",
      phaseId: "f1",
    });
  });

  it("returns empty phases for malformed content without throwing", () => {
    const course = parseCourseMarkdown("# Title\n\nNo phases here.\n", "broken");
    expect(course.phases).toEqual([]);
    expect(course.introMarkdown).toContain("No phases here");
  });
});

describe("project mapping", () => {
  it("maps CS phase 1 and OOP f1 projects from Projects.md", () => {
    const projects = parseProjectsDocument(read("content/guides/Projects.md"));
    const cs1 = projects.find((project) => project.coursePrefix === "cs" && project.phaseId === "1");
    const oopF1 = projects.find((project) => project.coursePrefix === "oop" && project.phaseId === "f1");
    expect(cs1?.title.toLowerCase()).toContain("expression");
    expect(oopF1?.id).toBe("oop-phase-f1-project");
    expect(cs1?.gitCheckpoint).toContain("git commit");
  });
});

describe("internal link conversion", () => {
  it("maps roadmap fragments to lesson routes and project pages", () => {
    expect(convertMarkdownHref("./Git.md#phase-4---branching")).toBe("/courses/git/phase/4");
    expect(convertMarkdownHref("cloud.md#phase-12")).toBe("/courses/cloud/phase/12");
    expect(convertMarkdownHref("../roadmaps/Git.md#phase-4---branching", "content/guides/Projects.md")).toBe("/courses/git/phase/4");
    expect(convertMarkdownHref("../guides/Projects.md#cs-phase-1-project", "content/roadmaps/CS.md")).toBe("/projects/computer-science/phase/1");
    expect(convertMarkdownHref("#phase-2---complexity-analysis", "content/roadmaps/CS.md")).toBe("/courses/computer-science/phase/2");
    expect(convertMarkdownHref("../guides/Projects.md", "content/roadmaps/Web.md")).toBe("/projects");
    expect(convertMarkdownHref("./data/Job_Tracker.xlsx", "README.md")).toBe("/downloads/job-tracker");
  });
});

describe("progress v2", () => {
  it("migrates v1 heading ids without dropping unknown values", () => {
    const migrated = migrateV1Progress(
      ["git:phase-1", "git:phase-1", "git:unknown-id"],
      [{ slug: "git", phaseHeadingIds: ["phase-1"], projectHeadingIds: [], gitHeadingIds: [], practiceHeadingIds: [] }],
    );
    expect(migrated.version).toBe(2);
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
    expect(canEnterPhase(progress, steps, "object-oriented-programming", "f1")).toBe(true);
  });

  it("calculates resume-related percent from lessons and projects", () => {
    expect(coursePercent({ lastVisitedAt: "", visitedLessons: [], completedLessons: ["1.1"], completedExercises: [], completedProjects: ["1"], completedGitCheckpoints: [], completedPhases: [] }, 2, 1)).toBe(67);
  });

  it("validates import JSON and rejects malformed files", () => {
    expect(parseProgressV2(null).version).toBe(2);
    expect(() => validateImportedProgress({ version: 2, courses: {} })).not.toThrow();
    expect(() => validateImportedProgress({ hello: true })).toThrow(/valid Interview Help progress backup/);
  });
});
