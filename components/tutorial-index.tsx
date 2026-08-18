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
  const currentLesson = nav.chapters
    .flatMap((chapter) => chapter.phases.flatMap((phase) => phase.lessons.map((lesson) => ({ phase, lesson }))))
    .find(({ phase, lesson }) => pathname === lessonPath(nav.slug, phase.id, lesson));
  const currentPhase = nav.chapters
    .flatMap((chapter) => chapter.phases)
    .find((phase) => pathname === phasePath(nav.slug, phase.id));
  const nowReading = currentLesson
    ? `${currentLesson.lesson.id} ${currentLesson.lesson.title}`
    : currentPhase
      ? `Phase ${currentPhase.number} ${currentPhase.title}`
      : null;

  return (
    <nav className="text-[15px]" aria-label={`${nav.shortName} tutorial`}>
      <p className="px-3 pb-3 text-sm font-bold tracking-wide">{nav.shortName.toUpperCase()} TUTORIAL</p>
      {nowReading ? (
        <p className="ih-now-reading mx-3 mb-4">
          <span>Now reading</span>
          <strong>{nowReading}</strong>
        </p>
      ) : null}
      <Link href={homeHref} className={`block px-3 py-1.5 ${pathname === homeHref ? "active font-semibold" : "hover:bg-black/5"}`}>HOME</Link>
      {nav.chapters.map((chapter) => (
        <div key={chapter.id} className="mt-3">
          <p className="px-3 pb-1 text-[11px] font-bold uppercase tracking-wide text-muted">{chapter.title}</p>
          {chapter.phases.map((phase) => {
            const phaseDone = state?.completedProjects.includes(phase.id);
            return (
              <div key={phase.id}>
                <Link href={phasePath(nav.slug, phase.id)} className={`flex items-center gap-2 px-3 py-1.5 ${pathname === phasePath(nav.slug, phase.id) ? "active font-semibold" : "hover:bg-black/5"}`}>
                  <span className="min-w-0 flex-1">PHASE {phase.number}</span>
                  {phaseDone && <Check size={14} className="text-success" aria-label="Phase complete" />}
                </Link>
                {phase.lessons.map((lesson) => {
                  const href = lessonPath(nav.slug, phase.id, lesson);
                  const active = pathname === href;
                  return (
                    <Link key={lesson.id} href={href} className={`block px-3 py-1.5 ${active ? "active font-semibold" : "truncate hover:bg-black/5"}`}>
                      {lesson.id} {lesson.title}
                    </Link>
                  );
                })}
                {phase.hasProject && (
                  <Link href={projectPathFor(nav.slug, phase.id)} className={`block px-3 py-1.5 ${pathname === projectPathFor(nav.slug, phase.id) ? "active font-semibold" : "hover:bg-black/5"}`}>
                    Project
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
