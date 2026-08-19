"use client";

import { useState } from "react";
import { Menu, PanelLeftClose } from "lucide-react";
import type { CourseNav } from "@/lib/navigation";
import { phaseCountWithProjects } from "@/lib/navigation";
import { CourseProgressBar } from "./course-progress-bar";
import { TutorialIndex } from "./tutorial-index";

export function TutorialShell({
  nav,
  children,
}: {
  nav: CourseNav;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  const homeHref = `/courses/${nav.slug}`;
  const phaseCount = phaseCountWithProjects(nav);
  return (
    <div className={`ih-tutorial mx-auto grid${open ? " is-open" : " is-collapsed"}`}>
      <aside className="ih-index hidden min-h-[calc(100vh-6.5rem)] lg:block">
        <div className="ih-index-scroll sticky top-[6.5rem] max-h-[calc(100vh-6.5rem)] overflow-y-auto">
          <button
            type="button"
            className="ih-index-fold"
            aria-expanded={open}
            aria-label={open ? `Hide ${nav.shortName} sidebar` : `Show ${nav.shortName} sidebar`}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <PanelLeftClose size={18} /> : <Menu size={18} />}
            {open ? <span>{nav.shortName}</span> : null}
          </button>
          {open ? <TutorialIndex nav={nav} homeHref={homeHref} /> : null}
        </div>
      </aside>
      <div className="min-w-0 bg-white">
        <details className="ih-index lg:hidden">
          <summary className="cursor-pointer px-4 py-3 text-sm font-semibold">{nav.shortName}</summary>
          <div className="max-h-[70vh] overflow-y-auto pb-4">
            <TutorialIndex nav={nav} homeHref={homeHref} />
          </div>
        </details>
        <div className="ih-tutorial-progress-wrap px-4 pt-3 sm:px-6 lg:px-8">
          <CourseProgressBar slug={nav.slug} phaseCount={phaseCount} variant="inline" />
        </div>
        {children}
      </div>
    </div>
  );
}
