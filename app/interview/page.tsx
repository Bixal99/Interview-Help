import type { Metadata } from "next";
import { DocumentShell } from "@/components/document-shell";
import { getDocument } from "@/lib/content";

export const metadata: Metadata = { title: "Interview Practice", description: "Spoken interview drills from Interview.md." };
export default function InterviewPage() {
  const doc = getDocument("interview");
  return <DocumentShell title="Interview playbook" markdown={doc.markdown} sourcePath={doc.sourcePath} headings={doc.headings} />;
}
