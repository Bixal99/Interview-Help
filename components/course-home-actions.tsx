"use client";

import Link from "next/link";
import { useLearningProgress } from "./progress-client";

export function CourseHomeActions({ slug, startHref }: { slug: string; startHref: string }) {
  const { ready, course } = useLearningProgress();
  const state = course(slug);
  const href = state.currentPhaseId
    ? `/courses/${slug}/phase/${state.currentPhaseId}${state.currentLessonId ? `/${state.currentLessonId}` : ""}`
    : startHref;
  const label = ready && state.currentPhaseId ? "Continue" : "Start";
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={href} className="btn-next">{label}</Link>
      <Link href="/progress" className="btn-prev">Review progress</Link>
    </div>
  );
}
