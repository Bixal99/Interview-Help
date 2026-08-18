import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Neighbor } from "@/lib/navigation";

export function PrevNext({
  prev,
  next,
  nextDisabled,
  nextHint,
}: {
  prev: Neighbor | null;
  next: Neighbor | null;
  nextDisabled?: boolean;
  nextHint?: string;
}) {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-3 py-3" aria-label="Lesson">
      {prev ? (
        <Link href={prev.href} className="btn-prev">
          <ChevronLeft size={16} aria-hidden="true" /> {prev.kind === "home" ? "HOME" : "Previous"}
        </Link>
      ) : <span />}
      {next ? (
        nextDisabled ? (
          <span className="text-right">
            <span className="btn-next" aria-disabled="true">Next <ChevronRight size={16} aria-hidden="true" /></span>
            {nextHint && <span className="mt-1 block text-sm text-muted">{nextHint}</span>}
          </span>
        ) : (
          <Link href={next.href} className="btn-next">
            {next.label === "Start phase project" ? "Start phase project" : "Next"} <ChevronRight size={16} aria-hidden="true" />
          </Link>
        )
      ) : <span />}
    </nav>
  );
}
