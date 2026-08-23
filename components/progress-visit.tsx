"use client";

import { useEffect } from "react";
import { useLearningProgress } from "@/components/progress-client";

/** Records the current stop and marks the previous lesson complete (not this one). */
export function ProgressVisit({
  slug,
  phaseId,
  stopId,
}: {
  slug: string;
  phaseId: string;
  stopId: string;
}) {
  const { ready, visit } = useLearningProgress();
  useEffect(() => {
    if (!ready) return;
    visit(slug, phaseId, stopId);
  }, [ready, slug, phaseId, stopId, visit]);
  return null;
}
