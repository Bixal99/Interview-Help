"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, ChevronRight } from "lucide-react";
import type { CourseNav, CourseNavPhase } from "@/lib/navigation";
import { lessonPath, phasePath, projectPathFor } from "@/lib/parse-course";
import { useOptionalProgress } from "./progress-client";

function minimalLabel(title: string) {
  let text = title.replace(/^phase\s+\d+\s*/i, "").trim();
  text = text.split(/\s*[&|:–—]\s*/)[0] ?? text;
  text = text.replace(/^(from|the|a)\s+/i, "");
  text = text.replace(/^programming\s+/i, "");
  text = text.split(/\s+to\s+/i)[0] ?? text;
  if (text.length <= 18) return text;
  const words = text.split(/\s+/).filter(Boolean);
  let out = words[0] ?? text;
  for (const word of words.slice(1)) {
    if (`${out} ${word}`.length > 18) break;
    out += ` ${word}`;
  }
  return out;
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
          <span className="ih-index-label">{minimalLabel(phase.title)}</span>
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
            <ChevronRight size={14} />
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
                <span className="ih-index-label">{minimalLabel(lesson.title)}</span>
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
      <Link href={homeHref} className={pathname === homeHref ? "active" : undefined}>
        Home
      </Link>
      {nav.chapters.map((chapter) => (
        <div key={chapter.id} className="ih-index-group">
          <p className="ih-index-section">{minimalLabel(chapter.title)}</p>
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
