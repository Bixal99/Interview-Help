"use client";

import { Check, Copy, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { isSupportedLanguage } from "@/lib/code-playground/runners";
import { toPlaygroundLanguage, tryPlaygroundHref, writeTryItCode } from "@/lib/code-playground/try-it-storage";

const TRY_LANGUAGES = new Set(["html", "css", "javascript", "js"]);
const PYTHON_WORDS = /\b(def|return|if|else|elif|for|in|while|class|import|from|as|pass|None|True|False|and|or|not|with|try|except|raise)\b/;
const JS_WORDS = /\b(function|return|if|else|const|let|var|class|new|this|import|from|export|while|for)\b/;

function trySrc(language: string, code: string) {
  if (language === "html") return code;
  if (language === "css") return `<style>${code}</style><p>Styled preview</p>`;
  return `<script>${code}<\/script><p>Open the console in this preview if the snippet logs output.</p>`;
}

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function highlight(code: string, language: string) {
  const words = language === "python" || language === "py" ? PYTHON_WORDS : JS_WORDS;
  const pattern = /(#.*|\/\/.*|"[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|\b\d+\b|\b[A-Za-z_][A-Za-z0-9_]*\b)/g;
  let last = 0;
  let html = "";
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(code))) {
    html += escapeHtml(code.slice(last, match.index));
    const token = match[0];
    let kind = "";
    if (token.startsWith("#") || token.startsWith("//")) kind = "comment";
    else if (token.startsWith("\"") || token.startsWith("'")) kind = "string";
    else if (/^\d+$/.test(token)) kind = "number";
    else if (words.test(token)) kind = "keyword";
    html += kind ? `<span class="hljs-${kind}">${escapeHtml(token)}</span>` : escapeHtml(token);
    last = match.index + token.length;
  }
  html += escapeHtml(code.slice(last));
  return html;
}

export function CodeBlock({ code, language = "text" }: { code: string; language?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);
  const [trying, setTrying] = useState(false);
  const lang = language.toLowerCase();
  const playgroundLanguage = toPlaygroundLanguage(lang);
  const canTryPlayground = playgroundLanguage ? isSupportedLanguage(playgroundLanguage) : false;
  const canTryIframe = TRY_LANGUAGES.has(lang);
  const canTry = canTryPlayground || canTryIframe;

  async function copy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  function openPlayground() {
    if (!playgroundLanguage) return;
    const href = tryPlaygroundHref(playgroundLanguage);
    writeTryItCode(playgroundLanguage, {
      source: code,
      title: "Working example",
      instructions: "Run this example from the lesson.",
      backHref: pathname || "/",
    }, href);
    router.push(href);
  }

  return (
    <div className="ih-example ih-example-code">
      <div className="ih-example-bar">
        <div className="ih-example-actions">
          <button type="button" onClick={copy}>
            {copied ? <Check size={13} /> : <Copy size={13} />} {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
      <pre className="ih-example-panel">
        <code className={`language-${lang}`} dangerouslySetInnerHTML={{ __html: highlight(code, lang) }} />
      </pre>
      {canTry ? (
        canTryPlayground ? (
          <button type="button" onClick={openPlayground} className="btn-next">
            Start Building »
          </button>
        ) : (
          <button type="button" onClick={() => setTrying(true)} className="btn-next">
            Start Building »
          </button>
        )
      ) : null}
      {trying ? (
        <div className="ih-example-preview">
          <div className="flex items-center justify-between px-3 py-2 text-sm">
            <span>Preview</span>
            <button type="button" onClick={() => setTrying(false)} className="inline-flex items-center gap-1" aria-label="Close preview">
              <X size={14} /> Close
            </button>
          </div>
          <iframe title="Try it preview" sandbox="allow-scripts" className="h-64 w-full bg-white" srcDoc={trySrc(lang, code)} />
        </div>
      ) : null}
    </div>
  );
}
