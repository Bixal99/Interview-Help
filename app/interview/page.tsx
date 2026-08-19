import type { Metadata } from "next";
import { InterviewStudio } from "@/components/interview-studio";
import { getInterviewPlaybook } from "@/lib/content";

export const metadata: Metadata = { title: "Interview Playbook", description: "Spoken interview drills from Interview.md." };

export default function InterviewPage() {
  return <InterviewStudio playbook={getInterviewPlaybook()} />;
}
