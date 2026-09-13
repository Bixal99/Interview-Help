"use client";

import { Pager } from "@/components/pager";
import { CourseProgressBar } from "@/components/course-progress-bar";
import { useLearningProgress } from "@/components/progress-client";
import { resumeHrefFor } from "@/lib/resume-href";

export function CourseHomeBandActions({
  slug,
  lessonCount,
  projectCount,
  startHref,
}: {
  slug: string;
  lessonCount: number;
  projectCount: number;
  startHref: string;
}) {
  const { ready, course } = useLearningProgress();
  const state = course(slug);
  const started = Boolean(
    state.currentPhaseId || state.completedLessons.length > 0 || state.visitedLessons.length > 0,
  );
  const continueHref =
    ready && started && state.currentPhaseId
      ? resumeHrefFor(slug, state.currentPhaseId, state.currentLessonId, state.currentAnchor)
      : startHref;

  return (
    <div className="w-full max-w-md shrink-0 lg:w-[22rem]">
      <CourseProgressBar slug={slug} lessonCount={lessonCount} projectCount={projectCount} variant="band" />
      <div className="mt-4">
        <Pager
          backHref="/courses"
          backLabel="Back"
          proceedHref={continueHref}
          proceedLabel={started ? "Continue" : "Start"}
        />
      </div>
    </div>
  );
}
