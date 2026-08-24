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
    step: "1. TRY BLOCK EXECUTION",
    status: "TRY",
    activeBlock: "try",
    code: "x = parse_int(user_input)",
    desc: "Executing protected code block inside guarded runtime frame",
    alert: "NORMAL EXECUTION",
    alertCol: GREEN,
  },
  {
    step: "2. EXCEPTION TRIGGERED",
    status: "RAISE",
    activeBlock: "raise",
    code: 'raise ValueError("Invalid format")',
    desc: "Invalid data encountered: Runtime creates and raises ValueError object",
    alert: "EXCEPTION RAISED",
    alertCol: "#DC2626",
  },
  {
    step: "3. EXCEPT CATCH & RECOVERY",
    status: "EXCEPT",
    activeBlock: "except",
    code: "except ValueError as err: log(err)",
    desc: "Matching exception handler catches error: Call stack unwinds safely",
    alert: "ERROR HANDLED SAFELY",
    alertCol: YELLOW,
  },
  {
    step: "4. FINALLY CLEANUP GUARANTEE",
    status: "FINALLY",
    activeBlock: "finally",
    code: "finally: release_resources()",
    desc: "Guaranteed execution: Closes sockets and releases memory handles",
    alert: "RESOURCES CLEANED",
    alertCol: GREEN,
  },
];

export function ErrorsArt() {
  const frameIdx = useAnimationFrame(FRAMES.length, 1800);
  const cur = FRAMES[frameIdx];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 420 320"
        role="img"
        aria-label="Exception handling, try-except-finally and defensive programming animation"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={420} height={320} fill={PAPER} />

        {/* Title Header */}
        <rect x={20} y={12} width={380} height={30} fill={INK} rx={4} />
        <text x={210} y={32} textAnchor="middle" fill="#FFFFFF" fontSize={11} fontWeight={800} fontFamily={FONT} letterSpacing={1.5}>
          ERRORS & DEFENSIVE PROGRAMMING
        </text>

        {/* Guarded Try-Except Container */}
        <g transform="translate(20, 50)">
          <rect x={0} y={0} width={380} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={6} />
          
          {/* Block 1: TRY */}
          <g transform="translate(14, 16)">
            <rect
              x={0}
              y={0}
              width={110}
              height={50}
              fill={cur.activeBlock === "try" ? YELLOW : BLUE}
              stroke={cur.activeBlock === "try" ? GREEN : INK}
              strokeWidth={cur.activeBlock === "try" ? 2.5 : 1}
              rx={4}
            />
            <text x={55} y={20} textAnchor="middle" fill={INK} fontSize={10} fontWeight={800} fontFamily={FONT}>
              try:
            </text>
            <text x={55} y={38} textAnchor="middle" fill={INK} fontSize={8} fontWeight={600} fontFamily="monospace">
              risky_call()
            </text>
          </g>

          {/* Arrow 1 */}
          <path d="M 130,41 L 148,41" fill="none" stroke={INK} strokeWidth={2} />
          <polygon points="152,41 144,36 144,46" fill={INK} />

          {/* Block 2: RAISE */}
          <g transform="translate(156, 16)">
            <rect
              x={0}
              y={0}
              width={100}
              height={50}
              fill={cur.activeBlock === "raise" ? PINK : PAPER}
              stroke={cur.activeBlock === "raise" ? "#DC2626" : INK}
              strokeWidth={cur.activeBlock === "raise" ? 2.5 : 1}
              rx={4}
            />
            <text x={50} y={20} textAnchor="middle" fill={INK} fontSize={10} fontWeight={800} fontFamily={FONT}>
              raise
            </text>
            <text x={50} y={38} textAnchor="middle" fill={INK} fontSize={8} fontWeight={700} fontFamily="monospace">
              ValueError
            </text>
          </g>

          {/* Arrow 2 */}
          <path d="M 262,41 L 280,41" fill="none" stroke={INK} strokeWidth={2} />
          <polygon points="284,41 276,36 276,46" fill={INK} />

          {/* Block 3: EXCEPT */}
          <g transform="translate(288, 16)">
            <rect
              x={0}
              y={0}
              width={78}
              height={50}
              fill={cur.activeBlock === "except" ? MINT : PAPER}
              stroke={cur.activeBlock === "except" ? GREEN : INK}
              strokeWidth={cur.activeBlock === "except" ? 2.5 : 1}
              rx={4}
            />
            <text x={39} y={20} textAnchor="middle" fill={INK} fontSize={10} fontWeight={800} fontFamily={FONT}>
              except:
            </text>
            <text x={39} y={38} textAnchor="middle" fill={INK} fontSize={8} fontWeight={700} fontFamily="monospace">
              recover()
            </text>
          </g>

          {/* Block 4: FINALLY CLEANUP (Bottom full width) */}
          <g transform="translate(14, 76)">
            <rect
              x={0}
              y={0}
              width={352}
              height={44}
              fill={cur.activeBlock === "finally" ? GREEN : INK}
              rx={4}
            />
            <text x={176} y={22} textAnchor="middle" fill="#FFFFFF" fontSize={11} fontWeight={800} fontFamily={FONT}>
              finally: always_execute_cleanup()
            </text>
            <text x={176} y={36} textAnchor="middle" fill="#FFFFFF" fontSize={8} fontWeight={600} fontFamily={FONT}>
              (Guaranteed resource reclamation regardless of exceptions)
            </text>
          </g>

          {/* Active Code Inspector */}
          <g transform="translate(14, 130)">
            <rect x={0} y={0} width={352} height={46} fill={PAPER} stroke={INK} strokeWidth={1} rx={4} />
            <text x={14} y={18} fill={INK} fontSize={8} fontWeight={800} fontFamily={FONT}>
              STATE: <tspan fill={cur.alertCol} fontWeight={800}>{cur.alert}</tspan>
            </text>
            <text x={14} y={34} fill={INK} fontSize={10} fontWeight={700} fontFamily="monospace">
              {cur.code}
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
      <p className="ih-checkpoint-art-caption">Defensive boundaries, try-catch stack unwinding & finally guarantees</p>
    </div>
  );
}
