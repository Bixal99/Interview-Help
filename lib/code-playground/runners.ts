import { getJavaScriptRunner } from "./javascript/javascript-runner";
import { getCRunner, getCppRunner } from "./native-runner";
import { getPythonRunner } from "./python/python-runner";
import { getWebRunner } from "./web/web-runner";
import type { CodeRunner, PlaygroundLanguage } from "./types";

const runners: Partial<Record<PlaygroundLanguage, () => CodeRunner>> = {
  python: getPythonRunner,
  javascript: getJavaScriptRunner,
  web: () => getWebRunner("web"),
  html: () => getWebRunner("html"),
  css: () => getWebRunner("css"),
  c: getCRunner,
  cpp: getCppRunner,
};

export function getRunner(language: PlaygroundLanguage): CodeRunner | null {
  const factory = runners[language];
  return factory ? factory() : null;
}

export function isSupportedLanguage(language: string): language is PlaygroundLanguage {
  return language in runners;
}
