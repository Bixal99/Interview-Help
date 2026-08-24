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
  { cardStage: 0, title: "Property #101: Villa", price: "$450,000", msg: "Stage 1: NEW LISTING -> Inspection Scheduled" },
  { cardStage: 1, title: "Property #101: Villa", price: "$450,000", msg: "Stage 2: OFFER RECEIVED -> $440,000 Offer Pending Approval" },
  { cardStage: 2, title: "Property #101: Villa", price: "$450,000", msg: "Stage 3: CONTRACT SIGNED -> Commission Auto-Calculated" },
  { cardStage: 3, title: "Property #101: Villa", price: "$450,000", msg: "Stage 4: SOLD / CLOSED -> Invoiced & Journal Reconciled" },
];

export function OdooViewsArt() {
  const frameIdx = useAnimationFrame(FRAMES.length, 1600);
  const current = FRAMES[frameIdx];

  const columns = ["NEW", "OFFER", "CONTRACT", "SOLD"];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 400 320"
        role="img"
        aria-label="Interactive Odoo Kanban View and Stage transition animation"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={400} height={320} fill={PAPER} />

        {/* Title Banner */}
        <rect x={24} y={16} width={352} height={34} fill={INK} rx={4} />
        <text x={200} y={38} textAnchor="middle" fill="#FFFFFF" fontSize={12} fontWeight={700} fontFamily={FONT} letterSpacing={2}>
          INTERACTIVE KANBAN & FORM VIEWS
        </text>

        {/* Kanban Board Canvas */}
        <g transform="translate(24, 60)">
          <rect x={0} y={0} width={352} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={4} />

          {/* Kanban Columns */}
          <g transform="translate(12, 16)">
            {columns.map((col, cIdx) => {
              const x = cIdx * 82;
              const hasCard = current.cardStage === cIdx;

              return (
                <g key={cIdx}>
                  {/* Column Background */}
                  <rect x={x} y={0} width={76} height={158} fill={PAPER} rx={4} />
                  <rect x={x} y={0} width={76} height={22} fill={hasCard ? GREEN : BLUE} rx={4} />
                  <text x={x + 38} y={15} textAnchor="middle" fill={hasCard ? "#FFFFFF" : INK} fontSize={9} fontWeight={800} fontFamily={FONT}>
                    {col}
                  </text>

                  {/* Active Animated Card */}
                  {hasCard && (
                    <g transform={`translate(${x + 4}, 30)`}>
                      <rect x={0} y={0} width={68} height={90} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={4} />
                      <rect x={0} y={0} width={68} height={16} fill={YELLOW} rx={4} />
                      <text x={34} y={12} textAnchor="middle" fill={INK} fontSize={8} fontWeight={700} fontFamily={FONT}>
                        CARD #101
                      </text>
                      <text x={34} y={34} textAnchor="middle" fill={INK} fontSize={8} fontWeight={800} fontFamily={FONT}>
                        Luxury Villa
                      </text>
                      <rect x={6} y={42} width={56} height={16} fill={PINK} rx={2} />
                      <text x={34} y={54} textAnchor="middle" fill={INK} fontSize={8} fontWeight={800} fontFamily={FONT}>
                        {current.price}
                      </text>
                      <circle cx={20} cy={74} r={6} fill={GREEN} />
                      <circle cx={36} cy={74} r={6} fill={BLUE} />
                      <circle cx={52} cy={74} r={6} fill={YELLOW} />
                    </g>
                  )}
                </g>
              );
            })}
          </g>
        </g>

        {/* Action Status Bar */}
        <rect x={24} y={264} width={352} height={32} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={4} />
        <text x={200} y={284} textAnchor="middle" fill={INK} fontSize={11} fontWeight={700} fontFamily={FONT}>
          VIEW TRANSITION: <tspan fill={GREEN} fontWeight={800}>{current.msg}</tspan>
        </text>
      </svg>
      <p className="ih-checkpoint-art-caption">Odoo Kanban board drag-and-drop, XML form layouts & statusbar stages</p>
    </div>
  );
}
