export const NOTEPAD_PREFIX = "ih-notepad:";

export type NotepadImportPayload = {
  prompt: string;
  modelAnswer: string;
  title?: string;
  kicker?: string;
  backHref?: string;
  prevHref?: string;
  nextHref?: string;
  problemIndex?: number;
  problemTotal?: number;
  draftKey?: string;
  showAnswerInitial?: boolean;
  initialNotes?: string;
  starterCode?: string;
  language?: string;
  completeProject?: { slug: string; phaseId: string };
};

// Survives React Strict Mode remounts and client navigations in the same tab.
const memorySlots = new Map<string, NotepadImportPayload>();

function slotKey(id: string): string {
  return `${NOTEPAD_PREFIX}slot:${id}`;
}

export function slotIdFromHref(href: string): string | null {
  try {
    const url = new URL(href, "http://x");
    return url.searchParams.get("i");
  } catch {
    return null;
  }
}

export function notepadHref(): string {
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  return `/playground/write?i=${id}`;
}

export function writeNotepadEntry(payload: NotepadImportPayload, href?: string): string {
  const id = href ? (slotIdFromHref(href) ?? `${Date.now()}`) : `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  memorySlots.set(id, payload);
  if (typeof globalThis.window === "undefined") return id;
  try {
    globalThis.window.sessionStorage.setItem(slotKey(id), JSON.stringify(payload));
  } catch {
    // Ignore storage failures.
  }
  return id;
}

export function readNotepadEntry(slotId: string): NotepadImportPayload | null {
  const cached = memorySlots.get(slotId);
  if (cached) return cached;
  if (typeof globalThis.window === "undefined") return null;
  try {
    const raw = globalThis.window.sessionStorage.getItem(slotKey(slotId));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as NotepadImportPayload;
    memorySlots.set(slotId, parsed);
    return parsed;
  } catch {
    return null;
  }
}

function draftKey(id: string): string {
  return `${NOTEPAD_PREFIX}draft:${id}`;
}

export function readNotepadDraft(draftId: string): string | null {
  if (typeof globalThis.window === "undefined") return null;
  try {
    return globalThis.window.localStorage.getItem(draftKey(draftId));
  } catch {
    return null;
  }
}

export function writeNotepadDraft(draftId: string, text: string): void {
  if (typeof globalThis.window === "undefined") return;
  try {
    globalThis.window.localStorage.setItem(draftKey(draftId), text);
  } catch {
    // Ignore quota or privacy-mode failures.
  }
}
