"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { CourseIdentityIcon } from "@/components/icons/app-icon";
import { useLearningProgress } from "@/components/progress-client";
import { ICON_SIZE } from "@/lib/icons";
import { phasesDone } from "@/lib/progress-storage";

function onGlow(event: MouseEvent<HTMLElement>) {
  const box = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--x", `${event.clientX - box.left}px`);
  event.currentTarget.style.setProperty("--y", `${event.clientY - box.top}px`);
}

function CourseTileProgress({ slug, phaseCount }: { slug: string; phaseCount: number }) {
  const { ready, percent, course } = useLearningProgress();
  // Keep SSR and the first client paint identical (0%); fill in after hydration.
  const value = ready ? percent(slug, phaseCount) : 0;
  const done = ready ? phasesDone(course(slug)) : 0;

  return (
    <div className="ih-course-tile-progress">
      <div className="ih-course-tile-progress-meta">
        <span>{value}% done</span>
        <span>
          {done} / {phaseCount} phases
        </span>
      </div>
      <div
        className="ih-course-tile-progress-track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-label={`${done} of ${phaseCount} phases complete`}
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
    skills?: string[];
  };
  index?: number;
}) {
  const number = String(index + 1).padStart(2, "0");
  const phaseCount = course.phaseCount ?? 0;

  return (
    <Link href={`/courses/${course.slug}`} className="ih-course-tile" onMouseMove={onGlow}>
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
      {phaseCount > 0 ? <CourseTileProgress slug={course.slug} phaseCount={phaseCount} /> : null}
      <div className="ih-course-tile-foot">
        <p>
          {course.phaseCount ? `${course.phaseCount} phases` : null}
          {course.phaseCount && course.lessonCount ? " · " : null}
          {course.lessonCount ? `${course.lessonCount} lessons` : null}
        </p>
        <span className="ih-course-start">Start</span>
      </div>
    </Link>
  );
}
