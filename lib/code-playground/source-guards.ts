import type { PlaygroundSource, PlaygroundSourceFiles } from "./types";

export function requireStringSource(source: PlaygroundSource): string {
  if (typeof source === "string") return source;
  throw new Error("This runner only supports a single source file.");
}

export function requireFileSource(source: PlaygroundSource): PlaygroundSourceFiles {
  if (typeof source !== "string") return source;
  throw new Error("This runner requires multiple source files.");
}
