export type WhatComesNext = { topic?: string; body: string };

export function extractWhatComesNext(markdown: string): { markdown: string; whatComesNext: WhatComesNext | null } {
  const source = markdown.replace(/\r\n/g, "\n");
  const match = source.match(
    /\n\*\*WHY THE NEXT TOPIC IS NEEDED(?:\s*[-–—]\s*([^:*]+))?:\*\*\s*([\s\S]*?)(?=\n\n(?:---|\*\*|>)|\n---\s*$|$)/i,
  );
  if (!match) return { markdown: source, whatComesNext: null };
  const body = match[2].trim();
  if (!body) return { markdown: source, whatComesNext: null };
  return {
    markdown: source.replace(match[0], "\n\n").replace(/\n{3,}/g, "\n\n").trim(),
    whatComesNext: { topic: match[1]?.trim(), body },
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
