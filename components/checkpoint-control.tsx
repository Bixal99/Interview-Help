"use client";

import { useEffect, useState } from "react";

const CODE = [
  { indent: 0, parts: [{ t: "i", k: "var" }, { t: " = " }, { t: "0", k: "num" }] },
  { indent: 0, parts: [{ t: "while", k: "kw" }, { t: " i < " }, { t: "3", k: "num" }, { t: ":" }] },
  { indent: 1, parts: [{ t: "if", k: "kw" }, { t: " i % " }, { t: "2", k: "num" }, { t: " == " }, { t: "0", k: "num" }, { t: ":" }] },
  { indent: 2, parts: [{ t: "even", k: "fn" }, { t: "()" }] },
  { indent: 1, parts: [{ t: "else", k: "kw" }, { t: ":" }] },
  { indent: 2, parts: [{ t: "odd", k: "fn" }, { t: "()" }] },
  { indent: 1, parts: [{ t: "i += " }, { t: "1", k: "num" }] },
];

type Node = "start" | "check" | "branch" | "even" | "odd" | "step" | "done";

type Frame = { line: number; node: Node; i: number; yes: boolean | null };

const FRAMES: Frame[] = [
  { line: 0, node: "start", i: 0, yes: null },
  { line: 1, node: "check", i: 0, yes: true },
  { line: 2, node: "branch", i: 0, yes: true },
  { line: 3, node: "even", i: 0, yes: true },
  { line: 6, node: "step", i: 0, yes: null },
  { line: 1, node: "check", i: 1, yes: true },
  { line: 2, node: "branch", i: 1, yes: false },
  { line: 5, node: "odd", i: 1, yes: false },
  { line: 6, node: "step", i: 1, yes: null },
  { line: 1, node: "check", i: 2, yes: true },
  { line: 2, node: "branch", i: 2, yes: true },
  { line: 3, node: "even", i: 2, yes: true },
  { line: 6, node: "step", i: 2, yes: null },
  { line: 1, node: "check", i: 3, yes: false },
  { line: -1, node: "done", i: 3, yes: false },
  { line: -1, node: "done", i: 3, yes: false },
  { line: -1, node: "done", i: 3, yes: false },
];

const TOKEN: Record<Node, { x: number; y: number }> = {
  start: { x: 140, y: 28 },
  check: { x: 140, y: 72 },
  branch: { x: 140, y: 168 },
  even: { x: 64, y: 248 },
  odd: { x: 216, y: 248 },
  step: { x: 140, y: 328 },
  done: { x: 248, y: 72 },
};

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

function tokenClass(kind?: string) {
  if (kind === "kw") return "ih-py-kw";
  if (kind === "fn") return "ih-py-fn";
  if (kind === "num") return "ih-py-num";
  if (kind === "var") return "ih-py-str";
  return "";
}

export function CheckpointControl() {
  const frame = useFrame(FRAMES.length, 720);
  const now = FRAMES[frame];
  const pos = TOKEN[now.node];

  return (
    <div className="ih-checkpoint-flow">
      <div className="ih-run-tabs">
        <span className="ih-run-tab is-on">loop.py</span>
        <span className="ih-run-tabs-label">control flow</span>
      </div>
      <div className="ih-flow-body">
        <div className="ih-flow-code">
          {CODE.map((row, index) => (
            <div
              key={index}
              className={`ih-flow-line${now.line === index ? " is-on" : ""}`}
              style={{ paddingLeft: `${0.55 + row.indent * 0.85}rem` }}
            >
              <span className="ih-run-gutter">{index + 1}</span>
              {row.parts.map((part, partIndex) => (
                <span key={partIndex} className={tokenClass(part.k)}>{part.t}</span>
              ))}
            </div>
          ))}
          <p className="ih-flow-i">
            i = <span>{now.i}</span>
          </p>
        </div>
        <svg className="ih-flow-map" viewBox="0 0 280 360" role="img" aria-label="A loop that branches on even and odd">
          <path d="M140 96 V128" fill="none" stroke="#2a2d3a" strokeWidth="3" />
          <path d="M140 192 V216" fill="none" stroke="#2a2d3a" strokeWidth="3" />
          <path d="M140 216 L64 216 L64 224" fill="none" stroke="#2a2d3a" strokeWidth="3" />
          <path d="M140 216 L216 216 L216 224" fill="none" stroke="#2a2d3a" strokeWidth="3" />
          <path d="M64 272 L64 308 L216 308 L216 272" fill="none" stroke="#2a2d3a" strokeWidth="3" />
          <path d="M140 308 V304" fill="none" stroke="#2a2d3a" strokeWidth="3" />
          <path d="M24 328 L24 72 L88 72" fill="none" stroke="#04AA6D" strokeWidth="3" strokeDasharray="6 6" />
          <path d="M192 72 H216" fill="none" stroke="#2a2d3a" strokeWidth="3" />
          <polygon points="140,48 192,72 140,96 88,72" fill={now.node === "check" ? "#FFF4A3" : "#171924"} stroke="#FFF4A3" strokeWidth="3" />
          <text x="140" y="76" textAnchor="middle" fill={now.node === "check" ? "#111218" : "#FFF4A3"} fontSize="13" fontWeight="700">i &lt; 3</text>
          <polygon points="140,144 188,168 140,192 92,168" fill={now.node === "branch" ? "#96D4FA" : "#171924"} stroke="#96D4FA" strokeWidth="3" />
          <text x="140" y="172" textAnchor="middle" fill={now.node === "branch" ? "#111218" : "#96D4FA"} fontSize="13" fontWeight="700">even?</text>
          <rect x="28" y="224" width="72" height="48" rx="2" fill={now.node === "even" ? "#04AA6D" : "#171924"} stroke="#04AA6D" strokeWidth="3" />
          <text x="64" y="254" textAnchor="middle" fill={now.node === "even" ? "#111218" : "#04AA6D"} fontSize="13" fontWeight="700">even</text>
          <rect x="180" y="224" width="72" height="48" rx="2" fill={now.node === "odd" ? "#FFC0C7" : "#171924"} stroke="#FFC0C7" strokeWidth="3" />
          <text x="216" y="254" textAnchor="middle" fill={now.node === "odd" ? "#111218" : "#FFC0C7"} fontSize="13" fontWeight="700">odd</text>
          <rect x="104" y="304" width="72" height="48" rx="2" fill={now.node === "step" ? "#7dd3fc" : "#171924"} stroke="#7dd3fc" strokeWidth="3" />
          <text x="140" y="334" textAnchor="middle" fill={now.node === "step" ? "#111218" : "#7dd3fc"} fontSize="13" fontWeight="700">i += 1</text>
          <rect x="216" y="48" width="56" height="48" rx="2" fill={now.node === "done" ? "#e8e6e3" : "#171924"} stroke="#e8e6e3" strokeWidth="3" />
          <text x="244" y="78" textAnchor="middle" fill={now.node === "done" ? "#111218" : "#e8e6e3"} fontSize="13" fontWeight="700">done</text>
          <text x="152" y="122" fill={now.node === "check" && now.yes === true ? "#04AA6D" : "#8b908f"} fontSize="11" fontWeight="700">yes</text>
          <text x="198" y="64" fill={now.node === "check" && now.yes === false ? "#FFC0C7" : "#8b908f"} fontSize="11" fontWeight="700">no</text>
          <text x="88" y="212" fill={now.node === "branch" && now.yes === true ? "#04AA6D" : "#8b908f"} fontSize="11" fontWeight="700">yes</text>
          <text x="168" y="212" fill={now.node === "branch" && now.yes === false ? "#FFC0C7" : "#8b908f"} fontSize="11" fontWeight="700">no</text>
          <g
            className="ih-flow-token"
            style={{ transform: `translate(${(pos.x / 280) * 100}%, ${(pos.y / 360) * 100}%)` }}
          >
            <circle r="8" fill="#04AA6D" />
            <circle r="14" fill="#04AA6D" opacity="0.22" />
          </g>
        </svg>
      </div>
    </div>
  );
}
