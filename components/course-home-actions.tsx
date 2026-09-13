"use client";

import { Pager } from "./pager";
import { useLearningProgress } from "./progress-client";
import { resumeHrefFromState } from "@/lib/resume-href";

export function CourseHomeActions({
  slug,
  startHref,
}: {
  slug: string;
  startHref: string;
}) {
  const { ready, course } = useLearningProgress();
  const state = course(slug);
  const started = Boolean(
    state.currentPhaseId || state.completedLessons.length > 0 || state.visitedLessons.length > 0,
  );
  const continueHref =
    ready && started && state.currentPhaseId
      ? resumeHrefFromState(slug, state, startHref)
      : startHref;

  return (
    <Pager
      backHref="/courses"
      backLabel="Back"
      proceedHref={continueHref}
      proceedLabel={started ? "Continue learning" : "Start"}
    />
  );
}
