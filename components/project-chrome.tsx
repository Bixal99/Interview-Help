"use client";

import { Check } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { tryPlaygroundHref, writeTryItCode } from "@/lib/code-playground/try-it-storage";
import type { WhatComesNext } from "@/lib/lesson-sections";
import type { ProjectBrief } from "@/lib/parse-project-brief";
import { getProjectStarter } from "@/lib/project-starters";
import { ICON_SIZE } from "@/lib/icons";
import { TechnologyIcon } from "./icons/technology-icon";
import { Pager } from "./pager";
import { WhatComesNextSection } from "./what-comes-next";
import { useLearningProgress } from "./progress-client";

function gitCommands(gitBody: string | null) {
  if (!gitBody) return [];
  return [...gitBody.matchAll(/```(?:bash|sh)?\n([\s\S]*?)```/g)].map((item) => item[1].trim()).filter(Boolean);
}

const TOOL_SLUG_RULES: [RegExp, string][] = [
  [/\bvscodium\b/, "vscodium"],
  [/\bvs code\b|\bvscode\b/, "vscode"],
  [/\bstreamlit\b/, "streamlit"],
  [/\bflask\b/, "flask"],
  [/\bfastapi\b/, "fastapi"],
  [/\bpython\b/, "python"],
  [/\breact\b/, "react"],
  [/\bjavascript\b|\bjs\b/, "javascript"],
  [/\btypescript\b/, "typescript"],
  [/\bdocker\b/, "docker"],
  [/\bpostgres\b/, "postgresql"],
  [/\bmongo\b/, "mongodb"],
  [/\bgithub\b/, "github"],
  [/\bgit\b/, "git"],
  [/\bsqlite\b/, "sqlite"],
  [/\blinux\b/, "linux"],
  [/\bodoo\b/, "odoo"],
];

function toolSlug(text: string) {
  const lower = text.toLowerCase();
  const head = lower.split(/[;,(]/)[0];
  for (const [pattern, slug] of TOOL_SLUG_RULES) {
    if (pattern.test(head)) return slug;
  }
  for (const [pattern, slug] of TOOL_SLUG_RULES) {
    if (pattern.test(lower)) return slug;
  }
  return "";
}

export function ProjectChrome({
  slug,
  phaseId,
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
  const gitDone = course(slug).completedGitCheckpoints.includes(phaseId);
  const commands = gitCommands(brief.gitBody);

  useEffect(() => {
    visit(slug, phaseId, `project:${phaseId}`);
  }, [slug, phaseId, visit]);

  const pager = (
    <Pager
      backHref={reviewHref}
      backLabel={reviewLabel}
      proceedHref={proceedHref}
      proceedLabel={proceedLabel}
    />
  );

  function startBuild() {
    const starter = getProjectStarter(projectId, brief);
    const href = tryPlaygroundHref(starter.language);
    writeTryItCode(starter.language, {
      source: starter.code,
      title: brief.title || title,
      instructions: brief.title || title,
      observe: starter.observe,
      backHref: pathname,
      prevHref: pathname,
      requireRunSuccess: false,
      completeProject: { slug, phaseId },
    }, href);
    router.push(href);
  }

  return (
    <article className="ih-lesson ih-build">
      <div className="ih-build-top">
        <div>
          <p className="ih-build-kicker">Start Building</p>
          <h1>{title}</h1>
        </div>
        <button type="button" className="ih-pager-btn ih-pager-start" onClick={startBuild}>
          <span className="ih-pager-label">Start Building »</span>
        </button>
      </div>

      <p className="ih-build-intro">{brief.intro}</p>

      {brief.spec.length ? (
        <section className="ih-build-section" aria-labelledby="build-must">
          <h2 id="build-must">What you must implement</h2>
          <ol className="ih-build-cards">
            {brief.spec.map((item, index) => (
              <li key={item} className="ih-build-card">
                <span className="ih-build-num">{index + 1}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {brief.steps.length ? (
        <section className="ih-build-section" aria-labelledby="build-how">
          <h2 id="build-how">How to build it</h2>
          <ol className="ih-build-steps">
            {brief.steps.map((item, index) => (
              <li key={item}>
                <span>{index + 1}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {brief.tech.length ? (
        <section className="ih-build-section" aria-labelledby="build-tools">
          <h2 id="build-tools">Tools</h2>
          <ul className="ih-build-tech">
            {brief.tech.map((item) => {
              const slug = toolSlug(item);
              return (
                <li key={item} className="ih-build-tool">
                  <button type="button" className="ih-build-tool-btn" aria-label={item}>
                    {slug ? (
                      <TechnologyIcon slug={slug} title={item} size={ICON_SIZE.heading} useBrandColor surface="light" decorative className="ih-build-tool-mark" />
                    ) : (
                      <span className="ih-build-tool-fallback" aria-hidden="true">{item.slice(0, 2).toUpperCase()}</span>
                    )}
                  </button>
                  <span className="ih-build-tool-tip" aria-hidden="true">{item}</span>
                </li>
              );
            })}
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
              <span>I saved this build with a commit.</span>
            </span>
          </button>
          <button
            type="button"
            className={`ih-build-check${done ? " is-on" : ""}`}
            onClick={() => toggleProject(slug, phaseId)}
            aria-pressed={done}
          >
            <span className="ih-build-check-mark" aria-hidden="true">{done ? <Check size={18} strokeWidth={3} /> : null}</span>
            <span className="ih-build-check-copy">
              <strong>Build finished</strong>
              <span>I ran it successfully and the behavior matches the list above.</span>
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
