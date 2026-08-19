import type { CourseNav } from "@/lib/navigation";
import { TutorialIndex } from "./tutorial-index";

export function TutorialShell({
  nav,
  children,
}: {
  nav: CourseNav;
  children: React.ReactNode;
}) {
  const homeHref = `/courses/${nav.slug}`;
  return (
    <div className="ih-tutorial mx-auto grid max-w-[1600px] lg:grid-cols-[230px_minmax(0,1fr)]">
      <aside className="ih-index hidden min-h-[calc(100vh-6.5rem)] lg:block">
        <div className="sticky top-[6.5rem] max-h-[calc(100vh-6.5rem)] overflow-y-auto py-2">
          <TutorialIndex nav={nav} homeHref={homeHref} />
        </div>
      </aside>
      <div className="min-w-0 bg-white">
        <details className="ih-index lg:hidden">
          <summary className="cursor-pointer px-4 py-3 text-sm font-semibold">{nav.shortName} Tutorial</summary>
          <div className="max-h-[70vh] overflow-y-auto pb-4">
            <TutorialIndex nav={nav} homeHref={homeHref} />
          </div>
        </details>
        {children}
      </div>
    </div>
  );
}
