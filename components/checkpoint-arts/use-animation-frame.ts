"use client";

import { useEffect, useState } from "react";

export function useAnimationFrame(length: number, ms: number): number {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setFrame(0);
      return;
    }
    const id = window.setInterval(() => {
      setFrame((current) => (current + 1) % length);
    }, ms);
    return () => window.clearInterval(id);
  }, [length, ms]);

  return frame;
}
