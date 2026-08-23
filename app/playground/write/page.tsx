import type { Metadata } from "next";
import { Suspense } from "react";
import { NotepadPlayground } from "@/components/code-playground/notepad-playground";

export const metadata: Metadata = {
  title: "Practice Yourself",
  description: "Write your answer to a practice exercise.",
};

export default function NotepadPage() {
  return (
    <main id="main-content" className="ih-playground-page ih-playground-page-tryit px-4 py-3 sm:px-6">
      <Suspense fallback={<div className="ih-playground ih-playground-loading">Loading practice…</div>}>
        <NotepadPlayground />
      </Suspense>
    </main>
  );
}
