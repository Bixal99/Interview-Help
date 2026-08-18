"use client";

import { useEffect } from "react";
import type { Neighbor } from "@/lib/navigation";
import type { VideoResource } from "@/lib/learning-model";
import { PrevNext } from "./prev-next";
import { useLearningProgress } from "./progress-client";
import { YouTubeBand } from "./youtube-band";

export function LessonChrome({
  slug,
  phaseId,
  lessonId,
  lessonSlug,
  title,
  videos,
  prev,
  next,
  children,
}: {
  slug: string;
  phaseId: string;
  lessonId: string;
  lessonSlug: string;
  title: string;
  videos: VideoResource[];
  prev: Neighbor | null;
  next: Neighbor | null;
  children: React.ReactNode;
}) {
  const { visit, projectDone, completeLesson } = useLearningProgress();
  const nextDisabled = Boolean(next?.requiresProject && !projectDone(slug, phaseId));

  useEffect(() => {
    visit(slug, phaseId, lessonSlug);
    completeLesson(slug, lessonId);
  }, [slug, phaseId, lessonId, lessonSlug, visit, completeLesson]);

  return (
    <article>
      <div className="ih-band px-4 py-8 sm:px-8 lg:px-12">
        <h1 className="max-w-[75ch] text-3xl font-bold tracking-[-.02em] sm:text-4xl">{title}</h1>
        <YouTubeBand videos={videos} />
        <div className="mt-6 max-w-[75ch]">
          <PrevNext prev={prev} next={next} nextDisabled={nextDisabled} nextHint={nextDisabled ? "Complete the project to continue." : undefined} />
        </div>
      </div>
      <div className="bg-[rgb(var(--surface))] px-4 py-8 sm:px-8 lg:px-12">
        <div className="max-w-[75ch]">{children}</div>
        <div className="max-w-[75ch] border-t hairline mt-10">
          <PrevNext prev={prev} next={next} nextDisabled={nextDisabled} nextHint={nextDisabled ? "Complete the project to continue." : undefined} />
        </div>
      </div>
    </article>
  );
}
