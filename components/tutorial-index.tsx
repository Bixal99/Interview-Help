"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, ChevronRight } from "lucide-react";
import type { CourseNav, CourseNavPhase } from "@/lib/navigation";
import { lessonPath, phasePath, projectPathFor } from "@/lib/parse-course";
import { useOptionalProgress } from "./progress-client";

function navLabel(title: string) {
  return title.split(/\s+[-–—:|]\s+/)[0].replace(/^phase\s+\d+\s*/i, "").trim() || title;
}

function courseTab(name: string) {
  if (name === "Computer Science") return "CS";
  if (name === "IT Administration") return "IT Admin";
  if (name === "Web Development") return "Web";
  if (name === "AI & ML") return "AI";
  return name;
}

function PhaseBlock({
  navSlug,
  phase,
  phaseDone,
}: {
  navSlug: string;
  phase: CourseNavPhase;
  phaseDone?: boolean;
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

  useEffect(() => {
    if (onChild || onPhase) setOpen(true);
  }, [onChild, onPhase]);

  return (
    <div className="ih-index-phase">
      <div className={`ih-index-row${onPhase || onChild ? " is-current" : ""}`}>
        <Link href={phaseHref} className={onPhase ? "active" : undefined}>
          <span className="ih-index-num">{phase.number}</span>
          <span className="ih-index-label">{navLabel(phase.title)}</span>
        </Link>
        {hasKids ? (
          <button
            type="button"
            className={`ih-index-caret${open ? " is-open" : ""}`}
            aria-expanded={open}
            aria-label={open ? "Hide lessons" : "Show lessons"}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setOpen((current) => !current);
            }}
          >
            <ChevronRight size={16} />
          </button>
        ) : null}
      </div>
      {open && hasKids ? (
        <div className="ih-index-sub">
          {phase.lessons.map((lesson) => {
            const href = lessonPath(navSlug, phase.id, lesson);
            return (
              <Link key={lesson.id} href={href} className={pathname === href ? "active" : undefined}>
                <span className="ih-index-num">{lesson.id}</span>
                <span className="ih-index-label">{navLabel(lesson.title)}</span>
              </Link>
            );
          })}
          {phase.hasProject ? (
            <Link
              href={projectPathFor(navSlug, phase.id)}
              className={pathname === projectPathFor(navSlug, phase.id) ? "active" : undefined}
            >
              <span className="ih-index-num">P</span>
              <span className="ih-index-label">Project</span>
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

  return (
    <nav className="ih-index-nav" aria-label={`${nav.shortName} tutorial`}>
      <p className="ih-index-title">{courseTab(nav.shortName)}</p>
      <Link href={homeHref} className={pathname === homeHref ? "active" : undefined}>
        <span className="ih-index-num">0</span>
        <span className="ih-index-label">Home</span>
      </Link>
      {nav.chapters.map((chapter) => (
        <div key={chapter.id} className="ih-index-group">
          <p className="ih-index-section">{navLabel(chapter.title)}</p>
          {chapter.phases.map((phase) => (
            <PhaseBlock
              key={phase.id}
              navSlug={nav.slug}
              phase={phase}
              phaseDone={state?.completedProjects.includes(phase.id)}
            />
          ))}
        </div>
      ))}
    </nav>
  );
}
