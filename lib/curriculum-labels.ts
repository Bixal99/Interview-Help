/** User-facing curriculum vocabulary: Unit → Chapter → Section. */

export function sectionDocumentTitle(sectionId: string, title: string) {
  const id = sectionId.trim();
  const name = title.trim();
  if (!id) return name;
  if (!name) return id;
  const idPrefix = id.toLowerCase();
  if (name.toLowerCase().startsWith(idPrefix)) return name;
  return `${id} ${name}`;
}

export function chapterDocumentTitle(chapterNumber: string, title: string) {
  return sectionDocumentTitle(chapterNumber, title);
}

/** Turn story-map headings like "V. Data structures" into "Unit V. Data structures". */
export function unitDisplayTitle(title: string) {
  const trimmed = title.trim();
  if (!trimmed) return trimmed;
  if (/^unit\b/i.test(trimmed)) return trimmed;
  const match = trimmed.match(/^([IVXLCDM]+)\.\s*(.+)$/i);
  if (match) return `Unit ${match[1]}. ${match[2]}`;
  return trimmed;
}

/** One-line chapter preview from the parsed phase goal. */
export function chapterLearnLine(goal?: string) {
  if (!goal?.trim()) return null;
  const text = goal.replace(/[\u2013\u2014]/g, ",").replace(/\s{2,}/g, " ").trim();
  const main = text.split(/\s+-\s+/)[0]?.trim() ?? text;
  if (main.length <= 200) return main;
  return `${main.slice(0, 197).trim()}…`;
}

/** Split "Unit I. Before You Write Code" into badge + name for checkpoint headers. */
export function parseUnitHeading(unitTitle: string) {
  const display = unitDisplayTitle(unitTitle);
  const match = /^Unit\s+([IVXLCDM]+)\.\s*(.+)$/i.exec(display);
  if (match) {
    return { mark: `Unit ${match[1]}`, name: match[2].trim() };
  }
  return { mark: null, name: display };
}
