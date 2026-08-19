"use client";

import { Check, Copy, WrapText, X } from "lucide-react";
import { useState } from "react";

const TRY_LANGUAGES = new Set(["html", "css", "javascript", "js"]);

function trySrc(language: string, code: string) {
  if (language === "html") return code;
  if (language === "css") return `<style>${code}</style><p>Styled preview</p>`;
  return `<script>${code}<\/script><p>Open the console in this preview if the snippet logs output.</p>`;
}

export function CodeBlock({ code, language = "text" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);
  const [wrap, setWrap] = useState(false);
  const [trying, setTrying] = useState(false);
  const canTry = TRY_LANGUAGES.has(language.toLowerCase());
  const example = language !== "text" && language !== "plaintext";
  const diagram = !example;

  async function copy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className={`ih-example${wrap ? " wrap" : ""}${diagram ? " ih-diagram" : ""}`}>
      <div className="ih-example-bar">
        <h3 className="ih-example-label">{example ? "Example" : "Diagram"}</h3>
        <div className="ih-example-actions">
          {diagram ? null : (
            <button type="button" onClick={() => setWrap(!wrap)} aria-pressed={wrap}>
              <WrapText size={13} /> Wrap
            </button>
          )}
          <button type="button" onClick={copy}>
            {copied ? <Check size={13} /> : <Copy size={13} />} {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
      <pre className="ih-example-panel"><code className={`language-${language}`}>{code}</code></pre>
      {canTry ? (
        <button type="button" onClick={() => setTrying(true)} className="btn-next">
          Try it Yourself »
        </button>
      ) : null}
      {trying ? (
        <div className="ih-example-preview">
          <div className="flex items-center justify-between px-3 py-2 text-sm">
            <span>Preview</span>
            <button type="button" onClick={() => setTrying(false)} className="inline-flex items-center gap-1" aria-label="Close preview"><X size={14} /> Close</button>
          </div>
          <iframe title="Try it preview" sandbox="allow-scripts" className="h-64 w-full bg-white" srcDoc={trySrc(language.toLowerCase(), code)} />
        </div>
      ) : null}
    </div>
  );
}
