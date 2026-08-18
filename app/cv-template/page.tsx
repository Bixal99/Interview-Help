import type { Metadata } from "next";
import { DocumentShell } from "@/components/document-shell";
import { getDocument } from "@/lib/content";

export const metadata: Metadata = { title: "CV Template" };
export default function CvTemplatePage() {
  const doc = getDocument("master-cv-template");
  return <DocumentShell title="CV template" markdown={doc.markdown} sourcePath={doc.sourcePath} headings={doc.headings} />;
}
