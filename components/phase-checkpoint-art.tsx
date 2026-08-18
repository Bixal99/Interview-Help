import type { ReactNode } from "react";
import { CheckpointTerminal } from "@/components/checkpoint-terminal";

type Topic = { id: string; title: string };

type ArtKind =
  | "terminal"
  | "complexity"
  | "graph"
  | "tree"
  | "hash"
  | "list"
  | "recursion"
  | "search"
  | "objects"
  | "functions"
  | "control"
  | "os"
  | "network"
  | "web"
  | "database"
  | "security"
  | "system"
  | "testing"
  | "default";

function checkpointArtKind(title: string, topics: Topic[]): ArtKind {
  const text = `${title} ${topics.map((topic) => `${topic.id} ${topic.title}`).join(" ")}`.toLowerCase();
  if (/\bgraphs?\b|bfs|dfs|shortest path|dijkstra/.test(text)) return "graph";
  if (/complex|big o|notation|time & space/.test(text)) return "complexity";
  if (/\bhash/.test(text)) return "hash";
  if (/recur/.test(text)) return "recursion";
  if (/\btrees?\b|heap|hierarch|binary search tree|\bbst\b/.test(text)) return "tree";
  if (/sort|binary search|\border\b/.test(text)) return "search";
  if (/stack|queue|linked list|array|linear data/.test(text)) return "list";
  if (/operat(?:ing)? system|\bprocess\b|\bthread\b|deadlock|scheduler/.test(text)) return "os";
  if (/tcp|packet|dns|routing|computer network|\bnetworks\b/.test(text)) return "network";
  if (/database|sql|schema|data model|warehouse/.test(text)) return "database";
  if (/auth|security|encrypt|xss|csrf|cyber/.test(text)) return "security";
  if (/http|api|web|browser|html|css|frontend/.test(text)) return "web";
  if (/distribut|system design|scalab|load balanc/.test(text)) return "system";
  if (/test|interview|mock/.test(text)) return "testing";
  if (/class|object|encapsul|inherit|polymorph|composit|solid|pattern|oop|low-level design/.test(text)) return "objects";
  if (/function|module/.test(text)) return "functions";
  if (/control flow|loop|branch|if else/.test(text)) return "control";
  if (/execut|source code|compil|interpreter|running program|how programs run|git|shell|command/.test(text)) return "terminal";
  return "default";
}

function Frame({
  children,
  label,
  className,
  caption,
  viewBox = "0 0 360 260",
  accent = true,
}: {
  children: ReactNode;
  label: string;
  className?: string;
  caption?: string;
  viewBox?: string;
  accent?: boolean;
}) {
  const [minX, minY, width, height] = viewBox.split(" ").map(Number);
  return (
    <div className="ih-checkpoint-art">
      <svg viewBox={viewBox} role="img" aria-label={label} className={className}>
        <rect x={minX} y={minY} width={width} height={height} fill="#E7E9EB" />
        {accent ? <rect x={minX} y={minY} width={10} height={height} fill="#04AA6D" /> : null}
        {children}
      </svg>
      {caption ? <p className="ih-checkpoint-art-caption">{caption}</p> : null}
    </div>
  );
}

function TerminalArt({ title }: { title: string }) {
  return <CheckpointTerminal title={title} />;
}

function ArrowHead({
  x,
  y,
  angle,
  color,
  drawClass,
}: {
  x: number;
  y: number;
  angle: number;
  color: string;
  drawClass: string;
}) {
  return (
    <polygon
      className={`ih-label ${drawClass}`}
      fill={color}
      stroke={color}
      strokeWidth="1.2"
      strokeLinejoin="round"
      transform={`translate(${x} ${y}) rotate(${angle})`}
      points="0,0 -12,-6 -12,6"
    />
  );
}

function arrowAngle(fromX: number, fromY: number, toX: number, toY: number) {
  return (Math.atan2(toY - fromY, toX - fromX) * 180) / Math.PI;
}

const OX = 48;
const OY = 340;
const ARROW_LEN = 12;
const AXIS_END_X = 300;
const AXIS_TOP_Y = 56;

const COMPLEXITY_CURVES = [
  { n: 1, c1: [140, 332], c2: [220, 332], x: 292, y: 332, color: "#9aa0a6", label: "O(1)", width: 2.5 },
  { n: 2, c1: [130, 334], c2: [220, 308], x: 292, y: 292, color: "#70757A", label: "O(log n)", width: 2.5 },
  { n: 3, c1: [140, 318], c2: [220, 270], x: 292, y: 238, color: "#a78bfa", label: "O(√n)", width: 2.5 },
  { n: 4, c1: [130, 278], c2: [210, 210], x: 292, y: 168, color: "#0E7490", label: "O(n)", width: 3 },
  { n: 5, c1: [120, 320], c2: [210, 200], x: 292, y: 118, color: "#26538D", label: "O(n log n)", width: 3 },
  { n: 6, c1: [110, 336], c2: [200, 190], x: 272, y: 78, color: "#04AA6D", label: "O(n²)", width: 3.5 },
  { n: 7, c1: [95, 338], c2: [215, 100], x: 238, y: 52, color: "#C84C4C", label: "O(n³)", width: 3 },
  { n: 8, c1: [80, 338], c2: [175, 110], x: 190, y: 46, color: "#111111", label: "O(2ⁿ)", width: 3.5 },
  { n: 9, c1: [62, 338], c2: [125, 125], x: 132, y: 44, color: "#7c3aed", label: "O(n!)", width: 3.5 },
] as const;

function shortenEnd(fromX: number, fromY: number, toX: number, toY: number) {
  const dx = toX - fromX;
  const dy = toY - fromY;
  const len = Math.hypot(dx, dy) || 1;
  return {
    x: toX - (dx / len) * ARROW_LEN,
    y: toY - (dy / len) * ARROW_LEN,
  };
}

function curvePath(curve: (typeof COMPLEXITY_CURVES)[number]) {
  const end = shortenEnd(curve.c2[0], curve.c2[1], curve.x, curve.y);
  return `M${OX} ${OY} C${curve.c1[0]} ${curve.c1[1]} ${curve.c2[0]} ${curve.c2[1]} ${end.x} ${end.y}`;
}

function ComplexityArt() {
  return (
    <Frame
      label="How work grows as the input grows"
      className="ih-big-o"
      caption="Time Complexities"
      viewBox="0 0 400 400"
      accent={false}
    >
      <line
        x1={OX}
        y1={OY}
        x2={AXIS_END_X}
        y2={OY}
        stroke="#282A35"
        strokeWidth="2"
        shapeRendering="crispEdges"
      />
      <polygon points={`${AXIS_END_X + 8},${OY} ${AXIS_END_X},${OY - 4} ${AXIS_END_X},${OY + 4}`} fill="#282A35" />
      <text
        x={AXIS_END_X + 16}
        y={OY - 1}
        fill="#282A35"
        fontSize="13"
        fontWeight="700"
        fontFamily="Poppins, sans-serif"
      >
        n
      </text>
      <line
        x1={OX}
        y1={OY}
        x2={OX}
        y2={AXIS_TOP_Y}
        stroke="#282A35"
        strokeWidth="2"
        shapeRendering="crispEdges"
      />
      <polygon points={`${OX},${AXIS_TOP_Y - 8} ${OX - 4},${AXIS_TOP_Y} ${OX + 4},${AXIS_TOP_Y}`} fill="#282A35" />
      <text
        x={OX}
        y={AXIS_TOP_Y - 16}
        fill="#282A35"
        fontSize="13"
        fontWeight="700"
        fontFamily="Poppins, sans-serif"
        textAnchor="middle"
      >
        t
      </text>
      {COMPLEXITY_CURVES.map((curve) => (
        <g key={curve.n}>
          <path
            className={`ih-draw ih-draw-${curve.n}`}
            d={curvePath(curve)}
            pathLength={1}
            fill="none"
            stroke={curve.color}
            strokeWidth={curve.width}
          />
          <ArrowHead
            x={curve.x}
            y={curve.y}
            angle={arrowAngle(curve.c2[0], curve.c2[1], curve.x, curve.y)}
            color={curve.color}
            drawClass={`ih-draw-${curve.n}`}
          />
          <text
            className={`ih-label ih-draw-${curve.n}`}
            x={curve.x}
            y={curve.y - 22}
            fill={curve.color}
            fontSize="13"
            fontWeight="700"
            fontFamily="Poppins, sans-serif"
            textAnchor="middle"
          >
            {curve.label}
          </text>
        </g>
      ))}
    </Frame>
  );
}

function GraphArt() {
  return (
    <Frame label="A graph of connected nodes">
      <line x1="90" y1="90" x2="180" y2="70" stroke="#282A35" strokeWidth="4" />
      <line x1="180" y1="70" x2="280" y2="100" stroke="#282A35" strokeWidth="4" />
      <line x1="90" y1="90" x2="140" y2="180" stroke="#282A35" strokeWidth="4" />
      <line x1="180" y1="70" x2="210" y2="190" stroke="#04AA6D" strokeWidth="5" />
      <line x1="280" y1="100" x2="210" y2="190" stroke="#282A35" strokeWidth="4" />
      <line x1="140" y1="180" x2="210" y2="190" stroke="#282A35" strokeWidth="4" />
      <circle cx="90" cy="90" r="22" fill="#04AA6D" />
      <circle cx="180" cy="70" r="22" fill="#FFF4A3" />
      <circle cx="280" cy="100" r="22" fill="#96D4FA" />
      <circle cx="140" cy="180" r="22" fill="#FFC0C7" />
      <circle cx="210" cy="190" r="22" fill="#04AA6D" />
      <text x="28" y="36" fill="#282A35" fontSize="13" fontWeight="700" fontFamily="Poppins, sans-serif">nodes + edges</text>
    </Frame>
  );
}

function TreeArt() {
  return (
    <Frame label="A tree of parent and child nodes">
      <line x1="180" y1="70" x2="100" y2="130" stroke="#282A35" strokeWidth="4" />
      <line x1="180" y1="70" x2="260" y2="130" stroke="#282A35" strokeWidth="4" />
      <line x1="100" y1="130" x2="70" y2="200" stroke="#282A35" strokeWidth="4" />
      <line x1="100" y1="130" x2="130" y2="200" stroke="#282A35" strokeWidth="4" />
      <line x1="260" y1="130" x2="230" y2="200" stroke="#282A35" strokeWidth="4" />
      <line x1="260" y1="130" x2="300" y2="200" stroke="#282A35" strokeWidth="4" />
      <circle cx="180" cy="62" r="22" fill="#04AA6D" />
      <circle cx="100" cy="130" r="20" fill="#FFF4A3" />
      <circle cx="260" cy="130" r="20" fill="#96D4FA" />
      <circle cx="70" cy="200" r="16" fill="#FFC0C7" />
      <circle cx="130" cy="200" r="16" fill="#D9EEE1" />
      <circle cx="230" cy="200" r="16" fill="#FFC0C7" />
      <circle cx="300" cy="200" r="16" fill="#D9EEE1" />
    </Frame>
  );
}

function HashArt() {
  return (
    <Frame label="Keys mapping into hash buckets">
      <rect x="36" y="56" width="100" height="36" fill="#FFF4A3" />
      <rect x="36" y="108" width="100" height="36" fill="#96D4FA" />
      <rect x="36" y="160" width="100" height="36" fill="#FFC0C7" />
      <text x="86" y="80" textAnchor="middle" fill="#282A35" fontSize="13" fontWeight="700">key</text>
      <text x="86" y="132" textAnchor="middle" fill="#282A35" fontSize="13" fontWeight="700">key</text>
      <text x="86" y="184" textAnchor="middle" fill="#282A35" fontSize="13" fontWeight="700">key</text>
      <path d="M148 74 H190" stroke="#04AA6D" strokeWidth="4" />
      <path d="M148 126 H190" stroke="#04AA6D" strokeWidth="4" />
      <path d="M148 178 H190" stroke="#04AA6D" strokeWidth="4" />
      <rect x="190" y="40" width="130" height="180" fill="#fff" />
      <rect x="190" y="40" width="10" height="180" fill="#04AA6D" />
      <rect x="214" y="58" width="88" height="28" fill="#D9EEE1" />
      <rect x="214" y="102" width="88" height="28" fill="#D9EEE1" />
      <rect x="214" y="146" width="88" height="28" fill="#D9EEE1" />
      <text x="28" y="32" fill="#282A35" fontSize="13" fontWeight="700" fontFamily="Poppins, sans-serif">hash map</text>
    </Frame>
  );
}

function ListArt() {
  return (
    <Frame label="Linked boxes in a line">
      <rect x="36" y="100" width="70" height="54" fill="#04AA6D" />
      <rect x="128" y="100" width="70" height="54" fill="#FFF4A3" />
      <rect x="220" y="100" width="70" height="54" fill="#96D4FA" />
      <polygon points="112,127 124,127 124,121 140,130 124,139 124,133 112,133" fill="#282A35" />
      <polygon points="204,127 216,127 216,121 232,130 216,139 216,133 204,133" fill="#282A35" />
      <text x="28" y="36" fill="#282A35" fontSize="13" fontWeight="700" fontFamily="Poppins, sans-serif">next → next</text>
    </Frame>
  );
}

function RecursionArt() {
  return (
    <Frame label="Stacked function frames">
      <rect x="70" y="48" width="220" height="48" fill="#96D4FA" />
      <rect x="88" y="104" width="184" height="48" fill="#FFF4A3" />
      <rect x="106" y="160" width="148" height="48" fill="#04AA6D" />
      <text x="180" y="78" textAnchor="middle" fill="#282A35" fontSize="14" fontWeight="700">f(3)</text>
      <text x="180" y="134" textAnchor="middle" fill="#282A35" fontSize="14" fontWeight="700">f(2)</text>
      <text x="180" y="190" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">f(1)</text>
    </Frame>
  );
}

function SearchArt() {
  return (
    <Frame label="A sorted list with the middle item marked">
      {[0, 1, 2, 3, 4, 5, 6].map((index) => (
        <rect key={index} x={40 + index * 42} y="110" width="36" height="48" fill={index === 3 ? "#04AA6D" : "#fff"} />
      ))}
      <text x="190" y="92" textAnchor="middle" fill="#04AA6D" fontSize="13" fontWeight="700">mid</text>
      <polygon points="190,100 184,108 196,108" fill="#04AA6D" />
      <text x="28" y="36" fill="#282A35" fontSize="13" fontWeight="700" fontFamily="Poppins, sans-serif">sorted search</text>
    </Frame>
  );
}

function ObjectsArt() {
  return (
    <Frame label="A class blueprint and two objects">
      <rect x="40" y="56" width="130" height="150" fill="#fff" />
      <rect x="40" y="56" width="130" height="36" fill="#04AA6D" />
      <text x="105" y="80" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">Class</text>
      <rect x="56" y="108" width="98" height="14" fill="#D9EEE1" />
      <rect x="56" y="132" width="98" height="14" fill="#D9EEE1" />
      <rect x="56" y="156" width="70" height="14" fill="#FFF4A3" />
      <rect x="196" y="80" width="112" height="56" fill="#96D4FA" />
      <rect x="196" y="150" width="112" height="56" fill="#FFC0C7" />
      <text x="252" y="114" textAnchor="middle" fill="#282A35" fontSize="13" fontWeight="700">obj</text>
      <text x="252" y="184" textAnchor="middle" fill="#282A35" fontSize="13" fontWeight="700">obj</text>
    </Frame>
  );
}

function FunctionsArt() {
  return (
    <Frame label="Input going into a function and output coming out">
      <rect x="36" y="110" width="70" height="40" fill="#FFF4A3" />
      <rect x="140" y="88" width="90" height="84" fill="#04AA6D" />
      <rect x="264" y="110" width="70" height="40" fill="#96D4FA" />
      <polygon points="114,130 136,130 136,124 152,132 136,140 136,134 114,134" fill="#282A35" />
      <polygon points="238,130 260,130 260,124 276,132 260,140 260,134 238,134" fill="#282A35" />
      <text x="185" y="136" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">fn</text>
    </Frame>
  );
}

function ControlArt() {
  return (
    <Frame label="A decision that splits into two paths">
      <polygon points="180,56 250,110 180,164 110,110" fill="#FFF4A3" stroke="#282A35" strokeWidth="3" />
      <text x="180" y="116" textAnchor="middle" fill="#282A35" fontSize="14" fontWeight="700">if</text>
      <rect x="56" y="188" width="88" height="36" fill="#04AA6D" />
      <rect x="216" y="188" width="88" height="36" fill="#96D4FA" />
      <line x1="150" y1="148" x2="100" y2="188" stroke="#282A35" strokeWidth="3" />
      <line x1="210" y1="148" x2="260" y2="188" stroke="#282A35" strokeWidth="3" />
    </Frame>
  );
}

function OsArt() {
  return (
    <Frame label="A CPU with two running processes">
      <rect x="118" y="48" width="124" height="80" fill="#04AA6D" />
      <text x="180" y="96" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="700">CPU</text>
      <rect x="40" y="160" width="120" height="56" fill="#FFF4A3" />
      <rect x="200" y="160" width="120" height="56" fill="#96D4FA" />
      <text x="100" y="194" textAnchor="middle" fill="#282A35" fontSize="13" fontWeight="700">proc A</text>
      <text x="260" y="194" textAnchor="middle" fill="#282A35" fontSize="13" fontWeight="700">proc B</text>
    </Frame>
  );
}

function NetworkArt() {
  return (
    <Frame label="Two machines sending a packet">
      <rect x="36" y="88" width="90" height="70" fill="#04AA6D" />
      <rect x="234" y="88" width="90" height="70" fill="#96D4FA" />
      <rect x="48" y="100" width="66" height="36" fill="#fff" />
      <rect x="246" y="100" width="66" height="36" fill="#fff" />
      <line x1="126" y1="123" x2="234" y2="123" stroke="#282A35" strokeWidth="4" strokeDasharray="8 6" />
      <rect x="156" y="108" width="48" height="28" fill="#FFF4A3" />
      <text x="180" y="200" textAnchor="middle" fill="#282A35" fontSize="13" fontWeight="700">packet</text>
    </Frame>
  );
}

function WebArt() {
  return (
    <Frame label="A browser window">
      <rect x="40" y="48" width="280" height="168" fill="#fff" />
      <rect x="40" y="48" width="280" height="36" fill="#282A35" />
      <circle cx="58" cy="66" r="5" fill="#ff5f56" />
      <circle cx="74" cy="66" r="5" fill="#ffbd2e" />
      <circle cx="90" cy="66" r="5" fill="#04AA6D" />
      <rect x="110" y="58" width="190" height="16" fill="#E7E9EB" />
      <rect x="58" y="104" width="110" height="84" fill="#D9EEE1" />
      <rect x="184" y="104" width="116" height="36" fill="#96D4FA" />
      <rect x="184" y="152" width="116" height="36" fill="#FFF4A3" />
    </Frame>
  );
}

function DatabaseArt() {
  return (
    <Frame label="A data table">
      <rect x="48" y="56" width="264" height="160" fill="#fff" />
      <rect x="48" y="56" width="264" height="36" fill="#04AA6D" />
      <line x1="136" y1="56" x2="136" y2="216" stroke="#E7E9EB" strokeWidth="3" />
      <line x1="224" y1="56" x2="224" y2="216" stroke="#E7E9EB" strokeWidth="3" />
      <line x1="48" y1="120" x2="312" y2="120" stroke="#E7E9EB" strokeWidth="3" />
      <line x1="48" y1="168" x2="312" y2="168" stroke="#E7E9EB" strokeWidth="3" />
      <rect x="160" y="128" width="48" height="28" fill="#FFF4A3" />
    </Frame>
  );
}

function SecurityArt() {
  return (
    <Frame label="A lock">
      <rect x="130" y="118" width="100" height="86" fill="#04AA6D" />
      <path d="M150 118 V90 a30 30 0 0 1 60 0 V118" fill="none" stroke="#FFF4A3" strokeWidth="12" />
      <circle cx="180" cy="154" r="10" fill="#fff" />
      <rect x="176" y="160" width="8" height="22" fill="#fff" />
    </Frame>
  );
}

function SystemArt() {
  return (
    <Frame label="Stacked servers">
      <rect x="70" y="48" width="220" height="48" fill="#04AA6D" />
      <rect x="70" y="108" width="220" height="48" fill="#96D4FA" />
      <rect x="70" y="168" width="220" height="48" fill="#FFF4A3" />
      <circle cx="96" cy="72" r="7" fill="#fff" />
      <circle cx="96" cy="132" r="7" fill="#282A35" />
      <circle cx="96" cy="192" r="7" fill="#282A35" />
    </Frame>
  );
}

function TestingArt() {
  return (
    <Frame label="Checks on a list">
      <rect x="48" y="56" width="264" height="48" fill="#fff" />
      <rect x="48" y="116" width="264" height="48" fill="#fff" />
      <rect x="48" y="176" width="264" height="48" fill="#fff" />
      <rect x="60" y="68" width="24" height="24" fill="#04AA6D" />
      <rect x="60" y="128" width="24" height="24" fill="#04AA6D" />
      <rect x="60" y="188" width="24" height="24" fill="#FFF4A3" />
      <rect x="102" y="74" width="180" height="12" fill="#D9EEE1" />
      <rect x="102" y="134" width="150" height="12" fill="#D9EEE1" />
      <rect x="102" y="194" width="168" height="12" fill="#E7E9EB" />
    </Frame>
  );
}

function DefaultArt({ number }: { number: string }) {
  return (
    <Frame label="Section card">
      <rect x="36" y="40" width="128" height="128" fill="#04AA6D" />
      <text x="100" y="118" textAnchor="middle" fill="#fff" fontSize="52" fontWeight="700" fontFamily="Poppins, sans-serif">{number}</text>
      <rect x="180" y="40" width="144" height="58" fill="#FFF4A3" />
      <rect x="180" y="110" width="144" height="58" fill="#96D4FA" />
      <rect x="36" y="188" width="288" height="14" fill="#fff" />
      <rect x="36" y="214" width="200" height="14" fill="#FFC0C7" />
    </Frame>
  );
}

const ART: Record<Exclude<ArtKind, "terminal">, (number: string) => ReactNode> = {
  complexity: () => <ComplexityArt />,
  graph: () => <GraphArt />,
  tree: () => <TreeArt />,
  hash: () => <HashArt />,
  list: () => <ListArt />,
  recursion: () => <RecursionArt />,
  search: () => <SearchArt />,
  objects: () => <ObjectsArt />,
  functions: () => <FunctionsArt />,
  control: () => <ControlArt />,
  os: () => <OsArt />,
  network: () => <NetworkArt />,
  web: () => <WebArt />,
  database: () => <DatabaseArt />,
  security: () => <SecurityArt />,
  system: () => <SystemArt />,
  testing: () => <TestingArt />,
  default: (number) => <DefaultArt number={number} />,
};

export function PhaseCheckpointArt({
  number,
  title,
  topics,
}: {
  number: string;
  title: string;
  topics: Topic[];
}) {
  const kind = checkpointArtKind(title, topics);
  if (kind === "terminal") return <TerminalArt title={title} />;
  return ART[kind](number);
}
