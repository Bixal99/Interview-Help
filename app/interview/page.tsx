import type { Metadata } from "next";
import { ReaderLayout } from "@/components/reader-layout";
import { getDocument } from "@/lib/content";

export const metadata: Metadata = { title: "Interview Practice", description: "Spoken interview drills, follow-ups, traps, and answer structures." };
export default function InterviewPage() { const doc = getDocument("Interview.md"); return <ReaderLayout title="Interview playbook" markdown={doc.markdown} headings={doc.headings} />; }
