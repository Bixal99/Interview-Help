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
  const { ready, visit } = useLearningProgress();
  const buildProject = Boolean(isLastLesson && projectHref);
  const proceedHref = buildProject ? projectHref! : next?.href;
  const proceedLabel = buildProject ? "Build Project" : "Next";
  const pager = (
    <Pager
      backHref={prev?.href ?? `/courses/${slug}`}
      backLabel="Previous"
      proceedHref={proceedHref}
      proceedLabel={proceedLabel}
    />
  );

  useEffect(() => {
    if (!ready) return;
    visit(slug, phaseId, lessonId);
  }, [ready, slug, phaseId, lessonId, visit]);

  return (
    <article className="ih-lesson">
      {pager}
      <h1>{lessonId} {title}</h1>
      <div className="ih-lesson-body">
        {isFirstLesson && knowFirst ? <BeforeYouStart text={knowFirst} /> : null}
        {children}
      </div>
      <div className="ih-lesson-end">{pager}</div>
    </article>
  );
}
