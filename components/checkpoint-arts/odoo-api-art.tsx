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
  { step: "1. INCOMING REQUEST", req: "GET /api/v1/properties", auth: "Bearer odoo_api_key_8f3a", res: "Authenticating..." },
  { step: "2. CONTROLLER ROUTE", req: "@http.route('/api/v1/...', auth='bearer')", auth: "API Key Verified [Active]", res: "Executing ORM Query..." },
  { step: "3. JSON SERIALIZATION", req: "data = properties.read(['name', 'price'])", auth: "Scoped Access (Read Only)", res: "Serializing JSON DTO..." },
  { step: "4. JSON 200 RESPONSE", req: '{"status": 200, "count": 12, "data": [...]}', auth: "HTTP 200 OK (1.4ms)", res: "Payload Streamed to Client" },
];

export function OdooApiArt() {
  const frameIdx = useAnimationFrame(FRAMES.length, 1600);
  const current = FRAMES[frameIdx];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 400 320"
        role="img"
        aria-label="Interactive Odoo REST and JSON-RPC API Gateway animation"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={400} height={320} fill={PAPER} />

        {/* Title Banner */}
        <rect x={24} y={16} width={352} height={34} fill={INK} rx={4} />
        <text x={200} y={38} textAnchor="middle" fill="#FFFFFF" fontSize={12} fontWeight={700} fontFamily={FONT} letterSpacing={2}>
          REST & JSON-RPC API GATEWAY
        </text>

        {/* API Gateway Canvas */}
        <g transform="translate(24, 60)">
          <rect x={0} y={0} width={352} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={4} />

          {/* Client Request Box */}
          <g transform="translate(16, 20)">
            <rect x={0} y={0} width={144} height={150} fill={BLUE} stroke={INK} strokeWidth={1.5} rx={4} />
            <text x={72} y={24} textAnchor="middle" fill={INK} fontSize={10} fontWeight={800} fontFamily={FONT}>
              EXTERNAL CLIENT
            </text>

            <rect x={8} y={36} width={128} height={44} fill="#FFFFFF" stroke={INK} strokeWidth={1} rx={3} />
            <text x={72} y={52} textAnchor="middle" fill={INK} fontSize={8} fontWeight={700} fontFamily={FONT}>
              HTTP ENDPOINT:
            </text>
            <text x={72} y={68} textAnchor="middle" fill={GREEN} fontSize={8} fontWeight={800} fontFamily={FONT}>
              /api/v1/properties
            </text>

            <rect x={8} y={88} width={128} height={48} fill={YELLOW} stroke={INK} strokeWidth={1} rx={3} />
            <text x={72} y={106} textAnchor="middle" fill={INK} fontSize={8} fontWeight={800} fontFamily={FONT}>
              BEARER TOKEN:
            </text>
            <text x={72} y={122} textAnchor="middle" fill={INK} fontSize={7} fontWeight={600} fontFamily={FONT}>
              {current.auth.slice(0, 20)}
            </text>
          </g>

          {/* Odoo Controller Gateway */}
          <g transform="translate(176, 20)">
            <rect x={0} y={0} width={160} height={150} fill={MINT} stroke={INK} strokeWidth={1.5} rx={4} />
            <text x={80} y={24} textAnchor="middle" fill={INK} fontSize={10} fontWeight={800} fontFamily={FONT}>
              ODOO WEB CONTROLLER
            </text>

            <rect x={10} y={36} width={140} height={48} fill="#FFFFFF" stroke={INK} strokeWidth={1} rx={3} />
            <text x={80} y={54} textAnchor="middle" fill={INK} fontSize={8} fontWeight={700} fontFamily={FONT}>
              DISPATCH ROUTE:
            </text>
            <text x={80} y={70} textAnchor="middle" fill={GREEN} fontSize={8} fontWeight={800} fontFamily={FONT}>
              @http.route(type='json')
            </text>

            <rect x={10} y={92} width={140} height={46} fill={INK} rx={3} />
            <text x={80} y={112} textAnchor="middle" fill="#FFFFFF" fontSize={9} fontWeight={800} fontFamily={FONT}>
              RESPONSE DTO:
            </text>
            <text x={80} y={126} textAnchor="middle" fill={GREEN} fontSize={8} fontWeight={700} fontFamily={FONT}>
              {current.res}
            </text>
          </g>
        </g>

        {/* Action Status Bar */}
        <rect x={24} y={264} width={352} height={32} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={4} />
        <text x={200} y={284} textAnchor="middle" fill={INK} fontSize={11} fontWeight={700} fontFamily={FONT}>
          GATEWAY: <tspan fill={GREEN} fontWeight={800}>{current.step} — {current.req.slice(0, 36)}</tspan>
        </text>
      </svg>
      <p className="ih-checkpoint-art-caption">External REST APIs, JSON-RPC 2.0 endpoints & API key security</p>
    </div>
  );
}
