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

const OOP_CONCEPTS = [
  {
    title: "1. CLASS BLUEPRINT & OBJECT INSTANCE",
    badge: "CLASSES & OBJECTS",
    code: "account = BankAccount(id=101, balance=500)",
    desc: "Class defines state and behavior; Objects instantiate state on Heap",
    kind: "blueprint",
  },
  {
    title: "2. ENCAPSULATION & DATA HIDING",
    badge: "ENCAPSULATION",
    code: "private #balance; public deposit(amount)",
    desc: "Internal state is guarded; mutations only allowed via validated methods",
    kind: "encapsulation",
  },
  {
    title: "3. INHERITANCE & POLYMORPHISM",
    badge: "POLYMORPHISM",
    code: "PaymentGateway.process() -> [Stripe, PayPal]",
    desc: "Subclasses override base interface method for runtime dynamic dispatch",
    kind: "polymorphism",
  },
  {
    title: "4. SOLID PRINCIPLES & COMPOSITION",
    badge: "SOLID (HAS-A)",
    code: "Order has-a PaymentService (Dependency Inversion)",
    desc: "Decoupled architecture: High-level modules depend on abstractions",
    kind: "solid",
  },
];

export function OopDeepArt() {
  const frameIdx = useAnimationFrame(OOP_CONCEPTS.length, 2000);
  const cur = OOP_CONCEPTS[frameIdx];

  return (
    <div className="ih-checkpoint-art">
      <svg
        viewBox="0 0 420 320"
        role="img"
        aria-label="Object-Oriented Programming, Encapsulation, Polymorphism and SOLID animation"
        className="ih-big-o"
      >
        <rect x={0} y={0} width={420} height={320} fill={PAPER} />

        {/* Title Header */}
        <rect x={20} y={12} width={380} height={30} fill={INK} rx={4} />
        <text x={210} y={32} textAnchor="middle" fill="#FFFFFF" fontSize={11} fontWeight={800} fontFamily={FONT} letterSpacing={1.5}>
          OBJECT-ORIENTED DESIGN & SOLID PATTERNS
        </text>

        {/* Dynamic Concept Visual Box */}
        <g transform="translate(20, 50)">
          <rect x={0} y={0} width={380} height={190} fill="#FFFFFF" stroke={INK} strokeWidth={2} rx={6} />

          {/* Blueprint */}
          {cur.kind === "blueprint" && (
            <g transform="translate(18, 18)">
              {/* Class Blueprint */}
              <rect x={0} y={0} width={150} height={100} fill={BLUE} stroke={INK} strokeWidth={1.5} rx={4} />
              <rect x={0} y={0} width={150} height={22} fill={INK} rx={4} />
              <text x={75} y={15} textAnchor="middle" fill="#FFF" fontSize={9} fontWeight={800}>Class: UserAccount</text>
              <text x={10} y={40} fill={INK} fontSize={8} fontWeight={700}>- username: str</text>
              <text x={10} y={56} fill={INK} fontSize={8} fontWeight={700}>- balance: float</text>
              <line x1={0} y1={68} x2={150} y2={68} stroke={INK} strokeWidth={1} />
              <text x={10} y={84} fill={GREEN} fontSize={8} fontWeight={800}>+ deposit(amt)</text>

              {/* Arrow */}
              <path d="M 158,50 L 190,50" fill="none" stroke={GREEN} strokeWidth={3} strokeDasharray="4 2" />
              <polygon points="196,50 188,45 188,55" fill={GREEN} />

              {/* Instance Object on Heap */}
              <rect x={202} y={0} width={142} height={100} fill={YELLOW} stroke={GREEN} strokeWidth={2} rx={4} />
              <rect x={202} y={0} width={142} height={22} fill={GREEN} rx={4} />
              <text x={273} y={15} textAnchor="middle" fill="#FFF" fontSize={9} fontWeight={800}>Object: 0x7FFF10</text>
              <text x={212} y={40} fill={INK} fontSize={8} fontWeight={800}>username: "Alice"</text>
              <text x={212} y={56} fill={INK} fontSize={8} fontWeight={800}>balance: $500.00</text>
              <text x={212} y={84} fill={INK} fontSize={7.5} fontWeight={600}>State on Heap</text>
            </g>
          )}

          {/* Encapsulation */}
          {cur.kind === "encapsulation" && (
            <g transform="translate(40, 20)">
              <rect x={0} y={0} width={300} height={96} fill={MINT} stroke={INK} strokeWidth={2} rx={6} />
              <rect x={14} y={16} width={120} height={64} fill={PINK} stroke={INK} strokeWidth={1.5} rx={4} />
              <text x={74} y={38} textAnchor="middle" fill="#DC2626" fontSize={9} fontWeight={800}>🔒 PRIVATE STATE</text>
              <text x={74} y={58} textAnchor="middle" fill={INK} fontSize={8} fontWeight={800}>#balance = 500</text>

              <rect x={160} y={16} width={126} height={64} fill={GREEN} rx={4} />
              <text x={223} y={38} textAnchor="middle" fill="#FFF" fontSize={9} fontWeight={800}>PUBLIC METHODS</text>
              <text x={223} y={58} textAnchor="middle" fill="#FFF" fontSize={8} fontWeight={700}>deposit() / withdraw()</text>
            </g>
          )}

          {/* Polymorphism */}
          {cur.kind === "polymorphism" && (
            <g transform="translate(40, 15)">
              <rect x={80} y={0} width={140} height={32} fill={BLUE} stroke={INK} strokeWidth={1.5} rx={4} />
              <text x={150} y={20} textAnchor="middle" fill={INK} fontSize={9} fontWeight={800}>Base: PaymentGateway</text>
              
              <line x1={150} y1={32} x2={50} y2={60} stroke={INK} strokeWidth={2} />
              <line x1={150} y1={32} x2={250} y2={60} stroke={INK} strokeWidth={2} />

              <rect x={0} y={60} width={100} height={36} fill={YELLOW} stroke={INK} strokeWidth={1.5} rx={3} />
              <text x={50} y={82} textAnchor="middle" fill={INK} fontSize={9} fontWeight={800}>Stripe (Card)</text>

              <rect x={200} y={60} width={100} height={36} fill={PINK} stroke={INK} strokeWidth={1.5} rx={3} />
              <text x={250} y={82} textAnchor="middle" fill={INK} fontSize={9} fontWeight={800}>PayPal (Token)</text>
            </g>
          )}

          {/* SOLID */}
          {cur.kind === "solid" && (
            <g transform="translate(30, 20)">
              <rect x={0} y={0} width={320} height={96} fill={PAPER} stroke={INK} strokeWidth={1.5} rx={6} />
              <text x={160} y={24} textAnchor="middle" fill={GREEN} fontSize={10} fontWeight={800}>
                DEPENDENCY INVERSION PRINCIPLE (DIP)
              </text>
              <rect x={20} y={38} width={120} height={44} fill={BLUE} stroke={INK} strokeWidth={1} rx={3} />
              <text x={80} y={64} textAnchor="middle" fill={INK} fontSize={9} fontWeight={800}>OrderService</text>

              <line x1={140} y1={60} x2={180} y2={60} stroke={GREEN} strokeWidth={3} />

              <rect x={180} y={38} width={120} height={44} fill={MINT} stroke={INK} strokeWidth={1} rx={3} />
              <text x={240} y={64} textAnchor="middle" fill={INK} fontSize={8.5} fontWeight={800}>&lt;&lt;IPaymentEngine&gt;&gt;</text>
            </g>
          )}

          {/* Code Bar */}
          <g transform="translate(14, 130)">
            <rect x={0} y={0} width={352} height={44} fill={INK} rx={4} />
            <text x={14} y={18} fill={YELLOW} fontSize={8} fontWeight={800} fontFamily={FONT}>
              {cur.badge}:
            </text>
            <text x={14} y={34} fill="#FFFFFF" fontSize={9} fontWeight={800} fontFamily="monospace">
              {cur.code}
            </text>
          </g>
        </g>

        {/* Bottom Status Card */}
        <g transform="translate(20, 250)">
          <rect x={0} y={0} width={380} height={56} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} rx={5} />
          <rect x={8} y={8} width={180} height={20} fill={INK} rx={3} />
          <text x={98} y={22} textAnchor="middle" fill={GREEN} fontSize={9} fontWeight={800} fontFamily={FONT}>
            {cur.title}
          </text>
          <text x={190} y={42} textAnchor="middle" fill={INK} fontSize={9.5} fontWeight={600} fontFamily={FONT}>
            {cur.desc}
          </text>
        </g>
      </svg>
      <p className="ih-checkpoint-art-caption">Class blueprints, encapsulation boundaries, polymorphism & SOLID design</p>
    </div>
  );
}
