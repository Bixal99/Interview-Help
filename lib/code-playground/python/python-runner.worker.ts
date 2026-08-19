/// <reference lib="webworker" />

import {
  createStderrWriteHandler,
  createStdinHandler,
  createStdoutWriteHandler,
  normalizeStreamText,
} from "./streams";

const PYODIDE_VERSION = "0.27.7";
const PYODIDE_INDEX_URL = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;
const EXECUTION_TIMEOUT_MS = 8000;

type WorkerRequest =
  | { type: "init" }
  | { type: "run"; id: string; code: string; input?: string; files?: Record<string, string>; entryFile?: string };

type WorkerResponse =
  | { type: "ready" }
  | { type: "result"; id: string; ok: boolean; stdout: string; stderr: string; timedOut?: boolean; stopped?: boolean }
  | { type: "error"; id?: string; message: string };

declare function importScripts(...urls: string[]): void;

type PyodideApi = {
  setStdout: (options: { batched?: (output: string) => void; write?: (buffer: Uint8Array) => number }) => void;
  setStderr: (options: { batched?: (output: string) => void; write?: (buffer: Uint8Array) => number }) => void;
  setStdin: (options: { stdin?: () => string | undefined; error?: boolean }) => void;
  runPythonAsync: (code: string, options?: { globals?: unknown }) => Promise<unknown>;
  pyimport: (name: string) => { dict: (values?: Record<string, unknown>) => unknown };
  FS: {
    mkdirTree: (path: string) => void;
    writeFile: (path: string, data: string) => void;
  };
};

declare function loadPyodide(config: { indexURL: string }): Promise<PyodideApi>;

let pyodideInstance: PyodideApi | null = null;
let pyodideReady: Promise<PyodideApi> | null = null;
let activeRunId: string | null = null;
let activeTimer: ReturnType<typeof setTimeout> | null = null;

function post(message: WorkerResponse) {
  self.postMessage(message);
}

async function ensurePyodide(): Promise<PyodideApi> {
  if (pyodideInstance) return pyodideInstance;
  if (!pyodideReady) {
    pyodideReady = (async () => {
      importScripts(`${PYODIDE_INDEX_URL}pyodide.js`);
      pyodideInstance = await loadPyodide({ indexURL: PYODIDE_INDEX_URL });
      return pyodideInstance;
    })();
  }
  return pyodideReady;
}

function clearActiveTimer() {
  if (activeTimer) {
    clearTimeout(activeTimer);
    activeTimer = null;
  }
}

function normalizeText(value: string) {
  return normalizeStreamText(value);
}

function configureStreams(pyodide: PyodideApi, input: string, stdoutRef: { value: string }, stderrRef: { value: string }) {
  pyodide.setStdout({ write: createStdoutWriteHandler(stdoutRef) });
  pyodide.setStderr({ write: createStderrWriteHandler(stderrRef) });
  if (input.trim()) {
    pyodide.setStdin({ stdin: createStdinHandler(input, stdoutRef) });
  } else {
    pyodide.setStdin({ stdin: () => undefined });
  }
}

async function runPython(id: string, code: string, input = "", files?: Record<string, string>, entryFile?: string) {
  activeRunId = id;
  const stdoutRef = { value: "" };
  const stderrRef = { value: "" };
  let timedOut = false;

  activeTimer = setTimeout(() => {
    timedOut = true;
    post({
      type: "result",
      id,
      ok: false,
      stdout: normalizeText(stdoutRef.value),
      stderr: stderrRef.value || "Execution timed out.",
      timedOut: true,
      stopped: true,
    });
    self.close();
  }, EXECUTION_TIMEOUT_MS);

  try {
    const pyodide = await ensurePyodide();
    if (timedOut || activeRunId !== id) return;

    configureStreams(pyodide, input, stdoutRef, stderrRef);

    const globals = pyodide.pyimport("builtins").dict();
    let program = code;
    if (files && entryFile) {
      const root = `/home/pyodide/run-${id}`;
      pyodide.FS.mkdirTree(root);
      for (const [path, content] of Object.entries(files)) {
        const full = `${root}/${path}`;
        const folder = full.slice(0, full.lastIndexOf("/"));
        if (folder) pyodide.FS.mkdirTree(folder);
        pyodide.FS.writeFile(full, content);
      }
      program = `
import os, sys, runpy
os.chdir(${JSON.stringify(root)})
sys.path.insert(0, ${JSON.stringify(root)})
_entry = ${JSON.stringify(entryFile)}
_dir = os.path.dirname(_entry)
if _dir:
    sys.path.insert(0, os.path.join(${JSON.stringify(root)}, _dir))
runpy.run_path(_entry, run_name="__main__")
`;
    }
    await pyodide.runPythonAsync(program, { globals });

    if (timedOut || activeRunId !== id) return;

    clearActiveTimer();
    post({
      type: "result",
      id,
      ok: true,
      stdout: normalizeText(stdoutRef.value),
      stderr: normalizeText(stderrRef.value),
    });
  } catch (error) {
    if (timedOut || activeRunId !== id) return;
    clearActiveTimer();
    const message = error instanceof Error ? error.message : String(error);
    post({
      type: "result",
      id,
      ok: false,
      stdout: normalizeText(stdoutRef.value),
      stderr: normalizeText(message),
    });
  } finally {
    if (activeRunId === id) activeRunId = null;
  }
}

self.addEventListener("message", (event: MessageEvent<WorkerRequest>) => {
  const message = event.data;
  if (message.type === "init") {
    ensurePyodide()
      .then(() => post({ type: "ready" }))
      .catch((error) => post({ type: "error", message: error instanceof Error ? error.message : String(error) }));
    return;
  }

  if (message.type === "run") {
    void runPython(message.id, message.code, message.input ?? "", message.files, message.entryFile);
  }
});

export {};
