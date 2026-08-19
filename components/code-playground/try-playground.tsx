"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createTryItExercise } from "@/lib/code-playground/sandbox";
import { createEmptyWebSource, sourceForLanguage } from "@/lib/code-playground/source";
import {
  applyTryItDraft,
  blankTryItDraftKey,
  persistTryItSource,
  readTryItCode,
  writeTryItCode,
  tryPlaygroundHref,
} from "@/lib/code-playground/try-it-storage";
import type { TryItImportPayload } from "@/lib/code-playground/try-it-storage";
import { readDraftSource, writeDraftSource } from "@/lib/code-playground/storage";
import type { PlaygroundLanguage, PlaygroundSource } from "@/lib/code-playground/types";
import { useLearningProgress } from "@/components/progress-client";
import { plainFormula } from "@/lib/format-math";
import { CodePlayground } from "./code-playground";
import { PlaygroundLanguageIcon } from "./language-mark";
import { PlaygroundLead } from "./playground-lead";

function emptySource(language: PlaygroundLanguage): PlaygroundSource {
  return language === "html" || language === "css" || language === "web"
    ? createEmptyWebSource()
    : "";
}

function sourceFromImport(
  language: PlaygroundLanguage,
  imported: TryItImportPayload | null,
): PlaygroundSource {
  if (!imported) return emptySource(language);
  return typeof imported.source === "string" ? sourceForLanguage(language, imported.source) : imported.source;
}

export function TryPlayground({ language }: { language: PlaygroundLanguage }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const importId = searchParams.get("i");
  const { projectDone, toggleProject } = useLearningProgress();

  // Always start empty so SSR HTML matches the first client paint.
  const [imported, setImported] = useState<TryItImportPayload | null>(null);
  const [source, setSource] = useState<PlaygroundSource>(() => emptySource(language));
  const [loadedId, setLoadedId] = useState<string | null>(null);

  useEffect(() => {
    if (!importId) {
      const saved = readDraftSource(blankTryItDraftKey(language));
      setImported(null);
      setSource(saved ?? emptySource(language));
      setLoadedId(null);
      return;
    }
    const payload = readTryItCode(importId);
    const applied = payload ? applyTryItDraft(language, payload) : null;
    setImported(applied);
    if (applied) {
      setSource(sourceFromImport(language, applied));
      writeTryItCode(language, applied, `/playground/try/${language}?i=${importId}`);
    }
    setLoadedId(importId);
  }, [language, importId]);

  const waiting = Boolean(importId) && loadedId !== importId;
  const origin = sourceFromImport(language, imported ? { ...imported, source: imported.originSource ?? imported.source } : null);
  const isLessonImport = Boolean(imported);
  const problemText = imported?.instructions ?? imported?.title ?? "";
  const exercise = createTryItExercise(language, origin, {
    title: imported?.title ?? "Try it Yourself",
    instructions: problemText,
  });

  const backHref = imported?.prevHref ?? imported?.backHref ?? null;
  const nextHref = imported?.nextHref ?? null;
  const langOptions = imported?.languageOptions ?? null;
  const showDone = Boolean(imported?.backHref) && !nextHref;
  const isProject = Boolean(imported?.completeProject);
  const isPractice = imported?.problemIndex != null;
  const kicker = isProject
    ? "Start Building"
    : isPractice && imported?.problemIndex != null && imported?.problemTotal != null
      ? `Practice Yourself · ${imported.problemIndex} of ${imported.problemTotal}`
      : isPractice
        ? "Practice Yourself"
        : "Try it Yourself";
  const importedTitle = imported?.title?.trim() || "";
  const instructions = imported?.instructions?.trim() || "";
  const genericTitles = /^(working example|start building|try it yourself|practice yourself|your code)$/i;
  const heading = genericTitles.test(importedTitle)
    ? (isLessonImport ? "Working example" : "Your code")
    : (importedTitle || (isLessonImport ? "Working example" : "Your code"));
  const primaryGoal = imported?.observe
    || (instructions && instructions !== heading ? instructions : "")
    || (isLessonImport ? "Run this example from the lesson." : "Write code and run it.");
  const extra = imported?.observe && imported.observe !== primaryGoal ? imported.observe : null;

  useEffect(() => {
    const label = isProject
      ? (importedTitle || heading || "Start Building")
      : isPractice
        ? "Practice Yourself"
        : heading && !genericTitles.test(heading)
          ? heading
          : "Try it Yourself";
    document.title = `${plainFormula(label)} · Quarry`;
  }, [heading, importedTitle, isPractice, isProject]);

  function persistSource(next: PlaygroundSource) {
    setSource(next);
    if (!imported || !importId) {
      writeDraftSource(blankTryItDraftKey(language), next);
      return;
    }
    const updated = persistTryItSource(
      language,
      imported,
      next,
      `/playground/try/${language}?i=${importId}`,
    );
    setImported(updated);
  }

  function switchLanguage(targetLang: PlaygroundLanguage, targetSource: PlaygroundSource) {
    if (!imported) return;
    persistSource(source);
    const href = tryPlaygroundHref(targetLang);
    const nextPayload = applyTryItDraft(targetLang, {
      ...imported,
      source: targetSource,
      originSource: targetSource,
      draftKey: undefined,
    });
    writeTryItCode(targetLang, nextPayload, href);
    router.push(href);
  }

  function finishBuild() {
    const target = imported?.completeProject;
    if (target && !projectDone(target.slug, target.phaseId)) {
      toggleProject(target.slug, target.phaseId);
    }
    router.push(imported?.backHref ?? "/");
  }

  return (
    <div className="ih-try-playground-wrap">
      {waiting ? (
        <div className="ih-playground ih-playground-loading">Loading playground…</div>
      ) : (
        <>
          <CodePlayground
            exercise={exercise}
            mode="tryit"
            tryItSource={source}
            onTryItSourceChange={persistSource}
            fullPage
            lead={(
              <PlaygroundLead kicker={kicker} title={heading} goal={primaryGoal || null} extra={extra}>
                {langOptions && langOptions.length > 1 ? (
                  <div className="ih-try-lang-tabs" role="tablist" aria-label="Language">
                    {langOptions.map((opt) => (
                      <button
                        key={opt.language}
                        type="button"
                        role="tab"
                        aria-selected={opt.language === language}
                        className={`ih-try-lang-tab${opt.language === language ? " is-active" : ""}`}
                        onClick={() => opt.language !== language && switchLanguage(opt.language, opt.source)}
                      >
                        <PlaygroundLanguageIcon language={opt.language} />
                        {opt.label ?? opt.language.toUpperCase()}
                      </button>
                    ))}
                  </div>
                ) : null}
              </PlaygroundLead>
            )}
          />
          {isLessonImport ? (
            <div className="ih-try-footer">
              {backHref ? (
                <Link href={backHref} className="ih-pager-btn ih-pager-back">
                  <span className="ih-pager-label">« Back</span>
                </Link>
              ) : <span />}
              {nextHref ? (
                <Link href={nextHref} className="ih-pager-btn ih-pager-start">
                  <span className="ih-pager-label">Next »</span>
                </Link>
              ) : showDone ? (
                <button type="button" className="ih-pager-btn ih-pager-start" onClick={finishBuild}>
                  <span className="ih-pager-label">Done »</span>
                </button>
              ) : null}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
