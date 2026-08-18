import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CourseCard({ course }: { course: { slug: string; shortName: string; description: string } }) {
  return (
    <article className="flex h-fit flex-col border hairline bg-[rgb(var(--surface))] p-5">
      <h3 className="text-xl font-semibold">{course.shortName}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{course.description}</p>
      <Link href={`/courses/${course.slug}`} className="mt-5 inline-flex items-center gap-1.5 text-accent underline">
        Open tutorial <ArrowRight size={13} />
      </Link>
    </article>
  );
}
