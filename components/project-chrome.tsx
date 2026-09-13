"use client";

import { Check } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { tryPlaygroundHref, toPlaygroundLanguage, writeTryItCode } from "@/lib/code-playground/try-it-storage";
import { notepadHref, writeNotepadEntry } from "@/lib/code-playground/notepad-storage";
import { getCSProjectInfo } from "@/lib/cs-projects-registry";
import type { WhatComesNext } from "@/lib/lesson-sections";
import type { ProjectBrief } from "@/lib/parse-project-brief";
import { getProjectStarter, starterSource } from "@/lib/project-starters";
import { Pager } from "./pager";
import { PracticeRichText } from "./practice-rich-text";
import { WhatComesNextSection } from "./what-comes-next";
import { useLearningProgress } from "./progress-client";

function gitCommands(gitBody: string | null) {
  if (!gitBody) return [];
  return [...gitBody.matchAll(/```(?:bash|sh)?\n([\s\S]*?)```/g)].map((item) => item[1].trim()).filter(Boolean);
}

function artifactLabel(kind: ProjectBrief["kind"]) {
  return {
    code: "Code project",
    lab: "Practical lab",
    design: "Design project",
    analysis: "Analysis project",
    runbook: "Runbook project",
    rehearsal: "Timed rehearsal",
  }[kind];
}

export function ProjectChrome({
  slug,
  phaseId,
  chapterNumber,
  lessonIds,
  unitTitle,
  projectId,
  title,
  brief,
  reviewHref,
  reviewLabel,
  proceedHref,
  proceedLabel,
  whatComesNext,
}: {
  slug: string;
  phaseId: string;
  chapterNumber: string;
  lessonIds: string[];
  unitTitle?: string;
  projectId: string;
  title: string;
  brief: ProjectBrief;
  reviewHref: string;
  reviewLabel: string;
  proceedHref?: string;
  proceedLabel: string;
  whatComesNext?: WhatComesNext | null;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { projectDone, toggleProject, toggleGit, course, visit } = useLearningProgress();
  const done = projectDone(slug, phaseId);
  const lessonsReady = lessonIds.every((lessonId) => course(slug).completedLessons.includes(lessonId));
  const gitDone = course(slug).completedGitCheckpoints.includes(phaseId);
  const commands = gitCommands(brief.gitBody);
  const starter = getProjectStarter(projectId, brief);
  const csInfo = slug === "computer-science" ? getCSProjectInfo(parseInt(phaseId, 10)) : null;

  useEffect(() => {
    visit(slug, phaseId, `project:${phaseId}`);
  }, [slug, phaseId, visit]);

  const pager = (
    <Pager
      backHref={reviewHref}
      backLabel={reviewLabel}
      proceedHref={proceedHref}
      proceedLabel={proceedLabel}
      proceedDisabled={!done}
      hint={!done ? "Complete this chapter project to open the next chapter." : undefined}
    />
  );

  function startProject() {
    if (csInfo) {
      if (csInfo.workspaceType === "notepad") {
        const href = notepadHref();
        writeNotepadEntry(
          {
            prompt: csInfo.problemStatement || csInfo.projectTitle || title,
            modelAnswer: csInfo.solutionMarkdown ?? "",
            title: csInfo.projectTitle,
            kicker: `Chapter ${csInfo.chapter} Project`,
            backHref: pathname,
            prevHref: pathname,
            showAnswerInitial: true,
            starterCode: csInfo.starterCode,
            language: csInfo.language || "python",
            completeProject: { slug, phaseId },
          },
          href
        );
        router.push(href);
        return;
      } else {
        const language = toPlaygroundLanguage(csInfo.language || "python") ?? "python";
        const href = tryPlaygroundHref(language);
        writeTryItCode(
          language,
          {
            source: csInfo.starterCode ?? "",
            title: `Chapter ${csInfo.chapter} · ${csInfo.projectTitle}`,
            instructions: csInfo.problemStatement || csInfo.projectTitle,
            observe: `Run this solution to verify all requirements for ${csInfo.projectTitle}.`,
            backHref: pathname,
            prevHref: pathname,
            requireRunSuccess: false,
            completeProject: { slug, phaseId },
          },
          href
        );
        router.push(href);
        return;
      }
    }

    if (!starter) {
      document.getElementById("project-steps")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const href = tryPlaygroundHref(starter.language);
    writeTryItCode(
      starter.language,
      {
        source: starterSource(starter),
        title: brief.title || title,
        instructions: brief.title || title,
        observe: starter.observe,
        backHref: pathname,
        prevHref: pathname,
        requireRunSuccess: false,
        completeProject: { slug, phaseId },
      },
      href
    );
    router.push(href);
  }

  const isNotepad = csInfo ? csInfo.workspaceType === "notepad" : false;
  const buttonLabel = !lessonsReady
    ? "Finish chapter lessons"
    : csInfo
    ? isNotepad
      ? "Start Building"
      : "Start Project"
    : starter
    ? "Open starter"
    : "Start project";

  return (
    <article className="ih-lesson ih-build">
      <div className="ih-build-top">
        <div>
          <p className="ih-build-context">{unitTitle ? `${unitTitle} · ` : ""}Chapter {chapterNumber}</p>
          <h1>{title}</h1>
          <span className="ih-build-kind">{artifactLabel(brief.kind)}</span>
        </div>
        <button type="button" className="ih-pager-btn ih-pager-start" onClick={startProject} disabled={!lessonsReady}>
          <span className="ih-pager-label">{buttonLabel} »</span>
        </button>
      </div>

      <p className="ih-build-intro"><PracticeRichText text={brief.intro} /></p>

      {brief.lessonCoverage.length ? (
        <section className="ih-build-section" aria-labelledby="build-lessons">
          <h2 id="build-lessons">Lessons practiced</h2>
          <ul className="ih-build-coverage">
            {brief.lessonCoverage.map((item) => (
              <li key={item.lessonId}>
                <span>{item.lessonId}</span>
                <div>
                  <strong>{item.lessonTitle}</strong>
                  <p><PracticeRichText text={item.application} /></p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {brief.spec.length ? (
        <section className="ih-build-section" aria-labelledby="build-must">
          <h2 id="build-must">What you must implement</h2>
          <ol className="ih-build-cards">
            {brief.spec.map((item, index) => (
              <li key={item} className="ih-build-card">
                <span className="ih-build-num">{index + 1}</span>
                <p><PracticeRichText text={item} /></p>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {brief.deliverables.length ? (
        <section className="ih-build-section" aria-labelledby="build-deliverables">
          <h2 id="build-deliverables">Deliverables</h2>
          <ul className="ih-build-checklist">
            {brief.deliverables.map((item) => <li key={item}><PracticeRichText text={item} /></li>)}
          </ul>
        </section>
      ) : null}

      {brief.steps.length ? (
        <section id="project-steps" className="ih-build-section" aria-labelledby="build-how">
          <h2 id="build-how">How to build it</h2>
          <ol className="ih-build-steps">
            {brief.steps.map((item, index) => (
              <li key={item}>
                <span>{index + 1}</span>
                <p><PracticeRichText text={item} /></p>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {brief.validation.length ? (
        <section className="ih-build-section" aria-labelledby="build-validation">
          <h2 id="build-validation">Validation</h2>
          <ul className="ih-build-checklist">
            {brief.validation.map((item) => <li key={item}><PracticeRichText text={item} /></li>)}
          </ul>
        </section>
      ) : null}



      {brief.completionCriteria.length ? (
        <section className="ih-build-section" aria-labelledby="build-completion">
          <h2 id="build-completion">Completion criteria</h2>
          <ul className="ih-build-checklist">
            {brief.completionCriteria.map((item) => <li key={item}><PracticeRichText text={item} /></li>)}
          </ul>
        </section>
      ) : null}

      <section className="ih-build-section" aria-labelledby="build-done">
        <h2 id="build-done">Mark it complete</h2>
        <div className="ih-build-checks">
          <button
            type="button"
            className={`ih-build-check${gitDone ? " is-on" : ""}`}
            onClick={() => toggleGit(slug, phaseId)}
            aria-pressed={gitDone}
          >
            <span className="ih-build-check-mark" aria-hidden="true">{gitDone ? <Check size={18} strokeWidth={3} /> : null}</span>
            <span className="ih-build-check-copy">
              <strong>Git checkpoint</strong>
              <span>I saved this project checkpoint with a commit.</span>
            </span>
          </button>
          <button
            type="button"
            className={`ih-build-check${done ? " is-on" : ""}`}
            onClick={() => toggleProject(slug, phaseId)}
            aria-pressed={done}
            disabled={!lessonsReady}
          >
            <span className="ih-build-check-mark" aria-hidden="true">{done ? <Check size={18} strokeWidth={3} /> : null}</span>
            <span className="ih-build-check-copy">
              <strong>Project finished</strong>
              <span>{lessonsReady ? "I completed the deliverables and all validation checks above." : "Finish every chapter lesson before completing this project."}</span>
            </span>
          </button>
        </div>
        {commands.length ? (
          <pre className="ih-build-git"><code>{commands.join("\n\n")}</code></pre>
        ) : null}
      </section>

      {done && whatComesNext ? (
        <div className="ih-build-next">
          <WhatComesNextSection body={whatComesNext.body} />
        </div>
      ) : null}

      <div className="ih-lesson-end">{pager}</div>
    </article>
  );
}
