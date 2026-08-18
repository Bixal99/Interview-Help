"use client";

import Link from "next/link";
import { useLearningProgress } from "./progress-client";

export function CourseHomeActions({
  slug,
  startHref,
  shortName,
}: {
  slug: string;
  startHref: string;
  shortName: string;
}) {
  const { ready, course } = useLearningProgress();
  const state = course(slug);
  const href = state.currentPhaseId
    ? `/courses/${slug}/phase/${state.currentPhaseId}${state.currentLessonId ? `/${state.currentLessonId}` : ""}`
    : startHref;
  const started = ready && Boolean(state.currentPhaseId);
  const label = started ? `Continue learning ${shortName}` : `Start learning ${shortName}`;
  return (
    <Link href={href} className="btn-next mt-6 text-lg">
      {label} »
    </Link>
  );
}
