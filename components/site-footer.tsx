import Link from "next/link";
import { Github } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t hairline">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 text-sm text-muted sm:flex-row sm:items-center">
        <p className="sm:mr-auto">Open-source learning paths by Mohammad Bilal. Learn at your own pace.</p>
        <Link href="/courses" className="hover:text-ink">Courses</Link>
        <Link href="/about" className="hover:text-ink">About</Link>
        <a href="https://github.com/Bixal99/Interview-Help" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ink"><Github size={15} /> GitHub</a>
      </div>
    </footer>
  );
}
