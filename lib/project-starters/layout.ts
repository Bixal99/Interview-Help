import type { ProjectVfs } from "../code-playground/types";
import { parentFolders } from "../code-playground/project-fs";

export function projectFromFiles(
  entryFile: string,
  files: Record<string, string>,
  extraFolders: string[] = [],
): ProjectVfs {
  const folders = [
    ...new Set([
      ...extraFolders,
      ...Object.keys(files).flatMap((path) => parentFolders(path)),
    ]),
  ].sort();
  return {
    kind: "project",
    entryFile,
    files,
    folders,
  };
}

export function projectFromSingleScript(code: string, extraFiles: Record<string, string> = {}): ProjectVfs {
  return projectFromFiles(
    "src/main.py",
    {
      "src/__init__.py": "",
      "src/main.py": code,
      "tests/test_starter.py": `def test_placeholder():
    assert True


if __name__ == "__main__":
    test_placeholder()
    print("Add real tests in this file. pytest will collect test_ functions.")
`,
      "examples/sample.txt": "Replace this file with a tiny input for this project.\n",
      ...extraFiles,
    },
    ["src", "tests", "examples"],
  );
}
