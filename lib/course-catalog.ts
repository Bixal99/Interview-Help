import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import type { CourseIconName } from "./icons";
import { COURSE_ICON_BY_SLUG } from "./icons";
import { CONTENT_ROOT } from "./paths";

export type CourseDefinition = {
  slug: string;
  title: string;
  sourcePath: string;
  route: string;
  type: "roadmap";
  shortName: string;
  icon: CourseIconName;
  description: string;
  difficulty: string;
  skills: string[];
  prerequisites: string;
  projectPrefix: string;
  projectSourcePath: string;
  accent: string;
  technologies?: string[];
  treeCourse: true;
};

export type ContentEntry = {
  slug: string;
  title: string;
  sourcePath: string;
  route: string;
  type: "roadmap" | "guide" | "template";
};

export type CourseMetaFile = {
  title?: string;
  shortName?: string;
  description?: string;
  icon?: CourseIconName;
  difficulty?: string;
  skills?: string[];
  prerequisites?: string;
  accent?: string;
  technologies?: string[];
};

export function coursesRoot() {
  return path.join(CONTENT_ROOT, "courses");
}

export function courseRoot(slug: string) {
  return path.join(coursesRoot(), slug);
}

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function readMeta(slug: string): CourseMetaFile {
  const file = path.join(courseRoot(slug), "course.json");
  if (!fs.existsSync(file)) return {};
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as CourseMetaFile;
  } catch {
    return {};
  }
}

export const listCourseSlugs = cache((): string[] => {
  const root = coursesRoot();
  if (!fs.existsSync(root)) return [];
  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
    .map((entry) => entry.name)
    .sort();
});

export function loadCourseDefinition(slug: string): CourseDefinition {
  const meta = readMeta(slug);
  const name = meta.shortName || meta.title || titleFromSlug(slug);
  const icon = meta.icon ?? COURSE_ICON_BY_SLUG[slug] ?? "odoo";
  return {
    slug,
    title: meta.title || name,
    sourcePath: `content/courses/${slug}/README.md`,
    route: `/courses/${slug}`,
    type: "roadmap",
    shortName: name,
    icon,
    description: meta.description || `${name} course.`,
    difficulty: meta.difficulty || "",
    skills: meta.skills ?? [],
    prerequisites: meta.prerequisites || "",
    projectPrefix: slug,
    projectSourcePath: "",
    accent: meta.accent || "#2F5D8A",
    technologies: meta.technologies,
    treeCourse: true,
  };
}

export const getCourseCatalog = cache((): CourseDefinition[] => listCourseSlugs().map(loadCourseDefinition));

/** @deprecated use getCourseCatalog() */
export const courseCatalog = {
  get length() {
    return getCourseCatalog().length;
  },
  map: <T>(fn: (course: CourseDefinition, index: number, array: CourseDefinition[]) => T) => getCourseCatalog().map(fn),
  find: (fn: (course: CourseDefinition, index: number, array: CourseDefinition[]) => unknown) => getCourseCatalog().find(fn),
  flatMap: <T>(fn: (course: CourseDefinition, index: number, array: CourseDefinition[]) => T | T[]) => getCourseCatalog().flatMap(fn),
  filter: (fn: (course: CourseDefinition, index: number, array: CourseDefinition[]) => unknown) => getCourseCatalog().filter(fn),
  some: (fn: (course: CourseDefinition, index: number, array: CourseDefinition[]) => unknown) => getCourseCatalog().some(fn),
  [Symbol.iterator]() {
    return getCourseCatalog()[Symbol.iterator]();
  },
};

export const guideRegistry: ContentEntry[] = [];

export const templateRegistry: ContentEntry[] = [
  { slug: "master-cv-template", title: "Master CV Template", sourcePath: "content/templates/Master_CV_Template.md", route: "/cv-template", type: "template" },
];

export const getContentRegistry = cache((): ContentEntry[] => [...getCourseCatalog(), ...guideRegistry, ...templateRegistry]);

export const contentRegistry = {
  map: <T>(fn: (entry: ContentEntry, index: number, array: ContentEntry[]) => T) => getContentRegistry().map(fn),
  [Symbol.iterator]() {
    return getContentRegistry()[Symbol.iterator]();
  },
};

export const roadmapRegistry = courseCatalog;

export function catalogBySlug(): Record<string, CourseDefinition> {
  return Object.fromEntries(getCourseCatalog().map((course) => [course.slug, course]));
}

export function contentBySlug(): Record<string, ContentEntry> {
  return Object.fromEntries(getContentRegistry().map((entry) => [entry.slug, entry]));
}

export function courseBarLabels(): Record<string, string> {
  return Object.fromEntries(getCourseCatalog().map((course) => [course.slug, course.shortName]));
}

export { retiredCourseSlugs } from "./retired-courses";
