"use client";

import { Check } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { tryPlaygroundHref, writeTryItCode } from "@/lib/code-playground/try-it-storage";
import { notepadHref, writeNotepadEntry } from "@/lib/code-playground/notepad-storage";
import type { PlaygroundLanguage } from "@/lib/code-playground/types";
import { classifyPracticeTask } from "@/lib/practice-classify";
import { getModelAnswer } from "@/lib/practice-model-answer";
import { getPracticeRunner, hasCuratedRunner } from "@/lib/practice-runners";
import type { PracticeRunnerSpec } from "@/lib/practice-runners";
import type { PracticeBlock, PracticeItem } from "@/lib/practice";
import { useLearningProgress } from "./progress-client";
import { PlaygroundLanguageIcon } from "./code-playground/language-mark";
import { PracticeRichText } from "./practice-rich-text";

type PracticeEntry =
  | { kind: "coding"; item: PracticeItem; runner: PracticeRunnerSpec }
  | { kind: "written"; item: PracticeItem; modelAnswer: string };

function buildEntry(lessonId: string, item: PracticeItem): PracticeEntry {
  const isCoding = hasCuratedRunner(lessonId, item.id) || classifyPracticeTask(item.label) === "coding";
  if (isCoding) {
    const runner = getPracticeRunner(lessonId, item.id, item.label);
    if (runner) return { kind: "coding", item, runner };
  }
  return { kind: "written", item, modelAnswer: getModelAnswer(lessonId, item.id, item.label) };
}

function launchPracticeChain(
  entries: PracticeEntry[],
  startIndex: number,
  startLanguage: PlaygroundLanguage,
  lessonHref: string,
  push: (href: string) => void,
) {
  const hrefs = entries.map((entry, index) =>
    entry.kind === "coding"
      ? tryPlaygroundHref(index === startIndex ? startLanguage : entry.runner.options[0].language)
      : notepadHref(),
  );

  entries.forEach((entry, index) => {
    const prevHref = index > 0 ? hrefs[index - 1] : lessonHref;
    const nextHref = index < hrefs.length - 1 ? hrefs[index + 1] : undefined;
    if (entry.kind === "coding") {
      const language = index === startIndex ? startLanguage : entry.runner.options[0].language;
      const option = entry.runner.options.find((item) => item.language === language) ?? entry.runner.options[0];
      const languageOptions = entry.runner.options.length > 1
        ? entry.runner.options.map((item) => ({ language: item.language, source: item.code, label: item.label }))
        : undefined;
      writeTryItCode(option.language, {
        source: option.code,
        title: entry.item.label,
        instructions: entry.item.label,
        observe: entry.runner.observe,
        backHref: lessonHref,
        prevHref,
        nextHref,
        problemIndex: index + 1,
        problemTotal: hrefs.length,
        languageOptions,
      }, hrefs[index]);
    } else {
      writeNotepadEntry({
        prompt: entry.item.label,
        modelAnswer: entry.modelAnswer,
        backHref: lessonHref,
        prevHref,
        nextHref,
        problemIndex: index + 1,
        problemTotal: hrefs.length,
      }, hrefs[index]);
    }
  });

  push(hrefs[startIndex]);
}

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
  const [editorLang, setEditorLang] = useState<Record<string, PlaygroundLanguage>>({});

  const prompt = practice.prompt.replace(/^practice[^:]*:\s*/i, "").trim() || "Practice until it feels familiar.";
  const doneCount = useMemo(
    () => practice.items.filter((item) => completed || checked.includes(item.id)).length,
    [practice.items, completed, checked],
  );
  const total = practice.items.length;
  const progress = total ? Math.round((doneCount / total) * 100) : 0;
  const entries = useMemo(
    () => practice.items.map((item) => buildEntry(lessonId, item)),
    [practice.items, lessonId],
  );

  if (practice.kind === "choice") {
    return (
      <section id="practice-exercises" className="ih-exercise" aria-label="Exercise">
        <header className="ih-exercise-head">
          <p className="ih-exercise-kicker">Practice Exercises</p>
          <h2><PracticeRichText text={prompt} /></h2>
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
              <code><PracticeRichText text={item.label} /></code>
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
        <h2><PracticeRichText text={prompt} /></h2>
        <div className="ih-exercise-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress} aria-label={`${doneCount} of ${total} tasks checked`}>
          <span className="ih-exercise-progress-label">{doneCount} / {total} checked</span>
          <span className="ih-exercise-progress-track"><i style={{ width: `${progress}%` }} /></span>
        </div>
      </header>
      <ul className="ih-exercise-stack">
        {practice.items.map((item, index) => {
          const on = completed || checked.includes(item.id);
          const entry = entries[index];
          const runner = entry.kind === "coding" ? entry.runner : null;
          const selectedLang = editorLang[item.id] ?? runner?.options[0]?.language;

          return (
            <li key={item.id} className="ih-exercise-item has-link">
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
                  <span className="ih-exercise-text"><PracticeRichText text={item.label} /></span>
                  <span className="ih-exercise-check" aria-hidden="true">{on ? <Check size={16} strokeWidth={3} /> : null}</span>
                </label>
                {runner && selectedLang ? (
                  <div className="ih-exercise-open-runner-group">
                    {runner.options.length > 1 ? (
                      <div className="ih-exercise-lang-tabs" role="tablist" aria-label="Editor language">
                        {runner.options.map((option) => (
                          <button
                            key={option.language}
                            type="button"
                            role="tab"
                            aria-selected={selectedLang === option.language}
                            className={`ih-exercise-lang-tab${selectedLang === option.language ? " is-active" : ""}`}
                            onClick={() => setEditorLang((current) => ({ ...current, [item.id]: option.language }))}
                          >
                            <PlaygroundLanguageIcon language={option.language} />
                            {option.label ?? option.language}
                          </button>
                        ))}
                      </div>
                    ) : null}
                    <button
                      type="button"
                      className="ih-exercise-open-runner"
                      onClick={() =>
                        launchPracticeChain(
                          entries,
                          index,
                          selectedLang,
                          `${pathname}#practice-exercises`,
                          (href) => router.push(href),
                        )
                      }
                    >
                      Practice Yourself »
                    </button>
                  </div>
                ) : (
                  <div className="ih-exercise-open-runner-group">
                    <button
                      type="button"
                      className="ih-exercise-open-runner is-notepad"
                      onClick={() =>
                        launchPracticeChain(
                          entries,
                          index,
                          "python",
                          `${pathname}#practice-exercises`,
                          (href) => router.push(href),
                        )
                      }
                    >
                      Practice Yourself »
                    </button>
                  </div>
                )}
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
