"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import type { CodeExercise } from "@/lib/code-playground/exercises";
import { getRunner } from "@/lib/code-playground/runners";
import { displaySourceForLanguage, isSourceFiles, isWebLanguage, normalizeSourceForRunner, updateSourceFile } from "@/lib/code-playground/source";
import { clearDraft, readDraftSource, writeDraftSource } from "@/lib/code-playground/storage";
import type { PlaygroundFileKey, PlaygroundSource, PlaygroundStatus, RunResult } from "@/lib/code-playground/types";
import { formatRunOutput, validateExercise } from "@/lib/code-playground/validator";
import { useLearningProgress } from "@/components/progress-client";
import { CodeEditor } from "./code-editor";
import { PlaygroundLanguageIcon } from "./language-mark";
import { OutputPanel } from "./output-panel";
import { PlaygroundLead } from "./playground-lead";
import { ProgramInput } from "./program-input";
import { SolutionPanel } from "./solution-panel";
import { SplitPanes } from "./split-panes";
import { WebPreviewPanel } from "./web-preview-panel";

export function CodePlayground({
  exercise,
  mode,
  tryItSource,
  onTryItSourceChange,
  onRunComplete,
  fullPage = false,
  lead,
}: {
  exercise: CodeExercise;
  mode: "inline" | "tryit";
  tryItSource?: PlaygroundSource;
  onTryItSourceChange?: (code: PlaygroundSource) => void;
  onRunComplete?: (ok: boolean) => void;
  fullPage?: boolean;
  lead?: ReactNode;
}) {
  const runner = useMemo(() => getRunner(exercise.language), [exercise.language]);
  const { course, toggleExercise } = useLearningProgress();
  const isControlledTryIt = mode === "tryit" && tryItSource != null && onTryItSourceChange != null;
  const [source, setSource] = useState<PlaygroundSource>(exercise.starterCode);
  const [activeFile, setActiveFile] = useState<PlaygroundFileKey>(exercise.language === "css" ? "css" : "html");
  const [programInput, setProgramInput] = useState("");
  const [output, setOutput] = useState("");
  const [lastResult, setLastResult] = useState<RunResult | undefined>(undefined);
  const [status, setStatus] = useState<PlaygroundStatus>("idle");
  const [checkMessage, setCheckMessage] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [ready, setReady] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const sourceValue = isControlledTryIt ? tryItSource : source;
  const setSourceValue = isControlledTryIt ? onTryItSourceChange : setSource;
  const usesFileTabs = isSourceFiles(sourceValue);
  const currentCode = displaySourceForLanguage(exercise.language, usesFileTabs ? sourceValue[activeFile] : sourceValue);
  const runSource = normalizeSourceForRunner(exercise.language, sourceValue);
  const showProgramInput = !isWebLanguage(exercise.language);

  const currentEditorLanguage =
    activeFile === "css" ? "css" : activeFile === "javascript" ? "javascript" : exercise.language === "web" ? "html" : exercise.language;

  useEffect(() => {
    const draft = exercise.id.startsWith("try-") ? null : readDraftSource(exercise.id);
    setSource(draft ?? exercise.starterCode);
    setActiveFile(exercise.language === "css" ? "css" : "html");
    setHydrated(true);
  }, [exercise.id, exercise.starterCode]);

  useEffect(() => {
    if (!hydrated || isControlledTryIt) return;
    writeDraftSource(exercise.id, source);
  }, [source, exercise.id, hydrated, isControlledTryIt]);

  useEffect(() => {
    if (!runner) return;
    let cancelled = false;
    setStatus("preparing");
    runner.prepare()
      .then(() => {
        if (!cancelled) {
          setReady(true);
          setStatus("idle");
        }
      })
      .catch(() => {
        if (!cancelled) {
          setReady(false);
          setStatus("error");
          setOutput(`${runner.label} failed to load.`);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [runner]);

  const hasGrading = Boolean(exercise.expectedOutput || exercise.tests?.length || exercise.domChecks?.length);
  const canRun = Boolean(runner && ready && !isRunning && status !== "preparing");
  const canStop = isRunning;
  const canCheck = canRun && hasGrading;

  const handleRun = useCallback(async () => {
    if (!runner || !canRun) return;
    setIsRunning(true);
    setStatus("running");
    setCheckMessage(null);
    setOutput("Running...");
    try {
      const result = await runner.run(runSource, programInput);
      setLastResult(result);
      setOutput(formatRunOutput(result) || " ");
      setStatus(result.ok ? "success" : "error");
      onRunComplete?.(result.ok);
    } catch {
      setOutput(`${runner.label} failed to load.`);
      setStatus("error");
      onRunComplete?.(false);
    } finally {
      setIsRunning(false);
    }
  }, [runner, canRun, runSource, programInput, onRunComplete]);

  const handleCheck = useCallback(async () => {
    if (!runner || !canCheck) return;
    setIsRunning(true);
    setStatus("running");
    setCheckMessage(null);
    setOutput("Running...");
    try {
      const validation = await validateExercise(exercise, runner, runSource, programInput);
      if (validation.lastResult) {
        setLastResult(validation.lastResult);
        setOutput(formatRunOutput(validation.lastResult) || " ");
        setStatus(validation.passed ? "success" : "error");
      }
      setCheckMessage(validation.message);
      if (validation.passed && exercise.courseSlug && !course(exercise.courseSlug).completedExercises.includes(exercise.id)) {
        toggleExercise(exercise.courseSlug, exercise.id);
      }
    } catch {
      setOutput(`${runner.label} failed to load.`);
      setStatus("error");
      setCheckMessage("Try Again");
    } finally {
      setIsRunning(false);
    }
  }, [runner, canCheck, exercise, runSource, programInput, course, toggleExercise]);

  const handleReset = useCallback(() => {
    runner?.stop();
    setIsRunning(false);
    if (!isControlledTryIt) clearDraft(exercise.id);
    setSourceValue(exercise.starterCode);
    setProgramInput("");
    setOutput("");
    setLastResult(undefined);
    setStatus("idle");
    setCheckMessage(null);
    setShowSolution(false);
    setActiveFile(exercise.language === "css" ? "css" : "html");
  }, [exercise.starterCode, exercise.id, exercise.language, runner, isControlledTryIt, setSourceValue]);

  const handleSolution = useCallback(() => {
    setShowSolution((current) => !current);
  }, []);

  const handleStop = useCallback(() => {
    runner?.stop();
    setIsRunning(false);
    setStatus("stopped");
    setLastResult(undefined);
    setOutput((current) => (current === "Running..." ? "Execution stopped." : `${current}\nExecution stopped.`));
  }, [runner]);

  const setCurrentEditorValue = useCallback((nextValue: string) => {
    if (isSourceFiles(sourceValue)) {
      setSourceValue(updateSourceFile(sourceValue, activeFile, nextValue));
      return;
    }
    setSourceValue(nextValue);
  }, [activeFile, setSourceValue, sourceValue]);

  if (!runner) {
    return (
      <div className="ih-playground ih-playground-unavailable">
        <p>This language is not available yet.</p>
      </div>
    );
  }

  const banner = lead ?? (
    <PlaygroundLead
      title={exercise.title}
      goal={exercise.instructions || "Write code and run it."}
    />
  );

  return (
    <div className={`ih-playground ih-playground-tryit${fullPage ? " is-fullpage" : ""}`}>
      <div className="ih-playground-shell">
        <SplitPanes
          className="ih-playground-tryit-grid"
          storageKey={mode === "tryit" ? "ih-split-tryit" : "ih-split-inline"}
          defaultSplit={mode === "tryit" ? 0.7 : 0.55}
          left={
          <div className="ih-playground-code-pane">
            {banner}
            <div className="ih-playground-panel-head">
              {usesFileTabs ? (
                <div className="ih-playground-file-tabs">
                  {(["html", "css", "javascript"] as PlaygroundFileKey[]).map((fileKey) => (
                    <button
                      key={fileKey}
                      type="button"
                      className={`ih-playground-file-tab${activeFile === fileKey ? " is-active" : ""}`}
                      onClick={() => setActiveFile(fileKey)}
                    >
                      <PlaygroundLanguageIcon language={fileKey} />
                      {fileKey === "javascript" ? "script.js" : fileKey === "css" ? "style.css" : "index.html"}
                    </button>
                  ))}
                </div>
              ) : (
                <span className="ih-playground-editor-tab">
                  <PlaygroundLanguageIcon language={exercise.language} />
                  {runner.label} Editor
                </span>
              )}
              <div className="ih-playground-panel-head-actions">
                <button type="button" className="ih-playground-btn ih-playground-btn-run" onClick={handleRun} disabled={!canRun}>Run</button>
                {mode === "inline" && hasGrading ? (
                  <button type="button" className="ih-playground-btn ih-playground-btn-secondary" onClick={handleCheck} disabled={!canCheck}>Check</button>
                ) : null}
                <button type="button" className="ih-playground-btn ih-playground-btn-secondary" onClick={handleReset}>Reset</button>
                {mode === "inline" && hasGrading ? (
                  <button type="button" className="ih-playground-btn ih-playground-btn-secondary" onClick={handleSolution} aria-pressed={showSolution}>Solution</button>
                ) : null}
                {canStop ? <button type="button" className="ih-playground-btn ih-playground-btn-secondary" onClick={handleStop}>Stop</button> : null}
              </div>
            </div>
            <CodeEditor language={exercise.language} editorLanguage={currentEditorLanguage} value={currentCode} onChange={setCurrentEditorValue} onRun={handleRun} comfortable autoGrow={fullPage} />
          </div>
          }
          right={
          <div className="ih-playground-result-pane">
            {showProgramInput ? (
              <ProgramInput language={exercise.language} code={currentCode} value={programInput} onChange={setProgramInput} disabled={isRunning} variant="tryit" onRun={handleRun} />
            ) : null}
            {isWebLanguage(exercise.language) ? (
              <div className="ih-playground-output is-tryit">
                <div className="ih-playground-panel-head">
                  <span>Preview</span>
                </div>
                {checkMessage ? (
                  <p className={`ih-playground-check${checkMessage === "Correct" ? " is-correct" : " is-wrong"}`} aria-live="polite">
                    {checkMessage === "Correct" ? "✓ Correct" : "✕ Try Again"}
                  </p>
                ) : null}
                <WebPreviewPanel result={lastResult} />
              </div>
            ) : (
              <OutputPanel status={status} runnerLabel={runner.label} output={output} checkMessage={checkMessage} variant="tryit" />
            )}
          </div>
          }
        />
      </div>
      {mode === "inline" && exercise.allowTryItYourself ? (
        <a href={`/playground/${exercise.id}`} className="btn-next ih-playground-try-link">
          Start Building »
        </a>
      ) : null}
      {mode === "tryit" && exercise.lessonHref ? (
        <div className="ih-try-footer">
          <Link href={exercise.lessonHref} className="ih-pager-btn ih-pager-back">
            <span className="ih-pager-label">« Back</span>
          </Link>
        </div>
      ) : null}
      {showSolution && hasGrading ? <SolutionPanel solution={exercise.solution} /> : null}
    </div>
  );
}
