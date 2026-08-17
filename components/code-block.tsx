"use client";

import { Check, Copy, WrapText } from "lucide-react";
import { useState } from "react";

export function CodeBlock({ code, language = "text" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);
  const [wrap, setWrap] = useState(false);
  async function copy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }
  return (
    <div className={`code-shell ${wrap ? "wrap" : ""}`}>
      <div className="flex items-center border-b border-slate-700 px-3 py-2 text-[11px] text-slate-400">
        <span className="font-mono uppercase tracking-wider">{language}</span>
        <button onClick={() => setWrap(!wrap)} className="ml-auto inline-flex items-center gap-1.5 rounded-md px-2 py-1 hover:bg-white/5 hover:text-white" aria-pressed={wrap}><WrapText size={13} /> Wrap</button>
        <button onClick={copy} className="ml-1 inline-flex items-center gap-1.5 rounded-md px-2 py-1 hover:bg-white/5 hover:text-white">{copied ? <Check size={13} /> : <Copy size={13} />} {copied ? "Copied" : "Copy"}</button>
      </div>
      <pre><code className={`language-${language}`}>{code}</code></pre>
    </div>
  );
}
