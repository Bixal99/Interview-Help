"use client";

import { useCallback, useEffect, useState } from "react";
import { AppIcon } from "@/components/icons/app-icon";
import { parseProgress, PROGRESS_KEY, toggleProgress } from "@/lib/progress-storage";

function readProgress(): string[] {
  return parseProgress(localStorage.getItem(PROGRESS_KEY));
}

function writeProgress(items: string[]) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("interview-help-progress"));
}

export function useProgress() {
  const [completed, setCompleted] = useState<string[]>([]);
  useEffect(() => {
    const sync = () => setCompleted(readProgress());
    sync();
    window.addEventListener("interview-help-progress", sync);
    window.addEventListener("storage", sync);
    return () => { window.removeEventListener("interview-help-progress", sync); window.removeEventListener("storage", sync); };
  }, []);
  const toggle = useCallback((id: string) => {
    writeProgress(toggleProgress(readProgress(), id));
  }, []);
  return { completed, toggle };
}

export function ProgressToggle({ id, label = "Mark complete" }: { id: string; label?: string }) {
  const { completed, toggle } = useProgress();
  const done = completed.includes(id);
  return (
    <button onClick={() => toggle(id)} className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium transition ${done ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600" : "hairline text-muted hover:text-ink"}`} aria-pressed={done} aria-label={`${done ? "Mark incomplete" : label}: ${id.split(":").pop()}`}>
      {done ? <AppIcon name="complete" size={12} weight="fill" className="text-success" /> : <AppIcon name="notStarted" size={12} />} {done ? "Complete" : "Mark complete"}
    </button>
  );
}

export function CourseProgress({ slug, phaseIds, compact = false }: { slug: string; phaseIds: string[]; compact?: boolean }) {
  const { completed } = useProgress();
  const count = phaseIds.filter((id) => completed.includes(`${slug}:${id}`)).length;
  const percent = phaseIds.length ? Math.round((count / phaseIds.length) * 100) : 0;
  return (
    <div aria-label={`${percent}% course progress`}>
      <div className="mb-1.5 flex items-center justify-between text-xs text-muted"><span>{compact ? "Progress" : `${count} of ${phaseIds.length} phases complete`}</span><span className="font-medium text-ink">{percent}%</span></div>
      <div className="h-1.5 overflow-hidden rounded-full bg-ink/8"><div className="h-full rounded-full bg-cobalt transition-[width] duration-300" style={{ width: `${percent}%` }} /></div>
    </div>
  );
}
