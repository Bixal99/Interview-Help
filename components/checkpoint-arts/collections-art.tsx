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

const COLLECTION_FRAMES = [
  {
    step: "1. INDEX ACCESS arr[0]",
    activeIdx: 0,
    elem: "10",
    op: "arr[0] -> 10",
    desc: "Direct O(1) random memory access: Base Address + (0 * sizeof(int))",
  },
  {
    step: "2. INDEX ACCESS arr[2]",
    activeIdx: 2,
    elem: "30",
    op: "arr[2] -> 30",
    desc: "Direct O(1) random memory access: Base Address + (2 * sizeof(int))",
  },
  {
    step: "3. DYNAMIC APPEND arr.append(50)",
    activeIdx: 4,
    elem: "50",
    op: "append(50)",
    desc: "Appends element 50 to the end of contiguous buffer in O(1) amortized time",
  },
  {
    step: "4. SLICING arr[1:4]",
    activeIdx: 1,
    elem: "[20, 30, 40]",
    op: "arr[1:4]",
    desc: "Extracts sub-array slice [20, 30, 40] spanning indices 1 through 3",
  },
];

export function CollectionsArt() {
  const frameIdx = useAnimationFrame(COLLECTION_FRAMES.length, 1800);
  const current = COLLECTION_FRAMES[frameIdx];

  const ELEMENTS = ["10", "20", "30", "40", "50"];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 400 320"
        role="img"
        aria-label="Interactive collections, array indexing, and memory buffer diagram"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={400} height={320} fill={PAPER} />

        {/* Title Banner */}
        <rect x={24} y={16} width={352} height={34} fill={INK} rx={4} />
        <text x={200} y={38} textAnchor="middle" fill="#FFFFFF" fontSize={12} fontWeight={700} fontFamily={FONT} letterSpacing={2}>
          COLLECTIONS & SEQUENTIAL MEMORY
        </text>

        {/* Array Container */}
        <g transform="translate(24, 72)">
          {/* Base Buffer Border */}
          <rect x={0} y={0} width={352} height={110} fill="#FFFFFF" stroke={INK} strokeWidth={2.5} rx={6} />
          
          <rect x={0} y={0} width={352} height={24} fill={INK} rx={6} />
          <text x={176} y={16} textAnchor="middle" fill="#FFFFFF" fontSize={10} fontWeight={800} fontFamily={FONT}>
            CONTIGUOUS MEMORY BUFFER (ARRAY / LIST)
          </text>

          {/* 5 Sequential Slots */}
          {ELEMENTS.map((val, idx) => {
            const x = 16 + idx * 64;
            const isSelected = current.activeIdx === idx || (current.activeIdx === 1 && idx >= 1 && idx <= 3);
            const fillCol = isSelected ? YELLOW : (idx % 2 === 0 ? BLUE : MINT);

            return (
              <g key={idx} transform={`translate(${x}, 34)`}>
                {/* Slot Box */}
                <rect
                  x={0}
                  y={0}
                  width={60}
                  height={58}
                  fill={fillCol}
                  stroke={isSelected ? GREEN : INK}
                  strokeWidth={isSelected ? 3 : 1.5}
                  rx={4}
                />
                {/* Index label top */}
                <text x={30} y={16} textAnchor="middle" fill={INK} fontSize={10} fontWeight={800} fontFamily={FONT}>
                  [{idx}]
                </text>
                {/* Value in cell */}
                <text x={30} y={42} textAnchor="middle" fill={INK} fontSize={18} fontWeight={800} fontFamily={FONT}>
                  {val}
                </text>
                {/* Byte Address below */}
                <text x={30} y={70} textAnchor="middle" fill={INK} fontSize={8} fontWeight={600} fontFamily={FONT}>
                  0x{100 + idx * 4}
                </text>
              </g>
            );
          })}
        </g>

        {/* Operation Callout Card */}
        <g transform="translate(24, 196)">
          <rect x={0} y={0} width={352} height={54} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={6} />
          
          {/* Operation tag */}
          <rect x={12} y={10} width={110} height={34} fill={GREEN} rx={4} />
          <text x={65} y={32} textAnchor="middle" fill="#FFFFFF" fontSize={11} fontWeight={800} fontFamily="monospace">
            {current.op}
          </text>

          {/* Pointer Arrow */}
          <path d="M 130,27 L 152,27" fill="none" stroke={INK} strokeWidth={2.5} />
          <polygon points="156,27 148,22 148,32" fill={INK} />

          {/* Result Tag */}
          <rect x={164} y={10} width={176} height={34} fill={PINK} rx={4} />
          <text x={252} y={31} textAnchor="middle" fill={INK} fontSize={11} fontWeight={800} fontFamily={FONT}>
            Returns: <tspan fill="#DC2626">{current.elem}</tspan> in O(1)
          </text>
        </g>

        {/* Current State Status Bar */}
        <rect x={24} y={262} width={352} height={34} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={4} />
        <text x={200} y={283} textAnchor="middle" fill={INK} fontSize={10} fontWeight={600} fontFamily={FONT}>
          <tspan fontWeight={800} fill={GREEN}>{current.step}</tspan> — {current.desc.slice(0, 48)}...
        </text>
      </svg>
      <p className="ih-checkpoint-art-caption">Contiguous array indexing, O(1) direct memory calculation & element slicing</p>
    </div>
  );
}
