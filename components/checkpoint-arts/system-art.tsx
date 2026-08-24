"use client";

import { useAnimationFrame } from "./use-animation-frame";

const INK = "#282A35";
const PAPER = "#E7E9EB";
const GREEN = "#04AA6D";
const BLUE = "#96D4FA";
const YELLOW = "#FFF4A3";
const MINT = "#D9EEE1";
const FONT = "Poppins, sans-serif";

const FRAMES = [
  { target: 0, server: "Node 1 (EU-West)", load: "24%", msg: "Load Balancer routes Request #101 to Node 1" },
  { target: 1, server: "Node 2 (US-East)", load: "31%", msg: "Load Balancer routes Request #102 to Node 2" },
  { target: 2, server: "Node 3 (AP-South)", load: "18%", msg: "Load Balancer routes Request #103 to Node 3" },
  { target: -1, server: "All Nodes Active", load: "Balanced", msg: "Health Check: All 3 cluster nodes healthy & in sync" },
];

export function SystemArt() {
  const frameIdx = useAnimationFrame(FRAMES.length, 1600);
  const current = FRAMES[frameIdx];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 400 320"
        role="img"
        aria-label="Interactive distributed system and load balancing animation"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={400} height={320} fill={PAPER} />

        {/* Title Banner */}
        <rect x={24} y={16} width={352} height={34} fill={INK} rx={4} />
        <text x={200} y={38} textAnchor="middle" fill="#FFFFFF" fontSize={12} fontWeight={700} fontFamily={FONT} letterSpacing={2}>
          DISTRIBUTED SYSTEMS & LOAD BALANCING
        </text>

        {/* Distributed Cluster Canvas */}
        <g transform="translate(24, 60)">
          <rect x={0} y={0} width={352} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={4} />

          {/* Incoming Traffic Gateway */}
          <g transform="translate(16, 65)">
            <rect x={0} y={0} width={80} height={60} fill={YELLOW} stroke={INK} strokeWidth={2} rx={4} />
            <text x={40} y={26} textAnchor="middle" fill={INK} fontSize={10} fontWeight={800} fontFamily={FONT}>CLIENT</text>
            <text x={40} y={42} textAnchor="middle" fill={INK} fontSize={9} fontWeight={600} fontFamily={FONT}>TRAFFIC</text>
          </g>

          {/* Load Balancer */}
          <g transform="translate(126, 45)">
            <rect x={0} y={0} width={76} height={100} fill={INK} rx={6} />
            <text x={38} y={30} textAnchor="middle" fill="#FFFFFF" fontSize={9} fontWeight={800} fontFamily={FONT}>LOAD</text>
            <text x={38} y={45} textAnchor="middle" fill="#FFFFFF" fontSize={9} fontWeight={800} fontFamily={FONT}>BALANCER</text>
            <circle cx={38} cy={72} r={12} fill={GREEN} />
            <text x={38} y={77} textAnchor="middle" fill="#FFFFFF" fontSize={11} fontWeight={800} fontFamily={FONT}>↻</text>
          </g>

          {/* Server Nodes Cluster */}
          <g transform="translate(232, 16)">
            {[0, 1, 2].map((idx) => {
              const isActive = current.target === idx || current.target === -1;
              const y = idx * 54;
              return (
                <g key={idx}>
                  <rect
                    x={0}
                    y={y}
                    width={104}
                    height={46}
                    fill={isActive ? MINT : "#FFFFFF"}
                    stroke={isActive ? GREEN : INK}
                    strokeWidth={isActive ? 2.5 : 1.5}
                    rx={4}
                  />
                  <text
                    x={52}
                    y={y + 18}
                    textAnchor="middle"
                    fill={INK}
                    fontSize={9}
                    fontWeight={800}
                    fontFamily={FONT}
                  >
                    NODE {idx + 1}
                  </text>
                  <text
                    x={52}
                    y={y + 34}
                    textAnchor="middle"
                    fill={isActive ? GREEN : "#70757A"}
                    fontSize={8}
                    fontWeight={700}
                    fontFamily={FONT}
                  >
                    HEALTHY [OK]
                  </text>
                </g>
              );
            })}
          </g>
        </g>

        {/* Action Status Bar */}
        <rect x={24} y={264} width={352} height={32} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={4} />
        <text x={200} y={284} textAnchor="middle" fill={INK} fontSize={11} fontWeight={700} fontFamily={FONT}>
          CLUSTER: <tspan fill={GREEN} fontWeight={800}>{current.msg}</tspan>
        </text>
      </svg>
      <p className="ih-checkpoint-art-caption">High availability, distributed clusters & reverse proxy routing</p>
    </div>
  );
}
