"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useState } from "react";
import { AppIcon } from "@/components/icons/app-icon";
import { PracticeRichText } from "@/components/practice-rich-text";
import type { ProgressCourseView } from "@/components/progress-dashboard";
import { phaseProgressPercent, trailStatuses, type TrailStatus } from "@/lib/progress-map";
import { windingLayout, windingMetrics, windingPath, windingTerminals } from "@/lib/winding-layout";
import { useLearningProgress } from "@/components/progress-client";

function nodePaint(status: TrailStatus, isSelected: boolean) {
  if (status === "cleared") return { fill: "#04AA6D", stroke: "#04AA6D", number: "#fff" };
  if (status === "here" || isSelected) return { fill: "#fff", stroke: "#282A35", number: "#282A35" };
  if (status === "open") return { fill: "#fff", stroke: "#04AA6D", number: "#04AA6D" };
  return { fill: "#F3F3F3", stroke: "#C8CDD2", number: "#9AA0A6" };
}

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
  const { course: courseState } = useLearningProgress();
  const maskId = useId().replace(/:/g, "");
  const [selected, setSelected] = useState(0);

  const state = courseState(course.slug);
  const phases = useMemo(() => course.chapters.flatMap((chapter) => chapter.phases), [course]);
  const statuses = useMemo(
    () => trailStatuses(phases, state.completedProjects, state.completedPhases, state.currentPhaseId),
    [phases, state],
  );
  const layout = useMemo(() => windingLayout(phases.length), [phases.length]);
  const pathD = useMemo(() => windingPath(layout.points, layout.cols), [layout.points, layout.cols]);
  const metrics = useMemo(() => windingMetrics(layout.points), [layout.points]);
  const terminals = useMemo(() => windingTerminals(layout.points, layout.cols), [layout.points, layout.cols]);
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
  }, [course.slug, liveIndex]);

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
            stroke="#EEF1F3"
            strokeWidth="14"
            strokeLinecap="round"
          />
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
            stroke="#C5CBD1"
            strokeWidth="2"
            strokeDasharray="0 16"
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
          {terminals ? (
            <g className="ih-winding-ends">
              <circle cx={terminals.start.x} cy={terminals.start.y} r="7" fill="#04AA6D" />
              <text
                x={terminals.start.x}
                y={terminals.start.y - 14}
                textAnchor="middle"
                fill="#04AA6D"
                fontSize="11"
                fontWeight="800"
                letterSpacing="0.12em"
                fontFamily="Source Sans 3, ui-sans-serif, sans-serif"
              >
                START
              </text>
              <circle cx={terminals.end.x} cy={terminals.end.y} r="7" fill={allDone ? "#04AA6D" : "#D5D8DC"} />
              <rect
                x={terminals.end.x + 11}
                y={terminals.end.y - 9}
                width="6"
                height="12"
                fill={allDone ? "#04AA6D" : "#D5D8DC"}
              />
              <text
                x={terminals.end.x}
                y={terminals.end.y - 14}
                textAnchor="middle"
                fill={allDone ? "#04AA6D" : "#888"}
                fontSize="11"
                fontWeight="800"
                letterSpacing="0.12em"
                fontFamily="Source Sans 3, ui-sans-serif, sans-serif"
              >
                FINISH
              </text>
            </g>
          ) : null}
          {layout.points.map((point, index) => {
            const status = statuses[index] ?? "locked";
            const isSelected = index === selected;
            const paint = nodePaint(status, isSelected);
            return (
              <g key={phases[index]?.id ?? index}>
                {isSelected || status === "here" ? (
                  <circle cx={point.x} cy={point.y} r="40" fill="none" stroke="#04AA6D" strokeWidth="1.5" className="ih-winding-pulse" />
                ) : null}
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="22"
                  fill={paint.fill}
                  stroke={paint.stroke}
                  strokeWidth="3"
                  strokeDasharray={status === "locked" ? "4 3" : undefined}
                />
                <text
                  x={point.x}
                  y={point.y + 5}
                  textAnchor="middle"
                  fill={paint.number}
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
          const xRatio = point.x / layout.width;
          const capSide = xRatio < 0.3 ? "is-cap-left" : xRatio > 0.7 ? "is-cap-right" : "is-cap-mid";
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
                <span className={`ih-winding-caption ih-winding-caption-float ${capSide}`}>
                  <em>Phase {index + 1}</em>
                  <strong>{phase.title}</strong>
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      {current ? (
        <div className={`ih-winding-caption-dock is-${currentStatus}`} aria-live="polite">
          <span className="ih-winding-caption">
            <em>Phase {selected + 1}</em>
            <strong>{current.title}</strong>
          </span>
        </div>
      ) : null}
    </section>
  );
}
