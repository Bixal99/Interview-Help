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
import { PlaygroundLead } from "./playground-lead";

export function NotepadPlayground() {
  const searchParams = useSearchParams();
  const importId = searchParams.get("i");

  const [entry, setEntry] = useState<NotepadImportPayload | null>(null);
  const [text, setText] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [loadedId, setLoadedId] = useState<string | null>(null);

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
    ? "Written Exercise"
    : "Practice Yourself";

  return (
    <div className="ih-try-playground-wrap">
      {waiting || !entry ? (
        <div className="ih-playground ih-playground-loading">Loading practice…</div>
      ) : (
        <div className="ih-notepad">
          <PlaygroundLead kicker={kicker} title={entry.title || "Written exercise"} goal={entry.prompt} />
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
              <div className="ih-playground-panel-head">
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
