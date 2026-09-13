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
  /** When true, keep currentAnchor in sync with the content heading hash. */
  trackHash?: boolean;
}) {
  const { ready, visit, setPlace } = useLearningProgress();

  useEffect(() => {
    if (!ready) return;
    visit(slug, phaseId, stopId);
  }, [ready, slug, phaseId, stopId, visit]);

  useEffect(() => {
    if (!ready || !trackHash) return;
    const sync = () => {
      const hash = window.location.hash.replace(/^#/, "").trim();
      if (!hash) return;
      const topicId = window.sessionStorage.getItem(`ih-topic:${slug}:${hash}`) || undefined;
      setPlace(slug, { anchor: hash, topicId });
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [ready, trackHash, slug, setPlace]);

  return null;
}
