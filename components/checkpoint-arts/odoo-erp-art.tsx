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

const STAGES = [
  { active: 0, name: "CRM / LEAD", doc: "Opportunity #101", msg: "1. Lead qualified & converted to Quotation" },
  { active: 1, name: "SALES ORDER", doc: "SO001 (Confirmed)", msg: "2. Sales Order confirmed -> Triggers Delivery Order" },
  { active: 2, name: "INVENTORY", doc: "WH/OUT/001 (Done)", msg: "3. Stock reserved, picked, packed & shipped to customer" },
  { active: 3, name: "INVOICING", doc: "INV/2026/001", msg: "4. Customer Invoice created & matched with Delivery" },
  { active: 4, name: "ACCOUNTING", doc: "Journal Entry #42", msg: "5. Double-entry ledger posted -> Accounts reconciled" },
];

export function OdooErpArt() {
  const frameIdx = useAnimationFrame(STAGES.length, 1600);
  const current = STAGES[frameIdx];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 400 320"
        role="img"
        aria-label="Interactive Odoo ERP Order to Cash business pipeline animation"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={400} height={320} fill={PAPER} />

        {/* Title Banner */}
        <rect x={24} y={16} width={352} height={34} fill={INK} rx={4} />
        <text x={200} y={38} textAnchor="middle" fill="#FFFFFF" fontSize={12} fontWeight={700} fontFamily={FONT} letterSpacing={2}>
          ENTERPRISE ERP FLOW (ORDER-TO-CASH)
        </text>

        {/* Pipeline Canvas */}
        <g transform="translate(24, 60)">
          <rect x={0} y={0} width={352} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={4} />

          {/* Stepper Pipeline */}
          <g transform="translate(16, 20)">
            {STAGES.map((stg, idx) => {
              const isCurrent = current.active === idx;
              const isDone = current.active > idx;
              const x = idx * 64;

              return (
                <g key={idx}>
                  {/* Connecting Line */}
                  {idx < 4 && (
                    <line
                      x1={x + 24}
                      y1={24}
                      x2={x + 64}
                      y2={24}
                      stroke={isDone ? GREEN : INK}
                      strokeWidth={3}
                    />
                  )}

                  {/* Stage Circle */}
                  <circle
                    cx={x + 24}
                    cy={24}
                    r={16}
                    fill={isCurrent ? YELLOW : isDone ? GREEN : BLUE}
                    stroke={INK}
                    strokeWidth={2}
                  />
                  <text
                    x={x + 24}
                    y={29}
                    textAnchor="middle"
                    fill={isDone ? "#FFFFFF" : INK}
                    fontSize={11}
                    fontWeight={800}
                    fontFamily={FONT}
                  >
                    {idx + 1}
                  </text>
                  <text
                    x={x + 24}
                    y={54}
                    textAnchor="middle"
                    fill={INK}
                    fontSize={8}
                    fontWeight={700}
                    fontFamily={FONT}
                  >
                    {stg.name.split(" ")[0]}
                  </text>
                </g>
              );
            })}
          </g>

          {/* Active Transaction Document Card */}
          <g transform="translate(46, 95)">
            <rect x={0} y={0} width={260} height={70} fill={MINT} stroke={INK} strokeWidth={2} rx={6} />
            <rect x={0} y={0} width={260} height={22} fill={INK} rx={6} />
            <text x={130} y={15} textAnchor="middle" fill="#FFFFFF" fontSize={10} fontWeight={800} fontFamily={FONT}>
              ACTIVE TRANSACTION RECORD
            </text>
            <text x={130} y={42} textAnchor="middle" fill={GREEN} fontSize={13} fontWeight={800} fontFamily={FONT}>
              {current.doc}
            </text>
            <text x={130} y={58} textAnchor="middle" fill="#70757A" fontSize={9} fontWeight={600} fontFamily={FONT}>
              Department: {current.name} (Single Source of Truth)
            </text>
          </g>
        </g>

        {/* Action Status Bar */}
        <rect x={24} y={264} width={352} height={32} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={4} />
        <text x={200} y={284} textAnchor="middle" fill={INK} fontSize={11} fontWeight={700} fontFamily={FONT}>
          PIPELINE: <tspan fill={GREEN} fontWeight={800}>{current.msg}</tspan>
        </text>
      </svg>
      <p className="ih-checkpoint-art-caption">Cross-department workflows, transactions & ERP ledger mechanics</p>
    </div>
  );
}
