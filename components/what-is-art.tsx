import type { ReactNode } from "react";

const INK = "#282A35";
const PAPER = "#E7E9EB";
const GREEN = "#04AA6D";
const BLUE = "#96D4FA";
const YELLOW = "#FFF4A3";
const PINK = "#FFC0C7";
const MINT = "#D9EEE1";
const FONT = "Poppins, sans-serif";

function FlowArrow({ x1, x2, y }: { x1: number; x2: number; y: number }) {
  return (
    <g>
      <line x1={x1} y1={y} x2={x2 - 9} y2={y} stroke={GREEN} strokeWidth={3.5} />
      <polygon points={`${x2},${y} ${x2 - 10},${y - 5.5} ${x2 - 10},${y + 5.5}`} fill={GREEN} />
    </g>
  );
}

function StageCard({
  x,
  header,
  headerFill,
  children,
}: {
  x: number;
  header: string;
  headerFill: string;
  children: ReactNode;
}) {
  return (
    <g>
      <rect x={x} y={130} width={88} height={170} fill="#FFFFFF" />
      <rect x={x} y={130} width={88} height={26} fill={headerFill} />
      <text
        x={x + 44}
        y={148}
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize={11}
        fontWeight={700}
        fontFamily={FONT}
        letterSpacing={1.5}
      >
        {header}
      </text>
      {children}
    </g>
  );
}

export function WhatIsArt() {
  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 400 400"
        role="img"
        aria-label="Diagram of a problem flowing through a computer engine of data, logic and instructions, and coming out as an organized solution"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={400} height={400} fill={PAPER} />

        <FlowArrow x1={120} x2={150} y={180} />
        <FlowArrow x1={120} x2={150} y={250} />
        <FlowArrow x1={254} x2={284} y={180} />
        <FlowArrow x1={254} x2={284} y={250} />

        <StageCard x={28} header="PROBLEM" headerFill={INK}>
          <rect x={40} y={168} width={48} height={13} fill={PINK} />
          <circle cx={102} cy={174} r={8} fill={BLUE} />
          <rect x={40} y={194} width={30} height={13} fill={YELLOW} />
          <text x={100} y={207} textAnchor="middle" fill={INK} fontSize={14} fontWeight={700} fontFamily={FONT}>7</text>
          <rect x={40} y={220} width={54} height={13} fill={MINT} />
          <polygon points="44,258 58,258 51,246" fill={PINK} />
          <text x={100} y={258} textAnchor="middle" fill={INK} fontSize={14} fontWeight={700} fontFamily={FONT}>a</text>
        </StageCard>

        <g>
          <rect x={150} y={100} width={100} height={230} fill={INK} />
          <text x={200} y={124} textAnchor="middle" fill={PAPER} fontSize={11} fontWeight={700} fontFamily={FONT} letterSpacing={2}>
            COMPUTER
          </text>
          <polygon points="200,140 224,164 200,188 176,164" fill={GREEN} />
          <path d="M200 188 V196 H172 V201 M200 196 H228 V201" fill="none" stroke={PAPER} strokeWidth={2} />
          <circle cx={172} cy={210} r={9} fill={BLUE} />
          <circle cx={228} cy={210} r={9} fill={YELLOW} />
          <path d="M172 219 V230 H228 V219" fill="none" stroke={PAPER} strokeWidth={2} />
          <polygon points="200,242 194,232 206,232" fill={PAPER} />
          <rect x={164} y={246} width={72} height={13} fill={GREEN} />
          <rect x={172} y={267} width={56} height={13} fill={BLUE} />
          <rect x={168} y={288} width={64} height={13} fill={YELLOW} />
          <text x={200} y={318} textAnchor="middle" fill={PAPER} fontSize={10} fontWeight={700} fontFamily={FONT} letterSpacing={3}>
            1 0 1 1 0
          </text>
        </g>

        <StageCard x={284} header="SOLUTION" headerFill={GREEN}>
          <rect x={296} y={168} width={14} height={13} fill={GREEN} />
          <rect x={316} y={168} width={44} height={13} fill={MINT} />
          <rect x={296} y={194} width={14} height={13} fill={GREEN} />
          <rect x={316} y={194} width={44} height={13} fill={MINT} />
          <rect x={296} y={220} width={14} height={13} fill={YELLOW} />
          <rect x={316} y={220} width={44} height={13} fill={MINT} />
          <rect x={296} y={250} width={64} height={28} fill={BLUE} />
          <text x={328} y={269} textAnchor="middle" fill={INK} fontSize={15} fontWeight={700} fontFamily={FONT}>42</text>
        </StageCard>

        <text x={200} y={356} textAnchor="middle" fill={INK} fontSize={13} fontWeight={700} fontFamily={FONT} letterSpacing={3}>
          COMPUTATION
        </text>
      </svg>
      <p className="ih-checkpoint-art-caption">From problem to solution</p>
    </div>
  );
}
