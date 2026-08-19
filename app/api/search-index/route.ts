import { getSearchIndex } from "@/lib/content";

export const dynamic = "force-static";

export async function GET() {
  return Response.json(
    getSearchIndex().map(({ id, title, course, href, searchText, type }) => ({
      id,
      title,
      course,
      href,
      searchText,
      type,
    })),
  );
}
