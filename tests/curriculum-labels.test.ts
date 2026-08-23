import { describe, expect, it } from "vitest";
import { chapterDocumentTitle, chapterLearnLine, parseUnitHeading, sectionDocumentTitle, unitDisplayTitle } from "../lib/curriculum-labels";

describe("curriculum labels", () => {
  it("builds section tab titles from id and name", () => {
    expect(sectionDocumentTitle("33.1", "Linked Lists")).toBe("33.1 Linked Lists");
    expect(sectionDocumentTitle("33.1", "33.1 Linked Lists")).toBe("33.1 Linked Lists");
  });

  it("builds chapter tab titles from number and name", () => {
    expect(chapterDocumentTitle("33", "Linked Lists")).toBe("33 Linked Lists");
  });

  it("prefixes story-map headings with Unit", () => {
    expect(unitDisplayTitle("V. Data structures & algorithms")).toBe("Unit V. Data structures & algorithms");
    expect(unitDisplayTitle("Unit V. Data structures")).toBe("Unit V. Data structures");
  });

  it("summarizes chapter goals into one line", () => {
    const goal =
      "Explain the full journey from source code to executed instructions - lexing, tokens, parsing - and say where each value lives.";
    expect(chapterLearnLine(goal)).toBe("Explain the full journey from source code to executed instructions");
    expect(chapterLearnLine(undefined)).toBeNull();
  });

  it("parses unit headings for checkpoint hero", () => {
    expect(parseUnitHeading("I. Before You Write Code")).toEqual({
      mark: "Unit I",
      name: "Before You Write Code",
    });
  });
});
