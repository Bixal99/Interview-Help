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
  { visited: ["A"], queue: ["B", "C"], msg: "BFS: Visit Node A -> Enqueue neighbors B, C" },
  { visited: ["A", "B"], queue: ["C", "D", "E"], msg: "Dequeue B -> Visit Node B -> Enqueue D, E" },
  { visited: ["A", "B", "C"], queue: ["D", "E", "F"], msg: "Dequeue C -> Visit Node C -> Enqueue F" },
  { visited: ["A", "B", "C", "D", "E", "F"], queue: [], msg: "GRAPH TRAVERSAL COMPLETE! Shortest path resolved" },
];

export function GraphArt() {
  const frameIdx = useAnimationFrame(FRAMES.length, 1600);
  const current = FRAMES[frameIdx];

  const isV = (id: string) => current.visited.includes(id);

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 400 320"
        role="img"
        aria-label="Interactive Graph BFS and DFS search wavefront animation"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={400} height={320} fill={PAPER} />

        {/* Title Banner */}
        <rect x={24} y={16} width={352} height={34} fill={INK} rx={4} />
        <text x={200} y={38} textAnchor="middle" fill="#FFFFFF" fontSize={12} fontWeight={700} fontFamily={FONT} letterSpacing={2}>
          GRAPHS & PATHFINDING (BFS / DFS)
        </text>

        {/* Graph Canvas */}
        <g transform="translate(24, 60)">
          <rect x={0} y={0} width={352} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={4} />

          {/* Graph Edges */}
          <line x1={80} y1={95} x2={160} y2={50} stroke={isV("B") ? GREEN : INK} strokeWidth={3.5} />
          <line x1={80} y1={95} x2={160} y2={140} stroke={isV("C") ? GREEN : INK} strokeWidth={3.5} />
          <line x1={160} y1={50} x2={270} y2={40} stroke={isV("D") ? GREEN : INK} strokeWidth={3.5} />
          <line x1={160} y1={50} x2={220} y2={95} stroke={isV("E") ? GREEN : INK} strokeWidth={3.5} />
          <line x1={160} y1={140} x2={270} y2={145} stroke={isV("F") ? GREEN : INK} strokeWidth={3.5} />
          <line x1={220} y1={95} x2={270} y2={145} stroke={isV("F") ? GREEN : INK} strokeWidth={3} />

          {/* Node A (Start) */}
          <circle cx={80} cy={95} r={20} fill={isV("A") ? GREEN : BLUE} stroke={INK} strokeWidth={2} />
          <text x={80} y={101} textAnchor="middle" fill={isV("A") ? "#FFFFFF" : INK} fontSize={13} fontWeight={800} fontFamily={FONT}>A</text>

          {/* Node B */}
          <circle cx={160} cy={50} r={18} fill={isV("B") ? GREEN : (current.queue.includes("B") ? YELLOW : BLUE)} stroke={INK} strokeWidth={2} />
          <text x={160} y={55} textAnchor="middle" fill={isV("B") ? "#FFFFFF" : INK} fontSize={12} fontWeight={800} fontFamily={FONT}>B</text>

          {/* Node C */}
          <circle cx={160} cy={140} r={18} fill={isV("C") ? GREEN : (current.queue.includes("C") ? YELLOW : BLUE)} stroke={INK} strokeWidth={2} />
          <text x={160} y={145} textAnchor="middle" fill={isV("C") ? "#FFFFFF" : INK} fontSize={12} fontWeight={800} fontFamily={FONT}>C</text>

          {/* Node D */}
          <circle cx={270} cy={40} r={16} fill={isV("D") ? GREEN : (current.queue.includes("D") ? YELLOW : PINK)} stroke={INK} strokeWidth={2} />
          <text x={270} y={45} textAnchor="middle" fill={isV("D") ? "#FFFFFF" : INK} fontSize={11} fontWeight={800} fontFamily={FONT}>D</text>

          {/* Node E */}
          <circle cx={220} cy={95} r={16} fill={isV("E") ? GREEN : (current.queue.includes("E") ? YELLOW : PINK)} stroke={INK} strokeWidth={2} />
          <text x={220} y={100} textAnchor="middle" fill={isV("E") ? "#FFFFFF" : INK} fontSize={11} fontWeight={800} fontFamily={FONT}>E</text>

          {/* Node F (Target) */}
          <circle cx={270} cy={145} r={18} fill={isV("F") ? GREEN : (current.queue.includes("F") ? YELLOW : PINK)} stroke={INK} strokeWidth={2} />
          <text x={270} y={150} textAnchor="middle" fill={isV("F") ? "#FFFFFF" : INK} fontSize={12} fontWeight={800} fontFamily={FONT}>F</text>
        </g>

        {/* Action Status Bar */}
        <rect x={24} y={264} width={352} height={32} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={4} />
        <text x={200} y={284} textAnchor="middle" fill={INK} fontSize={11} fontWeight={700} fontFamily={FONT}>
          FRONTIER: <tspan fill={GREEN} fontWeight={800}>{current.msg}</tspan>
        </text>
      </svg>
      <p className="ih-checkpoint-art-caption">Graph algorithms, shortest paths & connected networks</p>
    </div>
  );
}
