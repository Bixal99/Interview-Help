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

const MATH_TOPICS = [
  {
    topic: "DISCRETE MATH (SETS & LOGIC)",
    symbol: "A ∩ B (Venn Sets)",
    formula: "P ∧ Q → R",
    desc: "Set operations, truth tables, and Boolean propositional logic",
    kind: "sets",
  },
  {
    topic: "MATHEMATICAL PROOF & INDUCTION",
    symbol: "P(0) → P(k) → P(k+1)",
    formula: "∀n ∈ ℕ, P(n)",
    desc: "Mathematical induction domino chain establishing invariant correctness",
    kind: "induction",
  },
  {
    topic: "COUNTING & PROBABILITY",
    symbol: "C(n, k) = n! / (k!(n-k)!)",
    formula: "P(A|B) = P(A∩B)/P(B)",
    desc: "Combinatorics, permutations, sample spaces, and Bayes' Theorem",
    kind: "prob",
  },
  {
    topic: "STATISTICS FOR COMPUTING",
    symbol: "μ = Σx/N  |  σ = √(Σ(x-μ)²/N)",
    formula: "Normal Distribution Bell Curve",
    desc: "Empirical distributions, variance, confidence intervals, and hypothesis testing",
    kind: "stats",
  },
  {
    topic: "LINEAR ALGEBRA & CALCULUS",
    symbol: "A · x = λx (Eigenvectors)",
    formula: "df/dx = lim (f(x+h)-f(x))/h",
    desc: "2D/3D Vector matrix transforms and derivative gradient descent slopes",
    kind: "linear",
  },
];

export function MathDiscreteArt() {
  const frameIdx = useAnimationFrame(MATH_TOPICS.length, 2000);
  const cur = MATH_TOPICS[frameIdx];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 420 320"
        role="img"
        aria-label="Discrete Mathematics, Probability, Statistics and Linear Algebra animation"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={420} height={320} fill={PAPER} />

        {/* Title Header */}
        <rect x={20} y={12} width={380} height={30} fill={INK} rx={4} />
        <text x={210} y={32} textAnchor="middle" fill="#FFFFFF" fontSize={11} fontWeight={800} fontFamily={FONT} letterSpacing={1.5}>
          MATHEMATICS FOR COMPUTING & REASONING
        </text>

        {/* Dynamic Graphic Stage */}
        <g transform="translate(20, 50)">
          <rect x={0} y={0} width={380} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={6} />

          {/* Render Visual based on Kind */}
          {cur.kind === "sets" && (
            <g transform="translate(190, 85)">
              <circle cx={-30} cy={0} r={44} fill={BLUE} opacity={0.7} stroke={INK} strokeWidth={2} />
              <circle cx={30} cy={0} r={44} fill={YELLOW} opacity={0.7} stroke={INK} strokeWidth={2} />
              <text x={-45} y={5} fill={INK} fontSize={12} fontWeight={800}>Set A</text>
              <text x={45} y={5} fill={INK} fontSize={12} fontWeight={800}>Set B</text>
              <text x={0} y={5} textAnchor="middle" fill={GREEN} fontSize={10} fontWeight={800}>A ∩ B</text>
            </g>
          )}

          {cur.kind === "induction" && (
            <g transform="translate(45, 60)">
              {[0, 1, 2, 3, 4].map((step) => (
                <g key={step} transform={`translate(${step * 60}, 0)`}>
                  <rect x={0} y={0} width={45} height={60} fill={step === 0 ? GREEN : YELLOW} stroke={INK} strokeWidth={1.5} rx={4} />
                  <text x={22} y={34} textAnchor="middle" fill={step === 0 ? "#FFF" : INK} fontSize={11} fontWeight={800}>
                    P({step})
                  </text>
                </g>
              ))}
              <text x={145} y={80} textAnchor="middle" fill={GREEN} fontSize={11} fontWeight={800}>
                Base Case P(0) ⟹ Induction Step P(k) → P(k+1) Holds ∀k
              </text>
            </g>
          )}

          {cur.kind === "prob" && (
            <g transform="translate(30, 40)">
              <rect x={20} y={15} width={140} height={70} fill={MINT} stroke={INK} strokeWidth={1.5} rx={4} />
              <text x={90} y={42} textAnchor="middle" fill={INK} fontSize={11} fontWeight={800}>Combinations</text>
              <text x={90} y={64} textAnchor="middle" fill={GREEN} fontSize={12} fontWeight={800}>n! / (k!(n-k)!)</text>

              <rect x={180} y={15} width={140} height={70} fill={PINK} stroke={INK} strokeWidth={1.5} rx={4} />
              <text x={250} y={42} textAnchor="middle" fill={INK} fontSize={11} fontWeight={800}>Bayes' Rule</text>
              <text x={250} y={64} textAnchor="middle" fill="#DC2626" fontSize={11} fontWeight={800}>P(A|B) Posterior</text>
            </g>
          )}

          {cur.kind === "stats" && (
            <g transform="translate(60, 40)">
              {/* Bell curve */}
              <path
                d="M 10,90 Q 70,88 110,60 Q 140,15 150,15 Q 160,15 190,60 Q 230,88 290,90 Z"
                fill={BLUE}
                stroke={INK}
                strokeWidth={2}
              />
              <line x1={150} y1={15} x2={150} y2={90} stroke={GREEN} strokeWidth={2.5} strokeDasharray="4 2" />
              <text x={150} y={105} textAnchor="middle" fill={GREEN} fontSize={11} fontWeight={800}>
                Mean (μ) & Standard Deviation (±σ)
              </text>
            </g>
          )}

          {cur.kind === "linear" && (
            <g transform="translate(70, 40)">
              {/* Coordinate axis */}
              <line x1={20} y1={80} x2={260} y2={80} stroke={INK} strokeWidth={2} />
              <line x1={140} y1={10} x2={140} y2={95} stroke={INK} strokeWidth={2} />
              {/* Vector line */}
              <line x1={140} y1={80} x2={220} y2={25} stroke={GREEN} strokeWidth={3.5} />
              <polygon points="224,22 214,24 219,33" fill={GREEN} />
              <text x={235} y={25} fill={GREEN} fontSize={11} fontWeight={800}>Vector v</text>
              <text x={140} y={108} textAnchor="middle" fill={INK} fontSize={10} fontWeight={800}>
                Matrix Transformation A · v = λv
              </text>
            </g>
          )}

          {/* Topic Badge Below Canvas */}
          <rect x={14} y={142} width={352} height={36} fill={INK} rx={4} />
          <text x={190} y={164} textAnchor="middle" fill="#FFFFFF" fontSize={9.5} fontWeight={800} fontFamily={FONT}>
            {cur.topic}: <tspan fill={YELLOW}>{cur.symbol}</tspan>
          </text>
        </g>

        {/* Bottom Status Card */}
        <g transform="translate(20, 250)">
          <rect x={0} y={0} width={380} height={56} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={5} />
          <rect x={8} y={8} width={180} height={20} fill={INK} rx={3} />
          <text x={98} y={22} textAnchor="middle" fill={GREEN} fontSize={9} fontWeight={800} fontFamily={FONT}>
            {cur.formula}
          </text>
          <text x={190} y={42} textAnchor="middle" fill={INK} fontSize={9.5} fontWeight={600} fontFamily={FONT}>
            {cur.desc}
          </text>
        </g>
      </svg>
      <p className="ih-checkpoint-art-caption">Set logic, mathematical induction chains, probability distributions & vector transforms</p>
    </div>
  );
}
