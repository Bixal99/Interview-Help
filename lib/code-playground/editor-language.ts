import type { PlaygroundLanguage } from "./types";

const MONACO_LANGUAGE: Record<PlaygroundLanguage, string> = {
  python: "python",
  javascript: "javascript",
  html: "html",
  css: "css",
  web: "html",
  c: "c",
  cpp: "cpp",
};

export function monacoLanguageFor(language: PlaygroundLanguage): string {
  return MONACO_LANGUAGE[language] ?? "plaintext";
}
