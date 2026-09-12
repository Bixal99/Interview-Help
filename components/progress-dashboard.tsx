"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { AppIcon } from "@/components/icons/app-icon";
import { useLearningProgress } from "./progress-client";
import { WindingRoadmap } from "./winding-roadmap";
import { trailStatuses } from "@/lib/progress-map";
import { coursePercent, lessonsDone } from "@/lib/progress-storage";
import { resumeHrefFor } from "@/lib/resume-href";

export type ProgressMapStop = {
  id: string;
  title: string;
  href: string;
  completeId: string;
  kind: "topic" | "exercise" | "project";
};

export type ProgressCourseView = {
  slug: string;
  shortName: string;
  barLabel: string;
  description: string;
  lessonCount: number;
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
      lessonIds: string[];
      lessons: { id: string; slug: string; title: string }[];
      stops: ProgressMapStop[];
    }[];
  }[];
};

const SELECTED_KEY = "ih-progress-campaign";

export function ProgressDashboard({ courses }: { courses: ProgressCourseView[] }) {
  const { ready, resume, exportJson, importJson, reset, course } = useLearningProgress();
  const fileRef = useRef<HTMLInputElement>(null);
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
      const state = course(item.slug);
      map[item.slug] = coursePercent(state, item.lessonCount, item.phaseCount);
    }
    return map;
  }, [courses, course]);

  const active = courses.find((item) => item.slug === selected) ?? courses[0];
  const activeState = active ? course(active.slug) : null;
  const phaseList = useMemo(
    () =>
      active?.chapters.flatMap((chapter) =>
        chapter.phases.map((phase) => ({
          id: phase.id,
          hasProject: phase.hasProject,
          lessonIds: phase.lessonIds,
          href: phase.href,
        })),
      ) ?? [],
    [active],
  );
  const statuses = useMemo(() => {
    if (!active || !activeState) return [];
    return trailStatuses(
      phaseList,
      activeState.completedLessons,
      activeState.currentPhaseId,
      activeState.currentLessonId,
      activeState.completedProjects,
    );
  }, [active, activeState, phaseList]);
  const here = phaseList.find((_, index) => statuses[index] === "here") ?? phaseList[0];
  const continueHref =
    current?.slug === active?.slug && current.href
      ? current.href
      : here?.href ?? `/courses/${active?.slug ?? ""}`;
  const totalLessons = courses.reduce((sum, item) => sum + item.lessonCount, 0);
  const totalProjects = courses.reduce((sum, item) => sum + item.phaseCount, 0);
  const clearedLessons = courses.reduce((sum, item) => sum + lessonsDone(course(item.slug)), 0);
  const clearedProjects = courses.reduce((sum, item) => sum + Math.min(item.phaseCount, new Set(course(item.slug).completedProjects).size), 0);
  const overall = totalLessons + totalProjects ? Math.round(((clearedLessons + clearedProjects) / (totalLessons + totalProjects)) * 100) : 0;

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
    try {
      const blob = new Blob([exportJson()], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "interview-help-progress.json";
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Could not export progress.");
    }
  }

  function confirmReset() {
    try {
      reset();
      setSelected(courses[0]?.slug ?? "");
      setResetOpen(false);
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Could not reset progress.");
    }
  }

  function pick(slug: string) {
    setSelected(slug);
    sessionStorage.setItem(SELECTED_KEY, slug);
  }

  if (!active) return null;

  const mapToolbar: ReactNode = (
    <div className="ih-progress-map-toolbar">
      <button type="button" className="ih-progress-tool" onClick={onExport}>
        <AppIcon name="exportProgress" size={16} /> Export
      </button>
      <button type="button" className="ih-progress-tool" onClick={() => fileRef.current?.click()}>
        <AppIcon name="importProgress" size={16} /> Import
      </button>
      <button type="button" className="ih-progress-tool is-danger" onClick={() => setResetOpen(true)}>
        <AppIcon name="resetProgress" size={16} /> Reset
      </button>
      <input
        ref={fileRef}
        type="file"
        accept="application/json"
        hidden
        onChange={onImport}
      />
    </div>
  );

  return (
    <main id="main-content" className="ih-studio ih-progress-page">
      <div className="ih-studio-shell">
        <header className="ih-studio-hero">
          <div className="ih-progress-hero-row">
            <div>
              <h1>Progress</h1>
              <p className="ih-studio-lead">
                Live completion across each roadmap. Pick a course and continue from where you left off.
              </p>
            </div>
          </div>
          <ul className="ih-studio-stats">
            <li>
              <b>{courses.length}</b>
              <span>roadmaps</span>
            </li>
            <li>
              <b>{clearedLessons}</b>
              <span>lessons complete</span>
            </li>
            <li>
              <b>{clearedProjects}</b>
              <span>projects complete</span>
            </li>
            <li>
              <b>{`${overall}%`}</b>
              <span>overall complete</span>
            </li>
          </ul>
          <p className="ih-progress-note">Stored only in this browser. Export a backup before you clear site data.</p>
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

          <div className="ih-progress-map">
            <WindingRoadmap
              key={active.slug}
              course={active}
              continueHref={continueHref}
              continueLabel="Continue"
              showIntro={false}
              toolbar={mapToolbar}
            />
          </div>
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
