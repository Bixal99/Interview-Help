"use client";

import { useAnimationFrame } from "./use-animation-frame";

const INK = "#282A35";
const PAPER = "#E7E9EB";
const GREEN = "#04AA6D";
const BLUE = "#96D4FA";
const YELLOW = "#FFF4A3";
const PINK = "#FFC0C7";
const FONT = "Poppins, sans-serif";

const FRAMES = [
  { count: 0, state: '{ activeTab: "kpi", count: 0 }', vdom: "Virtual DOM Tree Initialized", dom: "DOM Rendered (First Paint)", msg: "Owl 2.0 Component mounted with useState() reactive proxy" },
  { count: 1, state: '{ activeTab: "kpi", count: 1 }', vdom: "VDOM Diffing: <Badge count={1} />", dom: "Patching <span class='badge'>1</span>", msg: "State Mutated -> Owl triggers reactive microtask batch" },
  { count: 2, state: '{ activeTab: "chart", count: 2 }', vdom: "VDOM Diffing: <ChartWidget />", dom: "Patching Canvas DOM subtree", msg: "Component re-renders with zero full-page reload" },
];

export function OdooOwlArt() {
  const frameIdx = useAnimationFrame(FRAMES.length, 1600);
  const current = FRAMES[frameIdx];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 400 320"
        role="img"
        aria-label="Interactive Odoo Owl 2.0 reactive frontend component animation"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={400} height={320} fill={PAPER} />

        {/* Title Banner */}
        <rect x={24} y={16} width={352} height={34} fill={INK} rx={4} />
        <text x={200} y={38} textAnchor="middle" fill="#FFFFFF" fontSize={12} fontWeight={700} fontFamily={FONT} letterSpacing={2}>
          OWL 2.0 REACTIVE FRONTEND ENGINE
        </text>

        {/* Owl Reactivity Canvas */}
        <g transform="translate(24, 60)">
          <rect x={0} y={0} width={352} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={4} />

          {/* Reactive State Box */}
          <g transform="translate(16, 20)">
            <rect x={0} y={0} width={144} height={150} fill={YELLOW} stroke={INK} strokeWidth={1.5} rx={4} />
            <text x={72} y={24} textAnchor="middle" fill={INK} fontSize={10} fontWeight={800} fontFamily={FONT}>
              USESTATE() PROXY
            </text>
            <rect x={8} y={36} width={128} height={50} fill="#FFFFFF" stroke={INK} strokeWidth={1} rx={3} />
            <text x={72} y={54} textAnchor="middle" fill={GREEN} fontSize={9} fontWeight={800} fontFamily={FONT}>
              STATE OBJECT:
            </text>
            <text x={72} y={72} textAnchor="middle" fill={INK} fontSize={8} fontWeight={700} fontFamily={FONT}>
              {current.state.slice(0, 20)}...
            </text>

            <rect x={8} y={94} width={128} height={44} fill={INK} rx={3} />
            <text x={72} y={114} textAnchor="middle" fill="#FFFFFF" fontSize={9} fontWeight={700} fontFamily={FONT}>
              REACTIVE TRACKER
            </text>
            <text x={72} y={128} textAnchor="middle" fill={YELLOW} fontSize={8} fontWeight={800} fontFamily={FONT}>
              MUTATION DETECTED
            </text>
          </g>

          {/* Virtual DOM & Patch Box */}
          <g transform="translate(176, 20)">
            <rect x={0} y={0} width={160} height={150} fill={BLUE} stroke={INK} strokeWidth={1.5} rx={4} />
            <text x={80} y={24} textAnchor="middle" fill={INK} fontSize={10} fontWeight={800} fontFamily={FONT}>
              VIRTUAL DOM & DIFF
            </text>

            <rect x={10} y={36} width={140} height={46} fill="#FFFFFF" stroke={INK} strokeWidth={1} rx={3} />
            <text x={80} y={54} textAnchor="middle" fill={INK} fontSize={8} fontWeight={700} fontFamily={FONT}>
              VDOM RECONCILIATION:
            </text>
            <text x={80} y={70} textAnchor="middle" fill={GREEN} fontSize={8} fontWeight={800} fontFamily={FONT}>
              {current.vdom}
            </text>

            <rect x={10} y={90} width={140} height={48} fill={GREEN} rx={3} />
            <text x={80} y={110} textAnchor="middle" fill="#FFFFFF" fontSize={9} fontWeight={800} fontFamily={FONT}>
              BROWSER DOM PATCH:
            </text>
            <text x={80} y={126} textAnchor="middle" fill="#FFFFFF" fontSize={8} fontWeight={700} fontFamily={FONT}>
              {current.dom.slice(0, 24)}
            </text>
          </g>
        </g>

        {/* Action Status Bar */}
        <rect x={24} y={264} width={352} height={32} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={4} />
        <text x={200} y={284} textAnchor="middle" fill={INK} fontSize={11} fontWeight={700} fontFamily={FONT}>
          OWL ENGINE: <tspan fill={GREEN} fontWeight={800}>{current.msg}</tspan>
        </text>
      </svg>
      <p className="ih-checkpoint-art-caption">Owl 2.0 framework components, reactive state stores & Virtual DOM diffing</p>
    </div>
  );
}
