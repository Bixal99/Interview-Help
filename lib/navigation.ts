import type { ParsedCourse } from "./learning-model";
import { chaptersFor } from "./learning-paths";
import { lessonPath, phasePath, projectPathFor } from "./course-routes";
import { glossaryPath } from "./unit-glossary";
import type { ProjectArtifactKind } from "./parse-project-brief";

export type NeighborKind = "home" | "lesson" | "project" | "phase" | "glossary";

export type Neighbor = {
  href: string;
  label: string;
  kind: NeighborKind;
  course: string;
  phaseId: string;
  requiresProject?: boolean;
};

export type CourseNavTopic = { id: string; title: string; children?: CourseNavTopic[] };
export type CourseNavLesson = {
  id: string;
  slug: string;
  kind: "lesson" | "story-project" | "story-checkpoint";
  title: string;
  children: CourseNavTopic[];
};
export type CourseNavPhase = {
  id: string;
  number: string;
  title: string;
  goal?: string;
  unit?: number;
  hasProject: boolean;
  hasExercise?: boolean;
  exerciseTitle?: string;
  projectTitle?: string;
  projectKind?: ProjectArtifactKind;
  lessons: CourseNavLesson[];
};
export type CourseNavChapter = {
  id: string;
  title: string;
  summary: string;
  phases: CourseNavPhase[];
  glossaryHref?: string;
  unitExerciseHref?: string;
  unitExerciseTitle?: string;
  unitProjectHref?: string;
  unitProjectTitle?: string;
};
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

export function regularLessonIds(phase: CourseNavPhase) {
  return phase.lessons.filter((lesson) => lesson.kind === "lesson").map((lesson) => lesson.id);
}

export function lessonIdsByPhase(nav: CourseNav) {
  const map: Record<string, string[]> = {};
  for (const chapter of nav.chapters) {
    for (const phase of chapter.phases) {
      map[phase.id] = regularLessonIds(phase);
    }
  }
  return map;
}

export function lessonCountForNav(nav: CourseNav) {
  return Object.values(lessonIdsByPhase(nav)).reduce((sum, ids) => sum + ids.length, 0);
}

type Page = {
  kind: "lesson" | "project" | "phase" | "glossary";
  course: string;
  phaseId: string;
  phaseTitle: string;
  lessonId?: string;
  lessonSlug?: string;
  lessonTitle?: string;
  unitId?: string;
  unitTitle?: string;
  href: string;
};

export function coursePages(course: ParsedCourse): Page[] {
  const chapters = chaptersFor(
    course.slug,
    course.phases.map((phase) => phase.id),
    course.units,
  );
  const chapterByLastPhase = new Map(
    chapters
      .map((chapter) => {
        const last = chapter.phaseIds[chapter.phaseIds.length - 1];
        return last ? ([last, chapter] as const) : null;
      })
      .filter((entry): entry is readonly [string, (typeof chapters)[number]] => Boolean(entry)),
  );

  const pages: Page[] = [];
  for (const phase of course.phases) {
    pages.push({
      kind: "phase",
      course: course.slug,
      phaseId: phase.id,
      phaseTitle: phase.title,
      href: phasePath(course.slug, phase.id),
    });
    const regularLessons = phase.lessons.filter((lesson) => lesson.kind === "lesson");
    const storyArtifacts = phase.lessons.filter((lesson) => lesson.kind !== "lesson");
    for (const lesson of regularLessons) {
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
    for (const lesson of storyArtifacts) {
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
    const chapter = chapterByLastPhase.get(phase.id);
    if (chapter) {
      pages.push({
        kind: "glossary",
        course: course.slug,
        phaseId: phase.id,
        phaseTitle: phase.title,
        unitId: chapter.id,
        unitTitle: chapter.title,
        href: glossaryPath(course.slug, chapter.id),
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
  if (page.kind === "glossary") return "Glossary";
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
            : previous.kind === "glossary"
              ? "Glossary"
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
    next = {
      ...next,
      label: next.phaseId === current.phaseId ? next.label : "Next phase",
      requiresProject: true,
    };
  }
  return { prev, next };
}
