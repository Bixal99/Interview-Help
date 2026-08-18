import type { Metadata } from "next";
import { SearchExperience } from "@/components/search-experience";
import { getSearchIndex } from "@/lib/content";

export const metadata: Metadata = { title: "Search", description: "Search every lesson, project, and interview topic." };
export default function SearchPage() {
  const entries = getSearchIndex();
  return (
    <main id="main-content" className="mx-auto min-h-[70vh] max-w-[75ch] px-4 py-10">
      <h1 className="text-4xl font-bold">Search</h1>
      <p className="mt-3 text-sm text-muted">Search stays in your browser. Use Ctrl or Command + K from anywhere.</p>
      <div className="mt-8"><SearchExperience entries={entries} /></div>
    </main>
  );
}
