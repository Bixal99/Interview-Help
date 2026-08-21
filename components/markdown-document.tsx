import React, { cloneElement, isValidElement } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { CodeBlock } from "./code-block";
import { PlaygroundBlock } from "./code-playground/playground-block";
import { LessonDiagram, isVisualDiagram } from "./lesson-diagram";
import { MermaidDiagram } from "./mermaid-diagram";
import { ProgressToggle } from "./progress";
import { VisualLearning, type VisualResource } from "./visual-learning";
import { PracticeRichText } from "@/components/practice-rich-text";
import { convertMarkdownHref, githubSlug } from "@/lib/content-utils";
import { withMarkdownMath } from "@/lib/format-math";
import { getExercise } from "@/lib/code-playground/exercises";
import { parseFenceInfo } from "@/lib/code-playground/fence-meta";
import { parseKicker } from "@/lib/lesson-kickers";

type MarkdownNode = {
  type: string;
  lang?: string;
  value?: string;
  data?: { hName?: string; hProperties?: Record<string, string> };
  children?: MarkdownNode[];
};

function remarkPlaygroundMeta() {
  return (tree: MarkdownNode) => {
    const walk = (node: MarkdownNode) => {
      if (node.type === "code" && node.lang) {
        const info = parseFenceInfo(node.lang);
        node.lang = info.language;
        if (info.playgroundId) {
          node.data = node.data ?? {};
          node.data.hProperties = {
            ...(node.data.hProperties ?? {}),
            "data-playground": info.playgroundId,
            dataPlayground: info.playgroundId,
          };
        }
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}

function remarkSafeNamedAnchors() {
  return (tree: MarkdownNode) => {
    const walk = (node: MarkdownNode) => {
      if (node.type === "html" && node.value) {
        const match = /^\s*<a\s+id=["']([^"']+)["']\s*>(?:\s*<\/a>\s*)?$/i.exec(node.value);
        if (match) {
          node.type = "text";
          node.value = "\u200B";
          node.data = { hName: "span", hProperties: { id: match[1], "aria-hidden": "true" } };
          node.children = undefined;
        }
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}

function textContent(value: React.ReactNode): string {
  if (typeof value === "string" || typeof value === "number") return String(value);
  if (Array.isArray(value)) return value.map(textContent).join("");
  if (isValidElement<{ children?: React.ReactNode }>(value)) return textContent(value.props.children);
  return "";
}

function tidyDashes(value: string) {
  return value
    .replace(/[\u2013\u2014]/g, ", ")
    .replace(/\s{2,}/g, " ");
}

function memoryHeading(label: string): string | null {
  if (/^the stack\b/i.test(label)) return "The Stack";
  if (/^the heap\b/i.test(label)) return "The Heap";
  if (/^static/i.test(label)) return "Static & Global Memory";
  return null;
}

const KEYWORDS = /\b(compilers?|interpreters?|variables?|function calls?|recursive calls?|network requests?|electrical signals?|the stack|the heap|pointers?|process(?:es)?|CPU|bytecode|machine code|source code|runtime|loops?|stack overflow|Big O)\b/gi;

function emphasizeText(text: string): React.ReactNode {
  const cleaned = tidyDashes(text);
  const nodes: React.ReactNode[] = [];
  const pattern = new RegExp(KEYWORDS.source, "gi");
  let last = 0;
  let match: RegExpExecArray | null;
  let index = 0;
  while ((match = pattern.exec(cleaned))) {
    if (match.index > last) nodes.push(cleaned.slice(last, match.index));
    nodes.push(<strong key={`k-${index++}`}>{match[0]}</strong>);
    last = match.index + match[0].length;
  }
  if (last < cleaned.length) nodes.push(cleaned.slice(last));
  return nodes.length === 1 ? nodes[0] : nodes;
}

function classNamesOf(value: unknown) {
  if (!isValidElement<{ className?: string | string[] }>(value)) return "";
  const className = value.props.className;
  return Array.isArray(className) ? className.join(" ") : String(className ?? "");
}

function isMathNode(value: unknown) {
  return /\bkatex\b|\bmath-inline\b|\bmath-display\b/.test(classNamesOf(value));
}

function formatCopy(value: React.ReactNode): React.ReactNode {
  if (value == null || typeof value === "boolean") return value;
  if (typeof value === "string" || typeof value === "number") {
    const text = String(value);
    if (/\$|[OΘΩθω]\(|[A-Za-z0-9]\^[A-Za-z0-9]/.test(text)) {
      return <PracticeRichText text={tidyDashes(text)} />;
    }
    return emphasizeText(text);
  }
  if (Array.isArray(value)) {
    return value.map((child, index) => <React.Fragment key={index}>{formatCopy(child)}</React.Fragment>);
  }
  if (isValidElement<{ children?: React.ReactNode }>(value)) {
    if (isMathNode(value)) return value;
    if (value.type === "code") return value;
    if (value.type === "strong" || value.type === "a" || value.type === "em" || value.type === "i") {
      return cloneElement(value, undefined, formatCopy(value.props.children));
    }
    if (value.props.children == null) return value;
    return cloneElement(value, undefined, formatCopy(value.props.children));
  }
  return value;
}

function renderProse(value: React.ReactNode) {
  const text = tidyDashes(textContent(value)).replace(/^[:\s]+/, "").trim();
  if (!text) return null;
  const topics = text.split(/(?=\b(?:The stack|The heap)\b)/).map((item) => item.trim()).filter(Boolean);
  if (topics.length >= 2) {
    return (
      <ul className="ih-prose-list">
        {topics.map((item, index) => <li key={index}>{formatCopy(item)}</li>)}
      </ul>
    );
  }
  return <p>{formatCopy(value)}</p>;
}

function tidyNote(note?: string) {
  if (!note) return undefined;
  const cleaned = note.replace(/^[:\s-]+/, "").replace(/\s{2,}/g, " ").trim();
  if (!cleaned) return undefined;
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

function extractVisual(markdown: string): { markdown: string; resources: VisualResource[] } {
  const source = markdown.replace(/\r\n/g, "\n");
  const match = source.match(/\*\*SEE IT BEFORE YOU MEMORIZE IT\*\*[^\n]*\n+(?:[ \t]*[-*].+\n?)*/i);
  if (!match) return { markdown: source, resources: [] };
  const resources: VisualResource[] = [];
  for (const line of match[0].split("\n")) {
    const item = /^\s*[-*]\s+([^:]+):\s+\[([^\]]+)\]\(([^)]+)\)(?:\s*[-–—:]\s*(.+))?/.exec(line);
    if (!item) continue;
    resources.push({
      kind: item[1].trim(),
      title: item[2].trim(),
      href: item[3].trim(),
      note: tidyNote(item[4]),
    });
  }
  return { markdown: source.replace(match[0], "\n\n"), resources };
}

export function MarkdownDocument({ markdown, sourcePath, progressScope, embedYouTube = true }: { markdown: string; sourcePath: string; progressScope?: string; embedYouTube?: boolean }) {
  const Heading = (tag: "h1" | "h2" | "h3" | "h4") => {
    function MarkdownHeading({ children, id, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
      const text = textContent(children);
      const headingId = id ?? githubSlug(text);
      const phaseNumber = tag === "h1" ? /^PHASE\s+(\d+)\b/i.exec(text)?.[1] : undefined;
      const isTrackable = Boolean(progressScope && (/^PHASE\s+\d+/i.test(text) || /^(Practice|Phase Project|Git Checkpoint)/i.test(text)));
      return React.createElement(tag, { ...props, id: headingId }, <>{phaseNumber && <span id={`phase-${phaseNumber}`} aria-hidden="true" />}<span className="flex items-start gap-3"><a href={`#${headingId}`} className="min-w-0 flex-1 !text-inherit !no-underline">{children}</a>{isTrackable && <ProgressToggle id={`${progressScope}:${headingId}`} />}</span></>);
    }
    return MarkdownHeading;
  };

  const extracted = extractVisual(markdown);
  const resources = extracted.resources;
  const body = withMarkdownMath(extracted.markdown);
  let visualShown = false;
  let pendingVisual = false;

  function takeVisual() {
    if (visualShown) return null;
    if (resources.length === 0) return null;
    visualShown = true;
    pendingVisual = false;
    return <VisualLearning resources={resources} sourcePath={sourcePath} embedYouTube={embedYouTube} />;
  }

  const components: Components = {
    h1: Heading("h1"), h2: Heading("h2"), h3: Heading("h3"), h4: Heading("h4"),
    em({ children }) {
      return <>{formatCopy(children)}</>;
    },
    p({ children }) {
      const bits = Array.isArray(children) ? children : [children];
      const first = bits[0];
      if (isValidElement<{ children?: React.ReactNode }>(first) && first.type === "strong") {
        const label = textContent(first.props.children).trim();
        if (/^notes?:/i.test(label)) {
          return <div className="ih-note">{formatCopy(children)}</div>;
        }
        const kicker = parseKicker(label);
        if (kicker) {
          if (kicker.title === "Visual Learning" || kicker.title === "What Comes Next") return null;
          const rest = bits.slice(1);
          const restText = tidyDashes(textContent(rest)).replace(/^[:\s]+/, "").trim();
          if (kicker.kind === "interview") {
            if (restText) {
              return (
                <>
                  <h2 className="ih-lesson-kicker">{kicker.title}</h2>
                  {renderProse(rest)}
                  {takeVisual()}
                </>
              );
            }
            pendingVisual = !visualShown;
            return <h2 className="ih-lesson-kicker">{kicker.title}</h2>;
          }
          const before = pendingVisual ? takeVisual() : null;
          return (
            <>
              {before}
              <h2 className="ih-lesson-kicker">{kicker.title}</h2>
              {restText ? renderProse(rest) : null}
            </>
          );
        }
      }
      if (pendingVisual) {
        return (
          <>
            {renderProse(children)}
            {takeVisual()}
          </>
        );
      }
      return renderProse(children);
    },
    li({ children }) {
      const bits = Array.isArray(children) ? children : [children];
      const first = bits[0];
      if (isValidElement<{ children?: React.ReactNode }>(first) && first.type === "strong") {
        const heading = memoryHeading(textContent(first.props.children).trim());
        if (heading) {
          const rest = bits.slice(1);
          return (
            <li>
              <strong>{heading}:</strong> {textContent(rest).trim() ? formatCopy(rest) : null}
            </li>
          );
        }
      }
      return <li>{formatCopy(children)}</li>;
    },
    blockquote({ children }) {
      return <blockquote className="ih-quote">{formatCopy(children)}</blockquote>;
    },
    a({ href = "", children, ...props }) {
      const mapped = convertMarkdownHref(href, sourcePath);
      const external = /^https?:\/\//i.test(mapped);
      const download = mapped.startsWith("/downloads/");
      return (
        <a
          {...props}
          className="ih-md-link"
          href={mapped}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          download={download || undefined}
        >
          <span>{children}</span>
        </a>
      );
    },
    pre({ children }) {
      const child = Array.isArray(children) ? children[0] : children;
      if (!isValidElement<{ className?: string; children?: React.ReactNode; "data-playground"?: string; dataPlayground?: string }>(child)) return <pre>{children}</pre>;
      const className = child.props.className ?? "";
      const playgroundId =
        child.props["data-playground"]
        ?? child.props.dataPlayground
        ?? /(?:^|\s)playground=([\w-]+)/.exec(className)?.[1]
        ?? (/playground=([\w-]+)/.exec(className)?.[1]);
      const language = /(?:^|\s)language-([\w-]+)/.exec(className)?.[1]
        ?? className.split(/\s+/).find((name) => name && name !== "hljs" && !name.startsWith("playground="))
        ?? "text";
      const source = textContent(child.props.children).replace(/\n$/, "");
      if (playgroundId) {
        const exercise = getExercise(playgroundId);
        if (exercise) return <PlaygroundBlock exercise={exercise} mode="inline" />;
      }
      if (language === "mermaid") return <MermaidDiagram source={source} />;
      if (language === "text" || language === "plaintext") {
        const diagram = isVisualDiagram(source) ? <LessonDiagram source={source} /> : null;
        if (diagram) return diagram;
      }
      return <CodeBlock language={language} code={source} />;
    },
    hr() {
      if (!visualShown) return takeVisual();
      return null;
    },
    table({ children, ...props }) { return <div className="table-wrap" role="region" aria-label="Scrollable table" tabIndex={0}><table {...props}>{children}</table></div>; },
  };

  return (
    <article className="markdown-body">
      <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm, remarkSafeNamedAnchors, remarkPlaygroundMeta]} rehypePlugins={[rehypeSlug, rehypeKatex, rehypeHighlight]} components={components} skipHtml>{body}</ReactMarkdown>
      {takeVisual()}
    </article>
  );
}
