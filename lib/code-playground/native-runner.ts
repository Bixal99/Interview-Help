"use client";

import { requireStringSource } from "./source-guards";
import type { CodeRunner, PlaygroundLanguage, RunResult } from "./types";

class NativeRunner implements CodeRunner {
  readonly language: PlaygroundLanguage;
  readonly label: string;

  private controller: AbortController | null = null;

  constructor(language: "c" | "cpp") {
    this.language = language;
    this.label = language === "c" ? "C" : "C++";
  }

  async prepare(): Promise<void> {
    // no-op
  }

  async run(source: import("./types").PlaygroundSource, input = ""): Promise<RunResult> {
    const code = requireStringSource(source);
    this.controller = new AbortController();

    try {
      const response = await fetch("/api/code-playground/native", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: this.language,
          code,
          input,
        }),
        signal: this.controller.signal,
      });

      const result = await response.json() as RunResult;
      return result;
    } catch (error) {
      if ((error as Error).name === "AbortError") {
        return {
          ok: false,
          stdout: "",
          stderr: "Execution stopped.",
          stopped: true,
          errorType: "EXECUTION_STOPPED",
        };
      }
      return {
        ok: false,
        stdout: "",
        stderr: error instanceof Error ? error.message : "Native runner failed.",
        errorType: "RUNTIME_ERROR",
      };
    } finally {
      this.controller = null;
    }
  }

  stop(): void {
    this.controller?.abort();
  }
}

let cRunner: NativeRunner | null = null;
let cppRunner: NativeRunner | null = null;

export function getCRunner(): NativeRunner {
  if (!cRunner) cRunner = new NativeRunner("c");
  return cRunner;
}

export function getCppRunner(): NativeRunner {
  if (!cppRunner) cppRunner = new NativeRunner("cpp");
  return cppRunner;
}
