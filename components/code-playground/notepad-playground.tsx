"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  readNotepadDraft,
  readNotepadEntry,
  writeNotepadDraft,
  type NotepadImportPayload,
} from "@/lib/code-playground/notepad-storage";
import { MarkdownDocument } from "@/components/markdown-document";
import { CodePlayground } from "./code-playground";
import { PlaygroundLead } from "./playground-lead";
import type { CodeExercise } from "@/lib/code-playground/exercises";

export function NotepadPlayground() {
  const searchParams = useSearchParams();
  const importId = searchParams.get("i");

  const [entry, setEntry] = useState<NotepadImportPayload | null>(null);
  const [text, setText] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [loadedId, setLoadedId] = useState<string | null>(null);
  const [showTerminal, setShowTerminal] = useState(true);

  useEffect(() => {
    if (!importId) {
      setEntry(null);
      setLoadedId(null);
      return;
    }
    const payload = readNotepadEntry(importId);
    setEntry(payload);
    setText(payload ? readNotepadDraft(importId) ?? payload.initialNotes ?? "" : "");
    setShowAnswer(Boolean(payload?.showAnswerInitial));
    setLoadedId(importId);
  }, [importId]);

  useEffect(() => {
    document.title = entry?.title || "Practice Yourself";
  }, [entry?.title]);

  const waiting = Boolean(importId) && loadedId !== importId;

  function persistText(next: string) {
    setText(next);
    if (importId) writeNotepadDraft(importId, next);
  }

  const kicker = entry?.kicker
    ? entry.kicker
    : entry?.problemIndex != null && entry?.problemTotal != null
    ? `Practice Yourself · ${entry.problemIndex} of ${entry.problemTotal}`
    : entry?.title
    ? "Written Exercise & Implementation"
    : "Practice Yourself";

  const hasCode = Boolean(entry?.starterCode);
  const language = (entry?.language || "python") as any;
  const initialCode = entry?.starterCode || `# Python & Interactive Code Terminal\n# Run your calculations, tests, or code logic below:\nprint("Workspace ready.")\n`;

  const exercise: CodeExercise = {
    id: entry?.title || "hybrid-notepad-runner",
    title: entry?.title || "Code Terminal & Execution",
    language,
    starterCode: initialCode,
    instructions: "Write, test, and execute your code or commands below.",
    solution: entry?.starterCode || "",
  };

  return (
    <div className="ih-try-playground-wrap">
      {waiting || !entry ? (
        <div className="ih-playground ih-playground-loading">Loading practice…</div>
      ) : (
        <div className="ih-notepad">
          <PlaygroundLead kicker={kicker} title={entry.title || "Written exercise & workspace"} goal={entry.prompt} />
          
          <div className="ih-notepad-body">
            {entry.modelAnswer ? (
              <div className="ih-notepad-panel ih-notepad-solution-panel">
                <div className="ih-playground-panel-head">
                  <span>Complete Solution & Architecture Walkthrough</span>
                </div>
                <div className="ih-notepad-solution-body">
                  <MarkdownDocument markdown={entry.modelAnswer} sourcePath="" />
                </div>
              </div>
            ) : null}

            <div className="ih-notepad-panel ih-notepad-notes-panel">
              <div className="ih-playground-panel-head flex items-center justify-between">
                <span>Your Notes & Implementation (Auto-saved)</span>
              </div>
              <textarea
                className="ih-notepad-textarea"
                value={text}
                onChange={(event) => persistText(event.target.value)}
                placeholder="Write your notes, observations, or solution drafts here. Everything is auto-saved as you type."
                spellCheck
              />
            </div>
          </div>

          {/* Integrated Interactive Code Playground / Terminal Below */}
          <div className="mt-8 border-t border-[var(--ih-border)] pt-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--ih-muted)]">
                  Task 2 · Interactive Code Terminal & Compiler ({language.toUpperCase()})
                </span>
              </div>
              <button
                type="button"
                className="text-xs font-semibold text-[var(--ih-primary)] underline hover:no-underline"
                onClick={() => setShowTerminal((prev) => !prev)}
              >
                {showTerminal ? "Hide Code Terminal" : "Show Code Terminal"}
              </button>
            </div>

            {showTerminal && (
              <div className="rounded-lg border border-[var(--ih-border)] bg-[var(--ih-surface)] p-2 shadow-sm">
                <CodePlayground
                  exercise={exercise}
                  mode="inline"
                  fullPage={false}
                />
              </div>
            )}
          </div>

          <div className="ih-try-footer">
            {entry.prevHref ? (
              <Link href={entry.prevHref} className="ih-pager-btn ih-pager-back">
                <span className="ih-pager-label">« Back</span>
              </Link>
            ) : entry.backHref ? (
              <Link href={entry.backHref} className="ih-pager-btn ih-pager-back">
                <span className="ih-pager-label">« Back</span>
              </Link>
            ) : <span />}
            {entry.nextHref ? (
              <Link href={entry.nextHref} className="ih-pager-btn ih-pager-start">
                <span className="ih-pager-label">Next »</span>
              </Link>
            ) : entry.backHref ? (
              <Link href={entry.backHref} className="ih-pager-btn ih-pager-start">
                <span className="ih-pager-label">Done »</span>
              </Link>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
