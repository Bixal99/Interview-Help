import type { Metadata } from "next";
import Link from "next/link";
import { getCourseSummaries } from "@/lib/content";

export const metadata: Metadata = { title: "Practice", description: "Practice lives inside lessons and the interview playbook." };

export default function PracticePage() {
  const courses = getCourseSummaries();
  return (
    <main id="main-content" className="mx-auto max-w-[75ch] px-4 py-10">
      <h1 className="text-4xl font-bold">Practice</h1>
      <p className="mt-3 text-muted">Exercises stay in the lesson that already contains them. Spoken drills are in the interview playbook. Nothing is invented here.</p>
      <p className="mt-6"><Link href="/interview" className="text-accent underline">Open interview practice</Link></p>
      <ul className="mt-8 space-y-2">
        {courses.map((course) => (
          <li key={course.slug}><Link href={`/courses/${course.slug}`} className="underline">{course.shortName}</Link></li>
        ))}
      </ul>
    </main>
  );
}
