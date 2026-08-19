import type { PlaygroundLanguage, PlaygroundSource } from "./types";

export const TRY_IT_PREFIX = "ih-code-try:";
export const TRY_IT_EVENT = "ih-try-it-import";

export type TryItLanguageOption = {
  language: PlaygroundLanguage;
  source: PlaygroundSource;
  label?: string;
};

export type TryItImportPayload = {
  source: PlaygroundSource;
  title?: string;
  instructions?: string;
  backHref?: string;
  prevHref?: string;
  nextHref?: string;
  problemIndex?: number;
  problemTotal?: number;
  /** All language variants for this problem (present when > 1 language available) */
  languageOptions?: TryItLanguageOption[];
};

// Each write gets a unique slot key so concurrent problems don't overwrite each other.
function slotKey(id: string): string {
  return `${TRY_IT_PREFIX}slot:${id}`;
}

// Extract the slot id from a tryPlaygroundHref.
export function slotIdFromHref(href: string): string | null {
  try {
    const u = new URL(href, "http://x");
    return u.searchParams.get("i");
  } catch {
    return null;
  }
}

export function tryPlaygroundHref(language: PlaygroundLanguage): string {
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  return `/playground/try/${language}?i=${id}`;
}

function normalizePayload(payload: PlaygroundSource | TryItImportPayload): TryItImportPayload {
  if (typeof payload === "string") return { source: payload };
  if (payload && typeof payload === "object" && "source" in payload) return payload;
  return { source: payload as PlaygroundSource };
}

export function writeTryItCode(
  language: PlaygroundLanguage,
  payload: PlaygroundSource | TryItImportPayload,
  href?: string,
): string {
  const normalized = normalizePayload(payload);
  const id = href ? (slotIdFromHref(href) ?? `${Date.now()}`) : `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  if (typeof globalThis.window === "undefined") return id;
  try {
    globalThis.window.sessionStorage.setItem(slotKey(id), JSON.stringify(normalized));
  } catch {
    // Ignore storage failures.
  }
  return id;
}

export function readTryItCode(slotId: string): TryItImportPayload | null {
  if (typeof globalThis.window === "undefined") return null;
  try {
    const raw = globalThis.window.sessionStorage.getItem(slotKey(slotId));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as TryItImportPayload | PlaygroundSource;
    if (typeof parsed === "string") return { source: parsed };
    if (parsed && typeof parsed === "object" && "source" in parsed) return parsed as TryItImportPayload;
    return { source: parsed as PlaygroundSource };
  } catch {
    return null;
  }
}

export function clearTryItCode(slotId: string): void {
  if (typeof globalThis.window === "undefined") return;
  try {
    globalThis.window.sessionStorage.removeItem(slotKey(slotId));
  } catch {
    // Ignore storage failures.
  }
}

export function toPlaygroundLanguage(language: string): PlaygroundLanguage | null {
  const raw = language.toLowerCase();
  const lang = raw === "py" ? "python" : raw === "js" ? "javascript" : raw === "c++" ? "cpp" : raw;
  return ["python", "javascript", "html", "css", "web", "c", "cpp"].includes(lang)
    ? (lang as PlaygroundLanguage)
    : null;
}
