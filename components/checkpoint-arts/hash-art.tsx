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
  { key: '"alice"', hash: "hash(key) % 4 = 1", bucket: 1, val: "Alice (ID: 101)" },
  { key: '"bob"', hash: "hash(key) % 4 = 3", bucket: 3, val: "Bob (ID: 102)" },
  { key: '"charlie"', hash: "hash(key) % 4 = 1", bucket: 1, val: "Collision Chained!" },
  { key: '"david"', hash: "hash(key) % 4 = 2", bucket: 2, val: "David (ID: 104)" },
];

export function HashArt() {
  const frameIdx = useAnimationFrame(FRAMES.length, 1500);
  const current = FRAMES[frameIdx];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 400 320"
        role="img"
        aria-label="Interactive Hash table hashing and collision resolution animation"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={400} height={320} fill={PAPER} />

        {/* Title Banner */}
        <rect x={24} y={16} width={352} height={34} fill={INK} rx={4} />
        <text x={200} y={38} textAnchor="middle" fill="#FFFFFF" fontSize={12} fontWeight={700} fontFamily={FONT} letterSpacing={2}>
          HASH MAPS & O(1) LOOKUP
        </text>

        {/* Hash Table Diagram */}
        <g transform="translate(30, 64)">
          {/* Key Box */}
          <rect x={0} y={40} width={90} height={44} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={4} />
          <rect x={0} y={40} width={90} height={16} fill={YELLOW} rx={4} />
          <text x={45} y={52} textAnchor="middle" fill={INK} fontSize={9} fontWeight={700} fontFamily={FONT}>KEY</text>
          <text x={45} y={74} textAnchor="middle" fill={INK} fontSize={12} fontWeight={800} fontFamily={FONT}>{current.key}</text>

          {/* Arrow into Hash Func */}
          <line x1={90} y1={62} x2={120} y2={62} stroke={GREEN} strokeWidth={3} />
          <polygon points="124,62 118,58 118,66" fill={GREEN} />

          {/* Hash Function */}
          <rect x={126} y={30} width={88} height={64} fill={INK} rx={6} />
          <text x={170} y={56} textAnchor="middle" fill="#FFFFFF" fontSize={10} fontWeight={700} fontFamily={FONT}>HASH(K)</text>
          <text x={170} y={78} textAnchor="middle" fill={YELLOW} fontSize={11} fontWeight={800} fontFamily={FONT}>MOD 4</text>

          {/* Arrow into Bucket Array */}
          <line x1={214} y1={62} x2={246} y2={62} stroke={GREEN} strokeWidth={3} />
          <polygon points="250,62 244,58 244,66" fill={GREEN} />

          {/* Bucket Array */}
          <g transform="translate(252, 0)">
            {[0, 1, 2, 3].map((bIdx) => {
              const isMatch = current.bucket === bIdx;
              const y = bIdx * 45;
              return (
                <g key={bIdx}>
                  <rect
                    x={0}
                    y={y}
                    width={88}
                    height={38}
                    fill={isMatch ? GREEN : "#FFFFFF"}
                    stroke={INK}
                    strokeWidth={2}
                    rx={3}
                  />
                  <text
                    x={20}
                    y={y + 24}
                    fill={isMatch ? "#FFFFFF" : INK}
                    fontSize={11}
                    fontWeight={800}
                    fontFamily={FONT}
                  >
                    [{bIdx}]
                  </text>
                  {isMatch && (
                    <circle cx={65} cy={y + 19} r={7} fill={YELLOW} />
                  )}
                </g>
              );
            })}
          </g>
        </g>

        {/* Action Status Bar */}
        <rect x={24} y={264} width={352} height={32} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={4} />
        <text x={200} y={284} textAnchor="middle" fill={INK} fontSize={11} fontWeight={700} fontFamily={FONT}>
          SLOT: <tspan fill={GREEN} fontWeight={800}>{current.hash} → {current.val}</tspan>
        </text>
      </svg>
      <p className="ih-checkpoint-art-caption">Hash tables, hash functions & constant-time lookups</p>
    </div>
  );
}
