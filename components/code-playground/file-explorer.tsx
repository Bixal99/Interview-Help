"use client";

import { ChevronRight, FilePlus, FolderPlus, Pencil, Play, Trash2 } from "lucide-react";
import { useState, type KeyboardEvent } from "react";
import type { ProjectVfs } from "@/lib/code-playground/types";
import { createFile, createFolder, deleteNode, normalizePath, renameNode, setEntryFile, toTree, type ProjectTreeNode } from "@/lib/code-playground/project-fs";

function joinPath(parent: string, name: string) {
  return parent ? `${parent}/${name}` : name;
}

function parentOf(path: string) {
  return path.includes("/") ? path.slice(0, path.lastIndexOf("/")) : "";
}

function NameField({
  initial,
  onCommit,
  onCancel,
}: {
  initial: string;
  onCommit: (value: string) => void;
  onCancel: () => void;
}) {
  const [value, setValue] = useState(initial);

  function keyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      const next = value.trim();
      if (next) onCommit(next);
      else onCancel();
    }
    if (event.key === "Escape") {
      event.preventDefault();
      onCancel();
    }
  }

  return (
    <input
      className="ih-project-tree-input"
      value={value}
      autoFocus
      aria-label="Name"
      onChange={(event) => setValue(event.target.value)}
      onBlur={() => {
        const next = value.trim();
        if (next && next !== initial) onCommit(next);
        else onCancel();
      }}
      onKeyDown={keyDown}
    />
  );
}

type Draft =
  | { type: "rename"; path: string }
  | { type: "create-file"; parent: string }
  | { type: "create-folder"; parent: string }
  | { type: "delete"; path: string };

function TreeList({
  nodes,
  activePath,
  entryFile,
  collapsed,
  draft,
  onToggle,
  onOpen,
  onRename,
  onCreate,
  onDelete,
  onSetEntry,
  onStartRename,
  onStartDelete,
  onCancel,
}: {
  nodes: ProjectTreeNode[];
  activePath: string;
  entryFile: string;
  collapsed: Set<string>;
  draft: Draft | null;
  onToggle: (path: string) => void;
  onOpen: (path: string) => void;
  onRename: (path: string, name: string) => void;
  onCreate: (parent: string, name: string, kind: "file" | "folder") => void;
  onDelete: (path: string) => void;
  onSetEntry: (path: string) => void;
  onStartRename: (path: string) => void;
  onStartDelete: (path: string) => void;
  onCancel: () => void;
}) {
  return (
    <ul className="ih-project-tree">
      {nodes.map((node) => {
        const isFolder = node.kind === "folder";
        const isOpen = isFolder && !collapsed.has(node.path);
        const renaming = draft?.type === "rename" && draft.path === node.path;
        const deleting = draft?.type === "delete" && draft.path === node.path;
        const currentName = node.path.split("/").pop() ?? node.path;
        const creatingHere = Boolean(
          isFolder
          && isOpen
          && draft
          && (draft.type === "create-file" || draft.type === "create-folder")
          && draft.parent === node.path,
        );
        return (
          <li key={node.path}>
            <div className={`ih-project-tree-row${node.path === activePath ? " is-active" : ""}`}>
              {renaming ? (
                <NameField initial={currentName} onCommit={(name) => onRename(node.path, name)} onCancel={onCancel} />
              ) : isFolder ? (
                <button type="button" className={`ih-project-tree-name is-folder${isOpen ? " is-open" : ""}`} onClick={() => onToggle(node.path)}>
                  <ChevronRight size={12} className="ih-project-tree-chevron" />
                  <span>{node.name}</span>
                </button>
              ) : (
                <button type="button" className="ih-project-tree-name" onClick={() => onOpen(node.path)}>
                  <span>{node.name}</span>
                  {node.path === entryFile ? <span className="ih-project-entry">run</span> : null}
                </button>
              )}
              {deleting ? (
                <span className="ih-project-tree-confirm">
                  <button type="button" onClick={() => onDelete(node.path)}>Delete</button>
                  <button type="button" onClick={onCancel}>Keep</button>
                </span>
              ) : renaming ? null : (
                <span className="ih-project-tree-actions">
                  {node.kind === "file" && node.path !== entryFile ? (
                    <button type="button" title="Run this file" onClick={() => onSetEntry(node.path)}>
                      <Play size={12} />
                    </button>
                  ) : null}
                  <button type="button" title="Rename" onClick={() => onStartRename(node.path)}>
                    <Pencil size={12} />
                  </button>
                  <button type="button" title="Delete" onClick={() => onStartDelete(node.path)}>
                    <Trash2 size={12} />
                  </button>
                </span>
              )}
            </div>
            {isFolder && isOpen ? (
              <>
                {node.children.length ? (
                  <TreeList
                    nodes={node.children}
                    activePath={activePath}
                    entryFile={entryFile}
                    collapsed={collapsed}
                    draft={draft}
                    onToggle={onToggle}
                    onOpen={onOpen}
                    onRename={onRename}
                    onCreate={onCreate}
                    onDelete={onDelete}
                    onSetEntry={onSetEntry}
                    onStartRename={onStartRename}
                    onStartDelete={onStartDelete}
                    onCancel={onCancel}
                  />
                ) : null}
                {creatingHere && draft ? (
                  <div className="ih-project-tree-row is-draft">
                    <NameField
                      initial={draft.type === "create-file" ? "app.py" : "src"}
                      onCommit={(name) => onCreate(node.path, name, draft.type === "create-file" ? "file" : "folder")}
                      onCancel={onCancel}
                    />
                  </div>
                ) : null}
              </>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

export function FileExplorer({
  vfs,
  activePath,
  onChange,
  onOpen,
}: {
  vfs: ProjectVfs;
  activePath: string;
  onChange: (next: ProjectVfs) => void;
  onOpen: (path: string) => void;
}) {
  const tree = toTree(vfs);
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
  const [draft, setDraft] = useState<Draft | null>(null);
  const selectedFolder = vfs.files[activePath] != null ? parentOf(activePath) : (vfs.folders.includes(activePath) ? activePath : parentOf(activePath));

  function fail(error: unknown) {
    window.alert(error instanceof Error ? error.message : String(error));
  }

  function toggle(path: string) {
    setCollapsed((current) => {
      const next = new Set(current);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });
  }

  function expand(path: string) {
    if (!path) return;
    setCollapsed((current) => {
      const next = new Set(current);
      next.delete(path);
      return next;
    });
  }

  function addFile() {
    expand(selectedFolder);
    setDraft({ type: "create-file", parent: selectedFolder });
  }

  function addFolder() {
    expand(selectedFolder);
    setDraft({ type: "create-folder", parent: selectedFolder });
  }

  function createNamed(parent: string, name: string, kind: "file" | "folder") {
    try {
      const path = normalizePath(joinPath(parent, name));
      if (kind === "folder") {
        onChange(createFolder(vfs, path));
      } else {
        onChange(createFile(vfs, path));
        onOpen(path);
      }
      setDraft(null);
    } catch (error) {
      fail(error);
    }
  }

  function rename(path: string, name: string) {
    const parent = parentOf(path);
    try {
      const next = renameNode(vfs, path, joinPath(parent, name));
      onChange(next);
      if (vfs.files[path] != null) onOpen(joinPath(parent, name));
      setDraft(null);
    } catch (error) {
      fail(error);
    }
  }

  function remove(path: string) {
    try {
      const next = deleteNode(vfs, path);
      onChange(next);
      if (next.entryFile) onOpen(next.entryFile);
      setDraft(null);
    } catch (error) {
      fail(error);
    }
  }

  function markEntry(path: string) {
    try {
      onChange(setEntryFile(vfs, path));
    } catch (error) {
      fail(error);
    }
  }

  const rootDraft = Boolean(
    draft
    && (draft.type === "create-file" || draft.type === "create-folder")
    && !draft.parent,
  );

  return (
    <aside className="ih-project-explorer">
      <div className="ih-project-explorer-head">
        <span>Files</span>
        <span className="ih-project-explorer-actions">
          <button type="button" title="New file" onClick={addFile}>
            <FilePlus size={14} />
          </button>
          <button type="button" title="New folder" onClick={addFolder}>
            <FolderPlus size={14} />
          </button>
        </span>
      </div>
      {rootDraft && draft && (draft.type === "create-file" || draft.type === "create-folder") ? (
        <div className="ih-project-tree-row is-draft">
          <NameField
            initial={draft.type === "create-file" ? "app.py" : "src"}
            onCommit={(name) => createNamed("", name, draft.type === "create-file" ? "file" : "folder")}
            onCancel={() => setDraft(null)}
          />
        </div>
      ) : null}
      <TreeList
        nodes={tree}
        activePath={activePath}
        entryFile={vfs.entryFile}
        collapsed={collapsed}
        draft={draft}
        onToggle={toggle}
        onOpen={onOpen}
        onRename={rename}
        onCreate={createNamed}
        onDelete={remove}
        onSetEntry={markEntry}
        onStartRename={(path) => setDraft({ type: "rename", path })}
        onStartDelete={(path) => setDraft({ type: "delete", path })}
        onCancel={() => setDraft(null)}
      />
    </aside>
  );
}
