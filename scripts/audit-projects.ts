import fs from "node:fs";
import path from "node:path";
import { roadmapRegistry } from "../lib/course-catalog";
import { PROJECT_ARTIFACT_KINDS, parseProjectBrief } from "../lib/parse-project-brief";
import { parseCourseMarkdown } from "../lib/parse-course";
import { parseProjectsDocument } from "../lib/parse-projects";

export type ProjectAudit = {
  errors: string[];
  courseCount: number;
  chapterCount: number;
  lessonCount: number;
  projectCount: number;
};

export function auditProjectCatalogs(root = process.cwd()): ProjectAudit {
  const errors: string[] = [];
  const seen = new Set<string>();
  let chapterCount = 0;
  let lessonCount = 0;
  let projectCount = 0;

  for (const definition of roadmapRegistry) {
    const roadmapPath = path.join(root, definition.sourcePath);
    const catalogPath = path.join(root, definition.projectSourcePath);
    if (!fs.existsSync(catalogPath)) {
      errors.push(`${definition.projectSourcePath}: project catalog is missing`);
      continue;
    }
    const course = parseCourseMarkdown(fs.readFileSync(roadmapPath, "utf8"), definition.slug);
    const projects = parseProjectsDocument(fs.readFileSync(catalogPath, "utf8"), definition.projectSourcePath);
    chapterCount += course.phases.length;
    lessonCount += course.phases.reduce((sum, phase) => sum + phase.lessons.filter((lesson) => lesson.kind === "lesson").length, 0);
    projectCount += projects.length;

    const expectedIds = course.phases.map((phase) => `${definition.projectPrefix}-phase-${phase.id}-project`);
    const actualIds = projects.map((project) => project.id);
    if (actualIds.join("|") !== expectedIds.join("|")) {
      const missing = expectedIds.filter((id) => !actualIds.includes(id));
      const orphaned = actualIds.filter((id) => !expectedIds.includes(id));
      if (missing.length) errors.push(`${definition.projectSourcePath}: missing chapter projects ${missing.join(", ")}`);
      if (orphaned.length) errors.push(`${definition.projectSourcePath}: orphaned chapter projects ${orphaned.join(", ")}`);
      if (!missing.length && !orphaned.length) errors.push(`${definition.projectSourcePath}: chapter projects are not in canonical chapter order`);
    }

    projects.forEach((project, index) => {
      if (seen.has(project.id)) errors.push(`${definition.projectSourcePath}: duplicate project id ${project.id}`);
      seen.add(project.id);
      const phase = course.phases[index];
      if (!phase || project.phaseId !== phase.id) return;
      const brief = parseProjectBrief(project.markdown);
      const prefix = `${definition.projectSourcePath}#${project.id}`;
      const required: [string, unknown[] | string][] = [
        ["project title", brief.title],
        ["chapter outcome", brief.chapterOutcome],
        ["lesson coverage", brief.lessonCoverage],
        ["specification", brief.spec],
        ["deliverables", brief.deliverables],
        ["tech stack", brief.tech],
        ["build steps", brief.steps],
        ["validation", brief.validation],
        ["completion criteria", brief.completionCriteria],
      ];
      for (const [label, value] of required) {
        if (typeof value === "string" ? !value.trim() : !value.length) errors.push(`${prefix}: ${label} is empty`);
      }
      if (!PROJECT_ARTIFACT_KINDS.includes(brief.kind)) errors.push(`${prefix}: unsupported artifact type ${brief.kind}`);
      const expectedLessons = phase.lessons.filter((lesson) => lesson.kind === "lesson").map((lesson) => lesson.id);
      const coveredLessons = brief.lessonCoverage.map((lesson) => lesson.lessonId);
      if (coveredLessons.join("|") !== expectedLessons.join("|")) {
        errors.push(`${prefix}: lesson coverage must exactly match ${expectedLessons.join(", ")}`);
      }
      if (brief.lessonCoverage.some((lesson) => !lesson.lessonTitle || !lesson.application)) {
        errors.push(`${prefix}: every lesson coverage row needs a title and application`);
      }
      if (!project.gitCheckpoint || !/git commit/i.test(project.gitCheckpoint)) errors.push(`${prefix}: Git checkpoint is missing`);
      if (!project.markdown.includes(`#phase-${phase.id}`)) errors.push(`${prefix}: review navigation does not target chapter ${phase.id}`);
      const next = course.phases[index + 1];
      if (next && !project.markdown.includes(`#phase-${next.id}`)) errors.push(`${prefix}: continue navigation does not target chapter ${next.id}`);
    });
  }

  if (chapterCount !== 374) errors.push(`Expected 374 chapters, found ${chapterCount}`);
  if (lessonCount !== 2145) errors.push(`Expected 2145 regular lessons, found ${lessonCount}`);
  if (projectCount !== chapterCount) errors.push(`Expected ${chapterCount} projects, found ${projectCount}`);

  return { errors, courseCount: roadmapRegistry.length, chapterCount, lessonCount, projectCount };
}

if (process.argv[1]?.replace(/\\/g, "/").endsWith("/scripts/audit-projects.ts")) {
  const result = auditProjectCatalogs();
  console.log(`Audited ${result.projectCount} projects across ${result.courseCount} courses, ${result.chapterCount} chapters, and ${result.lessonCount} lessons.`);
  result.errors.forEach((error) => console.error(`ERROR ${error}`));
  if (result.errors.length) process.exit(1);
}
