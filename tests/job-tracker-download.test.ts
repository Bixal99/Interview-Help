import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { GET } from "../app/downloads/job-tracker/route";
import { DATA_ROOT } from "../lib/paths";

describe("Job Tracker download", () => {
  it("serves the canonical workbook with download headers", async () => {
    const canonical = fs.readFileSync(path.join(DATA_ROOT, "Job_Tracker.xlsx"));
    const response = GET();
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    expect(response.headers.get("content-disposition")).toBe('attachment; filename="Job_Tracker.xlsx"');
    expect(Buffer.from(await response.arrayBuffer())).toEqual(canonical);
  });
});
