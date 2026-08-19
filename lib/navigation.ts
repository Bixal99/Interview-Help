import type { ParsedCourse } from "./learning-model";
import { lessonPath, phasePath, projectPathFor } from "./parse-course";

export type NeighborKind = "home" | "lesson" | "project" | "phase";

export type Neighbor = {
  href: string;
  label: string;
  kind: NeighborKind;
  course: string;
  phaseId: string;
  requiresProject?: boolean;
};

export type CourseNavLesson = {
  id: string;
  slug: string;
  title: string;
  children: { id: string; title: string }[];
};
export type CourseNavPhase = {
  id: string;
  number: string;
  title: string;
  goal?: string;
  hasProject: boolean;
  lessons: CourseNavLesson[];
};
export type CourseNavChapter = { id: string; title: string; summary: string; phases: CourseNavPhase[] };
export type CourseNav = {
  slug: string;
  shortName: string;
  title: string;
  description: string;
  sourcePath: string;
  chapters: CourseNavChapter[];
};

export function phaseCountWithProjects(nav: CourseNav) {
  return nav.chapters.reduce(
    (sum, chapter) => sum + chapter.phases.filter((phase) => phase.hasProject).length,
    0,
  );
}

type Page = {
  kind: "lesson" | "project" | "phase";
  course: string;
  phaseId: string;
  phaseTitle: string;
  lessonId?: string;
  lessonSlug?: string;
  lessonTitle?: string;
  href: string;
};

export function coursePages(course: ParsedCourse): Page[] {
  const pages: Page[] = [];
  for (const phase of course.phases) {
    pages.push({
      kind: "phase",
      course: course.slug,
      phaseId: phase.id,
      phaseTitle: phase.title,
      href: phasePath(course.slug, phase.id),
    });
    for (const lesson of phase.lessons) {
      pages.push({
        kind: "lesson",
        course: course.slug,
        phaseId: phase.id,
        phaseTitle: phase.title,
        lessonId: lesson.id,
        lessonSlug: lesson.slug,
        lessonTitle: lesson.title,
        href: lessonPath(course.slug, phase.id, lesson),
      });
    }
    if (phase.project) {
      pages.push({
        kind: "project",
        course: course.slug,
        phaseId: phase.id,
        phaseTitle: phase.title,
        href: projectPathFor(course.slug, phase.id),
      });
    }
  }
  return pages;
}

export function firstPhaseHref(course: ParsedCourse) {
  const phase = course.phases[0];
  return phase ? phasePath(course.slug, phase.id) : `/courses/${course.slug}`;
}

export function firstLessonHref(course: ParsedCourse) {
  const lesson = course.phases[0]?.lessons[0];
  return lesson ? lessonPath(course.slug, course.phases[0].id, lesson) : `/courses/${course.slug}`;
}

export function firstLessonInPhase(course: ParsedCourse, phaseId: string) {
  const phase = course.phases.find((item) => item.id === phaseId);
  const lesson = phase?.lessons[0];
  if (phase && lesson) return lessonPath(course.slug, phase.id, lesson);
  return phase ? phasePath(course.slug, phaseId) : `/courses/${course.slug}`;
}

function pageLabel(page: Page) {
  if (page.kind === "project") return `Start phase project`;
  if (page.kind === "phase") return page.phaseTitle;
  return page.lessonTitle ?? "Lesson";
}

export function neighborsFor(
  pages: Page[],
  href: string,
  nextCourseFirstHref?: string,
  nextCourseLabel?: string,
): { prev: Neighbor | null; next: Neighbor | null } {
  const index = pages.findIndex((page) => page.href === href);
  if (index < 0) return { prev: null, next: null };
  const current = pages[index];
  const previous = pages[index - 1];
  const following = pages[index + 1];
  const prev: Neighbor | null = previous
    ? {
        href: previous.href,
        label: previous.kind === "project"
          ? `${previous.phaseTitle} project`
          : previous.kind === "phase"
            ? previous.phaseTitle
            : previous.lessonTitle ?? "Previous",
        kind: previous.kind,
        course: previous.course,
        phaseId: previous.phaseId,
      }
    : {
        href: "/courses",
        label: "Tutorials",
        kind: "home",
        course: current.course,
        phaseId: current.phaseId,
      };
  let next: Neighbor | null = following
    ? {
        href: following.href,
        label: pageLabel(following),
        kind: following.kind,
        course: following.course,
        phaseId: following.phaseId,
        requiresProject: current.kind === "project",
      }
    : null;
  if (!next && nextCourseFirstHref) {
    next = {
      href: nextCourseFirstHref,
      label: nextCourseLabel ?? "Next phase",
      kind: "phase",
      course: current.course,
      phaseId: current.phaseId,
      requiresProject: current.kind === "project",
    };
  }
  if (current.kind === "lesson" && following?.kind === "project" && following.phaseId === current.phaseId) {
    next = { ...next!, label: "Start phase project" };
  }
  if (current.kind === "project" && next) {
    next = { ...next, label: next.kind === "project" ? next.label : `Next phase`, requiresProject: true };
  }
  return { prev, next };
}
