"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SubjectBar } from "@/components/subject-bar";

function isPhaseCheckpoint(pathname: string) {
  return /^\/courses\/[^/]+\/phase\/[^/]+$/.test(pathname);
}

export function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/") return children;
  if (isPhaseCheckpoint(pathname)) {
    return <div className="ih-w3 min-h-screen">{children}</div>;
  }
  return (
    <div className="ih-w3">
      <SiteHeader />
      <SubjectBar />
      {children}
      <SiteFooter />
    </div>
  );
}
