import { describe, expect, it } from "vitest";
import { convertMarkdownHref, extractFencedBlocks, extractHeadings, extractYouTubeInfo, githubSlug, isExternalHref } from "../lib/content-utils";

describe("content utilities", () => {
  it("generates stable GitHub-style heading slugs", () => {
    expect(githubSlug("Phase 4 - Branching & Rebase")).toBe("phase-4-branching-rebase");
    expect(githubSlug("$O(n \\log n)$")).toBe("on-log-n");
  });

  it("extracts real headings but preserves hashes inside code fences", () => {
    const markdown = "# Course\n```bash\n# not a heading\n```\n# PHASE 1 - Start\n## 1.1 Topic";
    const headings = extractHeadings(markdown);
    expect(headings.map((item) => item.text)).toEqual(["Course", "PHASE 1 - Start", "1.1 Topic"]);
    expect(headings[1].phase).toBe(1);
  });

  it("maps Markdown files and deep fragments to stable routes", () => {
    expect(convertMarkdownHref("./Git.md#phase-4---branching")).toBe("/courses/git/phase/4");
    expect(convertMarkdownHref("cloud.md#phase-12")).toBe("/courses/cloud/phase/12");
    expect(convertMarkdownHref("./Git.md#phase-4---branching", "content/roadmaps/CS.md")).toBe("/courses/git/phase/4");
    expect(convertMarkdownHref("../roadmaps/Git.md", "content/guides/Projects.md")).toBe("/courses/git");
    expect(convertMarkdownHref("..\\guides\\Projects.md", "content/roadmaps/Web.md")).toBe("/projects");
    expect(convertMarkdownHref("../roadmaps/Git%2Emd#phase-4---branching", "content/guides/Interview.md")).toBe("/courses/git/phase/4");
    expect(convertMarkdownHref("./data/Job_Tracker.xlsx", "README.md")).toBe("/downloads/job-tracker");
    expect(convertMarkdownHref("./content/roadmaps", "README.md")).toBe("/courses");
    expect(convertMarkdownHref("./content/templates", "README.md")).toBe("/cv-template");
    expect(convertMarkdownHref("https://example.com/guide.md")).toBe("https://example.com/guide.md");
    expect(convertMarkdownHref("./README.md", "content/roadmaps/CS.md")).toBe("./README.md");
  });

  it("extracts video and playlist identifiers safely", () => {
    expect(extractYouTubeInfo("https://youtu.be/QXjU9qTsYCc")?.videoId).toBe("QXjU9qTsYCc");
    expect(extractYouTubeInfo("https://www.youtube.com/playlist?list=PLhQjrBD2T380F_inVRXMIHCqLaNUd7bN4")?.kind).toBe("playlist");
    expect(extractYouTubeInfo("https://example.com/watch?v=fake")).toBeNull();
  });

  it("detects Mermaid and preserves ASCII source byte-for-byte", () => {
    const source = "```mermaid\ngraph TD\n A-->B\n```\n```text\n+--+\n|A |\n+--+\n```";
    const blocks = extractFencedBlocks(source);
    expect(blocks[0]).toMatchObject({ language: "mermaid", source: "graph TD\n A-->B" });
    expect(blocks[1].source).toBe("+--+\n|A |\n+--+");
  });

  it("parses playground metadata from fenced code info", () => {
    const source = "```python playground=python-numeric-types\nprint(1)\n```";
    expect(extractFencedBlocks(source)[0]).toMatchObject({
      language: "python",
      meta: "playground=python-numeric-types",
      playgroundId: "python-numeric-types",
      source: "print(1)",
    });
  });

  it("distinguishes external resources", () => {
    expect(isExternalHref("https://developer.mozilla.org")).toBe(true);
    expect(isExternalHref("/courses/git")).toBe(false);
  });
});
