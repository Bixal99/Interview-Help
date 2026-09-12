function cleanLabel(raw: string) {
  return raw.replace(/^["'[\s]+|["'\]]+$/g, "").replace(/\s+/g, " ").trim();
}

function parseNodes(source: string) {
  const nodes = new Map<string, string>();
  for (const match of source.matchAll(/\b([A-Za-z][\w]*)\s*\[\s*"?([^\]"]+)"?\s*\]/g)) {
    nodes.set(match[1], cleanLabel(match[2]));
  }
  for (const match of source.matchAll(/\b([A-Za-z][\w]*)\s*\(\s*"?([^)"]+)"?\s*\)/g)) {
    if (!nodes.has(match[1])) nodes.set(match[1], cleanLabel(match[2]));
  }
  for (const match of source.matchAll(/\b([A-Za-z][\w]*)\s*\{\s*"?([^}"]+)"?\s*\}/g)) {
    if (!nodes.has(match[1])) nodes.set(match[1], cleanLabel(match[2]));
  }
  return nodes;
}

function parseEdges(source: string, nodes: Map<string, string>) {
  const outgoing = new Map<string, number>();
  const incoming = new Map<string, number>();
  for (const id of nodes.keys()) {
    outgoing.set(id, 0);
    incoming.set(id, 0);
  }
  const flat = source
    .replace(/([A-Za-z][\w]*)\s*(?:\[[^\]]*\]|\([^)]*\)|\{[^}]*\})/g, "$1")
    .replace(/\|[^|]+\|/g, " ");
  for (const match of flat.matchAll(/(?:[A-Za-z][\w]*\s*(?:<)?-+>\s*)+[A-Za-z][\w]*/g)) {
    const ids = match[0].match(/\b[A-Za-z][\w]*/g) ?? [];
    for (let index = 0; index < ids.length - 1; index += 1) {
      const from = ids[index] ?? "";
      const to = ids[index + 1] ?? "";
      outgoing.set(from, (outgoing.get(from) ?? 0) + 1);
      incoming.set(to, (incoming.get(to) ?? 0) + 1);
    }
  }
  return { outgoing, incoming };
}

/** Short topic title for a mermaid figure caption. */
export function mermaidFigureTitle(source: string) {
  const subgraphs = [...source.matchAll(/subgraph\s+[\w-]+\s*\["?([^"\]]+)"?\]/g)].map((match) => cleanLabel(match[1]));
  if (subgraphs.length === 1 && subgraphs[0]) return subgraphs[0];
  if (subgraphs.length > 1) {
    const preferred = subgraphs.find((title) => /system|enterprise|process|workflow|erp/i.test(title));
    if (preferred) return preferred;
    return subgraphs[subgraphs.length - 1] ?? "Diagram";
  }

  const nodes = parseNodes(source);
  const ids = [...nodes.keys()];
  if (!ids.length) return "Diagram";

  const { outgoing, incoming } = parseEdges(source, nodes);
  const sinks = ids.filter((id) => (outgoing.get(id) ?? 0) === 0 && (incoming.get(id) ?? 0) > 0);
  const sources = ids.filter((id) => (incoming.get(id) ?? 0) === 0 && (outgoing.get(id) ?? 0) > 0);

  if (sinks.length === 1 && sources.length >= 2) return nodes.get(sinks[0]) ?? "Diagram";
  if (sinks.length === 1 && sources.length === 1) {
    const start = nodes.get(sources[0]) ?? "";
    const end = nodes.get(sinks[0]) ?? "";
    if (start && end && start !== end) {
      const chained = `${start} to ${end}`;
      return chained.length > 72 ? end : chained;
    }
    return end || start || "Diagram";
  }
  if (sinks.length === 1) return nodes.get(sinks[0]) ?? "Diagram";
  const last = nodes.get(ids[ids.length - 1] ?? "") ?? "Diagram";
  return last.length > 72 ? last.slice(0, 69).trim() + "…" : last;
}
