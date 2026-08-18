import "server-only";
import fs from "node:fs";
import { cache } from "react";
import { catalogBySlug, contentBySlug, courseCatalog, courseBarLabels, guideRegistry, type CourseDefinition } from "./course-catalog";
import { extractHeadings, stripMarkdown, type Heading } from "./content-utils";
import { chaptersFor, learningPaths, pathForCourse, sequentialPath } from "./learning-paths";
import type { ParsedCourse, SearchHit } from "./learning-model";
import { coursePages, firstLessonHref, firstLessonInPhase, neighborsFor, type CourseNav, type Neighbor } from "./navigation";
import { findLesson, findPhase, headingRouteMap, lessonPath, parseCourseMarkdown, phasePath, projectPathFor, withSourcePath } from "./parse-course";
import { attachProjects, parseProjectsDocument } from "./parse-projects";
import { extractPractice, withoutPractice } from "./practice";
import { lookupFromCourses } from "./progress-lookup";
import { nextStep, previousStep } from "./progress-storage";
import { projectPath } from "./paths";

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

export const getAllProjects = cache(() => parseProjectsDocument(readMarkdown("content/guides/Projects.md")));

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
  return { sourcePath, markdown, headings, title: headings[0]?.text ?? "Interview Help" };
}

export const getCourseChapters = cache((slug: string) => {
  const course = getParsedCourse(slug);
  if (!course) return [];
  return chaptersFor(slug, course.phases.map((phase) => phase.id));
});

export const getProgressLookup = cache(() => lookupFromCourses(getCourses()));

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
      phases: chapter.phaseIds.flatMap((id) => {
        const phase = phaseMap[id];
        if (!phase) return [];
        return [{
          id: phase.id,
          number: phase.number,
          title: phase.title,
          goal: phase.goal,
          hasProject: Boolean(phase.project),
          lessons: phase.lessons.map((lesson) => ({
            id: lesson.id,
            slug: lesson.slug,
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
    href: firstLessonInPhase(nextCourse, following.phaseId),
    label: "Next phase",
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
  const practice = extractPractice(lesson.markdown);
  return {
    course: { slug: course.slug, shortName: course.shortName, sourcePath: lesson.sourcePath ?? phase.sourcePath ?? course.sourcePath },
    nav: toCourseNav(course),
    phase: { id: phase.id, number: phase.number, title: phase.title, hasProject: Boolean(phase.project) },
    lesson: {
      id: lesson.id,
      slug: lesson.slug,
      title: lesson.title,
      markdown: withoutPractice(lesson.markdown, practice),
      videos: lesson.videos,
      codeExamples: lesson.codeExamples,
    },
    practice,
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
  return {
    course: { slug: course.slug, shortName: course.shortName, sourcePath: phase.sourcePath ?? course.sourcePath, description: course.description },
    nav: toCourseNav(course),
    phase,
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
  const { prev } = neighborsFor(pages, href);
  const next = nextAfterProject(course, phaseId) ?? neighborsFor(pages, href).next;
  return {
    course: { slug: course.slug, shortName: course.shortName, sourcePath: "content/guides/Projects.md" },
    nav: toCourseNav(course),
    phase: { id: phase.id, number: phase.number, title: phase.title },
    project: phase.project,
    prev,
    next: next ? { ...next, requiresProject: true, label: "Next phase" } : null,
    startHref: firstLessonHref(course),
  };
}

export function getCourseHome(slug: string) {
  const course = getParsedCourse(slug);
  if (!course) return null;
  return {
    ...course,
    nav: toCourseNav(course),
    startHref: firstLessonHref(course),
  };
}

export const getPathStarts = cache(() =>
  learningPaths.map((path) => {
    const step = path.steps[0];
    const course = getParsedCourse(step.course);
    const href = course ? firstLessonInPhase(course, step.phaseId) : "/courses";
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

export function getRequiredProjectHref(slug: string, phaseId: string) {
  const course = getParsedCourse(slug);
  if (!course) return undefined;
  const path = pathForCourse(slug);
  const steps = path?.steps ?? sequentialPath(slug, course.phases.map((phase) => phase.id));
  const previous = previousStep(steps, slug, phaseId);
  return previous ? `/projects/${previous.course}/phase/${previous.phaseId}` : undefined;
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
