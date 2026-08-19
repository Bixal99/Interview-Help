"use client";

import { useEffect } from "react";
import type { WhatComesNext } from "@/lib/lesson-sections";
import { Pager } from "./pager";
import { WhatComesNextSection } from "./what-comes-next";
import { useLearningProgress } from "./progress-client";

export function ProjectChrome({
  slug,
  phaseId,
  title,
  reviewHref,
  reviewLabel,
  proceedHref,
  proceedLabel,
  whatComesNext,
  children,
}: {
  slug: string;
  phaseId: string;
  title: string;
  reviewHref: string;
  reviewLabel: string;
  proceedHref?: string;
  proceedLabel: string;
  whatComesNext?: WhatComesNext | null;
  children: React.ReactNode;
}) {
  const { projectDone, toggleProject, toggleGit, course, visit } = useLearningProgress();
  const done = projectDone(slug, phaseId);
  const gitDone = course(slug).completedGitCheckpoints.includes(phaseId);
  const proceedDisabled = Boolean(proceedHref && !done);

  useEffect(() => {
    visit(slug, phaseId, `project:${phaseId}`);
  }, [slug, phaseId, visit]);
  const pager = (
    <Pager
      backHref={reviewHref}
      backLabel={reviewLabel}
      proceedHref={proceedHref}
      proceedLabel={proceedLabel}
      proceedDisabled={proceedDisabled}
      hint={proceedDisabled ? "Complete the project to continue." : undefined}
    />
  );

  return (
    <article className="ih-lesson">
      <h1>{title}</h1>
      {pager}
      <div className="ih-lesson-body">{children}</div>
      {whatComesNext ? (
        <div className="ih-lesson-body">
          <WhatComesNextSection body={whatComesNext.body} />
        </div>
      ) : null}
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
      <div className="ih-lesson-end">{pager}</div>
    </article>
  );
}
