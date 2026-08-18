import type { Metadata } from "next";
import Link from "next/link";
import { InnerPage } from "@/components/inner-page";
import { getPathStarts } from "@/lib/content";

export const metadata: Metadata = { title: "Paths", description: "README learning paths into the first real lesson." };

export default function PathsPage() {
  const paths = getPathStarts();
  return (
    <InnerPage title="Paths" description="Each path starts at the first lesson README already names.">
      <ul className="space-y-3">
        {paths.map((path) => (
          <li key={path.id}>
            <Link href={path.href} className="text-xl font-semibold text-accent underline">{path.title}</Link>
          </li>
        ))}
      </ul>
    </InnerPage>
  );
}
