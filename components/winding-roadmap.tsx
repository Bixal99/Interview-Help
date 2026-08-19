"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useState } from "react";
import { AppIcon } from "@/components/icons/app-icon";
import { PracticeRichText } from "@/components/practice-rich-text";
import type { ProgressCourseView } from "@/components/progress-dashboard";
import { phaseProgressPercent, trailStatuses, type TrailStatus } from "@/lib/progress-map";
import { windingLayout, windingMetrics, windingPath } from "@/lib/winding-layout";
import { useLearningProgress } from "@/components/progress-client";

function toneLabel(status: TrailStatus) {
  if (status === "cleared") return "Complete";
  if (status === "here") return "Current";
  if (status === "open") return "Open";
  return "Locked";
}

export function WindingRoadmap({
  course,
  continueHref,
  continueLabel,
  showIntro = true,
}: {
  course: ProgressCourseView;
  continueHref: string;
  continueLabel: string;
  showIntro?: boolean;
}) {
  const { ready, course: courseState } = useLearningProgress();
  const maskId = useId().replace(/:/g, "");
  const [selected, setSelected] = useState(0);

  const state = ready ? courseState(course.slug) : null;
  const phases = useMemo(() => course.chapters.flatMap((chapter) => chapter.phases), [course]);
  const statuses = useMemo(
    () =>
      ready && state
        ? trailStatuses(phases, state.completedProjects, state.completedPhases, state.currentPhaseId)
        : phases.map((_, index) => (index === 0 ? "here" : "locked") as TrailStatus),
    [phases, ready, state],
  );
  const layout = useMemo(() => windingLayout(phases.length), [phases.length]);
  const pathD = useMemo(() => windingPath(layout.points), [layout.points]);
  const metrics = useMemo(() => windingMetrics(layout.points), [layout.points]);
  const liveIndex = useMemo(() => {
    if (statuses.length && statuses.every((status) => status === "cleared")) return statuses.length - 1;
    const here = statuses.findIndex((status) => status === "here");
    return here >= 0 ? here : 0;
  }, [statuses]);
  const pathPercent = phaseProgressPercent(statuses);
  const current = phases[selected] ?? phases[0];
  const currentStatus = statuses[selected] ?? "locked";
  const allDone = statuses.length > 0 && statuses.every((status) => status === "cleared");
  const fillLength = allDone ? metrics.total : (metrics.lengths[liveIndex] ?? 0);
  const dashOffset = Math.max(0, metrics.total - fillLength);

  useEffect(() => {
    setSelected(liveIndex);
  }, [course.slug, ready, liveIndex]);

  if (!current) return null;

  return (
    <section className="ih-winding" aria-label={`${course.shortName} roadmap`}>
      {showIntro ? (
        <div className="ih-winding-top">
          <div>
            <p className="ih-winding-kicker">Course roadmap</p>
            <h2>{course.shortName}</h2>
            <p className="ih-winding-percent">
              {pathPercent}% complete · now on phase {liveIndex + 1} of {phases.length}
            </p>
          </div>
          <div className="ih-winding-actions">
            <Link href={continueHref} className="ih-winding-go">
              {continueLabel}
              <AppIcon name="next" size={16} />
            </Link>
          </div>
        </div>
      ) : null}

      <aside className={`ih-winding-card is-${currentStatus}`}>
        <div className="ih-winding-card-copy">
          <p className="ih-winding-card-kicker">{toneLabel(currentStatus)} · Phase {selected + 1}</p>
          <h3>{current.title}</h3>
          {current.goal ? <p className="ih-winding-card-sub"><PracticeRichText text={current.goal} /></p> : null}
          {currentStatus === "locked" ? (
            <p className="ih-winding-card-sub">Clear the previous phase project to open this stop.</p>
          ) : null}
        </div>
        {currentStatus === "locked" ? null : (
          <Link href={current.href} className="ih-winding-open">
            Open phase
            <AppIcon name="next" size={16} />
          </Link>
        )}
      </aside>

      <div className="ih-winding-stage">
        <svg
          viewBox={`0 0 ${layout.width} ${layout.height}`}
          className="ih-winding-svg"
          overflow="visible"
          role="img"
          aria-hidden="true"
        >
          <defs>
            <mask id={maskId} maskUnits="userSpaceOnUse">
              <path
                d={pathD}
                pathLength={metrics.total || 1}
                fill="none"
                stroke="#fff"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={metrics.total || 1}
                strokeDashoffset={dashOffset}
                className="ih-winding-reveal"
              />
            </mask>
          </defs>
          <path
            d={pathD}
            fill="none"
            stroke="#E7E9EB"
            strokeWidth="6"
            strokeDasharray="14 6"
            strokeLinecap="round"
          />
          <path
            d={pathD}
            fill="none"
            stroke="#04AA6D"
            strokeWidth="6"
            strokeDasharray="14 6"
            strokeLinecap="round"
            className="ih-winding-ants"
            mask={metrics.total ? `url(#${maskId})` : undefined}
          />
          {layout.points.map((point, index) => {
            const status = statuses[index] ?? "locked";
            const isSelected = index === selected;
            const fill = status === "cleared" ? "#04AA6D" : "#fff";
            const stroke = isSelected || status === "here" ? "#282A35" : status === "cleared" ? "#04AA6D" : "#D6D6D6";
            const numberFill = status === "cleared" ? "#fff" : isSelected || status === "here" ? "#282A35" : "#9AA0A6";
            return (
              <g key={phases[index]?.id ?? index}>
                {isSelected ? (
                  <circle cx={point.x} cy={point.y} r="40" fill="none" stroke="#04AA6D" strokeWidth="1.5" className="ih-winding-pulse" />
                ) : null}
                <circle cx={point.x} cy={point.y} r="22" fill={fill} stroke={stroke} strokeWidth="3" />
                <text
                  x={point.x}
                  y={point.y + 5}
                  textAnchor="middle"
                  fill={numberFill}
                  fontSize="13"
                  fontWeight="700"
                  fontFamily="Source Sans 3, ui-sans-serif, sans-serif"
                >
                  {index + 1}
                </text>
              </g>
            );
          })}
        </svg>

        {layout.points.map((point, index) => {
          const status = statuses[index] ?? "locked";
          const phase = phases[index];
          const isSelected = index === selected;
          return (
            <button
              key={`${phase.id}-pin`}
              type="button"
              className={`ih-winding-pin is-${status}${isSelected ? " is-selected" : ""}`}
              style={{
                left: `${(point.x / layout.width) * 100}%`,
                top: `${(point.y / layout.height) * 100}%`,
              }}
              aria-label={`${toneLabel(status)} phase ${index + 1}: ${phase.title}`}
              aria-pressed={isSelected}
              onClick={() => setSelected(index)}
            >
              {isSelected ? (
                <span className="ih-winding-caption">
                  <em>Phase {index + 1}</em>
                  <strong>{phase.title}</strong>
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </section>
  );
}
