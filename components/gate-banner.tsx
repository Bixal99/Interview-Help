"use client";

import Link from "next/link";
import { useLearningProgress } from "./progress-client";

export function GateBanner({
  slug,
  phaseId,
  phaseIds,
  requiredHref,
}: {
  slug: string;
  phaseId: string;
  phaseIds: string[];
  requiredHref?: string;
}) {
  const { canEnter, ready } = useLearningProgress();
  if (!ready || canEnter(slug, phaseId, phaseIds)) return null;
  return (
    <div className="border-b hairline bg-paper px-4 py-3 text-sm sm:px-8 lg:px-12">
      Complete the previous phase project first{requiredHref ? <>: <Link href={requiredHref} className="text-accent underline">open the required project</Link></> : null}.
    </div>
  );
}
