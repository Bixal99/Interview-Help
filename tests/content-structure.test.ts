import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { contentRegistry, courseCatalog, guideRegistry, roadmapRegistry } from "../lib/course-catalog";
import { convertMarkdownHref } from "../lib/content-utils";
import { PROJECT_ROOT, projectPath } from "../lib/paths";

const expectedRoutes: Record<string, string> = {
  "AI.md": "/courses/artificial-intelligence",
  "Cloud.md": "/courses/cloud",
  "CS.md": "/courses/computer-science",
  "Data.md": "/courses/data",
  "DevOps.md": "/courses/devops",
  "Git.md": "/courses/git",
  "ICT_Cybersecurity.md": "/courses/cybersecurity",
  "IT_Administration.md": "/courses/it-administration",
  "Networks.md": "/courses/networks",
  "ODOO.md": "/courses/odoo",
  "Web.md": "/courses/web-development",
};

describe("content structure", () => {
  it("keeps every registered source on disk with unique slugs", () => {
    for (const entry of contentRegistry) expect(fs.existsSync(projectPath(entry.sourcePath)), entry.sourcePath).toBe(true);
    expect(new Set(contentRegistry.map((entry) => entry.slug)).size).toBe(contentRegistry.length);
  });

  it("excludes repository indexes and old root source locations", () => {
    expect(contentRegistry.some((entry) => path.basename(entry.sourcePath).toLowerCase() === "readme.md")).toBe(false);
    expect(roadmapRegistry.some((entry) => entry.sourcePath === "README.md")).toBe(false);
    for (const entry of contentRegistry) expect(fs.existsSync(path.join(PROJECT_ROOT, path.basename(entry.sourcePath)))).toBe(false);
  });

  it("loads guides from content/guides", () => {
    expect(guideRegistry.find((entry) => entry.slug === "projects")?.sourcePath).toBe("content/guides/Projects.md");
    expect(guideRegistry.find((entry) => entry.slug === "interview")?.sourcePath).toBe("content/guides/Interview.md");
  });

  it("keeps Computer Science as one catalog course without a separate OOP source", () => {
    expect(courseCatalog.some((course) => course.slug === "computer-science")).toBe(true);
    expect(courseCatalog.some((course) => course.slug === "object-oriented-programming")).toBe(false);
    expect(roadmapRegistry.some((entry) => entry.sourcePath.endsWith("OOP.md"))).toBe(false);
    expect(fs.existsSync(projectPath("content/roadmaps/OOP.md"))).toBe(false);
  });

  it("preserves every public roadmap route", () => {
    expect(Object.fromEntries(roadmapRegistry.map((entry) => [path.basename(entry.sourcePath), entry.route]))).toEqual(expectedRoutes);
  });

  it("resolves representative cross-folder and deep links", () => {
    expect(convertMarkdownHref("../guides/Projects.md", "content/roadmaps/Web.md")).toBe("/projects");
    expect(convertMarkdownHref("../guides/Interview.md", "content/roadmaps/CS.md")).toBe("/interview");
    expect(convertMarkdownHref("../roadmaps/Git.md#phase-4---branching", "content/guides/Projects.md")).toBe("/courses/git/phase/4");
  });
});
