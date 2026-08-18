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
    <main id="main-content">
      <div className="ih-band px-4 py-8 sm:px-8">
        <h1 className="mx-auto max-w-[75ch] text-3xl font-bold sm:text-4xl">{title}</h1>
      </div>
      <div className="bg-[rgb(var(--surface))] px-4 py-8 sm:px-8">
        <div className="mx-auto max-w-[75ch]">
          <MarkdownDocument markdown={markdown} sourcePath={sourcePath} />
        </div>
      </div>
    </main>
  );
}
