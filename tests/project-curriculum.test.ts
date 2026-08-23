import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { roadmapRegistry } from "../lib/course-catalog";
import { parseProjectBrief, PROJECT_ARTIFACT_KINDS } from "../lib/parse-project-brief";
import { parseCourseMarkdown } from "../lib/parse-course";
import { parseProjectsDocument } from "../lib/parse-projects";
import { auditProjectCatalogs } from "../scripts/audit-projects";

const root = process.cwd();
const read = (sourcePath: string) => fs.readFileSync(path.join(root, sourcePath), "utf8");

describe("chapter-aligned project curriculum", () => {
  it("has one canonical project for all 374 chapters and covers all 2,145 lessons", () => {
    const audit = auditProjectCatalogs(root);
    expect(audit.errors).toEqual([]);
    expect(audit).toMatchObject({ courseCount: 11, chapterCount: 374, lessonCount: 2145, projectCount: 374 });
  });

  it("keeps every course catalog in chapter order with exact lesson mappings", () => {
    for (const definition of roadmapRegistry) {
      const course = parseCourseMarkdown(read(definition.sourcePath), definition.slug);
      const projects = parseProjectsDocument(read(definition.projectSourcePath), definition.projectSourcePath);
      expect(projects.map((project) => project.phaseId)).toEqual(course.phases.map((phase) => phase.id));
      projects.forEach((project, index) => {
        const brief = parseProjectBrief(project.markdown);
        const lessonIds = course.phases[index].lessons.filter((lesson) => lesson.kind === "lesson").map((lesson) => lesson.id);
        expect(brief.lessonCoverage.map((lesson) => lesson.lessonId)).toEqual(lessonIds);
        expect(PROJECT_ARTIFACT_KINDS).toContain(brief.kind);
        expect(brief.title).not.toBe("");
        expect(project.sourcePath).toBe(definition.projectSourcePath);
      });
    }
  });

  it("normalizes the former blank IT and CS rehearsal cards", () => {
    const it = parseProjectsDocument(read("content/projects/it-administration.md"), "content/projects/it-administration.md");
    const cs = parseProjectsDocument(read("content/projects/computer-science.md"), "content/projects/computer-science.md");
    expect(parseProjectBrief(it.find((project) => project.phaseId === "1")!.markdown)).toMatchObject({
      title: expect.stringContaining("TICKETING"),
      kind: "lab",
    });
    expect(parseProjectBrief(cs.find((project) => project.phaseId === "102")!.markdown)).toMatchObject({
      title: expect.stringContaining("LLD INTERVIEW"),
      kind: "rehearsal",
    });
  });
});
