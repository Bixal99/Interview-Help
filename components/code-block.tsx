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

  async function copy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className={`code-shell ${wrap ? "wrap" : ""}`}>
      <div className="flex items-center border-b hairline px-4 py-3 text-[18px] font-bold">
        <span>Example</span>
        <button type="button" onClick={() => setWrap(!wrap)} className="ml-auto inline-flex items-center gap-1.5 px-2 py-1 text-sm font-semibold hover:text-accent" aria-pressed={wrap}>
          <WrapText size={13} /> Wrap
        </button>
        <button type="button" onClick={copy} className="ml-1 inline-flex items-center gap-1.5 px-2 py-1 text-sm font-semibold hover:text-accent">
          {copied ? <Check size={13} /> : <Copy size={13} />} {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre><code className={`language-${language}`}>{code}</code></pre>
      {canTry && (
        <div className="px-4 py-3">
          <button type="button" onClick={() => setTrying(true)} className="btn-next">
            Try it Yourself »
          </button>
        </div>
      )}
      {trying && (
        <div className="border-t hairline bg-white text-ink">
          <div className="flex items-center justify-between px-3 py-2 text-sm">
            <span>Preview</span>
            <button type="button" onClick={() => setTrying(false)} className="inline-flex items-center gap-1" aria-label="Close preview"><X size={14} /> Close</button>
          </div>
          <iframe title="Try it preview" sandbox="allow-scripts" className="h-64 w-full bg-white" srcDoc={trySrc(language.toLowerCase(), code)} />
        </div>
      )}
    </div>
  );
}
