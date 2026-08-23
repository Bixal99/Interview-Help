import { describe, expect, it } from "vitest";
import { CS_PROJECTS_REGISTRY, getCSProjectInfo } from "../lib/cs-projects-registry";
import { parseProjectsDocument } from "../lib/parse-projects";
import { parseProjectBrief } from "../lib/parse-project-brief";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (sourcePath: string) => fs.readFileSync(path.join(root, sourcePath), "utf8");

describe("105 Computer Science Chapter Projects and Solutions", () => {
  it("has complete project registry entries for all 105 chapters", () => {
    expect(Object.keys(CS_PROJECTS_REGISTRY).length).toBe(105);
    for (let i = 1; i <= 105; i++) {
      const info = getCSProjectInfo(i);
      expect(info).toBeDefined();
      expect(info?.chapter).toBe(i);
      expect(info?.chapterTitle).toBeTruthy();
      expect(info?.projectTitle).toBeTruthy();
      expect(info?.format).toBeTruthy();
      expect(info?.solutionMarkdown).toBeTruthy();
      expect(info?.solutionMarkdown.length).toBeGreaterThan(30);
      if (info?.workspaceType === "compiler") {
        expect(info.starterCode).toBeTruthy();
        expect(info.starterCode.length).toBeGreaterThan(20);
      }
    }
  });

  it("correctly categorizes written/conceptual vs coding formats", () => {
    // Early written foundations
    expect(getCSProjectInfo(1)?.workspaceType).toBe("notepad");
    expect(getCSProjectInfo(2)?.workspaceType).toBe("notepad");
    expect(getCSProjectInfo(3)?.workspaceType).toBe("notepad");
    expect(getCSProjectInfo(4)?.workspaceType).toBe("notepad");
    expect(getCSProjectInfo(5)?.workspaceType).toBe("notepad");

    // Early coding
    expect(getCSProjectInfo(7)?.workspaceType).toBe("compiler");
    expect(getCSProjectInfo(8)?.workspaceType).toBe("compiler");
    expect(getCSProjectInfo(9)?.workspaceType).toBe("compiler");
    expect(getCSProjectInfo(10)?.workspaceType).toBe("compiler");

    // Math & proofs (written)
    expect(getCSProjectInfo(16)?.workspaceType).toBe("notepad");
    expect(getCSProjectInfo(17)?.workspaceType).toBe("notepad");
    expect(getCSProjectInfo(18)?.workspaceType).toBe("notepad");

    // Middle chapters
    expect(getCSProjectInfo(22)?.workspaceType).toBe("compiler");
    expect(getCSProjectInfo(32)?.workspaceType).toBe("compiler");
    expect(getCSProjectInfo(55)?.workspaceType).toBe("notepad");
    expect(getCSProjectInfo(80)?.workspaceType).toBe("compiler");

    // Late interview drills and system design
    expect(getCSProjectInfo(88)?.workspaceType).toBe("notepad");
    expect(getCSProjectInfo(102)?.workspaceType).toBe("notepad");
    expect(getCSProjectInfo(103)?.workspaceType).toBe("notepad");
    expect(getCSProjectInfo(104)?.workspaceType).toBe("notepad");
    expect(getCSProjectInfo(105)?.workspaceType).toBe("notepad");
  });

  it("has exactly 105 projects in computer-science.md catalog", () => {
    const csProjects = parseProjectsDocument(
      read("content/projects/computer-science.md"),
      "content/projects/computer-science.md"
    );
    expect(csProjects).toHaveLength(105);
    for (let i = 1; i <= 105; i++) {
      const p = csProjects.find((proj) => proj.phaseId === String(i));
      expect(p).toBeDefined();
      const brief = parseProjectBrief(p!.markdown);
      expect(brief.title).toBeTruthy();
      expect(brief.deliverables.length).toBeGreaterThan(0);
      expect(brief.spec.length).toBeGreaterThan(0);
    }
  });
});
