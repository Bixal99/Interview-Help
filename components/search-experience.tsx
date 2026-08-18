"use client";

import Link from "next/link";
import type { SearchHit } from "@/lib/learning-model";
import { useEffect, useMemo, useRef, useState } from "react";

function highlight(text: string, query: string) {
  const terms = query.trim().split(/\s+/).filter((term) => term.length > 1);
  if (!terms.length) return text;
  const pattern = new RegExp(`(${terms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "ig");
  const parts = text.split(pattern);
  return parts.map((part, index) => pattern.test(part) ? <mark key={`${part}-${index}`} className="mark">{part}</mark> : part);
}

export function SearchExperience({ entries }: { entries: SearchHit[] }) {
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
      <form action="/search" method="get" onSubmit={(event) => event.preventDefault()}>
        <input
          ref={input}
          name="q"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search lessons, projects, commands…"
          className="h-12 w-full border hairline bg-[rgb(var(--surface))] px-4 text-[16px]"
          aria-label="Search all learning content"
          autoFocus
        />
      </form>
      <div className="mt-6" aria-live="polite">
        {query && <p className="mb-4 text-sm text-muted">{results.length} result{results.length === 1 ? "" : "s"}</p>}
        <ul className="divide-y hairline border hairline bg-[rgb(var(--surface))]">
          {results.map((result) => (
            <li key={result.id}>
              <Link href={result.href} className="block px-4 py-3 hover:bg-paper">
                <p className="text-xs text-muted">{result.course} · {result.type}{result.phase ? ` · ${result.phase}` : ""}</p>
                <h2 className="text-lg font-semibold">{highlight(result.title, query)}</h2>
                {result.excerpt && <p className="mt-1 text-sm text-muted">{highlight(result.excerpt, query)}</p>}
              </Link>
            </li>
          ))}
        </ul>
        {!query && <p className="mt-8 text-muted">Try a concept, a command, or a project name.</p>}
        {query && !results.length && <p className="mt-8 text-muted">No exact match. Try fewer words.</p>}
      </div>
    </div>
  );
}
