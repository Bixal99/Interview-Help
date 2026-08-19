"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check } from "lucide-react";
import type { CourseNav } from "@/lib/navigation";
import { lessonPath, phasePath, projectPathFor } from "@/lib/parse-course";
import { useOptionalProgress } from "./progress-client";

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
      <h2 className="ih-index-title">{nav.shortName.toUpperCase()} TUTORIAL</h2>
      <Link href={homeHref} className={pathname === homeHref ? "active" : undefined}>
        {nav.shortName} Home
      </Link>
      {nav.chapters.map((chapter) => (
        <div key={chapter.id}>
          <p className="ih-index-section">{chapter.title}</p>
          {chapter.phases.map((phase) => {
            const phaseHref = phasePath(nav.slug, phase.id);
            const phaseDone = state?.completedProjects.includes(phase.id);
            return (
              <div key={phase.id}>
                <Link href={phaseHref} className={pathname === phaseHref ? "active" : undefined}>
                  <span>{phase.number}. {phase.title}</span>
                  {phaseDone ? <Check size={14} aria-label="Phase complete" /> : null}
                </Link>
                {phase.lessons.map((lesson) => {
                  const href = lessonPath(nav.slug, phase.id, lesson);
                  return (
                    <Link key={lesson.id} href={href} className={`ih-index-child${pathname === href ? " active" : ""}`}>
                      {lesson.id} {lesson.title}
                    </Link>
                  );
                })}
                {phase.hasProject ? (
                  <Link
                    href={projectPathFor(nav.slug, phase.id)}
                    className={`ih-index-child${pathname === projectPathFor(nav.slug, phase.id) ? " active" : ""}`}
                  >
                    {phase.number} Project
                  </Link>
                ) : null}
              </div>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
