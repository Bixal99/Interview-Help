"use client";

import { useEffect, useId, useRef, useState } from "react";
import { mermaidFigureTitle } from "@/lib/mermaid-caption";

export function MermaidDiagram({ source, figure }: { source: string; figure?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId().replace(/:/g, "");
  const [error, setError] = useState(false);
  const title = mermaidFigureTitle(source);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(async ([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({ startOnLoad: false, securityLevel: "strict", theme: "neutral", fontFamily: "Poppins" });
        const { svg } = await mermaid.render(`diagram-${id}`, source);
        node.innerHTML = svg;
      } catch {
        setError(true);
      }
    }, { rootMargin: "300px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, [id, source]);

  return (
    <figure className="ih-mermaid-figure">
      <div ref={ref} className="ih-mermaid-canvas">
        {error ? "Diagram could not render." : "Loading diagram…"}
      </div>
      <figcaption>
        {figure ? <strong>Fig {figure}.</strong> : null}
        {figure ? " " : null}
        <span>{title}</span>
      </figcaption>
    </figure>
  );
}
