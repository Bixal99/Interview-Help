import type { PlaygroundLanguage, PlaygroundSource } from "./types";

export type CodeExerciseTest = {
  stdin?: string;
  expectedOutput: string;
};

export type CodeExerciseDomCheck = {
  selector: string;
  textIncludes?: string;
  className?: string;
};

export type CodeExercise = {
  id: string;
  language: PlaygroundLanguage;
  title: string;
  instructions: string;
  starterCode: PlaygroundSource;
  solution: PlaygroundSource;
  expectedOutput?: string;
  tests?: CodeExerciseTest[];
  domChecks?: CodeExerciseDomCheck[];
  allowTryItYourself?: boolean;
  courseSlug?: string;
  lessonHref?: string;
  lockedLanguage?: boolean;
};

const PYTHON_NUMERIC_TYPES: CodeExercise = {
  id: "python-numeric-types",
  language: "python",
  title: "Python Numeric Types",
  instructions: [
    "1. Create x and assign integer 10",
    "2. Create y and assign float 3.14",
    "3. Create z and assign complex number 2+3j",
    "4. Print the type of each variable",
  ].join("\n"),
  starterCode: `# Create an integer

# Create a float

# Create a complex number

# Print the types
`,
  solution: `x = 10
y = 3.14
z = 2 + 3j

print(type(x))
print(type(y))
print(type(z))
`,
  expectedOutput: `<class 'int'>
<class 'float'>
<class 'complex'>`,
  allowTryItYourself: true,
  courseSlug: "computer-science",
  lessonHref: "/courses/computer-science/phase/7/variables-types-and-expressions",
};

const JAVASCRIPT_VARIABLES: CodeExercise = {
  id: "javascript-hello",
  language: "javascript",
  title: "JavaScript Console Output",
  instructions: "1. Print JavaScript\n2. Print 10 + 20",
  starterCode: `console.log("JavaScript");
console.log(10 + 20);`,
  solution: `console.log("JavaScript");
console.log(10 + 20);`,
  expectedOutput: `JavaScript
30`,
  allowTryItYourself: true,
};

const HTML_HEADING: CodeExercise = {
  id: "html-heading",
  language: "html",
  title: "HTML Heading",
  instructions: "Create an h1 that says Hello HTML.",
  starterCode: {
    html: "<h1>Hello HTML</h1>",
    css: "",
    javascript: "",
  },
  solution: {
    html: "<h1>Hello HTML</h1>",
    css: "",
    javascript: "",
  },
  domChecks: [{ selector: "h1", textIncludes: "Hello HTML" }],
  allowTryItYourself: true,
};

const CSS_HEADING: CodeExercise = {
  id: "css-heading",
  language: "css",
  title: "CSS Heading Style",
  instructions: "Style the heading so it becomes 40px.",
  starterCode: {
    html: "<h1>Hello CSS</h1>",
    css: "h1 {\n  font-size: 40px;\n}",
    javascript: "",
  },
  solution: {
    html: "<h1>Hello CSS</h1>",
    css: "h1 {\n  font-size: 40px;\n}",
    javascript: "",
  },
  domChecks: [{ selector: "h1", textIncludes: "Hello CSS" }],
  allowTryItYourself: true,
};

const WEB_BUTTON: CodeExercise = {
  id: "web-button-console",
  language: "web",
  title: "Web Button Console",
  instructions: "Render a button and log Clicked when it is pressed.",
  starterCode: {
    html: `<button id="btn">Click</button>`,
    css: "button {\n  padding: 0.75rem 1rem;\n}",
    javascript: `document.getElementById("btn").onclick = () => {
  console.log("Clicked");
};`,
  },
  solution: {
    html: `<button id="btn">Click</button>`,
    css: "button {\n  padding: 0.75rem 1rem;\n}",
    javascript: `document.getElementById("btn").onclick = () => {
  console.log("Clicked");
};`,
  },
  domChecks: [{ selector: "#btn", textIncludes: "Click" }],
  allowTryItYourself: true,
};

const C_HELLO: CodeExercise = {
  id: "c-hello",
  language: "c",
  title: "Hello C",
  instructions: "Print Hello C and 30.",
  starterCode: `#include <stdio.h>

int main() {
    printf("Hello C\\n");
    printf("%d\\n", 10 + 20);
    return 0;
}`,
  solution: `#include <stdio.h>

int main() {
    printf("Hello C\\n");
    printf("%d\\n", 10 + 20);
    return 0;
}`,
  expectedOutput: `Hello C
30`,
  allowTryItYourself: true,
};

const CPP_HELLO: CodeExercise = {
  id: "cpp-hello",
  language: "cpp",
  title: "Hello C++",
  instructions: "Print Hello C++ and 30.",
  starterCode: `#include <iostream>

int main() {
    std::cout << "Hello C++" << std::endl;
    std::cout << 10 + 20 << std::endl;
    return 0;
}`,
  solution: `#include <iostream>

int main() {
    std::cout << "Hello C++" << std::endl;
    std::cout << 10 + 20 << std::endl;
    return 0;
}`,
  expectedOutput: `Hello C++
30`,
  allowTryItYourself: true,
};

export const codeExercises: Record<string, CodeExercise> = {
  [PYTHON_NUMERIC_TYPES.id]: PYTHON_NUMERIC_TYPES,
  [JAVASCRIPT_VARIABLES.id]: JAVASCRIPT_VARIABLES,
  [HTML_HEADING.id]: HTML_HEADING,
  [CSS_HEADING.id]: CSS_HEADING,
  [WEB_BUTTON.id]: WEB_BUTTON,
  [C_HELLO.id]: C_HELLO,
  [CPP_HELLO.id]: CPP_HELLO,
};

export const codeExerciseList = Object.values(codeExercises);

export function getExercise(id: string): CodeExercise | undefined {
  return codeExercises[id];
}

export function getExerciseIds(): string[] {
  return Object.keys(codeExercises);
}
