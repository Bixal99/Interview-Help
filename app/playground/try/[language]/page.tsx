import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { TryPlayground } from "@/components/code-playground/try-playground";
import { isSupportedLanguage } from "@/lib/code-playground/runners";
import type { PlaygroundLanguage } from "@/lib/code-playground/types";

export function generateStaticParams() {
  return [
    { language: "python" satisfies PlaygroundLanguage },
    { language: "javascript" satisfies PlaygroundLanguage },
    { language: "html" satisfies PlaygroundLanguage },
    { language: "css" satisfies PlaygroundLanguage },
    { language: "web" satisfies PlaygroundLanguage },
    { language: "c" satisfies PlaygroundLanguage },
    { language: "cpp" satisfies PlaygroundLanguage },
  ];
}

export const metadata: Metadata = {
  title: "Try it Yourself",
  description: "Run example code in your browser.",
};

export default async function TryPlaygroundPage({ params }: { params: Promise<{ language: string }> }) {
  const { language } = await params;
  if (!isSupportedLanguage(language)) notFound();
  return (
    <main id="main-content" className="ih-playground-page ih-playground-page-tryit px-4 py-3 sm:px-6">
      <Suspense fallback={<div className="ih-playground ih-playground-loading">Loading playground…</div>}>
        <TryPlayground language={language} />
      </Suspense>
    </main>
  );
}
