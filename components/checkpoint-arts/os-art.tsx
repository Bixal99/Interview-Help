"use client";

import { useAnimationFrame } from "./use-animation-frame";

const INK = "#282A35";
const PAPER = "#E7E9EB";
const GREEN = "#04AA6D";
const BLUE = "#96D4FA";
const YELLOW = "#FFF4A3";
const PINK = "#FFC0C7";
const FONT = "Poppins, sans-serif";

const STATES = [
  { running: "Process A [PID 101]", stateA: "RUNNING", stateB: "READY", stateC: "WAITING", msg: "CPU executing Process A (Quantum: 20ms)" },
  { running: "Context Switch", stateA: "READY", stateB: "RUNNING", stateC: "WAITING", msg: "Timer Interrupt -> Context Switch to Process B" },
  { running: "Process B [PID 102]", stateA: "READY", stateB: "RUNNING", stateC: "WAITING", msg: "Process B executing CPU compute loop" },
  { running: "Process C [PID 103]", stateA: "READY", stateB: "READY", stateC: "RUNNING", msg: "I/O Complete -> Process C resumed by OS Scheduler" },
];

export function OsArt() {
  const frameIdx = useAnimationFrame(STATES.length, 1600);
  const current = STATES[frameIdx];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 400 320"
        role="img"
        aria-label="Interactive OS process scheduling and context switching animation"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={400} height={320} fill={PAPER} />

        {/* Title Banner */}
        <rect x={24} y={16} width={352} height={34} fill={INK} rx={4} />
        <text x={200} y={38} textAnchor="middle" fill="#FFFFFF" fontSize={12} fontWeight={700} fontFamily={FONT} letterSpacing={2}>
          OPERATING SYSTEMS & CPU SCHEDULER
        </text>

        {/* OS Scheduler Core */}
        <g transform="translate(24, 60)">
          <rect x={0} y={0} width={352} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={4} />

          {/* CPU Core */}
          <rect x={126} y={16} width={100} height={60} fill={INK} rx={6} />
          <text x={176} y={38} textAnchor="middle" fill="#FFFFFF" fontSize={11} fontWeight={800} fontFamily={FONT}>CPU CORE 0</text>
          <rect x={136} y={48} width={80} height={20} fill={GREEN} rx={3} />
          <text x={176} y={62} textAnchor="middle" fill="#FFFFFF" fontSize={10} fontWeight={700} fontFamily={FONT}>
            {current.stateA === "RUNNING" ? "PID 101" : current.stateB === "RUNNING" ? "PID 102" : "PID 103"}
          </text>

          {/* Process Queue */}
          <g transform="translate(20, 96)">
            {/* Proc A */}
            <rect x={0} y={0} width={96} height={66} fill={current.stateA === "RUNNING" ? GREEN : BLUE} stroke={INK} strokeWidth={1.5} rx={4} />
            <text x={48} y={22} textAnchor="middle" fill={current.stateA === "RUNNING" ? "#FFFFFF" : INK} fontSize={10} fontWeight={800} fontFamily={FONT}>PROC A</text>
            <rect x={12} y={34} width={72} height={20} fill="#FFFFFF" rx={3} />
            <text x={48} y={48} textAnchor="middle" fill={INK} fontSize={9} fontWeight={700} fontFamily={FONT}>{current.stateA}</text>

            {/* Proc B */}
            <rect x={108} y={0} width={96} height={66} fill={current.stateB === "RUNNING" ? GREEN : YELLOW} stroke={INK} strokeWidth={1.5} rx={4} />
            <text x={156} y={22} textAnchor="middle" fill={current.stateB === "RUNNING" ? "#FFFFFF" : INK} fontSize={10} fontWeight={800} fontFamily={FONT}>PROC B</text>
            <rect x={120} y={34} width={72} height={20} fill="#FFFFFF" rx={3} />
            <text x={156} y={48} textAnchor="middle" fill={INK} fontSize={9} fontWeight={700} fontFamily={FONT}>{current.stateB}</text>

            {/* Proc C */}
            <rect x={216} y={0} width={96} height={66} fill={current.stateC === "RUNNING" ? GREEN : PINK} stroke={INK} strokeWidth={1.5} rx={4} />
            <text x={264} y={22} textAnchor="middle" fill={current.stateC === "RUNNING" ? "#FFFFFF" : INK} fontSize={10} fontWeight={800} fontFamily={FONT}>PROC C</text>
            <rect x={228} y={34} width={72} height={20} fill="#FFFFFF" rx={3} />
            <text x={264} y={48} textAnchor="middle" fill={INK} fontSize={9} fontWeight={700} fontFamily={FONT}>{current.stateC}</text>
          </g>
        </g>

        {/* Action Status Bar */}
        <rect x={24} y={264} width={352} height={32} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={4} />
        <text x={200} y={284} textAnchor="middle" fill={INK} fontSize={11} fontWeight={700} fontFamily={FONT}>
          DISPATCHER: <tspan fill={GREEN} fontWeight={800}>{current.msg}</tspan>
        </text>
      </svg>
      <p className="ih-checkpoint-art-caption">Operating system scheduling, processes & multitasking</p>
    </div>
  );
}
