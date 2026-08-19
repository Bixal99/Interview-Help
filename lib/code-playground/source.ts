import { isProjectVfs } from "./project-fs";
import type { PlaygroundFileKey, PlaygroundLanguage, PlaygroundSource, PlaygroundSourceFiles } from "./types";

export function createEmptyWebSource(): PlaygroundSourceFiles {
  return {
    html: "",
    css: "",
    javascript: "",
  };
}

export function isWebLanguage(language: PlaygroundLanguage): boolean {
  return language === "web" || language === "html" || language === "css";
}

export function isSourceFiles(source: PlaygroundSource): source is PlaygroundSourceFiles {
  return typeof source === "object" && source !== null && !("kind" in source);
}

export function sourceForLanguage(language: PlaygroundLanguage, value: string): PlaygroundSource {
  if (language === "html") {
    return { html: value, css: "", javascript: "" };
  }
  if (language === "css") {
    return { html: "<h1>Hello CSS</h1>", css: value, javascript: "" };
  }
  if (language === "web") {
    return { html: value, css: "", javascript: "" };
  }
  return value;
}

export function displaySourceForLanguage(language: PlaygroundLanguage, source: PlaygroundSource): string {
  if (typeof source === "string") return source;
  if (isProjectVfs(source)) return source.files[source.entryFile] ?? "";
  if (language === "css") return source.css;
  if (language === "html") return source.html;
  return source.html;
}

export function updateSourceFile(
  source: PlaygroundSource,
  key: PlaygroundFileKey,
  value: string,
): PlaygroundSourceFiles {
  const next = isSourceFiles(source) ? source : createEmptyWebSource();
  return {
    ...next,
    [key]: value,
  };
}

export function normalizeSourceForRunner(language: PlaygroundLanguage, source: PlaygroundSource): PlaygroundSource {
  if (typeof source !== "string") return source;
  return sourceForLanguage(language, source);
}

export function serializeSource(source: PlaygroundSource): string {
  if (typeof source === "string") return source;
  if (isProjectVfs(source)) return JSON.stringify(source);
  return JSON.stringify({ kind: "files", value: source });
}

export function deserializeSource(raw: string): PlaygroundSource {
  if (!raw.trim().startsWith("{")) return raw;
  try {
    const parsed = JSON.parse(raw) as {
      kind?: "project" | "files";
      value?: PlaygroundSourceFiles;
      entryFile?: string;
      files?: Record<string, string>;
      folders?: string[];
    };
    if (parsed.kind === "project" && parsed.files && parsed.entryFile != null) {
      return {
        kind: "project",
        entryFile: parsed.entryFile,
        files: parsed.files,
        folders: parsed.folders ?? [],
      };
    }
    if (parsed.kind === "files" && parsed.value) return parsed.value;
  } catch {
    // Fall back to plain string draft for backward compatibility.
  }
  return raw;
}
