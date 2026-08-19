"use client";

import { Check } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { tryPlaygroundHref, writeTryItCode } from "@/lib/code-playground/try-it-storage";
import { getPracticeRunner } from "@/lib/practice-runners";
import type { PracticeBlock } from "@/lib/practice";
import { useLearningProgress } from "./progress-client";

function difficultyClass(value?: string) {
  if (!value) return "is-neutral";
  if (/easy/i.test(value)) return "is-easy";
  if (/medium/i.test(value)) return "is-medium";
  if (/hard/i.test(value)) return "is-hard";
  return "is-neutral";
}

export function ExerciseBlock({
  slug,
  lessonId,
  practice,
}: {
  slug: string;
  lessonId: string;
  practice: PracticeBlock;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { course, toggleExercise } = useLearningProgress();
  const doneId = `${lessonId}:practice`;
  const completed = course(slug).completedExercises.includes(doneId);
  const [choice, setChoice] = useState<string>("");
  const [checked, setChecked] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const prompt = practice.prompt.replace(/^practice[^:]*:\s*/i, "").trim() || "Practice until it feels familiar.";
  const doneCount = useMemo(
    () => practice.items.filter((item) => completed || checked.includes(item.id)).length,
    [practice.items, completed, checked],
  );
  const total = practice.items.length;
  const progress = total ? Math.round((doneCount / total) * 100) : 0;

  if (practice.kind === "choice") {
    return (
      <section id="practice-exercises" className="ih-exercise" aria-label="Exercise">
        <header className="ih-exercise-head">
          <p className="ih-exercise-kicker">Practice Exercises</p>
          <h2>{prompt}</h2>
        </header>
        <fieldset className="ih-exercise-stack">
          <legend className="sr-only">Choose an answer</legend>
          {practice.items.map((item, index) => (
            <label
              key={item.id}
              className={`ih-exercise-card${choice === item.id ? " is-on" : ""}`}
              style={{ "--ih-stack": index } as React.CSSProperties}
            >
              <span className="ih-exercise-num">{item.difficulty ?? String.fromCharCode(65 + index)}</span>
              <input type="radio" name={`ex-${lessonId}`} value={item.id} checked={choice === item.id} onChange={() => setChoice(item.id)} />
              <code>{item.label}</code>
            </label>
          ))}
        </fieldset>
        <div className="ih-exercise-foot">
          <button
            type="button"
            className="ih-exercise-submit"
            onClick={() => {
              setSubmitted(true);
              if (choice) toggleExercise(slug, doneId);
            }}
            disabled={!choice}
          >
            Submit Answer »
          </button>
          {submitted ? <p className="ih-exercise-saved">Saved. The wording above is from the lesson source.</p> : null}
        </div>
      </section>
    );
  }

  return (
    <section id="practice-exercises" className="ih-exercise" aria-label="Exercise">
      <header className="ih-exercise-head">
        <p className="ih-exercise-kicker">Practice Exercises</p>
        <h2>{prompt}</h2>
        <div className="ih-exercise-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress} aria-label={`${doneCount} of ${total} tasks checked`}>
          <span className="ih-exercise-progress-label">{doneCount} / {total} checked</span>
          <span className="ih-exercise-progress-track"><i style={{ width: `${progress}%` }} /></span>
        </div>
      </header>
      <ul className="ih-exercise-stack">
        {practice.items.map((item, index) => {
          const on = completed || checked.includes(item.id);
          const runner = getPracticeRunner(lessonId, item.id);

          // build ordered list of items-with-runners for prev/next
          const runnableItems = practice.items
            .map((it) => ({ item: it, runner: getPracticeRunner(lessonId, it.id) }))
            .filter((x) => x.runner !== null);
          const myPos = runnableItems.findIndex((x) => x.item.id === item.id);
          const prevEntry = myPos > 0 ? runnableItems[myPos - 1] : null;
          const nextEntry = myPos >= 0 && myPos < runnableItems.length - 1 ? runnableItems[myPos + 1] : null;
          const problemIndex = myPos + 1;
          const problemTotal = runnableItems.length;

          return (
            <li key={item.id} className={runner ? "ih-exercise-item has-link" : undefined}>
              <div
                className={`ih-exercise-card${on ? " is-on" : ""}`}
                style={{ "--ih-stack": index } as React.CSSProperties}
              >
                <label className="ih-exercise-card-body">
                  <span className={`ih-exercise-badge ${difficultyClass(item.difficulty)}`}>
                    {item.difficulty ?? "Task"}
                  </span>
                  <input
                    type="checkbox"
                    checked={on}
                    onChange={() =>
                      setChecked((current) =>
                        current.includes(item.id) ? current.filter((id) => id !== item.id) : [...current, item.id],
                      )
                    }
                  />
                  <span className="ih-exercise-text">{item.label}</span>
                  <span className="ih-exercise-check" aria-hidden="true">{on ? <Check size={16} strokeWidth={3} /> : null}</span>
                </label>
                {runner ? (
                  <div className="ih-exercise-open-runner-group">
                    <button
                      type="button"
                      className="ih-exercise-open-runner"
                      onClick={() => {
                        const firstOption = runner.options[0];
                        const langOptions = runner.options.length > 1
                          ? runner.options.map((o) => ({ language: o.language, source: o.code, label: o.label }))
                          : undefined;

                        // Generate hrefs first so we have stable slot ids for cross-linking
                        const thisHref = tryPlaygroundHref(firstOption.language);
                        const prevHref = prevEntry
                          ? tryPlaygroundHref(prevEntry.runner!.options[0].language)
                          : `${pathname}#practice-exercises`;
                        const nextHref = nextEntry
                          ? tryPlaygroundHref(nextEntry.runner!.options[0].language)
                          : undefined;

                        // Pre-write prev item into its own slot
                        if (prevEntry) {
                          const po = prevEntry.runner!.options[0];
                          const prevPos = runnableItems.findIndex((x) => x.item.id === prevEntry.item.id) + 1;
                          writeTryItCode(po.language, {
                            source: po.code,
                            title: prevEntry.item.label,
                            instructions: prevEntry.item.label,
                            backHref: `${pathname}#practice-exercises`,
                            nextHref: thisHref,
                            problemIndex: prevPos,
                            problemTotal,
                          }, prevHref);
                        }

                        // Pre-write next item into its own slot
                        if (nextEntry) {
                          const no = nextEntry.runner!.options[0];
                          const nextPos = runnableItems.findIndex((x) => x.item.id === nextEntry.item.id) + 1;
                          const afterNext = runnableItems[runnableItems.findIndex((x) => x.item.id === nextEntry.item.id) + 1];
                          const afterNextHref = afterNext ? tryPlaygroundHref(afterNext.runner!.options[0].language) : undefined;
                          writeTryItCode(no.language, {
                            source: no.code,
                            title: nextEntry.item.label,
                            instructions: nextEntry.item.label,
                            backHref: `${pathname}#practice-exercises`,
                            prevHref: thisHref,
                            nextHref: afterNextHref,
                            problemIndex: nextPos,
                            problemTotal,
                          }, nextHref!);
                        }

                        // Write current item and navigate
                        writeTryItCode(firstOption.language, {
                          source: firstOption.code,
                          title: item.label,
                          instructions: item.label,
                          backHref: prevEntry ? prevHref : `${pathname}#practice-exercises`,
                          prevHref: prevEntry ? prevHref : `${pathname}#practice-exercises`,
                          nextHref,
                          problemIndex,
                          problemTotal,
                          languageOptions: langOptions,
                        }, thisHref);
                        router.push(thisHref);
                      }}
                    >
                      Open in playground »
                    </button>
                  </div>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="ih-exercise-foot">
        <button type="button" className="ih-exercise-submit" onClick={() => toggleExercise(slug, doneId)}>
          {completed ? "Practice saved" : "Mark practice complete »"}
        </button>
      </div>
    </section>
  );
}
