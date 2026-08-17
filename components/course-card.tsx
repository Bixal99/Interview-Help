import Link from "next/link";
import { ArrowRight, ChevronDown, Clock3 } from "lucide-react";
import type { Course } from "@/lib/content";
import { CourseProgress } from "./progress";

export function CourseCard({ course }: { course: Omit<Course, "markdown" | "headings" | "topics"> }) {
  const Icon = course.icon;
  return (
    <article className="course-card flex h-fit flex-col rounded-2xl border hairline surface p-5 sm:p-6" style={{ "--course-accent": course.accent } as React.CSSProperties}>
      <div className="mb-5 flex items-start justify-between gap-3">
        <span className="grid size-11 place-items-center rounded-xl text-white" style={{ backgroundColor: course.accent }}><Icon size={20} /></span>
        <span className="rounded-full border hairline px-2.5 py-1 text-[10px] font-medium uppercase tracking-[.12em] text-muted">{course.difficulty}</span>
      </div>
      <h3 className="text-xl font-semibold tracking-[-.025em]">{course.shortName}</h3>
      <p className="mt-2 min-h-[4.2rem] text-sm leading-6 text-muted">{course.description}</p>
      <div className="my-4 flex flex-wrap gap-1.5">{course.skills.map((skill) => <span key={skill} className="rounded-md bg-ink/5 px-2 py-1 text-[11px] text-muted">{skill}</span>)}</div>
      <div className="mb-5 flex items-center gap-4 text-xs text-muted"><span>{course.phases.length} phases</span><span className="flex items-center gap-1"><Clock3 size={13} /> ~{course.estimatedHours} hrs reading</span></div>
      <CourseProgress slug={course.slug} phaseIds={course.phases.map((phase) => phase.id)} compact />
      <div className="mt-5 flex gap-2">
        <Link href={`/courses/${course.slug}`} className="inline-flex flex-1 items-center justify-center rounded-xl border hairline px-3 py-2.5 text-xs font-medium transition hover:bg-ink/5">View details</Link>
        <Link href={`/courses/${course.slug}/learn`} className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-ink px-3 py-2.5 text-xs font-medium text-paper transition hover:opacity-90">Start course <ArrowRight size={13} /></Link>
      </div>
      <details className="mt-4 border-t hairline pt-4">
        <summary className="flex cursor-pointer items-center justify-between text-xs font-medium">What you&apos;ll learn <ChevronDown className="chevron transition-transform" size={15} /></summary>
        <div className="pt-4 text-xs leading-5 text-muted">
          <p><strong className="text-ink">Prerequisite:</strong> {course.prerequisites}</p>
          <ol className="mt-3 space-y-2 border-l hairline pl-3">{course.phases.slice(0, 5).map((phase) => <li key={phase.id}>{phase.text.replace(/^PHASE\s+\d+\s*[-–—:]?\s*/i, "")}</li>)}</ol>
          {course.phases.length > 5 && <p className="mt-2">+ {course.phases.length - 5} more phases and integrated projects</p>}
        </div>
      </details>
    </article>
  );
}
