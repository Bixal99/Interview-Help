/**
 * Semantic sidebar shortening (fallback when no explicit alias exists).
 * Prefer real meaning over character chopping or ellipsis.
 */

const FILLER =
  /^(the|a|an|how|how to|how a|understanding|introduction to|intro to|learn(?:ing)?|overview of|basics of|getting started with)\s+/i;

const PRACTICE_PREFIX =
  /^(practice|lab|mini project|phase project|design (?:exercise|project)|architecture exercise|written (?:practice|exercise|case study)|trace exercise|diagram exercise|sql practice|refactoring lab|exploration|coding)\s*[–—:-]\s*/i;

const STORY_PREFIX = /^(story|unit)\s+(project|checkpoint)\s+(\d+)\s*[–—:-]\s*/i;

/** Target word budget for sidebar labels (numbers live in a separate column). */
const MAX_WORDS = 4;
const SOFT_CHARS = 26;

function tidyDashes(value: string) {
  return value.replace(/[\u2013\u2014]/g, "-").replace(/\s+/g, " ").trim();
}

function titleCasePreserveAcronyms(value: string) {
  return value
    .split(/\s+/)
    .map((word) => {
      if (/^[A-Z0-9]{2,}(?:\/[A-Z0-9]+)*$/.test(word)) return word;
      if (/^[A-Z]+\d*$/.test(word) && word.length <= 5) return word;
      if (word.includes("/")) {
        return word
          .split("/")
          .map((part) => (part ? part[0].toUpperCase() + part.slice(1).toLowerCase() : part))
          .join("/");
      }
      if (!partWord(word)) return word;
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

function partWord(word: string) {
  return /^[A-Za-z]/.test(word);
}

function clampWords(value: string, maxWords = MAX_WORDS, softChars = SOFT_CHARS) {
  const words = value.split(/\s+/).filter(Boolean);
  if (words.length <= maxWords && value.length <= softChars) return value;
  const kept: string[] = [];
  for (const word of words) {
    const next = kept.length ? `${kept.join(" ")} ${word}` : word;
    if (kept.length >= maxWords) break;
    if (kept.length > 0 && next.length > softChars) break;
    kept.push(word);
  }
  return kept.join(" ") || value;
}

/**
 * Produce a concise sidebar label from a canonical curriculum title.
 * Safe fallback — explicit aliases should still override important entries.
 */
export function shortenForSidebar(rawTitle: string): string {
  let text = tidyDashes(rawTitle);
  if (!text) return text;

  const story = STORY_PREFIX.exec(text);
  if (story) {
    const kind = story[2].toLowerCase() === "checkpoint" ? "Checkpoint" : "Unit Project";
    return `${kind} ${story[3]}`;
  }

  // Prefer a stable short label for practice/lab style titles.
  if (PRACTICE_PREFIX.test(text)) {
    const rest = text.replace(PRACTICE_PREFIX, "").trim();
    if (/^written\b/i.test(text) || /^by hand\b/i.test(rest)) return "Practice";
    if (/^mixed\b/i.test(rest)) return "Practice";
    const kindMatch = /^(practice|lab|mini project|phase project)/i.exec(text);
    const kind = kindMatch?.[1] ? titleCasePreserveAcronyms(kindMatch[1]) : "Practice";
    if (kind.toLowerCase() === "practice") return "Practice";
    if (kind.toLowerCase() === "lab") return "Lab";
    if (kind.toLowerCase() === "mini project") return "Mini Project";
    if (kind.toLowerCase() === "phase project") return "Phase Project";
    return clampWords(titleCasePreserveAcronyms(kind), 3, 20);
  }

  // Drop unit/phase chrome if it leaked into the title string.
  text = text.replace(/^phase\s+\d+\s*[-:.]?\s*/i, "");
  text = text.replace(/^unit\s+[ivxlcdm]+\.?\s*/i, "");

  // Take the first clause when titles are lists of goals.
  if (text.includes(":")) text = text.split(":")[0]!.trim();

  // "A vs B vs C" → keep first contrast pair when long.
  if (/\svs\.?\s/i.test(text)) {
    const parts = text.split(/\s+vs\.?\s+/i);
    if (parts.length >= 2) {
      const pair = `${parts[0]} vs ${parts[1]}`;
      text = pair.length <= SOFT_CHARS + 4 ? pair : parts[0]!;
    }
  }

  text = text.replace(FILLER, "");

  // Compress common long patterns.
  text = text
    .replace(/\band\b/gi, "&")
    .replace(/\s*,\s*/g, ", ")
    .replace(/\?\s*$/, "")
    .replace(/\s+/g, " ")
    .trim();

  // "A, B & C" / "A, B, and C" → first two joined with &
  const listParts = text.split(/\s*,\s*/);
  if (listParts.length >= 3) {
    const second = listParts[1]!.replace(/^&\s*/, "").trim();
    text = `${listParts[0]} & ${second}`;
  } else if (listParts.length === 2 && text.length > SOFT_CHARS) {
    text = `${listParts[0]} & ${listParts[1]!.replace(/^&\s*/, "")}`;
  }

  // "Best / Average / Worst Case" — keep slash lists intact; clampWords would leave a trailing "/".
  if (/\s\/\s/.test(text)) {
    const slashParts = text.split(/\s*\/\s*/).map((part) => part.trim()).filter(Boolean);
    if (slashParts.length >= 2) {
      const shortParts = slashParts.map((part) => clampWords(titleCasePreserveAcronyms(part), 2, 14));
      text = shortParts.join(" / ");
      if (text.length > SOFT_CHARS + 10) text = shortParts.slice(0, 3).join(" / ");
    }
  } else {
    text = titleCasePreserveAcronyms(text);
    text = clampWords(text);
  }

  // Never leave a dangling arrow, slash, or operator from a truncated chain.
  text = text
    .replace(/\s*(?:→|->|←|<-|⇒|⇐|>|\/)\s*$/g, "")
    .replace(/\s+&\s*$/, "")
    .replace(/,\s*$/, "")
    .trim();

  // Keep known process chains intact when clamping would break them.
  if (/^fetch\b/i.test(rawTitle) && /execute/i.test(rawTitle)) {
    return "Fetch-Decode-Execute";
  }

  return text || tidyDashes(rawTitle);
}

/** Unit headers: keep Roman numeral, replace long subtitle. */
export function shortenUnitForSidebar(rawTitle: string, alias?: string) {
  if (alias) return alias;
  const match = rawTitle.trim().match(/^([IVXLCDM]+)\.\s*(.+)$/i);
  if (!match) return shortenForSidebar(rawTitle);
  const roman = match[1].toUpperCase();
  const short = shortenForSidebar(match[2]);
  return `Unit ${roman}. ${short}`;
}
