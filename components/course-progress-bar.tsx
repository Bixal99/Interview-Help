"use client";

import Link from "next/link";
import { phasesDone } from "@/lib/progress-storage";
import { useLearningProgress } from "./progress-client";

export function CourseProgressBar({
  slug,
  phaseCount,
  variant = "page",
}: {
  slug: string;
  phaseCount: number;
  variant?: "page" | "band" | "inline";
}) {
  const { ready, percent, course } = useLearningProgress();
  const value = ready ? percent(slug, phaseCount) : 0;
  const done = ready ? phasesDone(course(slug)) : 0;
  const band = variant === "band";
  const inline = variant === "inline";

  return (
    <div className={band ? "w-full max-w-md shrink-0 lg:w-[22rem]" : inline ? "ih-tutorial-progress" : "mb-10"}>
      <div
        className={`mb-2 flex flex-wrap items-baseline justify-between gap-2 ${
          band ? "text-sm text-white" : inline ? "text-sm text-[#282A35]" : ""
        }`}
      >
        <p className="font-semibold">
          {ready ? (
            <>
              {done} / {phaseCount} phases complete ({value}%)
            </>
          ) : (
            "Loading progress..."
          )}
        </p>
        {!inline ? (
          <Link
            href="/progress"
            className={
              band
                ? "text-sm underline decoration-white/40 underline-offset-4 hover:decoration-white"
                : "text-sm text-accent underline"
            }
          >
            Review progress
          </Link>
        ) : null}
      </div>
      <div
        className={`ih-progress${band ? " ih-progress-on-band" : ""}${inline ? " ih-progress-inline" : ""}`}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-label={`${done} of ${phaseCount} phases complete`}
      >
        <span style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
