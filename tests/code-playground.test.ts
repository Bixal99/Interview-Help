import { afterEach, describe, expect, it, vi } from "vitest";
import { getExercise, getExerciseIds } from "../lib/code-playground/exercises";
import { parseFenceInfo } from "../lib/code-playground/fence-meta";
import { clearDraft, draftStorageKey, readDraft, readDraftSource, writeDraft, writeDraftSource } from "../lib/code-playground/storage";
import { getRunner, isSupportedLanguage } from "../lib/code-playground/runners";
import { toPlaygroundLanguage, writeTryItCode, readTryItCode, clearTryItCode, tryPlaygroundHref } from "../lib/code-playground/try-it-storage";
import { createStdinHandler, createStdoutWriteHandler } from "../lib/code-playground/python/streams";
import { normalizeOutput, outputsMatch } from "../lib/code-playground/validator";

describe("code playground registry", () => {
  it("contains python-numeric-types with the expected exercise data", () => {
    const exercise = getExercise("python-numeric-types");
    expect(exercise).toMatchObject({
      id: "python-numeric-types",
      language: "python",
      title: "Python Numeric Types",
      allowTryItYourself: true,
      courseSlug: "computer-science",
    });
    expect(exercise?.starterCode).toContain("# Create an integer");
    expect(exercise?.solution).toContain("z = 2 + 3j");
    expect(exercise?.expectedOutput).toBe(`<class 'int'>
<class 'float'>
<class 'complex'>`);
    expect(getExerciseIds()).toContain("python-numeric-types");
  });

  it("returns registered runners and rejects unknown languages", () => {
    expect(isSupportedLanguage("python")).toBe(true);
    expect(isSupportedLanguage("javascript")).toBe(true);
    expect(isSupportedLanguage("web")).toBe(true);
    expect(isSupportedLanguage("c")).toBe(true);
    expect(isSupportedLanguage("cpp")).toBe(true);
    expect(isSupportedLanguage("java")).toBe(false);
    expect(getRunner("python")?.language).toBe("python");
    expect(getRunner("python")?.label).toBe("Python");
    expect(getRunner("javascript")?.label).toBe("JavaScript");
  });
});

describe("fence meta parsing", () => {
  it("parses language and playground id from fence info", () => {
    expect(parseFenceInfo("python playground=python-numeric-types")).toEqual({
      language: "python",
      meta: "playground=python-numeric-types",
      playgroundId: "python-numeric-types",
    });
    expect(parseFenceInfo("python")).toEqual({ language: "python" });
  });
});

describe("try it storage", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("maps supported code block languages to playground languages", () => {
    expect(toPlaygroundLanguage("python")).toBe("python");
    expect(toPlaygroundLanguage("py")).toBe("python");
    expect(toPlaygroundLanguage("javascript")).toBe("javascript");
    expect(toPlaygroundLanguage("js")).toBe("javascript");
    expect(toPlaygroundLanguage("html")).toBe("html");
    expect(toPlaygroundLanguage("css")).toBe("css");
    expect(toPlaygroundLanguage("c")).toBe("c");
    expect(toPlaygroundLanguage("c++")).toBe("cpp");
  });

  it("keeps imported lesson code after a second read", () => {
    const store = new Map<string, string>();
    vi.stubGlobal("window", {
      sessionStorage: {
        getItem: (key: string) => store.get(key) ?? null,
        setItem: (key: string, value: string) => { store.set(key, value); },
        removeItem: (key: string) => { store.delete(key); },
      },
      dispatchEvent: () => true,
    });

    const href = tryPlaygroundHref("python");
    const slotId = new URL(href, "http://x").searchParams.get("i")!;
    writeTryItCode("python", {
      source: "print(id(1))",
      title: "Working example",
    }, href);
    expect(readTryItCode(slotId)?.source).toContain("print(id(1))");
    expect(readTryItCode(slotId)?.title).toBe("Working example");
    expect(href).toMatch(/^\/playground\/try\/python\?i=[\w-]+$/);
  });
});

describe("try it examples", () => {
  it("provides runnable samples for multiple playground languages", async () => {
    const { getTryExamples, getTryExample } = await import("../lib/code-playground/try-examples");
    const examples = getTryExamples("python");
    expect(examples.length).toBeGreaterThanOrEqual(5);
    expect(getTryExample("python", "hello")?.source).toContain("Hello, World!");
    expect(getTryExample("python", "input")?.source).toContain("input(");
    expect(getTryExample("python", "stack-heap")?.source).toContain("build_list");
    expect(getTryExample("python", "stack-heap")?.source).toContain("id(GREETING)");
    expect(getTryExample("python", "stack-heap")?.source).toContain("countdown(3)");
    expect(getTryExample("javascript", "hello")?.source).toContain("console.log");
    expect(getTryExample("c", "hello-c")?.source).toContain("Hello C");
    expect(getTryExample("cpp", "hello-cpp")?.source).toContain("Hello C++");
    expect((getTryExample("web", "button-console")?.source as { html: string }).html).toContain("<button");
  });
});

describe("python stream capture", () => {
  it("preserves newline bytes from stdout writes", () => {
    const stdoutRef = { value: "" };
    const write = createStdoutWriteHandler(stdoutRef);
    write(new TextEncoder().encode("Hello\nWorld\n30\n"));
    expect(stdoutRef.value).toBe("Hello\nWorld\n30\n");
  });

  it("echoes stdin answers onto stdout like a terminal", () => {
    const stdoutRef = { value: "" };
    const stdin = createStdinHandler("Bilal\n22", stdoutRef);
    stdoutRef.value += "Name? ";
    expect(stdin()).toBe("Bilal\n");
    stdoutRef.value += "Age? ";
    expect(stdin()).toBe("22\n");
    expect(stdoutRef.value).toBe("Name? Bilal\nAge? 22\n");
  });
});

describe("output validation helpers", () => {
  it("normalizes and compares output without comparing source code", () => {
    expect(normalizeOutput("Hello\r\n\r\n")).toBe("Hello");
    expect(outputsMatch(" <class 'int'>\n<class 'float'>\n", "<class 'int'>\n<class 'float'>")).toBe(true);
  });
});

describe("input detection", () => {
  it("counts input usage in source code", async () => {
    const { countInputCalls, codeUsesInput } = await import("../lib/code-playground/detect-input");
    expect(countInputCalls("print('hi')")).toBe(0);
    expect(codeUsesInput("print('hi')")).toBe(false);
    expect(countInputCalls("name = input()\nage = input('Age? ')")).toBe(2);
    expect(codeUsesInput("name = input()")).toBe(true);
    expect(countInputCalls("const name = prompt('Name?')", "javascript")).toBe(1);
    expect(countInputCalls("std::cin >> name;", "cpp")).toBe(1);
  });
});

describe("draft storage helpers", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("persists and clears drafts by exercise id", () => {
    const store = new Map<string, string>();
    vi.stubGlobal("window", {
      localStorage: {
        getItem: (key: string) => store.get(key) ?? null,
        setItem: (key: string, value: string) => { store.set(key, value); },
        removeItem: (key: string) => { store.delete(key); },
      },
    });

    const key = draftStorageKey("python-numeric-types");
    expect(key).toBe("ih-code-draft:python-numeric-types");
    writeDraft("python-numeric-types", "x = 10");
    expect(readDraft("python-numeric-types")).toBe("x = 10");
    writeDraftSource("web-sample", { html: "<h1>Hello</h1>", css: "h1{}", javascript: "console.log(1)" });
    expect(readDraftSource("web-sample")).toEqual({ html: "<h1>Hello</h1>", css: "h1{}", javascript: "console.log(1)" });
    clearDraft("python-numeric-types");
    expect(readDraft("python-numeric-types")).toBeNull();
  });
});
