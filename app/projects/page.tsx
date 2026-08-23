import type { Metadata } from "next";
import { ProjectsStudio } from "@/components/projects-studio";
import { getProjectStudio } from "@/lib/content";

export const metadata: Metadata = { title: "Projects", description: "Chapter projects grouped by course." };

export default function ProjectsPage() {
  return <ProjectsStudio courses={getProjectStudio()} />;
}
