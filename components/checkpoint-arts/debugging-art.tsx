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
    step: "1. HIT BREAKPOINT",
    line: 24,
    action: "STOP AT BREAKPOINT (Line 24)",
    vars: [
      { name: "items", val: "[10, 20, 30]" },
      { name: "total", val: "0" },
      { name: "idx", val: "0" },
    ],
    desc: "Execution paused at breakpoint on Line 24: Process state frozen",
  },
  {
    step: "2. STEP INTO LOOP",
    line: 25,
    action: "STEP OVER -> Line 25",
    vars: [
      { name: "items", val: "[10, 20, 30]" },
      { name: "total", val: "10" },
      { name: "idx", val: "1" },
    ],
    desc: "Stepped over line: Variable 'total' mutated from 0 to 10 in live frame",
  },
  {
    step: "3. VARIABLE WATCH INSPECT",
    line: 26,
    action: "EVALUATE: total == 30",
    vars: [
      { name: "items", val: "[10, 20, 30]" },
      { name: "total", val: "30" },
      { name: "idx", val: "2" },
    ],
    desc: "Evaluating watch expressions in local scope: accumulator reaches 30",
  },
  {
    step: "4. RESUME EXECUTION",
    line: 28,
    action: "CONTINUE EXECUTION",
    vars: [
      { name: "items", val: "[10, 20, 30]" },
      { name: "total", val: "60" },
      { name: "idx", val: "3" },
    ],
    desc: "Debugger resumes execution: Function returns final verified result 60",
  },
];

export function DebuggingArt() {
  const frameIdx = useAnimationFrame(FRAMES.length, 1800);
  const cur = FRAMES[frameIdx];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 420 320"
        role="img"
        aria-label="Interactive debugger, breakpoints, watch expressions and step traces"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={420} height={320} fill={PAPER} />

        {/* Title Header */}
        <rect x={20} y={12} width={380} height={30} fill={INK} rx={4} />
        <text x={210} y={32} textAnchor="middle" fill="#FFFFFF" fontSize={11} fontWeight={800} fontFamily={FONT} letterSpacing={1.5}>
          DEBUGGING & RUNTIME TRACING
        </text>

        {/* Left: Code Editor with Breakpoints */}
        <g transform="translate(20, 50)">
          <rect x={0} y={0} width={180} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={6} />
          <rect x={0} y={0} width={180} height={22} fill={INK} rx={6} />
          <text x={90} y={15} textAnchor="middle" fill="#FFFFFF" fontSize={9} fontWeight={800} fontFamily={FONT}>
            SOURCE EDITOR
          </text>

          {/* Lines */}
          {[22, 23, 24, 25, 26, 27, 28].map((lNum, i) => {
            const isCurrent = cur.line === lNum;
            const y = 30 + i * 22;
            return (
              <g key={lNum} transform={`translate(8, ${y})`}>
                {/* Breakpoint Circle at 24 */}
                {lNum === 24 ? (
                  <circle cx={6} cy={8} r={5} fill="#DC2626" />
                ) : (
                  <circle cx={6} cy={8} r={2} fill={PAPER} />
                )}
                
                {/* Highlight active line */}
                {isCurrent && (
                  <rect x={14} y={0} width={150} height={18} fill={YELLOW} rx={2} />
                )}
                
                {/* Line number */}
                <text x={18} y={12} fill={INK} fontSize={8} fontWeight={700} fontFamily="monospace">
                  {lNum}
                </text>
                {/* Code line stub */}
                <text x={34} y={12} fill={INK} fontSize={8} fontWeight={isCurrent ? 800 : 500} fontFamily="monospace">
                  {lNum === 24 ? "total = 0" : lNum === 25 ? "for x in items:" : lNum === 26 ? "  total += x" : lNum === 28 ? "return total" : "def sum(items):"}
                </text>
              </g>
            );
          })}
        </g>

        {/* Right: Variable Watch & Stack Frame Inspector */}
        <g transform="translate(210, 50)">
          <rect x={0} y={0} width={190} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={6} />
          <rect x={0} y={0} width={190} height={22} fill={BLUE} rx={6} />
          <text x={95} y={15} textAnchor="middle" fill={INK} fontSize={9} fontWeight={800} fontFamily={FONT}>
            LIVE VARIABLE WATCH
          </text>

          {/* Watch Variables */}
          <g transform="translate(10, 30)">
            {cur.vars.map((v, idx) => (
              <g key={idx} transform={`translate(0, ${idx * 34})`}>
                <rect x={0} y={0} width={170} height={28} fill={MINT} stroke={INK} strokeWidth={1} rx={3} />
                <text x={10} y={18} fill={INK} fontSize={9} fontWeight={800} fontFamily="monospace">
                  {v.name}:
                </text>
                <text x={70} y={18} fill={GREEN} fontSize={10} fontWeight={800} fontFamily="monospace">
                  {v.val}
                </text>
              </g>
            ))}
          </g>

          {/* Stepper Buttons Panel */}
          <g transform="translate(10, 138)">
            <rect x={0} y={0} width={170} height={42} fill={INK} rx={4} />
            <text x={85} y={18} textAnchor="middle" fill="#FFFFFF" fontSize={8} fontWeight={700} fontFamily={FONT}>
              STEP CONTROLS:
            </text>
            <text x={85} y={32} textAnchor="middle" fill={YELLOW} fontSize={9} fontWeight={800} fontFamily="monospace">
              [STEP INTO] [STEP OVER]
            </text>
          </g>
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
      <p className="ih-checkpoint-art-caption">Breakpoint execution halt, step inspection & live variable watch tables</p>
    </div>
  );
}
