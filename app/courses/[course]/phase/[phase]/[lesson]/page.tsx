import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { ExerciseBlock } from "@/components/exercise-block";
import { GateBanner } from "@/components/gate-banner";
import { LessonChrome } from "@/components/lesson-chrome";
import { MarkdownDocument } from "@/components/markdown-document";
import { RecommendedResources } from "@/components/recommended-resources";
import { getAllLessonParams, getLessonView, getRequiredLessonHref } from "@/lib/content";
import { resourcesForLesson } from "@/lib/learning-resources";
import { extractSeeItResources } from "@/lib/learning-resources/extract-inline";
import { lessonIdsByPhase } from "@/lib/navigation";
import { sectionDocumentTitle } from "@/lib/curriculum-labels";

export function generateStaticParams() {
  return getAllLessonParams();
}

export async function generateMetadata({ params }: { params: Promise<{ course: string; phase: string; lesson: string }> }): Promise<Metadata> {
  const { course, phase, lesson } = await params;
  if (lesson.startsWith("phase:") || lesson === phase) return {};
  const view = getLessonView(course, phase, lesson);
  if (!view) return {};
  const title = sectionDocumentTitle(view.lesson.id, view.lesson.title);
  return {
    title: { absolute: title },
    description: `${view.course.shortName}: ${title}`,
  };
}

export default async function LessonPage({ params }: { params: Promise<{ course: string; phase: string; lesson: string }> }) {
  const { course, phase, lesson } = await params;
  if (lesson.startsWith("phase:") || lesson === phase) {
    redirect(`/courses/${course}/phase/${phase}`);
  }
  const view = getLessonView(course, phase, lesson);
  if (!view) notFound();
  const phaseIds = view.nav.chapters.flatMap((chapter) => chapter.phases.map((item) => item.id));
  const lessonsByPhase = lessonIdsByPhase(view.nav);
  const inlineResources = extractSeeItResources(view.lesson.markdown);
  const resources = inlineResources.length > 0
    ? []
    : resourcesForLesson(view.course.slug, view.phase.id, view.lesson.id, view.lesson.title);

  return (
    <main id="main-content">
      <GateBanner
        slug={view.course.slug}
        phaseId={view.phase.id}
        phaseIds={phaseIds}
        lessonIdsByPhase={lessonsByPhase}
        requiredHref={getRequiredLessonHref(view.course.slug, view.phase.id)}
      />
      <LessonChrome
          slug={view.course.slug}
          phaseId={view.phase.id}
          lessonId={view.lesson.id}
          lessonSlug={view.lesson.slug}
          title={view.lesson.title}
          knowFirst={view.phase.knowFirst}
          isFirstLesson={view.isFirstLesson}
          isLastLesson={view.isLastLesson}
          projectHref={view.projectHref}
          prev={view.prev}
          next={view.next}
        >
          <MarkdownDocument markdown={view.lesson.markdown} sourcePath={view.course.sourcePath} embedYouTube />
          {resources.length > 0 && (
            <RecommendedResources resources={resources} sourcePath={view.course.sourcePath} embedYouTube />
          )}
          {view.practice && <ExerciseBlock slug={view.course.slug} lessonId={view.lesson.id} practice={view.practice} />}
        </LessonChrome>
    </main>
  );
}

