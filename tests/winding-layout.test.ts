import { describe, expect, it } from "vitest";
import {
  windingColumns,
  windingLayout,
  windingMetrics,
  windingPath,
  windingSegmentLessonPoints,
  WINDING_LEAD,
} from "../lib/winding-layout";

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

  it("spaces lesson dots evenly along a segment", () => {
    const from = { x: 0, y: 0 };
    const to = { x: 300, y: 0 };
    const points = windingSegmentLessonPoints(from, to, 6);
    expect(points).toHaveLength(6);
    const gaps = points.slice(1).map((point, index) => point.x - points[index].x);
    const average = gaps.reduce((sum, gap) => sum + gap, 0) / gaps.length;
    for (const gap of gaps) {
      expect(Math.abs(gap - average)).toBeLessThan(2);
    }
    expect(points[0].x).toBeGreaterThanOrEqual(38);
    expect(points[0].x).toBeLessThan(55);
    expect(points[points.length - 1].x).toBeGreaterThan(245);
    expect(points[points.length - 1].x).toBeLessThanOrEqual(262);
  });

  it("scales dot spacing when lesson count changes", () => {
    const from = { x: 0, y: 0 };
    const to = { x: 400, y: 0 };
    const few = windingSegmentLessonPoints(from, to, 3);
    const many = windingSegmentLessonPoints(from, to, 9);
    const fewGap = few[1].x - few[0].x;
    const manyGap = many[1].x - many[0].x;
    expect(fewGap).toBeGreaterThan(manyGap);
    expect(few[0].x).toBeLessThan(many[0].x + 20);
    expect(few[few.length - 1].x).toBeGreaterThan(many[many.length - 1].x - 20);
  });
});
