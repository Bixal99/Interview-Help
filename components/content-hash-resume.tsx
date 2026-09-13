"use client";

import { useEffect } from "react";
import { useLearningProgress } from "@/components/progress-client";
import { pinContentTopic } from "@/lib/content-place";
import { resumeAnchorFor } from "@/lib/resume-href";
import { scrollToHeading } from "@/lib/scroll-to-heading";

/** After content mounts, jump to the saved section — URL hash first, then stored place. */
export function ContentHashResume({ slug }: { slug: string }) {
  const { ready, course } = useLearningProgress();

  useEffect(() => {
    if (!ready) return;
    const urlHash = window.location.hash.replace(/^#/, "").trim();
    const hash = urlHash || resumeAnchorFor(slug, course(slug));
    if (!hash) return;

    if (!urlHash) {
      history.replaceState(null, "", `#${hash}`);
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
    pinContentTopic(hash, 2000);

    let attempts = 0;
    let raf = 0;
    let cancelled = false;

    const tryScroll = () => {
      if (cancelled) return;
      const node = document.getElementById(hash);
      if (node) {
        pinContentTopic(hash, 1800);
        scrollToHeading(node);
        return;
      }
      attempts += 1;
      if (attempts < 60) raf = requestAnimationFrame(tryScroll);
    };

    raf = requestAnimationFrame(tryScroll);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [ready, slug]);

  return null;
}
