"use client";

import { useEffect, useState } from "react";
import type { PracticeBlock } from "@/lib/practice";
import { useLearningProgress } from "./progress-client";

export function ExerciseBlock({
  slug,
  lessonId,
  practice,
}: {
  slug: string;
  lessonId: string;
  practice: PracticeBlock;
}) {
  const { course, toggleExercise } = useLearningProgress();
  const doneId = `${lessonId}:practice`;
  const completed = course(slug).completedExercises.includes(doneId);
  const [choice, setChoice] = useState<string>("");
  const [checked, setChecked] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  if (practice.kind === "choice") {
    return (
      <section className="my-8 border hairline bg-paper p-5" aria-label="Exercise">
        <h2 className="text-xl font-bold">Exercise</h2>
        <p className="mt-2 text-muted">{practice.prompt}</p>
        <fieldset className="mt-4 space-y-2">
          <legend className="sr-only">Choose an answer from the source</legend>
          {practice.items.map((item) => (
            <label key={item.id} className="flex items-start gap-2 text-[15px]">
              <input type="radio" name={`ex-${lessonId}`} value={item.id} checked={choice === item.id} onChange={() => setChoice(item.id)} className="mt-1" />
              <span>{item.label}</span>
            </label>
          ))}
        </fieldset>
        <button type="button" className="btn-next mt-4" onClick={() => { setSubmitted(true); if (choice) toggleExercise(slug, doneId); }} disabled={!choice}>
          Submit
        </button>
        {submitted && <p className="mt-3 text-sm text-success">Saved. The wording above is from the lesson source.</p>}
      </section>
    );
  }

  return (
    <section className="my-8 border hairline bg-paper p-5" aria-label="Exercise">
      <h2 className="text-xl font-bold">Exercise</h2>
      <p className="mt-2 text-muted">{practice.prompt}</p>
      <ul className="mt-4 space-y-2">
        {practice.items.map((item) => (
          <li key={item.id}>
            <label className="flex items-start gap-2 text-[15px]">
              <input
                type="checkbox"
                checked={completed || checked.includes(item.id)}
                onChange={() => setChecked((current) => current.includes(item.id) ? current.filter((id) => id !== item.id) : [...current, item.id])}
              />
              <span>{item.difficulty ? `${item.difficulty}: ${item.label}` : item.label}</span>
            </label>
          </li>
        ))}
      </ul>
      <button type="button" className="btn-next mt-4" onClick={() => toggleExercise(slug, doneId)}>
        {completed ? "Practice saved" : "Mark practice complete"}
      </button>
    </section>
  );
}
