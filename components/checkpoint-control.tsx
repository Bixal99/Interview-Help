"use client";

import { useEffect, useState } from "react";

const CODE = [
  { indent: 0, parts: [{ t: "using", k: "kw" }, { t: " namespace " }, { t: "std", k: "fn" }, { t: ";" }] },
  { indent: 0, parts: [{ t: "int", k: "kw" }, { t: " i = " }, { t: "0", k: "num" }, { t: ";" }] },
  { indent: 0, parts: [{ t: "while", k: "kw" }, { t: " (i < " }, { t: "3", k: "num" }, { t: ") {" }] },
  { indent: 1, parts: [{ t: "if", k: "kw" }, { t: " (i % " }, { t: "2", k: "num" }, { t: " == " }, { t: "0", k: "num" }, { t: ")" }] },
  { indent: 2, parts: [{ t: "even", k: "fn" }, { t: "();" }] },
  { indent: 1, parts: [{ t: "else", k: "kw" }] },
  { indent: 2, parts: [{ t: "odd", k: "fn" }, { t: "();" }] },
  { indent: 1, parts: [{ t: "i += " }, { t: "1", k: "num" }, { t: ";" }] },
];

type Node = "start" | "check" | "branch" | "even" | "odd" | "step" | "done";
type Frame = { line: number; node: Node; i: number; yes: boolean | null; trace: string[] };

const FRAMES: Frame[] = [
  { line: 1, node: "start", i: 0, yes: null, trace: [] },
  { line: 2, node: "check", i: 0, yes: true, trace: [] },
  { line: 3, node: "branch", i: 0, yes: true, trace: [] },
  { line: 4, node: "even", i: 0, yes: true, trace: ["even"] },
  { line: 7, node: "step", i: 0, yes: null, trace: ["even"] },
  { line: 2, node: "check", i: 1, yes: true, trace: ["even"] },
  { line: 3, node: "branch", i: 1, yes: false, trace: ["even"] },
  { line: 6, node: "odd", i: 1, yes: false, trace: ["even", "odd"] },
  { line: 7, node: "step", i: 1, yes: null, trace: ["even", "odd"] },
  { line: 2, node: "check", i: 2, yes: true, trace: ["even", "odd"] },
  { line: 3, node: "branch", i: 2, yes: true, trace: ["even", "odd"] },
  { line: 4, node: "even", i: 2, yes: true, trace: ["even", "odd", "even"] },
  { line: 7, node: "step", i: 2, yes: null, trace: ["even", "odd", "even"] },
  { line: 2, node: "check", i: 3, yes: false, trace: ["even", "odd", "even"] },
  { line: -1, node: "done", i: 3, yes: false, trace: ["even", "odd", "even", "done"] },
  { line: -1, node: "done", i: 3, yes: false, trace: ["even", "odd", "even", "done"] },
  { line: -1, node: "done", i: 3, yes: false, trace: ["even", "odd", "even", "done"] },
];

const TOKEN: Record<Node, { x: number; y: number }> = {
  start: { x: 250, y: 18 },
  check: { x: 250, y: 64 },
  branch: { x: 250, y: 156 },
  even: { x: 108, y: 232 },
  odd: { x: 392, y: 232 },
  step: { x: 250, y: 308 },
  done: { x: 500, y: 76 },
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

function ink(on: boolean, live = "#04AA6D") {
  return on ? live : "#3a3e4c";
}

function Arrow({ x, y, dir, on }: { x: number; y: number; dir: "r" | "l" | "d" | "u"; on: boolean }) {
  const d =
    dir === "r" ? `${x},${y} ${x - 9},${y - 5} ${x - 9},${y + 5}` :
    dir === "l" ? `${x},${y} ${x + 9},${y - 5} ${x + 9},${y + 5}` :
    dir === "d" ? `${x},${y} ${x - 5},${y - 9} ${x + 5},${y - 9}` :
    `${x},${y} ${x - 5},${y + 9} ${x + 5},${y + 9}`;
  return <polygon points={d} fill={on ? "#04AA6D" : "#5c6168"} />;
}

export function CheckpointControl() {
  const now = FRAMES[useFrame(FRAMES.length, 720)];
  const pos = TOKEN[now.node];
  const n = now.node;
  const yesCheck = n === "check" && now.yes === true;
  const noCheck = (n === "check" && now.yes === false) || n === "done";
  const toBranch = n === "branch" || n === "even" || n === "odd" || n === "step";
  const toEven = n === "even";
  const toOdd = n === "odd";
  const toStep = n === "step";
  const looping = n === "check" && now.i > 0;

  return (
    <div className="ih-checkpoint-flow">
      <div className="ih-run-tabs">
        <span className="ih-run-tab is-on">loop.cpp</span>
        <span className="ih-run-tabs-label">control flow</span>
      </div>
      <div className="ih-flow-body">
        <div className="ih-flow-code">
          {CODE.map((row, index) => (
            <div
              key={index}
              className={`ih-flow-line${now.line === index ? " is-on" : ""}`}
              style={{ paddingLeft: `${0.45 + row.indent * 0.75}rem` }}
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
        <div className="ih-flow-pane">
          <p className="ih-fn-file-name">flowchart</p>
          <svg className="ih-flow-map" viewBox="0 0 620 360" role="img" aria-label="A complete while loop with an even or odd branch">
            <path d="M250 50 V64" fill="none" stroke={ink(n === "check" && now.i === 0)} strokeWidth="3" strokeLinecap="round" />
            <Arrow x={250} y={62} dir="d" on={n === "check" && now.i === 0} />
            <path d="M328 90 H430" fill="none" stroke={ink(noCheck, "#FFC0C7")} strokeWidth="3" strokeLinecap="round" />
            <Arrow x={430} y={90} dir="r" on={noCheck} />
            <path d="M250 122 V156" fill="none" stroke={ink(yesCheck || toBranch)} strokeWidth="3" strokeLinecap="round" />
            <Arrow x={250} y={154} dir="d" on={yesCheck || n === "branch"} />
            <path d="M178 182 H108 V230" fill="none" stroke={ink(toEven)} strokeWidth="3" strokeLinecap="round" />
            <Arrow x={108} y={230} dir="d" on={toEven} />
            <path d="M322 182 H392 V230" fill="none" stroke={ink(toOdd, "#FFC0C7")} strokeWidth="3" strokeLinecap="round" />
            <Arrow x={392} y={230} dir="d" on={toOdd} />
            <path d="M108 274 V292 H392" fill="none" stroke={ink(toStep)} strokeWidth="3" strokeLinecap="round" />
            <path d="M250 292 V306" fill="none" stroke={ink(toStep)} strokeWidth="3" strokeLinecap="round" />
            <Arrow x={250} y={306} dir="d" on={toStep} />
            <path d="M200 328 H36 V90 H172" fill="none" stroke={ink(looping)} strokeWidth="3" strokeLinecap="round" />
            <Arrow x={172} y={90} dir="r" on={looping} />

            <rect x="205" y="18" width="90" height="32" rx="6" fill={n === "start" ? "#04AA6D" : "#171924"} stroke="#04AA6D" strokeWidth="2.5" />
            <text x="250" y="39" textAnchor="middle" fill={n === "start" ? "#111218" : "#04AA6D"} fontSize="13" fontWeight="700">i = 0</text>

            <polygon points="250,64 328,90 250,116 172,90" fill={n === "check" ? "#FFF4A3" : "#171924"} stroke="#FFF4A3" strokeWidth="2.5" />
            <text x="250" y="95" textAnchor="middle" fill={n === "check" ? "#111218" : "#FFF4A3"} fontSize="14" fontWeight="700">i &lt; 3</text>

            <rect x="430" y="70" width="90" height="40" rx="6" fill={n === "done" ? "#e8e6e3" : "#171924"} stroke="#e8e6e3" strokeWidth="2.5" />
            <text x="475" y="95" textAnchor="middle" fill={n === "done" ? "#111218" : "#e8e6e3"} fontSize="14" fontWeight="700">done</text>

            <polygon points="250,156 322,182 250,208 178,182" fill={n === "branch" ? "#96D4FA" : "#171924"} stroke="#96D4FA" strokeWidth="2.5" />
            <text x="250" y="187" textAnchor="middle" fill={n === "branch" ? "#111218" : "#96D4FA"} fontSize="14" fontWeight="700">even?</text>

            <rect x="58" y="232" width="100" height="42" rx="6" fill={n === "even" ? "#04AA6D" : "#171924"} stroke="#04AA6D" strokeWidth="2.5" />
            <text x="108" y="258" textAnchor="middle" fill={n === "even" ? "#111218" : "#04AA6D"} fontSize="14" fontWeight="700">even()</text>

            <rect x="342" y="232" width="100" height="42" rx="6" fill={n === "odd" ? "#FFC0C7" : "#171924"} stroke="#FFC0C7" strokeWidth="2.5" />
            <text x="392" y="258" textAnchor="middle" fill={n === "odd" ? "#111218" : "#FFC0C7"} fontSize="14" fontWeight="700">odd()</text>

            <rect x="200" y="308" width="100" height="40" rx="6" fill={n === "step" ? "#7dd3fc" : "#171924"} stroke="#7dd3fc" strokeWidth="2.5" />
            <text x="250" y="333" textAnchor="middle" fill={n === "step" ? "#111218" : "#7dd3fc"} fontSize="14" fontWeight="700">i += 1</text>

            <text x="268" y="144" fill={yesCheck ? "#04AA6D" : "#8b908f"} fontSize="11" fontWeight="700">yes</text>
            <text x="360" y="82" fill={noCheck ? "#FFC0C7" : "#8b908f"} fontSize="11" fontWeight="700">no</text>
            <text x="128" y="176" fill={toEven ? "#04AA6D" : "#8b908f"} fontSize="11" fontWeight="700">yes</text>
            <text x="348" y="176" fill={toOdd ? "#FFC0C7" : "#8b908f"} fontSize="11" fontWeight="700">no</text>
            <text x="44" y="210" fill={looping ? "#04AA6D" : "#8b908f"} fontSize="11" fontWeight="700" transform="rotate(-90 44 210)">loop</text>

            <g className="ih-flow-token" style={{ transform: `translate(${(pos.x / 620) * 100}%, ${(pos.y / 360) * 100}%)` }}>
              <circle r="7" fill="#04AA6D" />
              <circle r="13" fill="#04AA6D" opacity="0.22" />
            </g>
          </svg>
          <div className="ih-flow-trace">
            <span>trace</span>
            {["even", "odd", "even", "done"].map((item, index) => (
              <em key={`${item}-${index}`} className={now.trace[index] ? "is-on" : ""}>
                {now.trace[index] ?? item}
              </em>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
