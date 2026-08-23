"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type CourseChromeProgress = {
  slug: string;
  lessonCount: number;
  projectCount: number;
  gateHref?: string | null;
};

type RegisterFn = (patch: Partial<CourseChromeProgress> | null) => void;

const CourseChromeProgressContext = createContext<CourseChromeProgress | null>(null);
const CourseChromeProgressRegisterContext = createContext<RegisterFn>(() => {});

export function CourseChromeProgressBridge({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<CourseChromeProgress | null>(null);

  const register = useCallback((patch: Partial<CourseChromeProgress> | null) => {
    setProgress((current) => {
      if (patch === null) return null;
      if (!current) {
        if (patch.slug == null || patch.lessonCount == null || patch.projectCount == null) return null;
        return {
          slug: patch.slug,
          lessonCount: patch.lessonCount,
          projectCount: patch.projectCount,
          gateHref: patch.gateHref ?? null,
        };
      }
      return { ...current, ...patch };
    });
  }, []);

  return (
    <CourseChromeProgressRegisterContext.Provider value={register}>
      <CourseChromeProgressContext.Provider value={progress}>{children}</CourseChromeProgressContext.Provider>
    </CourseChromeProgressRegisterContext.Provider>
  );
}

/** Publish course progress into the top nav while a tutorial shell is mounted. */
export function CourseChromeProgressPublisher({
  slug,
  lessonCount,
  projectCount,
  children,
}: {
  slug: string;
  lessonCount: number;
  projectCount: number;
  children: React.ReactNode;
}) {
  const register = useContext(CourseChromeProgressRegisterContext);
  const value = useMemo(() => ({ slug, lessonCount, projectCount }), [slug, lessonCount, projectCount]);

  useEffect(() => {
    register(value);
    return () => register(null);
  }, [register, value]);

  return children;
}

/** Publish the blocked-project CTA into the nav progress chip. */
export function CourseChromeGatePublisher({
  href,
  active,
}: {
  href?: string;
  active: boolean;
}) {
  const register = useContext(CourseChromeProgressRegisterContext);

  useEffect(() => {
    register({ gateHref: active ? href ?? null : null });
    return () => register({ gateHref: null });
  }, [register, href, active]);

  return null;
}

export function useCourseChromeProgress() {
  return useContext(CourseChromeProgressContext);
}
