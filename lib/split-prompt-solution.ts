export function splitPromptAndSolution(markdown: string): { prompt: string; solution: string | null } {
  const match = /^(#{1,6})\s+.*complete solution.*$/im.exec(markdown);
  if (!match || match.index == null) {
    return { prompt: markdown.trimEnd(), solution: null };
  }
  return {
    prompt: markdown.slice(0, match.index).trimEnd(),
    solution: markdown.slice(match.index).trim(),
  };
}

export function isPromptSolutionKind(kind: string) {
  return (
    kind === "chapter-exercise" ||
    kind === "chapter-project" ||
    kind === "unit-exercise" ||
    kind === "unit-project"
  );
}
