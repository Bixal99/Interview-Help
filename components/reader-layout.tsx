import Link from "next/link";
import { ArrowLeft, BookOpen, ChevronRight, FolderKanban, MessagesSquare } from "lucide-react";
import type { Heading } from "@/lib/content-utils";
import { ActiveOutline } from "./active-outline";
import { MarkdownDocument } from "./markdown-document";
import { ReadingProgress } from "./reading-progress";
import { CourseProgress } from "./progress";

type ReaderProps = { title: string; markdown: string; headings: Heading[]; slug?: string; overviewHref?: string };

function PhaseNavigation({ headings, slug }: { headings: Heading[]; slug?: string }) {
  const phases = headings.filter((heading) => heading.phase !== undefined);
  return <nav className="learning-thread space-y-1" aria-label="Course phases">{phases.map((phase) => <a key={`${phase.id}-${phase.line}`} href={`#${phase.id}`} className="relative flex gap-3 rounded-lg px-2 py-2 text-xs leading-5 text-muted transition hover:bg-ink/5 hover:text-ink"><span className="relative z-10 grid size-6 shrink-0 place-items-center rounded-full border hairline surface text-[10px] font-medium">{phase.phase}</span><span>{phase.text.replace(/^PHASE\s+\d+\s*[-–—:]?\s*/i, "")}</span></a>)}</nav>;
}

export function ReaderLayout({ title, markdown, headings, slug, overviewHref }: ReaderProps) {
  const phases = headings.filter((heading) => heading.phase !== undefined);
  const outline = headings.filter((heading) => heading.depth === 2).slice(0, 60);
  return (
    <main id="main-content" className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6 lg:py-8">
      <ReadingProgress />
      <details className="mb-5 rounded-xl border hairline surface p-3 lg:hidden">
        <summary className="cursor-pointer text-sm font-medium">Course navigation</summary>
        <div className="mt-4 max-h-[55vh] overflow-auto"><PhaseNavigation headings={headings} slug={slug} /></div>
      </details>
      <div className="grid min-w-0 gap-8 lg:grid-cols-[250px_minmax(0,760px)_190px] lg:justify-center xl:grid-cols-[270px_minmax(0,800px)_210px]">
        <aside className="hidden lg:block"><div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-3">
          {overviewHref && <Link href={overviewHref} className="mb-5 inline-flex items-center gap-2 text-xs font-medium text-muted hover:text-ink"><ArrowLeft size={13} /> Course overview</Link>}
          <h2 className="mb-1 text-sm font-semibold">{title}</h2><p className="mb-5 text-[11px] text-muted">{phases.length ? `${phases.length} connected phases` : "Source document"}</p>
          {slug && <div className="mb-5"><CourseProgress slug={slug} phaseIds={phases.map((phase) => phase.id)} /></div>}
          <PhaseNavigation headings={headings} slug={slug} />
          <div className="mt-6 space-y-1 border-t hairline pt-4 text-xs text-muted"><Link href="/projects" className="flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-ink/5 hover:text-ink"><FolderKanban size={14} /> Projects</Link><Link href="/interview" className="flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-ink/5 hover:text-ink"><MessagesSquare size={14} /> Interview practice</Link></div>
        </div></aside>
        <div className="min-w-0 rounded-2xl border hairline surface px-5 py-7 shadow-soft sm:px-8 lg:px-10 lg:py-10"><MarkdownDocument markdown={markdown} progressScope={slug} />
          <nav className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t hairline pt-6 text-sm" aria-label="Document navigation">{overviewHref ? <Link href={overviewHref} className="inline-flex items-center gap-2 text-muted hover:text-ink"><ArrowLeft size={15} /> Overview</Link> : <span />}<Link href="/courses" className="inline-flex items-center gap-2 font-medium">Explore courses <ChevronRight size={15} /></Link></nav>
        </div>
        <aside className="hidden xl:block"><div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto"><h2 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.12em] text-muted"><BookOpen size={13} /> On this page</h2><ActiveOutline headings={outline} /></div></aside>
      </div>
    </main>
  );
}
