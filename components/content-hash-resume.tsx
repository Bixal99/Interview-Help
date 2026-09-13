"use client";

import { useEffect } from "react";
import { scrollToHeading } from "@/lib/scroll-to-heading";

/** After content mounts, jump to the URL hash so Continue lands on the exact section. */
export function ContentHashResume() {
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "").trim();
    if (!hash) return;

    let attempts = 0;
    let raf = 0;
    let cancelled = false;

    const tryScroll = () => {
      if (cancelled) return;
      const node = document.getElementById(hash);
      if (node) {
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
  }, []);

  return null;
}
