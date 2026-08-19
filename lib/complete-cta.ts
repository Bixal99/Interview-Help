import { convertMarkdownHref } from "./content-utils";

export type CompleteAction = { label: string; href: string };
export type CompleteCta = { title: string; actions: CompleteAction[] };

export function extractCompleteCta(markdown: string, sourcePath: string): { markdown: string; cta: CompleteCta | null } {
  let cta: CompleteCta | null = null;
  const next = markdown.replace(/^>\s*\*\*([^*]*complete\?)\*\*\s*(.+)$/gim, (_full, title: string, rest: string) => {
    if (cta) return "";
    const actions = [...rest.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)].map((match) => ({
      label: match[1].trim(),
      href: convertMarkdownHref(match[2], sourcePath),
    }));
    if (actions.length) cta = { title: String(title).trim(), actions };
    return "";
  }).replace(/\n---\s*$/g, "").replace(/\n{3,}/g, "\n\n").trim();
  return { markdown: next, cta };
}
