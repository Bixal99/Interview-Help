import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { parseInterviewPlaybook } from "../lib/parse-interview";

const markdown = fs.readFileSync(path.join(process.cwd(), "content/guides/Interview.md"), "utf8");

describe("interview playbook parsing", () => {
  const playbook = parseInterviewPlaybook(markdown);

  it("keeps the playbook title and every lettered track", () => {
    expect(playbook.title).toMatch(/interview playbook/i);
    expect(playbook.tracks.map((track) => track.id)).toEqual(["A", "B", "C", "D", "W", "G", "H", "V", "E", "F", "I"]);
    expect(playbook.tracks.reduce((sum, track) => sum + track.questions.length, 0)).toBeGreaterThan(100);
  });

  it("parses a CS question into spoken-answer beats", () => {
    const question = playbook.tracks[0].questions[0];
    expect(question).toMatchObject({
      code: "A1",
      trackId: "A",
      title: expect.stringMatching(/Big O/i),
      level: "Screen",
    });
    expect(question.prompt).toMatch(/Big O/i);
    expect(question.answer).toMatch(/runtime or memory/i);
    expect(question.followUps.length).toBeGreaterThan(10);
    expect(question.trap.length).toBeGreaterThan(10);
    expect(question.id).toBe("a1-what-is-big-o-and-how-do-you-use-it-in-an-interview");
  });

  it("normalizes mixed seniority labels", () => {
    const levels = new Set(playbook.tracks.flatMap((track) => track.questions.map((item) => item.level)));
    expect([...levels].sort()).toEqual(["Core", "Foundation", "Screen", "Senior"]);
  });

  it("splits same-line follow-up and trap copy on IT questions", () => {
    const question = playbook.tracks.find((track) => track.id === "I")?.questions[0];
    expect(question?.code).toBe("I1");
    expect(question?.followUps).toMatch(/escalate/i);
    expect(question?.followUps).not.toMatch(/COMMON MISTAKE/i);
    expect(question?.trap).toMatch(/fixing computers/i);
  });
});
