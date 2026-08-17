"use client";

import Link from "next/link";
import { BookOpen, Github, Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const links = [["Courses", "/courses"], ["Projects", "/projects"], ["Interview", "/interview"], ["About", "/about"]];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        window.location.assign("/search");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b hairline bg-paper/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center gap-4 px-4 sm:px-6">
        <Link href="/" className="mr-auto flex items-center gap-2.5 font-semibold tracking-[-.02em]">
          <span className="grid size-9 place-items-center rounded-xl bg-ink text-paper"><BookOpen size={18} /></span>
          <span>Interview Help</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted lg:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} className="transition hover:text-ink" href={href}>{label}</Link>)}
        </nav>
        <Link href="/search" className="hidden h-10 items-center gap-2 rounded-full border hairline surface px-3.5 text-sm text-muted transition hover:text-ink sm:flex">
          <Search size={16} /><span>Search</span><kbd className="ml-2 rounded border px-1.5 py-0.5 text-[10px]">⌘ K</kbd>
        </Link>
        <a href="https://github.com/Bixal99/Interview-Help" target="_blank" rel="noopener noreferrer" className="hidden size-10 place-items-center rounded-full border hairline surface text-muted transition hover:text-ink sm:grid" aria-label="Open GitHub repository"><Github size={17} /></a>
        <ThemeToggle />
        <button onClick={() => setOpen(!open)} className="grid size-10 place-items-center rounded-full border hairline surface lg:hidden" aria-expanded={open} aria-label="Toggle navigation">{open ? <X size={18} /> : <Menu size={18} />}</button>
      </div>
      {open && <nav className="border-t hairline surface p-4 lg:hidden" aria-label="Mobile navigation">{links.concat([["Search", "/search"]]).map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} className="block rounded-lg px-3 py-2.5 text-sm hover:bg-ink/5" href={href}>{label}</Link>)}</nav>}
    </header>
  );
}
