"use client";

import { useAnimationFrame } from "./use-animation-frame";

const INK = "#282A35";
const PAPER = "#E7E9EB";
const GREEN = "#04AA6D";
const BLUE = "#96D4FA";
const YELLOW = "#FFF4A3";
const MINT = "#D9EEE1";
const FONT = "Poppins, sans-serif";

const STAGES = [
  { step: "1. GITHUB ACTIONS CI", status: "RUNNING TESTS", desc: "Running TransactionCase & HttpCase test suites...", ok: true },
  { step: "2. TEST SUITE VERIFIED", status: "ALL TESTS PASSED", desc: "100% Test Coverage Verified — Zero Regressions", ok: true },
  { step: "3. DOCKER COMPOSE DEPLOY", status: "CONTAINERS HEALTHY", desc: "Nginx SSL -> PgBouncer Pool -> Odoo Workers (4/4)", ok: true },
  { step: "4. S3 BACKUP SYNC", status: "DISASTER RECOVERY OK", desc: "Nightly Automated Database & Filestore Backup Verified", ok: true },
];

export function OdooDevopsArt() {
  const frameIdx = useAnimationFrame(STAGES.length, 1600);
  const current = STAGES[frameIdx];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 400 320"
        role="img"
        aria-label="Interactive Odoo Docker CI/CD and Production Deployment animation"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={400} height={320} fill={PAPER} />

        {/* Title Banner */}
        <rect x={24} y={16} width={352} height={34} fill={INK} rx={4} />
        <text x={200} y={38} textAnchor="middle" fill="#FFFFFF" fontSize={12} fontWeight={700} fontFamily={FONT} letterSpacing={2}>
          PRODUCTION DEVOPS, DOCKER & CI/CD
        </text>

        {/* DevOps Stack Canvas */}
        <g transform="translate(24, 60)">
          <rect x={0} y={0} width={352} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={4} />

          {/* Cloud Container Stack */}
          <g transform="translate(16, 16)">
            {/* Nginx SSL */}
            <rect x={0} y={0} width={144} height={34} fill={INK} rx={3} />
            <text x={72} y={22} textAnchor="middle" fill="#FFFFFF" fontSize={9} fontWeight={800} fontFamily={FONT}>
              NGINX SSL REVERSE PROXY
            </text>

            {/* PgBouncer */}
            <rect x={0} y={42} width={144} height={34} fill={BLUE} stroke={INK} strokeWidth={1} rx={3} />
            <text x={72} y={64} textAnchor="middle" fill={INK} fontSize={9} fontWeight={800} fontFamily={FONT}>
              PGBOUNCER POOL (MODE=TX)
            </text>

            {/* Odoo Workers */}
            <rect x={0} y={84} width={144} height={34} fill={GREEN} rx={3} />
            <text x={72} y={106} textAnchor="middle" fill="#FFFFFF" fontSize={9} fontWeight={800} fontFamily={FONT}>
              ODOO 18 (4 MULTI-WORKERS)
            </text>

            {/* PostgreSQL DB */}
            <rect x={0} y={126} width={144} height={32} fill={YELLOW} stroke={INK} strokeWidth={1} rx={3} />
            <text x={72} y={146} textAnchor="middle" fill={INK} fontSize={9} fontWeight={800} fontFamily={FONT}>
              POSTGRESQL 16 CLUSTER
            </text>
          </g>

          {/* Pipeline Status Indicator */}
          <g transform="translate(176, 16)">
            <rect x={0} y={0} width={160} height={158} fill={MINT} stroke={INK} strokeWidth={1.5} rx={4} />
            <rect x={0} y={0} width={160} height={24} fill={INK} rx={4} />
            <text x={80} y={16} textAnchor="middle" fill="#FFFFFF" fontSize={9} fontWeight={800} fontFamily={FONT}>
              CI/CD PIPELINE STATUS
            </text>

            <rect x={12} y={38} width={136} height={44} fill="#FFFFFF" stroke={INK} strokeWidth={1} rx={3} />
            <text x={80} y={56} textAnchor="middle" fill={INK} fontSize={8} fontWeight={700} fontFamily={FONT}>
              STAGE CHECKPOINT:
            </text>
            <text x={80} y={72} textAnchor="middle" fill={GREEN} fontSize={9} fontWeight={800} fontFamily={FONT}>
              {current.status}
            </text>

            <rect x={12} y={92} width={136} height={52} fill={GREEN} rx={3} />
            <text x={80} y={114} textAnchor="middle" fill="#FFFFFF" fontSize={9} fontWeight={800} fontFamily={FONT}>
              DEPLOYMENT HEALTH
            </text>
            <text x={80} y={130} textAnchor="middle" fill="#FFFFFF" fontSize={8} fontWeight={700} fontFamily={FONT}>
              100% OPERATIONAL
            </text>
          </g>
        </g>

        {/* Action Status Bar */}
        <rect x={24} y={264} width={352} height={32} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={4} />
        <text x={200} y={284} textAnchor="middle" fill={INK} fontSize={11} fontWeight={700} fontFamily={FONT}>
          PIPELINE: <tspan fill={GREEN} fontWeight={800}>{current.step} — {current.desc}</tspan>
        </text>
      </svg>
      <p className="ih-checkpoint-art-caption">Production Docker Compose stack, PgBouncer, Nginx SSL & automated CI/CD</p>
    </div>
  );
}
