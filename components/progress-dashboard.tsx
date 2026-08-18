"use client";

import Link from "next/link";
import { useRef } from "react";
import { useLearningProgress } from "./progress-client";

function resumeHrefFor(slug: string, phaseId: string, lessonId?: string) {
  return lessonId ? `/courses/${slug}/phase/${phaseId}/${lessonId}` : `/courses/${slug}/phase/${phaseId}`;
}

export function ProgressDashboard({
  courses,
}: {
  courses: { slug: string; shortName: string; lessonCount: number; projectCount: number }[];
}) {
  const { ready, percent, resume, exportJson, importJson, reset, course } = useLearningProgress();
  const file = useRef<HTMLInputElement>(null);
  const current = ready ? resume(resumeHrefFor) : null;

  async function onImport(event: React.ChangeEvent<HTMLInputElement>) {
    const picked = event.target.files?.[0];
    if (!picked) return;
    try {
      importJson(JSON.parse(await picked.text()));
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Could not import that file.");
    }
    event.target.value = "";
  }

  function onExport() {
    const blob = new Blob([exportJson()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "interview-help-progress.json";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="mx-auto max-w-[75ch] px-4 py-10">
      <h1 className="text-3xl font-bold">Progress</h1>
      <p className="mt-3 text-muted">Stored only in this browser. Export a backup before you clear site data.</p>
      {current && (
        <p className="mt-6">
          <Link href={current.href} className="btn-next">Continue</Link>
        </p>
      )}
      <ul className="mt-8 divide-y hairline border hairline bg-[rgb(var(--surface))]">
        {courses.map((item) => (
          <li key={item.slug} className="flex items-center justify-between gap-3 px-4 py-3">
            <Link href={`/courses/${item.slug}`} className="font-semibold hover:text-accent">{item.shortName}</Link>
            <span className="text-sm text-muted">{ready ? `${percent(item.slug, item.lessonCount, item.projectCount)}%` : "—"}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap gap-3">
        <button type="button" className="btn-next" onClick={onExport}>Export</button>
        <button type="button" className="btn-prev" onClick={() => file.current?.click()}>Import</button>
        <button type="button" className="btn-prev" onClick={() => { if (window.confirm("Reset all progress in this browser?")) reset(); }}>Reset</button>
        <input ref={file} type="file" accept="application/json" className="sr-only" onChange={onImport} />
      </div>
      <p className="mt-6 text-sm text-muted">Visited lessons in this browser: {courses.reduce((sum, item) => sum + (ready ? course(item.slug).visitedLessons.length : 0), 0)}.</p>
    </div>
  );
}
