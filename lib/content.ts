import "server-only";
import fs from "node:fs";
import { cache } from "react";
import { contentBySlug, courseCatalog, guideRegistry, type CourseDefinition } from "./course-catalog";
import { extractHeadings, stripMarkdown, type Heading } from "./content-utils";
import { projectPath } from "./paths";

export type Course = CourseDefinition & {
  title: string;
  markdown: string;
  headings: Heading[];
  phases: Heading[];
  topics: Heading[];
  wordCount: number;
  estimatedHours: number;
};

export const readMarkdown = cache((sourcePath: string) => {
  const fullPath = projectPath(sourcePath);
  if (!fs.existsSync(fullPath)) throw new Error(`Missing Markdown source: ${sourcePath}`);
  return fs.readFileSync(fullPath, "utf8");
});

export const getCourse = cache((slug: string): Course | null => {
  const definition = courseCatalog.find((item) => item.slug === slug);
  if (!definition) return null;
  const markdown = readMarkdown(definition.sourcePath);
  const headings = extractHeadings(markdown);
  const title = headings[0]?.text.replace(/^The Zero-to-Hero\s+/i, "") ?? definition.shortName;
  const phases = headings.filter((heading) => heading.phase !== undefined);
  const topics = headings.filter((heading) => heading.depth === 2 && heading.phase === undefined);
  const wordCount = stripMarkdown(markdown).split(/\s+/).filter(Boolean).length;
  return { ...definition, title, markdown, headings, phases, topics, wordCount, estimatedHours: Math.max(1, Math.round(wordCount / 180 / 2)) };
});

export const getCourses = cache(() => courseCatalog.map((course) => getCourse(course.slug)!).filter(Boolean));

export function getDocument(slug: string) {
  const entry = contentBySlug[slug];
  if (!entry) throw new Error(`Unknown content entry: ${slug}`);
  const markdown = readMarkdown(entry.sourcePath);
  const headings = extractHeadings(markdown);
  return { ...entry, markdown, headings, title: headings[0]?.text ?? entry.title };
}

export function getRepositoryReadme() {
  const sourcePath = "README.md";
  const markdown = readMarkdown(sourcePath);
  const headings = extractHeadings(markdown);
  return { sourcePath, markdown, headings, title: headings[0]?.text ?? "Interview Help" };
}

export type SearchEntry = { id: string; title: string; course: string; type: string; href: string; excerpt: string; searchText: string };

function sectionSearchText(source: string) {
  return source
    .replace(/^```[^\r\n]*$/gm, " ")
    .replace(/!?(?:\[([^\]]*)\]\([^)]*\))/g, "$1")
    .replace(/[*_~`>#|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export const getSearchIndex = cache((): SearchEntry[] => {
  const entries: SearchEntry[] = [];
  for (const course of getCourses()) {
    const lines = course.markdown.split(/\r?\n/);
    const searchableHeadings = course.headings.filter((item) => item.depth <= 4 && item.text);
    for (const [index, heading] of searchableHeadings.entries()) {
      const nextLine = searchableHeadings[index + 1]?.line ?? lines.length + 1;
      const section = lines.slice(heading.line, nextLine - 1).join("\n");
      const searchText = sectionSearchText(section);
      const excerpt = stripMarkdown(section).slice(0, 220);
      entries.push({ id: `${course.slug}:${heading.id}:${heading.line}`, title: heading.text, course: course.shortName, type: heading.phase ? "Phase" : "Topic", href: `/courses/${course.slug}/learn#${heading.id}`, excerpt, searchText });
    }
  }
  for (const entry of guideRegistry) {
    const doc = getDocument(entry.slug);
    const lines = doc.markdown.split(/\r?\n/);
    const searchableHeadings = doc.headings.filter((item) => item.depth <= 4 && item.text);
    for (const [index, heading] of searchableHeadings.entries()) {
      const nextLine = searchableHeadings[index + 1]?.line ?? lines.length + 1;
      const section = lines.slice(heading.line, nextLine - 1).join("\n");
      entries.push({ id: `${entry.slug}:${heading.id}:${heading.line}`, title: heading.text, course: entry.title, type: entry.title, href: `${entry.route}#${heading.id}`, excerpt: stripMarkdown(section).slice(0, 220), searchText: sectionSearchText(section) });
    }
  }
  return entries;
});
