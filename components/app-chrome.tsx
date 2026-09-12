"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { CourseChromeProgressBridge } from "@/components/course-chrome-progress";
import { LandingFooter } from "@/components/landing/footer";
import { LandingHeader } from "@/components/landing/header";
import { PageTransition } from "@/components/page-transition";

function isPhaseCheckpoint(pathname: string) {
  return /^\/courses\/[^/]+\/unit\/[^/]+\/chapter\/[^/]+$/.test(pathname);
}

function isPlayground(pathname: string) {
  return /^\/playground(?:\/|$)/.test(pathname);
}

/** Course home, lessons, checkpoints, and course projects — no marketing footer. */
function isInsideCourse(pathname: string) {
  return /^\/courses\/[^/]+/.test(pathname) || /^\/projects\/[^/]+/.test(pathname);
}

function isTutorialWalk(pathname: string) {
  return /^\/courses\/[^/]+\/unit\//.test(pathname);
}

export function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const page = <PageTransition>{children}</PageTransition>;

  useEffect(() => {
    try {
      localStorage.removeItem("ih-theme");
    } catch {
      // Private-mode storage refusals are fine; the class removal still runs.
    }
    document.documentElement.classList.remove("dark");
  }, []);

  if (pathname === "/") return page;
  if (isPhaseCheckpoint(pathname)) {
    return <div className="ih-w3 min-h-screen">{page}</div>;
  }
  if (isPlayground(pathname) || isInsideCourse(pathname)) {
    return (
      <CourseChromeProgressBridge>
        <div className="ih-w3 min-h-screen">
          <LandingHeader />
          {isTutorialWalk(pathname) ? children : page}
        </div>
      </CourseChromeProgressBridge>
    );
  }
  return (
    <div className="ih-w3">
      <LandingHeader />
      {page}
      <LandingFooter />
    </div>
  );
}
