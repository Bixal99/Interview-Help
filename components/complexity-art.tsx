"use client";

import { useEffect, useState, type ReactNode } from "react";

const OX = 48;
const OY = 340;
const ARROW_LEN = 12;
const AXIS_END_X = 348;
const AXIS_TOP_Y = 56;

const COMPLEXITY_CURVES = [
  { n: 1, c1: [140, 332], c2: [220, 332], x: 292, y: 332, color: "#DC2626", label: "O(1)", width: 2.5, labelDx: -4, example: "array index" },
  { n: 2, c1: [130, 334], c2: [220, 308], x: 292, y: 292, color: "#70757A", label: "O(log n)", width: 2.5, example: "binary search" },
  { n: 3, c1: [140, 318], c2: [220, 270], x: 292, y: 238, color: "#EA580C", label: "O(√n)", width: 2.5, example: "nested sqrt loop" },
  { n: 4, c1: [130, 278], c2: [210, 210], x: 292, y: 168, color: "#0E7490", label: "O(n)", width: 3, example: "single loop" },
  { n: 5, c1: [120, 320], c2: [210, 200], x: 292, y: 118, color: "#26538D", label: "O(n log n)", width: 3, example: "merge sort" },
  { n: 6, c1: [110, 336], c2: [200, 190], x: 272, y: 78, color: "#04AA6D", label: "O(n²)", width: 3.5, labelDx: -6, example: "nested loops" },
  { n: 7, c1: [95, 338], c2: [215, 100], x: 238, y: 52, color: "#C84C4C", label: "O(n³)", width: 3, labelDx: -16, example: "triple loops" },
  { n: 8, c1: [80, 338], c2: [175, 110], x: 190, y: 46, color: "#111111", label: "O(2ⁿ)", width: 3.5, labelDx: -16, example: "naive recursion" },
  { n: 9, c1: [62, 338], c2: [125, 125], x: 132, y: 44, color: "#7c3aed", label: "O(n!)", width: 3.5, labelDx: -16, example: "permutations" },
] as const;

function ArrowHead({
  x,
  y,
  angle,
  color,
  drawClass,
}: {
  x: number;
  y: number;
  angle: number;
  color: string;
  drawClass: string;
}) {
  return (
    <polygon
      className={`ih-label ${drawClass}`}
      fill={color}
      stroke={color}
      strokeWidth="1.2"
      strokeLinejoin="round"
      transform={`translate(${x} ${y}) rotate(${angle})`}
      points="0,0 -12,-6 -12,6"
    />
  );
}

function arrowAngle(fromX: number, fromY: number, toX: number, toY: number) {
  return (Math.atan2(toY - fromY, toX - fromX) * 180) / Math.PI;
}

function shortenEnd(fromX: number, fromY: number, toX: number, toY: number) {
  const dx = toX - fromX;
  const dy = toY - fromY;
  const len = Math.hypot(dx, dy) || 1;
  return {
    x: toX - (dx / len) * ARROW_LEN,
    y: toY - (dy / len) * ARROW_LEN,
  };
}

function curvePath(curve: (typeof COMPLEXITY_CURVES)[number]) {
  const end = shortenEnd(curve.c2[0], curve.c2[1], curve.x, curve.y);
  return `M${OX} ${OY} C${curve.c1[0]} ${curve.c1[1]} ${curve.c2[0]} ${curve.c2[1]} ${end.x} ${end.y}`;
}

function labelPlacement(curve: (typeof COMPLEXITY_CURVES)[number]) {
  const dx = curve.x - curve.c2[0];
  const dy = curve.y - curve.c2[1];
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  return {
    x: curve.x + ux * 16 + ("labelDx" in curve ? curve.labelDx : 0),
    y: curve.y + uy * 16,
  };
}

function Super({ children }: { children: ReactNode }) {
  return (
    <>
      <tspan dy="-0.32em" fontSize="10">{children}</tspan>
      <tspan dy="0.32em" fontSize="13">{""}</tspan>
    </>
  );
}

function ComplexityMath({ n }: { n: (typeof COMPLEXITY_CURVES)[number]["n"] }) {
  if (n === 1) return <>O(1)</>;
  if (n === 2) return <>O(log n)</>;
  if (n === 3) return <>O(√n)</>;
  if (n === 4) return <>O(n)</>;
  if (n === 5) return <>O(n log n)</>;
  if (n === 6) return <>O(n<Super>2</Super>)</>;
  if (n === 7) return <>O(n<Super>3</Super>)</>;
  if (n === 8) return <>O(2<Super>n</Super>)</>;
  return <>O(n!)</>;
}
function ChartFrame({ children, label, caption }: { children: ReactNode; label: string; caption?: string }) {
  return (
    <div className="ih-checkpoint-art">
      <svg viewBox="0 0 400 400" role="img" aria-label={label} className="ih-big-o">
        <rect x={0} y={0} width={400} height={400} fill="#E7E9EB" />
        {children}
      </svg>
      {caption ? <p className="ih-checkpoint-art-caption">{caption}</p> : null}
    </div>
  );
}

export function ComplexityArt({ caption = "Time Complexities" }: { caption?: string }) {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return undefined;
    const timer = window.setInterval(() => setCycle((value) => value + 1), 7200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <ChartFrame key={cycle} label="How work grows as the input grows" caption={caption}>
      <line x1={OX} y1={OY} x2={AXIS_END_X} y2={OY} stroke="#282A35" strokeWidth="2" shapeRendering="crispEdges" />
      <polygon points={`${AXIS_END_X + 8},${OY} ${AXIS_END_X},${OY - 4} ${AXIS_END_X},${OY + 4}`} fill="#282A35" />
      <text x={AXIS_END_X + 18} y={OY} fill="#282A35" fontSize="13" fontWeight="700" fontFamily="Poppins, sans-serif" dominantBaseline="middle">n</text>
      <line x1={OX} y1={OY} x2={OX} y2={AXIS_TOP_Y} stroke="#282A35" strokeWidth="2" shapeRendering="crispEdges" />
      <polygon points={`${OX},${AXIS_TOP_Y - 8} ${OX - 4},${AXIS_TOP_Y} ${OX + 4},${AXIS_TOP_Y}`} fill="#282A35" />
      <text x={OX} y={AXIS_TOP_Y - 16} fill="#282A35" fontSize="13" fontWeight="700" fontFamily="Poppins, sans-serif" textAnchor="middle">t</text>
      <text transform={`translate(16 ${(AXIS_TOP_Y + OY) / 2}) rotate(-90)`} fill="#282A35" fontSize="13" fontWeight="700" fontFamily="Poppins, sans-serif" textAnchor="middle" dominantBaseline="middle">Time</text>
      <text x={(OX + AXIS_END_X) / 2} y={OY + 28} fill="#282A35" fontSize="13" fontWeight="700" fontFamily="Poppins, sans-serif" textAnchor="middle">Size</text>
      {COMPLEXITY_CURVES.map((curve) => {
        const label = labelPlacement(curve);
        return (
          <g key={curve.n}>
            <path className={`ih-draw ih-draw-${curve.n}`} d={curvePath(curve)} pathLength={1} fill="none" stroke={curve.color} strokeWidth={curve.width} />
            <ArrowHead x={curve.x} y={curve.y} angle={arrowAngle(curve.c2[0], curve.c2[1], curve.x, curve.y)} color={curve.color} drawClass={`ih-draw-${curve.n}`} />
            <text
              className={`ih-label ih-draw-${curve.n}`}
              x={0}
              y={0}
              transform={`translate(${label.x} ${label.y})`}
              fill={curve.color}
              fontSize="13"
              fontWeight="700"
              fontFamily="Poppins, sans-serif"
              textAnchor="start"
              dominantBaseline="middle"
            >
              <ComplexityMath n={curve.n} />
            </text>
          </g>
        );
      })}
    </ChartFrame>
  );
}

const FLOW_STEPS = [
  {
    kicker: "Start",
    title: "Unsorted array",
    hint: "Question: is this value here?",
    kind: "start",
    file: "search.py",
    code: (
      <>
        <span className="ih-cflow-line is-1">arr = [<span className="hljs-number">7</span>, <span className="hljs-number">2</span>, <span className="hljs-number">9</span>, <span className="hljs-number">4</span>]</span>
        {"\n"}
        <span className="ih-cflow-line is-2">target = <span className="hljs-number">4</span></span>
      </>
    ),
  },
  {
    kicker: "Linear search",
    title: "O(n)",
    hint: "Worst case: inspect every element",
    kind: "cost",
    file: "linear.py",
    code: (
      <>
        <span className="ih-cflow-line is-1"><span className="hljs-keyword">for</span> x <span className="hljs-keyword">in</span> arr:</span>
        {"\n"}
        <span className="ih-cflow-line is-2">    <span className="hljs-keyword">if</span> x == target:</span>
        {"\n"}
        <span className="ih-cflow-line is-3">        <span className="hljs-keyword">return</span> <span className="hljs-keyword">True</span></span>
      </>
    ),
  },
  {
    kicker: "Decision",
    title: "Can we search faster?",
    hint: "Improvements are never free",
    kind: "question",
    file: "question.py",
    code: (
      <>
        <span className="ih-cflow-line is-1"><span className="hljs-comment"># still one pass per item</span></span>
        {"\n"}
        <span className="ih-cflow-line is-2"><span className="hljs-comment"># can we drop half the work?</span></span>
      </>
    ),
  },
  {
    kicker: "Trade-off",
    title: "Sort the data first",
    hint: "New requirement introduced",
    kind: "tradeoff",
    file: "sort.py",
    code: (
      <>
        <span className="ih-cflow-line is-1">arr.sort()  <span className="hljs-comment"># O(n log n) once</span></span>
        {"\n"}
        <span className="ih-cflow-line is-2"><span className="hljs-comment"># now arr is [2, 4, 7, 9]</span></span>
      </>
    ),
  },
  {
    kicker: "Binary search · Phase 7",
    title: "O(log n)",
    hint: "Each comparison drops about half the remaining space",
    kind: "win",
    file: "binary.py",
    code: (
      <>
        <span className="ih-cflow-line is-1">lo, hi = <span className="hljs-number">0</span>, len(arr) - <span className="hljs-number">1</span></span>
        {"\n"}
        <span className="ih-cflow-line is-2"><span className="hljs-keyword">while</span> lo &lt;= hi:</span>
        {"\n"}
        <span className="ih-cflow-line is-3">    mid = (lo + hi) // <span className="hljs-number">2</span></span>
        {"\n"}
        <span className="ih-cflow-line is-4">    <span className="hljs-keyword">if</span> arr[mid] == target:</span>
        {"\n"}
        <span className="ih-cflow-line is-5">        <span className="hljs-keyword">return</span> <span className="hljs-keyword">True</span></span>
        {"\n"}
        <span className="ih-cflow-line is-6">    <span className="hljs-keyword">if</span> arr[mid] &lt; target:</span>
        {"\n"}
        <span className="ih-cflow-line is-7">        lo = mid + <span className="hljs-number">1</span></span>
        {"\n"}
        <span className="ih-cflow-line is-8">    <span className="hljs-keyword">else</span>:</span>
        {"\n"}
        <span className="ih-cflow-line is-9">        hi = mid - <span className="hljs-number">1</span></span>
      </>
    ),
  },
] as const;

export function SearchComplexityFlow() {
  return (
    <div className="ih-cflow">
      {FLOW_STEPS.map((step, index) => {
        const delay = `${0.12 + index * 0.22}s`;
        return (
          <div key={step.title} className="ih-cflow-row" style={{ animationDelay: delay, ["--ih-cflow-delay" as string]: delay }}>
            {index > 0 ? <span className="ih-cflow-join" aria-hidden="true" /> : null}
            <figure className={`ih-cflow-card is-${step.kind}`}>
              <span className="ih-pipe-kicker">{step.kicker}</span>
              <strong>{step.title}</strong>
              <span className="ih-pipe-hint">{step.hint}</span>
            </figure>
            <pre className="ih-cflow-snippet">
              <span className="ih-cflow-snippet-file">{step.file}</span>
              <code>{step.code}</code>
            </pre>
          </div>
        );
      })}
    </div>
  );
}
