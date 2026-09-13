"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, ChevronRight } from "lucide-react";
import type { CourseNav, CourseNavPhase, CourseNavTopic } from "@/lib/navigation";
import { chapterContentPath, chapterLeafPath } from "@/lib/course-routes";
import { githubSlug } from "@/lib/content-utils";
import { centerSidebarActive } from "@/lib/sidebar-scroll";
import {
  sidebarChildLabel,
  sidebarLessonLabel,
  sidebarPhaseLabel,
  sidebarProjectLabel,
  sidebarUnitLabel,
} from "@/lib/sidebar-labels";
import { regularLessonIds } from "@/lib/navigation";
import { phaseIdKey } from "@/lib/progress-map";
import { scrollToHeading } from "@/lib/scroll-to-heading";
import { useOptionalProgress } from "./progress-client";

function topicSlug(id: string, title: string) {
  return githubSlug(`${id} ${title}`);
}

function collectTopicSlugs(topics: CourseNavTopic[]): string[] {
  return topics.flatMap((topic) => [topicSlug(topic.id, topic.title), ...collectTopicSlugs(topic.children ?? [])]);
}

function useActiveTopicSlug(slugs: string[], enabled: boolean) {
  const [hash, setHash] = useState("");
  const [visible, setVisible] = useState("");

  useEffect(() => {
    let ignoreUntil = window.location.hash ? Date.now() + 900 : 0;
    const read = () => {
      setHash(window.location.hash.replace(/^#/, ""));
      ignoreUntil = Date.now() + 900;
    };
    read();
    window.addEventListener("hashchange", read);

    if (!enabled || !slugs.length) {
      return () => window.removeEventListener("hashchange", read);
    }

    const nodes = slugs
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < ignoreUntil) return;
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => left.boundingClientRect.top - right.boundingClientRect.top)[0];
        const id = hit?.target.id;
        if (!id) return;
        setVisible(id);
        if (window.location.hash.replace(/^#/, "") !== id) {
          history.replaceState(null, "", `#${id}`);
          setHash(id);
          window.dispatchEvent(new HashChangeEvent("hashchange"));
        }
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0, 0.25, 1] },
    );
    for (const node of nodes) observer.observe(node);
    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", read);
    };
  }, [enabled, slugs]);

  return hash || visible;
}

export function sidebarOpenKey(slug: string) {
  return `ih-sidebar-open:${slug}`;
}

function readOpenPhases(slug: string): string[] {
  try {
    const raw = sessionStorage.getItem(sidebarOpenKey(slug));
    const parsed: unknown = raw ? JSON.parse(raw) : null;
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function writeOpenPhases(slug: string, ids: string[]) {
  try {
    sessionStorage.setItem(sidebarOpenKey(slug), JSON.stringify([...new Set(ids)]));
  } catch {
    // Private-mode storage refusals only lose expansion memory, not function.
  }
}

function TopicBranch({
  navSlug,
  topic,
  contentHref,
  locked,
  activeSlug,
  depth,
}: {
  navSlug: string;
  topic: CourseNavTopic;
  contentHref: string;
  locked: boolean;
  activeSlug: string;
  depth: number;
}) {
  const pathname = usePathname();
  const kids = topic.children ?? [];
  const slug = topicSlug(topic.id, topic.title);
  const childSlugs = collectTopicSlugs(kids);
  const onSelf = activeSlug === slug;
  const onKid = childSlugs.includes(activeSlug);
  const [open, setOpen] = useState(onSelf || onKid);

  useEffect(() => {
    if (onSelf || onKid) setOpen(true);
  }, [onSelf, onKid]);

  const href = `${contentHref}#${slug}`;

  return (
    <div className={depth > 0 ? "ih-index-subsub" : undefined}>
      <div className={`ih-index-row${onSelf || onKid ? " is-current" : ""}`}>
        <Link
          href={href}
          className={onSelf ? "active" : undefined}
          aria-disabled={locked}
          tabIndex={locked ? -1 : undefined}
          onClick={(event) => {
            if (locked) return;
            if (pathname.replace(/\/$/, "") !== contentHref.replace(/\/$/, "")) return;
            const heading = document.getElementById(slug);
            if (!heading) return;
            event.preventDefault();
            history.replaceState(null, "", href);
            window.dispatchEvent(new HashChangeEvent("hashchange"));
            scrollToHeading(heading);
          }}
        >
          <span className="ih-index-num">{topic.id}</span>
          <span className="ih-index-label">{sidebarChildLabel(navSlug, topic.id, topic.title)}</span>
        </Link>
        {kids.length ? (
          <button
            type="button"
            className={`ih-index-caret${open ? " is-open" : ""}`}
            aria-expanded={open}
            aria-label={open ? "Hide subsections" : "Show subsections"}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setOpen((current) => !current);
            }}
          >
            <ChevronRight size={14} />
          </button>
        ) : null}
      </div>
      {kids.length ? (
        <div className={`ih-index-reveal${open ? " is-open" : ""}`}>
          <div>
            {kids.map((child) => (
              <TopicBranch
                key={`${topic.id}-${child.id}`}
                navSlug={navSlug}
                topic={child}
                contentHref={contentHref}
                locked={locked}
                activeSlug={activeSlug}
                depth={depth + 1}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function PhaseBlock({
  navSlug,
  phase,
  phaseDone,
  completedLessons,
  locked,
  trackScroll,
}: {
  navSlug: string;
  phase: CourseNavPhase;
  phaseDone?: boolean;
  completedLessons: string[];
  locked: boolean;
  trackScroll: boolean;
}) {
  const pathname = usePathname();
  const phaseHref = phase.unit != null
    ? `/courses/${navSlug}/unit/${phase.unit}/chapter/${phase.id}`
    : `/courses/${navSlug}/chapter/${phase.id}`;
  const contentHref = chapterContentPath(navSlug, phase.id, phase.unit);
  const projectHref = chapterLeafPath(navSlug, phase.id, "project", phase.unit);
  const childHrefs = [
    ...phase.lessons.filter((lesson) => lesson.slug !== "content").map((lesson) => chapterLeafPath(navSlug, phase.id, lesson.slug, phase.unit)),
    ...(phase.hasProject ? [projectHref] : []),
  ];
  const onChild = childHrefs.includes(pathname) || childHrefs.some((href) => pathname.startsWith(`${href}/`)) || pathname === contentHref || pathname.startsWith(`${contentHref}/`);
  const onPhase = pathname === phaseHref;
  const hasKids = childHrefs.length > 0 || phase.lessons.some((lesson) => lesson.slug === "content" && lesson.children.length > 0);
  const topicSlugs = useMemo(
    () => phase.lessons.filter((lesson) => lesson.slug === "content").flatMap((lesson) => collectTopicSlugs(lesson.children)),
    [phase.lessons],
  );
  const activeSlug = useActiveTopicSlug(topicSlugs, trackScroll && onChild);
  const [open, setOpen] = useState(onChild || onPhase);

  useEffect(() => {
    if (!activeSlug) return;
    const root = document.querySelector<HTMLElement>(".ih-index-scroll");
    if (root) centerSidebarActive(root);
  }, [activeSlug]);

  // Restore user-expanded phases after mount (sessionStorage is unavailable
  // during the server render, so it cannot seed the initial state safely).
  useEffect(() => {
    if (!hasKids) return;
    setOpen((current) => current || readOpenPhases(navSlug).includes(phase.id));
    // Run once per phase on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the phase containing the current route expanded (and remembered).
  useEffect(() => {
    if (!(onChild || onPhase) || !hasKids) return;
    setOpen(true);
    const stored = readOpenPhases(navSlug);
    if (!stored.includes(phase.id)) writeOpenPhases(navSlug, [...stored, phase.id]);
  }, [onChild, onPhase, hasKids, navSlug, phase.id]);

  const toggle = useCallback(() => {
    setOpen((current) => {
      const next = !current;
      const stored = new Set(hasKids ? readOpenPhases(navSlug) : []);
      if (next) stored.add(phase.id);
      else stored.delete(phase.id);
      writeOpenPhases(navSlug, [...stored]);
      return next;
    });
  }, [hasKids, navSlug, phase.id]);

  return (
    <div className="ih-index-phase">
      <div
        className={`ih-index-row${onPhase || onChild ? " is-current" : ""}${locked ? " is-locked" : ""}`}
      >
        <Link
          href={phaseHref}
          className={onPhase ? "active" : undefined}
          aria-disabled={locked}
          tabIndex={locked ? -1 : undefined}
        >
          <span className="ih-index-num">{phase.number}</span>
          <span className="ih-index-label">{sidebarPhaseLabel(navSlug, phase.id, phase.title)}</span>
        </Link>
        {hasKids ? (
          <button
            type="button"
            className={`ih-index-caret${open ? " is-open" : ""}`}
            aria-expanded={open}
            aria-label={open ? "Hide sections" : "Show sections"}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              toggle();
            }}
          >
            <ChevronRight size={14} />
          </button>
        ) : null}
      </div>
      {open && hasKids ? (
        <div className="ih-index-sub">
          {phase.lessons.flatMap((lesson) => {
            if (lesson.slug === "content") {
              return lesson.children.map((child) => (
                <TopicBranch
                  key={`${lesson.id}-topic-${child.id}`}
                  navSlug={navSlug}
                  topic={child}
                  contentHref={contentHref}
                  locked={locked}
                  activeSlug={activeSlug}
                  depth={0}
                />
              ));
            }
            const href = chapterLeafPath(navSlug, phase.id, lesson.slug, phase.unit);
            const lessonDone = completedLessons.includes(lesson.id);
            return [
              <Link
                key={`lesson-${lesson.id}`}
                href={href}
                className={pathname === href || pathname.startsWith(`${href}/`) ? "active" : undefined}
                aria-disabled={locked}
                tabIndex={locked ? -1 : undefined}
              >
                <span className="ih-index-num">{lesson.slug === "exercise" ? "E" : lesson.id.replace(/^sp/i, "U")}</span>
                <span className="ih-index-label">
                  {sidebarLessonLabel(navSlug, lesson.id, lesson.title)}
                </span>
                {lessonDone ? (
                  <span className="ih-index-lesson-done" aria-label="Lesson complete">
                    <Check size={11} />
                  </span>
                ) : null}
              </Link>,
            ];
          })}
          {phase.hasProject ? (
            <Link
              href={projectHref}
              className={pathname === projectHref || pathname.startsWith(`${projectHref}/`) ? "active" : undefined}
              aria-disabled={locked}
              tabIndex={locked ? -1 : undefined}
            >
              <span className="ih-index-num">P</span>
              <span className="ih-index-label">
                {phase.projectTitle ?? sidebarProjectLabel(navSlug)}
                {phase.projectKind ? ` · ${phase.projectKind}` : ""}
              </span>
            </Link>
          ) : null}
          {phaseDone ? (
            <span className="ih-index-done">
              <Check size={12} /> Done
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export function TutorialIndex({
  nav,
  homeHref,
  trackScroll = false,
}: {
  nav: CourseNav;
  homeHref: string;
  trackScroll?: boolean;
}) {
  const pathname = usePathname();
  const progress = useOptionalProgress();
  const state = progress?.course(nav.slug);
  const phaseIds = nav.chapters.flatMap((chapter) => chapter.phases.map((phase) => phase.id));

  return (
    <nav className="ih-index-nav" aria-label={`${nav.shortName} tutorial`}>
      <Link href={homeHref} className={pathname === homeHref ? "active" : undefined}>
        Home
      </Link>
      {nav.chapters.map((chapter) => (
        <div key={chapter.id} className="ih-index-group">
          <p className="ih-index-section">{sidebarUnitLabel(nav.slug, chapter.id, chapter.title)}</p>
          {chapter.phases.map((phase) => {
            const lessonIds = regularLessonIds(phase);
            const projectDone =
              !phase.hasProject ||
              (state?.completedProjects ?? []).some(
                (id) => phaseIdKey(id) === phaseIdKey(phase.id),
              );
            const phaseDone =
              lessonIds.length > 0 &&
              lessonIds.every((id) => state?.completedLessons.includes(id)) &&
              projectDone;
            const locked = progress?.ready
              ? !progress.canEnter(nav.slug, phase.id, phaseIds)
              : false;
            return (
              <PhaseBlock
                key={phase.id}
                navSlug={nav.slug}
                phase={phase}
                phaseDone={phaseDone}
                completedLessons={state?.completedLessons ?? []}
                locked={locked}
                trackScroll={trackScroll}
              />
            );
          })}
          {chapter.unitExerciseHref ? (
            <Link
              href={chapter.unitExerciseHref}
              className={pathname === chapter.unitExerciseHref || pathname.startsWith(`${chapter.unitExerciseHref}/`) ? "active" : undefined}
            >
              <span className="ih-index-num">E</span>
              <span className="ih-index-label">{chapter.unitExerciseTitle ?? "Unit exercise"}</span>
            </Link>
          ) : null}
          {chapter.unitProjectHref ? (
            <Link
              href={chapter.unitProjectHref}
              className={pathname === chapter.unitProjectHref || pathname.startsWith(`${chapter.unitProjectHref}/`) ? "active" : undefined}
            >
              <span className="ih-index-num">P</span>
              <span className="ih-index-label">{chapter.unitProjectTitle ?? "Unit project"}</span>
            </Link>
          ) : null}
        </div>
      ))}
    </nav>
  );
}
