import { notFound } from "next/navigation";
import { TutorialShell } from "@/components/tutorial-shell";
import { getCourseNav } from "@/lib/content";

export default async function CourseLessonLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ course: string }>;
}) {
  const { course } = await params;
  const nav = getCourseNav(course);
  if (!nav) notFound();
  return <TutorialShell nav={nav}>{children}</TutorialShell>;
}
