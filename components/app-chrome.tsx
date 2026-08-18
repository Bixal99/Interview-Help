"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SubjectBar } from "@/components/subject-bar";

export function AppChrome({ children }: { children: React.ReactNode }) {
  const isLanding = usePathname() === "/";
  if (isLanding) return children;
  return (
    <div className="ih-w3">
      <SiteHeader />
      <SubjectBar />
      {children}
      <SiteFooter />
    </div>
  );
}
