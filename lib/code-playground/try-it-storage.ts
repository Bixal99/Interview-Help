import { readDraftSource, writeDraftSource } from "./storage";
import type { PlaygroundLanguage, PlaygroundSource } from "./types";
import { isProjectVfs } from "./project-fs";
import { isSourceFiles } from "./source";
import { withCodeFormulas } from "../format-math";

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
  observe?: string;
  completeProject?: { slug: string; phaseId: string };
  requireRunSuccess?: boolean;
  languageOptions?: TryItLanguageOption[];
  originSource?: PlaygroundSource;
  draftKey?: string;
};

// Survives React Strict Mode remounts and client navigations in the same tab.
const memorySlots = new Map<string, TryItImportPayload>();

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

function withSourceFormulas(source: PlaygroundSource): PlaygroundSource {
  if (typeof source === "string") return withCodeFormulas(source);
  if (isProjectVfs(source)) {
    const files: Record<string, string> = {};
    for (const [path, contents] of Object.entries(source.files)) files[path] = withCodeFormulas(contents);
    return { ...source, files };
  }
  if (isSourceFiles(source)) {
    return {
      html: withCodeFormulas(source.html),
      css: withCodeFormulas(source.css),
      javascript: withCodeFormulas(source.javascript),
    };
  }
  return source;
}

function formulaPayload(payload: TryItImportPayload): TryItImportPayload {
  return {
    ...payload,
    source: withSourceFormulas(payload.source),
    originSource: payload.originSource != null ? withSourceFormulas(payload.originSource) : payload.originSource,
    title: payload.title != null ? withCodeFormulas(payload.title) : payload.title,
    instructions: payload.instructions != null ? withCodeFormulas(payload.instructions) : payload.instructions,
    observe: payload.observe != null ? withCodeFormulas(payload.observe) : payload.observe,
  };
}

function normalizePayload(payload: PlaygroundSource | TryItImportPayload): TryItImportPayload {
  if (typeof payload === "string") return formulaPayload({ source: payload });
  if (payload && typeof payload === "object" && "source" in payload) return formulaPayload(payload);
  return formulaPayload({ source: payload as PlaygroundSource });
}

function fingerprintSource(source: PlaygroundSource): string {
  const raw = typeof source === "string" ? source : JSON.stringify(source);
  let hash = 0;
  for (let index = 0; index < raw.length; index += 1) {
    hash = Math.imul(hash, 31) + raw.charCodeAt(index) | 0;
  }
  return (hash >>> 0).toString(36);
}

export function blankTryItDraftKey(language: PlaygroundLanguage): string {
  return `tryit:blank:${language}`;
}

export function makeTryItDraftKey(language: PlaygroundLanguage, payload: TryItImportPayload): string {
  if (payload.draftKey) return payload.draftKey;
  const origin = payload.originSource ?? payload.source;
  if (payload.completeProject) {
    return `tryit:project:${payload.completeProject.slug}:${payload.completeProject.phaseId}:${language}`;
  }
  if (payload.problemIndex != null) {
    return `tryit:practice:${payload.backHref ?? ""}:${payload.problemIndex}:${language}`;
  }
  return `tryit:example:${language}:${payload.backHref ?? ""}:${payload.title ?? ""}:${fingerprintSource(origin)}`;
}

function sameSourceShape(origin: PlaygroundSource, saved: PlaygroundSource): boolean {
  if (isProjectVfs(origin)) return isProjectVfs(saved);
  if (typeof origin === "string") return typeof saved === "string";
  return isSourceFiles(saved) && !isProjectVfs(saved);
}

export function applyTryItDraft(language: PlaygroundLanguage, payload: TryItImportPayload): TryItImportPayload {
  const originSource = payload.originSource ?? payload.source;
  const draftKey = makeTryItDraftKey(language, { ...payload, originSource, draftKey: payload.draftKey });
  const saved = readDraftSource(draftKey);
  const source = saved && sameSourceShape(originSource, saved) ? saved : payload.source;
  return formulaPayload({
    ...payload,
    originSource,
    draftKey,
    source,
  });
}

export function persistTryItSource(
  language: PlaygroundLanguage,
  payload: TryItImportPayload,
  source: PlaygroundSource,
  href?: string,
): TryItImportPayload {
  const draftKey = makeTryItDraftKey(language, payload);
  const next: TryItImportPayload = {
    ...payload,
    originSource: payload.originSource ?? payload.source,
    draftKey,
    source,
  };
  writeDraftSource(draftKey, source);
  if (href) writeTryItCode(language, next, href);
  return next;
}

export function writeTryItCode(
  language: PlaygroundLanguage,
  payload: PlaygroundSource | TryItImportPayload,
  href?: string,
): string {
  const normalized = normalizePayload(payload);
  const id = href ? (slotIdFromHref(href) ?? `${Date.now()}`) : `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  memorySlots.set(id, normalized);
  if (typeof globalThis.window === "undefined") return id;
  try {
    globalThis.window.sessionStorage.setItem(slotKey(id), JSON.stringify(normalized));
  } catch {
    // Ignore storage failures.
  }
  return id;
}

export function readTryItCode(slotId: string): TryItImportPayload | null {
  const cached = memorySlots.get(slotId);
  if (cached) return formulaPayload(cached);
  if (typeof globalThis.window === "undefined") return null;
  try {
    const raw = globalThis.window.sessionStorage.getItem(slotKey(slotId));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as TryItImportPayload | PlaygroundSource;
    const payload =
      typeof parsed === "string"
        ? { source: parsed }
        : parsed && typeof parsed === "object" && "source" in parsed
          ? (parsed as TryItImportPayload)
          : { source: parsed as PlaygroundSource };
    memorySlots.set(slotId, formulaPayload(payload));
    return formulaPayload(payload);
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
