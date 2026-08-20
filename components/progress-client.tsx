"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { CourseProgressState, LearningProgress } from "@/lib/learning-model";
import type { MigrationLookup } from "@/lib/progress-lookup";
import {
  PROGRESS_KEY,
  PROGRESS_KEY_V2,
  canEnterPhase,
  coursePercent,
  courseState,
  emptyProgress,
  isProjectComplete,
  migrateV1Progress,
  parseProgress,
  parseProgressV2,
  resumeHref,
  stepsFor,
  toggleList,
  validateImportedProgress,
  withCourse,
} from "@/lib/progress-storage";
import { phaseIdKey } from "@/lib/progress-map";

const EVENT = "interview-help-progress";

type ProgressApi = {
  ready: boolean;
  progress: LearningProgress;
  course: (slug: string) => CourseProgressState;
  percent: (slug: string, phaseCount: number) => number;
  canEnter: (slug: string, phaseId: string, phaseIds: string[]) => boolean;
  projectDone: (slug: string, phaseId: string) => boolean;
  visit: (slug: string, phaseId: string, lessonId: string) => void;
  completeLesson: (slug: string, lessonId: string) => void;
  toggleProject: (slug: string, phaseId: string) => void;
  toggleGit: (slug: string, phaseId: string) => void;
  toggleExercise: (slug: string, exerciseId: string) => void;
  setPath: (id?: string) => void;
  resume: (hrefFor: (slug: string, phaseId: string, lessonId?: string) => string) => ReturnType<typeof resumeHref>;
  exportJson: () => string;
  importJson: (value: unknown) => void;
  reset: () => void;
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

export function ProgressProvider({ children, lookup }: { children: React.ReactNode; lookup?: MigrationLookup[] }) {
  const [progress, setProgress] = useState<LearningProgress>(emptyProgress);
  const [ready, setReady] = useState(false);
  const progressRef = useRef(progress);
  const hydratedRef = useRef(false);
  const lookupRef = useRef(lookup ?? []);
  progressRef.current = progress;
  if (lookup) lookupRef.current = lookup;

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
    if (state.currentPhaseId === phaseId && state.currentLessonId === lessonId && state.visitedLessons.includes(lessonId)) return;
    apply(withCourse(current, slug, {
      currentPhaseId: phaseId,
      currentLessonId: lessonId,
      visitedLessons: [...new Set([...state.visitedLessons, lessonId])],
    }));
  }, [apply, ready]);

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
    percent: (slug, phaseCount) => coursePercent(courseState(progress, slug), phaseCount),
    canEnter: (slug, phaseId, phaseIds) => canEnterPhase(progress, stepsFor(progress, slug, phaseIds), slug, phaseId),
    projectDone: (slug, phaseId) => isProjectComplete(progress, slug, phaseId),
    visit,
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
      localStorage.removeItem(PROGRESS_KEY);
      localStorage.removeItem(PROGRESS_KEY_V2);
      apply(emptyProgress());
    },
  }), [progress, ready, visit, completeLesson, apply]);

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
