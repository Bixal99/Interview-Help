"use client";

import { useAnimationFrame } from "./use-animation-frame";

const INK = "#282A35";
const PAPER = "#E7E9EB";
const GREEN = "#04AA6D";
const BLUE = "#96D4FA";
const YELLOW = "#FFF4A3";
const MINT = "#D9EEE1";
const FONT = "Poppins, sans-serif";

const QUERIES = [
  { q: "SELECT * FROM users WHERE id = 42;", plan: "INDEX SCAN using users_pkey", cost: "0.15ms", rows: "1 Row" },
  { q: "BEGIN; UPDATE balance SET amt = amt - 50;", plan: "WAL Write & Row Lock", cost: "0.08ms", rows: "Transaction Active" },
  { q: "COMMIT;", plan: "ACID Durability Verified (WAL Synced)", cost: "0.22ms", rows: "Committed to Disk" },
  { q: "SELECT o.*, u.name FROM orders o JOIN users u;", plan: "Hash Join (o.user_id = u.id)", cost: "1.12ms", rows: "100 Rows" },
];

export function DatabaseArt() {
  const frameIdx = useAnimationFrame(QUERIES.length, 1600);
  const current = QUERIES[frameIdx];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 400 320"
        role="img"
        aria-label="Interactive PostgreSQL database index and SQL query engine animation"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={400} height={320} fill={PAPER} />

        {/* Title Banner */}
        <rect x={24} y={16} width={352} height={34} fill={INK} rx={4} />
        <text x={200} y={38} textAnchor="middle" fill="#FFFFFF" fontSize={12} fontWeight={700} fontFamily={FONT} letterSpacing={2}>
          RELATIONAL DATABASES & SQL ENGINE
        </text>

        {/* Database Table & Index Architecture */}
        <g transform="translate(24, 60)">
          <rect x={0} y={0} width={352} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={4} />

          {/* B-Tree Index Block */}
          <g transform="translate(16, 16)">
            <rect x={0} y={0} width={140} height={158} fill={MINT} stroke={INK} strokeWidth={1.5} rx={4} />
            <rect x={0} y={0} width={140} height={22} fill={BLUE} rx={4} />
            <text x={70} y={15} textAnchor="middle" fill={INK} fontSize={10} fontWeight={800} fontFamily={FONT}>B-TREE INDEX</text>
            
            <rect x={12} y={32} width={116} height={24} fill="#FFFFFF" stroke={INK} strokeWidth={1} rx={2} />
            <text x={70} y={48} textAnchor="middle" fill={INK} fontSize={10} fontWeight={700} fontFamily={FONT}>Root Node [50]</text>
            
            <rect x={12} y={64} width={116} height={24} fill={YELLOW} stroke={INK} strokeWidth={1} rx={2} />
            <text x={70} y={80} textAnchor="middle" fill={INK} fontSize={10} fontWeight={700} fontFamily={FONT}>Leaf Ptr → Page 4</text>

            <rect x={12} y={96} width={116} height={48} fill="#FFFFFF" stroke={INK} strokeWidth={1} rx={2} />
            <text x={70} y={116} textAnchor="middle" fill={GREEN} fontSize={10} fontWeight={800} fontFamily={FONT}>Index Scan Hit</text>
            <text x={70} y={134} textAnchor="middle" fill="#70757A" fontSize={9} fontWeight={600} fontFamily={FONT}>Time: {current.cost}</text>
          </g>

          {/* Table Storage Pages Block */}
          <g transform="translate(176, 16)">
            <rect x={0} y={0} width={160} height={158} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={4} />
            <rect x={0} y={0} width={160} height={22} fill={GREEN} rx={4} />
            <text x={80} y={15} textAnchor="middle" fill="#FFFFFF" fontSize={10} fontWeight={800} fontFamily={FONT}>TABLE HEAP PAGES</text>
            
            {/* Table Rows */}
            <rect x={10} y={32} width={140} height={22} fill={MINT} rx={2} />
            <text x={80} y={47} textAnchor="middle" fill={INK} fontSize={9} fontWeight={700} fontFamily={FONT}>[Row 41] User: Bob</text>

            <rect x={10} y={58} width={140} height={22} fill={YELLOW} stroke={INK} strokeWidth={1.5} rx={2} />
            <text x={80} y={73} textAnchor="middle" fill={INK} fontSize={9} fontWeight={800} fontFamily={FONT}>[Row 42] User: Alice ★</text>

            <rect x={10} y={84} width={140} height={22} fill={MINT} rx={2} />
            <text x={80} y={99} textAnchor="middle" fill={INK} fontSize={9} fontWeight={700} fontFamily={FONT}>[Row 43] User: Charlie</text>

            <rect x={10} y={110} width={140} height={34} fill={INK} rx={3} />
            <text x={80} y={126} textAnchor="middle" fill="#FFFFFF" fontSize={9} fontWeight={700} fontFamily={FONT}>ACID WAL BUFFER</text>
            <text x={80} y={138} textAnchor="middle" fill={GREEN} fontSize={8} fontWeight={700} fontFamily={FONT}>SYNCED & ISOLATED</text>
          </g>
        </g>

        {/* Action Status Bar */}
        <rect x={24} y={264} width={352} height={32} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={4} />
        <text x={200} y={284} textAnchor="middle" fill={INK} fontSize={11} fontWeight={700} fontFamily={FONT}>
          SQL PLAN: <tspan fill={GREEN} fontWeight={800}>{current.plan}</tspan>
        </text>
      </svg>
      <p className="ih-checkpoint-art-caption">Relational database query optimization, B-Tree indexes & ACID transactions</p>
    </div>
  );
}
