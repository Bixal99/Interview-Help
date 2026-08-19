import Link from "next/link";
import type { CompleteCta } from "@/lib/complete-cta";

export function PhaseCompleteBar({ cta }: { cta: CompleteCta }) {
  return (
    <section className="ih-complete" aria-label={cta.title}>
      <p className="ih-complete-title">{cta.title}</p>
      <div className="ih-complete-actions">
        {cta.actions.map((action, index) => {
          const className = `ih-complete-btn${index === 0 ? " is-primary" : ""}`;
          if (/^https?:\/\//i.test(action.href)) {
            return (
              <a key={`${action.href}-${index}`} href={action.href} className={className} target="_blank" rel="noopener noreferrer">
                {action.label} »
              </a>
            );
          }
          return (
            <Link key={`${action.href}-${index}`} href={action.href} className={className}>
              {action.label} »
            </Link>
          );
        })}
      </div>
    </section>
  );
}
