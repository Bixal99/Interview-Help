import { describe, expect, it } from "vitest";
import { isProjectVfs } from "../lib/code-playground/project-fs";
import { getProjectStarter } from "../lib/project-starters";
import { miniExpressionProject } from "../lib/project-starters/mini-expression-runtime";
import type { ProjectBrief } from "../lib/parse-project-brief";

const emptyBrief: ProjectBrief = {
  title: "Fallback",
  kind: "code",
  chapterOutcome: "Practice testing",
  lessonCoverage: [],
  topic: "testing",
  intro: "",
  spec: ["Do the thing"],
  deliverables: ["Working result"],
  tech: [],
  steps: ["Create src, tests, and examples folders"],
  validation: ["Normal case"],
  completionCriteria: ["Done"],
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

  it("returns file trees only for explicitly registered starters", () => {
    const phase5 = getProjectStarter("cs-phase-5-project", emptyBrief);
    const phase31 = getProjectStarter("cs-phase-31-project", emptyBrief);
    const other = getProjectStarter("unknown-project", emptyBrief);
    expect(phase5 && isProjectVfs(phase5.project)).toBe(true);
    expect(phase31 && isProjectVfs(phase31.project)).toBe(true);
    expect(other).toBeNull();
  });
});
