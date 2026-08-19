import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawn } from "node:child_process";
import type { RunResult } from "./types";

const COMPILE_TIMEOUT_MS = 10_000;
const EXECUTION_TIMEOUT_MS = 5_000;
const OUTPUT_LIMIT_BYTES = 64 * 1024;

type NativeLanguage = "c" | "cpp";

type SpawnResult = {
  code: number | null;
  stdout: string;
  stderr: string;
  timedOut: boolean;
  outputLimited: boolean;
  spawnError?: string;
};

function compilerCommand(language: NativeLanguage) {
  return language === "c" ? "gcc" : "g++";
}

function compilerArgs(language: NativeLanguage, programFile: string) {
  const source = language === "c" ? "main.c" : "main.cpp";
  return language === "c"
    ? ["-std=c11", "-O2", "-pipe", source, "-o", programFile]
    : ["-std=c++17", "-O2", "-pipe", source, "-o", programFile];
}

function sourceFileName(language: NativeLanguage) {
  return language === "c" ? "main.c" : "main.cpp";
}

function programFileName() {
  return process.platform === "win32" ? "program.exe" : "program";
}

async function runCommand(
  command: string,
  args: string[],
  cwd: string,
  stdinText: string | null,
  timeoutMs: number,
): Promise<SpawnResult> {
  return await new Promise<SpawnResult>((resolve) => {
    const child = spawn(command, args, {
      cwd,
      windowsHide: true,
      stdio: ["pipe", "pipe", "pipe"],
    });

    let stdout = "";
    let stderr = "";
    let timedOut = false;
    let outputLimited = false;
    let settled = false;

    const finish = (result: SpawnResult) => {
      if (settled) return;
      settled = true;
      child.kill("SIGKILL");
      resolve(result);
    };

    const timeout = setTimeout(() => {
      timedOut = true;
      finish({
        code: null,
        stdout,
        stderr,
        timedOut: true,
        outputLimited,
      });
    }, timeoutMs);

    const append = (chunk: Buffer, target: "stdout" | "stderr") => {
      const text = chunk.toString("utf8");
      if (target === "stdout") stdout += text;
      else stderr += text;

      if (Buffer.byteLength(stdout, "utf8") + Buffer.byteLength(stderr, "utf8") > OUTPUT_LIMIT_BYTES) {
        outputLimited = true;
        clearTimeout(timeout);
        finish({
          code: null,
          stdout,
          stderr,
          timedOut,
          outputLimited: true,
        });
      }
    };

    child.stdout.on("data", (chunk: Buffer) => append(chunk, "stdout"));
    child.stderr.on("data", (chunk: Buffer) => append(chunk, "stderr"));
    child.on("error", (error) => {
      clearTimeout(timeout);
      finish({
        code: null,
        stdout,
        stderr,
        timedOut: false,
        outputLimited: false,
        spawnError: error instanceof Error ? error.message : String(error),
      });
    });
    child.on("close", (code) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      resolve({ code, stdout, stderr, timedOut: false, outputLimited: false });
    });

    if (stdinText != null) child.stdin.end(stdinText);
    else child.stdin.end();
  });
}

function missingCompilerResult(language: NativeLanguage, detail: string): RunResult {
  const compiler = compilerCommand(language);
  return {
    ok: false,
    stdout: "",
    stderr: `Could not run ${compiler}. Install MinGW-w64 or GCC and add it to PATH, then restart the dev server.\n${detail}`,
    errorType: "RUNTIME_ERROR",
  };
}

export async function executeNativeCode(language: NativeLanguage, code: string, input = ""): Promise<RunResult> {
  const dir = await mkdtemp(join(tmpdir(), "ih-native-run-"));
  const sourceFile = join(dir, sourceFileName(language));
  const programFile = programFileName();
  const startedAt = Date.now();

  try {
    await writeFile(sourceFile, code, "utf8");

    const compile = await runCommand(
      compilerCommand(language),
      compilerArgs(language, programFile),
      dir,
      null,
      COMPILE_TIMEOUT_MS,
    );
    if (compile.spawnError) {
      return missingCompilerResult(language, compile.spawnError);
    }
    if (compile.outputLimited) {
      return {
        ok: false,
        stdout: compile.stdout,
        stderr: "Compiler output limit exceeded.",
        compilationOutput: `${compile.stdout}${compile.stderr}`.trim(),
        errorType: "OUTPUT_LIMIT_EXCEEDED",
      };
    }
    if (compile.timedOut) {
      return {
        ok: false,
        stdout: compile.stdout,
        stderr: "Compilation timed out.",
        compilationOutput: `${compile.stdout}${compile.stderr}`.trim(),
        timedOut: true,
        stopped: true,
        errorType: "TIME_LIMIT_EXCEEDED",
      };
    }
    if ((compile.code ?? 1) !== 0) {
      return {
        ok: false,
        stdout: compile.stdout,
        stderr: "",
        compilationOutput: `${compile.stdout}${compile.stderr}`.trim(),
        exitCode: compile.code ?? 1,
        errorType: "COMPILATION_ERROR",
      };
    }

    const run = await runCommand(
      join(dir, programFile),
      [],
      dir,
      input,
      EXECUTION_TIMEOUT_MS,
    );

    if (run.spawnError) {
      return {
        ok: false,
        stdout: "",
        stderr: run.spawnError,
        errorType: "RUNTIME_ERROR",
      };
    }
    if (run.outputLimited) {
      return {
        ok: false,
        stdout: run.stdout,
        stderr: run.stderr.trim(),
        exitCode: run.code ?? undefined,
        executionTimeMs: Date.now() - startedAt,
        errorType: "OUTPUT_LIMIT_EXCEEDED",
      };
    }
    if (run.timedOut) {
      return {
        ok: false,
        stdout: run.stdout,
        stderr: "Execution timed out.",
        timedOut: true,
        stopped: true,
        executionTimeMs: Date.now() - startedAt,
        errorType: "TIME_LIMIT_EXCEEDED",
      };
    }

    const ok = (run.code ?? 1) === 0;
    return {
      ok,
      stdout: run.stdout,
      stderr: run.stderr.trimEnd(),
      exitCode: run.code ?? undefined,
      executionTimeMs: Date.now() - startedAt,
      errorType: ok ? undefined : "RUNTIME_ERROR",
    };
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}
