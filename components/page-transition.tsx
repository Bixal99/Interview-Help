"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const skipEnter = useRef(true);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  useLayoutEffect(() => {
    skipEnter.current = false;
  }, []);

  return (
    <div key={pathname} className={skipEnter.current ? undefined : "page-transition"}>
      {children}
    </div>
  );
}
