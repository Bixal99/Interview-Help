"use client";

import { useState } from "react";
import { AppIcon } from "@/components/icons/app-icon";
import { ICON_SIZE, type AppIconName } from "@/lib/icons";

const STEPS: { title: string; body: string; icon: AppIconName }[] = [
  {
    title: "Pick a track",
    body: "Choose a role path or open a tutorial. New to coding? Start with Computer Science.",
    icon: "paths",
  },
  {
    title: "Read one lesson",
    body: "Watch the video, run the example, and stay on that page until the idea is clear.",
    icon: "lesson",
  },
  {
    title: "Build the project",
    body: "Each phase has a matching mini-project. Finish it before the next chapter unlocks.",
    icon: "project",
  },
  {
    title: "Practice out loud",
    body: "Use the Interview Playbook to speak answers, then keep going through the roadmap.",
    icon: "interview",
  },
];

export function LandingLoop() {
  const [active, setActive] = useState(0);

  return (
    <div className="ih-landing-loop">
      <ol className="ih-landing-loop-track">
        {STEPS.map((step, index) => (
          <li key={step.title}>
            <button
              type="button"
              className={`ih-landing-loop-step${index === active ? " is-on" : ""}`}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              aria-pressed={index === active}
            >
              <span className="ih-landing-loop-num">{index + 1}</span>
              <span className="ih-landing-loop-icon" aria-hidden="true">
                <AppIcon name={step.icon} size={ICON_SIZE.heading} decorative />
              </span>
              <strong>{step.title}</strong>
            </button>
          </li>
        ))}
      </ol>
      <div className="ih-landing-loop-panel" aria-live="polite">
        <p className="ih-landing-loop-kicker">Step {String(active + 1).padStart(2, "0")}</p>
        <h3>{STEPS[active].title}</h3>
        <p>{STEPS[active].body}</p>
      </div>
    </div>
  );
}
