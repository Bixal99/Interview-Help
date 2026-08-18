"use client";

import Link from "next/link";
import { useLearningProgress } from "./progress-client";

export function CourseProgressBar({
  slug,
  lessonCount,
  projectCount,
}: {
  slug: string;
  lessonCount: number;
  projectCount: number;
}) {
  const { ready, percent } = useLearningProgress();
  const value = ready ? percent(slug, lessonCount, projectCount) : 0;
  return (
    <div className="mb-10">
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-sm font-semibold">Tutorial progress: {ready ? `${value}%` : "—"}</p>
        <Link href="/progress" className="text-sm text-accent underline">Review progress</Link>
      </div>
      <div
        className="ih-progress"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-label="Tutorial progress"
      >
        <span style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
