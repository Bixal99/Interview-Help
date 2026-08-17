import "server-only";
import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import { courseCatalog, type CourseDefinition } from "./course-catalog";
import { extractHeadings, stripMarkdown, type Heading } from "./content-utils";

export type Course = CourseDefinition & {
  title: string;
  markdown: string;
  headings: Heading[];
  phases: Heading[];
  topics: Heading[];
  wordCount: number;
  estimatedHours: number;
};

export const readMarkdown = cache((file: string) => {
  const fullPath = path.join(/* turbopackIgnore: true */ process.cwd(), file);
  if (!fs.existsSync(fullPath)) throw new Error(`Missing Markdown source: ${file}`);
  return fs.readFileSync(fullPath, "utf8");
});

export const getCourse = cache((slug: string): Course | null => {
  const definition = courseCatalog.find((item) => item.slug === slug);
  if (!definition) return null;
  const markdown = readMarkdown(definition.file);
  const headings = extractHeadings(markdown);
  const title = headings[0]?.text.replace(/^The Zero-to-Hero\s+/i, "") ?? definition.shortName;
  const phases = headings.filter((heading) => heading.phase !== undefined);
  const topics = headings.filter((heading) => heading.depth === 2 && heading.phase === undefined);
  const wordCount = stripMarkdown(markdown).split(/\s+/).filter(Boolean).length;
  return { ...definition, title, markdown, headings, phases, topics, wordCount, estimatedHours: Math.max(1, Math.round(wordCount / 180 / 2)) };
});

export const getCourses = cache(() => courseCatalog.map((course) => getCourse(course.slug)!).filter(Boolean));

export function getDocument(file: string) {
  const markdown = readMarkdown(file);
  const headings = extractHeadings(markdown);
  return { markdown, headings, title: headings[0]?.text ?? file.replace(/\.md$/i, "") };
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
  for (const [file, route, label] of [["Projects.md", "/projects", "Projects"], ["Interview.md", "/interview", "Interview"]] as const) {
    const doc = getDocument(file);
    const lines = doc.markdown.split(/\r?\n/);
    const searchableHeadings = doc.headings.filter((item) => item.depth <= 4 && item.text);
    for (const [index, heading] of searchableHeadings.entries()) {
      const nextLine = searchableHeadings[index + 1]?.line ?? lines.length + 1;
      const section = lines.slice(heading.line, nextLine - 1).join("\n");
      entries.push({ id: `${file}:${heading.id}:${heading.line}`, title: heading.text, course: label, type: label, href: `${route}#${heading.id}`, excerpt: stripMarkdown(section).slice(0, 220), searchText: sectionSearchText(section) });
    }
  }
  return entries;
});
