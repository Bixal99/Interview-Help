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
  { step: "1. Python ORM Query", code: "self.env['estate.property'].search([])", cache: "Cache Check", sql: "Analyzing Query..." },
  { step: "2. Cache Lookup", code: "records.read(['name', 'price'])", cache: "CACHE MISS -> Fetch SQL", sql: "SELECT id, name, price FROM estate_property" },
  { step: "3. PostgreSQL Engine", code: "cr.execute(sql, params)", cache: "Populating Recordset Cache", sql: "PostgreSQL Query Plan: Index Scan (0.12ms)" },
  { step: "4. ORM Cache Hit", code: "records.mapped('price')", cache: "CACHE HIT (0 SQL Queries)", sql: "Returning Python Float Array in Memory" },
];

export function OdooOrmArt() {
  const frameIdx = useAnimationFrame(FRAMES.length, 1600);
  const current = FRAMES[frameIdx];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 400 320"
        role="img"
        aria-label="Interactive Odoo ORM Cache and PostgreSQL query generation animation"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={400} height={320} fill={PAPER} />

        {/* Title Banner */}
        <rect x={24} y={16} width={352} height={34} fill={INK} rx={4} />
        <text x={200} y={38} textAnchor="middle" fill="#FFFFFF" fontSize={12} fontWeight={700} fontFamily={FONT} letterSpacing={2}>
          ODOO ORM & RECORDSET CACHE
        </text>

        {/* ORM 3-Tier Layer Canvas */}
        <g transform="translate(24, 60)">
          <rect x={0} y={0} width={352} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={4} />

          {/* Python Environment Box */}
          <g transform="translate(16, 16)">
            <rect x={0} y={0} width={150} height={158} fill={MINT} stroke={INK} strokeWidth={1.5} rx={4} />
            <rect x={0} y={0} width={150} height={22} fill={INK} rx={4} />
            <text x={75} y={15} textAnchor="middle" fill="#FFFFFF" fontSize={9} fontWeight={800} fontFamily={FONT}>
              PYTHON RECORDSET (ENV)
            </text>

            <rect x={10} y={32} width={130} height={32} fill="#FFFFFF" stroke={INK} strokeWidth={1} rx={3} />
            <text x={75} y={52} textAnchor="middle" fill={GREEN} fontSize={9} fontWeight={800} fontFamily={FONT}>
              env['model'].search()
            </text>

            <rect x={10} y={72} width={130} height={74} fill={YELLOW} stroke={INK} strokeWidth={1} rx={3} />
            <text x={75} y={90} textAnchor="middle" fill={INK} fontSize={9} fontWeight={800} fontFamily={FONT}>
              ORM CACHE STATUS:
            </text>
            <text x={75} y={112} textAnchor="middle" fill={INK} fontSize={8} fontWeight={700} fontFamily={FONT}>
              {current.cache}
            </text>
          </g>

          {/* PostgreSQL Storage Box */}
          <g transform="translate(186, 16)">
            <rect x={0} y={0} width={150} height={158} fill={BLUE} stroke={INK} strokeWidth={1.5} rx={4} />
            <rect x={0} y={0} width={150} height={22} fill={GREEN} rx={4} />
            <text x={75} y={15} textAnchor="middle" fill="#FFFFFF" fontSize={9} fontWeight={800} fontFamily={FONT}>
              POSTGRESQL ENGINE
            </text>

            <rect x={10} y={32} width={130} height={40} fill="#FFFFFF" stroke={INK} strokeWidth={1} rx={3} />
            <text x={75} y={52} textAnchor="middle" fill={INK} fontSize={8} fontWeight={700} fontFamily={FONT}>
              SQL TRANSLATION:
            </text>
            <text x={75} y={64} textAnchor="middle" fill={GREEN} fontSize={8} fontWeight={800} fontFamily={FONT}>
              SELECT / UPDATE
            </text>

            <rect x={10} y={80} width={130} height={66} fill="#FFFFFF" stroke={INK} strokeWidth={1} rx={3} />
            <text x={75} y={100} textAnchor="middle" fill={INK} fontSize={8} fontWeight={800} fontFamily={FONT}>
              DATABASE DISK:
            </text>
            <text x={75} y={122} textAnchor="middle" fill="#70757A" fontSize={8} fontWeight={600} fontFamily={FONT}>
              {current.sql.slice(0, 24)}...
            </text>
          </g>
        </g>

        {/* Action Status Bar */}
        <rect x={24} y={264} width={352} height={32} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={4} />
        <text x={200} y={284} textAnchor="middle" fill={INK} fontSize={11} fontWeight={700} fontFamily={FONT}>
          ORM ACTION: <tspan fill={GREEN} fontWeight={800}>{current.step} — {current.code}</tspan>
        </text>
      </svg>
      <p className="ih-checkpoint-art-caption">Odoo ORM, recordset cache invalidation & SQL execution</p>
    </div>
  );
}
