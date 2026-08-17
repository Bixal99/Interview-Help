export const PROGRESS_KEY = "interview-help-progress-v1";

export function parseProgress(raw: string | null): string[] {
  if (!raw) return [];
  try {
    const value: unknown = JSON.parse(raw);
    return Array.isArray(value) ? [...new Set(value.filter((item): item is string => typeof item === "string"))] : [];
  } catch { return []; }
}

export function toggleProgress(items: string[], id: string): string[] {
  return items.includes(id) ? items.filter((item) => item !== id) : [...items, id];
}
