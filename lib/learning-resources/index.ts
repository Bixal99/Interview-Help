import fs from "node:fs";
import path from "node:path";
import type { LearningResource, ResourceBundle } from "./types";

function loadBundle(courseSlug: string): ResourceBundle {
  const filePath = path.join(process.cwd(), "lib/learning-resources/data", `${courseSlug}.json`);
  if (!fs.existsSync(filePath)) {
    return { lessons: {}, phases: {}, projects: {} };
  }
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as ResourceBundle;
}

const bundles: Record<string, ResourceBundle> = {};

function bundleFor(courseSlug: string): ResourceBundle {
  if (!bundles[courseSlug]) bundles[courseSlug] = loadBundle(courseSlug);
  return bundles[courseSlug];
}

export function isResourceSkippedLesson(title: string): boolean {
  return /\b(PRACTICE|MINI PROJECT|LAB CHECKPOINT|GIT CHECKPOINT)\b/i.test(title);
}

export function resourcesForLesson(
  courseSlug: string,
  phaseId: string,
  lessonId: string,
  lessonTitle?: string,
): LearningResource[] {
  if (lessonTitle && isResourceSkippedLesson(lessonTitle)) return [];
  const bundle = bundleFor(courseSlug);
  const lessonResources = bundle.lessons[lessonId] ?? [];
  if (lessonResources.length > 0) return lessonResources;
  return bundle.phases[phaseId] ?? [];
}

export function resourcesForPhase(courseSlug: string, phaseId: string): LearningResource[] {
  return bundleFor(courseSlug).phases[phaseId] ?? [];
}

export function resourcesForProject(courseSlug: string, phaseId: string): LearningResource[] {
  return bundleFor(courseSlug).projects[phaseId] ?? [];
}

export function hasCentralizedResources(courseSlug: string, lessonId: string, phaseId?: string): boolean {
  const bundle = bundleFor(courseSlug);
  if (bundle.lessons[lessonId]?.length) return true;
  return Boolean(phaseId && bundle.phases[phaseId]?.length);
}

export { bundles };
