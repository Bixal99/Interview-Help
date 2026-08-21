import { describe, expect, it } from "vitest";
import { isProjectVfs } from "../lib/code-playground/project-fs";
import { getProjectStarter } from "../lib/project-starters";
import { miniExpressionProject } from "../lib/project-starters/mini-expression-runtime";
import type { ProjectBrief } from "../lib/parse-project-brief";

const emptyBrief: ProjectBrief = {
  title: "Fallback",
  topic: "testing",
  intro: "",
  spec: ["Do the thing"],
  tech: [],
  steps: ["Create src, tests, and examples folders"],
  gitBody: null,
};

describe("project starters", () => {
  it("ships Mini Expression Runtime as a runnable src/tests/examples tree", () => {
    const project = miniExpressionProject();
    expect(isProjectVfs(project)).toBe(true);
    expect(project.entryFile).toBe("src/main.py");
    expect(project.folders).toEqual(expect.arrayContaining(["src", "tests", "examples"]));
    expect(project.files["src/tokenizer.py"]).toContain("def tokenize");
    expect(project.files["src/parser.py"]).toContain("def parse");
    expect(project.files["src/evaluator.py"]).toContain("def evaluate");
    expect(project.files["examples/normal.txt"]).toContain("2 * (3 + 4)");
    expect(project.files["tests/test_runtime.py"]).toContain("def test_normal");
  });

  it("turns every project starter into a file tree", () => {
    const phase5 = getProjectStarter("cs-phase-5-project", emptyBrief);
    const phase31 = getProjectStarter("cs-phase-31-project", emptyBrief);
    const other = getProjectStarter("unknown-project", emptyBrief);
    expect(isProjectVfs(phase5.project)).toBe(true);
    expect(isProjectVfs(phase31.project)).toBe(true);
    expect(isProjectVfs(other.project)).toBe(true);
    expect(other.project.entryFile).toBe("src/main.py");
    expect(other.project.folders).toEqual(expect.arrayContaining(["src", "tests", "examples"]));
  });
});
