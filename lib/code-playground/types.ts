export type PlaygroundLanguage = "python" | "javascript" | "html" | "css" | "web" | "c" | "cpp";

export type PlaygroundFileKey = "html" | "css" | "javascript";

export type PlaygroundSourceFiles = Record<PlaygroundFileKey, string>;

export type PlaygroundSource = string | PlaygroundSourceFiles;

export type RunErrorType =
  | "COMPILATION_ERROR"
  | "RUNTIME_ERROR"
  | "TIME_LIMIT_EXCEEDED"
  | "MEMORY_LIMIT_EXCEEDED"
  | "OUTPUT_LIMIT_EXCEEDED"
  | "EXECUTION_STOPPED";

export type RunResult = {
  ok: boolean;
  stdout: string;
  stderr: string;
  timedOut?: boolean;
  stopped?: boolean;
  compilationOutput?: string;
  exitCode?: number;
  executionTimeMs?: number;
  errorType?: RunErrorType;
  previewHtml?: string;
  domReport?: string[];
};

export interface CodeRunner {
  readonly language: PlaygroundLanguage;
  readonly label: string;
  prepare(): Promise<void>;
  run(source: PlaygroundSource, input?: string): Promise<RunResult>;
  stop(): void;
}

export type PlaygroundStatus =
  | "idle"
  | "preparing"
  | "running"
  | "success"
  | "error"
  | "stopped";

export type CheckAnswerResult = {
  passed: boolean;
  message: string;
  lastResult?: RunResult;
};
