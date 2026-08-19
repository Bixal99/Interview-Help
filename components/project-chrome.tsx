"use client";

import type { Neighbor } from "@/lib/navigation";
import { Pager } from "./pager";
import { useLearningProgress } from "./progress-client";

export function ProjectChrome({
  slug,
  phaseId,
  title,
  prev,
  next,
  children,
}: {
  slug: string;
  phaseId: string;
  title: string;
  prev: Neighbor | null;
  next: Neighbor | null;
  children: React.ReactNode;
}) {
  const { projectDone, toggleProject, toggleGit, course } = useLearningProgress();
  const done = projectDone(slug, phaseId);
  const gitDone = course(slug).completedGitCheckpoints.includes(phaseId);
  const nextDisabled = Boolean(next?.requiresProject && !done);

  return (
    <article className="ih-lesson">
      <h1>{title}</h1>
      <Pager
        backHref={prev?.href ?? `/courses/${slug}`}
        backLabel="Previous"
        proceedHref={next?.href}
        proceedLabel="Next"
        proceedDisabled={nextDisabled}
        hint={nextDisabled ? "Complete the project to continue." : undefined}
      />
      <div className="ih-lesson-body">{children}</div>
      <div className="ih-lesson-body mt-8 space-y-3">
        <label className="flex items-start gap-2 text-[15px]">
          <input type="checkbox" checked={gitDone} onChange={() => toggleGit(slug, phaseId)} />
          <span>I ran the Git checkpoint from this project card.</span>
        </label>
        <label className="flex items-start gap-2 text-[15px]">
          <input type="checkbox" checked={done} onChange={() => toggleProject(slug, phaseId)} />
          <span>I completed this phase project.</span>
        </label>
        <p className="text-sm text-muted">Next phase stays off until the project is marked complete.</p>
      </div>
      <div className="ih-lesson-end">
        <Pager
          backHref={prev?.href ?? `/courses/${slug}`}
          backLabel="Previous"
          proceedHref={next?.href}
          proceedLabel="Next"
          proceedDisabled={nextDisabled}
          hint={nextDisabled ? "Complete the project to continue." : undefined}
        />
      </div>
    </article>
  );
}
