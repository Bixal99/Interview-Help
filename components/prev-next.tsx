import Link from "next/link";
import { AppIcon } from "@/components/icons/app-icon";
import { ICON_SIZE } from "@/lib/icons";
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
    <nav className="flex flex-wrap items-center justify-between gap-3 py-5" aria-label="Lesson">
      {prev ? (
        <Link href={prev.href} className="btn-prev">
          <AppIcon name="previous" size={ICON_SIZE.ui} /> {prev.kind === "home" ? "Home" : "Previous"}
        </Link>
      ) : <span />}
      {next ? (
        nextDisabled ? (
          <span className="text-right">
            <span className="btn-next" aria-disabled="true">
              {next.label === "Start phase project" ? "Start phase project" : "Next"} <AppIcon name="next" size={ICON_SIZE.ui} />
            </span>
            {nextHint && <span className="mt-1 block text-sm text-muted">{nextHint}</span>}
          </span>
        ) : (
          <Link href={next.href} className="btn-next">
            {next.label === "Start phase project" ? "Start phase project" : "Next"} <AppIcon name="next" size={ICON_SIZE.ui} />
          </Link>
        )
      ) : <span />}
    </nav>
  );
}
