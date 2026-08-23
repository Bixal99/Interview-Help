"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, PanelLeftClose } from "lucide-react";
import type { CourseNav } from "@/lib/navigation";
import { lessonCountForNav, phaseCountWithProjects } from "@/lib/navigation";
import { centerSidebarActive } from "@/lib/sidebar-scroll";
import { CourseChromeProgressPublisher } from "./course-chrome-progress";
import { TutorialIndex } from "./tutorial-index";

const FOLD_KEY = "ih-sidebar-fold";

export function TutorialShell({
  nav,
  children,
}: {
  nav: CourseNav;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const homeHref = `/courses/${nav.slug}`;
  const lessonCount = lessonCountForNav(nav);
  const projectCount = phaseCountWithProjects(nav);

  useEffect(() => {
    try {
      setOpen(sessionStorage.getItem(`${FOLD_KEY}:${nav.slug}`) !== "closed");
    } catch {
      // Storage refusals just fall back to defaults.
    }
  }, [nav.slug]);

  // Keep the current lesson/phase centered after navigation and refresh.
  // Phase blocks expand other open sections in child effects (after this effect
  // first runs), so re-center across a few frames once that layout settles.
  useEffect(() => {
    const root = scrollRef.current;
    if (!root || !open) return;

    let frames = 0;
    let raf = 0;
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      centerSidebarActive(root);
      frames += 1;
      if (frames < 8) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [pathname, open, nav.slug]);

  const toggle = useCallback(() => {
    setOpen((current) => {
      const next = !current;
      try {
        sessionStorage.setItem(`${FOLD_KEY}:${nav.slug}`, next ? "open" : "closed");
      } catch {
        // Ignore storage failures.
      }
      return next;
    });
  }, [nav.slug]);

  return (
    <CourseChromeProgressPublisher slug={nav.slug} lessonCount={lessonCount} projectCount={projectCount}>
      <div className={`ih-tutorial mx-auto grid${open ? " is-open" : " is-collapsed"}`}>
        <aside className="ih-index hidden min-h-[calc(100vh-4.9rem)] lg:block">
          <div className="ih-index-panel sticky top-[4.9rem] max-h-[calc(100vh-4.9rem)]">
            <button
              type="button"
              className="ih-index-fold"
              aria-expanded={open}
              aria-label={open ? `Hide ${nav.shortName} sidebar` : `Show ${nav.shortName} sidebar`}
              onClick={toggle}
            >
              {open ? <PanelLeftClose size={18} /> : <Menu size={18} />}
              {open ? <span>{nav.shortName}</span> : null}
            </button>
            {open ? (
              <div ref={scrollRef} className="ih-index-scroll">
                <TutorialIndex nav={nav} homeHref={homeHref} />
              </div>
            ) : null}
          </div>
        </aside>
        <div className="min-w-0 bg-white">
          <details className="ih-index lg:hidden">
            <summary className="cursor-pointer px-4 py-3 text-sm font-semibold">{nav.shortName}</summary>
            <div className="max-h-[70vh] overflow-y-auto pb-4">
              <TutorialIndex nav={nav} homeHref={homeHref} />
            </div>
          </details>
          {children}
        </div>
      </div>
    </CourseChromeProgressPublisher>
  );
}
