"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { CourseIdentityIcon } from "@/components/icons/app-icon";
import { ICON_SIZE } from "@/lib/icons";

const TILES = ["#D9EEE1", "#FFF4A3", "#FFC0C7", "#96D4FA", "#F3ECEA"];

function onGlow(event: MouseEvent<HTMLElement>) {
  const box = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--x", `${event.clientX - box.left}px`);
  event.currentTarget.style.setProperty("--y", `${event.clientY - box.top}px`);
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
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="ih-course-tile"
      style={{ background: TILES[index % TILES.length] }}
      onMouseMove={onGlow}
    >
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
