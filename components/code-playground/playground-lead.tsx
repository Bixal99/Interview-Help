import type { ReactNode } from "react";
import { PracticeRichText } from "@/components/practice-rich-text";

export function PlaygroundLead({
  kicker,
  title,
  goal,
  extra,
  children,
}: {
  kicker?: string | null;
  title?: string | null;
  goal?: string | null;
  extra?: string | null;
  children?: ReactNode;
}) {
  return (
    <div className="ih-try-header is-build">
      {kicker ? <p className="ih-try-banner-kicker">{kicker}</p> : null}
      {title ? <h2 className="ih-try-banner-title"><PracticeRichText text={title} /></h2> : null}
      {goal ? (
        <p className="ih-try-banner-goal"><PracticeRichText text={goal} /></p>
      ) : null}
      {extra && extra !== goal ? (
        <p className="ih-try-banner-goal is-observe"><PracticeRichText text={extra} /></p>
      ) : null}
      {children}
    </div>
  );
}
