"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import type { SearchHit } from "@/lib/learning-model";

export function LandingSearch({ hits }: { hits?: SearchHit[] }) {
  const router = useRouter();
  const box = useRef<HTMLFormElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [remoteHits, setRemoteHits] = useState<SearchHit[] | null>(null);
  const [loadingIndex, setLoadingIndex] = useState(false);
  const href = query.trim() ? `/search?q=${encodeURIComponent(query.trim())}` : "/search";
  const index = hits ?? remoteHits ?? [];

  const results = useMemo(() => {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return index
      .map((entry) => {
        const title = entry.title.toLowerCase();
        const haystack = `${entry.title} ${entry.course} ${entry.searchText}`.toLowerCase();
        const score = terms.reduce((total, term) => total + (title.includes(term) ? 5 : haystack.includes(term) ? 1 : -20), 0);
        return { entry, score };
      })
      .filter((item) => item.score >= terms.length)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map((item) => item.entry);
  }, [index, query]);

  async function ensureIndex() {
    if (hits || remoteHits || loadingIndex) return;
    setLoadingIndex(true);
    try {
      const response = await fetch("/api/search-index");
      if (!response.ok) return;
      const payload = (await response.json()) as SearchHit[];
      if (Array.isArray(payload)) setRemoteHits(payload);
    } catch {
      // Header search can still submit to /search.
    } finally {
      setLoadingIndex(false);
    }
  }

  return (
    <div className="ih-landing-search-cluster">
      <form
        ref={box}
        className={`ih-landing-search${open ? " is-open" : ""}`}
        action="/search"
        method="get"
        onSubmit={(event) => {
          event.preventDefault();
          router.push(href);
        }}
      >
        <input
          name="q"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => {
            setOpen(true);
            void ensureIndex();
          }}
          onBlur={() => window.setTimeout(() => setOpen(false), 120)}
          placeholder="Search"
          aria-label="Search lessons and projects"
          autoComplete="off"
        />
        {open && query.trim() ? (
          <ul className="ih-landing-search-list">
            {results.length ? results.map((item) => (
              <li key={item.id}>
                <Link href={item.href} onMouseDown={(event) => event.preventDefault()}>
                  <span>{item.course}</span>
                  {item.title}
                </Link>
              </li>
            )) : (
              <li className="is-empty">{loadingIndex && !index.length ? "Searching…" : "No exact match"}</li>
            )}
            <li>
              <Link href={href} onMouseDown={(event) => event.preventDefault()}>
                Search all results
              </Link>
            </li>
          </ul>
        ) : null}
      </form>
      <Link href={href} className="ih-landing-search-go">
        Search
      </Link>
    </div>
  );
}
