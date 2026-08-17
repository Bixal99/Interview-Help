import fs from "node:fs";
import path from "node:path";
import { DATA_ROOT } from "../../../lib/paths";

export const dynamic = "force-static";

export function GET() {
  const file = fs.readFileSync(path.join(DATA_ROOT, "Job_Tracker.xlsx"));
  return new Response(file, {
    headers: {
      "Content-Disposition": 'attachment; filename="Job_Tracker.xlsx"',
      "Content-Length": String(file.byteLength),
      "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
  });
}
