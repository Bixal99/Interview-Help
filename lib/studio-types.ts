import type { ProjectArtifactKind } from "./parse-project-brief";

export type ProjectStudioItem = {
  id: string;
  phaseId: string;
  chapterNumber: string;
  unitId: string;
  unitTitle: string;
  kind: ProjectArtifactKind;
  title: string;
  intro: string;
  topic: string | null;
  tech: string[];
  href: string;
};

export type ProjectStudioCourse = {
  slug: string;
  shortName: string;
  barLabel: string;
  description: string;
  items: ProjectStudioItem[];
};
