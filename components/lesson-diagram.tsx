function compact(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function parseFlow(source: string) {
  const match = source.match(/^(.*?)\s+--\(([^)]+)\)-->\s+([\s\S]+)$/m);
  if (!match) return null;
  const from = compact(match[1]);
  const via = compact(match[2]);
  const parts = match[3]
    .split("\n")
    .map((line) => compact(line))
    .filter((line) => line && !/^[|v^]+$/.test(line));
  if (!from || !via || parts.length === 0) return null;
  return { from, via, to: parts[0], after: parts.slice(1).join(" ") };
}

function parseMemoryLayout(source: string) {
  if (!/HIGH ADDRESSES/i.test(source) || !/\bSTACK\b/i.test(source) || !/\bHEAP\b/i.test(source)) return null;
  const frames = [...source.matchAll(/frame:\s*([A-Za-z_][\w().]*)(?:\s*<--\s*SP)?/gi)].map((item) => ({
    label: compact(item[1]),
    sp: /<--\s*SP/i.test(item[0]),
  }));
  return { frames: frames.length ? frames : [{ label: "main()", sp: false }, { label: "factorial(4)", sp: false }, { label: "factorial(3)", sp: true }] };
}

function parseCompilerSteps(via: string) {
  const body = via.replace(/^compiler:\s*/i, "");
  const steps = body.split(/,|\/|&/).map(compact).filter(Boolean);
  return steps.length ? steps : [via];
}

function FlowDiagram({ from, via, to, after }: { from: string; via: string; to: string; after?: string }) {
  const compiler = /^compiler\b/i.test(via);
  const steps = parseCompilerSteps(via);
  return (
    <div className="ih-pipe">
      <div className="ih-pipe-track">
        <figure className="ih-pipe-card is-source">
          <span className="ih-pipe-kicker">Source</span>
          <strong className="ih-pipe-file">{from}</strong>
          <span className="ih-pipe-hint">Text you write</span>
        </figure>
        <span className="ih-pipe-join" aria-hidden="true" />
        <div className={`ih-pipe-compiler${compiler ? "" : " is-plain"}`}>
          <span className="ih-pipe-kicker">{compiler ? "Compiler" : "Translate"}</span>
          <div className="ih-pipe-steps">
            {steps.map((step, index) => (
              <span key={step} className="ih-pipe-step">
                <b>{index + 1}</b>
                {step}
              </span>
            ))}
          </div>
        </div>
        <span className="ih-pipe-join" aria-hidden="true" />
        <figure className="ih-pipe-card is-binary">
          <span className="ih-pipe-kicker">Output</span>
          <strong>{to}</strong>
          <span className="ih-pipe-hint">Ready for the CPU</span>
        </figure>
        {after ? (
          <>
            <span className="ih-pipe-join" aria-hidden="true" />
            <figure className="ih-pipe-card is-cpu">
              <span className="ih-pipe-kicker">Run</span>
              <span className="ih-pipe-title">CPU</span>
              <span className="ih-pipe-hint">{after}</span>
            </figure>
          </>
        ) : null}
      </div>
    </div>
  );
}

function MemoryNote({ items }: { items: string[] }) {
  return (
    <ul className="ih-mem-notes">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function MemoryLayoutDiagram({ frames }: { frames: { label: string; sp: boolean }[] }) {
  return (
    <div className="ih-mem-stack">
      <p className="ih-mem-stack-edge">High addresses</p>
      <div className="ih-mem-stack-shell">
        <div className="ih-mem-row is-stack">
          <div className="ih-mem-row-visual">
            <header className="ih-mem-band-head">
              <strong>Stack</strong>
              <span>grows downward as calls are made</span>
            </header>
            <div className="ih-mem-frames">
              {frames.map((frame) => (
                <div key={frame.label} className={`ih-mem-frame${frame.sp ? " is-sp" : ""}`}>
                  <span>frame: {frame.label}</span>
                  {frame.sp ? <em>SP</em> : null}
                </div>
              ))}
            </div>
          </div>
          <MemoryNote
            items={[
              "local variables, function call frames",
              "lifetime: exactly one function call",
              "cost: nearly free (bump a pointer)",
              "limit: fixed size, stack overflow",
            ]}
          />
        </div>

        <div className="ih-mem-band-gap">
          <span className="ih-mem-band-gap-arrow" aria-hidden="true">↓</span>
          <span>(unused gap between them)</span>
          <span className="ih-mem-band-gap-arrow" aria-hidden="true">↑</span>
        </div>

        <div className="ih-mem-row is-heap">
          <div className="ih-mem-row-visual">
            <header className="ih-mem-band-head">
              <strong>Heap</strong>
              <span>grows upward as memory is asked for</span>
            </header>
            <div className="ih-mem-nodes">
              <span>node</span>
              <i aria-hidden="true">→</i>
              <span>node</span>
              <i aria-hidden="true">→</i>
              <span>node</span>
            </div>
          </div>
          <MemoryNote
            items={[
              "data whose size/lifetime is unknown until runtime",
              "linked list nodes, large buffers, objects",
              "cost: real bookkeeping per allocation",
              "limit: leaks if never freed",
            ]}
          />
        </div>

        <div className="ih-mem-row is-static">
          <div className="ih-mem-row-visual">
            <header className="ih-mem-band-head">
              <strong>Static / Global storage</strong>
            </header>
          </div>
          <MemoryNote items={["globals, string literals", "lifetime: the whole program"]} />
        </div>

        <div className="ih-mem-row is-text">
          <div className="ih-mem-row-visual">
            <header className="ih-mem-band-head">
              <strong>Instruction segment (.text)</strong>
            </header>
          </div>
          <MemoryNote items={["the compiled machine code itself", "read-only while running"]} />
        </div>
      </div>
      <p className="ih-mem-stack-edge">Low addresses</p>
    </div>
  );
}

export function LessonDiagram({ source }: { source: string }) {
  const memory = parseMemoryLayout(source);
  if (memory) {
    return (
      <div className="ih-example ih-diagram ih-diagram-only">
        <MemoryLayoutDiagram frames={memory.frames} />
      </div>
    );
  }
  const flow = parseFlow(source);
  if (flow) {
    return (
      <div className="ih-example ih-diagram ih-diagram-only">
        <FlowDiagram {...flow} />
      </div>
    );
  }
  return null;
}

export function isVisualDiagram(source: string) {
  return Boolean(parseMemoryLayout(source) || parseFlow(source));
}
