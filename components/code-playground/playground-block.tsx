"use client";

import dynamic from "next/dynamic";
import type { CodeExercise } from "@/lib/code-playground/exercises";

const CodePlayground = dynamic(
  () => import("./code-playground").then((module) => module.CodePlayground),
  {
    ssr: false,
    loading: () => <div className="ih-playground ih-playground-loading">Loading playground…</div>,
  },
);

export function PlaygroundBlock({
  exercise,
  mode,
}: {
  exercise: CodeExercise;
  mode: "inline" | "tryit";
}) {
  return <CodePlayground exercise={exercise} mode={mode} />;
}
