"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AppIcon } from "@/components/icons/app-icon";
import { ICON_SIZE } from "@/lib/icons";

export function MermaidDiagram({ source }: { source: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId().replace(/:/g, "");
  const [error, setError] = useState(false);
  const [showSource, setShowSource] = useState(false);
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
      } catch { setError(true); }
    }, { rootMargin: "300px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, [id, source]);
  return (
    <div className="my-6 overflow-hidden rounded-xl border hairline surface not-prose">
      <div className="flex items-center border-b hairline px-3 py-2 text-xs text-muted"><span>Diagram</span><button onClick={() => setShowSource(!showSource)} className="ml-auto inline-flex min-h-10 items-center gap-1.5 rounded-md px-2 py-1 hover:bg-ink/5"><AppIcon name="code" size={13} /> Source</button><button onClick={() => ref.current?.requestFullscreen()} className="grid size-10 place-items-center rounded-md hover:bg-ink/5" aria-label="View diagram fullscreen"><AppIcon name="fullscreen" size={ICON_SIZE.compact} /></button></div>
      {showSource ? <pre className="overflow-auto p-4 font-mono text-xs whitespace-pre">{source}</pre> : <div ref={ref} className="grid min-h-44 place-items-center overflow-auto p-5 text-xs text-muted">{error ? <><span>Diagram could not render. Use “Source” to view the original Mermaid.</span></> : "Loading diagram…"}</div>}
    </div>
  );
}
