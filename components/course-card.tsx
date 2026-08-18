import Link from "next/link";

const TILES = ["#D9EEE1", "#FFF4A3", "#FFC0C7", "#96D4FA", "#F3ECEA"];

export function CourseCard({
  course,
  index = 0,
}: {
  course: { slug: string; shortName: string; description: string };
  index?: number;
}) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="flex h-full min-h-[180px] flex-col p-6 text-black no-underline transition-opacity hover:opacity-90"
      style={{ background: TILES[index % TILES.length] }}
    >
      <h3 className="text-2xl font-bold">{course.shortName}</h3>
      <p className="mt-3 text-[15px] leading-6">{course.description}</p>
      <span className="mt-auto pt-6 font-semibold">Start {course.shortName} »</span>
    </Link>
  );
}
