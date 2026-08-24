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
    step: "1. MODULE RESOLUTION",
    activeNode: "main",
    importStmt: "import pkg.calculator as calc",
    desc: "Python sys.path searches current package tree for 'pkg/calculator.py'",
  },
  {
    step: "2. PACKAGE INITIALIZATION",
    activeNode: "init",
    importStmt: "pkg/__init__.py executed",
    desc: "Package namespace initialized; exports symbols into package scope",
  },
  {
    step: "3. SYMBOL IMPORT",
    activeNode: "calc",
    importStmt: "from pkg.calc import add_numbers",
    desc: "Binding 'add_numbers' function object into caller's local namespace",
  },
  {
    step: "4. VIRTUAL ENVIRONMENT ISOLATION",
    activeNode: "venv",
    importStmt: "venv: isolated site-packages",
    desc: "Dependencies pinned cleanly in local .venv/ environment sandbox",
  },
];

export function ModulesArt() {
  const frameIdx = useAnimationFrame(FRAMES.length, 1800);
  const cur = FRAMES[frameIdx];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 420 320"
        role="img"
        aria-label="Modules, Packages, Dependency Trees and Virtual Environments animation"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={420} height={320} fill={PAPER} />

        {/* Title Header */}
        <rect x={20} y={12} width={380} height={30} fill={INK} rx={4} />
        <text x={210} y={32} textAnchor="middle" fill="#FFFFFF" fontSize={11} fontWeight={800} fontFamily={FONT} letterSpacing={1.5}>
          MODULES, PACKAGES & ENVIRONMENTS
        </text>

        {/* Package Tree Graph (Left) */}
        <g transform="translate(20, 50)">
          <rect x={0} y={0} width={200} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={6} />
          <rect x={0} y={0} width={200} height={22} fill={INK} rx={6} />
          <text x={100} y={15} textAnchor="middle" fill="#FFFFFF" fontSize={9} fontWeight={800} fontFamily={FONT}>
            PACKAGE DIRECTORY TREE
          </text>

          {/* Root File: main.py */}
          <g transform="translate(14, 30)">
            <rect
              x={0}
              y={0}
              width={172}
              height={26}
              fill={cur.activeNode === "main" ? YELLOW : BLUE}
              stroke={cur.activeNode === "main" ? GREEN : INK}
              strokeWidth={cur.activeNode === "main" ? 2 : 1}
              rx={3}
            />
            <text x={10} y={17} fill={INK} fontSize={8.5} fontWeight={800} fontFamily="monospace">
              📄 main.py (Entry Point)
            </text>
          </g>

          {/* Package Folder: pkg/ */}
          <g transform="translate(26, 64)">
            <rect x={0} y={0} width={160} height={76} fill={PAPER} stroke={INK} strokeWidth={1} rx={4} />
            <text x={10} y={14} fill={INK} fontSize={8} fontWeight={800} fontFamily="monospace">
              📁 pkg/
            </text>

            {/* __init__.py */}
            <rect
              x={12}
              y={20}
              width={136}
              height={22}
              fill={cur.activeNode === "init" ? YELLOW : MINT}
              stroke={cur.activeNode === "init" ? GREEN : INK}
              strokeWidth={cur.activeNode === "init" ? 2 : 1}
              rx={2}
            />
            <text x={18} y={34} fill={INK} fontSize={8} fontWeight={700} fontFamily="monospace">
              📄 __init__.py
            </text>

            {/* calculator.py */}
            <rect
              x={12}
              y={46}
              width={136}
              height={22}
              fill={cur.activeNode === "calc" ? YELLOW : PINK}
              stroke={cur.activeNode === "calc" ? GREEN : INK}
              strokeWidth={cur.activeNode === "calc" ? 2 : 1}
              rx={2}
            />
            <text x={18} y={60} fill={INK} fontSize={8} fontWeight={700} fontFamily="monospace">
              📄 calculator.py
            </text>
          </g>

          {/* .venv Sandbox */}
          <g transform="translate(14, 146)">
            <rect
              x={0}
              y={0}
              width={172}
              height={34}
              fill={cur.activeNode === "venv" ? YELLOW : MINT}
              stroke={cur.activeNode === "venv" ? GREEN : INK}
              strokeWidth={cur.activeNode === "venv" ? 2 : 1}
              rx={3}
            />
            <text x={86} y={15} textAnchor="middle" fill={INK} fontSize={8} fontWeight={800} fontFamily={FONT}>
              🔒 .venv / site-packages
            </text>
            <text x={86} y={27} textAnchor="middle" fill={INK} fontSize={7} fontWeight={600} fontFamily={FONT}>
              Isolated Python Virtual Environment
            </text>
          </g>
        </g>

        {/* Import Resolution Terminal (Right) */}
        <g transform="translate(230, 50)">
          <rect x={0} y={0} width={170} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={6} />
          <rect x={0} y={0} width={170} height={22} fill={GREEN} rx={6} />
          <text x={85} y={15} textAnchor="middle" fill="#FFFFFF" fontSize={9} fontWeight={800} fontFamily={FONT}>
            IMPORT RESOLUTION
          </text>

          {/* Code Box */}
          <g transform="translate(10, 32)">
            <rect x={0} y={0} width={150} height={60} fill={INK} rx={4} />
            <text x={8} y={18} fill={MINT} fontSize={8} fontWeight={700} fontFamily="monospace">
              &gt;&gt;&gt; import pkg
            </text>
            <text x={8} y={34} fill={YELLOW} fontSize={8} fontWeight={700} fontFamily="monospace">
              &gt;&gt;&gt; pkg.add(2, 3)
            </text>
            <text x={8} y={50} fill="#FFFFFF" fontSize={8} fontWeight={800} fontFamily="monospace">
              5
            </text>
          </g>

          {/* Statement Card */}
          <g transform="translate(10, 104)">
            <rect x={0} y={0} width={150} height={76} fill={PAPER} stroke={INK} strokeWidth={1} rx={4} />
            <text x={10} y={16} fill={INK} fontSize={7.5} fontWeight={800} fontFamily={FONT}>
              ACTIVE DIRECTIVE:
            </text>
            <text x={10} y={32} fill={GREEN} fontSize={8} fontWeight={800} fontFamily="monospace">
              {cur.importStmt}
            </text>
            <text x={10} y={52} fill={INK} fontSize={7} fontWeight={600} fontFamily={FONT}>
              Dependency graph verified
            </text>
            <text x={10} y={64} fill={INK} fontSize={7} fontWeight={600} fontFamily={FONT}>
              Circular imports: None (OK)
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
      <p className="ih-checkpoint-art-caption">Package tree imports, namespace symbol exposure & venv environment isolation</p>
    </div>
  );
}
