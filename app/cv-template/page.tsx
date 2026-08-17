import type { Metadata } from "next";
import { ReaderLayout } from "@/components/reader-layout";
import { getDocument } from "@/lib/content";

export const metadata: Metadata = { title: "CV Template" };
export default function CvTemplatePage() { const doc = getDocument("Master_CV_Template.md"); return <ReaderLayout title="CV template" markdown={doc.markdown} headings={doc.headings} />; }
