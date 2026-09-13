"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { CourseIdentityIcon } from "@/components/icons/app-icon";
import { useLearningProgress } from "@/components/progress-client";
import { ICON_SIZE } from "@/lib/icons";
import type { CourseProgressState } from "@/lib/learning-model";
import { lessonsDone } from "@/lib/progress-storage";
import { resumeHrefFromState } from "@/lib/resume-href";

function onGlow(event: MouseEvent<HTMLElement>) {
  const box = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--x", `${event.clientX - box.left}px`);
  event.currentTarget.style.setProperty("--y", `${event.clientY - box.top}px`);
}

function courseStarted(state: CourseProgressState) {
  return Boolean(
    state.currentPhaseId ||
      state.completedLessons.length > 0 ||
      state.visitedLessons.length > 0,
  );
}

function continueHrefFor(slug: string, state: CourseProgressState) {
  const phaseId = state.currentPhaseId;
  if (!phaseId) return `/courses/${slug}`;
  return resumeHrefFromState(slug, state, `/courses/${slug}`);
}

function CourseTileProgress({
  slug,
  lessonCount,
  projectCount,
  started,
}: {
  slug: string;
  lessonCount: number;
  projectCount: number;
  started: boolean;
}) {
  const { ready, percent, course } = useLearningProgress();
  const value = ready ? percent(slug, lessonCount, projectCount) : 0;
  const state = course(slug);
  const done = ready ? lessonsDone(state) : 0;
  const projectsDone = ready ? Math.min(projectCount, new Set(state.completedProjects).size) : 0;

  return (
    <div className="ih-course-tile-progress">
      <div className="ih-course-tile-progress-meta">
        <span>{started ? "Continue where you left off" : `${value}% done`}</span>
        <span>
          {done + projectsDone} / {lessonCount + projectCount} required items
        </span>
      </div>
      <div
        className="ih-course-tile-progress-track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-label={`${done} of ${lessonCount} lessons and ${projectsDone} of ${projectCount} projects complete`}
      >
        <span style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export function CourseCard({
  course,
  index = 0,
}: {
  course: {
    slug: string;
    shortName: string;
    description: string;
    barLabel?: string;
    phaseCount?: number;
    lessonCount?: number;
    projectCount?: number;
    writtenLessonCount?: number;
    skills?: string[];
  };
  index?: number;
}) {
  const number = String(index + 1).padStart(2, "0");
  const chapterCount = course.phaseCount ?? 0;
  const lessonCount = course.lessonCount ?? 0;
  const progressLessons = course.writtenLessonCount ?? lessonCount;
  const progressProjects = course.projectCount ?? 0;
  const { ready, course: courseStateFor } = useLearningProgress();
  const state = courseStateFor(course.slug);
  const started = ready && courseStarted(state);
  const href = started ? continueHrefFor(course.slug, state) : `/courses/${course.slug}`;

  return (
    <Link href={href} className={`ih-course-tile${started ? " is-started" : ""}`} onMouseMove={onGlow}>
      <div className="ih-course-tile-top">
        <span className="ih-course-tile-index" aria-hidden="true">
          {number}
        </span>
        <span className="ih-course-tile-icon" aria-hidden="true">
          <CourseIdentityIcon slug={course.slug} size={ICON_SIZE.course} />
        </span>
      </div>
      <h3 className="ih-course-tile-title">{course.shortName}</h3>
      <p className="ih-course-tile-copy">{course.description}</p>
      {course.skills && course.skills.length > 0 ? (
        <ul className="ih-course-tile-skills">
          {course.skills.slice(0, 3).map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      ) : null}
      {progressLessons > 0 || progressProjects > 0 ? (
        <CourseTileProgress
          slug={course.slug}
          lessonCount={progressLessons}
          projectCount={progressProjects}
          started={started}
        />
      ) : null}
      <div className="ih-course-tile-foot">
        <p>
          {chapterCount ? `${chapterCount} chapters` : null}
          {chapterCount && lessonCount ? " · " : null}
          {lessonCount ? `${lessonCount} lessons` : null}
        </p>
        <span className="ih-course-start">{started ? "Continue learning" : "Start"}</span>
      </div>
    </Link>
  );
}
