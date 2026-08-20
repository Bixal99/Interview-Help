"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { AppIcon, CourseIdentityIcon } from "@/components/icons/app-icon";
import { ICON_SIZE } from "@/lib/icons";
import { useLearningProgress } from "./progress-client";
import { WindingRoadmap } from "./winding-roadmap";
import { phaseProgressPercent, trailStatuses } from "@/lib/progress-map";

export type ProgressCourseView = {
  slug: string;
  shortName: string;
  barLabel: string;
  description: string;
  phaseCount: number;
  chapters: {
    id: string;
    title: string;
    summary?: string;
    phases: {
      id: string;
      number: string;
      title: string;
      goal?: string;
      hasProject: boolean;
      href: string;
    }[];
  }[];
};

function resumeHrefFor(slug: string, phaseId: string, lessonId?: string) {
  return lessonId ? `/courses/${slug}/phase/${phaseId}/${lessonId}` : `/courses/${slug}/phase/${phaseId}`;
}

const SELECTED_KEY = "ih-progress-campaign";
const TILES = ["#D9EEE1", "#FFF4A3", "#FFC0C7", "#96D4FA", "#F3ECEA"];

export function ProgressDashboard({ courses }: { courses: ProgressCourseView[] }) {
  const { ready, resume, exportJson, importJson, reset, course } = useLearningProgress();
  const file = useRef<HTMLInputElement>(null);
  const current = ready ? resume(resumeHrefFor) : null;
  const [selected, setSelected] = useState(courses[0]?.slug ?? "");
  const [resetOpen, setResetOpen] = useState(false);

  useEffect(() => {
    if (!resetOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setResetOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [resetOpen]);

  useEffect(() => {
    const stored = sessionStorage.getItem(SELECTED_KEY);
    if (stored && courses.some((item) => item.slug === stored)) {
      setSelected(stored);
      return;
    }
    if (current?.slug && courses.some((item) => item.slug === current.slug)) {
      setSelected(current.slug);
    }
  }, [current?.slug, courses]);

  const percents = useMemo(() => {
    const map: Record<string, number> = {};
    for (const item of courses) {
      const phases = item.chapters.flatMap((chapter) => chapter.phases);
      const state = course(item.slug);
      const statuses = trailStatuses(phases, state.completedProjects, state.completedPhases, state.currentPhaseId);
      map[item.slug] = phaseProgressPercent(statuses);
    }
    return map;
  }, [courses, course]);

  const active = courses.find((item) => item.slug === selected) ?? courses[0];
  const activeState = active ? course(active.slug) : null;
  const phases = useMemo(() => active?.chapters.flatMap((chapter) => chapter.phases) ?? [], [active]);
  const statuses = useMemo(() => {
    if (!active || !activeState) return [];
    return trailStatuses(phases, activeState.completedProjects, activeState.completedPhases, activeState.currentPhaseId);
  }, [active, activeState, phases]);
  const here = phases.find((_, index) => statuses[index] === "here") ?? phases[0];
  const liveIndex = useMemo(() => {
    if (statuses.length && statuses.every((status) => status === "cleared")) return statuses.length - 1;
    const index = statuses.findIndex((status) => status === "here");
    return index >= 0 ? index : 0;
  }, [statuses]);
  const continueHref =
    current?.slug === active?.slug && current.href ? current.href : here?.href ?? `/courses/${active?.slug ?? ""}`;
  const continueLabel = current?.slug === active?.slug ? "Continue" : "Start here";
  const pathPercent = phaseProgressPercent(statuses);
  const totalPhases = courses.reduce((sum, item) => sum + item.phaseCount, 0);
  const clearedPhases = courses.reduce((sum, item) => sum + Math.round(((percents[item.slug] ?? 0) / 100) * item.phaseCount), 0);
  const overall = totalPhases ? Math.round((clearedPhases / totalPhases) * 100) : 0;

  async function onImport(event: React.ChangeEvent<HTMLInputElement>) {
    const picked = event.target.files?.[0];
    if (!picked) return;
    try {
      importJson(JSON.parse(await picked.text()));
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Could not import that file.");
    }
    event.target.value = "";
  }

  function onExport() {
    const blob = new Blob([exportJson()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "interview-help-progress.json";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  function confirmReset() {
    reset();
    setResetOpen(false);
  }

  function pick(slug: string) {
    setSelected(slug);
    sessionStorage.setItem(SELECTED_KEY, slug);
  }

  if (!active) return null;

  const markColor = TILES[courses.findIndex((item) => item.slug === active.slug) % TILES.length];

  return (
    <main id="main-content" className="ih-studio ih-progress-page">
      <div className="ih-studio-shell">
        <header className="ih-studio-hero">
          <h1>Progress</h1>
          <p className="ih-studio-lead">
            Live completion across each roadmap — pick a course and continue from where you left off.
          </p>
          <ul className="ih-studio-stats">
            <li>
              <b>{courses.length}</b>
              <span>roadmaps</span>
            </li>
            <li>
              <b>{clearedPhases}</b>
              <span>phases cleared</span>
            </li>
            <li>
              <b>{`${overall}%`}</b>
              <span>overall complete</span>
            </li>
          </ul>
        </header>

        <section className="ih-studio-board">
          <div className="ih-studio-chips" role="tablist" aria-label="Roadmaps">
            {courses.map((item) => {
              const value = percents[item.slug] ?? 0;
              const isActive = item.slug === active.slug;
              return (
                <button
                  key={item.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={isActive ? "is-on" : undefined}
                  onClick={() => pick(item.slug)}
                >
                  {item.barLabel}
                  <b>{`${value}%`}</b>
                </button>
              );
            })}
          </div>

          <div className="ih-studio-section-head">
            <span className="ih-studio-mark" style={{ background: markColor }}>
              <CourseIdentityIcon slug={active.slug} size={ICON_SIZE.heading} />
            </span>
            <div>
              <h2>{active.shortName}</h2>
              <p>{active.description}</p>
              <p className="ih-progress-meta">
                {`${pathPercent}% complete · now on phase ${liveIndex + 1} of ${phases.length}`}
              </p>
            </div>
            <Link href={continueHref} className="ih-progress-continue">
              {continueLabel}
              <AppIcon name="next" size={16} />
            </Link>
          </div>

          <WindingRoadmap
            key={active.slug}
            course={active}
            continueHref={continueHref}
            continueLabel={continueLabel}
            showIntro={false}
          />

          <div className="ih-progress-tools">
            <button type="button" className="btn-prev" onClick={onExport}>
              <AppIcon name="exportProgress" size={16} /> Export
            </button>
            <button type="button" className="btn-prev" onClick={() => file.current?.click()}>
              <AppIcon name="importProgress" size={16} /> Import
            </button>
            <button type="button" className="btn-prev" onClick={() => setResetOpen(true)}>
              <AppIcon name="resetProgress" size={16} /> Reset
            </button>
            <input ref={file} type="file" accept="application/json" className="sr-only" onChange={onImport} />
          </div>
          <p className="ih-progress-note">Stored only in this browser. Export a backup before you clear site data.</p>
        </section>
      </div>

      {resetOpen ? (
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
            aria-labelledby="ih-reset-title"
            aria-describedby="ih-reset-copy"
          >
            <p className="ih-confirm-kicker">Progress</p>
            <h2 id="ih-reset-title">Reset all progress?</h2>
            <p id="ih-reset-copy">
              This clears every roadmap in this browser. Export a backup first if you want to keep it.
            </p>
            <div className="ih-confirm-actions">
              <button type="button" className="ih-confirm-cancel" onClick={() => setResetOpen(false)}>
                Cancel
              </button>
              <button type="button" className="ih-confirm-ok" onClick={confirmReset}>
                Reset progress
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
