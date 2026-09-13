"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, PanelLeftClose, X } from "lucide-react";
import type { CourseNav } from "@/lib/navigation";
import { writtenProgressCounts } from "@/lib/navigation";
import { centerSidebarActive } from "@/lib/sidebar-scroll";
import { CourseChromeProgressPublisher } from "./course-chrome-progress";
import { OdooTutorialIndex } from "./odoo-tutorial-index";
import { PageTransition } from "./page-transition";
import { useOptionalProgress } from "./progress-client";
import { TutorialIndex } from "./tutorial-index";

const FOLD_KEY = "ih-sidebar-fold";

export function TutorialShell({
  nav,
  children,
}: {
  nav: CourseNav;
  children: React.ReactNode;
}) {
  const isOdoo = nav.slug === "odoo";
  const [open, setOpen] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const drawerScrollRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const progress = useOptionalProgress();
  const homeHref = `/courses/${nav.slug}`;
  const written = writtenProgressCounts(nav);
  const lessonCount = written.lessonCount;
  const projectCount = written.projectCount;
  const checkpoint = /^\/courses\/[^/]+\/unit\/[^/]+\/chapter\/[^/]+$/.test(pathname);
  const chapterId = pathname.match(/\/chapter\/([^/]+)/)?.[1];
  const phaseIds = nav.chapters.flatMap((chapter) => chapter.phases.map((phase) => phase.id));
  const chapterLocked = Boolean(
    chapterId && progress?.ready && !progress.canEnter(nav.slug, chapterId, phaseIds),
  );

  useEffect(() => {
    try {
      setOpen(sessionStorage.getItem(`${FOLD_KEY}:${nav.slug}`) !== "closed");
    } catch {
      // Storage refusals just fall back to defaults.
    }
  }, [nav.slug]);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  // Keep the current lesson/phase centered after navigation and refresh.
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

  useEffect(() => {
    const root = scrollRef.current;
    if (!root || !open) return;
    const recenter = () => centerSidebarActive(root);
    window.addEventListener("hashchange", recenter);
    return () => window.removeEventListener("hashchange", recenter);
  }, [open]);

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

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  if (checkpoint) {
    return (
      <CourseChromeProgressPublisher slug={nav.slug} lessonCount={lessonCount} projectCount={projectCount}>
        <PageTransition>{children}</PageTransition>
      </CourseChromeProgressPublisher>
    );
  }

  return (
    <CourseChromeProgressPublisher slug={nav.slug} lessonCount={lessonCount} projectCount={projectCount}>
      <div
        className={`ih-tutorial mx-auto grid${open ? " is-open" : " is-collapsed"}${chapterLocked ? " is-chapter-lock" : ""}${isOdoo ? " is-odoo" : ""}`}
      >
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
            <div ref={scrollRef} className={`ih-index-scroll${open ? "" : " is-folded"}`}>
              {isOdoo ? (
                <OdooTutorialIndex nav={nav} homeHref={homeHref} trackScroll />
              ) : (
                <TutorialIndex nav={nav} homeHref={homeHref} trackScroll />
              )}
            </div>
          </div>
        </aside>
        <div className="min-w-0 bg-white">
          {isOdoo ? (
            <>
              <div className="ih-odoo-mobile-bar lg:hidden">
                <button
                  type="button"
                  className="ih-odoo-mobile-open"
                  aria-expanded={drawerOpen}
                  aria-controls="odoo-sidebar-drawer"
                  onClick={() => setDrawerOpen(true)}
                >
                  <Menu size={18} />
                  <span>{nav.shortName} menu</span>
                </button>
              </div>
              {drawerOpen ? (
                <div className="ih-odoo-drawer-root lg:hidden" role="presentation">
                  <button
                    type="button"
                    className="ih-odoo-drawer-overlay"
                    aria-label="Close course menu"
                    onClick={closeDrawer}
                  />
                  <aside id="odoo-sidebar-drawer" className="ih-odoo-drawer" aria-label={`${nav.shortName} tutorial`}>
                    <div className="ih-odoo-drawer-head">
                      <span>{nav.shortName}</span>
                      <button type="button" className="ih-odoo-drawer-close" aria-label="Close course menu" onClick={closeDrawer}>
                        <X size={18} />
                      </button>
                    </div>
                    <div ref={drawerScrollRef} className="ih-odoo-drawer-scroll">
                      <OdooTutorialIndex nav={nav} homeHref={homeHref} onNavigate={closeDrawer} />
                    </div>
                  </aside>
                </div>
              ) : null}
            </>
          ) : (
            <details className="ih-index lg:hidden">
              <summary className="cursor-pointer px-4 py-3 text-sm font-semibold">{nav.shortName}</summary>
              <div className="max-h-[70vh] overflow-y-auto pb-4">
                <TutorialIndex nav={nav} homeHref={homeHref} />
              </div>
            </details>
          )}
          <PageTransition>{children}</PageTransition>
        </div>
      </div>
    </CourseChromeProgressPublisher>
  );
}
