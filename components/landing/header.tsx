"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandWordmark } from "@/components/brand-mark";
import { SITE_NAME } from "@/lib/brand";
import type { SearchHit } from "@/lib/learning-model";
import { LandingSearch } from "./landing-search";

const nav = [
  { href: "/courses", label: "Tutorials" },
  { href: "/projects", label: "Projects" },
  { href: "/interview", label: "Interview" },
  { href: "/progress", label: "Progress" },
];

function linkIsOn(href: string, pathname: string) {
  if (href === "/courses") return pathname === "/courses" || pathname.startsWith("/courses/");
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function LandingHeader({ hits }: { hits?: SearchHit[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (!(event.ctrlKey || event.metaKey) || event.key.toLowerCase() !== "k") return;
      event.preventDefault();
      const field = document.querySelector<HTMLInputElement>(".ih-landing-search input");
      if (field && field.offsetParent !== null) {
        field.focus();
        field.select();
        return;
      }
      window.location.assign("/search");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <header className={`ih-landing-nav${scrolled ? " is-stuck" : ""}`}>
      <div className="ih-landing-nav-bar">
        <Link href="/" title={SITE_NAME} className="ih-landing-logo">
          <BrandWordmark />
        </Link>

        <nav className="ih-landing-nav-links" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`ih-landing-nav-link${linkIsOn(item.href, pathname) ? " is-on" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ih-landing-nav-end">
          <LandingSearch hits={hits} />
          <Link href="/courses" className="ih-landing-cta ih-landing-nav-cta">
            Start learning
          </Link>
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
      </div>

      {open ? (
        <nav id="landing-menu" className="ih-landing-nav-mobile" aria-label="Mobile">
          <LandingSearch hits={hits} />
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`ih-landing-nav-link${linkIsOn(item.href, pathname) ? " is-on" : ""}`}
              >
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
