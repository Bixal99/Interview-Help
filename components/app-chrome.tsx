"use client";

import { usePathname } from "next/navigation";
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
