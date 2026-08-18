import type { Metadata } from "next";
import { InnerPage } from "@/components/inner-page";
import { SearchExperience } from "@/components/search-experience";
import { getSearchIndex } from "@/lib/content";

export const metadata: Metadata = { title: "Search", description: "Search every lesson, project, and interview topic." };
export default function SearchPage() {
  const entries = getSearchIndex();
  return (
    <InnerPage title="Search" description="Search stays in your browser. Use Ctrl or Command + K from anywhere.">
      <SearchExperience entries={entries} />
    </InnerPage>
  );
}
