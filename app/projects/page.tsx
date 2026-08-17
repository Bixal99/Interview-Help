import type { Metadata } from "next";
import { ReaderLayout } from "@/components/reader-layout";
import { getDocument } from "@/lib/content";

export const metadata: Metadata = { title: "Projects", description: "Phase projects and portfolio capstones for every roadmap." };
export default function ProjectsPage() { const doc = getDocument("Projects.md"); return <ReaderLayout title="Projects playbook" markdown={doc.markdown} headings={doc.headings} />; }
