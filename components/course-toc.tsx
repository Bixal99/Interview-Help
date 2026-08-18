import Link from "next/link";
import { Emphasis } from "./course-welcome";
import type { CourseNav, CourseNavPhase } from "@/lib/navigation";
import { lessonPath, projectPathFor } from "@/lib/parse-course";

function PhaseCard({ navSlug, phase }: { navSlug: string; phase: CourseNavPhase }) {
  const lessonCount = phase.lessons.length + (phase.hasProject ? 1 : 0);
  return (
    <article className="overflow-hidden border hairline bg-[rgb(var(--surface))] shadow-[0_8px_24px_rgb(40_42_53_/_0.06)]">
      <div className="border-l-[5px] border-[#04AA6D] p-5 sm:p-7">
        <div className="flex gap-4 sm:gap-5">
          <div
            className="grid size-12 shrink-0 place-items-center bg-[#04AA6D] text-lg font-bold tabular-nums text-white sm:size-14 sm:text-xl"
            aria-hidden="true"
          >
            {phase.number}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-bold leading-snug sm:text-2xl">{phase.title}</h3>
              <p className="text-sm font-semibold tabular-nums text-muted">
                {lessonCount} {lessonCount === 1 ? "topic" : "topics"}
              </p>
            </div>
            {phase.goal && (
              <p className="mt-2 max-w-[70ch] text-[15px] leading-relaxed text-muted sm:text-base">
                <Emphasis text={phase.goal} />
              </p>
            )}
          </div>
        </div>
        <ul className="mt-5 divide-y divide-[rgb(var(--line))]">
          {phase.lessons.map((lesson) => {
            const href = lessonPath(navSlug, phase.id, lesson);
            return (
              <li key={lesson.id}>
                <Link
                  href={href}
                  className="group flex items-start gap-3 px-2 py-3 no-underline transition-colors hover:bg-[#D9EEE1] sm:gap-4 sm:px-3 dark:hover:bg-[#04AA6D]/15"
                >
                  <span className="w-14 shrink-0 pt-0.5 text-sm font-bold tabular-nums text-[#04AA6D] sm:w-16">
                    {lesson.id}
                  </span>
                  <span className="min-w-0 flex-1 font-medium leading-snug group-hover:text-[#04AA6D]">
                    {lesson.title}
                  </span>
                  <span className="hidden pt-0.5 text-[#04AA6D] opacity-0 transition-opacity group-hover:opacity-100 sm:inline" aria-hidden="true">
                    »
                  </span>
                </Link>
                {lesson.children.length > 0 && (
                  <ul className="mb-2 ml-[3.75rem] space-y-0.5 border-l-2 border-[#04AA6D]/35 pl-4 sm:ml-[4.75rem]">
                    {lesson.children.map((child) => (
                      <li key={child.id}>
                        <Link
                          href={href}
                          className="group flex items-baseline gap-3 py-1.5 text-[14px] no-underline hover:text-[#04AA6D]"
                        >
                          <span className="shrink-0 font-semibold tabular-nums text-[#04AA6D]">{child.id}</span>
                          <span className="text-muted group-hover:text-[#04AA6D]">{child.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
          {phase.hasProject && (
            <li>
              <Link
                href={projectPathFor(navSlug, phase.id)}
                className="group flex items-center gap-3 px-2 py-3 no-underline hover:bg-[#D9EEE1] sm:gap-4 sm:px-3 dark:hover:bg-[#04AA6D]/15"
              >
                <span className="w-14 shrink-0 text-sm font-bold tabular-nums text-[#04AA6D] sm:w-16">{phase.number}</span>
                <span className="font-medium group-hover:text-[#04AA6D]">Phase project</span>
                <span className="ml-auto rounded-full bg-[#04AA6D] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
                  Build
                </span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </article>
  );
}

export function CourseToc({ nav }: { nav: CourseNav }) {
  return (
    <div className="mt-10 space-y-14">
      {nav.chapters.map((chapter) => (
        <section key={chapter.id}>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#04AA6D]">{chapter.title}</h3>
            <p className="hidden text-sm text-muted sm:block">
              Phases {chapter.phases[0]?.number}
              {chapter.phases.length > 1 ? `–${chapter.phases[chapter.phases.length - 1]?.number}` : ""}
            </p>
          </div>
          {chapter.summary && (
            <p className="mb-5 max-w-[80ch] text-[15px] leading-relaxed text-muted sm:text-base">
              <Emphasis text={chapter.summary} />
            </p>
          )}
          <div className="grid gap-5">
            {chapter.phases.map((phase) => (
              <PhaseCard key={phase.id} navSlug={nav.slug} phase={phase} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
