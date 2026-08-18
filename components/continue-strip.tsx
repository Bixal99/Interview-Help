"use client";

import Link from "next/link";
import { useLearningProgress } from "./progress-client";

function hrefFor(slug: string, phaseId: string, lessonId?: string) {
  return lessonId ? `/courses/${slug}/phase/${phaseId}/${lessonId}` : `/courses/${slug}/phase/${phaseId}`;
}

export function ContinueStrip() {
  const { ready, resume } = useLearningProgress();
  if (!ready) return null;
  const current = resume(hrefFor);
  if (!current) return null;
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border hairline bg-[rgb(var(--surface))] px-4 py-3">
      <p className="text-[15px]">
        Continue {current.slug.replace(/-/g, " ")}
        {current.lessonId ? ` · ${current.lessonId}` : current.phaseId ? ` · phase ${current.phaseId}` : ""}
      </p>
      <Link href={current.href} className="btn-next">Continue</Link>
    </div>
  );
}
