import type { Metadata } from "next";
import Link from "next/link";
import { InnerPage } from "@/components/inner-page";
import { getCourseSummaries } from "@/lib/content";

export const metadata: Metadata = { title: "Practice", description: "Practice lives inside lessons and the interview playbook." };

export default function PracticePage() {
  const courses = getCourseSummaries();
  return (
    <InnerPage title="Practice" description="Exercises stay in the lesson that already contains them. Spoken drills are in the interview playbook. Nothing is invented here.">
      <p><Link href="/interview" className="btn-next">Open interview practice</Link></p>
      <ul className="mt-8 space-y-2">
        {courses.map((course) => (
          <li key={course.slug}><Link href={`/courses/${course.slug}`} className="underline">{course.shortName}</Link></li>
        ))}
      </ul>
    </InnerPage>
  );
}
