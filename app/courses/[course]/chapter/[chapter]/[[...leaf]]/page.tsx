import { notFound, redirect } from "next/navigation";
import { resolveUnitForChapter } from "@/lib/content";

export default async function ChapterAliasPage({
  params,
}: {
  params: Promise<{ course: string; chapter: string; leaf?: string[] }>;
}) {
  const { course, chapter, leaf } = await params;
  const unit = resolveUnitForChapter(course, Number(chapter));
  if (!unit) notFound();
  const suffix = leaf?.length ? `/${leaf.join("/")}` : "";
  redirect(`/courses/${course}/unit/${unit}/chapter/${chapter}${suffix}`);
}
