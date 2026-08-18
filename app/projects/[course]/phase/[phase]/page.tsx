import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GateBanner } from "@/components/gate-banner";
import { MarkdownDocument } from "@/components/markdown-document";
import { ProjectChrome } from "@/components/project-chrome";
import { TutorialShell } from "@/components/tutorial-shell";
import { getAllProjectParams, getProjectView, getRequiredProjectHref } from "@/lib/content";

export function generateStaticParams() {
  return getAllProjectParams();
}

export async function generateMetadata({ params }: { params: Promise<{ course: string; phase: string }> }): Promise<Metadata> {
  const { course, phase } = await params;
  const view = getProjectView(course, phase);
  return view ? { title: view.project.title } : {};
}

export default async function PhaseProjectPage({ params }: { params: Promise<{ course: string; phase: string }> }) {
  const { course, phase } = await params;
  const view = getProjectView(course, phase);
  if (!view) notFound();
  const phaseIds = view.nav.chapters.flatMap((chapter) => chapter.phases.map((item) => item.id));
  return (
    <main id="main-content">
      <TutorialShell nav={view.nav}>
        <GateBanner slug={view.course.slug} phaseId={view.phase.id} phaseIds={phaseIds} requiredHref={getRequiredProjectHref(view.course.slug, view.phase.id)} />
        <ProjectChrome slug={view.course.slug} phaseId={view.phase.id} title={view.project.title} prev={view.prev} next={view.next}>
          <MarkdownDocument markdown={view.project.markdown} sourcePath={view.course.sourcePath} embedYouTube={false} />
        </ProjectChrome>
      </TutorialShell>
    </main>
  );
}
