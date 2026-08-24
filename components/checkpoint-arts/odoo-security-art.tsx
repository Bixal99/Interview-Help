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
  { user: "Manager (Company A)", rule: "['|', ('company_id', '=', False), ('company_id', 'in', company_ids)]", access: "GRANTED", color: GREEN, msg: "Access Allowed: Property belongs to User's Active Company (Company A)" },
  { user: "Sales User (Company B)", rule: "Security Filter: Record is restricted to Company A", access: "DENIED", color: "#DC2626", msg: "Access Denied: Multi-Company Record Rule prevented cross-tenant data leak" },
  { user: "Super Administrator (Sudo)", rule: "env['estate.property'].sudo().search([])", access: "BYPASSED", color: YELLOW, msg: "Elevated Context: sudo() bypassed Record Rule security check" },
];

export function OdooSecurityArt() {
  const frameIdx = useAnimationFrame(FRAMES.length, 1800);
  const current = FRAMES[frameIdx];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 400 320"
        role="img"
        aria-label="Interactive Odoo Security Matrix and Multi-Company Record Rule animation"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={400} height={320} fill={PAPER} />

        {/* Title Banner */}
        <rect x={24} y={16} width={352} height={34} fill={INK} rx={4} />
        <text x={200} y={38} textAnchor="middle" fill="#FFFFFF" fontSize={12} fontWeight={700} fontFamily={FONT} letterSpacing={2}>
          SECURITY MATRIX & MULTI-COMPANY
        </text>

        {/* Security Matrix Canvas */}
        <g transform="translate(24, 60)">
          <rect x={0} y={0} width={352} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={4} />

          {/* User Request Context */}
          <g transform="translate(16, 20)">
            <rect x={0} y={0} width={130} height={150} fill={BLUE} stroke={INK} strokeWidth={1.5} rx={4} />
            <text x={65} y={24} textAnchor="middle" fill={INK} fontSize={10} fontWeight={800} fontFamily={FONT}>
              USER CONTEXT
            </text>
            <rect x={8} y={34} width={114} height={40} fill="#FFFFFF" rx={3} />
            <text x={65} y={54} textAnchor="middle" fill={INK} fontSize={9} fontWeight={700} fontFamily={FONT}>
              {current.user.split(" ")[0]}
            </text>
            <text x={65} y={68} textAnchor="middle" fill="#70757A" fontSize={8} fontWeight={600} fontFamily={FONT}>
              {current.user.includes("Company A") ? "Comp A Active" : current.user.includes("Company B") ? "Comp B Active" : "Admin Context"}
            </text>

            <rect x={8} y={82} width={114} height={56} fill={YELLOW} rx={3} />
            <text x={65} y={102} textAnchor="middle" fill={INK} fontSize={8} fontWeight={800} fontFamily={FONT}>
              ACL PERMISSION:
            </text>
            <text x={65} y={118} textAnchor="middle" fill={GREEN} fontSize={9} fontWeight={800} fontFamily={FONT}>
              READ, WRITE, CREATE
            </text>
          </g>

          {/* Shield / Multi-Company Filter */}
          <g transform="translate(160, 20)">
            <rect x={0} y={0} width={176} height={150} fill={PAPER} stroke={INK} strokeWidth={1.5} rx={4} />
            <rect x={0} y={0} width={176} height={24} fill={INK} rx={4} />
            <text x={88} y={16} textAnchor="middle" fill="#FFFFFF" fontSize={9} fontWeight={800} fontFamily={FONT}>
              RECORD RULE DOMAIN SHIELD
            </text>

            <rect x={10} y={34} width={156} height={50} fill="#FFFFFF" stroke={INK} strokeWidth={1} rx={3} />
            <text x={88} y={52} textAnchor="middle" fill={INK} fontSize={8} fontWeight={700} fontFamily={FONT}>
              DOMAIN EVALUATION:
            </text>
            <text x={88} y={68} textAnchor="middle" fill="#70757A" fontSize={7} fontWeight={600} fontFamily={FONT}>
              {current.rule.slice(0, 28)}...
            </text>

            {/* Verdict Badge */}
            <rect x={24} y={94} width={128} height={44} fill={current.color} rx={4} />
            <text x={88} y={121} textAnchor="middle" fill="#FFFFFF" fontSize={14} fontWeight={900} fontFamily={FONT}>
              {current.access}
            </text>
          </g>
        </g>

        {/* Action Status Bar */}
        <rect x={24} y={264} width={352} height={32} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={4} />
        <text x={200} y={284} textAnchor="middle" fill={INK} fontSize={11} fontWeight={700} fontFamily={FONT}>
          SECURITY VERDICT: <tspan fill={GREEN} fontWeight={800}>{current.msg}</tspan>
        </text>
      </svg>
      <p className="ih-checkpoint-art-caption">Odoo 4-tier security pyramid, access control lists (ACLs) & multi-company isolation</p>
    </div>
  );
}
