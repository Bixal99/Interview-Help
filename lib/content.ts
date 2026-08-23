import "server-only";
import fs from "node:fs";
import { cache } from "react";
import { catalogBySlug, contentBySlug, courseCatalog, courseBarLabels, guideRegistry, type CourseDefinition } from "./course-catalog";
import { extractHeadings, stripMarkdown, type Heading } from "./content-utils";
import { chaptersFor, learningPaths, pathForCourse, sequentialPath } from "./learning-paths";
import type { ChapterRequirementLookup, ParsedCourse, SearchHit } from "./learning-model";
import { coursePages, firstLessonHref, firstPhaseHref, neighborsFor, type CourseNav, type Neighbor } from "./navigation";
import { findLesson, findPhase, headingRouteMap, lessonPath, parseCourseMarkdown, phasePath, projectPathFor, withSourcePath } from "./parse-course";
import { attachProjects, parseProjectsDocument } from "./parse-projects";
import { parseProjectBrief } from "./parse-project-brief";
import { parseInterviewPlaybook } from "./parse-interview";
import type { ProjectStudioCourse } from "./studio-types";
import { extractCompleteCta } from "./complete-cta";
import { extractProjectNav, projectProceedLabel, projectReviewLabel } from "./lesson-sections";
import { extractPractice } from "./practice";
import { lookupFromCourses } from "./progress-lookup";
import { nextStep, previousStep } from "./progress-storage";
import { projectPath } from "./paths";
import { buildUnitGlossary, glossaryPath, stripLessonGlossaryTerms } from "./unit-glossary";

export type CourseSummary = CourseDefinition & {
  title: string;
  barLabel: string;
  phaseCount: number;
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
  courseCatalog.flatMap((course) => parseProjectsDocument(readMarkdown(course.projectSourcePath), course.projectSourcePath)),
);

export const getInterviewPlaybook = cache(() => parseInterviewPlaybook(readMarkdown("content/guides/Interview.md")));

export const getProjectStudio = cache((): ProjectStudioCourse[] => {
  return courseCatalog.flatMap((course) => {
    const parsed = getParsedCourse(course.slug);
    if (!parsed) return [];
    const units = chaptersFor(course.slug, parsed.phases.map((phase) => phase.id));
    const unitByPhase = new Map(units.flatMap((unit) => unit.phaseIds.map((phaseId) => [phaseId, unit] as const)));
    const items = parsed.phases.flatMap((phase) => {
      if (!phase.project) return [];
      const unit = unitByPhase.get(phase.id);
      if (!unit) return [];
      const brief = parseProjectBrief(phase.project.markdown);
      return [{
        id: phase.project.id,
        phaseId: phase.id,
        chapterNumber: phase.number,
        unitId: unit.id,
        unitTitle: unit.title,
        kind: brief.kind,
        title: brief.title || phase.project.title,
        intro: brief.intro,
        topic: brief.topic,
        tech: brief.tech.slice(0, 4),
        href: `/projects/${course.slug}/phase/${phase.id}`,
      }];
    });
    if (!items.length) return [];
    return [{
      slug: course.slug,
      shortName: course.shortName,
      barLabel: courseBarLabels[course.slug] ?? course.shortName,
      description: course.description,
      items,
    }];
  });
});

export const getParsedCourse = cache((slug: string) => {
  const definition = courseCatalog.find((item) => item.slug === slug);
  if (!definition) return null;
  const markdown = readMarkdown(definition.sourcePath);
  const parsed = parseCourseMarkdown(markdown, slug);
  parsed.phases = withSourcePath(parsed.phases, definition.sourcePath);
  attachProjects(slug, definition.projectPrefix, parsed.phases, getAllProjects());
  return { ...definition, ...parsed };
});

export const getCourse = cache((slug: string): Course | null => {
  const parsed = getParsedCourse(slug);
  if (!parsed) return null;
  const markdown = readMarkdown(parsed.sourcePath);
  const headings = extractHeadings(markdown);
  const wordCount = stripMarkdown(markdown).split(/\s+/).filter(Boolean).length;
  return { ...parsed, headings, wordCount };
});

export const getCourses = cache(() => courseCatalog.map((course) => getParsedCourse(course.slug)!).filter(Boolean));

export const getCourseSummaries = cache((): CourseSummary[] =>
  getCourses().map((course) => ({
    ...catalogBySlug[course.slug],
    title: course.title,
    barLabel: courseBarLabels[course.slug] ?? course.shortName,
    phaseCount: course.phases.length,
    lessonCount: course.phases.reduce((sum, phase) => sum + phase.lessons.length, 0),
  })),
);

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
  return { sourcePath, markdown, headings, title: headings[0]?.text ?? "Quarry" };
}

export const getCourseChapters = cache((slug: string) => {
  const course = getParsedCourse(slug);
  if (!course) return [];
  return chaptersFor(slug, course.phases.map((phase) => phase.id));
});

export const getProgressLookup = cache(() => lookupFromCourses(getCourses()));

export const getChapterRequirements = cache((): ChapterRequirementLookup =>
  Object.fromEntries(getCourses().map((course) => [
    course.slug,
    Object.fromEntries(course.phases.map((phase) => [phase.id, {
      lessons: phase.lessons
        .filter((lesson) => lesson.kind === "lesson")
        .map((lesson) => ({ id: lesson.id, href: lessonPath(course.slug, phase.id, lesson) })),
      projectRequired: Boolean(phase.project),
      projectHref: phase.project ? projectPathFor(course.slug, phase.id) : undefined,
    }])),
  ])),
);

export function toCourseNav(course: NonNullable<ReturnType<typeof getParsedCourse>>): CourseNav {
  const chapters = chaptersFor(course.slug, course.phases.map((phase) => phase.id));
  const phaseMap = Object.fromEntries(course.phases.map((phase) => [phase.id, phase]));
  return {
    slug: course.slug,
    shortName: course.shortName,
    title: course.title,
    description: course.description,
    sourcePath: course.sourcePath,
    chapters: chapters.map((chapter) => ({
      id: chapter.id,
      title: chapter.title,
      summary: chapter.summary,
      glossaryHref: glossaryPath(course.slug, chapter.id),
      phases: chapter.phaseIds.flatMap((id) => {
        const phase = phaseMap[id];
        if (!phase) return [];
        return [{
          id: phase.id,
          number: phase.number,
          title: phase.title,
          goal: phase.goal,
          hasProject: Boolean(phase.project),
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
    })),
  };
}

export const getCourseNav = cache((slug: string) => {
  const course = getParsedCourse(slug);
  return course ? toCourseNav(course) : null;
});

function nextAfterProject(course: NonNullable<ReturnType<typeof getParsedCourse>>, phaseId: string): Neighbor | null {
  const path = pathForCourse(course.slug);
  const following = path ? nextStep(path.steps, course.slug, phaseId) : undefined;
  if (!following) return null;
  const nextCourse = following.course === course.slug ? course : getParsedCourse(following.course);
  if (!nextCourse) return null;
  return {
    href: phasePath(nextCourse.slug, following.phaseId),
    label: "Continue",
    kind: "phase",
    course: following.course,
    phaseId: following.phaseId,
    requiresProject: true,
  };
}

export function getLessonView(slug: string, phaseId: string, lessonSlug: string) {
  const course = getParsedCourse(slug);
  if (!course) return null;
  const phase = findPhase(course, phaseId);
  const lesson = findLesson(course, phaseId, lessonSlug);
  if (!phase || !lesson) return null;
  const pages = coursePages(course);
  const href = lessonPath(slug, phaseId, lesson);
  const { prev, next } = neighborsFor(pages, href);
  const sourcePath = lesson.sourcePath ?? phase.sourcePath ?? course.sourcePath;
  const practice = extractPractice(lesson.markdown);
  const bodyWithoutPractice = practice
    ? lesson.markdown.replace(practice.raw, "").replace(/\n{3,}/g, "\n\n").trim()
    : lesson.markdown;
  const withoutTopHeading = bodyWithoutPractice.replace(/^#{1,3}\s+[^\n]+\n+/, "").trim();
  const withoutGlossary = stripLessonGlossaryTerms(withoutTopHeading);
  const markdown = extractCompleteCta(withoutGlossary, sourcePath).markdown;
  const regularLessons = phase.lessons.filter((item) => item.kind === "lesson");
  const lessonIndex = regularLessons.findIndex((item) => item.slug === lesson.slug);
  const isFirstLesson = lesson.kind === "lesson" && lessonIndex === 0;
  const isLastLesson = lesson.kind === "lesson" && lessonIndex === regularLessons.length - 1;
  const projectHref = phase.project ? projectPathFor(slug, phaseId) : null;
  return {
    course: { slug: course.slug, shortName: course.shortName, sourcePath },
    nav: toCourseNav(course),
    phase: {
      id: phase.id,
      number: phase.number,
      title: phase.title,
      track: phase.track,
      knowFirst: phase.knowFirst,
      hasProject: Boolean(phase.project),
    },
    lesson: {
      id: lesson.id,
      slug: lesson.slug,
      title: lesson.title,
      markdown,
      videos: lesson.videos,
      codeExamples: lesson.codeExamples,
    },
    practice,
    isFirstLesson,
    isLastLesson,
    projectHref,
    prev,
    next,
    startHref: firstLessonHref(course),
  };
}

export function getPhaseView(slug: string, phaseId: string) {
  const course = getParsedCourse(slug);
  if (!course) return null;
  const phase = findPhase(course, phaseId);
  if (!phase) return null;
  const pages = coursePages(course);
  const href = phasePath(slug, phaseId);
  const { prev, next } = neighborsFor(pages, href);
  return {
    course: { slug: course.slug, shortName: course.shortName, sourcePath: phase.sourcePath ?? course.sourcePath, description: course.description },
    nav: toCourseNav(course),
    phase,
    prev,
    next,
    startHref: phase.lessons[0] ? lessonPath(slug, phaseId, phase.lessons[0]) : `/courses/${slug}`,
    projectHref: phase.project ? projectPathFor(slug, phaseId) : null,
  };
}

export function getProjectView(slug: string, phaseId: string) {
  const course = getParsedCourse(slug);
  if (!course) return null;
  const phase = findPhase(course, phaseId);
  if (!phase?.project) return null;
  const pages = coursePages(course);
  const href = projectPathFor(slug, phaseId);
  const projectNeighbors = neighborsFor(pages, href);
  const { prev } = projectNeighbors;
  const next = projectNeighbors.next?.phaseId === phaseId
    ? projectNeighbors.next
    : nextAfterProject(course, phaseId) ?? projectNeighbors.next;
  const phaseIndex = course.phases.findIndex((item) => item.id === phaseId);
  const nextPhase = phaseIndex >= 0 ? course.phases[phaseIndex + 1] : undefined;
  const unit = toCourseNav(course).chapters.find((chapter) => chapter.phases.some((item) => item.id === phaseId));
  // Narrative handoff lives on the last lesson (Practice → handoff → nav).
  // Keep the project page free of a duplicate closer.
  const whatComesNext = null;
  const projectMarkdown = extractProjectNav(phase.project.markdown);
  return {
    course: { slug: course.slug, shortName: course.shortName, sourcePath: phase.project.sourcePath },
    nav: toCourseNav(course),
    phase: {
      id: phase.id,
      number: phase.number,
      title: phase.title,
      track: phase.track,
      lessonIds: phase.lessons.filter((lesson) => lesson.kind === "lesson").map((lesson) => lesson.id),
    },
    unit: unit ? { id: unit.id, title: unit.title } : null,
    project: { ...phase.project, markdown: projectMarkdown },
    whatComesNext,
    reviewHref: phasePath(slug, phaseId),
    reviewLabel: projectReviewLabel(phase),
    proceedHref: next?.phaseId === phaseId ? next.href : nextPhase ? phasePath(slug, nextPhase.id) : next?.href,
    proceedLabel: next?.phaseId === phaseId ? next.label : nextPhase ? projectProceedLabel(nextPhase.title) : next?.label ?? "Continue",
    prev,
    next: next ? { ...next, requiresProject: true } : null,
    startHref: firstLessonHref(course),
  };
}

export function getCourseHome(slug: string) {
  const course = getParsedCourse(slug);
  if (!course) return null;
  return {
    ...course,
    nav: toCourseNav(course),
    startHref: firstPhaseHref(course),
  };
}

export const getPathStarts = cache(() =>
  learningPaths.map((path) => {
    const step = path.steps[0];
    const course = getParsedCourse(step.course);
    const href = course ? phasePath(course.slug, step.phaseId) : "/courses";
    return { id: path.id, title: path.title, href, course: step.course, phaseId: step.phaseId };
  }),
);

export const getAllLessonParams = cache(() =>
  getCourses().flatMap((course) =>
    course.phases.flatMap((phase) =>
      phase.lessons.map((lesson) => ({ course: course.slug, phase: phase.id, lesson: lesson.slug })),
    ),
  ),
);

export const getAllPhaseParams = cache(() =>
  getCourses().flatMap((course) => course.phases.map((phase) => ({ course: course.slug, phase: phase.id }))),
);

export const getAllProjectParams = cache(() =>
  getCourses().flatMap((course) =>
    course.phases.filter((phase) => phase.project).map((phase) => ({ course: course.slug, phase: phase.id })),
  ),
);

export const getAllGlossaryParams = cache(() =>
  getCourses().flatMap((course) => {
    const chapters = chaptersFor(
      course.slug,
      course.phases.map((phase) => phase.id),
    );
    return chapters.map((chapter) => ({ course: course.slug, unit: chapter.id }));
  }),
);

export function getGlossaryView(slug: string, unitId: string) {
  const course = getParsedCourse(slug);
  if (!course) return null;
  const chapters = chaptersFor(
    course.slug,
    course.phases.map((phase) => phase.id),
  );
  const chapter = chapters.find((item) => item.id === unitId);
  if (!chapter) return null;
  const href = glossaryPath(slug, unitId);
  const pages = coursePages(course);
  const { prev, next } = neighborsFor(pages, href);
  return {
    course: { slug: course.slug, shortName: course.shortName },
    nav: toCourseNav(course),
    chapter,
    sections: buildUnitGlossary(course, chapter),
    prev,
    next,
    href,
  };
}

export type SearchEntry = SearchHit;

function sectionSearchText(source: string) {
  return source
    .replace(/^```[^\r\n]*$/gm, " ")
    .replace(/!?(?:\[([^\]]*)\]\([^)]*\))/g, "$1")
    .replace(/[*_~`>#|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export const getSearchIndex = cache((): SearchHit[] => {
  const entries: SearchHit[] = [];
  for (const course of getCourses()) {
    entries.push({
      id: `${course.slug}:course`,
      title: course.shortName,
      course: course.shortName,
      type: "course",
      href: `/courses/${course.slug}`,
      excerpt: course.description,
      searchText: `${course.title} ${course.description} ${course.skills.join(" ")}`,
    });
    for (const phase of course.phases) {
      entries.push({
        id: `${course.slug}:phase:${phase.id}`,
        title: phase.title,
        course: course.shortName,
        type: "phase",
        href: phasePath(course.slug, phase.id),
        excerpt: phase.goal ?? stripMarkdown(phase.overview).slice(0, 220),
        searchText: sectionSearchText(phase.overview),
        phase: phase.title,
      });
      for (const lesson of phase.lessons) {
        entries.push({
          id: `${course.slug}:${lesson.id}`,
          title: lesson.title,
          course: course.shortName,
          type: "lesson",
          href: lessonPath(course.slug, phase.id, lesson),
          excerpt: stripMarkdown(lesson.markdown).slice(0, 220),
          searchText: sectionSearchText(lesson.markdown),
          phase: phase.title,
        });
        for (const example of lesson.codeExamples.slice(0, 3)) {
          entries.push({
            id: `${course.slug}:${lesson.id}:code:${example.line}`,
            title: `${lesson.title} (${example.language})`,
            course: course.shortName,
            type: example.language === "bash" ? "command" : "example",
            href: lessonPath(course.slug, phase.id, lesson),
            excerpt: example.source.slice(0, 180),
            searchText: example.source,
            phase: phase.title,
          });
        }
      }
      if (phase.project) {
        entries.push({
          id: phase.project.id,
          title: phase.project.title,
          course: course.shortName,
          type: "project",
          href: `/projects/${course.slug}/phase/${phase.id}`,
          excerpt: stripMarkdown(phase.project.markdown).slice(0, 220),
          searchText: sectionSearchText(phase.project.markdown),
          phase: phase.title,
        });
      }
    }
  }
  for (const entry of guideRegistry) {
    const doc = getDocument(entry.slug);
    const lines = doc.markdown.split(/\r?\n/);
    const searchableHeadings = doc.headings.filter((item) => item.depth <= 4 && item.text);
    for (const [index, heading] of searchableHeadings.entries()) {
      const nextLine = searchableHeadings[index + 1]?.line ?? lines.length + 1;
      const section = lines.slice(heading.line, nextLine - 1).join("\n");
      const type = entry.slug === "interview" ? "interview" : entry.slug === "projects" ? "project" : "concept";
      entries.push({
        id: `${entry.slug}:${heading.id}:${heading.line}`,
        title: heading.text,
        course: entry.title,
        type,
        href: `${entry.route}#${heading.id}`,
        excerpt: stripMarkdown(section).slice(0, 220),
        searchText: sectionSearchText(section),
      });
    }
  }
  return entries;
});

export function getRequiredLessonHref(slug: string, phaseId: string) {
  const course = getParsedCourse(slug);
  if (!course) return undefined;
  const path = pathForCourse(slug);
  const steps = path?.steps ?? sequentialPath(slug, course.phases.map((phase) => phase.id));
  const previous = previousStep(steps, slug, phaseId);
  if (!previous) return undefined;
  const prevCourse = previous.course === slug ? course : getParsedCourse(previous.course);
  if (!prevCourse) return undefined;
  const prevPhase = prevCourse.phases.find((phase) => phase.id === previous.phaseId);
  if (!prevPhase) return `/courses/${previous.course}/phase/${previous.phaseId}`;
  const regularLessons = prevPhase.lessons.filter((lesson) => lesson.kind === "lesson");
  if (!regularLessons.length) return phasePath(previous.course, previous.phaseId);
  return lessonPath(previous.course, previous.phaseId, regularLessons[0]);
}

/** @deprecated use getRequiredLessonHref */
export function getRequiredProjectHref(slug: string, phaseId: string) {
  return getRequiredLessonHref(slug, phaseId);
}

export function resolveCourseHash(slug: string, hash: string) {
  const course = getParsedCourse(slug);
  if (!course) return `/courses/${slug}`;
  const id = hash.replace(/^#/, "").toLowerCase();
  const mapped = headingRouteMap(course).get(id);
  if (mapped) return mapped;
  const phase = /^phase-([f]?\d+)/i.exec(id);
  if (phase) return `/courses/${slug}/phase/${phase[1].toLowerCase()}`;
  return `/courses/${slug}`;
}

export type { Neighbor };
