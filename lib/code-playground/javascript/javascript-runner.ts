"use client";

import { requireStringSource } from "../source-guards";
import type { CodeRunner, PlaygroundLanguage, RunResult } from "../types";

type WorkerRequest = { type: "run"; id: string; code: string; input?: string };
type WorkerResponse =
  | { type: "result"; id: string; ok: boolean; stdout: string; stderr: string }
  | { type: "error"; id: string; message: string };

const EXECUTION_TIMEOUT_MS = 8000;

let runCounter = 0;

function nextRunId() {
  runCounter += 1;
  return `js-run-${runCounter}`;
}

class JavaScriptRunner implements CodeRunner {
  readonly language: PlaygroundLanguage = "javascript";
  readonly label = "JavaScript";

  private worker: Worker | null = null;
  private activeRun:
    | {
        id: string;
        resolve: (result: RunResult) => void;
        timeout: ReturnType<typeof setTimeout>;
      }
    | null = null;

  private createWorker() {
    this.worker = new Worker(new URL("./javascript-runner.worker.ts", import.meta.url), { type: "module" });
    this.worker.addEventListener("message", (event: MessageEvent<WorkerResponse>) => this.handleMessage(event.data));
    this.worker.addEventListener("error", () => {
      this.failActiveRun({ ok: false, stdout: "", stderr: "JavaScript failed to run." });
      this.resetWorker();
    });
  }

  private resetWorker() {
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
    }
  }

  private failActiveRun(result: RunResult) {
    if (!this.activeRun) return;
    clearTimeout(this.activeRun.timeout);
    this.activeRun.resolve(result);
    this.activeRun = null;
  }

  private handleMessage(message: WorkerResponse) {
    if (!this.activeRun || this.activeRun.id !== message.id) return;
    clearTimeout(this.activeRun.timeout);
    if (message.type === "error") {
      this.activeRun.resolve({ ok: false, stdout: "", stderr: message.message || "JavaScript failed to run." });
    } else {
      this.activeRun.resolve({
        ok: message.ok,
        stdout: message.stdout,
        stderr: message.stderr,
      });
    }
    this.activeRun = null;
  }

  async prepare(): Promise<void> {
    if (!this.worker) this.createWorker();
  }

  async run(source: import("../types").PlaygroundSource, input = ""): Promise<RunResult> {
    await this.prepare();
    if (!this.worker) return { ok: false, stdout: "", stderr: "JavaScript failed to run." };

    const code = requireStringSource(source);
    const id = nextRunId();
    return new Promise<RunResult>((resolve) => {
      const timeout = setTimeout(() => {
        this.failActiveRun({
          ok: false,
          stdout: "",
          stderr: "Execution timed out.",
          timedOut: true,
          stopped: true,
          errorType: "TIME_LIMIT_EXCEEDED",
        });
        this.resetWorker();
      }, EXECUTION_TIMEOUT_MS);

      this.activeRun = { id, resolve, timeout };
      this.worker?.postMessage({ type: "run", id, code, input } satisfies WorkerRequest);
    });
  }

  stop(): void {
    if (!this.activeRun) return;
    this.failActiveRun({
      ok: false,
      stdout: "",
      stderr: "Execution stopped.",
      stopped: true,
      errorType: "EXECUTION_STOPPED",
    });
    this.resetWorker();
  }
}

let singleton: JavaScriptRunner | null = null;

export function getJavaScriptRunner(): JavaScriptRunner {
  if (!singleton) singleton = new JavaScriptRunner();
  return singleton;
}
