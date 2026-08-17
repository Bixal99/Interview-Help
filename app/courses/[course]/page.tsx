import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen, CheckCircle2, Clock3, FolderKanban, GitCommitHorizontal, MessagesSquare } from "lucide-react";
import { CourseProgress } from "@/components/progress";
import { courseCatalog } from "@/lib/course-catalog";
import { getCourse } from "@/lib/content";

export function generateStaticParams() { return courseCatalog.map((course) => ({ course: course.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }): Promise<Metadata> {
  const { course: slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return { title: course.shortName, description: course.description, alternates: { canonical: `/courses/${slug}` }, openGraph: { title: `${course.shortName} roadmap`, description: course.description } };
}

export default async function CourseOverviewPage({ params }: { params: Promise<{ course: string }> }) {
  const { course: slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();
  const Icon = course.icon;
  return <main id="main-content"><section className="border-b hairline"><div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20"><Link href="/courses" className="text-xs font-medium text-muted hover:text-ink">← All courses</Link><div className="mt-8 grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end"><div><span className="mb-6 grid size-12 place-items-center rounded-2xl text-white" style={{ backgroundColor: course.accent }}><Icon size={22} /></span><p className="text-xs font-semibold uppercase tracking-[.16em]" style={{ color: course.accent }}>{course.difficulty}</p><h1 className="mt-3 text-4xl font-semibold leading-tight tracking-[-.055em] sm:text-6xl">{course.title}</h1><p className="mt-6 max-w-2xl text-base leading-7 text-muted">{course.description}</p><div className="mt-7 flex flex-wrap gap-2">{course.skills.map((skill) => <span key={skill} className="rounded-full border hairline surface px-3 py-1.5 text-xs text-muted">{skill}</span>)}</div></div><div className="rounded-2xl border hairline surface p-5 shadow-soft"><div className="mb-5 flex items-center justify-between text-xs text-muted"><span className="flex items-center gap-1.5"><BookOpen size={14} /> {course.phases.length} phases</span><span className="flex items-center gap-1.5"><Clock3 size={14} /> ~{course.estimatedHours} hrs</span></div><CourseProgress slug={course.slug} phaseIds={course.phases.map((phase) => phase.id)} /><Link href={`/courses/${course.slug}/learn`} className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3 text-sm font-medium text-paper">Start course <ArrowRight size={15} /></Link></div></div></div></section>
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_300px]"><div><div className="mb-9"><p className="text-xs font-semibold uppercase tracking-[.14em] text-cobalt">Curriculum</p><h2 className="mt-2 text-3xl font-semibold tracking-[-.035em]">A connected journey in {course.phases.length} phases</h2></div><div className="learning-thread space-y-2">{course.phases.map((phase) => <Link key={phase.id} href={`/courses/${course.slug}/learn#${phase.id}`} className="group relative flex gap-4 rounded-xl p-3 transition hover:bg-ink/[.035]"><span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full border hairline surface text-xs font-semibold group-hover:border-cobalt/40 group-hover:text-cobalt">{phase.phase}</span><div className="pt-1"><h3 className="text-sm font-medium">{phase.text.replace(/^PHASE\s+\d+\s*[-–—:]?\s*/i, "")}</h3><p className="mt-1 text-xs text-muted">Read, practice, and complete the matching project checkpoint.</p></div></Link>)}</div></div><aside><div className="sticky top-24 space-y-4"><div className="rounded-2xl border hairline surface p-5"><h2 className="text-sm font-semibold">Before you begin</h2><p className="mt-3 text-xs leading-5 text-muted">{course.prerequisites}</p></div><div className="rounded-2xl border hairline surface p-5"><h2 className="text-sm font-semibold">What you will produce</h2><ul className="mt-4 space-y-3 text-xs text-muted"><li className="flex gap-2"><CheckCircle2 size={15} className="shrink-0 text-cobalt" /> Phase projects with verifiable outcomes</li><li className="flex gap-2"><GitCommitHorizontal size={15} className="shrink-0 text-cobalt" /> Safe Git checkpoints and history</li><li className="flex gap-2"><MessagesSquare size={15} className="shrink-0 text-cobalt" /> Interview-ready explanations</li></ul></div><Link href="/projects" className="flex items-center gap-3 rounded-xl border hairline surface p-4 text-xs font-medium"><FolderKanban size={16} className="text-cobalt" /> Browse related projects <ArrowRight className="ml-auto" size={14} /></Link></div></aside></section></main>;
}
