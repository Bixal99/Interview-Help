"use client";

import { useAnimationFrame } from "./use-animation-frame";

const INK = "#282A35";
const PAPER = "#E7E9EB";
const GREEN = "#04AA6D";
const BLUE = "#96D4FA";
const YELLOW = "#FFF4A3";
const FONT = "Poppins, sans-serif";

const STEPS = [
  { step: "1. CLIENT SYN", dir: "right", packet: "SYN [Seq=100]", msg: "Client initiates TCP Connection -> Sends SYN" },
  { step: "2. SERVER SYN-ACK", dir: "left", packet: "SYN-ACK [Seq=300, Ack=101]", msg: "Server acknowledges -> Sends SYN-ACK" },
  { step: "3. CLIENT ACK", dir: "right", packet: "ACK [Ack=301]", msg: "Client completes 3-Way Handshake -> Connection ESTABLISHED" },
  { step: "4. DATA STREAM", dir: "right", packet: "HTTP GET /api/data", msg: "TLS Encrypted Application Data payload flowing" },
];

export function NetworkArt() {
  const frameIdx = useAnimationFrame(STEPS.length, 1600);
  const current = STEPS[frameIdx];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 400 320"
        role="img"
        aria-label="Interactive TCP 3-way handshake and packet network animation"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={400} height={320} fill={PAPER} />

        {/* Title Banner */}
        <rect x={24} y={16} width={352} height={34} fill={INK} rx={4} />
        <text x={200} y={38} textAnchor="middle" fill="#FFFFFF" fontSize={12} fontWeight={700} fontFamily={FONT} letterSpacing={2}>
          COMPUTER NETWORKING & TCP/IP
        </text>

        {/* Network Nodes */}
        <g transform="translate(24, 60)">
          <rect x={0} y={0} width={352} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={4} />

          {/* Client Node */}
          <g transform="translate(20, 40)">
            <rect x={0} y={0} width={80} height={100} fill={BLUE} stroke={INK} strokeWidth={2} rx={6} />
            <text x={40} y={24} textAnchor="middle" fill={INK} fontSize={11} fontWeight={800} fontFamily={FONT}>CLIENT</text>
            <rect x={12} y={36} width={56} height={36} fill="#FFFFFF" rx={3} />
            <text x={40} y={58} textAnchor="middle" fill={INK} fontSize={10} fontWeight={700} fontFamily={FONT}>:8080</text>
            <text x={40} y={88} textAnchor="middle" fill={INK} fontSize={9} fontWeight={600} fontFamily={FONT}>192.168.1.5</text>
          </g>

          {/* Network Packet Stream */}
          <g transform="translate(105, 75)">
            <line x1={0} y1={20} x2={142} y2={20} stroke={INK} strokeWidth={3} strokeDasharray="6 4" />
            
            <rect x={16} y={0} width={110} height={40} fill={YELLOW} stroke={INK} strokeWidth={2} rx={4} />
            <text x={71} y={18} textAnchor="middle" fill={INK} fontSize={9} fontWeight={800} fontFamily={FONT}>PACKET (IP/TCP)</text>
            <text x={71} y={32} textAnchor="middle" fill={GREEN} fontSize={8} fontWeight={700} fontFamily={FONT}>{current.packet}</text>
          </g>

          {/* Server Node */}
          <g transform="translate(252, 40)">
            <rect x={0} y={0} width={80} height={100} fill={GREEN} stroke={INK} strokeWidth={2} rx={6} />
            <text x={40} y={24} textAnchor="middle" fill="#FFFFFF" fontSize={11} fontWeight={800} fontFamily={FONT}>SERVER</text>
            <rect x={12} y={36} width={56} height={36} fill="#FFFFFF" rx={3} />
            <text x={40} y={58} textAnchor="middle" fill={INK} fontSize={10} fontWeight={700} fontFamily={FONT}>:443</text>
            <text x={40} y={88} textAnchor="middle" fill="#FFFFFF" fontSize={9} fontWeight={600} fontFamily={FONT}>10.0.0.1</text>
          </g>
        </g>

        {/* Action Status Bar */}
        <rect x={24} y={264} width={352} height={32} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={4} />
        <text x={200} y={284} textAnchor="middle" fill={INK} fontSize={11} fontWeight={700} fontFamily={FONT}>
          SOCKET: <tspan fill={GREEN} fontWeight={800}>{current.msg}</tspan>
        </text>
      </svg>
      <p className="ih-checkpoint-art-caption">TCP 3-way handshake, network protocols & packet routing</p>
    </div>
  );
}
