"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("ih-theme", next ? "dark" : "light");
    setDark(next);
  }

  return (
    <button onClick={toggle} className="grid size-10 place-items-center rounded-full border hairline surface text-muted transition hover:text-ink" aria-label={`Use ${dark ? "light" : "dark"} theme`}>
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
