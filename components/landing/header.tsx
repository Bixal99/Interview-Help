"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandWordmark } from "@/components/brand-mark";
import { CourseProgressBar } from "@/components/course-progress-bar";
import { useCourseChromeProgress } from "@/components/course-chrome-progress";
import { SITE_NAME } from "@/lib/brand";
import type { SearchHit } from "@/lib/learning-model";
import { LandingSearch } from "./landing-search";

const nav = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/progress", label: "Progress" },
];

function linkIsOn(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  if (href === "/courses") return pathname === "/courses" || pathname.startsWith("/courses/");
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function LandingHeader({ hits }: { hits?: SearchHit[] }) {
  const pathname = usePathname();
  const courseProgress = useCourseChromeProgress();
  const inLesson = Boolean(courseProgress);
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
    if (!open) return;
    const previousHtml = document.documentElement.style.overflow;
    const previousBody = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previousHtml;
      document.body.style.overflow = previousBody;
    };
  }, [open]);

  useEffect(() => {
    if (inLesson) return;
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
  }, [inLesson]);

  return (
    <>
      <header className={`ih-landing-nav${scrolled ? " is-stuck" : ""}${open ? " is-open" : ""}`}>
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
          {inLesson && courseProgress ? (
            <div className="ih-landing-nav-lesson-progress">
              <CourseProgressBar
                slug={courseProgress.slug}
                lessonCount={courseProgress.lessonCount}
                projectCount={courseProgress.projectCount}
                variant="nav"
                gateHref={courseProgress.gateHref}
              />
            </div>
          ) : (
            <div className="ih-landing-nav-desktop-tools hidden lg:flex">
              <LandingSearch hits={hits} />
              <Link href="/courses" className="ih-landing-cta ih-landing-nav-cta">
                Start learning
              </Link>
            </div>
          )}
          <button
            type="button"
            className="ih-landing-menu"
            aria-expanded={open}
            aria-controls="landing-menu"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="landing-menu" className="ih-landing-nav-mobile" aria-label="Mobile">
          {inLesson && courseProgress ? (
            <div className="mb-4 lg:hidden">
              <CourseProgressBar
                slug={courseProgress.slug}
                lessonCount={courseProgress.lessonCount}
                projectCount={courseProgress.projectCount}
                variant="nav"
                gateHref={courseProgress.gateHref}
              />
            </div>
          ) : (
            <LandingSearch hits={hits} />
          )}
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
          {!inLesson ? (
            <Link href="/courses" onClick={() => setOpen(false)} className="ih-landing-cta mt-5 w-full">
              Start learning
            </Link>
          ) : null}
        </nav>
      ) : null}
      </header>
      <div className="ih-landing-nav-spacer" aria-hidden="true" />
    </>
  );
}
