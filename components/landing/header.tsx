"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandWordmark } from "@/components/brand-mark";
import { SITE_NAME } from "@/lib/brand";

const nav = [
  { href: "/courses", label: "Tutorials" },
  { href: "/projects", label: "Projects" },
  { href: "/interview", label: "Interview" },
];

export function LandingHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`ih-landing-nav${scrolled ? " is-stuck" : ""}`}>
      <div className="ih-landing-nav-bar">
        <Link href="/" title={SITE_NAME} className="ih-landing-logo">
          <BrandWordmark />
        </Link>

        <nav className="ih-landing-nav-links" aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="ih-landing-nav-link">
              {item.label}
            </Link>
          ))}
          <Link href="/courses" className="ih-landing-cta ih-landing-nav-cta">
            Start learning
          </Link>
        </nav>

        <button
          type="button"
          className="ih-landing-menu"
          aria-expanded={open}
          aria-controls="landing-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav id="landing-menu" className="ih-landing-nav-mobile" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="ih-landing-nav-link">
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/courses" onClick={() => setOpen(false)} className="ih-landing-cta mt-5 w-full">
            Start learning
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
