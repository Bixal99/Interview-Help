import { CourseDocPage } from "@/components/course-doc-page";
import type { CourseNav } from "@/lib/navigation";

/** Kept so existing UI imports still resolve. Learning pages use CourseDocPage without a sidebar. */
export function OdooDocPage({
  markdown,
  sourcePath,
  prev,
  next,
}: {
  nav?: CourseNav;
  markdown: string;
  sourcePath: string;
  backHref?: string;
  backLabel?: string;
  prev?: { href: string; label: string } | null;
  next?: { href: string; label: string } | null;
}) {
  return <CourseDocPage slug="odoo" markdown={markdown} sourcePath={sourcePath} prev={prev} next={next} />;
}
