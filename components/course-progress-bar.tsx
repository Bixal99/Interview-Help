"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AppIcon } from "@/components/icons/app-icon";
import { lessonsDone } from "@/lib/progress-storage";
import { useLearningProgress } from "./progress-client";

export function CourseProgressBar({
  slug,
  lessonCount,
  projectCount = 0,
  variant = "page",
  gateHref,
}: {
  slug: string;
  lessonCount: number;
  projectCount?: number;
  variant?: "page" | "band" | "inline" | "nav";
  gateHref?: string | null;
}) {
  const router = useRouter();
  const { ready, percent, course, resetCourse } = useLearningProgress();
  const [resetOpen, setResetOpen] = useState(false);
  const value = ready ? percent(slug, lessonCount, projectCount) : 0;
  const state = course(slug);
  const done = ready ? lessonsDone(state) : 0;
  const projectsDone = ready ? Math.min(projectCount, new Set(state.completedProjects).size) : 0;
  const band = variant === "band";
  const inline = variant === "inline";
  const nav = variant === "nav";
  useEffect(() => {
    if (!resetOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setResetOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [resetOpen]);

  function confirmReset() {
    try {
      resetCourse(slug);
      setResetOpen(false);
      router.replace("/courses");
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Could not reset progress.");
    }
  }

  const resetDialog = resetOpen ? (
    <div
      className="ih-confirm"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) setResetOpen(false);
      }}
    >
      <div
        className="ih-confirm-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ih-course-reset-title"
        aria-describedby="ih-course-reset-copy"
      >
        <p className="ih-confirm-kicker">Progress</p>
        <h2 id="ih-course-reset-title">Reset this course?</h2>
        <p id="ih-course-reset-copy">
          This clears your progress for this roadmap in this browser and returns you to Courses.
        </p>
        <div className="ih-confirm-actions">
          <button type="button" className="ih-confirm-cancel" onClick={() => setResetOpen(false)}>
            Cancel
          </button>
          <button type="button" className="ih-confirm-ok" onClick={confirmReset}>
            Reset course
          </button>
        </div>
      </div>
    </div>
  ) : null;

  if (nav) {
    return (
      <>
        <div className={`ih-nav-progress-chip${gateHref ? " has-gate" : ""}`}>
          <div className="ih-nav-progress-main">
            <p className="ih-nav-progress-meta">
              <span className="ih-nav-progress-value">{ready ? `${value}%` : "…"}</span>
              <span className="ih-nav-progress-label">complete</span>
            </p>
            <div
              className="ih-nav-progress-track"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={value}
              aria-label={`${value}% of the course complete (${done} of ${lessonCount} lessons and ${projectsDone} of ${projectCount} projects)`}
            >
              <span className="ih-nav-progress-fill" style={{ width: `${value}%` }} />
            </div>
          </div>
          <button
            type="button"
            className="ih-nav-progress-reset"
            onClick={() => setResetOpen(true)}
            aria-label="Reset course progress"
          >
            <AppIcon name="resetProgress" size={14} />
            Reset
          </button>
          {gateHref ? (
            <Link href={gateHref} className="ih-landing-cta ih-landing-nav-cta ih-nav-progress-gate">
              Previous chapter
            </Link>
          ) : null}
        </div>
        {resetDialog}
      </>
    );
  }

  return (
    <>
      <div
        className={
          band ? "w-full max-w-md shrink-0 lg:w-[22rem]" : inline ? "ih-tutorial-progress" : "mb-10"
        }
      >
        <div
          className={`flex flex-wrap items-baseline justify-between gap-2 ${
            band ? "mb-2 text-sm text-white" : inline ? "mb-2 text-sm text-[#282A35]" : "mb-2"
          }`}
        >
          <p className="font-semibold">{ready ? `${value}% complete` : "Loading…"}</p>
          <div className="flex flex-wrap items-center gap-3">
            {band ? (
              <button
                type="button"
                className="ih-band-progress-reset"
                onClick={() => setResetOpen(true)}
              >
                <AppIcon name="resetProgress" size={14} />
                Reset
              </button>
            ) : null}
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
        </div>
        <div
          className={`ih-progress${band ? " ih-progress-on-band" : ""}${inline ? " ih-progress-inline" : ""}`}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={value}
          aria-label={`${value}% of the course complete (${done} of ${lessonCount} lessons)`}
        >
          <span style={{ width: `${value}%` }} />
        </div>
      </div>
      {resetDialog}
    </>
  );
}
