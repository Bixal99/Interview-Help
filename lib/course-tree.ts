import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import { courseRoot, loadCourseDefinition } from "./course-catalog";
import {
  allChapters,
  existsOnDisk,
  findRoadmapChapter,
  getCourseRoadmap,
  placeholderChapterMarkdown,
  roadmapRelPath,
  unitForChapter,
  unitsAsChapters,
} from "./course-roadmap";
import { extractHeadings, stripMarkdown } from "./content-utils";
import type { BeginnerIntro, Lesson, LessonChild, ParsedCourse, Phase, SearchHit } from "./learning-model";
import { PROJECT_ROOT } from "./paths";
import { courseHomePath, unitChapterPath, unitDocPath } from "./course-routes";
import { isPromptSolutionKind, splitPromptAndSolution } from "./split-prompt-solution";

export type CourseDocKind =
  | "toc"
  | "chapter-content"
  | "chapter-exercise"
  | "chapter-project"
  | "chapter-resources"
  | "unit-summary"
  | "unit-exercise"
  | "unit-project";

export type CourseDoc = {
  kind: CourseDocKind;
  sourcePath: string;
  href: string;
  title: string;
  unit?: number;
  chapter?: number;
};

export type LinearStopKind =
  | "toc"
  | "checkpoint"
  | CourseDocKind
  | "chapter-exercise-solution"
  | "chapter-project-solution"
  | "unit-exercise-solution"
  | "unit-project-solution";

export type LinearStop = {
  kind: LinearStopKind;
  href: string;
  title: string;
  unit?: number;
  chapter?: number;
  sourcePath?: string;
};

function rel(slug: string, ...parts: string[]) {
  return path.posix.join("content", "courses", slug, ...parts.map((part) => part.replace(/\\/g, "/")));
}

function firstHeading(markdown: string, fallback: string) {
  const heading = extractHeadings(markdown).find((item) => item.depth <= 2);
  return heading?.text ?? fallback;
}

function unitDirs(slug: string): { unit: number; dirName: string }[] {
  const root = courseRoot(slug);
  if (!fs.existsSync(root)) return [];
  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^Unit\s+\d+$/i.test(entry.name))
    .map((entry) => ({ unit: Number(/^Unit\s+(\d+)$/i.exec(entry.name)![1]), dirName: entry.name }))
    .sort((a, b) => a.unit - b.unit);
}

function chapterDirs(slug: string, unitDirName: string): { chapter: number; dirName: string }[] {
  const unitPath = path.join(courseRoot(slug), unitDirName);
  return fs
    .readdirSync(unitPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^Chapter\s+\d+$/i.test(entry.name))
    .map((entry) => ({ chapter: Number(/^Chapter\s+(\d+)$/i.exec(entry.name)![1]), dirName: entry.name }))
    .sort((a, b) => a.chapter - b.chapter);
}

export const readCourseSource = cache((sourcePath: string) => {
  const fullPath = path.join(PROJECT_ROOT, ...sourcePath.replace(/\\/g, "/").split("/"));
  if (!fs.existsSync(fullPath)) throw new Error(`Missing Markdown source: ${sourcePath}`);
  return fs.readFileSync(fullPath, "utf8");
});

export const listCourseDocs = cache((slug: string): CourseDoc[] => {
  const docs: CourseDoc[] = [];
  const roadmap = rel(slug, "Table of Content", "Roadmap.md");
  if (fs.existsSync(path.join(PROJECT_ROOT, roadmap))) {
    docs.push({ kind: "toc", sourcePath: roadmap, href: courseHomePath(slug), title: "Table of Contents" });
  }

  for (const { unit, dirName: unitDir } of unitDirs(slug)) {
    for (const { chapter, dirName: chapterDir } of chapterDirs(slug, unitDir)) {
      const files: { file: string; kind: CourseDocKind; href: string; title: string }[] = [
        { file: "Content.md", kind: "chapter-content", href: unitChapterPath(slug, unit, chapter, "content"), title: `Chapter ${chapter}` },
        { file: "Exercise.md", kind: "chapter-exercise", href: unitChapterPath(slug, unit, chapter, "exercise"), title: `Chapter ${chapter} Exercise` },
        { file: "Project.md", kind: "chapter-project", href: unitChapterPath(slug, unit, chapter, "project"), title: `Chapter ${chapter} Project` },
        { file: "Resources.md", kind: "chapter-resources", href: unitChapterPath(slug, unit, chapter, "resources"), title: `Chapter ${chapter} Resources` },
      ];
      for (const item of files) {
        const sourcePath = rel(slug, unitDir, chapterDir, item.file);
        if (!fs.existsSync(path.join(PROJECT_ROOT, sourcePath))) continue;
        docs.push({ kind: item.kind, sourcePath, href: item.href, title: item.title, unit, chapter });
      }
    }

    const summary = rel(slug, unitDir, "Conclusion", "Summary.md");
    if (fs.existsSync(path.join(PROJECT_ROOT, summary))) {
      docs.push({ kind: "unit-summary", sourcePath: summary, href: unitDocPath(slug, unit, "summary"), title: `Unit ${unit} Summary`, unit });
    }
    const unitExercise = rel(slug, unitDir, "Exercise", "Exercise.md");
    if (fs.existsSync(path.join(PROJECT_ROOT, unitExercise))) {
      docs.push({ kind: "unit-exercise", sourcePath: unitExercise, href: unitDocPath(slug, unit, "exercise"), title: `Unit ${unit} Exercise`, unit });
    }
    const unitProject = rel(slug, unitDir, "Project", "Project.md");
    if (fs.existsSync(path.join(PROJECT_ROOT, unitProject))) {
      docs.push({ kind: "unit-project", sourcePath: unitProject, href: unitDocPath(slug, unit, "project"), title: `Unit ${unit} Project`, unit });
    }
  }
  return docs;
});

function pushPromptAndSolution(stops: LinearStop[], doc: CourseDoc, solutionKind: LinearStopKind) {
  stops.push(doc);
  stops.push({
    kind: solutionKind,
    href: `${doc.href}/solution`,
    title: `${doc.title} Solution`,
    unit: doc.unit,
    chapter: doc.chapter,
    sourcePath: doc.sourcePath,
  });
}

export const listLinearStops = cache((slug: string): LinearStop[] => {
  const stops: LinearStop[] = [{ kind: "toc", href: courseHomePath(slug), title: "Table of Contents" }];
  const docs = listCourseDocs(slug);
  const roadmap = getCourseRoadmap(slug);

  for (const unit of roadmap.units) {
    for (const chapter of unit.chapters) {
      if (!existsOnDisk(slug, unit.number, chapter.number)) continue;
      stops.push({
        kind: "checkpoint",
        href: unitChapterPath(slug, unit.number, chapter.number),
        title: `Chapter ${chapter.number}`,
        unit: unit.number,
        chapter: chapter.number,
      });
      const content = docs.find((doc) => doc.kind === "chapter-content" && doc.chapter === chapter.number);
      if (content) stops.push(content);
      const exercise = docs.find((doc) => doc.kind === "chapter-exercise" && doc.chapter === chapter.number);
      if (exercise) pushPromptAndSolution(stops, exercise, "chapter-exercise-solution");
      const project = docs.find((doc) => doc.kind === "chapter-project" && doc.chapter === chapter.number);
      if (project) pushPromptAndSolution(stops, project, "chapter-project-solution");
    }

    const summary = docs.find((doc) => doc.kind === "unit-summary" && doc.unit === unit.number);
    if (summary) stops.push(summary);
    const unitExercise = docs.find((doc) => doc.kind === "unit-exercise" && doc.unit === unit.number);
    if (unitExercise) pushPromptAndSolution(stops, unitExercise, "unit-exercise-solution");
    const unitProject = docs.find((doc) => doc.kind === "unit-project" && doc.unit === unit.number);
    if (unitProject) pushPromptAndSolution(stops, unitProject, "unit-project-solution");
  }

  return stops;
});

function proceedLabel(next: LinearStop): string {
  switch (next.kind) {
    case "checkpoint":
      return "Proceed";
    case "chapter-content":
      return "Proceed";
    case "chapter-exercise":
      return "Start Chapter Exercise";
    case "chapter-exercise-solution":
    case "chapter-project-solution":
    case "unit-exercise-solution":
    case "unit-project-solution":
      return "Solution";
    case "chapter-project":
      return "Start Chapter Project";
    case "unit-exercise":
      return "Start Unit Exercise";
    case "unit-project":
      return "Start Unit Project";
    default:
      return next.title;
  }
}

export function neighborsForStop(slug: string, href: string) {
  const stops = listLinearStops(slug);
  const index = stops.findIndex((stop) => stop.href === href);
  const prev = index > 0 ? stops[index - 1] : null;
  const next = index >= 0 && index < stops.length - 1 ? stops[index + 1] : null;
  return {
    prev: prev ? { href: prev.href, label: prev.title } : { href: "/courses", label: "Courses" },
    next: next ? { href: next.href, label: proceedLabel(next) } : null,
  };
}

export function getCourseDoc(slug: string, href: string): CourseDoc | null {
  return listCourseDocs(slug).find((doc) => doc.href === href) ?? null;
}

export function getCourseDocView(slug: string, href: string) {
  const isSolution = href.endsWith("/solution");
  const baseHref = href.replace(/\/solution$/, "");
  const doc = getCourseDoc(slug, baseHref);
  if (!doc) return null;
  const source = readCourseSource(doc.sourcePath);
  const { prev, next } = neighborsForStop(slug, href);
  if (isPromptSolutionKind(doc.kind)) {
    const split = splitPromptAndSolution(source);
    const markdown = isSolution ? [split.prompt, split.solution].filter(Boolean).join("\n\n") : split.prompt;
    return {
      ...doc,
      href,
      title: firstHeading(markdown, isSolution ? `${doc.title} Solution` : doc.title),
      markdown,
      headings: extractHeadings(markdown),
      prev,
      next,
      comingSoon: false as const,
      isSolution,
    };
  }
  return {
    ...doc,
    title: firstHeading(source, doc.title),
    markdown: source,
    headings: extractHeadings(source),
    prev,
    next,
    comingSoon: false as const,
    isSolution: false,
  };
}

function lessonFromFile(id: string, slug: string, title: string, sourcePath: string, children: LessonChild[] = []): Lesson {
  const markdown = readCourseSource(sourcePath);
  return {
    id,
    slug,
    aliases: [],
    kind: "lesson",
    title: firstHeading(markdown, title),
    markdown,
    videos: [],
    codeExamples: [],
    children,
    sourcePath,
  };
}

function roadmapTopics(topics: { id: string; title: string; children?: { id: string; title: string }[] }[]): LessonChild[] {
  return topics.map((topic) => ({
    id: topic.id,
    title: topic.title,
    children: topic.children?.map((child) => ({ id: child.id, title: child.title })),
  }));
}

function topicChildrenFromContent(markdown: string, fallback: LessonChild[]): LessonChild[] {
  const headings = extractHeadings(markdown).filter((heading) => /^\d+\.\d+/.test(heading.text));
  const tops: LessonChild[] = [];
  for (const heading of headings) {
    const nested = /^(\d+\.\d+\.\d+)\s+(.*)$/.exec(heading.text);
    if (nested) {
      const child = { id: nested[1], title: nested[2].trim() };
      const parent = [...tops].reverse().find((topic) => child.id.startsWith(`${topic.id}.`));
      if (parent) {
        parent.children = parent.children ?? [];
        parent.children.push(child);
      } else {
        tops.push(child);
      }
      continue;
    }
    const top = /^(\d+\.\d+)\s+(.*)$/.exec(heading.text);
    if (top && heading.depth <= 2) {
      tops.push({ id: top[1], title: top[2].trim(), children: [] });
    }
  }
  if (!tops.length) return fallback;
  return tops.map((topic) => ({
    ...topic,
    children: topic.children?.length ? topic.children : fallback.find((item) => item.id === topic.id)?.children,
  }));
}

function beginnerIntroFromHome(markdown: string, description: string): BeginnerIntro {
  const about = markdown.split(/^## ABOUT\s*$/im)[1]?.split(/^## /m)[0] ?? "";
  const paragraphs = about
    .split(/\n\n+/)
    .map((block) => stripMarkdown(block).trim())
    .filter((block) => block.length > 40)
    .slice(0, 3);
  return {
    heading: "Welcome",
    paragraphs: paragraphs.length ? paragraphs : [description],
    closingParagraphs: [],
    everydayTerms: [],
    terms: [],
  };
}

export const buildParsedCourse = cache((slug: string): ParsedCourse => {
  const definition = loadCourseDefinition(slug);
  const roadmap = getCourseRoadmap(slug);
  const roadmapSource = roadmapRelPath(slug);
  const phases: Phase[] = [];

  for (const chapterMeta of allChapters(slug)) {
    const chapter = chapterMeta.number;
    const unit = unitForChapter(slug, chapter);
    const contentPath = rel(slug, `Unit ${unit}`, `Chapter ${chapter}`, "Content.md");
    const onDisk = existsOnDisk(slug, unit, chapter);
    const phaseTitle = `CHAPTER ${chapter}: ${chapterMeta.title}`;
    const found = findRoadmapChapter(slug, chapter);
    const track = found ? `UNIT ${found.unit.roman}: ${found.unit.title}` : `Unit ${unit}`;

    if (onDisk) {
      const contentMd = readCourseSource(contentPath);
      const contentLesson = lessonFromFile(
        `${chapter}.1`,
        "content",
        chapterMeta.title,
        contentPath,
        topicChildrenFromContent(contentMd, roadmapTopics(chapterMeta.topics)),
      );
      contentLesson.title = chapterMeta.title;
      const lessons: Lesson[] = [contentLesson];
      const exercisePath = rel(slug, `Unit ${unit}`, `Chapter ${chapter}`, "Exercise.md");
      if (fs.existsSync(path.join(PROJECT_ROOT, exercisePath))) {
        lessons.push(lessonFromFile(`${chapter}.2`, "exercise", `Chapter ${chapter} Exercise`, exercisePath));
      }
      const projectFile = rel(slug, `Unit ${unit}`, `Chapter ${chapter}`, "Project.md");
      let project: Phase["project"];
      if (fs.existsSync(path.join(PROJECT_ROOT, projectFile))) {
        const projectMd = readCourseSource(projectFile);
        project = {
          id: `project:${slug}:${chapter}`,
          coursePrefix: slug,
          phaseId: String(chapter),
          title: firstHeading(projectMd, `Chapter ${chapter} Project`),
          markdown: projectMd,
          sourcePath: projectFile,
        };
      }
      phases.push({
        id: String(chapter),
        number: String(chapter),
        title: phaseTitle,
        anchorIds: [`phase-${chapter}`, `chapter-${chapter}`],
        overview: stripMarkdown(contentMd).slice(0, 400),
        goal: undefined,
        track,
        lessons,
        project,
        sourcePath: contentPath,
      });
      continue;
    }

    const placeholder = placeholderChapterMarkdown(slug, chapter);
    phases.push({
      id: String(chapter),
      number: String(chapter),
      title: phaseTitle,
      anchorIds: [`phase-${chapter}`, `chapter-${chapter}`],
      overview: "This chapter is on the roadmap; Content.md is not written yet.",
      goal: undefined,
      track,
      lessons: [
        {
          id: `${chapter}.1`,
          slug: "content",
          aliases: [],
          kind: "lesson",
          title: phaseTitle,
          markdown: placeholder,
          videos: [],
          codeExamples: [],
          children: roadmapTopics(chapterMeta.topics),
          sourcePath: roadmapSource,
        },
      ],
      sourcePath: roadmapSource,
    });
  }

  const readmePath = rel(slug, "README.md");
  const home = fs.existsSync(path.join(PROJECT_ROOT, readmePath))
    ? readCourseSource(readmePath)
    : roadmap.introMarkdown;

  return {
    slug,
    title: firstHeading(home, roadmap.title || definition.title),
    introMarkdown: home,
    teaserMarkdown: "",
    beginnerIntro: beginnerIntroFromHome(home, definition.description),
    phases,
    units: unitsAsChapters(slug),
  };
});

export const getCourseSearchHits = cache((slug: string): SearchHit[] => {
  const definition = loadCourseDefinition(slug);
  return listCourseDocs(slug).map((doc) => {
    const markdown = readCourseSource(doc.sourcePath);
    return {
      id: `${slug}:${doc.href}`,
      title: firstHeading(markdown, doc.title),
      course: definition.shortName,
      type: doc.kind === "toc" ? "course" : doc.kind.includes("project") ? "project" : "lesson",
      href: doc.href,
      excerpt: stripMarkdown(markdown).slice(0, 220),
      searchText: stripMarkdown(markdown).slice(0, 4000),
      phase: doc.chapter ? `Chapter ${doc.chapter}` : doc.unit ? `Unit ${doc.unit}` : undefined,
    };
  });
});

export function resolveUnitForChapter(slug: string, chapter: number): number | null {
  const onDiskUnit = unitDirs(slug).find(({ dirName }) =>
    chapterDirs(slug, dirName).some((item) => item.chapter === chapter),
  );
  if (onDiskUnit) return onDiskUnit.unit;
  const found = findRoadmapChapter(slug, chapter);
  return found ? found.unit.number : unitForChapter(slug, chapter);
}

export function getChapterContentView(slug: string, unit: number, chapter: number) {
  const href = unitChapterPath(slug, unit, chapter, "content");
  const disk = getCourseDocView(slug, href);
  if (disk) return disk;

  if (unitForChapter(slug, chapter) !== unit) return null;
  const found = findRoadmapChapter(slug, chapter);
  if (!found) return null;
  const markdown = placeholderChapterMarkdown(slug, chapter);
  const { prev, next } = neighborsForStop(slug, href);
  return {
    kind: "chapter-content" as const,
    sourcePath: roadmapRelPath(slug),
    href,
    title: `CHAPTER ${chapter}: ${found.chapter.title}`,
    unit,
    chapter,
    markdown,
    headings: extractHeadings(markdown),
    prev,
    next,
    comingSoon: true as const,
  };
}

export function getCheckpointView(slug: string, unit: number, chapter: number) {
  const found = findRoadmapChapter(slug, chapter);
  if (!found || found.unit.number !== unit) {
    if (unitForChapter(slug, chapter) !== unit) return null;
  }
  const href = unitChapterPath(slug, unit, chapter);
  const meta = found ?? findRoadmapChapter(slug, chapter);
  const { prev, next } = neighborsForStop(slug, href);
  return {
    slug,
    unit,
    chapter,
    phaseId: String(chapter),
    phaseNumber: String(chapter),
    phaseTitle: meta ? meta.chapter.title : `Chapter ${chapter}`,
    unitTitle: meta ? `UNIT ${meta.unit.roman}: ${meta.unit.title}` : `Unit ${unit}`,
    href,
    proceedHref: next?.href ?? unitChapterPath(slug, unit, chapter, "content"),
    prev,
    next,
  };
}
