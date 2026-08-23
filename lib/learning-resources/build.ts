import fs from "node:fs";
import path from "node:path";
import { courseCatalog } from "../course-catalog";
import { parseCourseMarkdown } from "../parse-course";
import { extractInlineResourceBullets, extractSeeItResources } from "./extract-inline";
import type { LearningResource, ResourceBundle, ResourceEntry } from "./types";

export type { ResourceBundle } from "./types";

function lessonKey(lessonId: string) {
  return lessonId;
}

function phaseKey(phaseId: string) {
  return phaseId;
}

function dedupeResources(resources: LearningResource[]): LearningResource[] {
  const seen = new Set<string>();
  return resources.filter((resource) => {
    const key = resource.url.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function collectFromMarkdown(markdown: string): LearningResource[] {
  const seeIt = extractSeeItResources(markdown);
  if (seeIt.length > 0) return dedupeResources(seeIt);
  return dedupeResources(extractInlineResourceBullets(markdown));
}

function readCuratedFile(courseSlug: string): ResourceBundle | null {
  const filePath = path.join(process.cwd(), "lib/learning-resources/curated", `${courseSlug}.json`);
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8")) as ResourceBundle;
  } catch {
    return null;
  }
}

function mergeBundles(base: ResourceBundle, overlay: ResourceBundle | null): ResourceBundle {
  if (!overlay) return base;
  /** Curated entries replace inline markdown extraction — never append both. */
  const mergeSection = (left: Record<string, LearningResource[]>, right: Record<string, LearningResource[]>) => {
    const out = { ...left };
    for (const [key, resources] of Object.entries(right)) {
      if (resources.length > 0) out[key] = dedupeResources(resources);
    }
    return out;
  };
  return {
    lessons: mergeSection(base.lessons, overlay.lessons),
    phases: mergeSection(base.phases, overlay.phases),
    projects: mergeSection(base.projects, overlay.projects),
  };
}

export function buildCourseResourceBundle(courseSlug: string, markdown: string): ResourceBundle {
  const parsed = parseCourseMarkdown(markdown, courseSlug);
  const bundle: ResourceBundle = { lessons: {}, phases: {}, projects: {} };

  for (const phase of parsed.phases) {
    const phaseResources = collectFromMarkdown(phase.overview);
    if (phaseResources.length) bundle.phases[phaseKey(phase.id)] = phaseResources;

    for (const lesson of phase.lessons) {
      const lessonResources = collectFromMarkdown(lesson.markdown);
      if (lessonResources.length) bundle.lessons[lessonKey(lesson.id)] = lessonResources;
    }

    if (phase.project) {
      const projectResources = collectFromMarkdown(phase.project.markdown);
      if (projectResources.length) bundle.projects[phaseKey(phase.id)] = projectResources;
    }
  }

  return mergeBundles(bundle, readCuratedFile(courseSlug));
}

export function buildAllResourceBundles(): Record<string, ResourceBundle> {
  const out: Record<string, ResourceBundle> = {};
  for (const course of courseCatalog) {
    const fullPath = path.join(process.cwd(), course.sourcePath);
    const markdown = fs.readFileSync(fullPath, "utf8");
    out[course.slug] = buildCourseResourceBundle(course.slug, markdown);
  }
  return out;
}

export function bundleToEntries(courseSlug: string, bundle: ResourceBundle): ResourceEntry[] {
  const entries: ResourceEntry[] = [];
  for (const [phaseId, resources] of Object.entries(bundle.phases)) {
    if (resources.length) entries.push({ kind: "phase", courseSlug, phaseId, resources });
  }
  for (const [lessonId, resources] of Object.entries(bundle.lessons)) {
    if (!resources.length) continue;
    const phaseId = lessonId.split(".")[0] ?? lessonId.replace(/^sp/i, "");
    entries.push({ kind: "lesson", courseSlug, phaseId, lessonId, resources });
  }
  for (const [phaseId, resources] of Object.entries(bundle.projects)) {
    if (resources.length) entries.push({ kind: "project", courseSlug, phaseId, resources });
  }
  return entries;
}

export function writeResourceDataFiles() {
  const dir = path.join(process.cwd(), "lib/learning-resources/data");
  fs.mkdirSync(dir, { recursive: true });
  const bundles = buildAllResourceBundles();
  for (const [slug, bundle] of Object.entries(bundles)) {
    fs.writeFileSync(path.join(dir, `${slug}.json`), `${JSON.stringify(bundle, null, 2)}\n`, "utf8");
  }
  return bundles;
}
