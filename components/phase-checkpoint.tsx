import { Pager } from "@/components/pager";
import { PhaseCheckpointArt } from "@/components/phase-checkpoint-art";
import { parseUnitHeading } from "@/lib/curriculum-labels";
import type { Neighbor } from "@/lib/navigation";

function tidyTitle(value: string) {
  return value.replace(/[\u2013\u2014]/g, ",").replace(/\s{2,}/g, " ").trim();
}

export function PhaseCheckpoint({
  courseSlug,
  phaseId,
  phaseNumber,
  phaseTitle,
  unitTitle,
  prev,
  proceedHref,
}: {
  courseSlug: string;
  phaseId: string;
  phaseNumber: string;
  phaseTitle: string;
  unitTitle?: string;
  prev: Neighbor | null;
  proceedHref: string;
}) {
  const unit = unitTitle ? parseUnitHeading(unitTitle) : null;

  return (
    <div className="ih-checkpoint-page flex min-h-dvh flex-col lg:h-dvh lg:overflow-hidden">
      {/* Do not ProgressVisit here — the checkpoint is a splash and must not overwrite the resume stop. */}
      <div className="ih-band ih-checkpoint-band flex min-h-0 flex-1 items-start overflow-y-auto px-6 py-8 sm:px-10 lg:items-center lg:overflow-hidden lg:px-12 lg:py-10">
        <div className="ih-checkpoint-row mx-auto flex w-full max-w-[1200px] flex-col items-stretch gap-8 pb-4 lg:h-full lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:pb-0">
          <header className="ih-checkpoint-hero min-w-0 w-full lg:max-w-[56rem]">
            {unit ? (
              <p className="ih-checkpoint-unit">
                {unit.mark ? <span className="ih-checkpoint-unit-mark">{unit.mark}</span> : null}
                <span className="ih-checkpoint-unit-name">{unit.name}</span>
              </p>
            ) : null}
            <p className="ih-checkpoint-meta">
              <span className="ih-checkpoint-badge">Chapter {phaseNumber}</span>
            </p>
            <h1 className="ih-checkpoint-title">{tidyTitle(phaseTitle)}</h1>
          </header>
          <div className="ih-checkpoint-art-slot w-full shrink-0 lg:w-[34rem] xl:w-[36rem]">
            <PhaseCheckpointArt number={phaseNumber} title={phaseTitle} courseSlug={courseSlug} />
          </div>
        </div>
      </div>
      <div className="ih-checkpoint-pager shrink-0 bg-[rgb(var(--surface))] px-6 py-4 sm:px-10 lg:px-12">
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
