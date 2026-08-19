/// <reference lib="webworker" />

type WorkerRequest =
  | { type: "run"; id: string; code: string; input?: string };

type WorkerResponse =
  | { type: "result"; id: string; ok: boolean; stdout: string; stderr: string }
  | { type: "error"; id: string; message: string };

function post(message: WorkerResponse) {
  self.postMessage(message);
}

function normalizeText(value: string) {
  return value.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}

function stringifyValue(value: unknown): string {
  if (typeof value === "string") return value;
  if (typeof value === "undefined") return "undefined";
  if (value instanceof Error) return value.stack || value.message;
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

async function runJavaScript(id: string, code: string, input = "") {
  let stdout = "";
  let stderr = "";
  const lines = input.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");
  let inputIndex = 0;

  const sandboxConsole = {
    log: (...args: unknown[]) => {
      stdout += `${args.map(stringifyValue).join(" ")}\n`;
    },
    warn: (...args: unknown[]) => {
      stderr += `${args.map(stringifyValue).join(" ")}\n`;
    },
    error: (...args: unknown[]) => {
      stderr += `${args.map(stringifyValue).join(" ")}\n`;
    },
  };

  const prompt = (message = "") => {
    const next = inputIndex < lines.length ? lines[inputIndex] ?? "" : "";
    inputIndex += 1;
    stdout += `${message}${next}\n`;
    return next;
  };

  try {
    const AsyncFunction = Object.getPrototypeOf(async function noop() {}).constructor as new (
      ...args: string[]
    ) => (...values: unknown[]) => Promise<unknown>;

    const execute = new AsyncFunction(
      "console",
      "prompt",
      "input",
      `"use strict";\n${code}`,
    );

    await execute(sandboxConsole, prompt, prompt);
    post({ type: "result", id, ok: true, stdout: normalizeText(stdout), stderr: normalizeText(stderr).trimEnd() });
  } catch (error) {
    const message = error instanceof Error ? error.stack || error.message : String(error);
    post({
      type: "result",
      id,
      ok: false,
      stdout: normalizeText(stdout),
      stderr: normalizeText(`${stderr}${message}`).trimEnd(),
    });
  }
}

self.addEventListener("message", (event: MessageEvent<WorkerRequest>) => {
  const message = event.data;
  if (message.type === "run") {
    void runJavaScript(message.id, message.code, message.input ?? "");
  }
});

export {};
