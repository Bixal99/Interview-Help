export type PracticeItem = { id: string; label: string; difficulty?: string };
export type PracticeBlock = {
  kind: "choice" | "checklist";
  prompt: string;
  items: PracticeItem[];
  raw: string;
};

export function extractPractice(markdown: string): PracticeBlock | null {
  const heading = /\*\*PRACTICE[^*]*\*\*/i.exec(markdown);
  if (!heading || heading.index === undefined) return null;
  const start = heading.index;
  const rest = markdown.slice(start);
  const endRel = rest.search(
    /\n\*\*(?:WHAT THIS UNLOCKS NEXT|WHAT COMES NEXT|WHY THE NEXT TOPIC)|\n---\s*\n|\n> \*\*Phase /i,
  );
  const raw = rest.slice(0, endRel < 0 ? rest.length : endRel).trim();
  const choices = [...raw.matchAll(/^\s*(?:[-*]\s*)?([A-D])[).]\s+(.+)$/gm)].map((match, index) => ({
    id: match[1].toLowerCase(),
    label: match[2].trim(),
    difficulty: String.fromCharCode(65 + index),
  }));
  if (choices.length >= 2) {
    return { kind: "choice", prompt: heading[0].replace(/\*/g, "").trim(), items: choices, raw };
  }
  const rows = [...raw.matchAll(/^\|\s*(Easy|Medium|Hard)\s*\|\s*(.+?)\s*\|/gim)].map((match, index) => ({
    id: `task-${index + 1}`,
    label: match[2].replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/`/g, "").trim(),
    difficulty: match[1],
  }));
  const bullets = [...raw.matchAll(/^\s*[-*]\s+(.+)$/gm)].map((match, index) => ({
    id: `item-${index + 1}`,
    label: match[1].trim(),
  }));
  const items = rows.length ? rows : bullets;
  if (!items.length) {
    const text = raw.replace(/\*\*[^*]+\*\*/g, "").replace(/\|/g, " ").replace(/\s+/g, " ").trim();
    if (!text) return null;
    return { kind: "checklist", prompt: heading[0].replace(/\*/g, "").trim(), items: [{ id: "practice", label: text.slice(0, 280) }], raw };
  }
  return { kind: "checklist", prompt: heading[0].replace(/\*/g, "").trim(), items, raw };
}

export function withoutPractice(markdown: string, practice: PracticeBlock | null) {
  const stripped = practice ? markdown.replace(practice.raw, "").replace(/\n{3,}/g, "\n\n").trim() : markdown;
  return stripped.replace(/^#{1,3}\s+[^\n]+\n+/, "").trim();
}
