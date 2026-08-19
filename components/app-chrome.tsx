"use client";

import { usePathname } from "next/navigation";
import { LandingFooter } from "@/components/landing/footer";
import { LandingHeader } from "@/components/landing/header";
import type { SearchHit } from "@/lib/learning-model";

function isPhaseCheckpoint(pathname: string) {
  return /^\/courses\/[^/]+\/phase\/[^/]+$/.test(pathname);
}

function isPlayground(pathname: string) {
  return /^\/playground(?:\/|$)/.test(pathname);
}

export function AppChrome({ children, hits }: { children: React.ReactNode; hits: SearchHit[] }) {
  const pathname = usePathname();
  if (pathname === "/") return children;
  if (isPhaseCheckpoint(pathname)) {
    return <div className="ih-w3 min-h-screen">{children}</div>;
  }
  if (isPlayground(pathname)) {
    return (
      <div className="ih-w3 min-h-screen">
        <LandingHeader hits={hits} />
        {children}
      </div>
    );
  }
  return (
    <div className="ih-w3">
      <LandingHeader hits={hits} />
      {children}
      <LandingFooter />
    </div>
  );
}
