"use client";

import type { PlaygroundSource } from "@/lib/code-playground/types";

function formatSolution(solution: PlaygroundSource): string {
  if (typeof solution === "string") return solution;
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
