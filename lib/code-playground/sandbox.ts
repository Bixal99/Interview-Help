import type { CodeExercise } from "./exercises";
import type { PlaygroundLanguage, PlaygroundSource } from "./types";

export function createTryItExercise(
  language: PlaygroundLanguage,
  code: PlaygroundSource,
  options?: { title?: string; instructions?: string },
): CodeExercise {
  return {
    id: `try-${language}`,
    language,
    title: options?.title ?? "Start Building",
    instructions: options?.instructions ?? "",
    starterCode: code,
    solution: code,
  };
}
