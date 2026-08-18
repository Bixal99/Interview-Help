"use client";

import Link from "next/link";
import { useLearningProgress } from "./progress-client";

export function CourseHomeActions({
  slug,
  startHref,
  shortName,
  layout = "button",
}: {
  slug: string;
  startHref: string;
  shortName: string;
  layout?: "button" | "bar";
}) {
  const { ready, course } = useLearningProgress();
  const state = course(slug);
  const href = state.currentPhaseId
    ? `/courses/${slug}/phase/${state.currentPhaseId}${state.currentLessonId ? `/${state.currentLessonId}` : ""}`
    : startHref;
  const started = ready && Boolean(state.currentPhaseId);
  const label = started ? `Continue learning ${shortName}` : `Start learning ${shortName}`;
  if (layout === "bar") {
    return (
      <nav className="flex flex-wrap items-center justify-between gap-3 py-2" aria-label="Tutorial">
        <Link href="/courses" className="btn-prev">« Previous</Link>
        <Link href={href} className="btn-next">Next »</Link>
      </nav>
    );
  }
  return (
    <Link href={href} className="btn-next text-lg">
      {label} »
    </Link>
  );
}
