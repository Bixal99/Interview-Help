import Link from "next/link";

export function Pager({
  backHref,
  backLabel = "Back",
  proceedHref,
  proceedLabel = "Proceed",
  proceedDisabled,
  hint,
  hideBack,
}: {
  backHref: string;
  backLabel?: string;
  proceedHref?: string;
  proceedLabel?: string;
  proceedDisabled?: boolean;
  hint?: string;
  hideBack?: boolean;
}) {
  return (
    <nav className={`ih-pager${hideBack ? " ih-pager-start-only" : ""}`} aria-label="Page">
      {hideBack ? null : (
        <Link href={backHref} className="ih-pager-btn ih-pager-back">
          <span className="ih-pager-label">« {backLabel}</span>
        </Link>
      )}
      {proceedHref ? (
        proceedDisabled ? (
          <span className="text-right">
            <span className="ih-pager-btn ih-pager-start" aria-disabled="true">
              <span className="ih-pager-label">{proceedLabel} »</span>
            </span>
            {hint ? <span className="mt-2 block text-sm text-muted">{hint}</span> : null}
          </span>
        ) : (
          <Link href={proceedHref} className="ih-pager-btn ih-pager-start">
            <span className="ih-pager-label">{proceedLabel} »</span>
          </Link>
        )
      ) : (
        <span />
      )}
    </nav>
  );
}
