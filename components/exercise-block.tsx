"use client";

import { useState } from "react";
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
      <section className="ih-exercise" aria-label="Exercise">
        <h2>Exercise <span className="ih-exercise-help" aria-hidden="true">?</span></h2>
        <p>{practice.prompt}</p>
        <fieldset>
          <legend className="sr-only">Choose an answer</legend>
          {practice.items.map((item) => (
            <label key={item.id} className={`ih-exercise-option${choice === item.id ? " is-on" : ""}`}>
              <input type="radio" name={`ex-${lessonId}`} value={item.id} checked={choice === item.id} onChange={() => setChoice(item.id)} />
              <code>{item.label}</code>
            </label>
          ))}
        </fieldset>
        <button type="button" className="ih-exercise-submit" onClick={() => { setSubmitted(true); if (choice) toggleExercise(slug, doneId); }} disabled={!choice}>
          Submit Answer »
        </button>
        {submitted ? <p className="ih-exercise-saved">Saved. The wording above is from the lesson source.</p> : null}
      </section>
    );
  }

  return (
    <section className="ih-exercise" aria-label="Exercise">
      <h2>Exercise <span className="ih-exercise-help" aria-hidden="true">?</span></h2>
      <p>{practice.prompt}</p>
      <ul>
        {practice.items.map((item) => (
          <li key={item.id}>
            <label className={`ih-exercise-option${(completed || checked.includes(item.id)) ? " is-on" : ""}`}>
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
      <button type="button" className="ih-exercise-submit" onClick={() => toggleExercise(slug, doneId)}>
        {completed ? "Practice saved" : "Submit Answer »"}
      </button>
    </section>
  );
}
