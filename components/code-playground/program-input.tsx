"use client";

import { useRef, type KeyboardEvent } from "react";
import { countInputCalls } from "@/lib/code-playground/detect-input";
import type { PlaygroundLanguage } from "@/lib/code-playground/types";

function splitAnswers(value: string, count: number) {
  const lines = value.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");
  return Array.from({ length: count }, (_, index) => lines[index] ?? "");
}

export function ProgramInput({
  code,
  language = "python",
  value,
  onChange,
  disabled = false,
  variant = "inline",
  onRun,
}: {
  code: string;
  language?: PlaygroundLanguage;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  variant?: "inline" | "tryit";
  onRun?: () => void;
}) {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const inputCount = countInputCalls(code, language);
  const inputLabel =
    language === "javascript"
      ? "prompt()"
      : language === "c" || language === "cpp"
        ? "stdin"
        : "input()";

  if (inputCount === 0) {
    return null;
  }

  const answers = splitAnswers(value, inputCount);

  function updateAnswer(index: number, nextValue: string) {
    const next = [...answers];
    next[index] = nextValue;
    onChange(next.join("\n"));
  }

  function handleKeyDown(index: number, event: KeyboardEvent<HTMLInputElement>) {
    if (event.key !== "Enter") return;
    event.preventDefault();
    if (index < inputCount - 1) {
      inputRefs.current[index + 1]?.focus();
      return;
    }
    onRun?.();
  }

  return (
    <div className={`ih-playground-input-stack${variant === "tryit" ? " is-tryit" : ""}`}>
      <div className="ih-playground-input-intro">
        <p className="ih-playground-input-intro-title">Keyboard answers</p>
        <p className="ih-playground-input-intro-copy">
          Your program calls <code>{inputLabel}</code> {inputCount} time{inputCount === 1 ? "" : "s"}. Type each answer below, top to bottom. Press Enter to jump to the next line, or Run on the last one.
        </p>
      </div>
      <ol className="ih-playground-input-list">
        {answers.map((answer, index) => (
          <li key={index}>
            <label className="ih-playground-input-row">
              <span className="ih-playground-input-badge">{index + 1}</span>
              <span className="ih-playground-input-prompt" aria-hidden="true">&gt;&gt;&gt;</span>
              <input
                ref={(node) => { inputRefs.current[index] = node; }}
                type="text"
                value={answer}
                placeholder={`Answer for ${inputLabel} #${index + 1}`}
                onChange={(event) => updateAnswer(index, event.target.value)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                disabled={disabled}
                spellCheck={false}
                aria-label={`Answer for input number ${index + 1}`}
              />
            </label>
          </li>
        ))}
      </ol>
    </div>
  );
}
