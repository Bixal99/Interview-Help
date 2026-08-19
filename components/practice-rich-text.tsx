"use client";

import { useMemo } from "react";
import katex from "katex";

function renderMath(tex: string) {
  try {
    return katex.renderToString(tex, { throwOnError: false, output: "html" });
  } catch {
    return tex;
  }
}

function renderMarkup(text: string) {
  const parts = text.split(/(\*[^*]+\*)/g).filter((part) => part.length > 0);
  return parts.map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    return <span key={index}>{part}</span>;
  });
}

function texForComplexity(inner: string) {
  return inner
    .replace(/sqrt\(([^)]+)\)/gi, "\\sqrt{$1}")
    .replace(/√\s*n/g, "\\sqrt{n}")
    .replace(/√\s*\(([^)]+)\)/g, "\\sqrt{$1}")
    .replace(/\blog\b/g, "\\log ")
    .replace(/\^(\d+|[A-Za-z])/g, "^{$1}");
}

function prepareMath(text: string) {
  if (/\$[^$]+\$/.test(text)) return text;
  return text.replace(/\bO\(([^)]+)\)/g, (_match, inner: string) => `$O(${texForComplexity(inner)})$`);
}

export function PracticeRichText({ text }: { text: string }) {
  const prepared = useMemo(() => prepareMath(text), [text]);
  const parts = useMemo(() => prepared.split(/(\$[^$]+\$)/g).filter((part) => part.length > 0), [prepared]);
  return (
    <>
      {parts.map((part, index) => {
        const math = /^\$([^$]+)\$$/.exec(part);
        if (!math) return <span key={index}>{renderMarkup(part)}</span>;
        return (
          <span
            key={index}
            className="ih-practice-math"
            dangerouslySetInnerHTML={{ __html: renderMath(math[1]) }}
          />
        );
      })}
    </>
  );
}
