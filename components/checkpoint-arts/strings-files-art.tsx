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
    step: "1. OPEN FILE STREAM",
    cursor: "0x0000",
    action: "open('data.csv', 'r')",
    desc: "OS file descriptor allocated: File pointer initialized at Byte 0",
    buffer: ["'U'", "'S'", "'E'", "'R'", "','", "'I'", "'D'"],
    highlightIdx: 0,
  },
  {
    step: "2. READ BUFFER STREAM",
    cursor: "0x0004",
    action: "file.read(4) -> 'USER'",
    desc: "Sequential 4-byte chunk loaded from disk into memory buffer",
    buffer: ["'U'", "'S'", "'E'", "'R'", "','", "'I'", "'D'"],
    highlightIdx: 3,
  },
  {
    step: "3. ENCODING / DECODING",
    cursor: "0x0007",
    action: "bytes.decode('utf-8')",
    desc: "UTF-8 variable-length byte sequence converted into Unicode string",
    buffer: ["0x55", "0x53", "0x45", "0x52", "0x2C", "0x49", "0x44"],
    highlightIdx: 4,
  },
  {
    step: "4. CLOSE & FLUSH STREAM",
    cursor: "EOF",
    action: "file.close()",
    desc: "Buffer flushed to disk; OS releases file lock and descriptor handle",
    buffer: ["DONE", "FLUSH", "SYNC", "OK", "END", "EOF", "SAFE"],
    highlightIdx: 6,
  },
];

export function StringsFilesArt() {
  const frameIdx = useAnimationFrame(FRAMES.length, 1800);
  const cur = FRAMES[frameIdx];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 420 320"
        role="img"
        aria-label="Strings, File I/O Streams, Buffers and Encoding animation"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={420} height={320} fill={PAPER} />

        {/* Title Header */}
        <rect x={20} y={12} width={380} height={30} fill={INK} rx={4} />
        <text x={210} y={32} textAnchor="middle" fill="#FFFFFF" fontSize={11} fontWeight={800} fontFamily={FONT} letterSpacing={1.5}>
          STRINGS, FILE I/O & BYTE STREAMS
        </text>

        {/* Disk Storage (Left) */}
        <g transform="translate(20, 50)">
          <rect x={0} y={0} width={100} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={6} />
          <rect x={0} y={0} width={100} height={22} fill={INK} rx={6} />
          <text x={50} y={15} textAnchor="middle" fill="#FFFFFF" fontSize={9} fontWeight={800} fontFamily={FONT}>
            STORAGE DISK
          </text>
          
          {/* File Icon */}
          <rect x={16} y={34} width={68} height={90} fill={MINT} stroke={INK} strokeWidth={1.5} rx={4} />
          <text x={50} y={56} textAnchor="middle" fill={INK} fontSize={9} fontWeight={800} fontFamily={FONT}>
            data.csv
          </text>
          <line x1={26} y1={68} x2={74} y2={68} stroke={INK} strokeWidth={1.5} />
          <line x1={26} y1={80} x2={74} y2={80} stroke={INK} strokeWidth={1.5} />
          <line x1={26} y1={92} x2={60} y2={92} stroke={INK} strokeWidth={1.5} />

          {/* Pointer Badge */}
          <rect x={10} y={140} width={80} height={34} fill={YELLOW} stroke={INK} strokeWidth={1} rx={3} />
          <text x={50} y={154} textAnchor="middle" fill={INK} fontSize={8} fontWeight={700} fontFamily={FONT}>
            PTR OFFSET:
          </text>
          <text x={50} y={167} textAnchor="middle" fill={INK} fontSize={10} fontWeight={800} fontFamily="monospace">
            {cur.cursor}
          </text>
        </g>

        {/* Streaming Pipe Line */}
        <g transform="translate(120, 100)">
          <line x1={0} y1={40} x2={34} y2={40} stroke={GREEN} strokeWidth={4} strokeDasharray="4 2" />
          <polygon points="36,40 28,35 28,45" fill={GREEN} />
        </g>

        {/* Memory Stream Buffer (Right) */}
        <g transform="translate(156, 50)">
          <rect x={0} y={0} width={244} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={6} />
          <rect x={0} y={0} width={244} height={22} fill={GREEN} rx={6} />
          <text x={122} y={15} textAnchor="middle" fill="#FFFFFF" fontSize={9} fontWeight={800} fontFamily={FONT}>
            IN-MEMORY I/O STREAM BUFFER
          </text>

          {/* Buffer Cells */}
          <g transform="translate(12, 34)">
            {cur.buffer.map((item, idx) => {
              const x = idx * 31;
              const isHigh = idx <= cur.highlightIdx;
              return (
                <g key={idx} transform={`translate(${x}, 0)`}>
                  <rect
                    x={0}
                    y={0}
                    width={28}
                    height={46}
                    fill={isHigh ? YELLOW : BLUE}
                    stroke={isHigh ? GREEN : INK}
                    strokeWidth={isHigh ? 2 : 1}
                    rx={3}
                  />
                  <text x={14} y={16} textAnchor="middle" fill={INK} fontSize={7} fontWeight={700}>
                    [{idx}]
                  </text>
                  <text x={14} y={35} textAnchor="middle" fill={INK} fontSize={9} fontWeight={800} fontFamily="monospace">
                    {item}
                  </text>
                </g>
              );
            })}
          </g>

          {/* Operation Code Box */}
          <rect x={12} y={96} width={220} height={38} fill={PINK} stroke={INK} strokeWidth={1.5} rx={4} />
          <text x={122} y={112} textAnchor="middle" fill={INK} fontSize={8} fontWeight={700} fontFamily={FONT}>
            ACTIVE I/O OPERATION:
          </text>
          <text x={122} y={127} textAnchor="middle" fill={INK} fontSize={10} fontWeight={800} fontFamily="monospace">
            {cur.action}
          </text>

          {/* Unicode / String Badge */}
          <rect x={12} y={144} width={220} height={32} fill={MINT} stroke={INK} strokeWidth={1} rx={3} />
          <text x={122} y={164} textAnchor="middle" fill={INK} fontSize={9} fontWeight={700} fontFamily={FONT}>
            Mode: UTF-8 Text Stream (Buffered Line Reader)
          </text>
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
      <p className="ih-checkpoint-art-caption">File handles, buffer pointers, UTF-8 byte serialization & stream flushing</p>
    </div>
  );
}
