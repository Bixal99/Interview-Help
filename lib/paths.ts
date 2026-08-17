import path from "node:path";

export const PROJECT_ROOT = process.cwd();
export const CONTENT_ROOT = path.join(PROJECT_ROOT, "content");
export const ROADMAPS_ROOT = path.join(CONTENT_ROOT, "roadmaps");
export const GUIDES_ROOT = path.join(CONTENT_ROOT, "guides");
export const TEMPLATES_ROOT = path.join(CONTENT_ROOT, "templates");
export const DATA_ROOT = path.join(PROJECT_ROOT, "data");

export function projectPath(sourcePath: string): string {
  return path.join(/* turbopackIgnore: true */ PROJECT_ROOT, ...sourcePath.replace(/\\/g, "/").split("/"));
}
