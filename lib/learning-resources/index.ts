import fs from "node:fs";
import path from "node:path";
import { courseCatalog } from "@/lib/course-catalog";
import type { LearningResource, ResourceBundle } from "./types";

function loadBundle(courseSlug: string): ResourceBundle {
  const filePath = path.join(process.cwd(), "lib/learning-resources/data", `${courseSlug}.json`);
  if (!fs.existsSync(filePath)) {
    return { lessons: {}, phases: {}, projects: {} };
  }
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as ResourceBundle;
}

const bundles = Object.fromEntries(courseCatalog.map((course) => [course.slug, loadBundle(course.slug)]));

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
  const bundle = bundles[courseSlug];
  if (!bundle) return [];
  const lessonResources = bundle.lessons[lessonId] ?? [];
  if (lessonResources.length > 0) return lessonResources;
  return bundle.phases[phaseId] ?? [];
}

export function resourcesForPhase(courseSlug: string, phaseId: string): LearningResource[] {
  const bundle = bundles[courseSlug];
  if (!bundle) return [];
  return bundle.phases[phaseId] ?? [];
}

export function resourcesForProject(courseSlug: string, phaseId: string): LearningResource[] {
  const bundle = bundles[courseSlug];
  if (!bundle) return [];
  return bundle.projects[phaseId] ?? [];
}

export function hasCentralizedResources(courseSlug: string, lessonId: string, phaseId?: string): boolean {
  const bundle = bundles[courseSlug];
  if (!bundle) return false;
  if (bundle.lessons[lessonId]?.length) return true;
  return Boolean(phaseId && bundle.phases[phaseId]?.length);
}

export function resourceCoverageStats() {
  let withResources = 0;
  let total = 0;
  for (const course of courseCatalog) {
    const bundle = bundles[course.slug];
    total += Object.keys(bundle?.lessons ?? {}).length;
    withResources += Object.values(bundle?.lessons ?? {}).filter((items) => items.length > 0).length;
  }
  return { withResources, total };
}

export { bundles };
