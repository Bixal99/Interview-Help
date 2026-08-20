"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { LandingFooter } from "@/components/landing/footer";
import { LandingHeader } from "@/components/landing/header";

function isPhaseCheckpoint(pathname: string) {
  return /^\/courses\/[^/]+\/phase\/[^/]+$/.test(pathname);
}

function isPlayground(pathname: string) {
  return /^\/playground(?:\/|$)/.test(pathname);
}

export function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    try {
      localStorage.removeItem("ih-theme");
    } catch {
      // Private-mode storage refusals are fine; the class removal still runs.
    }
    document.documentElement.classList.remove("dark");
  }, []);

  if (pathname === "/") return children;
  if (isPhaseCheckpoint(pathname)) {
    return <div className="ih-w3 min-h-screen">{children}</div>;
  }
  if (isPlayground(pathname)) {
    return (
      <div className="ih-w3 min-h-screen">
        <LandingHeader />
        {children}
      </div>
    );
  }
  return (
    <div className="ih-w3">
      <LandingHeader />
      {children}
      <LandingFooter />
    </div>
  );
}
