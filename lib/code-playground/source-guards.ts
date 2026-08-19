import { isProjectVfs, toRunnerInput, webFilesFromProject } from "./project-fs";
import { isSourceFiles } from "./source";
import type { PlaygroundSource, PlaygroundSourceFiles } from "./types";

export function requireStringSource(source: PlaygroundSource): string {
  const input = toRunnerInput(source);
  if (input.mode === "string") return input.code;
  if (input.mode === "project") {
    const code = input.files[input.entryFile];
    if (code != null) return code;
  }
  throw new Error("This runner only supports a single source file.");
}

export function requireFileSource(source: PlaygroundSource): PlaygroundSourceFiles {
  if (isSourceFiles(source)) return source;
  if (isProjectVfs(source)) return webFilesFromProject(source);
  throw new Error("This runner requires multiple source files.");
}
