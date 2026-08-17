import type { Metadata } from "next";
import { ReaderLayout } from "@/components/reader-layout";
import { getRepositoryReadme } from "@/lib/content";

export const metadata: Metadata = { title: "About", description: "How the Interview Help learning library works." };
export default function AboutPage() { const doc = getRepositoryReadme(); return <ReaderLayout title="About Interview Help" markdown={doc.markdown} sourcePath={doc.sourcePath} headings={doc.headings} />; }
