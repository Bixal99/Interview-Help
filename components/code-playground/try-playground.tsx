"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createTryItExercise } from "@/lib/code-playground/sandbox";
import { createEmptyWebSource, sourceForLanguage } from "@/lib/code-playground/source";
import { readTryItCode, writeTryItCode, tryPlaygroundHref } from "@/lib/code-playground/try-it-storage";
import type { TryItImportPayload } from "@/lib/code-playground/try-it-storage";
import type { PlaygroundLanguage, PlaygroundSource } from "@/lib/code-playground/types";
import { CodePlayground } from "./code-playground";

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

  const [imported, setImported] = useState<TryItImportPayload | null>(() =>
    importId ? readTryItCode(importId) : null,
  );
  const [source, setSource] = useState<PlaygroundSource>(() =>
    sourceFromImport(language, importId ? readTryItCode(importId) : null),
  );

  useEffect(() => {
    if (!importId) {
      setImported(null);
      setSource(emptySource(language));
      return;
    }
    const payload = readTryItCode(importId);
    if (!payload) return;
    setImported(payload);
    setSource(sourceFromImport(language, payload));
  }, [language, importId]);

  const starter = sourceFromImport(language, imported);
  const isLessonImport = Boolean(imported);
  const problemText = imported?.instructions ?? imported?.title ?? "";
  const exercise = createTryItExercise(language, starter, {
    title: imported?.title ?? "Try it Yourself",
    instructions: problemText,
  });

  const backHref = imported?.prevHref ?? imported?.backHref ?? null;
  const nextHref = imported?.nextHref ?? null;
  const langOptions = imported?.languageOptions ?? null;

  function switchLanguage(targetLang: PlaygroundLanguage, targetSource: PlaygroundSource) {
    if (!imported) return;
    const href = tryPlaygroundHref(targetLang);
    writeTryItCode(targetLang, { ...imported, source: targetSource }, href);
    router.push(href);
  }

  return (
    <div className="ih-try-playground-wrap">
      {isLessonImport ? (
        <div className="ih-try-header">
          <p className="ih-try-problem-label">
            {imported?.problemIndex != null && imported?.problemTotal != null
              ? `Exercise Problem ${imported.problemIndex} of ${imported.problemTotal}`
              : "Exercise Problem"}
          </p>
          {problemText ? <p className="ih-try-problem-copy">{problemText}</p> : null}
          {imported?.observe ? <p className="ih-try-observe">{imported.observe}</p> : null}
          {langOptions && langOptions.length > 1 ? (
            <div className="ih-try-lang-tabs">
              {langOptions.map((opt) => (
                <button
                  key={opt.language}
                  type="button"
                  className={`ih-try-lang-tab${opt.language === language ? " is-active" : ""}`}
                  onClick={() => opt.language !== language && switchLanguage(opt.language, opt.source)}
                >
                  {opt.label ?? opt.language.toUpperCase()}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
      <CodePlayground
        exercise={exercise}
        mode="tryit"
        tryItSource={source}
        onTryItSourceChange={setSource}
        fullPage
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
          ) : imported?.backHref ? (
            <Link href={imported.backHref} className="ih-pager-btn ih-pager-start">
              <span className="ih-pager-label">Done »</span>
            </Link>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
