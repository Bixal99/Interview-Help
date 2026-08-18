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
    <article>
      <div className="ih-band px-4 py-8 sm:px-8 lg:px-12">
        <h1 className="max-w-[75ch] text-left text-3xl font-bold tracking-[-.02em] sm:text-4xl">{title}</h1>
      </div>
      <div className="bg-[rgb(var(--surface))] px-4 py-8 sm:px-8 lg:px-12">
        <div className="max-w-[75ch]">{children}</div>
        <div className="mt-10 max-w-[75ch] space-y-3 border-t hairline pt-6">
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
        <div className="mt-12 border-t hairline pt-8">
          <Pager
            backHref={prev?.href ?? `/courses/${slug}`}
            backLabel="Back"
            proceedHref={next?.href}
            proceedLabel="Proceed"
            proceedDisabled={nextDisabled}
            hint={nextDisabled ? "Complete the project to continue." : undefined}
          />
        </div>
      </div>
    </article>
  );
}
