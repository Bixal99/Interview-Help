"use client";

import { useEffect, useState, type ReactNode } from "react";

const SCRIPT = `source = "print(1)"

def run(source):
    print("lex")
    print("parse")
    print("execute")
    return 1

print(run(source))
print("program executed")`;

function highlightPython(code: string) {
  const nodes: ReactNode[] = [];
  const pattern = /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|#.*$|\b(?:def|if|else|elif|return)\b|\bprint\b|\b\d+\b)/gm;
  let last = 0;
  let key = 0;
  for (const match of code.matchAll(pattern)) {
    const value = match[0];
    const index = match.index ?? 0;
    if (index > last) nodes.push(<span key={key++}>{code.slice(last, index)}</span>);
    let cls = "ih-py-kw";
    if (value.startsWith("#")) cls = "ih-py-cmt";
    else if (value.startsWith("\"") || value.startsWith("'")) cls = "ih-py-str";
    else if (value === "print") cls = "ih-py-fn";
    else if (/^\d+$/.test(value)) cls = "ih-py-num";
    nodes.push(<span key={key++} className={cls}>{value}</span>);
    last = index + value.length;
  }
  if (last < code.length) nodes.push(<span key={key++}>{code.slice(last)}</span>);
  return nodes;
}

export function CheckpointTerminal({ title }: { title: string }) {
  const [text, setText] = useState("");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setText(SCRIPT);
      return;
    }
    let index = 0;
    let timer = 0;
    const step = () => {
      if (index <= SCRIPT.length) {
        setText(SCRIPT.slice(0, index));
        index += 1;
        timer = window.setTimeout(step, 48);
        return;
      }
      timer = window.setTimeout(() => {
        index = 0;
        setText("");
        timer = window.setTimeout(step, 500);
      }, 2800);
    };
    step();
    return () => window.clearTimeout(timer);
  }, [title]);

  return (
    <div className="ih-checkpoint-term">
      <div className="ih-checkpoint-term-bar">
        <span className="ih-checkpoint-dot ih-checkpoint-dot-red" />
        <span className="ih-checkpoint-dot ih-checkpoint-dot-yellow" />
        <span className="ih-checkpoint-dot ih-checkpoint-dot-green" />
        <span className="ih-checkpoint-term-title">python</span>
      </div>
      <pre>
        <code>
          {highlightPython(text)}
          <span className="ih-checkpoint-cursor">█</span>
        </code>
      </pre>
    </div>
  );
}
