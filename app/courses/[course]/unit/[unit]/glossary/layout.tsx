import { TutorialShell } from "@/components/tutorial-shell";
import { getCourseNav } from "@/lib/content";
import { notFound } from "next/navigation";

export default async function UnitGlossaryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ course: string; unit: string }>;
}) {
  const { course } = await params;
  const nav = getCourseNav(course);
  if (!nav) notFound();
  return <TutorialShell nav={nav}>{children}</TutorialShell>;
}
