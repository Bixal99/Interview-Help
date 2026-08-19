"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import type { OnMount } from "@monaco-editor/react";
import type { editor as MonacoEditorApi } from "monaco-editor";
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
  const wrapRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<MonacoEditorApi.IStandaloneCodeEditor | null>(null);
  const minHeight = autoGrow && comfortable ? 640 : comfortable ? 420 : 256;
  const [editorHeight, setEditorHeight] = useState(minHeight);
  runRef.current = onRun;

  const syncHeight = useCallback((instance?: MonacoEditorApi.IStandaloneCodeEditor | null) => {
    const editor = instance ?? editorRef.current;
    if (!autoGrow || !editor) return;
    setEditorHeight(Math.max(minHeight, editor.getContentHeight() + 2));
  }, [autoGrow, minHeight]);

  const handleMount = useCallback<OnMount>((editor, monaco) => {
    editorRef.current = editor;
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      runRef.current();
    });
    editor.updateOptions({ wordWrap: "on" });
    syncHeight(editor);
    editor.onDidContentSizeChange(() => syncHeight(editor));
    editor.onDidLayoutChange(() => syncHeight(editor));
  }, [syncHeight]);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;
    const observer = new ResizeObserver(() => {
      editorRef.current?.layout();
      syncHeight();
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [syncHeight]);

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
    <div ref={wrapRef} className={`ih-playground-editor${comfortable ? " is-comfortable" : ""}`}>
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
          wordWrap: "on",
          wrappingIndent: "same",
          padding: { top: comfortable ? 16 : 12, bottom: comfortable ? 16 : 12 },
          renderLineHighlight: "line",
          cursorBlinking: "smooth",
          smoothScrolling: true,
          scrollbar: {
            vertical: autoGrow ? "hidden" : "auto",
            horizontal: "hidden",
            handleMouseWheel: !autoGrow,
            alwaysConsumeMouseWheel: false,
          },
        }}
      />
    </div>
  );
}
