"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/content-utils";

export function ActiveOutline({ headings }: { headings: Heading[] }) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const elements = headings.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-15% 0px -75% 0px" });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [headings]);
  return <nav className="reader-outline space-y-2 border-l hairline pl-4 text-[11px] leading-4 text-muted" aria-label="On this page">{headings.slice(0, 32).map((heading) => <a key={`${heading.id}-${heading.line}`} href={`#${heading.id}`} className={`block transition hover:text-ink ${active === heading.id ? "active" : ""}`}>{heading.text}</a>)}</nav>;
}
