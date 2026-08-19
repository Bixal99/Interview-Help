import { remapProgressId } from "./legacy-routes";
import type { CourseProgressState, LearningProgress, PathStep } from "./learning-model";
import { pathForCourse, sequentialPath } from "./learning-paths";

export const PROGRESS_KEY = "interview-help-progress-v1";
export const PROGRESS_KEY_V2 = "interview-help-progress-v2";

const CS_SLUG = "computer-science";
const OOP_SLUG = "object-oriented-programming";

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
  return { version: 3, courses: {} };
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

function remapList(items: string[] | undefined, fromOop: boolean) {
  return unique((items ?? []).map((id) => remapProgressId(id, fromOop)));
}

function remapCourseState(state: CourseProgressState, fromOop: boolean): CourseProgressState {
  return {
    ...state,
    currentPhaseId: state.currentPhaseId ? remapProgressId(state.currentPhaseId, fromOop) : undefined,
    currentLessonId: state.currentLessonId ? remapProgressId(state.currentLessonId, fromOop) : undefined,
    visitedLessons: remapList(state.visitedLessons, fromOop),
    completedLessons: remapList(state.completedLessons, fromOop),
    completedExercises: remapList(state.completedExercises, fromOop),
    completedProjects: remapList(state.completedProjects, fromOop),
    completedGitCheckpoints: remapList(state.completedGitCheckpoints, fromOop),
    completedPhases: remapList(state.completedPhases, fromOop),
  };
}

function mergeCourseState(cs: CourseProgressState, incoming: CourseProgressState): CourseProgressState {
  const incomingNewer = incoming.lastVisitedAt > cs.lastVisitedAt;
  return {
    ...cs,
    lastVisitedAt: incomingNewer ? incoming.lastVisitedAt : cs.lastVisitedAt,
    currentPhaseId: incomingNewer && incoming.currentPhaseId ? incoming.currentPhaseId : cs.currentPhaseId,
    currentLessonId: incomingNewer && incoming.currentLessonId ? incoming.currentLessonId : cs.currentLessonId,
    visitedLessons: unique([...cs.visitedLessons, ...incoming.visitedLessons]),
    completedLessons: unique([...cs.completedLessons, ...incoming.completedLessons]),
    completedExercises: unique([...cs.completedExercises, ...incoming.completedExercises]),
    completedProjects: unique([...cs.completedProjects, ...incoming.completedProjects]),
    completedGitCheckpoints: unique([...cs.completedGitCheckpoints, ...incoming.completedGitCheckpoints]),
    completedPhases: unique([...cs.completedPhases, ...incoming.completedPhases]),
  };
}

function foldOopCourse(progress: LearningProgress, remapCsNumeric: boolean): LearningProgress {
  const oop = progress.courses[OOP_SLUG];
  const cs = progress.courses[CS_SLUG];
  const remappedCs = cs ? (remapCsNumeric ? remapCourseState(cs, false) : cs) : undefined;
  const remappedOop = oop ? remapCourseState(oop, true) : undefined;
  const { [OOP_SLUG]: _removed, ...rest } = progress.courses;
  const courses = { ...rest };
  if (remappedCs && remappedOop) courses[CS_SLUG] = mergeCourseState(remappedCs, remappedOop);
  else if (remappedCs) courses[CS_SLUG] = remappedCs;
  else if (remappedOop) courses[CS_SLUG] = remappedOop;
  return { ...progress, version: 3, courses };
}

function asProgress(value: unknown): LearningProgress | null {
  if (!value || typeof value !== "object") return null;
  const record = value as Partial<LearningProgress>;
  if ((record.version !== 2 && record.version !== 3) || !record.courses || typeof record.courses !== "object") return null;
  const progress: LearningProgress = {
    version: record.version,
    activePath: typeof record.activePath === "string" ? record.activePath : undefined,
    courses: record.courses as LearningProgress["courses"],
    legacyIds: Array.isArray(record.legacyIds) ? record.legacyIds.filter((item): item is string => typeof item === "string") : undefined,
  };
  return foldOopCourse(progress, record.version === 2);
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
  return foldOopCourse(next, true);
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
  const lessonId = state.currentLessonId;
  const projectStop = Boolean(lessonId?.startsWith("project:"));
  return {
    slug,
    phaseId: state.currentPhaseId,
    lessonId: projectStop ? undefined : lessonId,
    href: projectStop
      ? `/projects/${slug}/phase/${state.currentPhaseId}`
      : firstLessonHref(slug, state.currentPhaseId, lessonId),
    lastVisitedAt: state.lastVisitedAt,
  };
}

export function phasesDone(state: CourseProgressState) {
  return state.completedProjects.length;
}

/** Progress counts completed phase projects only — a phase advances when its project is done. */
export function coursePercent(state: CourseProgressState, phaseCount: number) {
  if (!phaseCount) return 0;
  return Math.min(100, Math.round((phasesDone(state) / phaseCount) * 100));
}

export function validateImportedProgress(value: unknown): LearningProgress {
  const parsed = asProgress(value);
  if (!parsed) throw new Error("This file is not a valid Interview Help progress backup.");
  return parsed;
}
