"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, ChevronRight } from "lucide-react";
import type { CourseNav, CourseNavPhase, CourseNavTopic } from "@/lib/navigation";
import { chapterContentPath, chapterLeafPath } from "@/lib/course-routes";
import { githubSlug } from "@/lib/content-utils";
import { centerSidebarActive } from "@/lib/sidebar-scroll";
import { regularLessonIds } from "@/lib/navigation";
import { phaseIdKey } from "@/lib/progress-map";
import { pinContentTopic, rememberTopicPlace, TOPIC_PIN_EVENT } from "@/lib/content-place";
import { scrollToHeading } from "@/lib/scroll-to-heading";
import {
  ODOO_TOPIC_SEPARATORS,
  odooChapterSidebarLabel,
  odooTopicSidebarLabel,
  odooUnitSidebarLabel,
} from "@/lib/odoo-sidebar-labels";
import { useOptionalProgress } from "./progress-client";

function topicSlug(id: string, title: string) {
  return githubSlug(`${id} ${title}`);
}

function collectTopicSlugs(topics: CourseNavTopic[]): string[] {
  return topics.flatMap((topic) => [topicSlug(topic.id, topic.title), ...collectTopicSlugs(topic.children ?? [])]);
}

function collectTopicEntries(topics: CourseNavTopic[]): { id: string; slug: string }[] {
  return topics.flatMap((topic) => [
    { id: topic.id, slug: topicSlug(topic.id, topic.title) },
    ...collectTopicEntries(topic.children ?? []),
  ]);
}

function scrollParentOf(node: HTMLElement): HTMLElement | Window {
  let current = node.parentElement;
  while (current && current !== document.body && current !== document.documentElement) {
    const style = getComputedStyle(current);
    const oy = style.overflowY;
    if ((oy === "auto" || oy === "scroll" || oy === "overlay") && current.scrollHeight > current.clientHeight + 1) {
      return current;
    }
    current = current.parentElement;
  }
  return window;
}

function storageList(key: string): string[] {
  try {
    const raw = sessionStorage.getItem(key);
    const parsed: unknown = raw ? JSON.parse(raw) : null;
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function writeStorageList(key: string, ids: string[]) {
  try {
    sessionStorage.setItem(key, JSON.stringify([...new Set(ids)]));
  } catch {
    // Private-mode storage refusals only lose expansion memory.
  }
}

function unitOpenKey(slug: string) {
  return `ih-odoo-unit-open:${slug}`;
}

function phaseOpenKey(slug: string) {
  return `ih-odoo-phase-open:${slug}`;
}

function useActiveTopicSlug(entries: { id: string; slug: string }[], enabled: boolean, navSlug: string) {
  const [active, setActive] = useState("");
  const slugs = useMemo(() => entries.map((entry) => entry.slug), [entries]);
  const topicBySlug = useMemo(() => new Map(entries.map((entry) => [entry.slug, entry.id])), [entries]);

  useEffect(() => {
    if (!enabled || !slugs.length) {
      setActive("");
      return;
    }

    let ignoreUntil = 0;
    let ticking = false;
    let scroller: HTMLElement | Window = window;
    const marker = 110;

    const remember = (slug: string) => {
      const topicId = topicBySlug.get(slug);
      if (topicId) rememberTopicPlace(navSlug, slug, topicId);
    };

    const applySlug = (slug: string, writeHash: boolean) => {
      if (!slug || !slugs.includes(slug)) return;
      setActive(slug);
      remember(slug);
      if (!writeHash) return;
      if (window.location.hash.replace(/^#/, "") === slug) {
        window.dispatchEvent(new HashChangeEvent("hashchange"));
        return;
      }
      history.replaceState(null, "", `#${slug}`);
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    };

    const headingAtMarker = () => {
      let current = "";
      for (const id of slugs) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= marker) current = id;
      }
      return current;
    };

    const updateFromScroll = () => {
      ticking = false;
      if (Date.now() < ignoreUntil) return;
      const hash = window.location.hash.replace(/^#/, "");
      if (hash && slugs.includes(hash)) {
        const target = document.getElementById(hash);
        if (target) {
          const top = target.getBoundingClientRect().top;
          if (top > 0 && top < 240) {
            setActive(hash);
            remember(hash);
            return;
          }
        }
      }
      const current = headingAtMarker();
      if (current) applySlug(current, true);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateFromScroll);
    };

    const onHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (hash && slugs.includes(hash)) {
        ignoreUntil = Date.now() + 1600;
        applySlug(hash, false);
      }
    };

    const onPin = (event: Event) => {
      const detail = (event as CustomEvent<{ hash?: string; until?: number }>).detail;
      if (detail?.until) ignoreUntil = Math.max(ignoreUntil, detail.until);
      const hash = detail?.hash ?? "";
      if (hash && slugs.includes(hash)) applySlug(hash, false);
    };

    const first = slugs.map((id) => document.getElementById(id)).find(Boolean);
    if (first) scroller = scrollParentOf(first);

    onHash();
    if (!window.location.hash) {
      const visible = headingAtMarker();
      if (visible) setActive(visible);
    }

    if (scroller === window) window.addEventListener("scroll", onScroll, { passive: true });
    else (scroller as HTMLElement).addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onHash);
    window.addEventListener(TOPIC_PIN_EVENT, onPin);

    return () => {
      if (scroller === window) window.removeEventListener("scroll", onScroll);
      else (scroller as HTMLElement).removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener(TOPIC_PIN_EVENT, onPin);
    };
  }, [enabled, slugs, topicBySlug, navSlug]);

  return active;
}

function TopicBranch({
  navSlug,
  topic,
  contentHref,
  locked,
  activeSlug,
  depth,
  onNavigate,
}: {
  navSlug: string;
  topic: CourseNavTopic;
  contentHref: string;
  locked: boolean;
  activeSlug: string;
  depth: number;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const progress = useOptionalProgress();
  const kids = topic.children ?? [];
  const slug = topicSlug(topic.id, topic.title);
  const childSlugs = collectTopicSlugs(kids);
  const onSelf = activeSlug === slug;
  const onKid = childSlugs.includes(activeSlug);
  const [open, setOpen] = useState(onSelf || onKid);
  const separator = depth === 0 ? ODOO_TOPIC_SEPARATORS[topic.id] : undefined;

  useEffect(() => {
    if (onSelf || onKid) setOpen(true);
  }, [onSelf, onKid]);

  const href = `${contentHref}#${slug}`;
  const level = depth === 0 ? "topic" : "subtopic";

  return (
    <>
      {separator ? <p className="ih-odoo-sep">{separator}</p> : null}
      <div className={depth > 0 ? "ih-odoo-subtopic" : undefined}>
        <div className={`ih-odoo-row is-${level}${onSelf || onKid ? " is-current" : ""}`}>
          <Link
            href={href}
            className={onSelf ? "is-active" : undefined}
            aria-disabled={locked}
            tabIndex={locked ? -1 : undefined}
            onClick={(event) => {
              if (locked) return;
              rememberTopicPlace(navSlug, slug, topic.id);
              progress?.setPlace(navSlug, { anchor: slug, topicId: topic.id });
              pinContentTopic(slug, 1800);
              onNavigate?.();
              if (pathname.replace(/\/$/, "") !== contentHref.replace(/\/$/, "")) return;
              const heading = document.getElementById(slug);
              if (!heading) return;
              event.preventDefault();
              history.replaceState(null, "", href);
              window.dispatchEvent(new HashChangeEvent("hashchange"));
              scrollToHeading(heading);
            }}
          >
            <span className="ih-odoo-num">{topic.id}</span>
            <span className="ih-odoo-label">{odooTopicSidebarLabel(topic.title)}</span>
          </Link>
          {kids.length ? (
            <button
              type="button"
              className={`ih-odoo-caret${open ? " is-open" : ""}`}
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
          <div className={`ih-odoo-reveal${open ? " is-open" : ""}`}>
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
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

function PhaseBlock({
  navSlug,
  phase,
  phaseDone,
  completedLessons,
  locked,
  trackScroll,
  onNavigate,
}: {
  navSlug: string;
  phase: CourseNavPhase;
  phaseDone?: boolean;
  completedLessons: string[];
  locked: boolean;
  trackScroll: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const phaseHref =
    phase.unit != null
      ? `/courses/${navSlug}/unit/${phase.unit}/chapter/${phase.id}`
      : `/courses/${navSlug}/chapter/${phase.id}`;
  const contentHref = chapterContentPath(navSlug, phase.id, phase.unit);
  const projectHref = chapterLeafPath(navSlug, phase.id, "project", phase.unit);
  const childHrefs = [
    ...phase.lessons
      .filter((lesson) => lesson.slug !== "content")
      .map((lesson) => chapterLeafPath(navSlug, phase.id, lesson.slug, phase.unit)),
    ...(phase.hasProject ? [projectHref] : []),
  ];
  const onChild =
    childHrefs.includes(pathname) ||
    childHrefs.some((href) => pathname.startsWith(`${href}/`)) ||
    pathname === contentHref ||
    pathname.startsWith(`${contentHref}/`);
  const onPhase = pathname === phaseHref;
  const hasKids =
    childHrefs.length > 0 || phase.lessons.some((lesson) => lesson.slug === "content" && lesson.children.length > 0);
  const topicEntries = useMemo(
    () => phase.lessons.filter((lesson) => lesson.slug === "content").flatMap((lesson) => collectTopicEntries(lesson.children)),
    [phase.lessons],
  );
  const activeSlug = useActiveTopicSlug(topicEntries, trackScroll && onChild, navSlug);
  const [open, setOpen] = useState(onChild || onPhase);

  useEffect(() => {
    if (!activeSlug) return;
    const root = document.querySelector<HTMLElement>(".ih-index-scroll, .ih-odoo-drawer-scroll");
    if (root) centerSidebarActive(root);
  }, [activeSlug]);

  useEffect(() => {
    if (!hasKids) return;
    setOpen((current) => current || storageList(phaseOpenKey(navSlug)).includes(phase.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!(onChild || onPhase) || !hasKids) return;
    setOpen(true);
    const stored = storageList(phaseOpenKey(navSlug));
    if (!stored.includes(phase.id)) writeStorageList(phaseOpenKey(navSlug), [...stored, phase.id]);
  }, [onChild, onPhase, hasKids, navSlug, phase.id]);

  const toggle = useCallback(() => {
    setOpen((current) => {
      const next = !current;
      const stored = new Set(hasKids ? storageList(phaseOpenKey(navSlug)) : []);
      if (next) stored.add(phase.id);
      else stored.delete(phase.id);
      writeStorageList(phaseOpenKey(navSlug), [...stored]);
      return next;
    });
  }, [hasKids, navSlug, phase.id]);

  return (
    <div className="ih-odoo-phase">
      <div className={`ih-odoo-row is-chapter${onPhase || onChild ? " is-current" : ""}${locked ? " is-locked" : ""}`}>
        <Link
          href={phaseHref}
          className={onPhase ? "is-active" : undefined}
          aria-disabled={locked}
          tabIndex={locked ? -1 : undefined}
          onClick={() => onNavigate?.()}
        >
          <span className="ih-odoo-num">{phase.number}</span>
          <span className="ih-odoo-label">{odooChapterSidebarLabel(phase.title)}</span>
        </Link>
        {hasKids ? (
          <button
            type="button"
            className={`ih-odoo-caret${open ? " is-open" : ""}`}
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
        <div className="ih-odoo-phase-body">
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
                  onNavigate={onNavigate}
                />
              ));
            }
            const href = chapterLeafPath(navSlug, phase.id, lesson.slug, phase.unit);
            const lessonDone = completedLessons.includes(lesson.id);
            const active = pathname === href || pathname.startsWith(`${href}/`);
            return [
              <div key={`lesson-${lesson.id}`} className={`ih-odoo-row is-topic${active ? " is-current" : ""}`}>
                <Link
                  href={href}
                  className={active ? "is-active" : undefined}
                  aria-disabled={locked}
                  tabIndex={locked ? -1 : undefined}
                  onClick={() => onNavigate?.()}
                >
                  <span className="ih-odoo-num">{lesson.slug === "exercise" ? "E" : lesson.id.replace(/^sp/i, "U")}</span>
                  <span className="ih-odoo-label">
                    {lesson.slug === "exercise" ? "Chapter Exercise" : odooTopicSidebarLabel(lesson.title)}
                  </span>
                  {lessonDone ? (
                    <span className="ih-odoo-done" aria-label="Lesson complete">
                      <Check size={12} />
                    </span>
                  ) : null}
                </Link>
              </div>,
            ];
          })}
          {phase.hasProject ? (
            <div
              className={`ih-odoo-row is-topic${pathname === projectHref || pathname.startsWith(`${projectHref}/`) ? " is-current" : ""}`}
            >
              <Link
                href={projectHref}
                className={pathname === projectHref || pathname.startsWith(`${projectHref}/`) ? "is-active" : undefined}
                aria-disabled={locked}
                tabIndex={locked ? -1 : undefined}
                onClick={() => onNavigate?.()}
              >
                <span className="ih-odoo-num">P</span>
                <span className="ih-odoo-label">Chapter Project</span>
              </Link>
            </div>
          ) : null}
          {phaseDone ? (
            <span className="ih-odoo-phase-done">
              <Check size={12} /> Done
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function UnitBlock({
  navSlug,
  unitId,
  unitTitle,
  phases,
  phaseIds,
  unitExerciseHref,
  unitExerciseTitle,
  unitProjectHref,
  unitProjectTitle,
  trackScroll,
  onNavigate,
}: {
  navSlug: string;
  unitId: string;
  unitTitle: string;
  phases: CourseNavPhase[];
  phaseIds: string[];
  unitExerciseHref?: string;
  unitExerciseTitle?: string;
  unitProjectHref?: string;
  unitProjectTitle?: string;
  trackScroll: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const progress = useOptionalProgress();
  const state = progress?.course(navSlug);
  const onUnit = phases.some((phase) => {
    const phaseHref =
      phase.unit != null
        ? `/courses/${navSlug}/unit/${phase.unit}/chapter/${phase.id}`
        : `/courses/${navSlug}/chapter/${phase.id}`;
    const contentHref = chapterContentPath(navSlug, phase.id, phase.unit);
    return (
      pathname === phaseHref ||
      pathname === contentHref ||
      pathname.startsWith(`${contentHref}/`) ||
      pathname.includes(`/chapter/${phase.id}/`)
    );
  }) ||
    Boolean(
      (unitExerciseHref && (pathname === unitExerciseHref || pathname.startsWith(`${unitExerciseHref}/`))) ||
        (unitProjectHref && (pathname === unitProjectHref || pathname.startsWith(`${unitProjectHref}/`))),
    );
  const [open, setOpen] = useState(onUnit);

  useEffect(() => {
    setOpen((current) => current || storageList(unitOpenKey(navSlug)).includes(unitId) || onUnit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!onUnit) return;
    setOpen(true);
    const stored = storageList(unitOpenKey(navSlug));
    if (!stored.includes(unitId)) writeStorageList(unitOpenKey(navSlug), [...stored, unitId]);
  }, [onUnit, navSlug, unitId]);

  const toggle = useCallback(() => {
    setOpen((current) => {
      const next = !current;
      const stored = new Set(storageList(unitOpenKey(navSlug)));
      if (next) stored.add(unitId);
      else stored.delete(unitId);
      writeStorageList(unitOpenKey(navSlug), [...stored]);
      return next;
    });
  }, [navSlug, unitId]);

  return (
    <div className={`ih-odoo-unit${onUnit ? " is-current" : ""}`}>
      <button type="button" className={`ih-odoo-unit-toggle${open ? " is-open" : ""}`} aria-expanded={open} onClick={toggle}>
        <span className="ih-odoo-unit-label">{odooUnitSidebarLabel(unitId, unitTitle)}</span>
        <span className={`ih-odoo-caret is-unit${open ? " is-open" : ""}`} aria-hidden="true">
          <ChevronRight size={14} />
        </span>
      </button>
      {open ? (
        <div className="ih-odoo-unit-body">
          {phases.map((phase) => {
            const lessonIds = regularLessonIds(phase);
            const projectDone =
              !phase.hasProject ||
              (state?.completedProjects ?? []).some((id) => phaseIdKey(id) === phaseIdKey(phase.id));
            const phaseDone =
              lessonIds.length > 0 && lessonIds.every((id) => state?.completedLessons.includes(id)) && projectDone;
            const locked = progress?.ready ? !progress.canEnter(navSlug, phase.id, phaseIds) : false;
            return (
              <PhaseBlock
                key={phase.id}
                navSlug={navSlug}
                phase={phase}
                phaseDone={phaseDone}
                completedLessons={state?.completedLessons ?? []}
                locked={locked}
                trackScroll={trackScroll}
                onNavigate={onNavigate}
              />
            );
          })}
          {unitExerciseHref ? (
            <div
              className={`ih-odoo-row is-topic${pathname === unitExerciseHref || pathname.startsWith(`${unitExerciseHref}/`) ? " is-current" : ""}`}
            >
              <Link
                href={unitExerciseHref}
                className={pathname === unitExerciseHref || pathname.startsWith(`${unitExerciseHref}/`) ? "is-active" : undefined}
                onClick={() => onNavigate?.()}
              >
                <span className="ih-odoo-num">E</span>
                <span className="ih-odoo-label">{unitExerciseTitle ?? "Unit Exercise"}</span>
              </Link>
            </div>
          ) : null}
          {unitProjectHref ? (
            <div
              className={`ih-odoo-row is-topic${pathname === unitProjectHref || pathname.startsWith(`${unitProjectHref}/`) ? " is-current" : ""}`}
            >
              <Link
                href={unitProjectHref}
                className={pathname === unitProjectHref || pathname.startsWith(`${unitProjectHref}/`) ? "is-active" : undefined}
                onClick={() => onNavigate?.()}
              >
                <span className="ih-odoo-num">P</span>
                <span className="ih-odoo-label">{unitProjectTitle ?? "Unit Project"}</span>
              </Link>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export function OdooTutorialIndex({
  nav,
  homeHref,
  trackScroll = false,
  onNavigate,
}: {
  nav: CourseNav;
  homeHref: string;
  trackScroll?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const phaseIds = nav.chapters.flatMap((chapter) => chapter.phases.map((phase) => phase.id));

  return (
    <nav className="ih-odoo-nav" aria-label={`${nav.shortName} tutorial`}>
      <Link
        href={homeHref}
        className={`ih-odoo-home${pathname === homeHref ? " is-active" : ""}`}
        onClick={() => onNavigate?.()}
      >
        Home
      </Link>
      {nav.chapters.map((chapter) => (
        <UnitBlock
          key={chapter.id}
          navSlug={nav.slug}
          unitId={chapter.id}
          unitTitle={chapter.title}
          phases={chapter.phases}
          phaseIds={phaseIds}
          unitExerciseHref={chapter.unitExerciseHref}
          unitExerciseTitle={chapter.unitExerciseTitle}
          unitProjectHref={chapter.unitProjectHref}
          unitProjectTitle={chapter.unitProjectTitle}
          trackScroll={trackScroll}
          onNavigate={onNavigate}
        />
      ))}
    </nav>
  );
}
