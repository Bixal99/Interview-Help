import { enrichResource } from "./normalize";
import type { LearningResource } from "./types";

// Bullet lines must have whitespace after the marker so bold headings like
// `**WHAT THIS UNLOCKS NEXT:**` (which start with a bare `*`) are never
// mistaken for list items and swallowed into the resource block.
const RESOURCE_BLOCK = /\*\*(?:SEE IT BEFORE YOU MEMORIZE IT|LEARNING RESOURCES:?)\*\*[^\n]*\n+(?:(?:[ \t]*[-*]\s+.+\n+)|(?:\|.+\n+))*/i;

export function extractSeeItResources(markdown: string): LearningResource[] {
  const source = markdown.replace(/\r\n/g, "\n");
  const match = source.match(RESOURCE_BLOCK);
  if (!match) return [];
  return parseResourceBlock(match[0]);
}

export function stripSeeItBlock(markdown: string): string {
  const source = markdown.replace(/\r\n/g, "\n");
  return source.replace(RESOURCE_BLOCK, "\n\n");
}

function parseResourceBlock(block: string): LearningResource[] {
  const resources: LearningResource[] = [];
  if (/^\|\s*Resource\s*\|/im.test(block)) {
    resources.push(...parseResourceTable(block));
    if (resources.length) return resources;
  }
  for (const line of block.split("\n")) {
    const labeled = /^\s*[-*]\s+([^:]+):\s+\[([^\]]+)\]\(([^)]+)\)(?:\s*[-–—:]\s*(.+))?/.exec(line);
    if (labeled) {
      resources.push(enrichResource({
        kind: labeled[1].trim(),
        title: labeled[2].trim(),
        href: labeled[3].trim(),
        note: tidyNote(labeled[4]),
      }));
      continue;
    }
    const plain = /^\s*[-*]\s+\[([^\]]+)\]\(([^)]+)\)(?:\s*[-–—:]\s*(.+))?/.exec(line);
    if (plain) {
      resources.push(enrichResource({
        kind: inferKindFromUrl(plain[2]),
        title: plain[1].trim(),
        href: plain[2].trim(),
        note: tidyNote(plain[3]),
      }));
      continue;
    }
    const multi = /^\s*[-*]\s+\[([^\]]+)\]\(([^)]+)\)(?:;\s*[^:]+:\s*\[([^\]]+)\]\(([^)]+)\))?/.exec(line);
    if (multi && multi[3] && multi[4]) {
      resources.push(enrichResource({ kind: inferKindFromUrl(multi[2]), title: multi[1].trim(), href: multi[2].trim() }));
      resources.push(enrichResource({ kind: inferKindFromUrl(multi[4]), title: multi[3].trim(), href: multi[4].trim() }));
    }
  }
  return resources;
}

function parseResourceTable(block: string): LearningResource[] {
  const resources: LearningResource[] = [];
  for (const line of block.split("\n")) {
    if (!/^\|/.test(line) || /^\|\s*-/.test(line) || /^\|\s*Resource\s*\|/i.test(line)) continue;
    const cells = line.split("|").slice(1, -1).map((cell) => cell.trim());
    if (cells.length < 2) continue;
    const link = /\[([^\]]+)\]\(([^)]+)\)/.exec(cells[0]);
    if (!link) continue;
    const kind = cells[1] ?? "Reference";
    const note = tidyNote(cells[3] ?? cells[2]);
    resources.push(enrichResource({ kind, title: link[1].trim(), href: link[2].trim(), note }));
  }
  return resources;
}

function inferKindFromUrl(url: string): string {
  if (/youtube\.com|youtu\.be/i.test(url)) return "Video";
  if (/github\.com/i.test(url)) return "GitHub";
  if (/visualgo|pythontutor|regex101|sqlfiddle|godbolt|compiler explorer/i.test(url)) return "Interactive";
  if (/developer\.mozilla|docs\.|documentation|w3\.org|ietf\.org|rfc/i.test(url)) return "Documentation";
  return "Reference";
}

function tidyNote(note?: string) {
  if (!note) return undefined;
  const cleaned = note.replace(/^[:\s-]+/, "").replace(/\s{2,}/g, " ").trim();
  if (!cleaned) return undefined;
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

/** Extract inline resource bullets common in CS.md (Video:, Series:, etc.) */
export function extractInlineResourceBullets(markdown: string): LearningResource[] {
  const resources: LearningResource[] = [];
  const patterns = [
    /^\s*[-*]\s+(?:Best animated explanation|Alternative|Another angle|Video|Series|Quick survey|Written documentation|Interactive simulator|GitHub implementation|Practice platform|Reference|Documentation|Tutorial|Interactive|GitHub|Tool|Course):\s+\[([^\]]+)\]\(([^)]+)\)(?:\s*[-–—:]\s*(.+))?/gim,
    /^\s*[-*]\s+\[([^\]]+)\]\((https?:\/\/[^)]+)\)(?:\s*[-–—:]\s*(.+))?/gim,
  ];
  for (const pattern of patterns) {
    for (const match of markdown.matchAll(pattern)) {
      const title = match[1]?.trim();
      const href = match[2]?.trim();
      const note = match[3]?.trim();
      if (!title || !href || !/^https?:\/\//i.test(href)) continue;
      if (resources.some((r) => r.url === href)) continue;
      const kind = pattern.source.includes("Best animated") ? "Video" : "Reference";
      resources.push(enrichResource({ kind, title, href, note: tidyNote(note) }));
    }
  }
  return resources.slice(0, 6);
}
