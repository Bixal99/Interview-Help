import { describe, expect, it } from "vitest";
import { windingColumns, windingLayout, windingMetrics, windingPath, WINDING_LEAD } from "../lib/winding-layout";

describe("winding layout", () => {
  it("places every phase on the path", () => {
    expect(windingLayout(9).points).toHaveLength(9);
    expect(windingColumns(9)).toBe(3);
    expect(windingPath(windingLayout(9).points).startsWith("M ")).toBe(true);
  });

  it("keeps the path string in the same cubic form as before", () => {
    const points = windingLayout(4).points;
    const d = windingPath(points);
    expect(d).toContain(" C ");
    expect(d.endsWith(`H ${points[points.length - 1].x + WINDING_LEAD}`)).toBe(true);
  });

  it("computes increasing node lengths without measuring SVG", () => {
    const points = windingLayout(43).points;
    const { lengths, total } = windingMetrics(points);
    expect(lengths).toHaveLength(43);
    expect(lengths[0]).toBe(WINDING_LEAD);
    for (let index = 1; index < lengths.length; index += 1) {
      expect(lengths[index]).toBeGreaterThan(lengths[index - 1]);
    }
    expect(total).toBeGreaterThan(lengths[lengths.length - 1]);
    expect(total - lengths[lengths.length - 1]).toBe(WINDING_LEAD);
  });

  it("returns empty metrics for an empty path", () => {
    expect(windingMetrics([])).toEqual({ lengths: [], total: 0 });
    expect(windingPath([])).toBe("");
  });
});
