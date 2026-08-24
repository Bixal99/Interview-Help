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

const VAR_FRAMES = [
  {
    step: "1. VARIABLE BINDING",
    varName: "age",
    varType: "int",
    value: "25",
    addr: "0x10A4",
    code: 'age: int = 25',
    desc: 'Name "age" binds to an integer object with value 25 at address 0x10A4',
  },
  {
    step: "2. STRING IMMUTABLE OBJECT",
    varName: "user",
    varType: "str",
    value: '"Alice"',
    addr: "0x20F0",
    code: 'user: str = "Alice"',
    desc: 'Name "user" references immutable string object "Alice" in heap memory',
  },
  {
    step: "3. LIST MUTATION IN-PLACE",
    varName: "scores",
    varType: "list",
    value: "[95, 88, 100]",
    addr: "0x30C8",
    code: 'scores.append(100)',
    desc: 'Object at 0x30C8 mutates in-place; pointer address remains unchanged',
  },
  {
    step: "4. REBINDING A NAME",
    varName: "age",
    varType: "int",
    value: "26",
    addr: "0x10A8",
    code: 'age = age + 1',
    desc: 'Integer is immutable: "age" rebinds to new object 26 at address 0x10A8',
  },
];

export function VariablesArt() {
  const frameIdx = useAnimationFrame(VAR_FRAMES.length, 1800);
  const current = VAR_FRAMES[frameIdx];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 400 320"
        role="img"
        aria-label="Interactive memory binding, types, and variables reference diagram"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={400} height={320} fill={PAPER} />

        {/* Title Banner */}
        <rect x={24} y={16} width={352} height={34} fill={INK} rx={4} />
        <text x={200} y={38} textAnchor="middle" fill="#FFFFFF" fontSize={12} fontWeight={700} fontFamily={FONT} letterSpacing={2}>
          VARIABLES, VALUES & TYPE MEMORY
        </text>

        {/* Stack Frame (Names / Identifiers) */}
        <g transform="translate(28, 62)">
          <rect x={0} y={0} width={120} height={188} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={6} />
          <rect x={0} y={0} width={120} height={24} fill={INK} rx={6} />
          <text x={60} y={16} textAnchor="middle" fill="#FFFFFF" fontSize={10} fontWeight={800} fontFamily={FONT}>
            STACK (NAMES)
          </text>

          {/* Active Variable Name Box */}
          <rect x={12} y={38} width={96} height={36} fill={YELLOW} stroke={INK} strokeWidth={1.5} rx={4} />
          <text x={60} y={55} textAnchor="middle" fill={INK} fontSize={9} fontWeight={700} fontFamily={FONT}>
            NAME
          </text>
          <text x={60} y={67} textAnchor="middle" fill={INK} fontSize={12} fontWeight={800} fontFamily={FONT}>
            {current.varName}
          </text>

          {/* Type Badge */}
          <rect x={12} y={84} width={96} height={28} fill={MINT} stroke={INK} strokeWidth={1.5} rx={4} />
          <text x={60} y={102} textAnchor="middle" fill={INK} fontSize={11} fontWeight={800} fontFamily={FONT}>
            type: {current.varType}
          </text>

          {/* Scope Label */}
          <rect x={12} y={122} width={96} height={24} fill={PAPER} stroke={INK} strokeWidth={1} rx={3} />
          <text x={60} y={138} textAnchor="middle" fill={INK} fontSize={9} fontWeight={600} fontFamily={FONT}>
            Scope: Local
          </text>
        </g>

        {/* Pointer Arrow from Name to Heap Memory */}
        <g transform="translate(148, 116)">
          <line
            x1={0}
            y1={0}
            x2={60}
            y2={0}
            stroke={GREEN}
            strokeWidth={4}
            strokeDasharray="6 3"
          />
          <polygon points="68,0 56,-6 56,6" fill={GREEN} />
          <rect x={4} y={-20} width={52} height={16} fill="#FFFFFF" stroke={GREEN} strokeWidth={1} rx={3} />
          <text x={30} y={-8} textAnchor="middle" fill={GREEN} fontSize={8} fontWeight={800} fontFamily={FONT}>
            ref pointer
          </text>
        </g>

        {/* Heap Memory (Objects & Values) */}
        <g transform="translate(224, 62)">
          <rect x={0} y={0} width={148} height={188} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={6} />
          <rect x={0} y={0} width={148} height={24} fill={GREEN} rx={6} />
          <text x={74} y={16} textAnchor="middle" fill="#FFFFFF" fontSize={10} fontWeight={800} fontFamily={FONT}>
            HEAP (OBJECTS)
          </text>

          {/* Object Box in Memory */}
          <g transform="translate(14, 36)">
            <rect x={0} y={0} width={120} height={76} fill={BLUE} stroke={INK} strokeWidth={2} rx={6} />
            {/* Memory Address Tag */}
            <rect x={0} y={0} width={120} height={18} fill={INK} rx={6} />
            <text x={60} y={13} textAnchor="middle" fill="#FFFFFF" fontSize={9} fontWeight={700} fontFamily={FONT}>
              Addr: {current.addr}
            </text>
            {/* Value Display */}
            <text x={60} y={42} textAnchor="middle" fill={INK} fontSize={9} fontWeight={700} fontFamily={FONT}>
              VALUE OBJECT
            </text>
            <text x={60} y={62} textAnchor="middle" fill={INK} fontSize={13} fontWeight={800} fontFamily={FONT}>
              {current.value}
            </text>
          </g>

          {/* Code snippet badge */}
          <rect x={14} y={124} width={120} height={46} fill={PINK} stroke={INK} strokeWidth={1.5} rx={4} />
          <text x={74} y={142} textAnchor="middle" fill={INK} fontSize={8} fontWeight={700} fontFamily={FONT}>
            EXECUTING:
          </text>
          <text x={74} y={158} textAnchor="middle" fill={INK} fontSize={10} fontWeight={800} fontFamily="monospace">
            {current.code}
          </text>
        </g>

        {/* Current State Status Bar */}
        <rect x={24} y={262} width={352} height={34} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={4} />
        <text x={200} y={283} textAnchor="middle" fill={INK} fontSize={10} fontWeight={600} fontFamily={FONT}>
          <tspan fontWeight={800} fill={GREEN}>{current.step}</tspan> — {current.desc.slice(0, 48)}...
        </text>
      </svg>
      <p className="ih-checkpoint-art-caption">Names bound to typed heap objects, memory addresses & in-place mutations</p>
    </div>
  );
}
