import React, { isValidElement } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { ExternalLink } from "lucide-react";
import { CodeBlock } from "./code-block";
import { MermaidDiagram } from "./mermaid-diagram";
import { ProgressToggle } from "./progress";
import { YouTubeCard } from "./youtube-card";
import { convertMarkdownHref, extractYouTubeInfo, githubSlug } from "@/lib/content-utils";

type MarkdownNode = { type: string; value?: string; data?: { hName?: string; hProperties?: Record<string, string> }; children?: MarkdownNode[] };

function remarkSafeNamedAnchors() {
  return (tree: MarkdownNode) => {
    const walk = (node: MarkdownNode) => {
      if (node.type === "html" && node.value) {
        const match = /^\s*<a\s+id=["']([^"']+)["']\s*><\/a>\s*$/i.exec(node.value);
        if (match) {
          node.type = "paragraph";
          node.value = undefined;
          node.data = { hName: "span", hProperties: { id: match[1], "aria-hidden": "true" } };
          node.children = [];
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

export function MarkdownDocument({ markdown, progressScope }: { markdown: string; progressScope?: string }) {
  const Heading = (tag: "h1" | "h2" | "h3" | "h4") => {
    function MarkdownHeading({ children, id, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
      const text = textContent(children);
      const headingId = id ?? githubSlug(text);
      const isTrackable = Boolean(progressScope && (/^PHASE\s+\d+/i.test(text) || /^(Practice|Phase Project|Git Checkpoint)/i.test(text)));
      return React.createElement(tag, { ...props, id: headingId }, <span className="flex items-start gap-3"><a href={`#${headingId}`} className="min-w-0 flex-1 !text-inherit !no-underline">{children}</a>{isTrackable && <ProgressToggle id={`${progressScope}:${headingId}`} />}</span>);
    }
    return MarkdownHeading;
  };

  const components: Components = {
    h1: Heading("h1"), h2: Heading("h2"), h3: Heading("h3"), h4: Heading("h4"),
    a({ href = "", children, ...props }) {
      const info = extractYouTubeInfo(href);
      const label = textContent(children) || "YouTube resource";
      if (info) return <YouTubeCard href={href} label={label} info={info} />;
      const mapped = convertMarkdownHref(href);
      const external = /^https?:\/\//i.test(mapped);
      return <a {...props} href={mapped} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{children}{external && <ExternalLink className="ml-1 inline" size={12} aria-hidden="true" />}</a>;
    },
    pre({ children }) {
      const child = Array.isArray(children) ? children[0] : children;
      if (!isValidElement<{ className?: string; children?: React.ReactNode }>(child)) return <pre>{children}</pre>;
      const language = child.props.className?.replace("language-", "") ?? "text";
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
