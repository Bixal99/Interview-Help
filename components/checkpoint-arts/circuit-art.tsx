"use client";

import { useAnimationFrame } from "./use-animation-frame";

const INK = "#282A35";
const PAPER = "#E7E9EB";
const GREEN = "#04AA6D";
const BLUE = "#96D4FA";
const YELLOW = "#FFF4A3";
const PINK = "#FFC0C7";
const MINT = "#D9EEE1";
const FONT = "Poppins, sans-serif";

const GATES = [
  { name: "AND GATE", type: "AND", inA: 1, inB: 1, out: 1, sym: "A · B", desc: "Outputs 1 only when BOTH inputs are 1" },
  { name: "AND GATE", type: "AND", inA: 1, inB: 0, out: 0, sym: "A · B", desc: "Outputs 0 because Input B is 0" },
  { name: "OR GATE", type: "OR", inA: 0, inB: 1, out: 1, sym: "A + B", desc: "Outputs 1 because at least one input is 1" },
  { name: "OR GATE", type: "OR", inA: 0, inB: 0, out: 0, sym: "A + B", desc: "Outputs 0 because both inputs are 0" },
  { name: "XOR GATE", type: "XOR", inA: 1, inB: 0, out: 1, sym: "A ⊕ B", desc: "Outputs 1 because inputs are DIFFERENT" },
  { name: "XOR GATE", type: "XOR", inA: 1, inB: 1, out: 0, sym: "A ⊕ B", desc: "Outputs 0 because inputs are EQUAL" },
  { name: "NAND GATE", type: "NAND", inA: 1, inB: 1, out: 0, sym: "NOT (A · B)", desc: "Universal Gate: Inverted AND output" },
];

export function CircuitArt() {
  const frameIdx = useAnimationFrame(GATES.length, 1500);
  const current = GATES[frameIdx];

  const colorA = current.inA ? GREEN : "#FFFFFF";
  const colorB = current.inB ? GREEN : "#FFFFFF";
  const colorOut = current.out ? GREEN : "#FFFFFF";

  // Gate input touch X position based on gate geometry
  const touchXA = current.type === "XOR" ? 140 : current.type === "OR" ? 158 : 150;
  const touchXB = current.type === "XOR" ? 140 : current.type === "OR" ? 158 : 150;

  // Gate output tip X position
  const tipX = current.type === "NAND" ? 267 : 255;

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 400 320"
        role="img"
        aria-label="Interactive digital logic gate circuit animation with standard IEEE gate symbols"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={400} height={320} fill={PAPER} />

        {/* Title Banner */}
        <rect x={24} y={16} width={352} height={34} fill={INK} rx={4} />
        <text x={200} y={38} textAnchor="middle" fill="#FFFFFF" fontSize={12} fontWeight={700} fontFamily={FONT} letterSpacing={2}>
          LOGIC GATES & DIGITAL CIRCUITS
        </text>

        {/* --- INPUT A --- */}
        {/* Input A Switch Box */}
        <rect x={36} y={88} width={44} height={44} fill={colorA} stroke={INK} strokeWidth={2.5} rx={4} />
        <text x={58} y={117} textAnchor="middle" fill={current.inA ? "#FFFFFF" : INK} fontSize={20} fontWeight={800} fontFamily={FONT}>
          {current.inA}
        </text>
        <text x={58} y={148} textAnchor="middle" fill={INK} fontSize={10} fontWeight={700} fontFamily={FONT}>
          IN (A)
        </text>
        {/* Wire A to Gate */}
        <line
          x1={80}
          y1={110}
          x2={touchXA}
          y2={110}
          stroke={current.inA ? GREEN : INK}
          strokeWidth={4}
          strokeDasharray={current.inA ? "6 3" : "none"}
        />

        {/* --- INPUT B --- */}
        {/* Input B Switch Box */}
        <rect x={36} y={170} width={44} height={44} fill={colorB} stroke={INK} strokeWidth={2.5} rx={4} />
        <text x={58} y={199} textAnchor="middle" fill={current.inB ? "#FFFFFF" : INK} fontSize={20} fontWeight={800} fontFamily={FONT}>
          {current.inB}
        </text>
        <text x={58} y={230} textAnchor="middle" fill={INK} fontSize={10} fontWeight={700} fontFamily={FONT}>
          IN (B)
        </text>
        {/* Wire B to Gate */}
        <line
          x1={80}
          y1={192}
          x2={touchXB}
          y2={192}
          stroke={current.inB ? GREEN : INK}
          strokeWidth={4}
          strokeDasharray={current.inB ? "6 3" : "none"}
        />

        {/* --- IEEE STANDARD LOGIC GATE SYMBOL --- */}
        {/* AND Gate */}
        {current.type === "AND" && (
          <g>
            <path
              d="M 150,92 L 195,92 A 60,60 0 0,1 195,212 L 150,212 Z"
              fill={BLUE}
              stroke={INK}
              strokeWidth={3}
              strokeLinejoin="round"
            />
            <text x={188} y={157} textAnchor="middle" fill={INK} fontSize={15} fontWeight={800} fontFamily={FONT}>
              AND
            </text>
          </g>
        )}

        {/* OR Gate */}
        {current.type === "OR" && (
          <g>
            <path
              d="M 150,92 Q 170,152 150,212 Q 205,212 255,152 Q 205,92 150,92 Z"
              fill={YELLOW}
              stroke={INK}
              strokeWidth={3}
              strokeLinejoin="round"
            />
            <text x={194} y={157} textAnchor="middle" fill={INK} fontSize={15} fontWeight={800} fontFamily={FONT}>
              OR
            </text>
          </g>
        )}

        {/* XOR Gate */}
        {current.type === "XOR" && (
          <g>
            {/* Input double curve */}
            <path
              d="M 140,92 Q 160,152 140,212"
              fill="none"
              stroke={INK}
              strokeWidth={3.5}
              strokeLinecap="round"
            />
            {/* Main body */}
            <path
              d="M 150,92 Q 170,152 150,212 Q 205,212 255,152 Q 205,92 150,92 Z"
              fill={PINK}
              stroke={INK}
              strokeWidth={3}
              strokeLinejoin="round"
            />
            <text x={196} y={157} textAnchor="middle" fill={INK} fontSize={15} fontWeight={800} fontFamily={FONT}>
              XOR
            </text>
          </g>
        )}

        {/* NAND Gate */}
        {current.type === "NAND" && (
          <g>
            <path
              d="M 150,92 L 195,92 A 60,60 0 0,1 195,212 L 150,212 Z"
              fill={MINT}
              stroke={INK}
              strokeWidth={3}
              strokeLinejoin="round"
            />
            <circle cx={261} cy={152} r={6} fill="#FFFFFF" stroke={INK} strokeWidth={3} />
            <text x={188} y={157} textAnchor="middle" fill={INK} fontSize={14} fontWeight={800} fontFamily={FONT}>
              NAND
            </text>
          </g>
        )}

        {/* Formula Badge Below Gate */}
        <rect x={155} y={224} width={90} height={22} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={3} />
        <text x={200} y={239} textAnchor="middle" fill={INK} fontSize={11} fontWeight={800} fontFamily={FONT}>
          {current.sym}
        </text>

        {/* --- OUTPUT WIRE & BULB --- */}
        {/* Output Wire from Gate Tip to Bulb */}
        <line
          x1={tipX}
          y1={152}
          x2={298}
          y2={152}
          stroke={current.out ? GREEN : INK}
          strokeWidth={4}
          strokeDasharray={current.out ? "6 3" : "none"}
        />

        {/* Output Indicator Bulb */}
        <circle cx={328} cy={152} r={28} fill={colorOut} stroke={INK} strokeWidth={3} />
        <text x={328} y={160} textAnchor="middle" fill={current.out ? "#FFFFFF" : INK} fontSize={22} fontWeight={800} fontFamily={FONT}>
          {current.out}
        </text>
        <text x={328} y={196} textAnchor="middle" fill={INK} fontSize={11} fontWeight={800} fontFamily={FONT}>
          OUTPUT
        </text>

        {/* Current Evaluation Status Bar */}
        <rect x={24} y={262} width={352} height={34} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={4} />
        <text x={200} y={283} textAnchor="middle" fill={INK} fontSize={11} fontWeight={600} fontFamily={FONT}>
          <tspan fontWeight={800} fill={GREEN}>{current.name}</tspan> ({current.inA}, {current.inB}) → <tspan fontWeight={800} fill={current.out ? GREEN : "#DC2626"}>{current.out}</tspan> ({current.desc})
        </text>
      </svg>
      <p className="ih-checkpoint-art-caption">Standard IEEE logic gate symbols (AND, OR, XOR, NAND) & signal propagation</p>
    </div>
  );
}
