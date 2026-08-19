import React, { cloneElement, isValidElement } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { AppIcon } from "@/components/icons/app-icon";
import { CodeBlock } from "./code-block";
import { LessonVideo } from "./lesson-video";
import { MermaidDiagram } from "./mermaid-diagram";
import { ProgressToggle } from "./progress";
import { convertMarkdownHref, extractYouTubeInfo, githubSlug } from "@/lib/content-utils";
import type { VideoResource } from "@/lib/learning-model";

type MarkdownNode = { type: string; value?: string; data?: { hName?: string; hProperties?: Record<string, string> }; children?: MarkdownNode[] };

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
    .replace(/\s+-\s+/g, ": ")
    .replace(/^\s*-\s+/, "")
    .replace(/\s{2,}/g, " ");
}

function sentenceCase(value: string) {
  const lower = value.toLowerCase();
  return lower.replace(/^[a-z]/, (letter) => letter.toUpperCase());
}

const KICKER_TITLES: Array<[RegExp, string]> = [
  [/why you are learning this/i, "Why You Need to Learn This"],
  [/the problem this solves/i, "The Problem"],
  [/the main idea/i, "The Solution"],
  [/step-by-step explanation/i, "How the Solution Works"],
  [/compiler vs interpreter/i, "Compiler vs Interpreter"],
  [/internal working/i, "How Code Becomes Machine Code"],
  [/where a variable actually lives/i, "How a Program Uses Memory"],
  [/see it before you memorize/i, "Visual Explanation"],
  [/^diagram\b/i, "Visual Explanation"],
  [/how it works internally/i, "How It Works Internally"],
  [/picture it like this/i, "Simple Real-World Analogy"],
  [/what you gain/i, "Trade-offs & Limitations"],
  [/small working example/i, "Working Example"],
  [/try it yourself/i, "Try It Yourself"],
  [/how to explain this in an interview/i, "Interview Preparation"],
  [/practice until it feels familiar/i, "Practice Exercises"],
  [/^practice\b/i, "Practice Exercises"],
  [/why the next topic is needed/i, "What Comes Next"],
];

function parseKicker(label: string): { title: string; kind: "interview" | "section" } | null {
  const cleaned = label.replace(/:$/, "").trim();
  if (/^notes?$/i.test(cleaned)) return null;
  const [lead] = cleaned.split(/\s+[-–—]\s+/, 2);
  for (const [pattern, title] of KICKER_TITLES) {
    if (pattern.test(cleaned) || pattern.test(lead)) {
      return { title, kind: /interview/i.test(title) ? "interview" : "section" };
    }
  }
  const letters = lead.replace(/[^A-Za-z]/g, "");
  if (letters.length < 8) return null;
  const upperRatio = letters.replace(/[^A-Z]/g, "").length / letters.length;
  if (upperRatio < 0.8) return null;
  return { title: sentenceCase(lead), kind: "section" };
}

function memoryHeading(label: string): string | null {
  if (/^the stack\b/i.test(label)) return "The Stack";
  if (/^the heap\b/i.test(label)) return "The Heap";
  if (/^static/i.test(label)) return "Static & Global Memory";
  return null;
}

const KEYWORDS = /\b(compilers?|interpreters?|variables?|function calls?|recursive calls?|network requests?|electrical signals?|the stack|the heap|pointers?|processes?|CPU|bytecode|machine code|source code|runtime|loops?|stack overflow|Big O)\b/gi;

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

function formatCopy(value: React.ReactNode): React.ReactNode {
  if (value == null || typeof value === "boolean") return value;
  if (typeof value === "string" || typeof value === "number") return emphasizeText(String(value));
  if (Array.isArray(value)) {
    return value.map((child, index) => <React.Fragment key={index}>{formatCopy(child)}</React.Fragment>);
  }
  if (isValidElement<{ children?: React.ReactNode }>(value)) {
    if (value.type === "strong" || value.type === "code" || value.type === "a") return value;
    if (value.type === "em" || value.type === "i") return formatCopy(value.props.children);
    if (value.props.children == null) return value;
    return cloneElement(value, undefined, formatCopy(value.props.children));
  }
  return value;
}

function firstLessonVideo(markdown: string): VideoResource | null {
  const match = markdown.match(/\[([^\]]+)\]\((https?:\/\/(?:www\.)?(?:youtube\.com\/(?:watch\?[^)\s]+|playlist\?[^)\s]+)|youtu\.be\/[^)\s]+))\)/i);
  if (!match) return null;
  const info = extractYouTubeInfo(match[2]);
  if (!info?.videoId && info?.kind !== "playlist") return null;
  if (!info) return null;
  return { href: match[2], title: match[1], info };
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

  const featured = embedYouTube ? firstLessonVideo(markdown) : null;
  let usedPlayer = false;
  let pendingInterviewVideo = false;

  function takeVideo() {
    if (!featured || usedPlayer) return null;
    usedPlayer = true;
    pendingInterviewVideo = false;
    return <LessonVideo videos={[featured]} />;
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
          const rest = bits.slice(1);
          const restText = tidyDashes(textContent(rest)).replace(/^[:\s]+/, "").trim();
          if (kicker.kind === "interview") {
            if (restText) {
              return (
                <>
                  <h2 className="ih-lesson-kicker">{kicker.title}</h2>
                  <p>{formatCopy(rest)}</p>
                  {takeVideo()}
                </>
              );
            }
            pendingInterviewVideo = Boolean(featured && !usedPlayer);
            return <h2 className="ih-lesson-kicker">{kicker.title}</h2>;
          }
          const before = pendingInterviewVideo ? takeVideo() : null;
          return (
            <>
              {before}
              <h2 className="ih-lesson-kicker">{kicker.title}</h2>
              {restText ? <p>{formatCopy(rest)}</p> : null}
            </>
          );
        }
      }
      if (pendingInterviewVideo) {
        return (
          <>
            <p>{formatCopy(children)}</p>
            {takeVideo()}
          </>
        );
      }
      return <p>{formatCopy(children)}</p>;
    },
    li({ children }) {
      const bits = Array.isArray(children) ? children : [children];
      const first = bits[0];
      if (isValidElement<{ children?: React.ReactNode }>(first) && first.type === "strong") {
        const heading = memoryHeading(textContent(first.props.children).trim());
        if (heading) {
          const rest = bits.slice(1);
          return (
            <li className="ih-memory-item">
              <h3 className="ih-lesson-sub">{heading}</h3>
              {textContent(rest).trim() ? <p>{formatCopy(rest)}</p> : null}
            </li>
          );
        }
      }
      return <li>{formatCopy(children)}</li>;
    },
    blockquote({ children }) {
      return <div className="ih-note">{formatCopy(children)}</div>;
    },
    a({ href = "", children, ...props }) {
      const mapped = convertMarkdownHref(href, sourcePath);
      const external = /^https?:\/\//i.test(mapped);
      const download = mapped.startsWith("/downloads/");
      return <a {...props} href={mapped} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{children}{external && <AppIcon name="externalLink" size={12} className="ml-1" />}{download && <AppIcon name="download" size={12} className="ml-1" />}</a>;
    },
    pre({ children }) {
      const child = Array.isArray(children) ? children[0] : children;
      if (!isValidElement<{ className?: string; children?: React.ReactNode }>(child)) return <pre>{children}</pre>;
      const className = child.props.className ?? "";
      const language = /(?:^|\s)language-([\w-]+)/.exec(className)?.[1]
        ?? className.split(/\s+/).find((name) => name && name !== "hljs")
        ?? "text";
      const source = textContent(child.props.children).replace(/\n$/, "");
      if (language === "mermaid") return <MermaidDiagram source={source} />;
      return <CodeBlock language={language} code={source} />;
    },
    table({ children, ...props }) { return <div className="table-wrap" role="region" aria-label="Scrollable table" tabIndex={0}><table {...props}>{children}</table></div>; },
  };

  return (
    <article className="markdown-body">
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath, remarkSafeNamedAnchors]} rehypePlugins={[rehypeSlug, rehypeKatex, rehypeHighlight]} components={components} skipHtml>{markdown}</ReactMarkdown>
    </article>
  );
}
