"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { ChapterRequirementLookup, CourseProgressState, LearningProgress } from "@/lib/learning-model";
import type { MigrationLookup } from "@/lib/progress-lookup";
import {
  PROGRESS_KEY,
  PROGRESS_KEY_V2,
  canEnterPhase,
  coursePercent,
  courseState,
  emptyCourseProgress,
  emptyProgress,
  isProjectComplete,
  migrateV1Progress,
  parseProgress,
  parseProgressV2,
  requiredHrefForPhase,
  resumeHref,
  stepsFor,
  toggleList,
  validateImportedProgress,
  withCourse,
} from "@/lib/progress-storage";
import { phaseIdKey } from "@/lib/progress-map";
import { hashForTopicId, rememberTopicPlace, topicIdForHash } from "@/lib/content-place";

const EVENT = "interview-help-progress";

type ProgressApi = {
  ready: boolean;
  progress: LearningProgress;
  course: (slug: string) => CourseProgressState;
  percent: (slug: string, lessonCount: number, projectCount?: number) => number;
  canEnter: (slug: string, phaseId: string, phaseIds: string[], lessonIdsByPhase?: Record<string, string[]>) => boolean;
  requiredHref: (slug: string, phaseId: string, phaseIds: string[]) => string | undefined;
  projectDone: (slug: string, phaseId: string) => boolean;
  visit: (slug: string, phaseId: string, lessonId: string) => void;
  setPlace: (slug: string, place: { anchor?: string; topicId?: string }) => void;
  completeLesson: (slug: string, lessonId: string) => void;
  toggleProject: (slug: string, phaseId: string) => void;
  toggleGit: (slug: string, phaseId: string) => void;
  toggleExercise: (slug: string, exerciseId: string) => void;
  setPath: (id?: string) => void;
  resume: (hrefFor: (slug: string, phaseId: string, lessonId?: string) => string) => ReturnType<typeof resumeHref>;
  exportJson: () => string;
  importJson: (value: unknown) => void;
  reset: () => void;
  resetCourse: (slug: string) => void;
};

const ProgressContext = createContext<ProgressApi | null>(null);

function read(lookup: MigrationLookup[]): LearningProgress {
  const existing = parseProgressV2(localStorage.getItem(PROGRESS_KEY_V2));
  if (Object.keys(existing.courses).length || existing.activePath || existing.legacyIds?.length) return existing;
  const v1 = parseProgress(localStorage.getItem(PROGRESS_KEY));
  if (!v1.length) return emptyProgress();
  const migrated = migrateV1Progress(v1, lookup);
  localStorage.setItem(PROGRESS_KEY_V2, JSON.stringify(migrated));
  return migrated;
}

function persist(progress: LearningProgress) {
  localStorage.setItem(PROGRESS_KEY_V2, JSON.stringify(progress));
  window.dispatchEvent(new Event(EVENT));
}

export function ProgressProvider({
  children,
  lookup,
  requirements,
}: {
  children: React.ReactNode;
  lookup?: MigrationLookup[];
  requirements?: ChapterRequirementLookup;
}) {
  const [progress, setProgress] = useState<LearningProgress>(emptyProgress);
  const [ready, setReady] = useState(false);
  const progressRef = useRef(progress);
  const hydratedRef = useRef(false);
  const lookupRef = useRef(lookup ?? []);
  const requirementsRef = useRef(requirements);
  progressRef.current = progress;
  if (lookup) lookupRef.current = lookup;
  if (requirements) requirementsRef.current = requirements;

  const apply = useCallback((next: LearningProgress) => {
    if (!hydratedRef.current) return;
    progressRef.current = next;
    setProgress(next);
    persist(next);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const sync = () => {
      const next = read(lookupRef.current);
      progressRef.current = next;
      setProgress(next);
    };
    const start = async () => {
      if (!lookup) {
        try {
          const response = await fetch("/api/progress-lookup");
          if (response.ok) {
            const payload = (await response.json()) as MigrationLookup[];
            if (Array.isArray(payload)) lookupRef.current = payload;
          }
        } catch {
          // v2 progress still loads; v1 migration may be skipped.
        }
      }
      if (cancelled) return;
      sync();
      hydratedRef.current = true;
      setReady(true);
    };
    void start();
    window.addEventListener("storage", sync);
    window.addEventListener(EVENT, sync);
    return () => {
      cancelled = true;
      window.removeEventListener("storage", sync);
      window.removeEventListener(EVENT, sync);
    };
  }, [lookup]);

  const visit = useCallback((slug: string, phaseId: string, lessonId: string) => {
    if (!hydratedRef.current) return;
    const current = progressRef.current;
    const state = courseState(current, slug);
    const previousLessonId = state.currentLessonId;
    const visitingPhase = lessonId.startsWith("phase:");
    if (visitingPhase) {
      // Checkpoint splash must not replace a real resume stop (content / exercise / project).
      if (
        state.currentPhaseId === phaseId &&
        state.currentLessonId &&
        !state.currentLessonId.startsWith("phase:")
      ) {
        if (!state.visitedLessons.includes(lessonId)) {
          apply(withCourse(current, slug, {
            visitedLessons: [...new Set([...state.visitedLessons, lessonId])],
          }));
        }
        return;
      }
      apply(
        withCourse(current, slug, {
          currentPhaseId: phaseId,
          currentLessonId: `${phaseId}.1`,
          currentAnchor: state.currentPhaseId === phaseId ? state.currentAnchor : undefined,
          currentTopicId: state.currentPhaseId === phaseId ? state.currentTopicId : undefined,
          visitedLessons: [...new Set([...state.visitedLessons, lessonId])],
        }),
      );
      return;
    }

    const alreadyHere =
      state.currentPhaseId === phaseId &&
      state.currentLessonId === lessonId &&
      state.visitedLessons.includes(lessonId);
    const visitingProject = lessonId.startsWith("project:");
    const projectLessons = visitingProject
      ? (requirementsRef.current?.[slug]?.[phaseId]?.lessons.map((lesson) => lesson.id) ?? [])
      : [];
    const onContent = lessonId.endsWith(".1") || lessonId === "content";
    const urlHash =
      typeof window !== "undefined" && onContent
        ? window.location.hash.replace(/^#/, "").trim()
        : "";
    const samePhase = state.currentPhaseId === phaseId;
    const hash = onContent ? urlHash || (samePhase ? state.currentAnchor : undefined) : undefined;
    let topicId: string | undefined;
    if (onContent && hash) {
      topicId = topicIdForHash(slug, hash) || (samePhase && hash === state.currentAnchor ? state.currentTopicId : undefined);
      if (topicId) rememberTopicPlace(slug, hash, topicId);
    }

    if (alreadyHere) {
      const placeChanged = Boolean(hash && (hash !== state.currentAnchor || topicId !== state.currentTopicId));
      if (placeChanged || (visitingProject && !isProjectComplete(current, slug, phaseId))) {
        apply(
          withCourse(current, slug, {
            ...(placeChanged ? { currentAnchor: hash, currentTopicId: topicId } : {}),
            ...(visitingProject && !isProjectComplete(current, slug, phaseId)
              ? {
                  completedProjects: [...new Set([...state.completedProjects, phaseId])],
                  completedPhases: [...new Set([...state.completedPhases, phaseId])],
                  completedLessons: [...new Set([...state.completedLessons, ...projectLessons])],
                }
              : {}),
          }),
        );
      }
      return;
    }

    const previousIsProject = Boolean(previousLessonId?.startsWith("project:"));
    const shouldCompletePrevious = Boolean(
      previousLessonId &&
        previousLessonId !== lessonId &&
        !previousIsProject &&
        !previousLessonId.startsWith("glossary:") &&
        !previousLessonId.startsWith("phase:"),
    );
    const finishedPhaseIds = [
      ...(visitingProject ? [phaseId] : []),
      ...(previousIsProject && state.currentPhaseId ? [state.currentPhaseId] : []),
    ];
    const finishedLessons = projectLessons;
    const completedLessons = [...new Set([
      ...state.completedLessons,
      ...(shouldCompletePrevious ? [previousLessonId!] : []),
      ...finishedLessons,
    ])];
    apply(
      withCourse(current, slug, {
        currentPhaseId: phaseId,
        currentLessonId: lessonId,
        currentAnchor: onContent ? hash : undefined,
        currentTopicId: onContent ? topicId : undefined,
        visitedLessons: [...new Set([...state.visitedLessons, lessonId])],
        ...(completedLessons.length !== state.completedLessons.length ? { completedLessons } : {}),
        ...(finishedPhaseIds.length
          ? {
              completedProjects: [...new Set([...state.completedProjects, ...finishedPhaseIds])],
              completedPhases: [...new Set([...state.completedPhases, ...finishedPhaseIds])],
            }
          : {}),
      }),
    );
  }, [apply, ready]);

  const setPlace = useCallback((slug: string, place: { anchor?: string; topicId?: string }) => {
    if (!hydratedRef.current) return;
    const current = progressRef.current;
    const state = courseState(current, slug);
    const incomingAnchor = place.anchor?.replace(/^#/, "").trim() || undefined;
    const incomingTopic = place.topicId?.trim() || undefined;
    if (!incomingAnchor && !incomingTopic) return;
    const anchor = incomingAnchor ?? (incomingTopic ? hashForTopicId(slug, incomingTopic) : undefined) ?? state.currentAnchor;
    const topicId = incomingTopic ?? (incomingAnchor ? topicIdForHash(slug, incomingAnchor) : undefined) ?? state.currentTopicId;
    if (state.currentAnchor === anchor && state.currentTopicId === topicId) return;
    if (anchor && topicId) rememberTopicPlace(slug, anchor, topicId);
    apply(withCourse(current, slug, { currentAnchor: anchor, currentTopicId: topicId }));
  }, [apply]);

  const completeLesson = useCallback((slug: string, lessonId: string) => {
    if (!hydratedRef.current) return;
    const current = progressRef.current;
    const state = courseState(current, slug);
    if (state.completedLessons.includes(lessonId)) return;
    apply(withCourse(current, slug, { completedLessons: [...new Set([...state.completedLessons, lessonId])] }));
  }, [apply, ready]);

  const api = useMemo<ProgressApi>(() => ({
    ready,
    progress,
    course: (slug) => courseState(progress, slug),
    percent: (slug, lessonCount, projectCount) => coursePercent(courseState(progress, slug), lessonCount, projectCount),
    canEnter: (slug, phaseId, phaseIds) =>
      canEnterPhase(progress, stepsFor(progress, slug, phaseIds), slug, phaseId, requirementsRef.current),
    requiredHref: (slug, phaseId, phaseIds) =>
      requiredHrefForPhase(progress, stepsFor(progress, slug, phaseIds), slug, phaseId, requirementsRef.current),
    projectDone: (slug, phaseId) => isProjectComplete(progress, slug, phaseId),
    visit,
    setPlace,
    completeLesson,
    toggleProject: (slug, phaseId) => {
      if (!hydratedRef.current) return;
      const current = progressRef.current;
      const state = courseState(current, slug);
      const key = phaseIdKey(phaseId);
      const already = state.completedProjects.some((id) => phaseIdKey(id) === key);
      const completedProjects = already
        ? state.completedProjects.filter((id) => phaseIdKey(id) !== key)
        : [...state.completedProjects, phaseId];
      const completedPhases = already
        ? state.completedPhases.filter((id) => phaseIdKey(id) !== key)
        : [...new Set([...state.completedPhases.filter((id) => phaseIdKey(id) !== key), phaseId])];
      apply(withCourse(current, slug, { completedProjects, completedPhases }));
    },
    toggleGit: (slug, phaseId) => {
      const current = progressRef.current;
      apply(withCourse(current, slug, { completedGitCheckpoints: toggleList(courseState(current, slug).completedGitCheckpoints, phaseId) }));
    },
    toggleExercise: (slug, exerciseId) => {
      const current = progressRef.current;
      apply(withCourse(current, slug, { completedExercises: toggleList(courseState(current, slug).completedExercises, exerciseId) }));
    },
    setPath: (id) => apply({ ...progressRef.current, activePath: id }),
    resume: (hrefFor) => resumeHref(progress, hrefFor),
    exportJson: () => JSON.stringify(progress, null, 2),
    importJson: (value) => apply(validateImportedProgress(value)),
    reset: () => {
      if (!hydratedRef.current) return;
      try {
        localStorage.removeItem(PROGRESS_KEY);
        localStorage.removeItem(PROGRESS_KEY_V2);
        sessionStorage.removeItem("ih-progress-campaign");
      } catch {
        // Private mode may refuse storage; still clear in-memory state.
      }
      const cleared = emptyProgress();
      progressRef.current = cleared;
      setProgress(cleared);
      persist(cleared);
    },
    resetCourse: (slug) => {
      if (!hydratedRef.current) return;
      const current = progressRef.current;
      apply({
        ...current,
        courses: {
          ...current.courses,
          [slug]: emptyCourseProgress(),
        },
      });
    },
  }), [progress, ready, visit, setPlace, completeLesson, apply]);

  return <ProgressContext.Provider value={api}>{children}</ProgressContext.Provider>;
}

export function useLearningProgress() {
  const value = useContext(ProgressContext);
  if (!value) throw new Error("ProgressProvider is missing");
  return value;
}

export function useOptionalProgress() {
  return useContext(ProgressContext);
}
