"use client";

import { useEffect, useMemo, useState } from "react";
import type { RunResult } from "@/lib/code-playground/types";

type WebMessage = {
  channel?: string;
  runId?: string;
  kind?: "log" | "warn" | "error";
  message?: string;
};

function runIdFromPreview(previewHtml?: string): string | null {
  if (!previewHtml) return null;
  const match = previewHtml.match(/<meta name="ih-run-id" content="([^"]+)"/);
  return match?.[1] ?? null;
}

export function WebPreviewPanel({ result }: { result?: RunResult }) {
  const [consoleLines, setConsoleLines] = useState<string[]>([]);
  const previewHtml = result?.previewHtml ?? "";
  const runId = useMemo(() => runIdFromPreview(previewHtml), [previewHtml]);

  useEffect(() => {
    setConsoleLines([]);
  }, [previewHtml]);

  useEffect(() => {
    function handleMessage(event: MessageEvent<WebMessage>) {
      const data = event.data;
      if (!data || data.channel !== "ih-web-playground" || !runId || data.runId !== runId) return;
      const prefix = data.kind === "warn" ? "warn: " : data.kind === "error" ? "error: " : "";
      setConsoleLines((current) => [...current, `${prefix}${data.message ?? ""}`]);
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [runId]);

  return (
    <div className="ih-web-preview">
      <div className="ih-web-preview-frame-wrap">
        {previewHtml ? (
          <iframe
            title="Web preview"
            className="ih-web-preview-frame"
            sandbox="allow-scripts"
            srcDoc={previewHtml}
          />
        ) : (
          <div className="ih-web-preview-empty">Press Run to render the preview.</div>
        )}
      </div>
      <div className="ih-web-preview-console">
        <div className="ih-web-preview-console-head">Console</div>
        <pre className="ih-web-preview-console-body">
          {consoleLines.length ? consoleLines.join("\n") : "Console output appears here."}
        </pre>
      </div>
    </div>
  );
}
