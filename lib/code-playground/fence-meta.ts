export type FenceInfo = {
  language: string;
  meta?: string;
  playgroundId?: string;
};

export function parseFenceInfo(info: string): FenceInfo {
  const trimmed = info.trim();
  if (!trimmed) return { language: "text" };
  const [language, ...rest] = trimmed.split(/\s+/);
  const meta = rest.join(" ").trim();
  const playgroundMatch = /(?:^|\s)playground=([\w-]+)/.exec(meta);
  return {
    language: language.toLowerCase(),
    meta: meta || undefined,
    playgroundId: playgroundMatch?.[1],
  };
}
