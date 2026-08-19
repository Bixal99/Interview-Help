"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandWordmark } from "./brand-mark";
import { SITE_NAME } from "@/lib/brand";
import { TechnologyIcon } from "./icons/technology-icon";

const links = [
  ["Tutorials", "/courses"],
  ["Projects", "/projects"],
  ["Interview", "/interview"],
];

function Wordmark() {
  return (
    <Link href="/" className="ih-topbar-brand px-2" title={SITE_NAME}>
      <BrandWordmark size={22} />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        const field = document.getElementById("site-search");
        if (field instanceof HTMLInputElement) {
          field.focus();
          field.select();
          return;
        }
        window.location.assign("/search");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <header className="ih-topbar sticky top-0 z-50">
      <div className="mx-auto flex h-12 max-w-[1600px] items-center gap-1 px-3 sm:px-4">
        <Wordmark />
        <nav className="hidden items-center gap-1 text-[15px] sm:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="px-3 py-2 hover:bg-white/10">{label}</Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-1">
          <Link href="/search" className="inline-flex items-center gap-2 px-3 py-2 text-[15px] hover:bg-white/10" aria-label="Search">
            <Search size={16} /><span className="hidden sm:inline">Search</span>
          </Link>
          <a href="https://github.com/Bixal99/Interview-Help" target="_blank" rel="noopener noreferrer" className="grid size-10 place-items-center hover:bg-white/10" aria-label="Open GitHub repository">
            <TechnologyIcon slug="github" title="GitHub" size={16} useBrandColor surface="dark" decorative />
          </a>
          <button onClick={() => setOpen(!open)} className="grid size-10 place-items-center hover:bg-white/10 sm:hidden" aria-expanded={open} aria-label="Toggle navigation">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-white/15 px-3 py-2 sm:hidden" aria-label="Mobile navigation">
          {links.concat([["Search", "/search"], ["Progress", "/progress"]]).map(([label, href]) => (
            <Link onClick={() => setOpen(false)} key={href} className="block px-3 py-2.5" href={href}>{label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
