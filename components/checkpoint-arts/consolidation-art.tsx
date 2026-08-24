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
  {
    step: "1. CLI INPUT LAYER",
    activeLayer: "cli",
    data: "args: ['add', 'Buy Milk', 'high']",
    desc: "CLI Parser handles command flags and forwards parsed DTO to Controller",
  },
  {
    step: "2. CONTROLLER / HANDLER",
    activeLayer: "ctrl",
    data: "CreateTaskRequest(title, priority)",
    desc: "Controller validates payload constraints and delegates to Service Layer",
  },
  {
    step: "3. SERVICE BUSINESS LOGIC",
    activeLayer: "service",
    data: "Task(id=42, status='TODO')",
    desc: "Service executes business rules, timestamps, and invokes Repository",
  },
  {
    step: "4. DATA REPOSITORY PERSIST",
    activeLayer: "repo",
    data: "JSON / SQLite: Commit Record",
    desc: "Data layer commits transaction and returns persistent entity response",
  },
];

export function ConsolidationArt() {
  const frameIdx = useAnimationFrame(FRAMES.length, 1800);
  const cur = FRAMES[frameIdx];

  const LAYERS = [
    { id: "cli", name: "1. PRESENTATION (CLI / ARGS)", col: BLUE },
    { id: "ctrl", name: "2. CONTROLLER (VALIDATION)", col: YELLOW },
    { id: "service", name: "3. DOMAIN SERVICE (LOGIC)", col: PINK },
    { id: "repo", name: "4. REPOSITORY (DATA STORE)", col: MINT },
  ];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 420 320"
        role="img"
        aria-label="Modular Multi-Tier Application Architecture and Consolidation animation"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={420} height={320} fill={PAPER} />

        {/* Title Header */}
        <rect x={20} y={12} width={380} height={30} fill={INK} rx={4} />
        <text x={210} y={32} textAnchor="middle" fill="#FFFFFF" fontSize={11} fontWeight={800} fontFamily={FONT} letterSpacing={1.5}>
          PROGRAMMING CONSOLIDATION & ARCHITECTURE
        </text>

        {/* 4 Architectural Tier Cards */}
        <g transform="translate(20, 50)">
          <rect x={0} y={0} width={380} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={6} />

          {LAYERS.map((l, idx) => {
            const isHigh = cur.activeLayer === l.id;
            const y = 10 + idx * 44;
            return (
              <g key={l.id} transform={`translate(12, ${y})`}>
                <rect
                  x={0}
                  y={0}
                  width={356}
                  height={36}
                  fill={isHigh ? l.col : PAPER}
                  stroke={isHigh ? GREEN : INK}
                  strokeWidth={isHigh ? 2.5 : 1}
                  rx={4}
                />
                {/* Layer Name */}
                <text x={12} y={22} fill={INK} fontSize={9} fontWeight={800} fontFamily={FONT}>
                  {l.name}
                </text>
                {/* Active Layer Tag */}
                {isHigh && (
                  <text x={344} y={22} textAnchor="end" fill={INK} fontSize={8} fontWeight={800} fontFamily="monospace">
                    ▶ ACTIVE TIER
                  </text>
                )}
              </g>
            );
          })}
        </g>

        {/* Bottom Status Card */}
        <g transform="translate(20, 250)">
          <rect x={0} y={0} width={380} height={56} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={5} />
          <rect x={8} y={8} width={150} height={20} fill={INK} rx={3} />
          <text x={83} y={22} textAnchor="middle" fill={GREEN} fontSize={9} fontWeight={800} fontFamily={FONT}>
            {cur.step}
          </text>
          <text x={190} y={42} textAnchor="middle" fill={INK} fontSize={9.5} fontWeight={600} fontFamily={FONT}>
            {cur.desc}
          </text>
        </g>
      </svg>
      <p className="ih-checkpoint-art-caption">Layered software architecture, domain separation & clean data contracts</p>
    </div>
  );
}
