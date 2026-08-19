"use client";

import { useEffect } from "react";
import type { Neighbor } from "@/lib/navigation";
import { Pager } from "./pager";
import { useLearningProgress } from "./progress-client";

export function LessonChrome({
  slug,
  phaseId,
  lessonId,
  lessonSlug,
  title,
  prev,
  next,
  children,
}: {
  slug: string;
  phaseId: string;
  lessonId: string;
  lessonSlug: string;
  title: string;
  prev: Neighbor | null;
  next: Neighbor | null;
  children: React.ReactNode;
}) {
  const { visit, projectDone, completeLesson } = useLearningProgress();
  const nextDisabled = Boolean(next?.requiresProject && !projectDone(slug, phaseId));
  const pager = (
    <Pager
      backHref={prev?.href ?? `/courses/${slug}`}
      backLabel="Previous"
      proceedHref={next?.href}
      proceedLabel="Next"
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
      <h1>{title}</h1>
      {pager}
      <div className="ih-lesson-body">{children}</div>
      <div className="ih-lesson-end">{pager}</div>
    </article>
  );
}
