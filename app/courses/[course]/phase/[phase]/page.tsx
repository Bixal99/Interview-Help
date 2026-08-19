import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PhaseCheckpoint } from "@/components/phase-checkpoint";
import { getAllPhaseParams, getPhaseView } from "@/lib/content";
import { lessonPath } from "@/lib/parse-course";

export function generateStaticParams() {
  return getAllPhaseParams();
}

export async function generateMetadata({ params }: { params: Promise<{ course: string; phase: string }> }): Promise<Metadata> {
  const { course, phase } = await params;
  const view = getPhaseView(course, phase);
  return view ? { title: view.phase.title } : {};
}

export default async function PhasePage({ params }: { params: Promise<{ course: string; phase: string }> }) {
  const { course, phase } = await params;
  const view = getPhaseView(course, phase);
  if (!view) notFound();
  const firstLesson = view.phase.lessons[0];
  return (
    <main id="main-content">
      <PhaseCheckpoint
        phaseNumber={view.phase.number}
        phaseTitle={view.phase.title}
        track={view.phase.track}
        goal={view.phase.goal}
        topics={view.phase.lessons.map((lesson) => ({ id: lesson.id, title: lesson.title }))}
        prev={view.prev}
        proceedHref={firstLesson ? lessonPath(view.course.slug, view.phase.id, firstLesson) : view.next?.href ?? view.startHref}
      />
    </main>
  );
}
