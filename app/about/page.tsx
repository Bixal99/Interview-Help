import type { Metadata } from "next";
import { DocumentShell } from "@/components/document-shell";
import { getRepositoryReadme } from "@/lib/content";

export const metadata: Metadata = { title: "About", description: "How the Interview Help library works." };
export default function AboutPage() {
  const doc = getRepositoryReadme();
  return <DocumentShell title="About Interview Help" markdown={doc.markdown} sourcePath={doc.sourcePath} headings={doc.headings} />;
}
