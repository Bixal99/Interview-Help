import type { Metadata } from "next";
import Link from "next/link";
import { getPathStarts } from "@/lib/content";

export const metadata: Metadata = { title: "Paths", description: "README learning paths into the first real lesson." };

export default function PathsPage() {
  const paths = getPathStarts();
  return (
    <main id="main-content" className="mx-auto max-w-[75ch] px-4 py-10">
      <h1 className="text-4xl font-bold">Paths</h1>
      <p className="mt-3 text-muted">Each path starts at the first lesson README already names.</p>
      <ul className="mt-8 space-y-3">
        {paths.map((path) => (
          <li key={path.id}>
            <Link href={path.href} className="text-xl font-semibold text-accent underline">{path.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
