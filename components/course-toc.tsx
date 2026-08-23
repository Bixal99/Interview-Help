import Link from "next/link";
import { Emphasis } from "./course-welcome";
import type { CourseNav, CourseNavPhase } from "@/lib/navigation";
import { unitDisplayTitle } from "@/lib/curriculum-labels";
import { lessonPath, projectPathFor } from "@/lib/parse-course";

function PhaseCard({ navSlug, phase }: { navSlug: string; phase: CourseNavPhase }) {
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
            <h3 className="text-xl font-bold leading-snug sm:text-2xl">{phase.title}</h3>
            {phase.goal && (
              <p className="mt-2 text-[15px] leading-relaxed text-ink sm:text-base">
                <Emphasis text={phase.goal} />
              </p>
            )}
          </div>
        </div>
        <ul className="mt-5 divide-y divide-[rgb(var(--line))]">
          {phase.lessons.filter((lesson) => lesson.kind === "lesson").map((lesson) => {
            const href = lessonPath(navSlug, phase.id, lesson);
            return (
              <li key={lesson.id}>
                <Link
                  href={href}
                  className="group flex items-start gap-3 px-2 py-3 no-underline transition-colors hover:bg-[#D9EEE1] sm:gap-4 sm:px-3"
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
                  <ul className="mb-2 ml-6 space-y-0.5 border-l-2 border-[#04AA6D]/35 pl-3 sm:ml-[4.75rem] sm:pl-4">
                    {lesson.children.map((child) => (
                      <li key={child.id}>
                        <Link
                          href={href}
                          className="group flex items-baseline gap-3 py-1.5 text-[14px] no-underline hover:text-[#04AA6D]"
                        >
                          <span className="shrink-0 font-semibold tabular-nums text-[#04AA6D]">{child.id}</span>
                          <span className="text-ink group-hover:text-[#04AA6D]">{child.title}</span>
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
                className="group flex items-center gap-3 px-2 py-3 no-underline hover:bg-[#D9EEE1] sm:gap-4 sm:px-3"
              >
                <span className="w-14 shrink-0 text-sm font-bold tabular-nums text-[#04AA6D] sm:w-16">{phase.number}</span>
                <span className="font-medium group-hover:text-[#04AA6D]">{phase.projectTitle ?? "Chapter project"}</span>
                <span className="ml-auto rounded-full bg-[#04AA6D] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
                  {phase.projectKind ?? "Project"}
                </span>
              </Link>
            </li>
          )}
          {phase.lessons.filter((lesson) => lesson.kind !== "lesson").map((lesson) => {
            const href = lessonPath(navSlug, phase.id, lesson);
            return (
              <li key={lesson.id}>
                <Link
                  href={href}
                  className="group flex items-start gap-3 bg-[#D9EEE1]/35 px-2 py-3 no-underline transition-colors hover:bg-[#D9EEE1] sm:gap-4 sm:px-3"
                >
                  <span className="w-14 shrink-0 pt-0.5 text-sm font-bold tabular-nums text-[#04AA6D] sm:w-16">
                    {lesson.id.replace(/^sp/i, "U").toUpperCase()}
                  </span>
                  <span className="min-w-0 flex-1 font-semibold leading-snug group-hover:text-[#04AA6D]">
                    {lesson.title}
                  </span>
                  <span className="rounded-full bg-[#04AA6D] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
                    {lesson.kind === "story-project" ? "Unit build" : "Checkpoint"}
                  </span>
                </Link>
                {lesson.children.length > 0 && (
                  <ul className="mb-2 ml-6 space-y-0.5 border-l-2 border-[#04AA6D]/35 pl-3 sm:ml-[4.75rem] sm:pl-4">
                    {lesson.children.map((child) => (
                      <li key={child.id}>
                        <Link
                          href={href}
                          className="group flex items-baseline gap-3 py-1.5 text-[14px] no-underline hover:text-[#04AA6D]"
                        >
                          <span className="shrink-0 font-semibold tabular-nums text-[#04AA6D]">{child.id}</span>
                          <span className="text-ink group-hover:text-[#04AA6D]">{child.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
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
          <h3 className="mb-4 text-2xl font-bold uppercase tracking-wide text-[#04AA6D] sm:text-3xl">
            {unitDisplayTitle(chapter.title)}
          </h3>
          {chapter.summary && (
            <p className="mb-5 text-[15px] leading-relaxed text-ink sm:text-base">
              <Emphasis text={chapter.summary} />
            </p>
          )}
          <div className="grid gap-5">
            {chapter.phases.map((phase) => (
              <PhaseCard key={phase.id} navSlug={nav.slug} phase={phase} />
            ))}
            <article className="overflow-hidden border hairline bg-[rgb(var(--surface))] shadow-[0_8px_24px_rgb(40_42_53_/_0.06)]">
              <div className="border-l-[5px] border-[#04AA6D] p-5 sm:p-7">
                <Link
                  href={chapter.glossaryHref}
                  className="group flex items-center gap-3 no-underline hover:text-[#04AA6D]"
                >
                  <span className="grid size-12 shrink-0 place-items-center bg-[#04AA6D] text-lg font-bold text-white sm:size-14 sm:text-xl">
                    G
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xl font-bold leading-snug sm:text-2xl">Glossary</span>
                    <span className="mt-1 block text-[15px] leading-relaxed text-ink">
                      Review key words from this unit before you continue.
                    </span>
                  </span>
                  <span className="hidden text-[#04AA6D] opacity-0 transition-opacity group-hover:opacity-100 sm:inline" aria-hidden="true">
                    »
                  </span>
                </Link>
              </div>
            </article>
          </div>
        </section>
      ))}
    </div>
  );
}
