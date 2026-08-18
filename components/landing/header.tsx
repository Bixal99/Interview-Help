"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/courses", label: "Tutorials" },
  { href: "/projects", label: "Projects" },
  { href: "/interview", label: "Interview" },
];

export function LandingHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="ih-landing-nav sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center gap-8 px-5 py-5 sm:px-8">
        <Link href="/" title="Interview Help" className="text-[1.65rem] font-bold leading-none tracking-[-0.03em]">
          Interview <span className="ih-help">Help</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-8 text-[17px] font-semibold lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/courses/computer-science" className="ih-landing-cta">
            Start learning
          </Link>
        </nav>

        <button
          type="button"
          className="ml-auto px-1 text-[17px] font-bold text-[#1A1A1A] lg:hidden"
          aria-expanded={open}
          aria-controls="landing-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav id="landing-menu" className="border-t border-[#D5D8DC] bg-white px-5 py-5 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-[17px] font-semibold">
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/courses/computer-science"
            onClick={() => setOpen(false)}
            className="ih-landing-cta mt-5 w-full"
          >
            Start learning
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
