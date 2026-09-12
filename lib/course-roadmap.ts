import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import { courseRoot } from "./course-catalog";
import type { CourseChapter } from "./learning-model";
import { PROJECT_ROOT } from "./paths";

export type CourseRoadmapTopic = {
  id: string;
  title: string;
  children?: CourseRoadmapTopic[];
};

export type CourseRoadmapChapter = {
  number: number;
  title: string;
  topics: CourseRoadmapTopic[];
};

export type CourseRoadmapUnit = {
  number: number;
  roman: string;
  title: string;
  chapters: CourseRoadmapChapter[];
};

export type CourseRoadmap = {
  title: string;
  subtitle: string;
  introMarkdown: string;
  units: CourseRoadmapUnit[];
};

function romanToNumber(roman: string): number {
  const map: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const value = roman.toUpperCase();
  let total = 0;
  for (let i = 0; i < value.length; i++) {
    const current = map[value[i] ?? ""] ?? 0;
    const next = map[value[i + 1] ?? ""] ?? 0;
    total += current < next ? -current : current;
  }
  return total || 1;
}

function parseTopics(lines: string[], start: number, end: number): CourseRoadmapTopic[] {
  const topics: CourseRoadmapTopic[] = [];
  let current: CourseRoadmapTopic | null = null;

  for (let i = start; i < end; i++) {
    const line = lines[i] ?? "";
    const nested = /^  - (\d+\.\d+\.\d+)\s+(.+?)\s*$/.exec(line);
    if (nested) {
      const child = { id: nested[1], title: nested[2].trim() };
      if (current) {
        current.children = current.children ?? [];
        current.children.push(child);
      } else {
        topics.push(child);
      }
      continue;
    }
    const top = /^- (\d+\.\d+)\s+(.+?)\s*$/.exec(line);
    if (top) {
      current = { id: top[1], title: top[2].trim() };
      topics.push(current);
    }
  }
  return topics;
}

export function parseCourseRoadmapMarkdown(markdown: string, fallbackTitle = "Course"): CourseRoadmap {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const titleMatch = /^#\s+(.+?)\s*$/.exec(lines.find((line) => /^#\s+/.test(line)) ?? "");
  const title = titleMatch?.[1]?.trim() || fallbackTitle;

  const quoteLines: string[] = [];
  for (const line of lines) {
    if (/^##\s+UNIT\b/i.test(line)) break;
    if (/^>\s*/.test(line)) quoteLines.push(line.replace(/^>\s?/, "").trim());
  }
  const subtitle = quoteLines.filter(Boolean).join(" ").trim();

  const unitMarks: { index: number; roman: string; title: string; number: number }[] = [];
  const chapterMarks: { index: number; number: number; title: string; unitIndex: number }[] = [];

  for (let i = 0; i < lines.length; i++) {
    const unit = /^##\s+UNIT\s+([IVXLCDM]+)\s*:\s*(.+?)\s*$/i.exec(lines[i] ?? "");
    if (unit) {
      unitMarks.push({
        index: i,
        roman: unit[1].toUpperCase(),
        title: unit[2].trim(),
        number: romanToNumber(unit[1]),
      });
      continue;
    }
    const chapter = /^###\s+CHAPTER\s+(\d+)\s*:\s*(.+?)\s*$/i.exec(lines[i] ?? "");
    if (chapter) {
      const unitIndex = unitMarks.length - 1;
      if (unitIndex < 0) continue;
      chapterMarks.push({
        index: i,
        number: Number(chapter[1]),
        title: chapter[2].trim(),
        unitIndex,
      });
    }
  }

  const firstUnit = unitMarks[0]?.index ?? lines.length;
  const introMarkdown = lines.slice(0, firstUnit).join("\n").trim();

  const units: CourseRoadmapUnit[] = unitMarks.map((unit, unitPos) => {
    const chapters = chapterMarks
      .filter((chapter) => chapter.unitIndex === unitPos)
      .map((chapter, chapterPos, list) => {
        const nextChapter = list[chapterPos + 1];
        const nextUnit = unitMarks[unitPos + 1];
        const end = nextChapter?.index ?? nextUnit?.index ?? lines.length;
        return {
          number: chapter.number,
          title: chapter.title,
          topics: parseTopics(lines, chapter.index + 1, end),
        };
      });
    return {
      number: unit.number,
      roman: unit.roman,
      title: unit.title,
      chapters,
    };
  });

  return { title, subtitle, introMarkdown, units };
}

export function roadmapRelPath(slug: string) {
  return path.posix.join("content", "courses", slug, "Table of Content", "Roadmap.md");
}

export const getCourseRoadmap = cache((slug: string): CourseRoadmap => {
  const file = path.join(courseRoot(slug), "Table of Content", "Roadmap.md");
  if (!fs.existsSync(file)) {
    return { title: slug, subtitle: "", introMarkdown: "", units: [] };
  }
  return parseCourseRoadmapMarkdown(fs.readFileSync(file, "utf8"), slug);
});

export function allChapters(slug: string): CourseRoadmapChapter[] {
  return getCourseRoadmap(slug).units.flatMap((unit) => unit.chapters);
}

export function unitForChapter(slug: string, chapter: number): number {
  const n = Number(chapter);
  for (const unit of getCourseRoadmap(slug).units) {
    if (unit.chapters.some((item) => item.number === n)) return unit.number;
  }
  if (!Number.isFinite(n) || n < 1) return 1;
  return n;
}

export function findRoadmapChapter(slug: string, chapter: number) {
  for (const unit of getCourseRoadmap(slug).units) {
    const match = unit.chapters.find((item) => item.number === chapter);
    if (match) return { unit, chapter: match };
  }
  return null;
}

export function existsOnDisk(slug: string, unit: number, chapter: number): boolean {
  const contentPath = path.join(courseRoot(slug), `Unit ${unit}`, `Chapter ${chapter}`, "Content.md");
  return fs.existsSync(contentPath);
}

export function placeholderChapterMarkdown(slug: string, chapter: number): string {
  const found = findRoadmapChapter(slug, chapter);
  if (!found) {
    return [`# Chapter ${chapter}`, "", "This chapter is on the roadmap; Content.md is not written yet."].join("\n");
  }
  const { unit, chapter: ch } = found;
  const topicLines = ch.topics.flatMap((topic) => {
    const lines = [`- ${topic.id} ${topic.title}`];
    for (const child of topic.children ?? []) {
      lines.push(`  - ${child.id} ${child.title}`);
    }
    return lines;
  });
  return [
    `# UNIT ${unit.roman}: ${unit.title}`,
    "",
    `## CHAPTER ${ch.number}: ${ch.title}`,
    "",
    "This chapter is on the roadmap; Content.md is not written yet.",
    "",
    "### Topics from the roadmap",
    "",
    ...topicLines,
  ].join("\n");
}

export function unitsAsChapters(slug: string): CourseChapter[] {
  return getCourseRoadmap(slug).units.map((unit) => ({
    id: `unit-${unit.number}`,
    title: `UNIT ${unit.roman}: ${unit.title}`,
    summary: unit.title,
    phaseIds: unit.chapters.map((chapter) => String(chapter.number)),
  }));
}

export function contentFileExists(sourcePath: string) {
  return fs.existsSync(path.join(PROJECT_ROOT, ...sourcePath.replace(/\\/g, "/").split("/")));
}
