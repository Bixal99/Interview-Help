"use client";

import { requireStringSource } from "../source-guards";
import type { CodeRunner, PlaygroundLanguage, RunResult } from "../types";

type WorkerRequest =
  | { type: "init" }
  | { type: "run"; id: string; code: string; input?: string };

type WorkerResponse =
  | { type: "ready" }
  | { type: "result"; id: string; ok: boolean; stdout: string; stderr: string; timedOut?: boolean; stopped?: boolean }
  | { type: "error"; id?: string; message: string };

const EXECUTION_TIMEOUT_MS = 8000;

let runCounter = 0;

function nextRunId() {
  runCounter += 1;
  return `run-${runCounter}`;
}

class PythonRunner implements CodeRunner {
  readonly language: PlaygroundLanguage = "python";
  readonly label = "Python";

  private worker: Worker | null = null;
  private preparePromise: Promise<void> | null = null;
  private activeRun:
    | {
        id: string;
        resolve: (result: RunResult) => void;
        reject: (error: Error) => void;
        timeout: ReturnType<typeof setTimeout>;
      }
    | null = null;

  private createWorker() {
    this.worker = new Worker(new URL("./python-runner.worker.ts", import.meta.url), { type: "module" });
    this.worker.addEventListener("message", (event: MessageEvent<WorkerResponse>) => this.handleMessage(event.data));
    this.worker.addEventListener("error", () => {
      this.failActiveRun({
        ok: false,
        stdout: "",
        stderr: "Python failed to load.",
      });
      this.resetWorker();
    });
  }

  private resetWorker() {
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
    }
    this.preparePromise = null;
  }

  private failActiveRun(result: RunResult) {
    if (!this.activeRun) return;
    clearTimeout(this.activeRun.timeout);
    this.activeRun.resolve(result);
    this.activeRun = null;
  }

  private handleMessage(message: WorkerResponse) {
    if (message.type === "ready") return;

    if (message.type === "error") {
      if (message.id && this.activeRun?.id === message.id) {
        this.failActiveRun({
          ok: false,
          stdout: "",
          stderr: message.message || "Python failed to load.",
        });
      }
      return;
    }

    if (message.type === "result") {
      if (!this.activeRun || this.activeRun.id !== message.id) return;
      clearTimeout(this.activeRun.timeout);
      this.activeRun.resolve({
        ok: message.ok,
        stdout: message.stdout,
        stderr: message.stderr,
        timedOut: message.timedOut,
        stopped: message.stopped,
      });
      this.activeRun = null;
      if (message.timedOut || message.stopped) this.resetWorker();
    }
  }

  async prepare(): Promise<void> {
    if (this.preparePromise) return this.preparePromise;

    this.preparePromise = new Promise<void>((resolve, reject) => {
      if (!this.worker) this.createWorker();
      const worker = this.worker;
      if (!worker) {
        reject(new Error("Python worker could not be created."));
        return;
      }

      const timeout = setTimeout(() => {
        cleanup();
        this.resetWorker();
        reject(new Error("Python failed to load."));
      }, 30000);

      const onMessage = (event: MessageEvent<WorkerResponse>) => {
        if (event.data.type === "ready") {
          cleanup();
          resolve();
        }
        if (event.data.type === "error" && !event.data.id) {
          cleanup();
          this.resetWorker();
          reject(new Error(event.data.message || "Python failed to load."));
        }
      };

      const cleanup = () => {
        clearTimeout(timeout);
        worker.removeEventListener("message", onMessage);
      };

      worker.addEventListener("message", onMessage);
      worker.postMessage({ type: "init" } satisfies WorkerRequest);
    }).catch((error) => {
      this.preparePromise = null;
      throw error;
    });

    return this.preparePromise;
  }

  async run(source: import("../types").PlaygroundSource, input = ""): Promise<RunResult> {
    await this.prepare();
    if (!this.worker) {
      return { ok: false, stdout: "", stderr: "Python failed to load." };
    }

    const code = requireStringSource(source);
    const id = nextRunId();
    return new Promise<RunResult>((resolve, reject) => {
      const timeout = setTimeout(() => {
        this.failActiveRun({
          ok: false,
          stdout: "",
          stderr: "Execution timed out.",
          timedOut: true,
          stopped: true,
        });
        this.resetWorker();
      }, EXECUTION_TIMEOUT_MS + 1000);

      this.activeRun = { id, resolve, reject, timeout };
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
    });
    this.resetWorker();
  }
}

let singleton: PythonRunner | null = null;

export function getPythonRunner(): PythonRunner {
  if (!singleton) singleton = new PythonRunner();
  return singleton;
}
