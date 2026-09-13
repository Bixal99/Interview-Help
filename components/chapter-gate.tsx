"use client";

import Link from "next/link";
import { AppIcon } from "@/components/icons/app-icon";
import { useLearningProgress } from "@/components/progress-client";
import { resumeAnchorFor, resumeHrefFromState, resumeHrefFor } from "@/lib/resume-href";

export type GateChapter = { id: string; number: string; title: string };

function chapterName(title: string) {
  return title.replace(/^(?:CHAPTER|CH)\s*\d+\s*[:.–-]\s*/i, "").trim() || title;
}

function stopKind(lessonId?: string, topicId?: string, anchor?: string) {
  if (topicId) return `Section ${topicId}`;
  if (anchor) {
    const section = sectionLabelFromAnchor(anchor);
    return section ? `Section ${section}` : "Content";
  }
  if (!lessonId) return null;
  if (lessonId.startsWith("project:")) return "Project";
  if (lessonId === "exercise" || /\.2$/.test(lessonId)) return "Exercise";
  if (lessonId.startsWith("glossary:")) return "Glossary";
  return "Content";
}

/** Heading slugs drop dots ("1.4.1 Title" → "141-title"); recover when unambiguous. */
function sectionLabelFromAnchor(anchor: string) {
  const raw = anchor.replace(/^#/, "");
  const dotted = /^(\d+(?:\.\d+)+)\b/.exec(raw);
  if (dotted) return dotted[1];
  return null;
}

export function ChapterGate({
  slug,
  phaseId,
  phaseNumber,
  phaseTitle,
  phaseIds,
  chapters,
  startHref,
  children,
}: {
  slug: string;
  phaseId: string;
  phaseNumber: string;
  phaseTitle: string;
  phaseIds: string[];
  chapters: GateChapter[];
  startHref: string;
  children: React.ReactNode;
}) {
  const progress = useLearningProgress();
  if (!progress.ready) {
    return <div className="ih-chapter-lock" aria-hidden="true" />;
  }

  const locked = !progress.canEnter(slug, phaseId, phaseIds);
  if (!locked) return children;

  const state = progress.course(slug);
  const leftId = (() => {
    if (state.currentPhaseId && progress.canEnter(slug, state.currentPhaseId, phaseIds)) {
      return state.currentPhaseId;
    }
    let last = chapters[0]?.id;
    for (const chapter of chapters) {
      if (!progress.canEnter(slug, chapter.id, phaseIds)) break;
      last = chapter.id;
    }
    return last;
  })();
  const left = chapters.find((chapter) => chapter.id === leftId) ?? chapters[0];
  const continueHref = left
    ? left.id === state.currentPhaseId
      ? resumeHrefFromState(slug, state, startHref)
      : resumeHrefFor(slug, left.id, `${left.id}.1`)
    : startHref;
  const lockedName = chapterName(phaseTitle);
  const leftName = left ? chapterName(left.title) : null;
  const leftStop =
    left?.id === state.currentPhaseId
      ? stopKind(state.currentLessonId, state.currentTopicId, resumeAnchorFor(slug, state))
      : "Content";

  return (
    <div className="ih-chapter-lock">
      <div className="ih-chapter-lock-card">
        <p className="ih-chapter-lock-kicker">Locked</p>
        <p className="ih-chapter-lock-chapter">Chapter {phaseNumber}</p>
        <h1 className="ih-chapter-lock-title">{lockedName}</h1>
        <p className="ih-chapter-lock-copy">
          This chapter is still ahead. Finish the one you are on first.
        </p>
        {left ? (
          <div className="ih-chapter-lock-place">
            <p className="ih-chapter-lock-place-kicker">You left off</p>
            <p className="ih-chapter-lock-place-chapter">Chapter {left.number}</p>
            <p className="ih-chapter-lock-place-name">{leftName}</p>
            {leftStop ? <p className="ih-chapter-lock-place-stop">{leftStop}</p> : null}
          </div>
        ) : null}
        <div className="ih-chapter-lock-actions">
          <p className="ih-chapter-lock-hint">
            {left
              ? `Continue Chapter ${left.number} to keep your place.`
              : "Start the first chapter."}
          </p>
          <Link href={continueHref} className="ih-chapter-lock-go">
            <span className="ih-chapter-lock-go-label">
              {left ? `Continue Chapter ${left.number}` : "Start learning"}
              <AppIcon name="next" size={16} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
