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

const CPU_STEPS = [
  {
    step: "1. FETCH CYCLE",
    cycleName: "FETCH",
    pc: "0x0040",
    mar: "0x0040",
    mdr: "LOAD R1, [0x100]",
    acc: "0x0000",
    alu: "IDLE",
    activeBus: "address",
    activeRam: 0,
    desc: "Program Counter (PC) forwards instruction address 0x0040 via MAR to DRAM.",
  },
  {
    step: "2. DECODE CYCLE",
    cycleName: "DECODE",
    pc: "0x0044",
    mar: "0x0040",
    mdr: "LOAD R1, [0x100]",
    acc: "0x0000",
    alu: "DECODING OP",
    activeBus: "control",
    activeRam: 0,
    desc: "Control Unit decodes opcode LOAD; PC increments to 0x0044 for next instruction.",
  },
  {
    step: "3. EXECUTE READ (RAM -> MDR)",
    cycleName: "EXEC READ",
    pc: "0x0044",
    mar: "0x0100",
    mdr: "VAL: 42",
    acc: "0x002A (42)",
    alu: "R1 <- 42",
    activeBus: "data",
    activeRam: 0,
    desc: "Memory Data Register reads value 42 from RAM address 0x100 into Accumulator.",
  },
  {
    step: "4. ALU EXECUTE (ADD 42 + 8)",
    cycleName: "ALU COMPUTE",
    pc: "0x0044",
    mar: "0x0044",
    mdr: "ADD 8",
    acc: "50 (0x0032)",
    alu: "42 + 8 = 50",
    activeBus: "none",
    activeRam: 2,
    desc: "Arithmetic Logic Unit executes 42 + 8 = 50 and stores result in Accumulator.",
  },
];

export function HardwareCpuArt() {
  const frameIdx = useAnimationFrame(CPU_STEPS.length, 2000);
  const cur = CPU_STEPS[frameIdx];

  const RAM_CELLS = [
    { addr: "0x100", val: "42" },
    { addr: "0x104", val: "00" },
    { addr: "0x108", val: "08" },
    { addr: "0x10C", val: "00" },
    { addr: "0x110", val: "99" },
  ];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 420 320"
        role="img"
        aria-label="CPU Hardware Architecture, Datapath, Registers, ALU and Memory animation"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={420} height={320} fill={PAPER} />

        {/* --- TITLE HEADER --- */}
        <rect x={20} y={12} width={380} height={30} fill={INK} rx={4} />
        <text x={210} y={32} textAnchor="middle" fill="#FFFFFF" fontSize={11} fontWeight={800} fontFamily={FONT} letterSpacing={1.5}>
          CPU ARCHITECTURE & HARDWARE DATAPATH
        </text>

        {/* --- CPU CORE PACKAGE (LEFT) --- */}
        <g transform="translate(20, 48)">
          {/* Main CPU Box */}
          <rect x={0} y={0} width={240} height={196} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={6} />
          
          {/* CPU Header Pill */}
          <rect x={0} y={0} width={240} height={22} fill={INK} rx={6} />
          <text x={120} y={15} textAnchor="middle" fill="#FFFFFF" fontSize={9} fontWeight={800} fontFamily={FONT}>
            CENTRAL PROCESSING UNIT (CPU CORE)
          </text>

          {/* 4 Internal Registers (2x2 Grid) */}
          {/* 1. PC */}
          <g transform="translate(8, 28)">
            <rect x={0} y={0} width={108} height={32} fill={BLUE} stroke={INK} strokeWidth={1} rx={3} />
            <text x={6} y={12} fill={INK} fontSize={7.5} fontWeight={800} fontFamily={FONT}>
              PC (Program Counter)
            </text>
            <text x={6} y={26} fill={INK} fontSize={10} fontWeight={800} fontFamily="monospace">
              {cur.pc}
            </text>
          </g>

          {/* 2. MAR */}
          <g transform="translate(124, 28)">
            <rect x={0} y={0} width={108} height={32} fill={YELLOW} stroke={INK} strokeWidth={1} rx={3} />
            <text x={6} y={12} fill={INK} fontSize={7.5} fontWeight={800} fontFamily={FONT}>
              MAR (Address Reg)
            </text>
            <text x={6} y={26} fill={INK} fontSize={10} fontWeight={800} fontFamily="monospace">
              {cur.mar}
            </text>
          </g>

          {/* 3. MDR */}
          <g transform="translate(8, 64)">
            <rect x={0} y={0} width={108} height={32} fill={MINT} stroke={INK} strokeWidth={1} rx={3} />
            <text x={6} y={12} fill={INK} fontSize={7.5} fontWeight={800} fontFamily={FONT}>
              MDR (Data Reg)
            </text>
            <text x={6} y={26} fill={INK} fontSize={9} fontWeight={800} fontFamily="monospace">
              {cur.mdr}
            </text>
          </g>

          {/* 4. ACC */}
          <g transform="translate(124, 64)">
            <rect x={0} y={0} width={108} height={32} fill={PINK} stroke={INK} strokeWidth={1} rx={3} />
            <text x={6} y={12} fill={INK} fontSize={7.5} fontWeight={800} fontFamily={FONT}>
              ACC (Accumulator)
            </text>
            <text x={6} y={26} fill={INK} fontSize={10} fontWeight={800} fontFamily="monospace">
              {cur.acc}
            </text>
          </g>

          {/* ALU (Arithmetic Logic Unit) - Clean Standard V-Neck Vector */}
          <g transform="translate(8, 102)">
            <path
              d="M 0,0 L 80,0 L 112,18 L 144,0 L 224,0 L 194,54 L 30,54 Z"
              fill="#FFF4A3"
              stroke={INK}
              strokeWidth={1.5}
            />
            <text x={112} y={14} textAnchor="middle" fill={INK} fontSize={8.5} fontWeight={800} fontFamily={FONT}>
              ALU (MATH & LOGIC)
            </text>
            <text x={112} y={42} textAnchor="middle" fill={GREEN} fontSize={12} fontWeight={800} fontFamily="monospace">
              {cur.alu}
            </text>
          </g>

          {/* Clock Bar */}
          <g transform="translate(8, 162)">
            <rect x={0} y={0} width={224} height={24} fill={INK} rx={3} />
            <text x={112} y={16} textAnchor="middle" fill="#FFFFFF" fontSize={8.5} fontWeight={700} fontFamily={FONT}>
              ⚡ CLOCK: 3.80 GHz  |  STAGE: <tspan fill={GREEN} fontWeight={800}>{cur.cycleName}</tspan>
            </text>
          </g>
        </g>

        {/* --- SYSTEM BUS CONNECTORS (MIDDLE) --- */}
        <g transform="translate(260, 48)">
          {/* Address Bus */}
          <line
            x1={0}
            y1={44}
            x2={26}
            y2={44}
            stroke={cur.activeBus === "address" ? GREEN : INK}
            strokeWidth={cur.activeBus === "address" ? 3.5 : 2}
            strokeDasharray={cur.activeBus === "address" ? "4 2" : "none"}
          />
          {/* Data Bus */}
          <line
            x1={0}
            y1={80}
            x2={26}
            y2={80}
            stroke={cur.activeBus === "data" ? GREEN : INK}
            strokeWidth={cur.activeBus === "data" ? 3.5 : 2}
            strokeDasharray={cur.activeBus === "data" ? "4 2" : "none"}
          />
          {/* Control Bus */}
          <line
            x1={0}
            y1={130}
            x2={26}
            y2={130}
            stroke={cur.activeBus === "control" ? GREEN : INK}
            strokeWidth={cur.activeBus === "control" ? 3.5 : 2}
            strokeDasharray={cur.activeBus === "control" ? "4 2" : "none"}
          />
        </g>

        {/* --- DRAM MEMORY MODULE (RIGHT) --- */}
        <g transform="translate(286, 48)">
          <rect x={0} y={0} width={114} height={196} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={6} />
          
          {/* Memory Header Pill */}
          <rect x={0} y={0} width={114} height={22} fill={GREEN} rx={6} />
          <text x={57} y={15} textAnchor="middle" fill="#FFFFFF" fontSize={9} fontWeight={800} fontFamily={FONT}>
            DRAM MEMORY
          </text>

          {/* 5 Memory Cells */}
          {RAM_CELLS.map((cell, idx) => {
            const isTarget = cur.activeRam === idx;
            const y = 28 + idx * 32;
            return (
              <g key={idx} transform={`translate(6, ${y})`}>
                <rect
                  x={0}
                  y={0}
                  width={102}
                  height={26}
                  fill={isTarget ? YELLOW : PAPER}
                  stroke={isTarget ? GREEN : INK}
                  strokeWidth={isTarget ? 2 : 1}
                  rx={3}
                />
                <text x={6} y={17} fill={INK} fontSize={8} fontWeight={700} fontFamily="monospace">
                  {cell.addr}: <tspan fontWeight={800} fill={isTarget ? GREEN : INK}>{cell.val}</tspan>
                </text>
              </g>
            );
          })}
        </g>

        {/* --- BOTTOM EXECUTION STATUS CARD --- */}
        <g transform="translate(20, 252)">
          <rect x={0} y={0} width={380} height={56} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={5} />
          
          {/* Step Pill */}
          <rect x={8} y={8} width={140} height={20} fill={INK} rx={3} />
          <text x={78} y={22} textAnchor="middle" fill={GREEN} fontSize={9} fontWeight={800} fontFamily={FONT}>
            {cur.step}
          </text>

          {/* Step Description - Centered and cleanly wrapped */}
          <text x={190} y={42} textAnchor="middle" fill={INK} fontSize={9.5} fontWeight={600} fontFamily={FONT}>
            {cur.desc}
          </text>
        </g>
      </svg>
      <p className="ih-checkpoint-art-caption">CPU registers (PC/MAR/MDR/ACC), ALU arithmetic datapath & DRAM memory bus</p>
    </div>
  );
}
