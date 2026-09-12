import type { Lesson, ParsedCourse } from "./learning-model";

/** Short URLs used by client continue/resume. Server redirects them to /unit/... */
export function chapterPath(slug: string, chapterId: string) {
  return `/courses/${slug}/chapter/${chapterId}`;
}

export function lessonPath(slug: string, chapterId: string, lesson: Pick<Lesson, "slug">) {
  const leaf = !lesson.slug || lesson.slug === "content" ? "content" : lesson.slug;
  return `/courses/${slug}/chapter/${chapterId}/${leaf}`;
}

export function projectPathFor(slug: string, chapterId: string) {
  return `/courses/${slug}/chapter/${chapterId}/project`;
}

/** Canonical tree URLs (include unit). */
export function unitChapterPath(slug: string, unit: number, chapter: number, leaf?: string) {
  const base = `/courses/${slug}/unit/${unit}/chapter/${chapter}`;
  if (!leaf || leaf === "checkpoint") return base;
  return `${base}/${leaf}`;
}

export function chapterContentPath(slug: string, chapterId: string, unit?: number) {
  if (unit != null) return unitChapterPath(slug, unit, Number(chapterId), "content");
  return `${chapterPath(slug, chapterId)}/content`;
}

export function chapterLeafPath(slug: string, chapterId: string, leaf: string, unit?: number) {
  if (unit != null) return unitChapterPath(slug, unit, Number(chapterId), leaf);
  return `/courses/${slug}/chapter/${chapterId}/${leaf}`;
}

export function unitDocPath(slug: string, unit: number, kind: "summary" | "exercise" | "project") {
  return `/courses/${slug}/unit/${unit}/${kind}`;
}

export function courseHomePath(slug: string) {
  return `/courses/${slug}`;
}

export function findPhase(course: Pick<ParsedCourse, "phases">, phaseId: string) {
  return course.phases.find((phase) => phase.id === phaseId);
}

export function findLesson(course: Pick<ParsedCourse, "phases">, phaseId: string, lessonSlugValue: string) {
  const phase = findPhase(course, phaseId);
  const value = lessonSlugValue.toLowerCase();
  if (!phase) return undefined;
  return phase.lessons.find((lesson) => lesson.slug.toLowerCase() === value || lesson.id.toLowerCase() === value);
}

/** @deprecated use chapterPath — kept so progress wiring can share one name */
export const phasePath = chapterPath;
