"use client";

import { Check, Copy, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { isSupportedLanguage } from "@/lib/code-playground/runners";
import { toPlaygroundLanguage, tryPlaygroundHref, writeTryItCode } from "@/lib/code-playground/try-it-storage";

const TRY_LANGUAGES = new Set(["html", "css", "javascript", "js"]);

const PYTHON_KEYWORDS = new Set([
  "and", "as", "assert", "async", "await", "break", "class", "continue", "def", "del", "elif", "else",
  "except", "False", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "None",
  "nonlocal", "not", "or", "pass", "raise", "return", "True", "try", "while", "with", "yield",
]);

const PYTHON_BUILTINS = new Set([
  "abs", "all", "any", "ascii", "bin", "bool", "bytearray", "bytes", "callable", "chr", "classmethod",
  "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "exec", "filter",
  "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input",
  "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min",
  "next", "object", "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", "round",
  "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip",
]);

const JS_KEYWORDS = new Set([
  "async", "await", "break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete",
  "do", "else", "export", "extends", "false", "finally", "for", "from", "function", "if", "import", "in",
  "instanceof", "let", "new", "null", "of", "return", "static", "super", "switch", "this", "throw", "true",
  "try", "typeof", "var", "void", "while", "with", "yield",
]);

const JS_BUILTINS = new Set([
  "Array", "Boolean", "console", "Date", "document", "Error", "JSON", "Map", "Math", "Number", "Object",
  "Promise", "Set", "String", "undefined", "window",
]);

function trySrc(language: string, code: string) {
  if (language === "html") return code;
  if (language === "css") return `<style>${code}</style><p>Styled preview</p>`;
  return `<script>${code}<\/script><p>Open the console in this preview if the snippet logs output.</p>`;
}

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function span(kind: string, value: string) {
  return `<span class="hljs-${kind}">${escapeHtml(value)}</span>`;
}

function isPython(language: string) {
  return language === "python" || language === "py";
}

function isJs(language: string) {
  return language === "javascript" || language === "js" || language === "typescript" || language === "ts";
}

function isQuote(value: string | undefined) {
  return value === '"' || value === "'";
}

function stringPrefixLength(code: string, index: number) {
  const slice = code.slice(index, index + 3).toLowerCase();
  if ((slice.startsWith("fr") || slice.startsWith("rf") || slice.startsWith("br") || slice.startsWith("rb")) && isQuote(code[index + 2])) {
    return 2;
  }
  if ("rfbu".includes(slice[0] ?? "") && isQuote(code[index + 1])) return 1;
  return 0;
}

function readQuoted(code: string, start: number) {
  const triple = code.startsWith('"""', start) || code.startsWith("'''", start);
  const quote = triple ? code.slice(start, start + 3) : code[start];
  let index = start + quote.length;
  while (index < code.length) {
    if (code[index] === "\\" && !triple) {
      index += 2;
      continue;
    }
    if (code.startsWith(quote, index)) return code.slice(start, index + quote.length);
    index += 1;
  }
  return code.slice(start);
}

function readNumber(code: string, start: number) {
  const match = code.slice(start).match(/^(?:\d[\d_]*\.?\d[\d_]*|\.\d[\d_]*|\d[\d_]*)(?:[eE][+-]?\d+)?[jJ]?/);
  return match?.[0] ?? "";
}

function highlight(code: string, language: string) {
  const python = isPython(language);
  const js = isJs(language);
  const keywords = python ? PYTHON_KEYWORDS : JS_KEYWORDS;
  const builtins = python ? PYTHON_BUILTINS : JS_BUILTINS;
  let html = "";
  let index = 0;

  while (index < code.length) {
    const current = code[index];

    if (python && current === "#") {
      const end = code.indexOf("\n", index);
      const token = end === -1 ? code.slice(index) : code.slice(index, end);
      html += span("comment", token);
      index += token.length;
      continue;
    }

    if (js && code.startsWith("//", index)) {
      const end = code.indexOf("\n", index);
      const token = end === -1 ? code.slice(index) : code.slice(index, end);
      html += span("comment", token);
      index += token.length;
      continue;
    }

    if (js && code.startsWith("/*", index)) {
      const end = code.indexOf("*/", index + 2);
      const token = end === -1 ? code.slice(index) : code.slice(index, end + 2);
      html += span("comment", token);
      index += token.length;
      continue;
    }

    const prefix = python ? stringPrefixLength(code, index) : 0;
    const quoteAt = index + prefix;
    if ((current === '"' || current === "'") || (prefix && (code[quoteAt] === '"' || code[quoteAt] === "'"))) {
      const token = code.slice(index, quoteAt) + readQuoted(code, quoteAt);
      html += span("string", token);
      index += token.length;
      continue;
    }

    if (/\d/.test(current) || (current === "." && /\d/.test(code[index + 1] ?? ""))) {
      const token = readNumber(code, index);
      if (token) {
        html += span("number", token);
        index += token.length;
        continue;
      }
    }

    if (/[A-Za-z_]/.test(current)) {
      const match = code.slice(index).match(/^[A-Za-z_][A-Za-z0-9_]*/);
      const token = match?.[0] ?? current;
      if (keywords.has(token)) html += span("keyword", token);
      else if (builtins.has(token)) html += span("built_in", token);
      else html += escapeHtml(token);
      index += token.length;
      continue;
    }

    html += escapeHtml(current);
    index += 1;
  }

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
      observe: "Run this example from the lesson.",
      backHref: pathname || "/",
    }, href);
    router.push(href);
  }

  return (
    <div className="ih-example ih-example-code">
      <p className="ih-example-label">Example</p>
      <div className="ih-example-window">
        <button type="button" className="ih-example-copy" onClick={copy}>
          {copied ? <Check size={13} /> : <Copy size={13} />} {copied ? "Copied" : "Copy"}
        </button>
        <pre className="ih-example-panel">
          <code className={`language-${lang}`} dangerouslySetInnerHTML={{ __html: highlight(code, lang) }} />
        </pre>
      </div>
      {canTry ? (
        canTryPlayground ? (
          <button type="button" onClick={openPlayground} className="btn-next">
            Try it Yourself »
          </button>
        ) : (
          <button type="button" onClick={() => setTrying(true)} className="btn-next">
            Try it Yourself »
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
