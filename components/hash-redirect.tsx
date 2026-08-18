"use client";

import { useEffect } from "react";

export function HashRedirect({ map, fallback }: { map: Record<string, string>; fallback: string }) {
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "").toLowerCase();
    window.location.replace((hash && map[hash]) || fallback);
  }, [map, fallback]);
  return <p className="px-4 py-10 text-sm text-muted">Opening the matching lesson…</p>;
}
