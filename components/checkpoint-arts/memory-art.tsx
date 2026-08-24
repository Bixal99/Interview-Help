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

const FRAMES = [
  { action: "STACK PUSH: main()", stackCount: 1, heapCount: 1, ptr: "0x7FFF" },
  { action: "STACK PUSH: compute(x)", stackCount: 2, heapCount: 1, ptr: "0x7FF0" },
  { action: "HEAP ALLOC: malloc(64)", stackCount: 2, heapCount: 2, ptr: "0x10A4" },
  { action: "STACK PUSH: helper()", stackCount: 3, heapCount: 2, ptr: "0x7FE0" },
  { action: "STACK POP: helper()", stackCount: 2, heapCount: 2, ptr: "0x7FF0" },
  { action: "HEAP ALLOC: new Node()", stackCount: 2, heapCount: 3, ptr: "0x10E8" },
];

export function MemoryArt() {
  const frameIdx = useAnimationFrame(FRAMES.length, 1500);
  const current = FRAMES[frameIdx];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 400 320"
        role="img"
        aria-label="Interactive memory layout stack and heap animation"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={400} height={320} fill={PAPER} />

        {/* Title Banner */}
        <rect x={24} y={16} width={352} height={34} fill={INK} rx={4} />
        <text x={200} y={38} textAnchor="middle" fill="#FFFFFF" fontSize={12} fontWeight={700} fontFamily={FONT} letterSpacing={2}>
          VIRTUAL MEMORY (STACK & HEAP)
        </text>

        {/* Stack Region (Grows Downward) */}
        <g transform="translate(32, 62)">
          <rect x={0} y={0} width={154} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={4} />
          <rect x={0} y={0} width={154} height={24} fill={BLUE} rx={4} />
          <text x={77} y={16} textAnchor="middle" fill={INK} fontSize={11} fontWeight={800} fontFamily={FONT}>
            STACK (HIGH ADDR) ↓
          </text>

          {/* Stack Frames */}
          <rect x={12} y={34} width={130} height={36} fill={MINT} stroke={INK} strokeWidth={1.5} rx={3} />
          <text x={77} y={56} textAnchor="middle" fill={INK} fontSize={11} fontWeight={700} fontFamily={FONT}>
            [Frame: main]
          </text>

          {current.stackCount >= 2 && (
            <g>
              <rect x={12} y={78} width={130} height={36} fill={YELLOW} stroke={INK} strokeWidth={1.5} rx={3} />
              <text x={77} y={100} textAnchor="middle" fill={INK} fontSize={11} fontWeight={700} fontFamily={FONT}>
                [Frame: compute]
              </text>
            </g>
          )}

          {current.stackCount >= 3 && (
            <g>
              <rect x={12} y={122} width={130} height={36} fill={PINK} stroke={INK} strokeWidth={1.5} rx={3} />
              <text x={77} y={144} textAnchor="middle" fill={INK} fontSize={11} fontWeight={700} fontFamily={FONT}>
                [Frame: helper]
              </text>
            </g>
          )}

          <text x={77} y={178} textAnchor="middle" fill="#70757A" fontSize={9} fontWeight={600} fontFamily={FONT}>
            Stack Pointer: {current.ptr}
          </text>
        </g>

        {/* Heap Region (Grows Upward) */}
        <g transform="translate(214, 62)">
          <rect x={0} y={0} width={154} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={4} />
          <rect x={0} y={0} width={154} height={24} fill={GREEN} rx={4} />
          <text x={77} y={16} textAnchor="middle" fill="#FFFFFF" fontSize={11} fontWeight={800} fontFamily={FONT}>
            HEAP (LOW ADDR) ↑
          </text>

          {/* Heap Blocks */}
          <rect x={12} y={34} width={130} height={32} fill={MINT} stroke={INK} strokeWidth={1.5} rx={3} />
          <text x={77} y={54} textAnchor="middle" fill={INK} fontSize={10} fontWeight={700} fontFamily={FONT}>
            0x1000 [Global Data]
          </text>

          {current.heapCount >= 2 && (
            <rect x={12} y={74} width={130} height={32} fill={YELLOW} stroke={INK} strokeWidth={1.5} rx={3} />
          )}
          {current.heapCount >= 2 && (
            <text x={77} y={94} textAnchor="middle" fill={INK} fontSize={10} fontWeight={700} fontFamily={FONT}>
              0x10A4 [malloc 64B]
            </text>
          )}

          {current.heapCount >= 3 && (
            <rect x={12} y={114} width={130} height={32} fill={PINK} stroke={INK} strokeWidth={1.5} rx={3} />
          )}
          {current.heapCount >= 3 && (
            <text x={77} y={134} textAnchor="middle" fill={INK} fontSize={10} fontWeight={700} fontFamily={FONT}>
              0x10E8 [Object Node]
            </text>
          )}

          <text x={77} y={178} textAnchor="middle" fill="#70757A" fontSize={9} fontWeight={600} fontFamily={FONT}>
            Dynamic Allocation
          </text>
        </g>

        {/* State Action Banner */}
        <rect x={24} y={264} width={352} height={30} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={4} />
        <text x={200} y={283} textAnchor="middle" fill={INK} fontSize={11} fontWeight={700} fontFamily={FONT}>
          ACTION: <tspan fill={GREEN} fontWeight={800}>{current.action}</tspan>
        </text>
      </svg>
      <p className="ih-checkpoint-art-caption">Memory architecture, pointers, stack frames & heap allocation</p>
    </div>
  );
}
