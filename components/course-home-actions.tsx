import { Pager } from "./pager";

export function CourseHomeActions({ startHref }: { startHref: string }) {
  return <Pager backHref="/courses" backLabel="Back" proceedHref={startHref} proceedLabel="Start" />;
}
