/** Odoo sidebar presentation labels only — does not change course content or routes. */

const UNIT_LABELS: Record<string, string> = {
  "unit-1": "UNIT I · BUSINESS & ERP",
  "unit-2": "UNIT II · ODOO ARCHITECTURE",
  "unit-3": "UNIT III · FIRST ODOO MODULE",
  "unit-4": "UNIT IV · BUSINESS DATA MODELS",
  "unit-5": "UNIT V · ODOO ORM",
  "unit-6": "UNIT VI · BUSINESS RULES & WORKFLOWS",
  "unit-7": "UNIT VII · USER INTERFACE",
  "unit-8": "UNIT VIII · SECURITY & MULTI-COMPANY",
  "unit-9": "UNIT IX · EXTENDING ODOO",
  "unit-10": "UNIT X · ADVANCED BUSINESS FEATURES",
  "unit-11": "UNIT XI · INTERNATIONALIZATION",
  "unit-12": "UNIT XII · WEB DEVELOPMENT",
  "unit-13": "UNIT XIII · APIS & INTEGRATIONS",
  "unit-14": "UNIT XIV · MODERN FRONTEND / OWL",
  "unit-15": "UNIT XV · FILES & ATTACHMENTS",
  "unit-16": "UNIT XVI · POSTGRESQL & PERFORMANCE",
  "unit-17": "UNIT XVII · TESTING & DEBUGGING",
  "unit-18": "UNIT XVIII · CLI & TOOLING",
  "unit-19": "UNIT XIX · DEPLOYMENT & OPERATIONS",
  "unit-20": "UNIT XX · UPGRADES & MIGRATIONS",
  "unit-21": "UNIT XXI · FUNCTIONAL ODOO",
  "unit-22": "UNIT XXII · REAL ODOO ENGINEERING",
  "unit-23": "UNIT XXIII · ENGINEERING CAPSTONE",
  "unit-24": "UNIT XXIV · INTERVIEW READINESS",
};

/** Non-clickable group headings inserted before these topic ids (chapter 96). */
export const ODOO_TOPIC_SEPARATORS: Record<string, string> = {
  "96.1": "KNOWLEDGE REVIEW",
  "96.45": "LIVE ENGINEERING",
  "96.49": "FINAL ASSESSMENT",
};

function titleCasePreserveTokens(value: string) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => {
      if (/^[A-Z0-9]{2,}(?:[./][A-Z0-9]+)*$/i.test(word) && /[0-9_]/.test(word)) return word;
      if (/^(ERP|CRM|ORM|OWL|API|XML|HTML|HTTP|HTTPS|SQL|CLI|PDF|UI|UX|HR|RFQ|POS|OAuth|JSON|RPC|CSRF|SEO|CI|DNS|TLS|CPU|N\+1)$/i.test(word)) {
        return word.toUpperCase().replace("N+1", "N+1");
      }
      if (/^(Odoo\.sh|psql|ir\.[a-z.]+|res\.[a-z.]+|mail\.[a-z.]+|stock\.[a-z.]+|sale\.[a-z.]+|account\.[a-z.]+|product\.[a-z.]+|hr\.[a-z.]+|project\.[a-z.]+|crm\.[a-z.]+|purchase\.[a-z.]+)$/i.test(word)) {
        return word;
      }
      if (word.includes(".") && /^[a-z0-9_.]+$/i.test(word)) return word.toLowerCase();
      if (word.includes("/")) {
        return word
          .split("/")
          .map((part) => (part ? part[0]!.toUpperCase() + part.slice(1).toLowerCase() : part))
          .join("/");
      }
      if (word.includes("-")) {
        return word
          .split("-")
          .map((part) => (part ? part[0]!.toUpperCase() + part.slice(1).toLowerCase() : part))
          .join("-");
      }
      if (!/^[A-Za-z]/.test(word)) return word;
      return word[0]!.toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ")
    .replace(/\bVs\b/g, "vs")
    .replace(/\bAnd\b/g, "&");
}

export function odooUnitSidebarLabel(unitId: string, fallbackTitle: string) {
  if (UNIT_LABELS[unitId]) return UNIT_LABELS[unitId];
  const match = /^(?:UNIT|Unit)\s+([IVXLCDM]+)\s*:\s*(.+)$/i.exec(fallbackTitle.trim());
  if (match) return `UNIT ${match[1].toUpperCase()} · ${titleCasePreserveTokens(match[2]).toUpperCase()}`;
  return fallbackTitle.toUpperCase();
}

/** "CHAPTER 1: WHAT IS ERP?" → "What Is ERP?" */
export function odooChapterSidebarLabel(title: string) {
  const stripped = title.replace(/^(?:CHAPTER|CH)\s*\d+\s*[:.–-]\s*/i, "").trim();
  return titleCasePreserveTokens(stripped || title);
}

export function odooTopicSidebarLabel(title: string) {
  return titleCasePreserveTokens(title.trim());
}
