import { Pager } from "@/components/pager";
import { PhaseCheckpointArt } from "@/components/phase-checkpoint-art";
import type { Neighbor } from "@/lib/navigation";

export function PhaseCheckpoint({
  phaseNumber,
  phaseTitle,
  track,
  goal,
  knowFirst,
  topics,
  prev,
  proceedHref,
}: {
  phaseNumber: string;
  phaseTitle: string;
  track?: string;
  goal?: string;
  knowFirst?: string;
  topics: { id: string; title: string }[];
  prev: Neighbor | null;
  proceedHref: string;
}) {
  return (
    <div className="ih-checkpoint-page flex h-dvh flex-col overflow-hidden">
      <div className="ih-band flex min-h-0 flex-1 items-center px-6 py-5 sm:px-10 lg:px-12">
        <div className="ih-checkpoint-row mx-auto flex h-full w-full max-w-[1200px] flex-col items-center gap-6 lg:flex-row lg:justify-between lg:gap-10">
          <div className="min-w-0 lg:max-w-[34rem]">
            <div className="flex items-end gap-5">
              <div
                className="grid size-11 shrink-0 place-items-center bg-[#04AA6D] text-xl font-bold tabular-nums leading-none text-white sm:size-12 sm:text-2xl"
                aria-hidden="true"
              >
                {phaseNumber}
              </div>
              {track ? (
                <p className="translate-y-[4px] text-lg font-bold uppercase leading-none tracking-[0.2em] text-[#04AA6D] sm:text-xl">{track}</p>
              ) : null}
            </div>
            <h1 className="mt-2 text-left text-3xl font-bold uppercase tracking-wide sm:text-4xl">
              {phaseTitle}
            </h1>
            {goal ? <p className="mt-3 text-base leading-relaxed text-white/85">{goal}</p> : null}
            {knowFirst ? (
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                <span className="font-semibold text-white">Before you start:</span> {knowFirst}
              </p>
            ) : null}
            {topics.length > 0 ? (
              <div className="mt-5">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#04AA6D]">What you will cover</p>
                <ul className="mt-2 list-none space-y-1.5 p-0">
                  {topics.map((topic) => (
                    <li key={topic.id} className="flex gap-3 text-[15px] leading-snug text-white/90">
                      <span className="w-10 shrink-0 font-bold tabular-nums text-[#04AA6D]">{topic.id}</span>
                      <span>{topic.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div className="ih-checkpoint-art-slot w-full shrink-0 lg:w-[36rem]">
            <PhaseCheckpointArt number={phaseNumber} title={phaseTitle} topics={topics} />
          </div>
        </div>
      </div>
      <div className="shrink-0 bg-[rgb(var(--surface))] px-6 py-4 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <Pager
            backHref={prev?.href ?? "/courses"}
            backLabel="Previous"
            proceedHref={proceedHref}
            proceedLabel="Proceed"
          />
        </div>
      </div>
    </div>
  );
}
