import type { Metadata } from "next";
import { SearchExperience } from "@/components/search-experience";
import { getSearchIndex } from "@/lib/content";

export const metadata: Metadata = { title: "Search", description: "Search every lesson, project, and interview topic." };

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const entries = getSearchIndex();
  const { q } = await searchParams;
  return <SearchExperience entries={entries} initialQuery={q ?? ""} />;
}
