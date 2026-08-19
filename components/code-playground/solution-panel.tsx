"use client";

import { isProjectVfs } from "@/lib/code-playground/project-fs";
import type { PlaygroundSource } from "@/lib/code-playground/types";

function formatSolution(solution: PlaygroundSource): string {
  if (typeof solution === "string") return solution;
  if (isProjectVfs(solution)) {
    return Object.entries(solution.files)
      .sort(([left], [right]) => left.localeCompare(right))
      .flatMap(([path, content]) => [path, content, ""])
      .join("\n")
      .trimEnd();
  }
  return [
    "index.html",
    solution.html,
    "",
    "style.css",
    solution.css,
    "",
    "script.js",
    solution.javascript,
  ].join("\n");
}

export function SolutionPanel({ solution }: { solution: PlaygroundSource }) {
  return (
    <div className="ih-playground-solution">
      <div className="ih-playground-panel-head">
        <span>Solution</span>
      </div>
      <pre className="ih-playground-solution-body">{formatSolution(solution)}</pre>
    </div>
  );
}
