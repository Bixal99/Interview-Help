export type WhatComesNext = { topic?: string; body: string };

/** Labels that author a narrative handoff (extracted → rendered after Practice). */
const HANDOFF_LABEL =
  String.raw`(?:WHAT THIS UNLOCKS NEXT|WHAT COMES NEXT|WHY THE NEXT TOPIC IS NEEDED(?:\s*[-–—]\s*([^:*]+))?)`;

/**
 * Pull the forward-handoff block out of lesson Markdown so the lesson page can
 * render it *after* Practice (Practice → handoff → navigation).
 *
 * Canonical authoring labels (course-agnostic):
 * - `**WHAT THIS UNLOCKS NEXT:**`
 * - `**WHAT COMES NEXT:**`
 * - `**WHY THE NEXT TOPIC IS NEEDED:**` (legacy)
 *
 * Body must be contextual narrative — not identical boilerplate every lesson.
 */
export function extractWhatComesNext(markdown: string): { markdown: string; whatComesNext: WhatComesNext | null } {
  const source = markdown.replace(/\r\n/g, "\n");
  const match = source.match(
    new RegExp(
      String.raw`\n\*\*${HANDOFF_LABEL}:\*\*\s*([\s\S]*?)(?=\n\n(?:---|\*\*|>)|\n---\s*$|$)`,
      "i",
    ),
  );
  if (!match) return { markdown: source, whatComesNext: null };
  const topic = match[1]?.trim();
  const body = (match[2] ?? "").trim();
  if (!body) return { markdown: source, whatComesNext: null };
  return {
    markdown: source.replace(match[0], "\n\n").replace(/\n---\s*$/g, "").replace(/\n{3,}/g, "\n\n").trim(),
    whatComesNext: { topic: topic || undefined, body },
  };
}

export function extractProjectNav(markdown: string): string {
  return markdown
    .replace(/^>\s*\*\*PROJECT NAVIGATION:\*\*\s*.+$/gim, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function phaseReviewLabel(phase: { title: string; track?: string }) {
  return phase.track?.trim() || phase.title;
}

export function projectReviewLabel(phase: { title: string; track?: string }) {
  return `Review ${phaseReviewLabel(phase)}`;
}

export function projectProceedLabel(nextPhaseTitle: string) {
  return `Proceed to ${nextPhaseTitle}`;
}
