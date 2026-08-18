import Link from "next/link";
import { CourseIdentityIcon } from "@/components/icons/app-icon";
import { ICON_SIZE } from "@/lib/icons";

const TILES = ["#D9EEE1", "#FFF4A3", "#FFC0C7", "#96D4FA", "#F3ECEA"];

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
    >
      <div className="flex items-start justify-between gap-3">
        <span className="ih-course-tile-index" aria-hidden="true">
          {number}
        </span>
        <span className="ih-course-tile-icon" aria-hidden="true">
          <CourseIdentityIcon slug={course.slug} size={ICON_SIZE.course} />
        </span>
      </div>
      {course.barLabel ? <p className="ih-course-tile-kicker">{course.barLabel}</p> : null}
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
        <span className="ih-course-start">Start »</span>
      </div>
    </Link>
  );
}
