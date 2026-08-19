import { deserializeSource, serializeSource } from "./source";
import type { PlaygroundSource } from "./types";

export const CODE_DRAFT_PREFIX = "ih-code-draft:";

export function draftStorageKey(exerciseId: string): string {
  return `${CODE_DRAFT_PREFIX}${exerciseId}`;
}

function localStorageRef(): Storage | null {
  if (typeof globalThis.window === "undefined") return null;
  try {
    return globalThis.window.localStorage;
  } catch {
    return null;
  }
}

export function readDraft(exerciseId: string): string | null {
  const storage = localStorageRef();
  if (!storage) return null;
  try {
    return storage.getItem(draftStorageKey(exerciseId));
  } catch {
    return null;
  }
}

export function readDraftSource(exerciseId: string): PlaygroundSource | null {
  const draft = readDraft(exerciseId);
  return draft == null ? null : deserializeSource(draft);
}

export function writeDraft(exerciseId: string, code: string): void {
  const storage = localStorageRef();
  if (!storage) return;
  try {
    storage.setItem(draftStorageKey(exerciseId), code);
  } catch {
    // Ignore quota or privacy-mode failures.
  }
}

export function writeDraftSource(exerciseId: string, source: PlaygroundSource): void {
  writeDraft(exerciseId, serializeSource(source));
}

export function clearDraft(exerciseId: string): void {
  const storage = localStorageRef();
  if (!storage) return;
  try {
    storage.removeItem(draftStorageKey(exerciseId));
  } catch {
    // Ignore storage failures.
  }
}
