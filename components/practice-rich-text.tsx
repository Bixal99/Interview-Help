import katex from "katex";
import { splitFormulaParts } from "@/lib/format-math";

function renderMath(tex: string, display = false) {
  try {
    return katex.renderToString(tex, { throwOnError: false, output: "html", displayMode: display });
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

export function PracticeRichText({ text }: { text: string }) {
  const parts = splitFormulaParts(text);
  return (
    <>
      {parts.map((part, index) => {
        if (part.type !== "math") return <span key={index}>{renderMarkup(part.value)}</span>;
        return (
          <span
            key={index}
            className="ih-practice-math"
            dangerouslySetInnerHTML={{ __html: renderMath(part.value, part.display) }}
          />
        );
      })}
    </>
  );
}
