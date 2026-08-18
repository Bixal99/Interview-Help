"use client";

import { useEffect, useState } from "react";

const LINES = ["print(1)", "print(2)"];
const OUTPUTS = ["1", "2"];

type CStage = "source" | "eat" | "compile" | "binary" | "cpu" | "out";
type IStage = "source" | "read0" | "out0" | "read1" | "out1" | "hold";

const C_FRAMES: CStage[] = [
  "source", "source",
  "eat",
  "compile", "compile", "compile",
  "binary",
  "cpu",
  "out", "out", "out",
];
const I_FRAMES: IStage[] = [
  "source",
  "read0",
  "out0",
  "read1",
  "out1",
  "hold", "hold", "hold", "hold", "hold", "hold",
];

function useFrame(length: number, ms: number) {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setFrame(length - 1);
      return;
    }
    const id = window.setInterval(() => {
      setFrame((current) => (current + 1) % length);
    }, ms);
    return () => window.clearInterval(id);
  }, [length, ms]);
  return frame;
}

function Arrow() {
  return <div className="ih-run-arrow" aria-hidden="true" />;
}

function Source({
  activeLine,
  eaten,
}: {
  activeLine: number | null;
  eaten: boolean;
}) {
  return (
    <div className={`ih-run-source${eaten ? " is-eaten" : ""}`}>
      {LINES.map((line, index) => (
        <div
          key={line}
          className={`ih-run-line${activeLine === index ? " is-on" : ""}${eaten ? " is-gone" : ""}`}
        >
          <span className="ih-run-gutter">{index + 1}</span>
          <span className="ih-py-fn">print</span>
          <span>(</span>
          <span className="ih-py-num">{index + 1}</span>
          <span>)</span>
        </div>
      ))}
    </div>
  );
}

function EditorOut({ lines }: { lines: string[] }) {
  return (
    <div className="ih-run-editor">
      <div className="ih-run-editor-tab">output</div>
      <div className="ih-run-editor-body">
        {[0, 1].map((index) => (
          <div
            key={index}
            className={`ih-run-editor-line${lines[index] ? "" : " is-empty"}`}
          >
            <span className="ih-run-gutter">{index + 1}</span>
            <span className="ih-py-num">{lines[index] ?? "\u00a0"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompilerSide({ stage }: { stage: CStage }) {
  const eaten = stage !== "source";
  const compiling = stage === "compile";
  const binary = stage === "binary" || stage === "cpu" || stage === "out";
  const cpu = stage === "cpu" || stage === "out";
  const out = stage === "out" ? OUTPUTS : [];

  return (
    <div className="ih-checkpoint-run-col">
      <p className="ih-checkpoint-run-kicker">compiler</p>
      <p className="ih-run-hint">whole file first, then run</p>
      <Source activeLine={null} eaten={eaten} />
      <Arrow />
      <div className={`ih-run-machine${compiling ? " is-on" : ""}`}>
        <span>compiler</span>
        <div className="ih-run-bar"><i className={compiling ? "is-fill" : binary ? "is-full" : ""} /></div>
      </div>
      <Arrow />
      <div className={`ih-run-bits${binary ? " is-on" : ""}`}>
        <span>01001101 11010010 00000001</span>
      </div>
      <Arrow />
      <div className={`ih-run-cpu${cpu ? " is-on" : ""}`}>CPU</div>
      <Arrow />
      <EditorOut lines={out} />
    </div>
  );
}

function InterpreterSide({ stage }: { stage: IStage }) {
  const activeLine = stage === "read0" || stage === "out0" ? 0 : stage === "read1" || stage === "out1" || stage === "hold" ? 1 : null;
  const out =
    stage === "out0" || stage === "read1" ? [OUTPUTS[0]] :
    stage === "out1" || stage === "hold" ? OUTPUTS :
    [];

  return (
    <div className="ih-checkpoint-run-col">
      <p className="ih-checkpoint-run-kicker">interpreter</p>
      <p className="ih-run-hint">one line, run it now</p>
      <Source activeLine={stage === "source" ? null : activeLine} eaten={false} />
      <Arrow />
      <div className={`ih-run-machine${stage === "read0" || stage === "read1" ? " is-on" : ""}`}>
        <span>{stage === "read0" ? "reading line 1" : stage === "read1" ? "reading line 2" : "read next line"}</span>
        <div className="ih-run-bar"><i /></div>
      </div>
      <Arrow />
      <div className="ih-run-bits">
        <span>no machine code</span>
      </div>
      <Arrow />
      <div className={`ih-run-cpu${stage === "out0" || stage === "out1" ? " is-on" : ""}`}>RUN</div>
      <Arrow />
      <EditorOut lines={out} />
    </div>
  );
}

export function CheckpointRun() {
  const frame = useFrame(C_FRAMES.length, 850);
  const cStage = C_FRAMES[frame];
  const iStage = I_FRAMES[frame];

  return (
    <div className="ih-checkpoint-run">
      <div className="ih-run-tabs">
        <span className="ih-run-tab is-on">main.py</span>
        <span className="ih-run-tabs-label">how code runs</span>
      </div>
      <div className="ih-checkpoint-run-grid">
        <CompilerSide stage={cStage} />
        <InterpreterSide stage={iStage} />
      </div>
    </div>
  );
}
