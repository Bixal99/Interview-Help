export type ProjectStudioItem = {
  id: string;
  phaseId: string;
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
