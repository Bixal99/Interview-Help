"use client";

import { useEffect } from "react";
import { useLearningProgress } from "@/components/progress-client";

/** Records the current stop and marks the previous lesson complete (not this one). */
export function ProgressVisit({
  slug,
  phaseId,
  stopId,
  trackHash = false,
}: {
  slug: string;
  phaseId: string;
  stopId: string;
  /** When true, keep currentAnchor in sync with the content heading hash (e.g. 1.7). */
  trackHash?: boolean;
}) {
  const { ready, visit, setAnchor } = useLearningProgress();

  useEffect(() => {
    if (!ready) return;
    visit(slug, phaseId, stopId);
  }, [ready, slug, phaseId, stopId, visit]);

  useEffect(() => {
    if (!ready || !trackHash) return;
    const sync = () => {
      const hash = window.location.hash.replace(/^#/, "").trim();
      setAnchor(slug, hash || undefined);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [ready, trackHash, slug, setAnchor]);

  return null;
}
