const SUPER_TO_TEX: Record<string, string> = {
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
  "⁺": "+",
  "⁻": "-",
  "ⁿ": "n",
  "ᴺ": "N",
  "ⁱ": "i",
  "ᵏ": "k",
  "ᵐ": "m",
  "ᵗ": "t",
  "ᵀ": "T",
  "ˣ": "x",
  "ʸ": "y",
};

const TEX_TO_SUPER: Record<string, string> = Object.fromEntries(
  Object.entries(SUPER_TO_TEX).map(([superChar, tex]) => [tex, superChar]),
);

export type FormulaPart = {
  type: "text" | "math";
  value: string;
  display?: boolean;
};

function texForComplexity(inner: string) {
  return inner
    .replace(/sqrt\(([^)]+)\)/gi, "\\sqrt{$1}")
    .replace(/√\s*\(([^)]+)\)/g, "\\sqrt{$1}")
    .replace(/√\s*([A-Za-z])/g, "\\sqrt{$1}")
    .replace(/\\times/g, "\\times ")
    .replace(/\blog\b/g, "\\log ")
    .replace(/\^(\d+|[A-Za-z])/g, "^{$1}");
}

function toSuper(exp: string) {
  return [...exp.replace(/[{}]/g, "")].map((ch) => TEX_TO_SUPER[ch] ?? ch).join("");
}

function normalizeUnicodeExponents(text: string) {
  return text.replace(/([A-Za-z0-9])([⁰¹²³⁴⁵⁶⁷⁸⁹ⁿᴺⁱᵏᵐᵗᵀˣʸ⁺⁻]+)/g, (_match, base: string, exp: string) => {
    const tex = [...exp].map((ch) => SUPER_TO_TEX[ch] ?? ch).join("");
    return `${base}^{${tex}}`;
  });
}

function slotFor(slots: string[], value: string) {
  const token = `\u0000${slots.length}\u0000`;
  slots.push(value);
  return token;
}

function protect(text: string, pattern: RegExp, slots: string[]) {
  return text.replace(pattern, (match) => slotFor(slots, match));
}

function restore(text: string, slots: string[]) {
  return text.replace(/\u0000(\d+)\u0000/g, (_match, index: string) => slots[Number(index)] ?? "");
}

export function wrapBareFormulas(text: string) {
  const slots: string[] = [];
  let work = normalizeUnicodeExponents(text);
  work = protect(work, /\$\$[\s\S]+?\$\$/g, slots);
  work = protect(work, /\$[^$\n]+\$/g, slots);
  work = protect(work, /`[^`]+`/g, slots);

  work = work.replace(/\b([OΘΩθω])\(\s*([^)]+?)\s*\)/g, (_match, name: string, inner: string) => {
    return slotFor(slots, `$${name}(${texForComplexity(inner)})$`);
  });

  work = work.replace(
    /\b(\d+)\^(?:\{([^}]+)\}|([A-Za-z]+))|\b([A-Za-z])\^(?:\{([^}]+)\}|(\d+))/g,
    (_match, digits: string, digitBraced: string, digitLetter: string, letter: string, letterBraced: string, letterDigit: string) => {
      const base = digits ?? letter;
      const exp = digitBraced ?? digitLetter ?? letterBraced ?? letterDigit;
      return slotFor(slots, `$${base}^{${exp}}$`);
    },
  );

  work = work.replace(/\b([A-Za-z0-9]+)\^\{([^}]+)\}/g, (_match, base: string, exp: string) => {
    return slotFor(slots, `$${base}^{${exp}}$`);
  });

  return restore(work, slots);
}

export function splitFormulaParts(text: string): FormulaPart[] {
  const prepared = wrapBareFormulas(text);
  const parts: FormulaPart[] = [];
  const pattern = /(\$\$[\s\S]+?\$\$|\$[^$\n]+\$)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(prepared))) {
    if (match.index > last) parts.push({ type: "text", value: prepared.slice(last, match.index) });
    const raw = match[0];
    const display = raw.startsWith("$$");
    parts.push({ type: "math", value: raw.replace(/^\$+|\$+$/g, ""), display });
    last = match.index + raw.length;
  }
  if (last < prepared.length) parts.push({ type: "text", value: prepared.slice(last) });
  return parts.filter((part) => part.value.length > 0);
}

export function withMarkdownMath(markdown: string) {
  return markdown.split(/(```[\s\S]*?```)/g).map((chunk) => {
    if (chunk.startsWith("```")) return chunk;
    const codes: string[] = [];
    const protectedCodes = chunk.replace(/`[^`]+`/g, (match) => {
      codes.push(match);
      return `%%IHCODE${codes.length - 1}%%`;
    });
    const wrapped = wrapBareFormulas(protectedCodes);
    return wrapped.replace(/%%IHCODE(\d+)%%/g, (_match, index: string) => codes[Number(index)] ?? "");
  }).join("");
}

export function texToPlain(tex: string) {
  return tex
    .replace(/\\log\s*/g, " log ")
    .replace(/\\times\s*/g, "×")
    .replace(/\\cdot\s*/g, "·")
    .replace(/\\sqrt\{([^}]+)\}/g, "√$1")
    .replace(/\\mathrm\{([^}]+)\}/g, "$1")
    .replace(/\\text\{([^}]+)\}/g, "$1")
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, "$1/$2")
    .replace(/\^\{([^}]+)\}/g, (_match, exp: string) => toSuper(exp))
    .replace(/\^([A-Za-z0-9])/g, (_match, exp: string) => toSuper(exp))
    .replace(/[{}]/g, "")
    .replace(/\\/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function polishLeftoverTex(text: string) {
  return text.replace(/\b([A-Za-z0-9]+)\^\{([^}]+)\}/g, (_match, base: string, exp: string) => `${base}${toSuper(exp)}`);
}

export function withCodeFormulas(text: string) {
  return splitFormulaParts(text)
    .map((part) => polishLeftoverTex(part.type === "math" ? texToPlain(part.value) : part.value))
    .join("");
}

export function plainFormula(text: string) {
  return withCodeFormulas(text);
}
