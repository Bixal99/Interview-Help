import { describe, expect, it } from "vitest";
import {
  createFile,
  createFolder,
  deleteNode,
  emptyProject,
  fromSingleFile,
  isProjectVfs,
  monacoLanguageForPath,
  readFile,
  renameNode,
  setEntryFile,
  toRunnerInput,
  toTree,
  writeFile,
} from "../lib/code-playground/project-fs";
import { deserializeSource, isSourceFiles, serializeSource } from "../lib/code-playground/source";
import { requireFileSource, requireStringSource } from "../lib/code-playground/source-guards";

import type { ProjectVfs } from "../lib/code-playground/types";

const fixture: ProjectVfs = {
  kind: "project" as const,
  entryFile: "main.py",
  folders: ["src"],
  files: {
    "main.py": "from src.util import greet\nprint(greet())\n",
    "src/util.py": "def greet():\n    return 'ok'\n",
    "src/__init__.py": "",
  },
};

describe("project filesystem", () => {
  it("creates nested files and folders", () => {
    let vfs = fromSingleFile("main.py", "print(1)");
    vfs = createFolder(vfs, "src");
    vfs = createFile(vfs, "src/util.py", "x = 1");
    expect(vfs.folders).toContain("src");
    expect(readFile(vfs, "src/util.py")).toBe("x = 1");
    expect(toTree(vfs).some((node) => node.path === "src" && node.kind === "folder")).toBe(true);
  });

  it("renames files and folders recursively", () => {
    let vfs = structuredClone(fixture);
    vfs = renameNode(vfs, "src/util.py", "src/helpers.py");
    expect(vfs.files["src/helpers.py"]).toContain("greet");
    expect(vfs.files["src/util.py"]).toBeUndefined();
    vfs = renameNode(vfs, "src", "lib");
    expect(vfs.files["lib/helpers.py"]).toContain("greet");
    expect(vfs.folders).toContain("lib");
    expect(vfs.folders).not.toContain("src");
  });

  it("deletes files and folders and keeps an entry file", () => {
    let vfs = structuredClone(fixture);
    vfs = deleteNode(vfs, "src/util.py");
    expect(vfs.files["src/util.py"]).toBeUndefined();
    vfs = deleteNode(vfs, "src");
    expect(vfs.files["src/__init__.py"]).toBeUndefined();
    expect(vfs.entryFile).toBe("main.py");
    vfs = deleteNode(vfs, "main.py");
    expect(vfs.entryFile).toBe("");
  });

  it("writes file contents without dropping other files", () => {
    const vfs = writeFile(fixture, "main.py", "print('hi')");
    expect(readFile(vfs, "main.py")).toBe("print('hi')");
    expect(readFile(vfs, "src/util.py")).toContain("greet");
  });

  it("rejects unsafe paths", () => {
    const vfs = emptyProject("main.py");
    expect(() => createFile(vfs, "../secret.py")).toThrow(/Invalid path/);
    expect(() => createFolder(vfs, "/abs")).toThrow(/Invalid path/);
  });

  it("sets the entry file", () => {
    const vfs = setEntryFile(fixture, "src/util.py");
    expect(vfs.entryFile).toBe("src/util.py");
  });
});

describe("source serialization", () => {
  it("keeps single-file and web drafts", () => {
    expect(deserializeSource("print(1)")).toBe("print(1)");
    const web = { html: "<h1>Hi</h1>", css: "h1{}", javascript: "console.log(1)" };
    expect(isSourceFiles(web)).toBe(true);
    expect(isProjectVfs(web)).toBe(false);
    expect(deserializeSource(serializeSource(web))).toEqual(web);
  });

  it("round-trips a project VFS", () => {
    expect(isProjectVfs(fixture)).toBe(true);
    expect(isSourceFiles(fixture)).toBe(false);
    expect(deserializeSource(serializeSource(fixture))).toEqual(fixture);
  });

  it("maps runners to string, web, or project input", () => {
    expect(toRunnerInput("print(1)")).toEqual({ mode: "string", code: "print(1)" });
    expect(toRunnerInput({ html: "a", css: "b", javascript: "c" })).toEqual({
      mode: "web",
      files: { html: "a", css: "b", javascript: "c" },
    });
    expect(toRunnerInput(fixture)).toMatchObject({ mode: "project", entryFile: "main.py" });
    expect(requireStringSource(fixture)).toContain("from src.util");
    expect(requireFileSource(fixture).html).toContain("from src.util");
  });

  it("picks monaco languages from file extensions", () => {
    expect(monacoLanguageForPath("src/util.py")).toBe("python");
    expect(monacoLanguageForPath("main.c")).toBe("c");
    expect(monacoLanguageForPath("app.js")).toBe("javascript");
    expect(monacoLanguageForPath("index.html")).toBe("html");
  });
});
