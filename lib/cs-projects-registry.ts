export type CSProjectInfo = {
  workspaceType: "notepad" | "compiler";
  problemStatement?: string;
  projectTitle?: string;
  solutionMarkdown?: string;
  chapter?: number;
  starterCode?: string;
  language?: string;
};

/** Stub so project studio UI still compiles after CS catalogs were removed. */
export function getCSProjectInfo(_chapter: number): CSProjectInfo | null {
  return null;
}
