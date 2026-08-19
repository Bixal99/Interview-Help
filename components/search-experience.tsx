"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { KeyboardEvent, MouseEvent } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AppIcon } from "@/components/icons/app-icon";
import { SEARCH_TYPE_ICONS, ICON_SIZE } from "@/lib/icons";
import { plainFormula } from "@/lib/format-math";
import type { SearchHit } from "@/lib/learning-model";

type Kind = SearchHit["type"];
type Filter = "all" | Kind;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "lesson", label: "Lessons" },
  { id: "project", label: "Projects" },
  { id: "command", label: "Commands" },
  { id: "course", label: "Courses" },
  { id: "phase", label: "Phases" },
  { id: "interview", label: "Interview" },
  { id: "example", label: "Examples" },
  { id: "concept", label: "Concepts" },
];

function filterIcon(id: Filter) {
  return id === "all" ? "search" : SEARCH_TYPE_ICONS[id];
}

const SUGGESTIONS = ["git commit", "recursion", "SQL join", "REST", "OOP", "binary search", "Docker", "HTTP"];

function cleanExcerpt(text: string) {
  return plainFormula(text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function highlight(text: string, query: string) {
  const terms = query.trim().split(/\s+/).filter((term) => term.length > 1);
  if (!terms.length) return text;
  const pattern = new RegExp(`(${terms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "ig");
  const parts = text.split(pattern);
  return parts.map((part, index) => (pattern.test(part) ? <mark key={`${part}-${index}`}>{part}</mark> : part));
}

function onGlow(event: MouseEvent<HTMLElement>) {
  const box = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--x", `${event.clientX - box.left}px`);
  event.currentTarget.style.setProperty("--y", `${event.clientY - box.top}px`);
}

function scoreHits(entries: SearchHit[], query: string) {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return entries
    .map((entry) => {
      const title = entry.title.toLowerCase();
      const haystack = `${entry.title} ${entry.course} ${entry.searchText}`.toLowerCase();
      const score = terms.reduce((total, term) => total + (title.includes(term) ? 5 : haystack.includes(term) ? 1 : -20), 0);
      return { entry, score };
    })
    .filter((item) => item.score >= terms.length)
    .sort((a, b) => b.score - a.score)
    .slice(0, 60)
    .map((item) => item.entry);
}

export function SearchExperience({ entries, initialQuery = "" }: { entries: SearchHit[]; initialQuery?: string }) {
  const router = useRouter();
  const input = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState(initialQuery);
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState(0);

  useEffect(() => {
    input.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    const url = query.trim() ? `/search?q=${encodeURIComponent(query.trim())}` : "/search";
    window.history.replaceState(null, "", url);
  }, [query]);

  const counts = useMemo(() => {
    const next: Record<Filter, number> = {
      all: entries.length,
      course: 0,
      phase: 0,
      lesson: 0,
      concept: 0,
      project: 0,
      interview: 0,
      command: 0,
      example: 0,
    };
    for (const entry of entries) next[entry.type] += 1;
    return next;
  }, [entries]);

  const pool = useMemo(
    () => (filter === "all" ? entries : entries.filter((entry) => entry.type === filter)),
    [entries, filter],
  );

  const results = useMemo(() => {
    if (!query.trim()) {
      if (filter === "all") return [];
      return pool.slice(0, 24);
    }
    return scoreHits(pool, query);
  }, [pool, query, filter]);

  useEffect(() => {
    setActive(0);
  }, [query, filter]);

  useEffect(() => {
    if (active === 0) return;
    document.getElementById(`search-hit-${active}`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const openHit = useCallback(
    (hit: SearchHit) => {
      router.push(hit.href);
    },
    [router],
  );

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => Math.min(index + 1, Math.max(results.length - 1, 0)));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter" && results[active]) {
      event.preventDefault();
      openHit(results[active]);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setQuery("");
      setFilter("all");
    }
  }

  const browsing = !query.trim() && filter !== "all";
  const searching = Boolean(query.trim());

  const visibleFilters = FILTERS.filter((item) => item.id === "all" || counts[item.id] > 0);

  return (
    <main id="main-content" className="ih-studio ih-search-page">
      <div className="ih-studio-shell">
        <header className="ih-studio-hero">
          <h1>Search</h1>
          <p className="ih-studio-lead">
            Jump to a lesson, build, or command. Ctrl K works from any page.
          </p>
          <ul className="ih-studio-stats">
            <li>
              <b>{counts.lesson.toLocaleString("en-US")}</b>
              <span>lessons</span>
            </li>
            <li>
              <b>{counts.project.toLocaleString("en-US")}</b>
              <span>projects</span>
            </li>
            <li>
              <b>{counts.command.toLocaleString("en-US")}</b>
              <span>commands</span>
            </li>
          </ul>
        </header>

        <section className="ih-studio-board">
          <form className="ih-studio-search" action="/search" method="get" onSubmit={(event) => event.preventDefault()}>
            <AppIcon name="search" size={ICON_SIZE.nav} decorative />
            <input
              ref={input}
              id="site-search"
              name="q"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Try a concept, a command, or a project name"
              aria-label="Search all learning content"
              aria-controls="search-results"
              aria-autocomplete="list"
              autoComplete="off"
            />
            {query ? (
              <button type="button" className="ih-studio-clear" onClick={() => setQuery("")} aria-label="Clear search">
                Clear
              </button>
            ) : (
              <span className="ih-search-keys" aria-hidden="true">
                <kbd>↑↓</kbd>
                <kbd>↵</kbd>
                <kbd>Esc</kbd>
              </span>
            )}
          </form>

          <div className="ih-studio-chips" role="tablist" aria-label="Filter by type">
            {visibleFilters.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={filter === item.id}
                className={filter === item.id ? "is-on" : undefined}
                onClick={() => setFilter(item.id)}
              >
                <AppIcon name={filterIcon(item.id)} size={ICON_SIZE.compact} decorative />
                {item.label}
                <b>{counts[item.id].toLocaleString("en-US")}</b>
              </button>
            ))}
          </div>

          {!searching && filter === "all" ? (
            <div className="ih-search-idle">
              <section className="ih-studio-section">
                <div className="ih-studio-section-head">
                  <div>
                    <h2>Try these</h2>
                    <p>Common queries people jump to first.</p>
                  </div>
                </div>
                <ul className="ih-search-chips">
                  {SUGGESTIONS.map((term) => (
                    <li key={term}>
                      <button type="button" onClick={() => { setQuery(term); input.current?.focus(); }}>
                        {term}
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="ih-studio-section">
                <div className="ih-studio-section-head">
                  <div>
                    <h2>Browse by type</h2>
                    <p>Open a slice of the library without a query.</p>
                  </div>
                </div>
                <ul className="ih-search-types">
                  {visibleFilters.filter((item) => item.id !== "all").map((item) => (
                    <li key={item.id}>
                      <button type="button" className="ih-search-type" onClick={() => setFilter(item.id)} onMouseMove={onGlow}>
                        <span className="ih-search-type-icon">
                          <AppIcon name={filterIcon(item.id)} size={ICON_SIZE.heading} decorative />
                        </span>
                        <strong>{item.label}</strong>
                        <em>{counts[item.id].toLocaleString("en-US")} indexed</em>
                        <span className="ih-project-go">
                          Open
                          <AppIcon name="next" size={16} />
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          ) : (
            <div className="ih-search-panel" aria-live="polite">
              <div className="ih-studio-section-head">
                <div>
                  <h2>
                    {results.length} {browsing ? `${filter}${results.length === 1 ? "" : "s"}` : `result${results.length === 1 ? "" : "s"}`}
                  </h2>
                  <p>{searching ? `Matches for “${query.trim()}”` : "Showing this type from the library."}</p>
                </div>
              </div>
              {results.length ? (
                <ul id="search-results" className="ih-search-list" role="listbox">
                  {results.map((result, index) => (
                    <li key={result.id} role="option" aria-selected={index === active}>
                      <Link
                        id={`search-hit-${index}`}
                        href={result.href}
                        className={`ih-search-hit${index === active ? " is-active" : ""}`}
                        onMouseMove={onGlow}
                        onMouseEnter={() => setActive(index)}
                      >
                        <span className="ih-search-hit-icon">
                          <AppIcon name={SEARCH_TYPE_ICONS[result.type]} size={ICON_SIZE.nav} decorative />
                        </span>
                        <span className="ih-search-hit-copy">
                          <span className="ih-search-hit-meta">
                            {result.course} · {result.type}
                            {result.phase ? ` · ${result.phase}` : ""}
                          </span>
                          <strong>{highlight(result.title, query)}</strong>
                          {result.excerpt ? <em>{highlight(cleanExcerpt(result.excerpt), query)}</em> : null}
                        </span>
                        <span className="ih-project-go">
                          Open
                          <AppIcon name="next" size={16} />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="ih-studio-empty">No exact match. Try fewer words, or pick a type above.</p>
              )}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
