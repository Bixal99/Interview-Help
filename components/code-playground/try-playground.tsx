"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createTryItExercise } from "@/lib/code-playground/sandbox";
import { defaultTryExample } from "@/lib/code-playground/try-examples";
import { sourceForLanguage } from "@/lib/code-playground/source";
import { readTryItCode, writeTryItCode, clearTryItCode, tryPlaygroundHref } from "@/lib/code-playground/try-it-storage";
import type { TryItImportPayload } from "@/lib/code-playground/try-it-storage";
import type { PlaygroundLanguage, PlaygroundSource } from "@/lib/code-playground/types";
import { CodePlayground } from "./code-playground";

function sourceFromImport(
  language: PlaygroundLanguage,
  imported: TryItImportPayload | null,
  fallback: PlaygroundSource,
): PlaygroundSource {
  if (!imported) return fallback;
  return typeof imported.source === "string" ? sourceForLanguage(language, imported.source) : imported.source;
}

export function TryPlayground({ language }: { language: PlaygroundLanguage }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const importId = searchParams.get("i");
  const fallback = defaultTryExample(language);

  const [imported, setImported] = useState<TryItImportPayload | null>(() => {
    if (!importId) return null;
    const payload = readTryItCode(importId);
    if (payload) clearTryItCode(importId);
    return payload;
  });
  const [source, setSource] = useState<PlaygroundSource>(() =>
    sourceFromImport(language, imported, fallback.source),
  );

  useEffect(() => {
    const fallbackSource = defaultTryExample(language).source;
    if (!importId) {
      setImported(null);
      setSource(fallbackSource);
      return;
    }
    const fresh = readTryItCode(importId);
    if (fresh) clearTryItCode(importId);
    const payload = fresh ?? null;
    setImported(payload);
    setSource(sourceFromImport(language, payload, fallbackSource));
  }, [language, importId]);

  const starter = sourceFromImport(language, imported, fallback.source);
  const isLessonImport = Boolean(imported);
  const problemText = imported?.instructions ?? imported?.title ?? `${fallback.title}. ${fallback.hint}`;
  const exercise = createTryItExercise(language, starter, {
    title: imported?.title ?? fallback.title,
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
      <div className="ih-try-header">
        <p className="ih-try-problem-label">
          {imported?.problemIndex != null && imported?.problemTotal != null
            ? `Exercise Problem ${imported.problemIndex} of ${imported.problemTotal}`
            : "Exercise Problem"}
        </p>
        <p className="ih-try-problem-copy">{problemText}</p>
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
            <Link href={backHref} className="btn-prev">← Back</Link>
          ) : <span />}
          {nextHref ? (
            <button type="button" className="btn-next" onClick={() => router.push(nextHref)}>
              Next »
            </button>
          ) : imported?.backHref ? (
            <Link href={imported.backHref} className="btn-next">
              Done »
            </Link>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
