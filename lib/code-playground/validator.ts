import type { CodeExercise } from "./exercises";
import type { CheckAnswerResult, CodeRunner, PlaygroundSource, RunResult } from "./types";
import { isSourceFiles } from "./source";

export function normalizeOutput(value: string): string {
  return value.replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim();
}

export function outputsMatch(actual: string, expected: string): boolean {
  return normalizeOutput(actual) === normalizeOutput(expected);
}

export function formatRunOutput(result: RunResult): string {
  const parts: string[] = [];
  if (result.compilationOutput) parts.push(result.compilationOutput.replace(/\r\n/g, "\n").replace(/\r/g, "\n").trimEnd());
  if (result.stdout) parts.push(result.stdout.replace(/\r\n/g, "\n").replace(/\r/g, "\n").trimEnd());
  if (result.stderr) {
    const stderr = result.stderr.replace(/\r\n/g, "\n").replace(/\r/g, "\n").trimEnd();
    parts.push(parts.length ? `\n${stderr}` : stderr);
  }
  if (result.timedOut) parts.push(parts.length ? "\nExecution timed out." : "Execution timed out.");
  if (result.stopped) parts.push(parts.length ? "\nExecution stopped." : "Execution stopped.");
  return parts.join("");
}

function passesDomChecks(source: PlaygroundSource, exercise: CodeExercise): boolean {
  if (!exercise.domChecks?.length || !isSourceFiles(source) || typeof DOMParser === "undefined") return true;
  const document = new DOMParser().parseFromString(source.html, "text/html");
  return exercise.domChecks.every((check) => {
    const element = document.querySelector(check.selector);
    if (!element) return false;
    if (check.textIncludes && !element.textContent?.includes(check.textIncludes)) return false;
    if (check.className && !element.classList.contains(check.className)) return false;
    return true;
  });
}

export async function validateExercise(
  exercise: CodeExercise,
  runner: CodeRunner,
  code: PlaygroundSource,
  stdin = "",
): Promise<CheckAnswerResult> {
  const cases = exercise.tests?.length
    ? exercise.tests
    : exercise.expectedOutput
      ? [{ expectedOutput: exercise.expectedOutput, stdin }]
      : [];

  if (!cases.length) {
    if (passesDomChecks(code, exercise)) {
      return { passed: true, message: "Correct" };
    }
    return { passed: false, message: "This exercise has no expected output configured." };
  }

  let lastResult: RunResult | undefined;

  for (const testCase of cases) {
    const result = await runner.run(code, testCase.stdin ?? "");
    lastResult = result;
    if (!result.ok && !result.stdout && result.stderr) {
      return { passed: false, message: "Try Again", lastResult: result };
    }
    if (!outputsMatch(result.stdout, testCase.expectedOutput)) {
      return { passed: false, message: "Try Again", lastResult: result };
    }
  }

  if (!passesDomChecks(code, exercise)) {
    return { passed: false, message: "Try Again", lastResult };
  }

  return { passed: true, message: "Correct", lastResult };
}
