import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GateBanner } from "@/components/gate-banner";
import { MarkdownDocument } from "@/components/markdown-document";
import { TutorialShell } from "@/components/tutorial-shell";
import { getAllPhaseParams, getPhaseView, getRequiredProjectHref } from "@/lib/content";
import { lessonPath } from "@/lib/parse-course";

export function generateStaticParams() {
  return getAllPhaseParams();
}

export async function generateMetadata({ params }: { params: Promise<{ course: string; phase: string }> }): Promise<Metadata> {
  const { course, phase } = await params;
  const view = getPhaseView(course, phase);
  return view ? { title: `PHASE ${view.phase.number} - ${view.phase.title}` } : {};
}

export default async function PhasePage({ params }: { params: Promise<{ course: string; phase: string }> }) {
  const { course, phase } = await params;
  const view = getPhaseView(course, phase);
  if (!view) notFound();
  const phaseIds = view.nav.chapters.flatMap((chapter) => chapter.phases.map((item) => item.id));
  return (
    <main id="main-content">
      <TutorialShell nav={view.nav}>
        <GateBanner slug={view.course.slug} phaseId={view.phase.id} phaseIds={phaseIds} requiredHref={getRequiredProjectHref(view.course.slug, view.phase.id)} />
        <div className="ih-band px-4 py-8 sm:px-8 lg:px-12">
          <h1 className="max-w-[75ch] text-3xl font-bold sm:text-4xl">PHASE {view.phase.number} - {view.phase.title}</h1>
        </div>
        <div className="bg-[rgb(var(--surface))] px-4 py-8 sm:px-8 lg:px-12">
          <div className="max-w-[75ch]">
            <MarkdownDocument markdown={view.phase.overview} sourcePath={view.course.sourcePath} embedYouTube={false} />
            <h2 className="mt-8 text-2xl font-bold">Lessons</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5">
              {view.phase.lessons.map((lesson) => (
                <li key={lesson.id}><Link href={lessonPath(view.course.slug, view.phase.id, lesson)} className="text-accent underline">{lesson.id} {lesson.title}</Link></li>
              ))}
            </ol>
            <p className="mt-8 flex flex-wrap gap-3">
              <Link href={view.startHref} className="btn-next">Start</Link>
              {view.projectHref && <Link href={view.projectHref} className="btn-prev">Phase project</Link>}
            </p>
          </div>
        </div>
      </TutorialShell>
    </main>
  );
}
