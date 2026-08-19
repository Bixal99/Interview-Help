"use client";

import { useState } from "react";

const STAGES = [
  { n: "01", title: "One lesson", hint: "Stay on the page until the idea is clear.", fill: "#D9EEE1" },
  { n: "02", title: "Phase project", hint: "Build the matching project before you move on.", fill: "#FFF4A3" },
  { n: "03", title: "Interview", hint: "Say the trade-off out loud, then keep going.", fill: "#FFC0C7" },
  { n: "04", title: "Hire-ready", hint: "The loop repeats until the work holds.", fill: "#96D4FA" },
] as const;

export function HeroStage() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [focused, setFocused] = useState<number | null>(null);
  const active = hovered ?? focused;
  const stage = active !== null ? STAGES[active] : null;
  const progress = active === null ? 0 : ((active + 1) / STAGES.length) * 100;

  return (
    <div className="ih-hero-stage">
      <div className="ih-hero-stage-copy">
        <p className="ih-hero-kicker">The loop</p>
        <p className="ih-hero-stage-title">{stage?.title ?? "The loop"}</p>
        <p className="ih-hero-stage-hint">{stage?.hint ?? "Hover a stage to see the path."}</p>
      </div>

      <ol className="ih-hero-layers" onMouseLeave={() => setHovered(null)}>
        {STAGES.map((item, index) => (
          <li key={item.n}>
            <button
              type="button"
              className={`ih-hero-layer${index === active ? " is-on" : ""}`}
              style={{ background: item.fill }}
              onMouseEnter={() => setHovered(index)}
              onFocus={() => setFocused(index)}
              onBlur={() => setFocused((current) => (current === index ? null : current))}
              aria-pressed={index === active}
            >
              <b>{item.n}</b>
              <span>{item.title}</span>
            </button>
          </li>
        ))}
      </ol>

      <div className="ih-hero-track" aria-hidden="true">
        <i style={{ width: `${progress}%` }} />
      </div>

      <svg className="ih-hero-curve" viewBox="0 0 320 72" aria-hidden="true">
        <path d="M8 58 C 70 58, 90 46, 120 40 S 190 18, 232 16 S 300 8, 312 8" fill="none" stroke="#3a3c45" strokeWidth="3" />
        <path
          d="M8 58 C 70 58, 90 46, 120 40 S 190 18, 232 16 S 300 8, 312 8"
          fill="none"
          stroke="#04AA6D"
          strokeWidth="3"
          strokeDasharray="340"
          strokeDashoffset={active === null ? 340 : 340 - (340 * (active + 1)) / 4}
        />
        {STAGES.map((_, index) => {
          const x = [8, 120, 232, 312][index];
          const y = [58, 40, 16, 8][index];
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r={index === active ? 6 : 4}
              fill={active !== null && index <= active ? "#04AA6D" : "#3a3c45"}
            />
          );
        })}
      </svg>
    </div>
  );
}
