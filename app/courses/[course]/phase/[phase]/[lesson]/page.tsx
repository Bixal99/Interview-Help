import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExerciseBlock } from "@/components/exercise-block";
import { GateBanner } from "@/components/gate-banner";
import { LessonChrome } from "@/components/lesson-chrome";
import { MarkdownDocument } from "@/components/markdown-document";
import { PhaseCompleteBar } from "@/components/phase-complete";
import { TutorialShell } from "@/components/tutorial-shell";
import { getAllLessonParams, getLessonView, getRequiredProjectHref } from "@/lib/content";

export function generateStaticParams() {
  return getAllLessonParams();
}

export async function generateMetadata({ params }: { params: Promise<{ course: string; phase: string; lesson: string }> }): Promise<Metadata> {
  const { course, phase, lesson } = await params;
  const view = getLessonView(course, phase, lesson);
  return view ? { title: view.lesson.title, description: `${view.course.shortName}: ${view.lesson.title}` } : {};
}

export default async function LessonPage({ params }: { params: Promise<{ course: string; phase: string; lesson: string }> }) {
  const { course, phase, lesson } = await params;
  const view = getLessonView(course, phase, lesson);
  if (!view) notFound();
  const phaseIds = view.nav.chapters.flatMap((chapter) => chapter.phases.map((item) => item.id));
  return (
    <main id="main-content">
      <TutorialShell nav={view.nav}>
        <GateBanner slug={view.course.slug} phaseId={view.phase.id} phaseIds={phaseIds} requiredHref={getRequiredProjectHref(view.course.slug, view.phase.id)} />
        <LessonChrome
          slug={view.course.slug}
          phaseId={view.phase.id}
          lessonId={view.lesson.id}
          lessonSlug={view.lesson.slug}
          title={view.lesson.title}
          prev={view.prev}
          next={view.next}
        >
          <MarkdownDocument markdown={view.lesson.markdown} sourcePath={view.course.sourcePath} embedYouTube />
          {view.practice && <ExerciseBlock slug={view.course.slug} lessonId={view.lesson.id} practice={view.practice} />}
          {view.completeCta ? <PhaseCompleteBar cta={view.completeCta} /> : null}
        </LessonChrome>
      </TutorialShell>
    </main>
  );
}
