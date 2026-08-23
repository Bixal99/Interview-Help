import { describe, expect, it } from "vitest";
import { extractSeeItResources, stripSeeItBlock } from "../lib/learning-resources/extract-inline";
import { enrichResource, normalizeResourceType } from "../lib/learning-resources/normalize";
import { buildCourseResourceBundle } from "../lib/learning-resources/build";

describe("learning-resources", () => {
  it("normalizes resource kinds", () => {
    expect(normalizeResourceType("Best animated explanation")).toBe("video");
    expect(normalizeResourceType("Written documentation")).toBe("documentation");
    expect(normalizeResourceType("Interactive simulator")).toBe("interactive");
  });

  it("extracts LEARNING RESOURCES blocks", () => {
    const markdown = `## 2.2 Binary

**LEARNING RESOURCES:**

- [Binary video](https://www.youtube.com/watch?v=M41M9ATm49M) - place values
- Interactive tool: [Binary practice](https://example.com/binary) - convert numbers
`;
    const resources = extractSeeItResources(markdown);
    expect(resources.length).toBe(2);
    expect(resources[0].type).toBe("video");
    expect(resources[0].videoId).toBe("M41M9ATm49M");
    expect(stripSeeItBlock(markdown)).not.toMatch(/LEARNING RESOURCES/i);
  });

  it("enriches youtube metadata", () => {
    const resource = enrichResource({
      kind: "Video",
      title: "Test",
      href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      note: "Helpful after the lesson.",
    });
    expect(resource.type).toBe("video");
    expect(resource.videoId).toBe("dQw4w9WgXcQ");
    expect(resource.embedSupported).toBe(true);
  });

  it("curated resources replace inline markdown for the same lesson", () => {
    const markdown = `## 1.1 Test

**LEARNING RESOURCES:**

- [Inline only](https://www.youtube.com/watch?v=aaaaaaaaaaa) - should not appear
`;
    const bundle = buildCourseResourceBundle("computer-science", markdown);
    const urls = (bundle.lessons["1.1"] ?? []).map((r) => r.url);
    expect(urls.some((u) => u.includes("aaaaaaaaaaa"))).toBe(false);
    expect(urls.some((u) => u.includes("O5nskjZ_GoI"))).toBe(true);
  });
});
