import type { Metadata } from "next";
import Link from "next/link";
import { InnerPage } from "@/components/inner-page";
import { getAllProjects } from "@/lib/content";
import { catalogBySlug } from "@/lib/course-catalog";
import { slugForProjectPrefix } from "@/lib/parse-projects";

export const metadata: Metadata = { title: "Projects", description: "Phase projects grouped by course." };

export default function ProjectsPage() {
  const projects = getAllProjects();
  const grouped = new Map<string, typeof projects>();
  for (const project of projects) {
    const slug = slugForProjectPrefix(project.coursePrefix);
    if (!slug) continue;
    const list = grouped.get(slug) ?? [];
    list.push(project);
    grouped.set(slug, list);
  }
  return (
    <InnerPage title="Projects" description="Each phase has its own project page. Mark it complete there before the next phase unlocks.">
      {[...grouped.entries()].map(([slug, items]) => (
        <section key={slug} className="mt-10 first:mt-0">
          <h2 className="text-2xl font-bold">{catalogBySlug[slug]?.shortName ?? slug}</h2>
          <ul className="mt-3 space-y-1">
            {items.map((project) => (
              <li key={project.id}>
                <Link href={`/projects/${slug}/phase/${project.phaseId}`} className="text-accent underline">{project.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </InnerPage>
  );
}
