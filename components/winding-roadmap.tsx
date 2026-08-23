"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useState, type ReactNode } from "react";
import { AppIcon } from "@/components/icons/app-icon";
import type { ProgressCourseView } from "@/components/progress-dashboard";
import {
  frontierLessonIdSet,
  lessonDotStatus,
  lessonTrailFillLength,
  trailStatuses,
  type LessonDotStatus,
  type TrailStatus,
} from "@/lib/progress-map";
import { windingLayout, windingMetrics, windingPath, windingSegmentLessonPoints, windingTerminals } from "@/lib/winding-layout";
import { useLearningProgress } from "@/components/progress-client";
import { coursePercent } from "@/lib/progress-storage";

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
  toolbar,
}: {
  course: ProgressCourseView;
  continueHref: string;
  continueLabel: string;
  showIntro?: boolean;
  toolbar?: ReactNode;
}) {
  const { course: courseState } = useLearningProgress();
  const maskId = useId().replace(/:/g, "");
  const [selected, setSelected] = useState(0);

  const state = courseState(course.slug);
  const phases = useMemo(
    () =>
      course.chapters.flatMap((chapter) =>
        chapter.phases.map((phase) => ({
          id: phase.id,
          hasProject: phase.hasProject,
          lessonIds: phase.lessonIds,
          lessons: phase.lessons,
          title: phase.title,
          goal: phase.goal,
          href: phase.href,
          unitTitle: chapter.title,
          chapterNumber: phase.number,
        })),
      ),
    [course],
  );
  const allLessonIds = useMemo(() => phases.flatMap((phase) => phase.lessonIds), [phases]);
  const statuses = useMemo(
    () => trailStatuses(phases, state.completedLessons, state.currentPhaseId, state.currentLessonId, state.completedProjects),
    [phases, state],
  );
  const layout = useMemo(() => windingLayout(phases.length), [phases.length]);
  const pathD = useMemo(() => windingPath(layout.points, layout.cols), [layout.points, layout.cols]);
  const metrics = useMemo(() => windingMetrics(layout.points), [layout.points]);
  const terminals = useMemo(() => windingTerminals(layout.points, layout.cols), [layout.points, layout.cols]);
  const frontierIds = useMemo(
    () => frontierLessonIdSet(phases, state.completedLessons, state.currentPhaseId, state.currentLessonId),
    [phases, state.completedLessons, state.currentPhaseId, state.currentLessonId],
  );
  const lessonDots = useMemo(() => {
    const dots: {
      key: string;
      x: number;
      y: number;
      status: LessonDotStatus;
      lessonId: string;
      lessonTitle: string;
      phaseId: string;
      href: string;
    }[] = [];
    if (!layout.points.length) return dots;

    const endPoint = terminals?.end ?? layout.points[layout.points.length - 1];
    for (let index = 0; index < phases.length; index += 1) {
      const phase = phases[index];
      if (!phase?.lessonIds.length) continue;
      const from = layout.points[index];
      const to = index + 1 < layout.points.length ? layout.points[index + 1] : endPoint;
      if (!from || !to) continue;
      const positions = windingSegmentLessonPoints(from, to, phase.lessonIds.length);
      phase.lessonIds.forEach((lessonId, lessonIndex) => {
        const point = positions[lessonIndex];
        const lesson = phase.lessons[lessonIndex];
        if (!point || !lesson) return;
        dots.push({
          key: `${phase.id}-${lessonId}`,
          x: point.x,
          y: point.y,
          lessonId,
          lessonTitle: lesson.title,
          phaseId: phase.id,
          href: `/courses/${course.slug}/phase/${phase.id}/${lesson.slug}`,
          status: lessonDotStatus(
            lessonId,
            phase.lessonIds,
            state.completedLessons,
            state.currentLessonId,
            state.currentPhaseId,
            phase.id,
            lesson.slug,
            frontierIds,
          ),
        });
      });
    }
    return dots;
  }, [
    layout.points,
    phases,
    state.completedLessons,
    state.currentLessonId,
    state.currentPhaseId,
    terminals,
    frontierIds,
    course.slug,
  ]);
  const liveIndex = useMemo(() => {
    const here = statuses.findIndex((status) => status === "here");
    return here >= 0 ? here : 0;
  }, [statuses]);
  const pathPercent = coursePercent(state, allLessonIds.length, phases.filter((phase) => phase.hasProject).length);
  const fillLength = useMemo(
    () =>
      lessonTrailFillLength(
        phases,
        state.completedLessons,
        metrics.lengths,
        metrics.total,
        state.currentPhaseId,
        state.currentLessonId,
      ),
    [phases, state.completedLessons, state.currentPhaseId, state.currentLessonId, metrics.lengths, metrics.total],
  );
  const current = phases[selected] ?? phases[0];
  const currentStatus = statuses[selected] ?? "locked";
  const allDone = allLessonIds.length > 0 && phases.every((phase) =>
    phase.lessonIds.every((id) => state.completedLessons.includes(id)) &&
    (!phase.hasProject || state.completedProjects.some((id) => id === phase.id)),
  );
  const dashOffset = Math.max(0, metrics.total - fillLength);

  useEffect(() => {
    setSelected(liveIndex);
  }, [course.slug, liveIndex]);

  if (!current) return null;

  const currentLessonDone = current.lessonIds.filter((id) => state.completedLessons.includes(id)).length;
  const currentLessonTotal = current.lessonIds.length;
  const focusLesson = (() => {
    const byCurrent = current.lessons.find(
      (lesson) =>
        lesson.id === state.currentLessonId ||
        lesson.slug === state.currentLessonId ||
        (state.currentLessonId && lesson.id.toLowerCase() === state.currentLessonId.toLowerCase()),
    );
    if (byCurrent) return byCurrent;
    const firstOpen = current.lessons.find((lesson) => !state.completedLessons.includes(lesson.id));
    return firstOpen ?? current.lessons[current.lessons.length - 1] ?? null;
  })();
  const continueLessonHref = focusLesson
    ? `/courses/${course.slug}/phase/${current.id}/${focusLesson.slug}`
    : current.href;
  const currentProjectDone = state.completedProjects.some((id) => id === current.id);
  const continueStepHref = currentLessonDone === currentLessonTotal && current.hasProject && !currentProjectDone
    ? `/projects/${course.slug}/phase/${current.id}`
    : continueLessonHref;

  return (
    <section className="ih-winding" aria-label={`${course.shortName} roadmap`}>
      {showIntro ? (
        <div className="ih-winding-top">
          <div>
            <p className="ih-winding-kicker">Course roadmap</p>
            <h2>{course.shortName}</h2>
            <p className="ih-winding-percent">
              {pathPercent}% complete · now on chapter {liveIndex + 1} of {phases.length}
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
          <div className="ih-winding-card-head">
            <span className="ih-winding-card-status">{toneLabel(currentStatus)}</span>
            <p className="ih-winding-card-chapter">
              <span className="ih-winding-card-chapter-num">Chapter {current.chapterNumber}</span>
              <span className="ih-winding-card-chapter-name">{current.title}</span>
            </p>
          </div>
          <h3 className="ih-winding-card-title">
            {focusLesson ? (
              <>
                <span className="ih-winding-card-lesson-id">{focusLesson.id}</span>
                {focusLesson.title}
              </>
            ) : (
              current.title
            )}
          </h3>
          {currentStatus === "locked" ? (
            <p className="ih-winding-card-sub">Finish the lessons in the previous chapter to open this stop.</p>
          ) : currentLessonTotal > 0 ? (
            <p className="ih-winding-card-sub">
              <span className="ih-winding-card-progress-count">
                {currentLessonDone}
                <span className="ih-winding-card-progress-sep">/</span>
                {currentLessonTotal}
              </span>
              <span className="ih-winding-card-progress-label">lessons completed</span>
            </p>
          ) : null}
        </div>
        {currentStatus === "locked" ? null : (
          <Link href={continueStepHref} className="ih-winding-open">
            Continue
            <AppIcon name="next" size={16} />
          </Link>
        )}
      </aside>

      {toolbar}

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
          <path d={pathD} fill="none" stroke="#EEF1F3" strokeWidth="14" strokeLinecap="round" />
          <path
            d={pathD}
            fill="none"
            stroke="#E7E9EB"
            strokeWidth="6"
            strokeDasharray="10 3"
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
            strokeDasharray="10 3"
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
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="22"
                  fill={paint.fill}
                  stroke={paint.stroke}
                  strokeWidth={isSelected || status === "here" ? "3.5" : "3"}
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

        {lessonDots.map((dot) => {
          const tipSide =
            dot.y < 72
              ? dot.x < layout.width * 0.5
                ? "is-tip-right"
                : "is-tip-left"
              : dot.x < layout.width * 0.18
                ? "is-tip-right"
                : dot.x > layout.width * 0.82
                  ? "is-tip-left"
                  : "is-tip-up";
          const tipTitle = dot.lessonTitle.replace(/[\u2013\u2014]/g, ",").replace(/\s{2,}/g, " ").trim();
          const tipLabel = `${dot.lessonId} ${tipTitle}`;
          const tip = (
            <>
              <span className="ih-winding-lesson-mark" aria-hidden="true" />
              <span className="ih-winding-lesson-tip">
                <b>{dot.lessonId}</b> {tipTitle}
              </span>
            </>
          );
          const style = {
            left: `${(dot.x / layout.width) * 100}%`,
            top: `${(dot.y / layout.height) * 100}%`,
          };
          if (dot.status === "locked") {
            return (
              <span
                key={dot.key}
                className={`ih-winding-lesson-hit is-locked ${tipSide}`}
                style={style}
                tabIndex={0}
                aria-label={tipLabel}
              >
                {tip}
              </span>
            );
          }
          return (
            <Link
              key={dot.key}
              href={dot.href}
              className={`ih-winding-lesson-hit is-${dot.status} ${tipSide}`}
              style={style}
              aria-label={tipLabel}
            >
              {tip}
            </Link>
          );
        })}

        {layout.points.map((point, index) => {
          const status = statuses[index] ?? "locked";
          const phase = phases[index];
          const isSelected = index === selected;
          const capSide =
            point.x < layout.width * 0.28 ? "is-cap-left" : point.x > layout.width * 0.72 ? "is-cap-right" : "";
          return (
            <button
              key={`${phase.id}-pin`}
              type="button"
              className={`ih-winding-pin is-${status}${isSelected ? " is-selected" : ""}`}
              style={{
                left: `${(point.x / layout.width) * 100}%`,
                top: `${(point.y / layout.height) * 100}%`,
              }}
              aria-label={`${toneLabel(status)} chapter ${index + 1}: ${phase.title}`}
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
