import Link from "next/link";
import type { CourseRoadmap } from "@/lib/course-roadmap";
import { unitChapterPath } from "@/lib/course-routes";

function TopicList({
  topics,
}: {
  topics: { id: string; title: string; children?: { id: string; title: string }[] }[];
}) {
  if (!topics.length) return null;
  return (
    <ul className="mt-4 space-y-1 text-[15px] leading-relaxed text-ink">
      {topics.map((topic) => (
        <li key={topic.id}>
          <span className="font-semibold tabular-nums text-[#04AA6D]">{topic.id}</span>{" "}
          <span>{topic.title}</span>
          {topic.children?.length ? (
            <ul className="mt-1 ml-4 space-y-0.5 border-l-2 border-[#04AA6D]/35 pl-3">
              {topic.children.map((child) => (
                <li key={child.id}>
                  <span className="font-semibold tabular-nums text-[#04AA6D]">{child.id}</span>{" "}
                  <span>{child.title}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export function CourseRoadmapToc({
  slug,
  roadmap,
  existingChapters,
}: {
  slug: string;
  roadmap: CourseRoadmap;
  existingChapters: string[];
}) {
  const existing = new Set(existingChapters);
  return (
    <div className="mt-10 space-y-14">
      {roadmap.units.map((unit) => (
        <section key={unit.number} id={`unit-${unit.number}`}>
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-wide text-[#04AA6D] sm:text-3xl">
            UNIT {unit.roman}: {unit.title}
          </h2>
          <div className="grid gap-5">
            {unit.chapters.map((chapter) => {
              const onDisk = existing.has(`${unit.number}:${chapter.number}`);
              const href = unitChapterPath(slug, unit.number, chapter.number);
              return (
                <article
                  key={chapter.number}
                  id={`chapter-${chapter.number}`}
                  className="overflow-hidden border hairline bg-[rgb(var(--surface))] shadow-[0_8px_24px_rgb(40_42_53_/_0.06)]"
                >
                  <div className="border-l-[5px] border-[#04AA6D] p-5 sm:p-7">
                    <div className="flex gap-4 sm:gap-5">
                      <div
                        className="grid size-12 shrink-0 place-items-center bg-[#04AA6D] text-lg font-bold tabular-nums text-white sm:size-14 sm:text-xl"
                        aria-hidden="true"
                      >
                        {chapter.number}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-bold leading-snug sm:text-2xl">
                          <Link href={href} className="no-underline hover:text-[#04AA6D]">
                            CHAPTER {chapter.number}: {chapter.title}
                          </Link>
                        </h3>
                        {!onDisk ? (
                          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-ink/70">
                            On the roadmap — Content.md not written yet
                          </p>
                        ) : null}
                        <TopicList topics={chapter.topics} />
                        <p className="mt-4">
                          <Link
                            href={href}
                            className="text-sm font-semibold uppercase tracking-wide text-[#04AA6D] underline-offset-4 hover:underline"
                          >
                            {onDisk ? "Open chapter »" : "Coming soon page »"}
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
