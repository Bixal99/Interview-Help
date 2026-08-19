"use client";

import type { PlaygroundStatus } from "@/lib/code-playground/types";

function statusLabel(status: PlaygroundStatus, runnerLabel: string) {
  switch (status) {
    case "preparing":
      return `Preparing ${runnerLabel}...`;
    case "running":
      return "Running...";
    case "success":
      return "Success";
    case "error":
      return "Error";
    case "stopped":
      return "Stopped";
    default:
      return "";
  }
}

export function OutputPanel({
  status,
  runnerLabel,
  output,
  checkMessage,
  variant = "inline",
}: {
  status: PlaygroundStatus;
  runnerLabel: string;
  output: string;
  checkMessage?: string | null;
  variant?: "inline" | "tryit";
}) {
  const statusText = statusLabel(status, runnerLabel);
  const isError = status === "error" || status === "stopped";
  const isEmpty = !output.trim() || output.trim() === "Running...";

  return (
    <div className={`ih-playground-output${variant === "tryit" ? " is-tryit" : ""}`}>
      <div className="ih-playground-panel-head">
        <span>Result</span>
        {statusText ? (
          <span className={`ih-playground-status${isError ? " is-error" : status === "success" ? " is-success" : status === "running" || status === "preparing" ? " is-running" : ""}`}>
            {statusText}
          </span>
        ) : null}
      </div>
      {checkMessage ? (
        <p className={`ih-playground-check${checkMessage === "Correct" ? " is-correct" : " is-wrong"}`} aria-live="polite">
          {checkMessage === "Correct" ? "✓ Correct" : "✕ Try Again"}
        </p>
      ) : null}
      <div className="ih-playground-output-shell">
        <pre className={`ih-playground-output-body${variant === "tryit" && isEmpty && status === "idle" ? " is-idle" : ""}`} aria-live="polite">
          {isEmpty && status === "idle" ? "" : output || " "}
        </pre>
      </div>
    </div>
  );
}
