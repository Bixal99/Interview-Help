"use client";

import { useAnimationFrame } from "./use-animation-frame";

const INK = "#282A35";
const PAPER = "#E7E9EB";
const GREEN = "#04AA6D";
const BLUE = "#96D4FA";
const YELLOW = "#FFF4A3";
const PINK = "#FFC0C7";
const FONT = "Poppins, sans-serif";

const STEPS = [
  { bars: [45, 12, 85, 32, 89, 39, 69], compare: [0, 1], pivot: 4, msg: "Comparing [45] and [12] -> Swap" },
  { bars: [12, 45, 85, 32, 89, 39, 69], compare: [2, 3], pivot: 4, msg: "Comparing [85] and [32] -> Swap" },
  { bars: [12, 45, 32, 85, 89, 39, 69], compare: [4, 5], pivot: 4, msg: "Comparing [89] and [39] -> Swap" },
  { bars: [12, 45, 32, 85, 39, 89, 69], compare: [1, 2], pivot: 5, msg: "Partitioning around Pivot" },
  { bars: [12, 32, 45, 39, 85, 69, 89], compare: [3, 4], pivot: 6, msg: "Sub-array sorted" },
  { bars: [12, 32, 39, 45, 69, 85, 89], compare: [-1, -1], pivot: -1, msg: "SORT COMPLETE! Array in ascending order" },
];

export function SortingArt() {
  const frameIdx = useAnimationFrame(STEPS.length, 1400);
  const current = STEPS[frameIdx];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 400 320"
        role="img"
        aria-label="Interactive sorting and search algorithm visualization"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={400} height={320} fill={PAPER} />

        {/* Title Banner */}
        <rect x={24} y={16} width={352} height={34} fill={INK} rx={4} />
        <text x={200} y={38} textAnchor="middle" fill="#FFFFFF" fontSize={12} fontWeight={700} fontFamily={FONT} letterSpacing={2}>
          SORTING & SEARCH ALGORITHMS
        </text>

        {/* Bar Chart Visualization Area */}
        <g transform="translate(36, 70)">
          <rect x={0} y={0} width={328} height={180} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={4} />
          
          {/* Baseline */}
          <line x1={10} y1={155} x2={318} y2={155} stroke={INK} strokeWidth={2} />

          {current.bars.map((val, idx) => {
            const isCompare = current.compare.includes(idx);
            const isPivot = idx === current.pivot;
            const isSorted = current.compare[0] === -1;
            const barHeight = val * 1.3;
            const x = 20 + idx * 42;
            const y = 155 - barHeight;

            let fillColor = BLUE;
            if (isSorted) fillColor = GREEN;
            else if (isPivot) fillColor = YELLOW;
            else if (isCompare) fillColor = PINK;

            return (
              <g key={idx}>
                <rect
                  x={x}
                  y={y}
                  width={32}
                  height={barHeight}
                  fill={fillColor}
                  stroke={INK}
                  strokeWidth={2}
                  rx={2}
                />
                <text
                  x={x + 16}
                  y={y - 6}
                  textAnchor="middle"
                  fill={INK}
                  fontSize={11}
                  fontWeight={700}
                  fontFamily={FONT}
                >
                  {val}
                </text>
                <text
                  x={x + 16}
                  y={170}
                  textAnchor="middle"
                  fill="#70757A"
                  fontSize={10}
                  fontWeight={600}
                  fontFamily={FONT}
                >
                  [{idx}]
                </text>
              </g>
            );
          })}
        </g>

        {/* Step Information Banner */}
        <rect x={24} y={264} width={352} height={32} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={4} />
        <text x={200} y={284} textAnchor="middle" fill={INK} fontSize={11} fontWeight={700} fontFamily={FONT}>
          STEP: <tspan fill={GREEN} fontWeight={800}>{current.msg}</tspan>
        </text>
      </svg>
      <p className="ih-checkpoint-art-caption">Step-by-step sorting, binary search & algorithm analysis</p>
    </div>
  );
}
