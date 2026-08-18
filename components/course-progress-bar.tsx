"use client";

import Link from "next/link";
import { useLearningProgress } from "./progress-client";

export function CourseProgressBar({
  slug,
  lessonCount,
  projectCount,
  variant = "page",
}: {
  slug: string;
  lessonCount: number;
  projectCount: number;
  variant?: "page" | "band";
}) {
  const { ready, percent } = useLearningProgress();
  const value = ready ? percent(slug, lessonCount, projectCount) : 0;
  const band = variant === "band";
  return (
    <div className={band ? "w-full max-w-md shrink-0 lg:w-[22rem]" : "mb-10"}>
      <div className={`mb-2 flex flex-wrap items-baseline justify-between gap-2 ${band ? "text-sm text-white" : ""}`}>
        <p className="font-semibold">Tutorial progress: {ready ? `${value}%` : "..."}</p>
        <Link href="/progress" className={band ? "text-sm underline decoration-white/40 underline-offset-4 hover:decoration-white" : "text-sm text-accent underline"}>
          Review progress
        </Link>
      </div>
      <div
        className={band ? "ih-progress ih-progress-on-band" : "ih-progress"}
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
