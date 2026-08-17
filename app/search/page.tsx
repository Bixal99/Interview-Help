import type { Metadata } from "next";
import { SearchExperience } from "@/components/search-experience";
import { getSearchIndex } from "@/lib/content";

export const metadata: Metadata = { title: "Search", description: "Search every roadmap, phase, project, and interview topic." };
export default function SearchPage() { const entries = getSearchIndex(); return <main id="main-content" className="mx-auto min-h-[70vh] max-w-4xl px-5 py-16 sm:px-6"><div className="mb-10"><p className="text-xs font-semibold uppercase tracking-[.16em] text-cobalt">Local search</p><h1 className="mt-3 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">Find the idea you need.</h1><p className="mt-4 text-sm text-muted">Search stays in your browser. Use Ctrl/Command + K from anywhere.</p></div><SearchExperience entries={entries} /></main>; }
