import fs from "node:fs";
import { cache } from "react";
import {
  catalogBySlug,
  contentBySlug,
  courseBarLabels,
  getContentRegistry,
  getCourseCatalog,
  type CourseDefinition,
} from "./course-catalog";
import { extractHeadings, stripMarkdown, type Heading } from "./content-utils";
import { chaptersFor } from "./learning-paths";
import type { ChapterRequirementLookup, ParsedCourse, SearchHit } from "./learning-model";
import { firstLessonHref, firstPhaseHref, writtenProgressCounts, type CourseNav } from "./navigation";
import { lessonPath, projectPathFor } from "./course-routes";
import { parseProjectBrief } from "./parse-project-brief";
import { lookupFromCourses } from "./progress-lookup";
import { projectPath } from "./paths";
import {
  buildParsedCourse,
  getChapterContentView,
  getCheckpointView,
  getCourseDocView,
  getCourseSearchHits,
  listCourseDocs,
  listLinearStops,
  neighborsForStop,
  resolveUnitForChapter,
} from "./course-tree";
import { existsOnDisk, getCourseRoadmap } from "./course-roadmap";
import { glossaryPath, buildUnitGlossary } from "./unit-glossary";

export type CourseSummary = CourseDefinition & {
  title: string;
  barLabel: string;
  phaseCount: number;
  chapterCount: number;
  lessonCount: number;
};

export type Course = CourseDefinition & ParsedCourse & {
  headings: Heading[];
  wordCount: number;
};

export const readMarkdown = cache((sourcePath: string) => {
  const fullPath = projectPath(sourcePath);
  if (!fs.existsSync(fullPath)) throw new Error(`Missing Markdown source: ${sourcePath}`);
  return fs.readFileSync(fullPath, "utf8");
});

export const getAllProjects = cache(() =>
  getCourseCatalog().flatMap((course) => {
    const parsed = getParsedCourse(course.slug);
    if (!parsed) return [];
    return parsed.phases.filter((phase) => phase.project).map((phase) => phase.project!);
  }),
);

export const getParsedCourse = cache((slug: string) => {
  const definition = getCourseCatalog().find((item) => item.slug === slug);
  if (!definition) return null;
  const parsed = buildParsedCourse(slug);
  return { ...definition, ...parsed, sourcePath: definition.sourcePath };
});

export const getCourse = cache((slug: string): Course | null => {
  const parsed = getParsedCourse(slug);
  if (!parsed) return null;
  const markdown = fs.existsSync(projectPath(parsed.sourcePath))
    ? readMarkdown(parsed.sourcePath)
    : parsed.introMarkdown;
  const headings = extractHeadings(markdown);
  const wordCount = stripMarkdown(markdown).split(/\s+/).filter(Boolean).length;
  return { ...parsed, headings, wordCount };
});

export const getCourses = cache(() => getCourseCatalog().map((course) => getParsedCourse(course.slug)!).filter(Boolean));

export const getCourseSummaries = cache((): CourseSummary[] => {
  const bySlug = catalogBySlug();
  const labels = courseBarLabels();
  return getCourses().map((course) => {
    const nav = toCourseNav(course);
    const written = writtenProgressCounts(nav);
    const phaseCount = nav.chapters.reduce(
      (sum, chapter) => sum + chapter.phases.filter((phase) => phase.onDisk).length,
      0,
    );
    return {
      ...bySlug[course.slug],
      title: course.title,
      barLabel: labels[course.slug] ?? course.shortName,
      phaseCount,
      chapterCount: phaseCount,
      lessonCount: written.lessonCount,
    };
  });
});

export function getDocument(slug: string) {
  const entry = contentBySlug()[slug];
  if (!entry) throw new Error(`Unknown content entry: ${slug}`);
  const markdown = readMarkdown(entry.sourcePath);
  const headings = extractHeadings(markdown);
  return { ...entry, markdown, headings, title: headings[0]?.text ?? entry.title };
}

export function getRepositoryReadme() {
  const sourcePath = "README.md";
  const markdown = readMarkdown(sourcePath);
  const headings = extractHeadings(markdown);
  return { sourcePath, markdown, headings, title: headings[0]?.text ?? "Quarry" };
}

export const getCourseChapters = cache((slug: string) => {
  const course = getParsedCourse(slug);
  if (!course) return [];
  return chaptersFor(slug, course.phases.map((phase) => phase.id), course.units);
});

export const getProgressLookup = cache(() => lookupFromCourses(getCourses()));

export const getChapterRequirements = cache((): ChapterRequirementLookup =>
  Object.fromEntries(getCourses().map((course) => [
    course.slug,
    Object.fromEntries(course.phases.map((phase) => [phase.id, {
      lessons: phase.lessons
        .filter((lesson) => lesson.kind === "lesson" && lesson.slug !== "resources")
        .map((lesson) => ({ id: lesson.id, href: lessonPath(course.slug, phase.id, lesson) })),
      projectRequired: Boolean(phase.project),
      projectHref: phase.project ? projectPathFor(course.slug, phase.id) : undefined,
    }])),
  ])),
);

export function toCourseNav(course: NonNullable<ReturnType<typeof getParsedCourse>>): CourseNav {
  const chapters = chaptersFor(course.slug, course.phases.map((phase) => phase.id), course.units);
  const phaseMap = Object.fromEntries(course.phases.map((phase) => [phase.id, phase]));
  const docs = listCourseDocs(course.slug);
  return {
    slug: course.slug,
    shortName: course.shortName,
    title: course.title,
    description: course.description,
    sourcePath: course.sourcePath,
    chapters: chapters.map((chapter) => {
      const unitNumber = Number(/^unit-(\d+)$/i.exec(chapter.id)?.[1]);
      const unitExercise = Number.isFinite(unitNumber)
        ? docs.find((doc) => doc.kind === "unit-exercise" && doc.unit === unitNumber)
        : undefined;
      const unitProject = Number.isFinite(unitNumber)
        ? docs.find((doc) => doc.kind === "unit-project" && doc.unit === unitNumber)
        : undefined;
      return {
        id: chapter.id,
        title: chapter.title,
        summary: chapter.summary,
        unitExerciseHref: unitExercise?.href,
        unitExerciseTitle: unitExercise?.title,
        unitProjectHref: unitProject?.href,
        unitProjectTitle: unitProject?.title,
        phases: chapter.phaseIds.flatMap((id) => {
          const phase = phaseMap[id];
          if (!phase) return [];
          const unit = Number.isFinite(unitNumber) ? unitNumber : Number(id);
          const onDisk = existsOnDisk(course.slug, unit, Number(phase.id));
          const exercise = phase.lessons.find((lesson) => lesson.slug === "exercise");
          return [{
            id: phase.id,
            number: phase.number,
            title: phase.title,
            goal: phase.goal,
            unit,
            onDisk,
            hasProject: Boolean(phase.project),
            hasExercise: Boolean(exercise),
            exerciseTitle: exercise?.title,
            projectTitle: phase.project ? parseProjectBrief(phase.project.markdown).title || phase.project.title : undefined,
            projectKind: phase.project ? parseProjectBrief(phase.project.markdown).kind : undefined,
            lessons: phase.lessons.map((lesson) => ({
              id: lesson.id,
              slug: lesson.slug,
              kind: lesson.kind,
              title: lesson.title,
              children: lesson.children,
            })),
          }];
        }),
      };
    }),
  };
}

export const getCourseNav = cache((slug: string) => {
  const course = getParsedCourse(slug);
  return course ? toCourseNav(course) : null;
});

export function getCourseHome(slug: string) {
  const course = getParsedCourse(slug);
  if (!course) return null;
  const first = listLinearStops(slug).find((stop) => stop.kind === "checkpoint");
  return {
    ...course,
    nav: toCourseNav(course),
    startHref: first?.href ?? `/courses/${slug}`,
  };
}

export const getPathStarts = cache(() =>
  getCourseCatalog().map((course) => {
    const first = listLinearStops(course.slug).find((stop) => stop.kind === "checkpoint");
    return {
      id: `${course.slug}-path`,
      title: course.shortName,
      href: first?.href ?? `/courses/${course.slug}`,
      course: course.slug,
      phaseId: first?.chapter ? String(first.chapter) : "1",
    };
  }),
);

export const getAllLessonParams = cache(() =>
  getCourses().flatMap((course) =>
    listCourseDocs(course.slug)
      .filter((doc) => doc.kind === "chapter-content" || doc.kind === "chapter-exercise" || doc.kind === "chapter-project" || doc.kind === "chapter-resources")
      .map((doc) => ({
        course: course.slug,
        unit: String(doc.unit),
        chapter: String(doc.chapter),
        lesson: doc.kind.replace("chapter-", ""),
      })),
  ),
);

export const getAllPhaseParams = cache(() =>
  getCourses().flatMap((course) =>
    course.phases
      .filter((phase) => {
        const unit = resolveUnitForChapter(course.slug, Number(phase.id));
        return unit != null && existsOnDisk(course.slug, unit, Number(phase.id));
      })
      .map((phase) => ({ course: course.slug, phase: phase.id })),
  ),
);

export const getAllProjectParams = cache(() =>
  getCourses().flatMap((course) =>
    course.phases.filter((phase) => phase.project).map((phase) => ({ course: course.slug, phase: phase.id })),
  ),
);

export const getAllGlossaryParams = cache(() =>
  getCourses().flatMap((course) => {
    const chapters = chaptersFor(course.slug, course.phases.map((phase) => phase.id), course.units);
    return chapters.map((chapter) => ({ course: course.slug, unit: chapter.id }));
  }),
);

export function getGlossaryView(slug: string, unitId: string) {
  const course = getParsedCourse(slug);
  if (!course) return null;
  const chapters = chaptersFor(course.slug, course.phases.map((phase) => phase.id), course.units);
  const chapter = chapters.find((item) => item.id === unitId);
  if (!chapter) return null;
  return {
    course: { slug: course.slug, shortName: course.shortName },
    nav: toCourseNav(course),
    chapter,
    sections: buildUnitGlossary(course, chapter),
    prev: null,
    next: null,
    href: glossaryPath(slug, unitId),
  };
}

export const getSearchIndex = cache((): SearchHit[] =>
  getCourseCatalog().flatMap((course) => getCourseSearchHits(course.slug)),
);

export type SearchEntry = SearchHit;

export function getTocView(slug: string) {
  const course = getParsedCourse(slug);
  const roadmap = getCourseRoadmap(slug);
  if (!course) return null;
  const neighbors = neighborsForStop(slug, `/courses/${slug}`);
  const existingChapters = roadmap.units.flatMap((unit) =>
    unit.chapters
      .filter((chapter) => existsOnDisk(slug, unit.number, chapter.number))
      .map((chapter) => `${unit.number}:${chapter.number}`),
  );
  return {
    course,
    nav: toCourseNav(course),
    roadmap,
    existingChapters,
    sourcePath: `content/courses/${slug}/Table of Content/Roadmap.md`,
    prev: neighbors.prev,
    next: neighbors.next,
  };
}

export {
  firstLessonHref,
  firstPhaseHref,
  getChapterContentView,
  getCheckpointView,
  getContentRegistry,
  getCourseCatalog,
  getCourseDocView,
  getCourseRoadmap,
  listCourseDocs,
  listLinearStops,
  neighborsForStop,
  resolveUnitForChapter,
};
