"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import { AppIcon } from "@/components/icons/app-icon";
import { PracticeRichText } from "@/components/practice-rich-text";
import type { ProgressCourseView } from "@/components/progress-dashboard";
import { useLearningProgress } from "@/components/progress-client";
import { chapterProgress, trailFillPercent, trailStatuses, type TrailStatus } from "@/lib/progress-map";

function statusLabel(status: TrailStatus) {
  if (status === "cleared") return "Complete";
  if (status === "here") return "Current";
  if (status === "open") return "Open";
  return "Locked";
}

function chapterTone(slice: TrailStatus[]): TrailStatus {
  if (!slice.length) return "locked";
  if (slice.every((status) => status === "cleared")) return "cleared";
  if (slice.some((status) => status === "here")) return "here";
  if (slice.some((status) => status === "open" || status === "cleared")) return "open";
  return "locked";
}

export function ProgressTrail({ course }: { course: ProgressCourseView }) {
  const { ready, course: courseState } = useLearningProgress();
  const hereRef = useRef<HTMLLIElement>(null);
  const state = ready ? courseState(course.slug) : null;
  const phases = useMemo(() => course.chapters.flatMap((chapter) => chapter.phases), [course]);
  const statuses = useMemo(
    () =>
      ready && state
        ? trailStatuses(phases, state.completedProjects, state.completedPhases, state.currentPhaseId)
        : phases.map((_, index) => (index === 0 ? "here" : "locked") as TrailStatus),
    [phases, ready, state],
  );
  const hereIndex = statuses.findIndex((status) => status === "here");

  const chapterSlices = useMemo(() => {
    let offset = 0;
    return course.chapters.map((chapter) => {
      const slice = statuses.slice(offset, offset + chapter.phases.length);
      offset += chapter.phases.length;
      return {
        chapter,
        slice,
        progress: chapterProgress(slice),
        tone: chapterTone(slice),
        fill: trailFillPercent(slice),
      };
    });
  }, [course.chapters, statuses]);

  useEffect(() => {
    if (hereIndex <= 0 || !hereRef.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    hereRef.current.scrollIntoView({ block: "center", behavior: reduce ? "auto" : "smooth" });
  }, [course.slug, ready, hereIndex]);

  if (!ready) {
    return (
      <div className="ih-roadmap" aria-busy="true">
        <p className="ih-roadmap-loading">Loading roadmap…</p>
      </div>
    );
  }

  return (
    <div className="ih-roadmap">
      {chapterSlices.length > 1 ? (
        <ol className="ih-roadmap-overview" aria-label="Chapters">
          {chapterSlices.map(({ chapter, progress, tone }, index) => (
            <li key={chapter.id} className={`ih-roadmap-overview-item is-${tone}`}>
              {index > 0 ? <span className="ih-roadmap-overview-rail" aria-hidden="true" /> : null}
              <a className="ih-roadmap-overview-node" href={`#roadmap-${chapter.id}`}>
                {tone === "cleared" ? <AppIcon name="complete" size={14} /> : <span>{index + 1}</span>}
              </a>
              <p className="ih-roadmap-overview-title">{chapter.title}</p>
              <p className="ih-roadmap-overview-meta">
                {progress.cleared}/{progress.total}
              </p>
            </li>
          ))}
        </ol>
      ) : null}

      <ol className="ih-roadmap-steps" aria-label={`${course.shortName} roadmap`}>
        {chapterSlices.map(({ chapter, slice, progress, tone, fill }) => (
          <li key={chapter.id} id={`roadmap-${chapter.id}`} className={`ih-roadmap-act is-${tone}`}>
            <div className="ih-roadmap-act-head">
              <p className="ih-roadmap-act-kicker">
                {progress.cleared} of {progress.total} phases
              </p>
              <h3>{chapter.title}</h3>
              {chapter.summary ? <p className="ih-roadmap-act-copy">{chapter.summary}</p> : null}
            </div>
            <ol className="ih-roadmap-phase-list" style={{ ["--roadmap-fill" as string]: `${fill}%` }}>
              {chapter.phases.map((phase, index) => {
                const status = slice[index] ?? "locked";
                const locked = status === "locked";
                const body = (
                  <>
                    <p className="ih-roadmap-kicker">{statusLabel(status)}</p>
                    <p className="ih-roadmap-title">
                      {phase.number ? `${phase.number} · ` : null}
                      {phase.title}
                    </p>
                    {phase.goal ? <p className="ih-roadmap-goal"><PracticeRichText text={phase.goal} /></p> : null}
                  </>
                );
                return (
                  <li
                    key={phase.id}
                    ref={status === "here" ? hereRef : undefined}
                    className={`ih-roadmap-stop is-${status}`}
                  >
                    <span className="ih-roadmap-node" aria-hidden="true">
                      {status === "cleared" ? (
                        <AppIcon name="complete" size={16} />
                      ) : status === "locked" ? (
                        <AppIcon name="locked" size={14} />
                      ) : (
                        <span>{phase.number || index + 1}</span>
                      )}
                    </span>
                    {locked ? <div className="ih-roadmap-card">{body}</div> : <Link href={phase.href} className="ih-roadmap-card">{body}</Link>}
                  </li>
                );
              })}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}
