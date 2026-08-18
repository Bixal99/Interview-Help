import { MarkdownDocument } from "./markdown-document";
import type { Heading } from "@/lib/content-utils";

export function DocumentShell({
  title,
  markdown,
  sourcePath,
}: {
  title: string;
  markdown: string;
  sourcePath: string;
  headings?: Heading[];
}) {
  return (
    <main id="main-content" className="bg-[rgb(var(--surface))]">
      <div className="ih-band px-4 py-8 sm:px-8">
        <h1 className="mx-auto max-w-[75ch] text-3xl font-bold sm:text-4xl">{title}</h1>
      </div>
      <div className="mx-auto max-w-[75ch] px-4 py-8 sm:px-0">
        <MarkdownDocument markdown={markdown} sourcePath={sourcePath} />
      </div>
    </main>
  );
}
