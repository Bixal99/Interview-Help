"use client";

import { useEffect, useState } from "react";

const OPS = [
  { name: "add", a: 2, b: 3, op: "+", result: 5 },
  { name: "sub", a: 8, b: 3, op: "-", result: 5 },
  { name: "mul", a: 2, b: 4, op: "*", result: 8 },
] as const;

type Stage = "idle" | "call" | "enter" | "body" | "ret" | "print" | "hold";
type Frame = { stage: Stage; op: number };

const FRAMES: Frame[] = [
  { stage: "idle", op: 0 },
  { stage: "idle", op: 0 },
  ...OPS.flatMap((_, op) => [
    { stage: "call", op },
    { stage: "enter", op },
    { stage: "enter", op },
    { stage: "body", op },
    { stage: "body", op },
    { stage: "ret", op },
    { stage: "print", op },
  ] satisfies Frame[]),
  { stage: "hold", op: 2 },
  { stage: "hold", op: 2 },
  { stage: "hold", op: 2 },
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

function CallLine({
  index,
  fn,
  a,
  b,
  on,
}: {
  index: number;
  fn: string;
  a: number;
  b: number;
  on: boolean;
}) {
  return (
    <div className={`ih-flow-line${on ? " is-on" : ""}`}>
      <span className="ih-run-gutter">{index}</span>
      <span className="ih-py-fn">cout</span>
      <span> &lt;&lt; </span>
      <span className="ih-py-fn">{fn}</span>
      <span>(</span>
      <span className="ih-py-num">{a}</span>
      <span>, </span>
      <span className="ih-py-num">{b}</span>
      <span>);</span>
    </div>
  );
}

export function CheckpointFunctions() {
  const now = FRAMES[useFrame(FRAMES.length, 700)];
  const op = OPS[now.op];
  const inModule = now.stage === "enter" || now.stage === "body" || now.stage === "ret";
  const printed = now.stage === "print" || now.stage === "hold" ? now.op + 1 : now.op;
  const chip =
    now.stage === "call" || now.stage === "enter" ? `${op.a}, ${op.b}` :
    now.stage === "body" ? `${op.a} ${op.op} ${op.b}` :
    now.stage === "ret" || now.stage === "print" || now.stage === "hold" ? String(op.result) :
    "";
  const chipAt =
    now.stage === "call" ? "main" :
    now.stage === "enter" || now.stage === "body" ? "fn" :
    now.stage === "ret" || now.stage === "print" || now.stage === "hold" ? "back" :
    "hide";
  const machine =
    now.stage === "body" ? `${op.a} ${op.op} ${op.b}` :
    now.stage === "ret" || now.stage === "print" || now.stage === "hold" ? String(op.result) :
    `a ${op.op} b`;

  return (
    <div className="ih-checkpoint-fn">
      <div className="ih-run-tabs">
        <span className={`ih-run-tab${!inModule ? " is-on" : ""}`}>main.cpp</span>
        <span className={`ih-run-tab${inModule ? " is-on" : ""}`}>calc.cpp</span>
        <span className="ih-run-tabs-label">call and return</span>
      </div>
      <div className="ih-fn-body">
        <div className={`ih-fn-file${!inModule ? " is-on" : ""}`}>
          <p className="ih-fn-file-name">main.cpp</p>
          <div className={`ih-flow-line${now.stage === "idle" ? " is-on" : ""}`}>
            <span className="ih-run-gutter">1</span>
            <span className="ih-py-kw">#include</span>
            <span> </span>
            <span className="ih-py-str">&lt;iostream&gt;</span>
          </div>
          <div className={`ih-flow-line${now.stage === "idle" ? " is-on" : ""}`}>
            <span className="ih-run-gutter">2</span>
            <span className="ih-py-kw">using</span>
            <span> namespace </span>
            <span className="ih-py-fn">std</span>
            <span>;</span>
          </div>
          {OPS.map((item, index) => (
            <CallLine
              key={item.name}
              index={index + 3}
              fn={item.name}
              a={item.a}
              b={item.b}
              on={now.stage !== "idle" && now.op === index && now.stage !== "hold"}
            />
          ))}
        </div>
        <div className={`ih-fn-file${inModule ? " is-on" : ""}`}>
          <p className="ih-fn-file-name">calc.cpp</p>
          {OPS.map((item, index) => (
            <div
              key={item.name}
              className={`ih-flow-line${inModule && now.op === index ? " is-on" : ""}`}
            >
              <span className="ih-run-gutter">{index + 1}</span>
              <span className="ih-py-kw">int</span>
              <span> </span>
              <span className="ih-py-fn">{item.name}</span>
              <span>(</span>
              <span className="ih-py-kw">int</span>
              <span> a, </span>
              <span className="ih-py-kw">int</span>
              <span> b) {"{ return a " + item.op + " b; }"}</span>
            </div>
          ))}
          <div className="ih-fn-machine">
            <span>{op.name}</span>
            <em>{machine}</em>
          </div>
        </div>
        <div className="ih-fn-flight" aria-hidden="true">
          <div className={`ih-fn-chip is-${chipAt}`}>{chip || "\u00a0"}</div>
        </div>
        <div className="ih-fn-stack">
          <p>call stack</p>
          <div className={`ih-fn-frame${inModule ? " is-on" : " is-empty"}`}>{op.name}</div>
          <div className="ih-fn-frame is-base">main</div>
        </div>
        <div className="ih-fn-out">
          <p className="ih-fn-file-name">output</p>
          {OPS.map((item, index) => (
            <div key={item.name} className="ih-flow-line">
              <span className="ih-run-gutter">{index + 1}</span>
              <span className={index < printed ? "ih-py-num" : "is-empty"}>{item.result}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
