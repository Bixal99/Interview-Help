"use client";

import Link from "next/link";
import { useMemo, useState, type MouseEvent } from "react";
import { AppIcon, CourseIdentityIcon } from "@/components/icons/app-icon";
import { PracticeRichText } from "@/components/practice-rich-text";
import { ICON_SIZE } from "@/lib/icons";
import type { ProjectStudioCourse } from "@/lib/studio-types";
import { useLearningProgress } from "./progress-client";

const TILES = ["#D9EEE1", "#FFF4A3", "#FFC0C7", "#96D4FA", "#F3ECEA"];

function onGlow(event: MouseEvent<HTMLElement>) {
  const box = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--x", `${event.clientX - box.left}px`);
  event.currentTarget.style.setProperty("--y", `${event.clientY - box.top}px`);
}

export function ProjectsStudio({ courses }: { courses: ProjectStudioCourse[] }) {
  const { ready, projectDone } = useLearningProgress();
  const [courseSlug, setCourseSlug] = useState("all");
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"all" | "open" | "done">("all");

  const total = useMemo(() => courses.reduce((sum, course) => sum + course.items.length, 0), [courses]);
  const doneCount = useMemo(() => {
    if (!ready) return 0;
    return courses.reduce(
      (sum, course) => sum + course.items.filter((item) => projectDone(course.slug, item.phaseId)).length,
      0,
    );
  }, [courses, projectDone, ready]);

  const visible = useMemo(() => {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    return courses.flatMap((course) => {
      if (courseSlug !== "all" && course.slug !== courseSlug) return [];
      return course.items.flatMap((item) => {
        const done = ready && projectDone(course.slug, item.phaseId);
        if (status === "done" && !done) return [];
        if (status === "open" && done) return [];
        const haystack = `${item.title} ${item.intro} ${item.topic ?? ""} ${item.tech.join(" ")} ${course.shortName}`.toLowerCase();
        if (terms.some((term) => !haystack.includes(term))) return [];
        return [{ course, item, done }];
      });
    });
  }, [courseSlug, courses, projectDone, query, ready, status]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof visible>();
    for (const row of visible) {
      const list = map.get(row.course.slug) ?? [];
      list.push(row);
      map.set(row.course.slug, list);
    }
    return courses.filter((course) => map.has(course.slug)).map((course) => ({ course, rows: map.get(course.slug)! }));
  }, [courses, visible]);

  return (
    <main id="main-content" className="ih-studio">
      <div className="ih-studio-shell">
        <header className="ih-studio-hero">
          <h1>Projects</h1>
          <p>One build per phase. Finish it on its page so the next chapter can open.</p>
          <ul className="ih-studio-stats">
            <li>
              <b>{total}</b>
              <span>phase builds</span>
            </li>
            <li>
              <b>{courses.length}</b>
              <span>roadmaps</span>
            </li>
            <li>
              <b>{doneCount}</b>
              <span>marked complete</span>
            </li>
          </ul>
        </header>

        <section className="ih-studio-board">
          <form className="ih-studio-search" onSubmit={(event) => event.preventDefault()}>
            <AppIcon name="search" size={ICON_SIZE.nav} decorative />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Find a build by name, tool, or topic"
              aria-label="Filter projects"
              autoComplete="off"
            />
            {query ? (
              <button type="button" className="ih-studio-clear" onClick={() => setQuery("")}>
                Clear
              </button>
            ) : null}
          </form>

          <div className="ih-studio-chips" role="tablist" aria-label="Filter by roadmap">
            <button type="button" role="tab" aria-selected={courseSlug === "all"} className={courseSlug === "all" ? "is-on" : undefined} onClick={() => setCourseSlug("all")}>
              All
              <b>{total}</b>
            </button>
            {courses.map((course) => (
              <button
                key={course.slug}
                type="button"
                role="tab"
                aria-selected={courseSlug === course.slug}
                className={courseSlug === course.slug ? "is-on" : undefined}
                onClick={() => setCourseSlug(course.slug)}
              >
                {course.barLabel}
                <b>{course.items.length}</b>
              </button>
            ))}
          </div>

          <div className="ih-studio-status" role="group" aria-label="Completion filter">
            {([
              ["all", "Every build"],
              ["open", "Still open"],
              ["done", "Finished"],
            ] as const).map(([id, label]) => (
              <button key={id} type="button" className={status === id ? "is-on" : undefined} aria-pressed={status === id} onClick={() => setStatus(id)}>
                {label}
              </button>
            ))}
          </div>

          {grouped.length ? (
            grouped.map(({ course, rows }) => {
              const color = TILES[courses.findIndex((item) => item.slug === course.slug) % TILES.length];
              return (
                <section key={course.slug} className="ih-studio-section">
                <div className="ih-studio-section-head">
                  <span className="ih-studio-mark" style={{ background: color }}>
                    <CourseIdentityIcon slug={course.slug} size={ICON_SIZE.heading} />
                  </span>
                  <div>
                    <h2>{course.shortName}</h2>
                    <p>{course.description}</p>
                  </div>
                  <span className="ih-studio-count">{rows.length}</span>
                </div>
                <ul className="ih-project-grid">
                  {rows.map(({ item, done }) => (
                    <li key={item.id}>
                      <Link href={item.href} className={`ih-project-card${done ? " is-done" : ""}`} onMouseMove={onGlow}>
                        <span className="ih-project-phase">Phase {item.phaseId}</span>
                        {done ? (
                          <span className="ih-project-flag">
                            <AppIcon name="projectComplete" size={ICON_SIZE.compact} decorative />
                            Done
                          </span>
                        ) : (
                          <span className="ih-project-flag is-open">Open</span>
                        )}
                        <h3>{item.title}</h3>
                        <p><PracticeRichText text={item.intro} /></p>
                        {item.tech.length ? (
                          <ul className="ih-project-tech">
                            {item.tech.map((tool) => (
                              <li key={tool}>{tool}</li>
                            ))}
                          </ul>
                        ) : null}
                        <span className="ih-project-go">
                          Open build
                          <AppIcon name="next" size={16} />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                </section>
              );
            })
          ) : (
            <p className="ih-studio-empty">No builds match that filter. Clear search or pick another roadmap.</p>
          )}
        </section>
      </div>
    </main>
  );
}
