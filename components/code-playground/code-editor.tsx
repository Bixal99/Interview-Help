"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import type { OnMount } from "@monaco-editor/react";
import { monacoLanguageFor } from "@/lib/code-playground/editor-language";
import type { PlaygroundLanguage } from "@/lib/code-playground/types";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => <div className="ih-playground-editor-loading">Loading editor…</div>,
});

export function CodeEditor({
  language,
  editorLanguage,
  value,
  onChange,
  onRun,
  readOnly = false,
  comfortable = false,
  autoGrow = false,
}: {
  language: PlaygroundLanguage;
  editorLanguage?: string;
  value: string;
  onChange: (value: string) => void;
  onRun: () => void;
  readOnly?: boolean;
  comfortable?: boolean;
  autoGrow?: boolean;
}) {
  const monacoEditorLanguage = editorLanguage ?? monacoLanguageFor(language);
  const runRef = useRef(onRun);
  const [editorHeight, setEditorHeight] = useState(comfortable ? 420 : 256);
  runRef.current = onRun;

  const handleMount = useCallback<OnMount>((editor, monaco) => {
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      runRef.current();
    });
    if (autoGrow) {
      const syncHeight = () => {
        const minHeight = comfortable ? 420 : 256;
        setEditorHeight(Math.max(minHeight, editor.getContentHeight() + 2));
      };
      syncHeight();
      editor.onDidContentSizeChange(syncHeight);
    }
  }, [autoGrow, comfortable]);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
        event.preventDefault();
        runRef.current();
      }
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  return (
    <div className={`ih-playground-editor${comfortable ? " is-comfortable" : ""}`}>
      <MonacoEditor
        height={autoGrow ? editorHeight : "100%"}
        language={monacoEditorLanguage}
        value={value}
        onChange={(next) => onChange(next ?? "")}
        onMount={handleMount}
        options={{
          readOnly,
          minimap: { enabled: false },
          fontSize: comfortable ? 16 : 14,
          lineHeight: comfortable ? 26 : 22,
          fontFamily: "Consolas, \"Courier New\", ui-monospace, monospace",
          lineNumbers: "on",
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 4,
          insertSpaces: true,
          autoClosingBrackets: "always",
          autoClosingQuotes: "always",
          wordWrap: "off",
          padding: { top: comfortable ? 16 : 12, bottom: comfortable ? 16 : 12 },
          renderLineHighlight: "line",
          cursorBlinking: "smooth",
          smoothScrolling: true,
          scrollbar: autoGrow ? { vertical: "hidden", horizontal: "auto" } : undefined,
        }}
      />
    </div>
  );
}
