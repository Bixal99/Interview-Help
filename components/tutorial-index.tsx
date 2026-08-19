"use client";

import { useEffect, useState, type ComponentType } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AlignLeft,
  BookOpen,
  Boxes,
  Briefcase,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Cpu,
  Database,
  FolderKanban,
  GitBranch,
  Globe,
  House,
  LayoutTemplate,
  Layers,
  Network,
  Puzzle,
  Shield,
  Wrench,
} from "lucide-react";
import type { CourseNav, CourseNavPhase } from "@/lib/navigation";
import { lessonPath, phasePath, projectPathFor } from "@/lib/parse-course";
import { useOptionalProgress } from "./progress-client";

type LucideIcon = ComponentType<{ size?: number; className?: string }>;

function compactLabel(title: string, max = 22) {
  const clipped = title
    .split(/\s+[-–—:|]\s+/)[0]
    .replace(/^phase\s+\d+\s*/i, "")
    .trim();
  if (clipped.length <= max) return clipped;
  return `${clipped.slice(0, max - 1).trimEnd()}…`;
}

function courseTab(name: string) {
  if (name === "Computer Science") return "CS";
  if (name === "IT Administration") return "IT Admin";
  if (name === "Web Development") return "Web";
  if (name === "AI & ML") return "AI";
  return name.length > 16 ? `${name.slice(0, 15)}…` : name;
}

function chapterIcon(id: string, title: string): LucideIcon {
  const key = `${id} ${title}`.toLowerCase();
  if (/found|intro|start|basic|general/.test(key)) return BookOpen;
  if (/program|python|code|script/.test(key)) return Code2;
  if (/object|oop|class|thinking/.test(key)) return Boxes;
  if (/pillar|solid/.test(key)) return key.includes("solid") ? Puzzle : Layers;
  if (/algorithm|data struct|dsa/.test(key)) return GitBranch;
  if (/network/.test(key)) return Network;
  if (/security|cyber/.test(key)) return Shield;
  if (/cloud|devops/.test(key)) return Cloud;
  if (/data|sql|database/.test(key)) return Database;
  if (/web|http/.test(key)) return Globe;
  if (/system|os/.test(key)) return Cpu;
  if (/interview|career|hire|portfolio/.test(key)) return Briefcase;
  if (/tool|git|model/.test(key)) return Wrench;
  if (/architect|design|lld/.test(key)) return LayoutTemplate;
  return AlignLeft;
}

function PhaseBlock({
  navSlug,
  phase,
  icon: Icon,
  phaseDone,
}: {
  navSlug: string;
  phase: CourseNavPhase;
  icon: LucideIcon;
  phaseDone?: boolean;
}) {
  const pathname = usePathname();
  const phaseHref = phasePath(navSlug, phase.id);
  const childHrefs = [
    ...phase.lessons.map((lesson) => lessonPath(navSlug, phase.id, lesson)),
    ...(phase.hasProject ? [projectPathFor(navSlug, phase.id)] : []),
  ];
  const onChild = childHrefs.includes(pathname);
  const onPhase = pathname === phaseHref;
  const [open, setOpen] = useState(onChild || onPhase);

  useEffect(() => {
    if (onChild || onPhase) setOpen(true);
  }, [onChild, onPhase]);

  return (
    <div className="ih-index-phase">
      <div className={`ih-index-row${onPhase || onChild ? " is-current" : ""}`}>
        <Link href={phaseHref} className={onPhase ? "active" : undefined}>
          <Icon size={18} className="ih-index-ico" />
          <span>{compactLabel(phase.title)}</span>
        </Link>
        <button
          type="button"
          className={`ih-index-caret${open ? " is-open" : ""}`}
          aria-expanded={open}
          aria-label={open ? "Hide lessons" : "Show lessons"}
          onClick={() => setOpen((current) => !current)}
        >
          <ChevronRight size={16} />
        </button>
      </div>
      {open ? (
        <div className="ih-index-sub">
          {phase.lessons.map((lesson) => {
            const href = lessonPath(navSlug, phase.id, lesson);
            return (
              <Link key={lesson.id} href={href} className={pathname === href ? "active" : undefined}>
                {compactLabel(lesson.title, 26)}
              </Link>
            );
          })}
          {phase.hasProject ? (
            <Link
              href={projectPathFor(navSlug, phase.id)}
              className={pathname === projectPathFor(navSlug, phase.id) ? "active" : undefined}
            >
              <FolderKanban size={15} className="ih-index-ico" />
              Project
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
}: {
  nav: CourseNav;
  homeHref: string;
}) {
  const pathname = usePathname();
  const progress = useOptionalProgress();
  const state = progress?.course(nav.slug);
  const tab = courseTab(nav.shortName);

  return (
    <nav className="ih-index-nav" aria-label={`${nav.shortName} tutorial`}>
      <p className="ih-index-title">
        <AlignLeft size={18} className="ih-index-ico" />
        {tab}
      </p>
      <Link href={homeHref} className={pathname === homeHref ? "active" : undefined}>
        <House size={18} className="ih-index-ico" />
        Home
      </Link>
      {nav.chapters.map((chapter) => {
        const Icon = chapterIcon(chapter.id, chapter.title);
        return (
          <div key={chapter.id} className="ih-index-group">
            <p className="ih-index-section">{compactLabel(chapter.title, 18)}</p>
            {chapter.phases.map((phase) => (
              <PhaseBlock
                key={phase.id}
                navSlug={nav.slug}
                phase={phase}
                icon={Icon}
                phaseDone={state?.completedProjects.includes(phase.id)}
              />
            ))}
          </div>
        );
      })}
    </nav>
  );
}
