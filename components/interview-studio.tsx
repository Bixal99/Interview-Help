"use client";

import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { AppIcon, CourseIdentityIcon } from "@/components/icons/app-icon";
import { PracticeRichText } from "@/components/practice-rich-text";
import { ICON_SIZE } from "@/lib/icons";
import type { InterviewPlaybook, InterviewQuestion, InterviewTrack } from "@/lib/parse-interview";

const TRACK_COURSE: Record<string, string> = {
  A: "computer-science",
  B: "data",
  C: "networks",
  D: "artificial-intelligence",
  W: "web-development",
  G: "cloud",
  H: "devops",
  V: "git",
  I: "it-administration",
  E: "",
  F: "",
};

const BEATS = [
  { id: "prompt", label: "Question" },
  { id: "answer", label: "Strong answer" },
  { id: "followUps", label: "Follow-ups" },
  { id: "trap", label: "Traps" },
] as const;

type BeatId = (typeof BEATS)[number]["id"];

function onGlow(event: MouseEvent<HTMLElement>) {
  const box = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--x", `${event.clientX - box.left}px`);
  event.currentTarget.style.setProperty("--y", `${event.clientY - box.top}px`);
}

function levelClass(level: string) {
  const key = level.toLowerCase();
  if (key.includes("screen") || key.includes("foundation")) return "is-screen";
  if (key.includes("senior")) return "is-senior";
  return "is-core";
}

function beatsFor(question: InterviewQuestion) {
  return BEATS.filter((beat) => question[beat.id]);
}

function TrackMark({ track }: { track: InterviewTrack }) {
  const slug = TRACK_COURSE[track.id];
  if (slug) return <CourseIdentityIcon slug={slug} size={ICON_SIZE.heading} />;
  return <AppIcon name="interview" size={ICON_SIZE.heading} decorative />;
}

export function InterviewStudio({ playbook }: { playbook: InterviewPlaybook }) {
  const [trackId, setTrackId] = useState("all");
  const [level, setLevel] = useState("all");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const [beat, setBeat] = useState<BeatId>("prompt");
  const [hashReady, setHashReady] = useState(false);

  const questions = useMemo(() => playbook.tracks.flatMap((track) => track.questions), [playbook.tracks]);
  const levels = ["Screen", "Core", "Senior", "Foundation"].filter((item) => questions.some((question) => question.level === item));

  const visible = useMemo(() => {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    return playbook.tracks.flatMap((track) => {
      if (trackId !== "all" && track.id !== trackId) return [];
      return track.questions.flatMap((item) => {
        if (level !== "all" && item.level !== level) return [];
        const haystack = `${item.code} ${item.title} ${item.prompt} ${item.answer} ${track.title}`.toLowerCase();
        if (terms.some((term) => !haystack.includes(term))) return [];
        return [{ track, item }];
      });
    });
  }, [level, playbook.tracks, query, trackId]);

  const open = visible.find((row) => row.item.id === openId) ?? null;
  const openBeats = open ? beatsFor(open.item) : [];
  const activeBeat = openBeats.some((item) => item.id === beat) ? beat : openBeats[0]?.id ?? "prompt";

  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (id) setOpenId(id);
    setHashReady(true);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!hashReady) return;
    const next = openId ? `/interview#${openId}` : "/interview";
    if (`${window.location.pathname}${window.location.hash}` !== next) {
      window.history.replaceState(null, "", next);
    }
  }, [hashReady, openId]);

  function toggle(id: string) {
    setOpenId((current) => (current === id ? null : id));
    setBeat("prompt");
  }

  return (
    <main id="main-content" className="ih-studio ih-interview-page">
      <div className="ih-studio-shell">
        <header className="ih-studio-hero">
          <h1>Interview Playbook</h1>
          <p className="ih-studio-lead">Cover the answer. Speak it. Then check the follow-up and the trap.</p>
          <ol className="ih-beats" aria-label="Practice flow">
            {BEATS.map((item, index) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={open && activeBeat === item.id ? "is-on" : undefined}
                  onClick={() => {
                    if (open) setBeat(item.id);
                  }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ol>
          <ul className="ih-studio-stats">
            <li>
              <b>{questions.length}</b>
              <span>spoken drills</span>
            </li>
            <li>
              <b>{playbook.tracks.length}</b>
              <span>tracks</span>
            </li>
            <li>
              <b>{levels.length}</b>
              <span>difficulty tags</span>
            </li>
          </ul>
        </header>

        <section className="ih-studio-board">
          <form className="ih-studio-search" onSubmit={(event) => event.preventDefault()}>
            <AppIcon name="search" size={ICON_SIZE.nav} decorative />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search a question, like Big O or JOIN"
              aria-label="Filter interview questions"
              autoComplete="off"
            />
            {query ? (
              <button type="button" className="ih-studio-clear" onClick={() => setQuery("")}>
                Clear
              </button>
            ) : null}
          </form>

          <div className="ih-interview-filters">
          <div className="ih-studio-chips" role="tablist" aria-label="Filter by track">
            <button type="button" role="tab" aria-selected={trackId === "all"} className={trackId === "all" ? "is-on" : undefined} onClick={() => setTrackId("all")}>
              All
              <b>{questions.length}</b>
            </button>
            {playbook.tracks.map((track) => (
              <button
                key={track.id}
                type="button"
                role="tab"
                aria-selected={trackId === track.id}
                className={trackId === track.id ? "is-on" : undefined}
                onClick={() => setTrackId(track.id)}
              >
                {track.id}
                <b>{track.questions.length}</b>
              </button>
            ))}
          </div>

          <div className="ih-studio-status" role="group" aria-label="Filter by level">
            <button type="button" className={level === "all" ? "is-on" : undefined} aria-pressed={level === "all"} onClick={() => setLevel("all")}>
              Every level
            </button>
            {levels.map((item) => (
              <button key={item} type="button" className={level === item ? "is-on" : undefined} aria-pressed={level === item} onClick={() => setLevel(item)}>
                {item}
              </button>
            ))}
          </div>
          </div>

          {visible.length ? (
            <ul className="ih-q-grid">
              {visible.map(({ track, item }) => {
                const expanded = openId === item.id;
                const shownBeats = beatsFor(item);
                const current = shownBeats.some((entry) => entry.id === activeBeat) ? activeBeat : shownBeats[0]?.id;
                return (
                  <li key={item.id} id={item.id}>
                    <article className={`ih-q-card${expanded ? " is-open" : ""}`} onMouseMove={onGlow}>
                      <button type="button" className="ih-q-hit" onClick={() => toggle(item.id)} aria-expanded={expanded}>
                        <span className="ih-q-code">{item.code}</span>
                        <span className={`ih-q-level ${levelClass(item.level)}`}>{item.level}</span>
                        <h2><PracticeRichText text={item.title} /></h2>
                        <p><PracticeRichText text={item.prompt} /></p>
                        <span className="ih-q-meta">
                          <TrackMark track={track} />
                          {track.title}
                        </span>
                      </button>
                      {expanded && current ? (
                        <div className="ih-q-panel">
                          <div className="ih-q-tabs" role="tablist" aria-label="Answer beats">
                            {shownBeats.map((entry) => (
                              <button
                                key={entry.id}
                                type="button"
                                role="tab"
                                aria-selected={current === entry.id}
                                className={current === entry.id ? "is-on" : undefined}
                                onClick={() => setBeat(entry.id)}
                              >
                                {entry.label}
                              </button>
                            ))}
                          </div>
                          <p className="ih-q-copy"><PracticeRichText text={item[current]} /></p>
                          {item.source ? <p className="ih-q-source">{item.source}</p> : null}
                        </div>
                      ) : null}
                    </article>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="ih-studio-empty">No questions match that filter. Clear search or pick another track.</p>
          )}
        </section>
      </div>
    </main>
  );
}
