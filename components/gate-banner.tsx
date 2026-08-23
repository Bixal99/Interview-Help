"use client";

import { CourseChromeGatePublisher } from "./course-chrome-progress";
import { useLearningProgress } from "./progress-client";

/** Keeps the blocked-chapter CTA in the nav; no in-page banner. */
export function GateBanner({
  slug,
  phaseId,
  phaseIds,
  lessonIdsByPhase,
  requiredHref,
}: {
  slug: string;
  phaseId: string;
  phaseIds: string[];
  lessonIdsByPhase?: Record<string, string[]>;
  requiredHref?: string;
}) {
  const { canEnter, ready, requiredHref: progressRequiredHref } = useLearningProgress();
  const blocked = ready && !canEnter(slug, phaseId, phaseIds, lessonIdsByPhase);
  const gateHref = blocked ? progressRequiredHref(slug, phaseId, phaseIds) ?? requiredHref : undefined;
  return <CourseChromeGatePublisher href={gateHref} active={blocked} />;
}
