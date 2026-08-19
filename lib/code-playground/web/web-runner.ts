"use client";

import { requireFileSource } from "../source-guards";
import type { CodeRunner, PlaygroundLanguage, RunResult } from "../types";

const WEB_BRIDGE = `
<script>
(() => {
  const runId = "__RUN_ID__";
  const send = (kind, message) => {
    window.parent.postMessage({ channel: "ih-web-playground", runId, kind, message }, "*");
  };
  const format = (value) => {
    if (typeof value === "string") return value;
    try { return JSON.stringify(value); } catch { return String(value); }
  };
  const wrap = (type) => (...args) => send(type, args.map(format).join(" "));
  window.console.log = wrap("log");
  window.console.warn = wrap("warn");
  window.console.error = wrap("error");
  window.addEventListener("error", (event) => {
    send("error", event.message);
  });
  window.addEventListener("unhandledrejection", (event) => {
    send("error", event.reason ? format(event.reason) : "Unhandled promise rejection");
  });
})();
</script>`;

function escapeClosingTags(value: string) {
  return value.replace(/<\/script>/gi, "<\\/script>");
}

function buildSrcDoc(html: string, css: string, javascript: string, runId: string) {
  const bridge = WEB_BRIDGE.replace("__RUN_ID__", runId);
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="ih-run-id" content="${runId}" />
    <style>${css}</style>
  </head>
  <body>
    ${html}
    ${bridge}
    <script>${escapeClosingTags(javascript)}<\/script>
  </body>
</html>`;
}

class WebRunner implements CodeRunner {
  readonly language: PlaygroundLanguage;
  readonly label: string;

  constructor(language: PlaygroundLanguage) {
    this.language = language;
    this.label = language === "html" ? "HTML" : language === "css" ? "CSS" : "Web";
  }

  async prepare(): Promise<void> {
    // no-op
  }

  async run(sourceInput: import("../types").PlaygroundSource, _input = ""): Promise<RunResult> {
    const source = requireFileSource(sourceInput);
    const runId = `web-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    return {
      ok: true,
      stdout: "",
      stderr: "",
      previewHtml: buildSrcDoc(source.html, source.css, source.javascript, runId),
    };
  }

  stop(): void {
    // The preview iframe is replaced by the UI.
  }
}

let webRunner: WebRunner | null = null;
let htmlRunner: WebRunner | null = null;
let cssRunner: WebRunner | null = null;

export function getWebRunner(language: "web" | "html" | "css"): WebRunner {
  if (language === "html") {
    if (!htmlRunner) htmlRunner = new WebRunner("html");
    return htmlRunner;
  }
  if (language === "css") {
    if (!cssRunner) cssRunner = new WebRunner("css");
    return cssRunner;
  }
  if (!webRunner) webRunner = new WebRunner("web");
  return webRunner;
}
