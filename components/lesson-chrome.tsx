"use client";

import { useEffect } from "react";
import type { Neighbor } from "@/lib/navigation";
import { BeforeYouStart } from "./before-you-start";
import { Pager } from "./pager";
import { useLearningProgress } from "./progress-client";

export function LessonChrome({
  slug,
  phaseId,
  lessonId,
  lessonSlug,
  title,
  knowFirst,
  isFirstLesson,
  isLastLesson,
  projectHref,
  prev,
  next,
  children,
}: {
  slug: string;
  phaseId: string;
  lessonId: string;
  lessonSlug: string;
  title: string;
  knowFirst?: string;
  isFirstLesson?: boolean;
  isLastLesson?: boolean;
  projectHref?: string | null;
  prev: Neighbor | null;
  next: Neighbor | null;
  children: React.ReactNode;
}) {
  const { visit, projectDone, completeLesson } = useLearningProgress();
  const buildProject = Boolean(isLastLesson && projectHref);
  const nextDisabled = !buildProject && Boolean(next?.requiresProject && !projectDone(slug, phaseId));
  const proceedHref = buildProject ? projectHref! : next?.href;
  const proceedLabel = buildProject ? "Build Project" : "Next";
  const pager = (
    <Pager
      backHref={prev?.href ?? `/courses/${slug}`}
      backLabel="Previous"
      proceedHref={proceedHref}
      proceedLabel={proceedLabel}
      proceedDisabled={nextDisabled}
      hint={nextDisabled ? "Complete the project to continue." : undefined}
    />
  );

  useEffect(() => {
    visit(slug, phaseId, lessonSlug);
    completeLesson(slug, lessonId);
  }, [slug, phaseId, lessonId, lessonSlug, visit, completeLesson]);

  return (
    <article className="ih-lesson">
      <h1>{lessonId} {title}</h1>
      {pager}
      <div className="ih-lesson-body">
        {isFirstLesson && knowFirst ? <BeforeYouStart text={knowFirst} /> : null}
        {children}
      </div>
      <div className="ih-lesson-end">{pager}</div>
    </article>
  );
}
