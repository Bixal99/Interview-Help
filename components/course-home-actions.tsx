import Link from "next/link";

export function CourseHomeActions({ startHref }: { startHref: string }) {
  return (
    <nav className="ih-pager" aria-label="Course">
      <Link href="/courses" className="ih-pager-btn ih-pager-back">
        <span className="ih-pager-label">« Back</span>
      </Link>
      <Link href={startHref} className="ih-pager-btn ih-pager-start">
        <span className="ih-pager-label">Start »</span>
      </Link>
    </nav>
  );
}
