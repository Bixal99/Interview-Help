import Link from "next/link";
import { Emphasis } from "./course-welcome";
import type { CourseNav, CourseNavPhase } from "@/lib/navigation";
import { unitDisplayTitle } from "@/lib/curriculum-labels";
import { githubSlug } from "@/lib/content-utils";
import { chapterContentPath, chapterLeafPath, chapterPath, unitChapterPath } from "@/lib/course-routes";

function checkpointHref(navSlug: string, phase: CourseNavPhase) {
  return phase.unit != null ? unitChapterPath(navSlug, phase.unit, Number(phase.id)) : chapterPath(navSlug, phase.id);
}

function topicHref(navSlug: string, phase: CourseNavPhase, id: string, title: string) {
  return `${chapterContentPath(navSlug, phase.id, phase.unit)}#${githubSlug(`${id} ${title}`)}`;
}

function PhaseCard({ navSlug, phase }: { navSlug: string; phase: CourseNavPhase }) {
  const content = phase.lessons.find((lesson) => lesson.slug === "content") ?? phase.lessons.find((lesson) => lesson.kind === "lesson");
  const chapterHref = checkpointHref(navSlug, phase);
  const exercise = phase.lessons.find((lesson) => lesson.slug === "exercise");

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
            <h3 className="text-xl font-bold uppercase leading-snug tracking-wide sm:text-2xl">
              <Link href={chapterHref} className="no-underline hover:text-[#04AA6D]">
                {phase.title}
              </Link>
            </h3>
            {phase.goal && (
              <p className="mt-2 text-[15px] leading-relaxed text-ink sm:text-base">
                <Emphasis text={phase.goal} />
              </p>
            )}
          </div>
        </div>
        <ul className="mt-5 divide-y divide-[rgb(var(--line))]">
          {content?.children.map((child) => (
            <li key={`${phase.id}-${child.id}`}>
              <Link
                href={topicHref(navSlug, phase, child.id, child.title)}
                className="group flex items-start gap-3 px-2 py-3 no-underline transition-colors hover:bg-[#D9EEE1] sm:gap-4 sm:px-3"
              >
                <span className="w-14 shrink-0 pt-0.5 text-sm font-bold uppercase tabular-nums text-[#04AA6D] sm:w-16">
                  {child.id}
                </span>
                <span className="min-w-0 flex-1 font-medium uppercase leading-snug tracking-wide group-hover:text-[#04AA6D]">
                  {child.title}
                </span>
                <span className="hidden pt-0.5 text-[#04AA6D] opacity-0 transition-opacity group-hover:opacity-100 sm:inline" aria-hidden="true">
                  »
                </span>
              </Link>
            </li>
          ))}
          {(exercise || phase.hasExercise) && (
            <li>
              <Link
                href={chapterLeafPath(navSlug, phase.id, "exercise", phase.unit)}
                className="group flex items-center gap-3 px-2 py-3 no-underline hover:bg-[#D9EEE1] sm:gap-4 sm:px-3"
              >
                <span className="w-14 shrink-0 text-sm font-bold uppercase tabular-nums text-[#04AA6D] sm:w-16">E</span>
                <span className="font-medium uppercase tracking-wide group-hover:text-[#04AA6D]">Exercise</span>
              </Link>
            </li>
          )}
          {phase.hasProject && (
            <li>
              <Link
                href={chapterLeafPath(navSlug, phase.id, "project", phase.unit)}
                className="group flex items-center gap-3 px-2 py-3 no-underline hover:bg-[#D9EEE1] sm:gap-4 sm:px-3"
              >
                <span className="w-14 shrink-0 text-sm font-bold uppercase tabular-nums text-[#04AA6D] sm:w-16">P</span>
                <span className="min-w-0 flex-1 font-medium uppercase tracking-wide group-hover:text-[#04AA6D]">
                  {phase.projectTitle ?? "Project"}
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
            {chapter.unitExerciseHref ? (
              <article className="overflow-hidden border hairline bg-[rgb(var(--surface))] shadow-[0_8px_24px_rgb(40_42_53_/_0.06)]">
                <div className="border-l-[5px] border-[#04AA6D] p-5 sm:p-7">
                  <Link href={chapter.unitExerciseHref} className="group flex items-center gap-3 no-underline hover:text-[#04AA6D]">
                    <span className="grid size-12 shrink-0 place-items-center bg-[#04AA6D] text-lg font-bold uppercase text-white sm:size-14 sm:text-xl">
                      E
                    </span>
                    <span className="min-w-0 flex-1 text-xl font-bold uppercase leading-snug tracking-wide sm:text-2xl">
                      Exercise
                    </span>
                  </Link>
                </div>
              </article>
            ) : null}
            {chapter.unitProjectHref ? (
              <article className="overflow-hidden border hairline bg-[rgb(var(--surface))] shadow-[0_8px_24px_rgb(40_42_53_/_0.06)]">
                <div className="border-l-[5px] border-[#04AA6D] p-5 sm:p-7">
                  <Link href={chapter.unitProjectHref} className="group flex items-center gap-3 no-underline hover:text-[#04AA6D]">
                    <span className="grid size-12 shrink-0 place-items-center bg-[#04AA6D] text-lg font-bold uppercase text-white sm:size-14 sm:text-xl">
                      P
                    </span>
                    <span className="min-w-0 flex-1 text-xl font-bold uppercase leading-snug tracking-wide sm:text-2xl">
                      {chapter.unitProjectTitle ?? "Project"}
                    </span>
                  </Link>
                </div>
              </article>
            ) : null}
          </div>
        </section>
      ))}
    </div>
  );
}
