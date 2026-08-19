"use client";

export function PlaygroundToolbar({
  mode,
  runnerLabel,
  canRun,
  canStop,
  canCheck,
  showCheckAnswer = true,
  showSolution,
  allowTryItYourself,
  exerciseId,
  onRun,
  onCheck,
  onReset,
  onSolution,
  onStop,
}: {
  mode: "inline" | "tryit";
  runnerLabel: string;
  canRun: boolean;
  canStop: boolean;
  canCheck: boolean;
  showCheckAnswer?: boolean;
  showSolution: boolean;
  allowTryItYourself?: boolean;
  exerciseId: string;
  onRun: () => void;
  onCheck: () => void;
  onReset: () => void;
  onSolution: () => void;
  onStop: () => void;
}) {
  if (mode === "tryit") {
    return (
      <div className="ih-playground-toolbar ih-playground-toolbar-tryit">
        <span className="ih-playground-toolbar-label">{runnerLabel}</span>
        <div className="ih-playground-toolbar-actions">
          <button type="button" className="ih-playground-btn ih-playground-btn-run" onClick={onRun} disabled={!canRun}>Run</button>
          <button type="button" className="ih-playground-btn ih-playground-btn-secondary" onClick={onReset}>Reset</button>
          {canStop ? <button type="button" className="ih-playground-btn ih-playground-btn-secondary" onClick={onStop}>Stop</button> : null}
        </div>
      </div>
    );
  }

  return (
    <div className="ih-playground-toolbar ih-playground-toolbar-inline">
      <div className="ih-playground-toolbar-actions">
        <button type="button" className="btn-next" onClick={onRun} disabled={!canRun}>Run Code</button>
        {showCheckAnswer ? (
          <button type="button" className="btn-prev" onClick={onCheck} disabled={!canCheck}>Check Answer</button>
        ) : null}
        <button type="button" className="btn-prev" onClick={onReset}>Reset</button>
        {showCheckAnswer ? (
          <button type="button" className="btn-prev" onClick={onSolution} aria-pressed={showSolution}>Solution</button>
        ) : null}
        {canStop ? <button type="button" className="btn-prev" onClick={onStop}>Stop</button> : null}
      </div>
      {allowTryItYourself ? (
        <a href={`/playground/${exerciseId}`} className="btn-next ih-playground-try-link">
          Try it Yourself »
        </a>
      ) : null}
    </div>
  );
}
