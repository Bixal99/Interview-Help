import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GateBanner } from "@/components/gate-banner";
import { ProjectChrome } from "@/components/project-chrome";
import { TutorialShell } from "@/components/tutorial-shell";
import { getAllProjectParams, getProjectView, getRequiredProjectHref } from "@/lib/content";
import { parseProjectBrief } from "@/lib/parse-project-brief";

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
        <ProjectChrome
          slug={view.course.slug}
          phaseId={view.phase.id}
          projectId={view.project.id}
          title={view.project.title}
          brief={parseProjectBrief(view.project.markdown)}
          reviewHref={view.reviewHref}
          reviewLabel={view.reviewLabel}
          proceedHref={view.proceedHref}
          proceedLabel={view.proceedLabel}
          whatComesNext={view.whatComesNext}
        />
      </TutorialShell>
    </main>
  );
}
