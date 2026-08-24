"use client";

import { useAnimationFrame } from "./use-animation-frame";

const INK = "#282A35";
const PAPER = "#E7E9EB";
const GREEN = "#04AA6D";
const BLUE = "#96D4FA";
const YELLOW = "#FFF4A3";
const PINK = "#FFC0C7";
const FONT = "Poppins, sans-serif";

const FRAMES = [
  { active: "root", val: 50, msg: "Search(65) -> Start at Root [50] (65 > 50 -> Go Right)" },
  { active: "right", val: 75, msg: "Current [75] (65 < 75 -> Go Left)" },
  { active: "target", val: 65, msg: "MATCH FOUND! Target node [65] located in O(log n)" },
  { active: "all", val: 0, msg: "Balanced Binary Search Tree property maintained" },
];

export function TreeArt() {
  const frameIdx = useAnimationFrame(FRAMES.length, 1600);
  const current = FRAMES[frameIdx];

  const isRoot = current.active === "root" || current.active === "all";
  const isRight = current.active === "right" || current.active === "all";
  const isTarget = current.active === "target" || current.active === "all";

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 400 320"
        role="img"
        aria-label="Interactive Binary Search Tree traversal animation"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={400} height={320} fill={PAPER} />

        {/* Title Banner */}
        <rect x={24} y={16} width={352} height={34} fill={INK} rx={4} />
        <text x={200} y={38} textAnchor="middle" fill="#FFFFFF" fontSize={12} fontWeight={700} fontFamily={FONT} letterSpacing={2}>
          BINARY SEARCH TREES & HIERARCHIES
        </text>

        {/* Tree Canvas */}
        <g transform="translate(24, 60)">
          <rect x={0} y={0} width={352} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={4} />

          {/* Tree Edges */}
          <line x1={176} y1={30} x2={96} y2={80} stroke={INK} strokeWidth={3} />
          <line x1={176} y1={30} x2={256} y2={80} stroke={isRight || isTarget ? GREEN : INK} strokeWidth={4} />
          <line x1={96} y1={80} x2={60} y2={140} stroke={INK} strokeWidth={2.5} />
          <line x1={96} y1={80} x2={130} y2={140} stroke={INK} strokeWidth={2.5} />
          <line x1={256} y1={80} x2={220} y2={140} stroke={isTarget ? GREEN : INK} strokeWidth={4} />
          <line x1={256} y1={80} x2={290} y2={140} stroke={INK} strokeWidth={2.5} />

          {/* Level 0: Root */}
          <circle cx={176} cy={30} r={18} fill={isRoot ? YELLOW : BLUE} stroke={INK} strokeWidth={2} />
          <text x={176} y={35} textAnchor="middle" fill={INK} fontSize={12} fontWeight={800} fontFamily={FONT}>50</text>

          {/* Level 1: Left & Right */}
          <circle cx={96} cy={80} r={16} fill={BLUE} stroke={INK} strokeWidth={2} />
          <text x={96} y={84} textAnchor="middle" fill={INK} fontSize={11} fontWeight={800} fontFamily={FONT}>25</text>

          <circle cx={256} cy={80} r={16} fill={isRight ? YELLOW : BLUE} stroke={INK} strokeWidth={2} />
          <text x={256} y={84} textAnchor="middle" fill={INK} fontSize={11} fontWeight={800} fontFamily={FONT}>75</text>

          {/* Level 2: Leaves */}
          <circle cx={60} cy={140} r={14} fill={PINK} stroke={INK} strokeWidth={1.5} />
          <text x={60} y={144} textAnchor="middle" fill={INK} fontSize={10} fontWeight={700} fontFamily={FONT}>10</text>

          <circle cx={130} cy={140} r={14} fill={PINK} stroke={INK} strokeWidth={1.5} />
          <text x={130} y={144} textAnchor="middle" fill={INK} fontSize={10} fontWeight={700} fontFamily={FONT}>35</text>

          <circle cx={220} cy={140} r={15} fill={isTarget ? GREEN : PINK} stroke={INK} strokeWidth={2} />
          <text x={220} y={144} textAnchor="middle" fill={isTarget ? "#FFFFFF" : INK} fontSize={11} fontWeight={800} fontFamily={FONT}>65</text>

          <circle cx={290} cy={140} r={14} fill={PINK} stroke={INK} strokeWidth={1.5} />
          <text x={290} y={144} textAnchor="middle" fill={INK} fontSize={10} fontWeight={700} fontFamily={FONT}>90</text>
        </g>

        {/* Action Status Bar */}
        <rect x={24} y={264} width={352} height={32} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={4} />
        <text x={200} y={284} textAnchor="middle" fill={INK} fontSize={11} fontWeight={700} fontFamily={FONT}>
          PATH: <tspan fill={GREEN} fontWeight={800}>{current.msg}</tspan>
        </text>
      </svg>
      <p className="ih-checkpoint-art-caption">Binary Search Trees, Heaps & hierarchical traversal</p>
    </div>
  );
}
