import { MarkdownDocument } from "@/components/markdown-document";
import { ContentHashResume } from "@/components/content-hash-resume";
import { Pager } from "@/components/pager";
import { ProgressVisit } from "@/components/progress-visit";
import { prepareChapterContentMarkdown } from "@/lib/content-utils";

export function CourseDocPage({
  slug,
  phaseId,
  stopId,
  markdown,
  sourcePath,
  prev,
  next,
  stripToc = false,
  trackHash = false,
}: {
  slug: string;
  phaseId?: string;
  stopId?: string;
  markdown: string;
  sourcePath: string;
  prev?: { href: string; label: string } | null;
  next?: { href: string; label: string } | null;
  stripToc?: boolean;
  trackHash?: boolean;
}) {
  const body = stripToc ? prepareChapterContentMarkdown(markdown) : markdown;
  return (
    <article className="ih-lesson">
      {phaseId && stopId ? (
        <ProgressVisit slug={slug} phaseId={phaseId} stopId={stopId} trackHash={trackHash} />
      ) : null}
      {trackHash ? <ContentHashResume /> : null}
      <Pager
        backHref={prev?.href ?? "/courses"}
        backLabel={prev?.label ?? "Back"}
        proceedHref={next?.href}
        proceedLabel={next?.label ?? "Proceed"}
      />
      <div className="ih-lesson-body">
        <MarkdownDocument markdown={body} sourcePath={sourcePath} embedYouTube />
      </div>
      <div className="ih-lesson-end">
        <Pager
          backHref={prev?.href ?? "/courses"}
          backLabel={prev?.label ?? "Back"}
          proceedHref={next?.href}
          proceedLabel={next?.label ?? "Proceed"}
        />
      </div>
    </article>
  );
}
