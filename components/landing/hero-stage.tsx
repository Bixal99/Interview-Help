"use client";

import { useCallback, useState, type MouseEvent } from "react";

const BLOCKS = [
  { id: "read", label: "One lesson", fill: "#D9EEE1", x: 48, y: 268, w: 168, h: 92 },
  { id: "build", label: "Phase project", fill: "#FFF4A3", x: 168, y: 188, w: 176, h: 88 },
  { id: "speak", label: "Interview", fill: "#FFC0C7", x: 292, y: 112, w: 164, h: 84 },
  { id: "hire", label: "Hire-ready", fill: "#96D4FA", x: 408, y: 44, w: 148, h: 76 },
] as const;

export function HeroStage() {
  const [pointer, setPointer] = useState({ x: 0.42, y: 0.38 });
  const [hot, setHot] = useState<string | null>(null);

  const onMove = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const box = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: Math.min(1, Math.max(0, (event.clientX - box.left) / box.width)),
      y: Math.min(1, Math.max(0, (event.clientY - box.top) / box.height)),
    });
  }, []);

  const shiftX = (pointer.x - 0.5) * 16;
  const shiftY = (pointer.y - 0.5) * 10;
  const growth = 0.22 + pointer.x * 0.78;
  const bars = [0.18, 0.38, 0.62, 1].map((weight) => 18 + 70 * growth * weight);
  const activeIndex = hot
    ? BLOCKS.findIndex((block) => block.id === hot)
    : Math.min(3, Math.floor(pointer.x * 4));
  const active = BLOCKS[Math.max(0, activeIndex)];

  return (
    <div
      className="ih-hero-stage"
      onMouseMove={onMove}
      onMouseLeave={() => {
        setPointer({ x: 0.42, y: 0.38 });
        setHot(null);
      }}
    >
      <svg viewBox="0 0 640 480" className="ih-hero-stage-svg" role="img" aria-label="Interactive path from a lesson block to hire-ready">
        <rect width="640" height="480" fill="#282A35" />
        <rect x="24" y="24" width="592" height="432" fill="#1A1A1A" />
        <path d="M24 368 H616" stroke="#04AA6D" strokeWidth="4" />

        <g transform={`translate(${shiftX * 0.35} ${shiftY * 0.25})`}>
          <text x="48" y="62" fill="#04AA6D" fontSize="12" fontWeight="800" letterSpacing="2.4">THE CUT</text>
          <text x="48" y="92" fill="#F1F1F1" fontSize="22" fontWeight="700">Stack the phases</text>
        </g>

        <g transform={`translate(${shiftX} ${shiftY})`}>
          {BLOCKS.map((block, index) => {
            const on = active.id === block.id;
            const lift = on ? -10 : 0;
            return (
              <g
                key={block.id}
                className="ih-hero-block"
                transform={`translate(0 ${lift})`}
                onMouseEnter={() => setHot(block.id)}
                onMouseLeave={() => setHot(null)}
              >
                <rect x={block.x} y={block.y} width={block.w} height={block.h} fill={block.fill} />
                <text x={block.x + 18} y={block.y + 32} fill="#1A1A1A" fontSize="13" fontWeight="700" letterSpacing="1.6">
                  {String(index + 1).padStart(2, "0")}
                </text>
                <text x={block.x + 18} y={block.y + 58} fill="#1A1A1A" fontSize="16" fontWeight="700">
                  {block.label}
                </text>
              </g>
            );
          })}
        </g>

        <g transform="translate(428 278)">
          <rect width="172" height="122" fill="#fff" />
          <text x="16" y="26" fill="#04AA6D" fontSize="11" fontWeight="800" letterSpacing="2">GROWTH</text>
          {bars.map((height, index) => (
            <rect
              key={index}
              x={16 + index * 38}
              y={104 - height}
              width="26"
              height={height}
              fill={["#D9EEE1", "#FFF4A3", "#FFC0C7", "#96D4FA"][index]}
            />
          ))}
        </g>

        <circle cx={56 + pointer.x * 500} cy={392} r="7" fill="#04AA6D" />
        <text x="48" y="432" fill="#c8c8c8" fontSize="13">
          Move across the cut · {active.label}
        </text>
      </svg>
    </div>
  );
}
