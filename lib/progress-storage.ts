import type { CourseProgressState, LearningProgress, PathStep } from "./learning-model";
import { pathForCourse, sequentialPath } from "./learning-paths";

export const PROGRESS_KEY = "interview-help-progress-v1";
export const PROGRESS_KEY_V2 = "interview-help-progress-v2";

export function emptyCourseProgress(): CourseProgressState {
  return {
    lastVisitedAt: new Date(0).toISOString(),
    visitedLessons: [],
    completedLessons: [],
    completedExercises: [],
    completedProjects: [],
    completedGitCheckpoints: [],
    completedPhases: [],
  };
}

export function emptyProgress(): LearningProgress {
  return { version: 2, courses: {} };
}

export function parseProgress(raw: string | null): string[] {
  if (!raw) return [];
  try {
    const value: unknown = JSON.parse(raw);
    return Array.isArray(value) ? [...new Set(value.filter((item): item is string => typeof item === "string"))] : [];
  } catch {
    return [];
  }
}

export function toggleProgress(items: string[], id: string): string[] {
  return items.includes(id) ? items.filter((item) => item !== id) : [...items, id];
}

function unique(items: string[]) {
  return [...new Set(items)];
}

function asProgress(value: unknown): LearningProgress | null {
  if (!value || typeof value !== "object") return null;
  const record = value as Partial<LearningProgress>;
  if (record.version !== 2 || !record.courses || typeof record.courses !== "object") return null;
  return {
    version: 2,
    activePath: typeof record.activePath === "string" ? record.activePath : undefined,
    courses: record.courses as LearningProgress["courses"],
    legacyIds: Array.isArray(record.legacyIds) ? record.legacyIds.filter((item): item is string => typeof item === "string") : undefined,
  };
}

export function parseProgressV2(raw: string | null): LearningProgress {
  if (!raw) return emptyProgress();
  try {
    return asProgress(JSON.parse(raw)) ?? emptyProgress();
  } catch {
    return emptyProgress();
  }
}

export function migrateV1Progress(
  v1: string[],
  lookup: { slug: string; phaseHeadingIds: string[]; projectHeadingIds: string[]; gitHeadingIds: string[]; practiceHeadingIds: string[] }[],
): LearningProgress {
  const next = emptyProgress();
  const leftover: string[] = [];
  for (const id of v1) {
    const [slug, headingId] = id.split(":");
    const course = lookup.find((item) => item.slug === slug);
    if (!course || !headingId) {
      leftover.push(id);
      continue;
    }
    const state = next.courses[slug] ?? emptyCourseProgress();
    if (course.phaseHeadingIds.includes(headingId)) {
      const phaseId = headingId.match(/phase-([f]?\d+)/i)?.[1]?.toLowerCase() ?? headingId;
      state.completedPhases = unique([...state.completedPhases, phaseId]);
    } else if (course.projectHeadingIds.includes(headingId)) {
      const phaseId = headingId.match(/phase-(f?\d+)/i)?.[1]?.toLowerCase() ?? headingId;
      state.completedProjects = unique([...state.completedProjects, phaseId]);
    } else if (course.gitHeadingIds.includes(headingId)) {
      const phaseId = headingId.match(/phase-(f?\d+)/i)?.[1]?.toLowerCase() ?? headingId;
      state.completedGitCheckpoints = unique([...state.completedGitCheckpoints, phaseId]);
    } else if (course.practiceHeadingIds.includes(headingId)) {
      state.completedExercises = unique([...state.completedExercises, headingId]);
    } else leftover.push(id);
    next.courses[slug] = state;
  }
  if (leftover.length) next.legacyIds = leftover;
  return next;
}

export function courseState(progress: LearningProgress, slug: string): CourseProgressState {
  return progress.courses[slug] ?? emptyCourseProgress();
}

export function withCourse(progress: LearningProgress, slug: string, patch: Partial<CourseProgressState>): LearningProgress {
  const current = courseState(progress, slug);
  return {
    ...progress,
    courses: {
      ...progress.courses,
      [slug]: {
        ...current,
        ...patch,
        lastVisitedAt: patch.lastVisitedAt ?? new Date().toISOString(),
      },
    },
  };
}

export function toggleList(items: string[], id: string) {
  return toggleProgress(items, id);
}

export function isProjectComplete(progress: LearningProgress, slug: string, phaseId: string) {
  return courseState(progress, slug).completedProjects.includes(phaseId);
}

export function canEnterPhase(progress: LearningProgress, steps: PathStep[], course: string, phaseId: string) {
  const index = steps.findIndex((step) => step.course === course && step.phaseId === phaseId);
  if (index <= 0) return true;
  const previous = steps[index - 1];
  return isProjectComplete(progress, previous.course, previous.phaseId);
}

export function nextStep(steps: PathStep[], course: string, phaseId: string) {
  const index = steps.findIndex((step) => step.course === course && step.phaseId === phaseId);
  return index >= 0 ? steps[index + 1] : undefined;
}

export function previousStep(steps: PathStep[], course: string, phaseId: string) {
  const index = steps.findIndex((step) => step.course === course && step.phaseId === phaseId);
  return index > 0 ? steps[index - 1] : undefined;
}

export function stepsFor(progress: LearningProgress, course: string, phaseIds: string[]) {
  return pathForCourse(course, progress.activePath)?.steps ?? sequentialPath(course, phaseIds);
}

export function resumeHref(
  progress: LearningProgress,
  firstLessonHref: (slug: string, phaseId: string, lessonId?: string) => string,
) {
  const entries = Object.entries(progress.courses).sort((a, b) => b[1].lastVisitedAt.localeCompare(a[1].lastVisitedAt));
  const latest = entries[0];
  if (!latest?.[1].currentPhaseId) return null;
  const [slug, state] = latest;
  if (!state.currentPhaseId) return null;
  return {
    slug,
    phaseId: state.currentPhaseId,
    lessonId: state.currentLessonId,
    href: firstLessonHref(slug, state.currentPhaseId, state.currentLessonId),
    lastVisitedAt: state.lastVisitedAt,
  };
}

export function coursePercent(state: CourseProgressState, lessonCount: number, projectCount: number) {
  const total = lessonCount + projectCount;
  if (!total) return 0;
  const done = state.completedLessons.length + state.completedProjects.length;
  return Math.min(100, Math.round((done / total) * 100));
}

export function validateImportedProgress(value: unknown): LearningProgress {
  const parsed = asProgress(value);
  if (!parsed) throw new Error("This file is not a valid Interview Help progress backup.");
  return parsed;
}
