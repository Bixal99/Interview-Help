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
import { extractSeeItResources } from "@/lib/learning-resources/extract-inline";
import { learningResourceToVisual } from "@/lib/learning-resources/normalize";

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

function classNamesOf(value: unknown) {
  if (!isValidElement<{ className?: string | string[] }>(value)) return "";
  const className = value.props.className;
  return Array.isArray(className) ? className.join(" ") : String(className ?? "");
}

function isMathNode(value: unknown) {
  return /\bkatex\b|\bmath-inline\b|\bmath-display\b/.test(classNamesOf(value));
}

/**
 * Format inline copy: handle math expressions via PracticeRichText,
 * but otherwise pass through content literally as authored.
 */
function formatCopy(value: React.ReactNode): React.ReactNode {
  if (value == null || typeof value === "boolean") return value;
  if (typeof value === "string" || typeof value === "number") {
    const text = String(value);
    if (/\$|[OΘΩθω]\(|[A-Za-z0-9]\^[A-Za-z0-9]/.test(text)) {
      return <PracticeRichText text={text} />;
    }
    return text;
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

type DocSegment =
  | { kind: "markdown"; text: string }
  | { kind: "visual"; heading: string; resources: VisualResource[] };

function segmentMarkdown(markdown: string): DocSegment[] {
  const source = markdown.replace(/\r\n/g, "\n");
  const segments: DocSegment[] = [];
  const regex = /(?:^|\n)(\*\*(?:SEE IT BEFORE YOU MEMORIZE IT|LEARNING RESOURCES:?)\*\*[^\n]*)\n+((?:(?:[ \t]*[-*]\s+.+\n*)|(?:\|.+\n*))+)/gi;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(source)) !== null) {
    const matchStart = match.index + (match[0].startsWith("\n") ? 1 : 0);
    if (matchStart > lastIndex) {
      const prevText = source.slice(lastIndex, matchStart).trim();
      if (prevText) {
        segments.push({ kind: "markdown", text: prevText });
      }
    }
    const headingRaw = match[1].replace(/\*/g, "").replace(/:$/, "").trim();
    const fullBlock = match[0].trim();
    const resources = extractSeeItResources(fullBlock);
    if (resources.length > 0) {
      segments.push({
        kind: "visual",
        heading: headingRaw,
        resources: resources.map(learningResourceToVisual),
      });
    } else {
      segments.push({ kind: "markdown", text: fullBlock });
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < source.length) {
    const remainingText = source.slice(lastIndex).trim();
    if (remainingText) {
      segments.push({ kind: "markdown", text: remainingText });
    }
  }

  if (segments.length === 0) {
    segments.push({ kind: "markdown", text: source });
  }

  return segments;
}

export function MarkdownDocument({ markdown, sourcePath, progressScope, embedYouTube = true }: { markdown: string; sourcePath: string; progressScope?: string; embedYouTube?: boolean }) {
  const Heading = (tag: "h1" | "h2" | "h3" | "h4") => {
    function MarkdownHeading({ children, id, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
      const text = textContent(children);
      const headingId = id ?? githubSlug(text);
      const phaseNumber = tag === "h1" ? /^(?:PHASE|CHAPTER)\s+(\d+)\b/i.exec(text)?.[1] : undefined;
      const isTrackable = Boolean(progressScope && (/^(?:PHASE|CHAPTER)\s+\d+/i.test(text) || /^(Practice|Phase Project|Chapter Project|Git Checkpoint)/i.test(text)));
      return React.createElement(tag, { ...props, id: headingId }, <>{phaseNumber && <span id={`phase-${phaseNumber}`} aria-hidden="true" />}<span className="flex items-start gap-3"><a href={`#${headingId}`} className="min-w-0 flex-1 !text-inherit !no-underline">{children}</a>{isTrackable && <ProgressToggle id={`${progressScope}:${headingId}`} />}</span></>);
    }
    return MarkdownHeading;
  };

  const components: Components = {
    h1: Heading("h1"), h2: Heading("h2"), h3: Heading("h3"), h4: Heading("h4"),
    ul({ children }) {
      return <ul>{children}</ul>;
    },
    ol({ children }) {
      return <ol>{children}</ol>;
    },
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
        const isAllUppercase = /^[A-Z0-9\s—–\-,"'/?!]{3,}:?$/.test(label);
        const isSpecialKicker = /^(?:Key words|Practice|CHAPTER OPENING|WHAT COMPUTERS|HOW TO|TRY IT|CLOSING|WHAT THIS UNLOCKS|CHAPTER ROADMAP|WHAT WE LEARNED|WHAT YOU SHOULD|KNOWLEDGE CHECK|PROGRESSIVE PRACTICE|PRACTICE UNTIL|STEP-BY-STEP)/i.test(label);
        const isHeadingLabel = (isAllUppercase || isSpecialKicker) && (label.endsWith(":") || bits.length === 1);

        if (isHeadingLabel && label.length >= 3) {
          const cleanLabel = label.replace(/:$/, "").trim();
          const rest = bits.slice(1);
          const restText = textContent(rest).trim();
          return (
            <>
              <h2 className="ih-lesson-kicker">{cleanLabel}</h2>
              {restText ? <p>{formatCopy(rest)}</p> : null}
            </>
          );
        }
      }
      return <p>{formatCopy(children)}</p>;
    },
    li({ children }) {
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
      return <hr />;
    },
    table({ children, ...props }) { return <div className="table-wrap" role="region" aria-label="Scrollable table" tabIndex={0}><table {...props}>{children}</table></div>; },
  };

  const segments = segmentMarkdown(markdown);

  return (
    <article className="markdown-body">
      {segments.map((segment, index) => {
        if (segment.kind === "visual") {
          return (
            <VisualLearning
              key={index}
              resources={segment.resources}
              sourcePath={sourcePath}
              heading={segment.heading}
              embedYouTube={embedYouTube}
            />
          );
        }
        const body = withMarkdownMath(segment.text);
        return (
          <ReactMarkdown
            key={index}
            remarkPlugins={[remarkMath, remarkGfm, remarkSafeNamedAnchors, remarkPlaygroundMeta]}
            rehypePlugins={[rehypeSlug, rehypeKatex, rehypeHighlight]}
            components={components}
            skipHtml
          >
            {body}
          </ReactMarkdown>
        );
      })}
    </article>
  );
}
