"use client";

import { useAnimationFrame } from "./use-animation-frame";

const INK = "#282A35";
const PAPER = "#E7E9EB";
const GREEN = "#04AA6D";
const BLUE = "#96D4FA";
const YELLOW = "#FFF4A3";
const PINK = "#FFC0C7";
const FONT = "Poppins, sans-serif";

const STEPS = [
  { step: "1. PLAINTEXT", state: "ORIGINAL", data: '"SecretPayload"', msg: "Plaintext ready -> Preparing for Public Key Encryption" },
  { step: "2. ENCRYPTION", state: "LOCKING", data: "RSA_Encrypt(K_pub)", msg: "Applying RSA 4096-bit Public Key Transformation" },
  { step: "3. CIPHERTEXT", state: "ENCRYPTED", data: "9f8a...3b21", msg: "Ciphertext in transit -> Tamper-proof & Secure" },
  { step: "4. DECRYPTION", state: "UNLOCKED", data: '"SecretPayload"', msg: "Private Key (K_priv) decrypted payload successfully" },
];

export function SecurityArt() {
  const frameIdx = useAnimationFrame(STEPS.length, 1600);
  const current = STEPS[frameIdx];

  const isLocked = current.state === "ENCRYPTED" || current.state === "LOCKING";

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 400 320"
        role="img"
        aria-label="Interactive cybersecurity encryption and public key cryptography animation"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={400} height={320} fill={PAPER} />

        {/* Title Banner */}
        <rect x={24} y={16} width={352} height={34} fill={INK} rx={4} />
        <text x={200} y={38} textAnchor="middle" fill="#FFFFFF" fontSize={12} fontWeight={700} fontFamily={FONT} letterSpacing={2}>
          CYBERSECURITY & CRYPTOGRAPHY
        </text>

        {/* Cryptography Workflow Canvas */}
        <g transform="translate(24, 60)">
          <rect x={0} y={0} width={352} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={4} />

          {/* Key / Vault Shield */}
          <g transform="translate(136, 20)">
            <rect x={0} y={40} width={80} height={70} fill={isLocked ? GREEN : YELLOW} stroke={INK} strokeWidth={2} rx={6} />
            <path
              d="M16 40 V20 a24 24 0 0 1 48 0 V40"
              fill="none"
              stroke={isLocked ? GREEN : INK}
              strokeWidth={8}
            />
            <circle cx={40} cy={70} r={8} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} />
            <rect x={37} y={75} width={6} height={18} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={1} />
          </g>

          {/* Payload Inspection Box */}
          <g transform="translate(36, 120)">
            <rect x={0} y={0} width={280} height={48} fill={isLocked ? PINK : BLUE} stroke={INK} strokeWidth={2} rx={4} />
            <text x={140} y={20} textAnchor="middle" fill={INK} fontSize={10} fontWeight={800} fontFamily={FONT}>
              {current.step}: {current.state}
            </text>
            <text x={140} y={38} textAnchor="middle" fill={isLocked ? "#DC2626" : GREEN} fontSize={12} fontWeight={800} fontFamily={FONT}>
              {current.data}
            </text>
          </g>
        </g>

        {/* Action Status Bar */}
        <rect x={24} y={264} width={352} height={32} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={4} />
        <text x={200} y={284} textAnchor="middle" fill={INK} fontSize={11} fontWeight={700} fontFamily={FONT}>
          CRYPTO STATUS: <tspan fill={GREEN} fontWeight={800}>{current.msg}</tspan>
        </text>
      </svg>
      <p className="ih-checkpoint-art-caption">Public-key cryptography, authentication & data security</p>
    </div>
  );
}
