import type { PlaygroundSource, PlaygroundSourceFiles, ProjectVfs } from "./types";

export type ProjectTreeNode = {
  name: string;
  path: string;
  kind: "file" | "folder";
  children: ProjectTreeNode[];
};

const PATH_SEGMENT = /^[A-Za-z0-9._-]+$/;

export function isProjectVfs(source: PlaygroundSource): source is ProjectVfs {
  return typeof source === "object" && source !== null && "kind" in source && source.kind === "project";
}

export function emptyProject(entryFile: string, content = ""): ProjectVfs {
  const file = normalizePath(entryFile);
  return {
    kind: "project",
    entryFile: file,
    files: { [file]: content },
    folders: parentFolders(file),
  };
}

export function fromSingleFile(path: string, code: string): ProjectVfs {
  return emptyProject(path, code);
}

export function normalizePath(value: string): string {
  const trimmed = value.trim().replace(/\\/g, "/").replace(/\/+$/, "");
  if (!trimmed || trimmed.startsWith("/") || /^[A-Za-z]:/.test(trimmed)) {
    throw new Error(`Invalid path: ${value}`);
  }
  const segments = trimmed.split("/");
  for (const segment of segments) {
    if (!segment || segment === "." || segment === ".." || !PATH_SEGMENT.test(segment)) {
      throw new Error(`Invalid path: ${value}`);
    }
  }
  return segments.join("/");
}

export function parentFolders(path: string): string[] {
  const segments = normalizePath(path).split("/");
  const folders: string[] = [];
  for (let index = 1; index < segments.length; index += 1) {
    folders.push(segments.slice(0, index).join("/"));
  }
  return folders;
}

function uniqueFolders(folders: string[]): string[] {
  return [...new Set(folders.map((folder) => normalizePath(folder)))].sort();
}

function clone(vfs: ProjectVfs): ProjectVfs {
  return {
    kind: "project",
    entryFile: vfs.entryFile,
    files: { ...vfs.files },
    folders: [...vfs.folders],
  };
}

function ensureParents(vfs: ProjectVfs, path: string) {
  vfs.folders = uniqueFolders([...vfs.folders, ...parentFolders(path)]);
}

function fallbackEntry(vfs: ProjectVfs, previous: string): string {
  if (vfs.files[previous] != null) return previous;
  return Object.keys(vfs.files).sort()[0] ?? "";
}

export function createFile(vfs: ProjectVfs, path: string, content = ""): ProjectVfs {
  const file = normalizePath(path);
  if (vfs.files[file] != null) throw new Error(`File already exists: ${file}`);
  if (vfs.folders.includes(file)) throw new Error(`A folder already exists at ${file}`);
  const next = clone(vfs);
  next.files[file] = content;
  ensureParents(next, file);
  if (!next.entryFile) next.entryFile = file;
  return next;
}

export function createFolder(vfs: ProjectVfs, path: string): ProjectVfs {
  const folder = normalizePath(path);
  if (vfs.files[folder] != null) throw new Error(`A file already exists at ${folder}`);
  const next = clone(vfs);
  next.folders = uniqueFolders([...next.folders, folder, ...parentFolders(folder)]);
  return next;
}

export function writeFile(vfs: ProjectVfs, path: string, content: string): ProjectVfs {
  const file = normalizePath(path);
  if (vfs.files[file] == null) throw new Error(`File not found: ${file}`);
  const next = clone(vfs);
  next.files[file] = content;
  return next;
}

export function readFile(vfs: ProjectVfs, path: string): string {
  const file = normalizePath(path);
  const content = vfs.files[file];
  if (content == null) throw new Error(`File not found: ${file}`);
  return content;
}

export function deleteNode(vfs: ProjectVfs, path: string): ProjectVfs {
  const target = normalizePath(path);
  const next = clone(vfs);
  const isFolder = next.folders.includes(target) || Object.keys(next.files).some((file) => file.startsWith(`${target}/`));
  if (isFolder) {
    next.folders = next.folders.filter((folder) => folder !== target && !folder.startsWith(`${target}/`));
    for (const file of Object.keys(next.files)) {
      if (file === target || file.startsWith(`${target}/`)) delete next.files[file];
    }
  } else {
    if (next.files[target] == null) throw new Error(`Path not found: ${target}`);
    delete next.files[target];
  }
  next.entryFile = fallbackEntry(next, next.entryFile);
  return next;
}

export function renameNode(vfs: ProjectVfs, from: string, to: string): ProjectVfs {
  const source = normalizePath(from);
  const dest = normalizePath(to);
  if (source === dest) return vfs;
  const next = clone(vfs);
  const isFolder = next.folders.includes(source) || Object.keys(next.files).some((file) => file.startsWith(`${source}/`));

  if (isFolder) {
    if (dest === source || dest.startsWith(`${source}/`)) throw new Error("Cannot move a folder into itself.");
    const renamedFiles: Record<string, string> = {};
    for (const [file, content] of Object.entries(next.files)) {
      if (file === source || file.startsWith(`${source}/`)) {
        renamedFiles[dest + file.slice(source.length)] = content;
      } else {
        renamedFiles[file] = content;
      }
    }
    next.files = renamedFiles;
    next.folders = uniqueFolders(
      next.folders.map((folder) => (folder === source || folder.startsWith(`${source}/`) ? dest + folder.slice(source.length) : folder)),
    );
    if (next.entryFile === source || next.entryFile.startsWith(`${source}/`)) {
      next.entryFile = dest + next.entryFile.slice(source.length);
    }
    ensureParents(next, dest);
    return next;
  }

  if (next.files[source] == null) throw new Error(`Path not found: ${source}`);
  if (next.files[dest] != null) throw new Error(`File already exists: ${dest}`);
  next.files[dest] = next.files[source];
  delete next.files[source];
  if (next.entryFile === source) next.entryFile = dest;
  ensureParents(next, dest);
  return next;
}

export function setEntryFile(vfs: ProjectVfs, path: string): ProjectVfs {
  const file = normalizePath(path);
  if (vfs.files[file] == null) throw new Error(`File not found: ${file}`);
  return { ...clone(vfs), entryFile: file };
}

export function toTree(vfs: ProjectVfs): ProjectTreeNode[] {
  const root: ProjectTreeNode[] = [];

  function folderNode(path: string): ProjectTreeNode {
    const name = path.split("/").pop() ?? path;
    return { name, path, kind: "folder", children: [] };
  }

  function ensureFolder(path: string): ProjectTreeNode {
    const segments = path.split("/");
    let level = root;
    let current = "";
    let node: ProjectTreeNode | undefined;
    for (const segment of segments) {
      current = current ? `${current}/${segment}` : segment;
      node = level.find((item) => item.kind === "folder" && item.path === current);
      if (!node) {
        node = folderNode(current);
        level.push(node);
        level.sort(compareNodes);
      }
      level = node.children;
    }
    return node ?? folderNode(path);
  }

  for (const folder of [...vfs.folders].sort()) {
    ensureFolder(folder);
  }

  for (const file of Object.keys(vfs.files).sort()) {
    const parent = file.includes("/") ? file.slice(0, file.lastIndexOf("/")) : "";
    const name = file.split("/").pop() ?? file;
    const node: ProjectTreeNode = { name, path: file, kind: "file", children: [] };
    if (parent) ensureFolder(parent).children.push(node);
    else root.push(node);
  }

  function sortTree(nodes: ProjectTreeNode[]) {
    nodes.sort(compareNodes);
    for (const node of nodes) sortTree(node.children);
  }
  sortTree(root);
  return root;
}

function compareNodes(left: ProjectTreeNode, right: ProjectTreeNode) {
  if (left.kind !== right.kind) return left.kind === "folder" ? -1 : 1;
  return left.name.localeCompare(right.name);
}

export type RunnerInput =
  | { mode: "string"; code: string }
  | { mode: "web"; files: PlaygroundSourceFiles }
  | { mode: "project"; entryFile: string; files: Record<string, string> };

export function toRunnerInput(source: PlaygroundSource): RunnerInput {
  if (typeof source === "string") return { mode: "string", code: source };
  if (isProjectVfs(source)) return { mode: "project", entryFile: source.entryFile, files: source.files };
  return { mode: "web", files: source };
}

export function monacoLanguageForPath(path: string): string {
  const ext = path.split(".").pop()?.toLowerCase() ?? "";
  if (ext === "py") return "python";
  if (ext === "js" || ext === "mjs" || ext === "cjs") return "javascript";
  if (ext === "ts") return "typescript";
  if (ext === "html" || ext === "htm") return "html";
  if (ext === "css") return "css";
  if (ext === "c" || ext === "h") return "c";
  if (ext === "cpp" || ext === "cc" || ext === "cxx" || ext === "hpp") return "cpp";
  if (ext === "json") return "json";
  if (ext === "md") return "markdown";
  return "plaintext";
}

export function webFilesFromProject(vfs: ProjectVfs): PlaygroundSourceFiles {
  return {
    html: vfs.files["index.html"] ?? vfs.files[vfs.entryFile] ?? "",
    css: vfs.files["style.css"] ?? vfs.files["styles.css"] ?? "",
    javascript: vfs.files["script.js"] ?? vfs.files["main.js"] ?? vfs.files["index.js"] ?? "",
  };
}
