"use client";

import { useEffect, useState } from "react";

type Stage = "idle" | "call" | "enter" | "body" | "ret" | "assign" | "print" | "hold";

const FRAMES: Stage[] = [
  "idle", "idle",
  "call",
  "enter", "enter",
  "body", "body",
  "ret",
  "assign",
  "print",
  "hold", "hold", "hold", "hold",
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

export function CheckpointFunctions() {
  const stage = FRAMES[useFrame(FRAMES.length, 780)];
  const inModule = stage === "enter" || stage === "body" || stage === "ret";
  const stackAdd = inModule;
  const chip =
    stage === "call" || stage === "enter" ? "2, 3" :
    stage === "body" ? "2 + 3" :
    stage === "ret" || stage === "assign" || stage === "print" || stage === "hold" ? "5" :
    "";
  const chipAt = stage === "call" ? "main" : stage === "enter" || stage === "body" ? "fn" : stage === "ret" || stage === "assign" || stage === "print" || stage === "hold" ? "back" : "hide";

  return (
    <div className="ih-checkpoint-fn">
      <div className="ih-run-tabs">
        <span className={`ih-run-tab${!inModule ? " is-on" : ""}`}>main.py</span>
        <span className={`ih-run-tab${inModule ? " is-on" : ""}`}>calc.py</span>
        <span className="ih-run-tabs-label">call and return</span>
      </div>
      <div className="ih-fn-body">
        <div className={`ih-fn-file${!inModule ? " is-on" : ""}`}>
          <p className="ih-fn-file-name">main.py</p>
          <div className={`ih-flow-line${stage === "idle" ? " is-on" : ""}`}>
            <span className="ih-run-gutter">1</span>
            <span className="ih-py-kw">from</span>
            <span> calc </span>
            <span className="ih-py-kw">import</span>
            <span> add</span>
          </div>
          <div className="ih-flow-line is-blank">
            <span className="ih-run-gutter">2</span>
          </div>
          <div className={`ih-flow-line${stage === "call" || stage === "assign" ? " is-on" : ""}`}>
            <span className="ih-run-gutter">3</span>
            <span>total = </span>
            <span className="ih-py-fn">add</span>
            <span>(</span>
            <span className="ih-py-num">2</span>
            <span>, </span>
            <span className="ih-py-num">3</span>
            <span>)</span>
          </div>
          <div className={`ih-flow-line${stage === "print" || stage === "hold" ? " is-on" : ""}`}>
            <span className="ih-run-gutter">4</span>
            <span className="ih-py-fn">print</span>
            <span>(total)</span>
          </div>
        </div>
        <div className={`ih-fn-file${inModule ? " is-on" : ""}`}>
          <p className="ih-fn-file-name">calc.py</p>
          <div className={`ih-flow-line${stage === "enter" ? " is-on" : ""}`}>
            <span className="ih-run-gutter">1</span>
            <span className="ih-py-kw">def</span>
            <span> </span>
            <span className="ih-py-fn">add</span>
            <span>(a, b):</span>
          </div>
          <div className={`ih-flow-line${stage === "body" || stage === "ret" ? " is-on" : ""}`}>
            <span className="ih-run-gutter">2</span>
            <span className="ih-py-kw">return</span>
            <span> a + b</span>
          </div>
          <div className="ih-fn-machine">
            <span>add</span>
            <em>{stage === "body" ? "2 + 3" : stage === "ret" || stage === "assign" || stage === "print" || stage === "hold" ? "5" : "a + b"}</em>
          </div>
        </div>
        <div className="ih-fn-flight" aria-hidden="true">
          <div className={`ih-fn-chip is-${chipAt}`}>{chip || "\u00a0"}</div>
        </div>
        <div className="ih-fn-stack">
          <p>call stack</p>
          <div className={`ih-fn-frame${stackAdd ? " is-on" : " is-empty"}`}>add</div>
          <div className="ih-fn-frame is-base">main</div>
        </div>
        <div className="ih-fn-out">
          <p className="ih-fn-file-name">output</p>
          <div className="ih-flow-line">
            <span className="ih-run-gutter">1</span>
            <span className={stage === "print" || stage === "hold" ? "ih-py-num" : "is-empty"}>5</span>
          </div>
        </div>
      </div>
    </div>
  );
}
