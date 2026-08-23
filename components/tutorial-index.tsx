"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, ChevronRight } from "lucide-react";
import type { CourseNav, CourseNavPhase } from "@/lib/navigation";
import { lessonPath, phasePath, projectPathFor } from "@/lib/parse-course";
import {
  sidebarLessonLabel,
  sidebarPhaseLabel,
  sidebarProjectLabel,
  sidebarUnitLabel,
} from "@/lib/sidebar-labels";
import { regularLessonIds } from "@/lib/navigation";
import { phaseIdKey } from "@/lib/progress-map";
import { useOptionalProgress } from "./progress-client";

export function sidebarOpenKey(slug: string) {
  return `ih-sidebar-open:${slug}`;
}

function readOpenPhases(slug: string): string[] {
  try {
    const raw = sessionStorage.getItem(sidebarOpenKey(slug));
    const parsed: unknown = raw ? JSON.parse(raw) : null;
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function writeOpenPhases(slug: string, ids: string[]) {
  try {
    sessionStorage.setItem(sidebarOpenKey(slug), JSON.stringify([...new Set(ids)]));
  } catch {
    // Private-mode storage refusals only lose expansion memory, not function.
  }
}

function PhaseBlock({
  navSlug,
  phase,
  phaseDone,
  completedLessons,
  locked,
}: {
  navSlug: string;
  phase: CourseNavPhase;
  phaseDone?: boolean;
  completedLessons: string[];
  locked: boolean;
}) {
  const pathname = usePathname();
  const phaseHref = phasePath(navSlug, phase.id);
  const childHrefs = [
    ...phase.lessons.map((lesson) => lessonPath(navSlug, phase.id, lesson)),
    ...(phase.hasProject ? [projectPathFor(navSlug, phase.id)] : []),
  ];
  const onChild = childHrefs.includes(pathname);
  const onPhase = pathname === phaseHref;
  const hasKids = childHrefs.length > 0;
  const [open, setOpen] = useState(onChild || onPhase);

  // Restore user-expanded phases after mount (sessionStorage is unavailable
  // during the server render, so it cannot seed the initial state safely).
  useEffect(() => {
    if (!hasKids) return;
    setOpen((current) => current || readOpenPhases(navSlug).includes(phase.id));
    // Run once per phase on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the phase containing the current route expanded (and remembered).
  useEffect(() => {
    if (!(onChild || onPhase) || !hasKids) return;
    setOpen(true);
    const stored = readOpenPhases(navSlug);
    if (!stored.includes(phase.id)) writeOpenPhases(navSlug, [...stored, phase.id]);
  }, [onChild, onPhase, hasKids, navSlug, phase.id]);

  const toggle = useCallback(() => {
    setOpen((current) => {
      const next = !current;
      const stored = new Set(hasKids ? readOpenPhases(navSlug) : []);
      if (next) stored.add(phase.id);
      else stored.delete(phase.id);
      writeOpenPhases(navSlug, [...stored]);
      return next;
    });
  }, [hasKids, navSlug, phase.id]);

  return (
    <div className="ih-index-phase">
      <div
        className={`ih-index-row${onPhase || onChild ? " is-current" : ""}${locked ? " is-locked" : ""}`}
      >
        <Link
          href={phaseHref}
          className={onPhase ? "active" : undefined}
          aria-disabled={locked}
          tabIndex={locked ? -1 : undefined}
          onClick={locked ? (event) => event.preventDefault() : undefined}
        >
          <span className="ih-index-num">{phase.number}</span>
          <span className="ih-index-label">{sidebarPhaseLabel(navSlug, phase.id, phase.title)}</span>
        </Link>
        {hasKids ? (
          <button
            type="button"
            className={`ih-index-caret${open ? " is-open" : ""}`}
            aria-expanded={open}
            aria-label={open ? "Hide sections" : "Show sections"}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              toggle();
            }}
          >
            <ChevronRight size={14} />
          </button>
        ) : null}
      </div>
      {open && hasKids ? (
        <div className="ih-index-sub">
          {phase.lessons.map((lesson) => {
            const href = lessonPath(navSlug, phase.id, lesson);
            const lessonDone = completedLessons.includes(lesson.id);
            return (
              <Link
                key={lesson.id}
                href={href}
                className={pathname === href ? "active" : undefined}
                aria-disabled={locked}
                tabIndex={locked ? -1 : undefined}
                onClick={locked ? (event) => event.preventDefault() : undefined}
              >
                <span className="ih-index-num">{lesson.id.replace(/^sp/i, "U")}</span>
                <span className="ih-index-label">
                  {sidebarLessonLabel(navSlug, lesson.id, lesson.title)}
                </span>
                {lessonDone ? (
                  <span className="ih-index-lesson-done" aria-label="Lesson complete">
                    <Check size={11} />
                  </span>
                ) : null}
              </Link>
            );
          })}
          {phase.hasProject ? (
            <Link
              href={projectPathFor(navSlug, phase.id)}
              className={pathname === projectPathFor(navSlug, phase.id) ? "active" : undefined}
              aria-disabled={locked}
              tabIndex={locked ? -1 : undefined}
              onClick={locked ? (event) => event.preventDefault() : undefined}
            >
              <span className="ih-index-num">P</span>
              <span className="ih-index-label">
                {phase.projectTitle ?? sidebarProjectLabel(navSlug)}
                {phase.projectKind ? ` · ${phase.projectKind}` : ""}
              </span>
            </Link>
          ) : null}
          {phaseDone ? (
            <span className="ih-index-done">
              <Check size={12} /> Done
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export function TutorialIndex({
  nav,
  homeHref,
}: {
  nav: CourseNav;
  homeHref: string;
}) {
  const pathname = usePathname();
  const progress = useOptionalProgress();
  const state = progress?.course(nav.slug);
  const phaseIds = nav.chapters.flatMap((chapter) => chapter.phases.map((phase) => phase.id));

  return (
    <nav className="ih-index-nav" aria-label={`${nav.shortName} tutorial`}>
      <Link href={homeHref} className={pathname === homeHref ? "active" : undefined}>
        Home
      </Link>
      {nav.chapters.map((chapter) => (
        <div key={chapter.id} className="ih-index-group">
          <p className="ih-index-section">{sidebarUnitLabel(nav.slug, chapter.id, chapter.title)}</p>
          {chapter.phases.map((phase) => {
            const lessonIds = regularLessonIds(phase);
            const projectDone =
              !phase.hasProject ||
              (state?.completedProjects ?? []).some(
                (id) => phaseIdKey(id) === phaseIdKey(phase.id),
              );
            const phaseDone =
              lessonIds.length > 0 &&
              lessonIds.every((id) => state?.completedLessons.includes(id)) &&
              projectDone;
            const locked = progress?.ready
              ? !progress.canEnter(nav.slug, phase.id, phaseIds)
              : false;
            return (
              <PhaseBlock
                key={phase.id}
                navSlug={nav.slug}
                phase={phase}
                phaseDone={phaseDone}
                completedLessons={state?.completedLessons ?? []}
                locked={locked}
              />
            );
          })}
          <Link
            href={chapter.glossaryHref}
            className={pathname === chapter.glossaryHref ? "active" : undefined}
          >
            <span className="ih-index-num">G</span>
            <span className="ih-index-label">Glossary</span>
          </Link>
        </div>
      ))}
    </nav>
  );
}
