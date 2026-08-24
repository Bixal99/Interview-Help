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
  { val: 65, char: "A", bits: [0, 1, 0, 0, 0, 0, 0, 1], hex: "0x41" },
  { val: 66, char: "B", bits: [0, 1, 0, 0, 0, 0, 1, 0], hex: "0x42" },
  { val: 67, char: "C", bits: [0, 1, 0, 0, 0, 0, 1, 1], hex: "0x43" },
  { val: 42, char: "*", bits: [0, 0, 1, 0, 1, 0, 1, 0], hex: "0x2A" },
  { val: 255, char: "MAX", bits: [1, 1, 1, 1, 1, 1, 1, 1], hex: "0xFF" },
  { val: 128, char: "MSB", bits: [1, 0, 0, 0, 0, 0, 0, 0], hex: "0x80" },
];

export function BinaryArt() {
  const frameIdx = useAnimationFrame(FRAMES.length, 1200);
  const current = FRAMES[frameIdx];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 400 320"
        role="img"
        aria-label="Interactive animated binary representation of bits, bytes, hex, and characters"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={400} height={320} fill={PAPER} />

        {/* Header bar */}
        <rect x={24} y={20} width={352} height={38} fill={INK} rx={4} />
        <text x={200} y={44} textAnchor="middle" fill="#FFFFFF" fontSize={13} fontWeight={700} fontFamily={FONT} letterSpacing={2}>
          8-BIT REGISTER & ENCODING
        </text>

        {/* Bit Cells Grid */}
        <g transform="translate(28, 76)">
          {current.bits.map((bit, idx) => {
            const isHigh = bit === 1;
            const weight = 2 ** (7 - idx);
            const x = idx * 43;
            return (
              <g key={idx}>
                <rect
                  x={x}
                  y={0}
                  width={38}
                  height={54}
                  fill={isHigh ? GREEN : "#FFFFFF"}
                  stroke={INK}
                  strokeWidth={2}
                  rx={3}
                />
                <text
                  x={x + 19}
                  y={34}
                  textAnchor="middle"
                  fill={isHigh ? "#FFFFFF" : INK}
                  fontSize={20}
                  fontWeight={800}
                  fontFamily={FONT}
                >
                  {bit}
                </text>
                <text
                  x={x + 19}
                  y={71}
                  textAnchor="middle"
                  fill="#282A35"
                  fontSize={10}
                  fontWeight={700}
                  fontFamily={FONT}
                >
                  2<tspan dy={-4} fontSize={7} fontWeight={800} fill="#04AA6D">{7 - idx}</tspan>
                </text>
                <text
                  x={x + 19}
                  y={84}
                  textAnchor="middle"
                  fill={isHigh ? GREEN : "#70757A"}
                  fontSize={10}
                  fontWeight={700}
                  fontFamily={FONT}
                >
                  ({weight})
                </text>
              </g>
            );
          })}
        </g>

        {/* Decoded Representations */}
        <g transform="translate(28, 180)">
          {/* Decimal */}
          <rect x={0} y={0} width={106} height={70} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={4} />
          <rect x={0} y={0} width={106} height={20} fill={BLUE} rx={4} />
          <text x={53} y={15} textAnchor="middle" fill={INK} fontSize={10} fontWeight={700} fontFamily={FONT}>
            DECIMAL
          </text>
          <text x={53} y={50} textAnchor="middle" fill={INK} fontSize={22} fontWeight={800} fontFamily={FONT}>
            {current.val}
          </text>

          {/* Hexadecimal */}
          <rect x={120} y={0} width={106} height={70} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={4} />
          <rect x={120} y={0} width={106} height={20} fill={YELLOW} rx={4} />
          <text x={173} y={15} textAnchor="middle" fill={INK} fontSize={10} fontWeight={700} fontFamily={FONT}>
            HEXADECIMAL
          </text>
          <text x={173} y={50} textAnchor="middle" fill={INK} fontSize={20} fontWeight={800} fontFamily={FONT}>
            {current.hex}
          </text>

          {/* Character / ASCII */}
          <rect x={240} y={0} width={104} height={70} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={4} />
          <rect x={240} y={0} width={104} height={20} fill={PINK} rx={4} />
          <text x={292} y={15} textAnchor="middle" fill={INK} fontSize={10} fontWeight={700} fontFamily={FONT}>
            ASCII / SYMBOL
          </text>
          <text x={292} y={50} textAnchor="middle" fill={GREEN} fontSize={22} fontWeight={800} fontFamily={FONT}>
            '{current.char}'
          </text>
        </g>

        {/* Pulse Bar */}
        <rect x={28} y={266} width={344} height={18} fill={MINT} rx={3} />
        <text x={200} y={279} textAnchor="middle" fill={INK} fontSize={10} fontWeight={700} fontFamily={FONT}>
          ACTIVE REGISTER BUS: {current.bits.join(" ")}
        </text>
      </svg>
      <p className="ih-checkpoint-art-caption">Binary bits, memory registers & data representation</p>
    </div>
  );
}
