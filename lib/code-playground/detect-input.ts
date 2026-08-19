import type { PlaygroundLanguage } from "./types";

export function countInputCalls(code: string, language: PlaygroundLanguage = "python"): number {
  const pattern =
    language === "javascript"
      ? /\b(?:prompt|input)\s*\(/g
      : language === "c" || language === "cpp"
        ? /\b(?:scanf|std::cin|cin\s*>>)\b/g
        : /\binput\s*\(/g;
  const matches = code.match(pattern);
  return matches?.length ?? 0;
}

export function codeUsesInput(code: string, language: PlaygroundLanguage = "python"): boolean {
  return countInputCalls(code, language) > 0;
}
