"use client";

import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { SearchEntry } from "@/lib/content";

export function SearchExperience({ entries }: { entries: SearchEntry[] }) {
  const [query, setQuery] = useState("");
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setQuery(new URLSearchParams(window.location.search).get("q") ?? "");
    input.current?.focus();
  }, []);
  const results = useMemo(() => {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return entries.map((entry) => {
      const title = entry.title.toLowerCase();
      const haystack = `${entry.title} ${entry.course} ${entry.searchText}`.toLowerCase();
      const score = terms.reduce((total, term) => total + (title.includes(term) ? 5 : haystack.includes(term) ? 1 : -20), 0);
      return { entry, score };
    }).filter((item) => item.score >= terms.length).sort((a, b) => b.score - a.score).slice(0, 60).map((item) => item.entry);
  }, [entries, query]);
  return (
    <div>
      <div className="relative"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={19} /><input ref={input} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search phases, concepts, commands, projects…" className="h-14 w-full rounded-2xl border hairline surface pl-12 pr-12 text-sm shadow-soft placeholder:text-muted focus:border-cobalt" aria-label="Search all learning content" />{query && <button onClick={() => setQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-ink" aria-label="Clear search"><X size={18} /></button>}</div>
      <div className="mt-6" aria-live="polite">{query && <p className="mb-4 text-sm text-muted">{results.length} result{results.length === 1 ? "" : "s"} across the roadmaps</p>}
        <div className="space-y-2">{results.map((result) => <Link key={result.id} href={result.href} className="group block rounded-xl border hairline surface p-4 transition hover:border-cobalt/30 hover:shadow-soft"><div className="flex items-start gap-3"><div className="min-w-0 flex-1"><div className="mb-1.5 flex flex-wrap items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-muted"><span>{result.course}</span><span>·</span><span>{result.type}</span></div><h2 className="font-medium tracking-[-.015em] group-hover:text-cobalt">{result.title}</h2>{result.excerpt && <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-muted">{result.excerpt}</p>}</div><ArrowRight className="mt-2 shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-cobalt" size={16} /></div></Link>)}</div>
        {!query && <div className="rounded-2xl border border-dashed hairline p-10 text-center"><p className="font-medium">Search the entire learning library</p><p className="mt-2 text-sm text-muted">Try “binary search”, “Kubernetes”, “SQL joins”, or “behavioral”.</p></div>}
        {query && !results.length && <div className="rounded-2xl border border-dashed hairline p-10 text-center"><p className="font-medium">No exact match</p><p className="mt-2 text-sm text-muted">Try fewer words or a broader concept.</p></div>}
      </div>
    </div>
  );
}
