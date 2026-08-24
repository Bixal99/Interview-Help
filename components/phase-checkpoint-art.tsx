import type { ReactNode } from "react";
import { CheckpointControl } from "@/components/checkpoint-control";
import { CheckpointFunctions } from "@/components/checkpoint-functions";
import { CheckpointRun } from "@/components/checkpoint-run";
import { CheckpointTerminal } from "@/components/checkpoint-terminal";
import { ComplexityArt } from "@/components/complexity-art";
import { WhatIsArt } from "@/components/what-is-art";

import { BinaryArt } from "./checkpoint-arts/binary-art";
import { CircuitArt } from "./checkpoint-arts/circuit-art";
import { CollectionsArt } from "./checkpoint-arts/collections-art";
import { ConsolidationArt } from "./checkpoint-arts/consolidation-art";
import { DatabaseArt } from "./checkpoint-arts/database-art";
import { DebuggingArt } from "./checkpoint-arts/debugging-art";
import { ErrorsArt } from "./checkpoint-arts/errors-art";
import { GraphArt } from "./checkpoint-arts/graph-art";
import { HardwareCpuArt } from "./checkpoint-arts/hardware-cpu-art";
import { HashArt } from "./checkpoint-arts/hash-art";
import { MathDiscreteArt } from "./checkpoint-arts/math-discrete-art";
import { MemoryArt } from "./checkpoint-arts/memory-art";
import { ModulesArt } from "./checkpoint-arts/modules-art";
import { NetworkArt } from "./checkpoint-arts/network-art";
import { OdooApiArt } from "./checkpoint-arts/odoo-api-art";
import { OdooDevopsArt } from "./checkpoint-arts/odoo-devops-art";
import { OdooErpArt } from "./checkpoint-arts/odoo-erp-art";
import { OdooOrmArt } from "./checkpoint-arts/odoo-orm-art";
import { OdooOwlArt } from "./checkpoint-arts/odoo-owl-art";
import { OdooSecurityArt } from "./checkpoint-arts/odoo-security-art";
import { OdooViewsArt } from "./checkpoint-arts/odoo-views-art";
import { OopDeepArt } from "./checkpoint-arts/oop-deep-art";
import { OsArt } from "./checkpoint-arts/os-art";
import { SecurityArt } from "./checkpoint-arts/security-art";
import { SortingArt } from "./checkpoint-arts/sorting-art";
import { StringsFilesArt } from "./checkpoint-arts/strings-files-art";
import { SystemArt } from "./checkpoint-arts/system-art";
import { TreeArt } from "./checkpoint-arts/tree-art";
import { VariablesArt } from "./checkpoint-arts/variables-art";

type ArtKind =
  | "what-is"
  | "terminal"
  | "run"
  | "complexity"
  | "binary"
  | "circuit"
  | "hardware"
  | "variables"
  | "control"
  | "functions"
  | "collections"
  | "strings-files"
  | "errors"
  | "debugging"
  | "modules"
  | "consolidation"
  | "math-discrete"
  | "oop-deep"
  | "memory"
  | "graph"
  | "tree"
  | "hash"
  | "recursion"
  | "sorting"
  | "os"
  | "network"
  | "database"
  | "security"
  | "system"
  | "testing"
  | "odoo-erp"
  | "odoo-orm"
  | "odoo-views"
  | "odoo-security"
  | "odoo-owl"
  | "odoo-api"
  | "odoo-devops"
  | "default";

function checkpointArtKind(title: string, phaseNumber?: string, courseSlug?: string): ArtKind {
  const text = title.toLowerCase();
  const num = phaseNumber ? parseInt(phaseNumber, 10) : 0;

  // 1. Odoo-specific Course Routing
  if (courseSlug === "odoo" || /odoo|erp|addon|manifest|recordset/.test(text)) {
    if (num >= 53 && num <= 58) return "odoo-owl";
    if (num >= 44 && num <= 52) return "odoo-api";
    if ((num >= 73 && num <= 88) || (num >= 91 && num <= 95) || num === 8) return "odoo-devops";
    if ((num >= 22 && num <= 26) || (num >= 40 && num <= 43)) return "odoo-views";
    if (num >= 27 && num <= 31) return "odoo-security";
    if ((num >= 1 && num <= 3) || num === 89 || (num >= 36 && num <= 39)) return "odoo-erp";
    if (num === 72 || num === 5) return "terminal";
    if (num >= 60 && num <= 65) return "database";
    if (num >= 66 && num <= 71) return "testing";
    if (/owl|frontend|client action|component|widget|dashboard/.test(text)) return "odoo-owl";
    if (/api|controller|webhook|json-rpc|xml-rpc|rest|auth/.test(text)) return "odoo-api";
    if (/docker|deployment|nginx|pgbouncer|backup|upgrade|migration|ci|pipeline|operations|monitoring/.test(text)) return "odoo-devops";
    if (/view|kanban|form|search|tree|qweb|report/.test(text)) return "odoo-views";
    if (/security|rule|acl|access|company|multi-company/.test(text)) return "odoo-security";
    if (/business|flow|order|sale|purchase|inventory|invoice|accounting|crm|partner/.test(text)) return "odoo-erp";
    return "odoo-orm";
  }

  // 2. Computer Science Course Exact Chapter Mapping
  if (courseSlug === "computer-science" || !courseSlug) {
    if (num === 1 || /what is computer science|^what is cs\b/.test(text)) return "what-is";
    if (num === 2 || /represent information|binary|bit|byte|ascii|hex|number base|encoding|float/.test(text)) return "binary";
    if (num === 3 || /\blogic\b|digital computation|logic gate|gate|boolean/.test(text)) return "circuit";
    if (num === 4 || /computer hardware|inside the cpu|alu|cpu architecture|registers/.test(text)) return "hardware";
    if (num === 5 || /from source code|how programs run|source.*running program|compiler.*interpreter|runtime/.test(text)) return "run";
    if (num === 6 || /development environment|terminal|shell|cli|command line/.test(text)) return "terminal";
    if (num === 7 || /variables, values & types|type system/.test(text)) return "variables";
    if (num === 8 || /control flow|conditionals|decision/.test(text)) return "control";
    if (num === 9 || /functions & scope|call stack/.test(text)) return "functions";
    if (num === 10 || /collections\b|arrays & collections/.test(text)) return "collections";
    if (num === 11 || /strings & files/.test(text)) return "strings-files";
    if (num === 12 || /errors & defensive/.test(text)) return "errors";
    if (num === 13 || /debugging/.test(text)) return "debugging";
    if (num === 14 || /modules, packages/.test(text)) return "modules";
    if (num === 15 || /programming consolidation/.test(text)) return "consolidation";
    if ((num >= 16 && num <= 20) || /discrete math|proof|probability|statistics|linear algebra|calculus/.test(text)) return "math-discrete";
    if ((num >= 21 && num <= 30) || /object thinking|class|object|encapsul|inherit|polymorph|composit|solid|pattern|oop|low-level design/.test(text)) return "oop-deep";
    if (num === 31 || /complexity analysis|big o/.test(text)) return "complexity";
    if (num >= 32 && num <= 34 || /arrays|linked list|stack|queue/.test(text)) return "collections";
    if (num === 35 || /recursion/.test(text)) return "recursion";
    if (num === 36 || /hashing|hash table/.test(text)) return "hash";
    if (num >= 37 && num <= 38 || /\btrees?\b|heaps?|priority queue|\bbst\b/.test(text)) return "tree";
    if (num >= 39 && num <= 40 || /sorting|searching|binary search/.test(text)) return "sorting";
    if (num === 41 || /\bgraphs?\b|bfs|dfs|shortest path|dijkstra/.test(text)) return "graph";
    if (num >= 42 && num <= 48 || /algorithmic patterns|greedy|backtrack|dynamic programming|lru cache/.test(text)) return "complexity";
    if (num >= 49 && num <= 50 || /memory|pointer|address|virtual address/.test(text)) return "memory";
    if (num >= 51 && num <= 54 || /operating systems|concurrency|mutex|syscall|systems programming/.test(text)) return "os";
    if (num >= 55 && num <= 59 || /networking|tcp|udp|sockets|dns|http|api design/.test(text)) return "network";
    if (num >= 60 && num <= 65 || /database|sql|data modeling|internals|transactions|acid/.test(text)) return "database";
    if (num >= 66 && num <= 69 || /security|cryptography|auth|jwt|owasp/.test(text)) return "security";
    if (num >= 70 && num <= 71 || /human-computer|graphics/.test(text)) return "what-is";
    if (num >= 72 && num <= 80 || /git|requirements|testing|ci\/cd|containers|docker|cloud|observability/.test(text)) return "testing";
    if (num >= 81 && num <= 88 || /system design|scaling|caching|distributed|consensus|raft/.test(text)) return "system";
    if (num >= 89 && num <= 91 || /artificial intelligence|ethics/.test(text)) return "complexity";
    if (num >= 92 && num <= 105 || /capstone|interview|mock/.test(text)) return "testing";
  }

  // 3. Fallbacks
  if (/variables, values & types|type system/.test(text)) return "variables";
  if (/functions & scope|call stack/.test(text)) return "functions";
  if (/strings & files/.test(text)) return "strings-files";
  if (/errors & defensive/.test(text)) return "errors";
  if (/debugging/.test(text)) return "debugging";
  if (/modules, packages/.test(text)) return "modules";
  if (/collections|arrays|buffer/.test(text)) return "collections";
  if (/control flow|conditionals|decision|loops/.test(text)) return "control";
  if (/hardware|cpu architecture|alu/.test(text)) return "hardware";
  if (/logic gate|boolean|circuit|transistor|\blogic\b/.test(text)) return "circuit";
  if (/represent information|binary|bit|byte|ascii|hex|number base|encoding|float/.test(text)) return "binary";
  if (/how programs run|source, interpreter/.test(text)) return "run";

  return "binary";
}

function Frame({
  children,
  label,
  className,
  caption,
  viewBox = "0 0 360 260",
  accent = true,
}: {
  children: ReactNode;
  label: string;
  className?: string;
  caption?: string;
  viewBox?: string;
  accent?: boolean;
}) {
  const [minX, minY, width, height] = viewBox.split(" ").map(Number);
  return (
    <div className="ih-checkpoint-art">
      <svg viewBox={viewBox} role="img" aria-label={label} className={className}>
        <rect x={minX} y={minY} width={width} height={height} fill="#E7E9EB" />
        {accent ? <rect x={minX} y={minY} width={10} height={height} fill="#04AA6D" /> : null}
        {children}
      </svg>
      {caption ? <p className="ih-checkpoint-art-caption">{caption}</p> : null}
    </div>
  );
}

function TerminalArt({ title }: { title: string }) {
  return <CheckpointTerminal title={title} />;
}

function RecursionArt() {
  return (
    <Frame label="Stacked function frames" caption="Recursive call stack execution">
      <rect x={70} y={48} width={220} height={48} fill="#96D4FA" />
      <rect x={88} y={104} width={184} height={48} fill="#FFF4A3" />
      <rect x={106} y={160} width={148} height={48} fill="#04AA6D" />
      <text x={180} y={78} textAnchor="middle" fill="#282A35" fontSize={14} fontWeight={700}>f(3)</text>
      <text x={180} y={134} textAnchor="middle" fill="#282A35" fontSize={14} fontWeight={700}>f(2)</text>
      <text x={180} y={190} textAnchor="middle" fill="#fff" fontSize={14} fontWeight={700}>f(1)</text>
    </Frame>
  );
}

function TestingArt() {
  return (
    <Frame label="Checks on a list" caption="Automated test suite verification">
      <rect x={48} y={56} width={264} height={48} fill="#fff" />
      <rect x={48} y={116} width={264} height={48} fill="#fff" />
      <rect x={48} y={176} width={264} height={48} fill="#fff" />
      <rect x={60} y={68} width={24} height={24} fill="#04AA6D" />
      <rect x={60} y={128} width={24} height={24} fill="#04AA6D" />
      <rect x={60} y={188} width={24} height={24} fill="#FFF4A3" />
      <rect x={102} y={74} width={180} height={12} fill="#D9EEE1" />
      <rect x={102} y={134} width={150} height={12} fill="#D9EEE1" />
      <rect x={102} y={194} width={168} height={12} fill="#E7E9EB" />
    </Frame>
  );
}

export function PhaseCheckpointArt({
  number,
  title,
  courseSlug,
}: {
  number: string;
  title: string;
  courseSlug?: string;
}) {
  const kind = checkpointArtKind(title, number, courseSlug);

  // Dedicated interactive artworks
  if (kind === "what-is") return <WhatIsArt />;
  if (kind === "terminal") return <TerminalArt title={title} />;
  if (kind === "run") return <CheckpointRun />;
  if (kind === "control") return <CheckpointControl />;
  if (kind === "functions") return <CheckpointFunctions />;
  if (kind === "complexity") return <ComplexityArt />;
  if (kind === "variables") return <VariablesArt />;
  if (kind === "collections") return <CollectionsArt />;
  if (kind === "strings-files") return <StringsFilesArt />;
  if (kind === "errors") return <ErrorsArt />;
  if (kind === "debugging") return <DebuggingArt />;
  if (kind === "modules") return <ModulesArt />;
  if (kind === "consolidation") return <ConsolidationArt />;
  if (kind === "math-discrete") return <MathDiscreteArt />;
  if (kind === "oop-deep") return <OopDeepArt />;

  // Computer Science animated artworks
  if (kind === "binary") return <BinaryArt />;
  if (kind === "circuit") return <CircuitArt />;
  if (kind === "hardware") return <HardwareCpuArt />;
  if (kind === "memory") return <MemoryArt />;
  if (kind === "tree") return <TreeArt />;
  if (kind === "graph") return <GraphArt />;
  if (kind === "hash") return <HashArt />;
  if (kind === "sorting") return <SortingArt />;
  if (kind === "os") return <OsArt />;
  if (kind === "network") return <NetworkArt />;
  if (kind === "database") return <DatabaseArt />;
  if (kind === "security") return <SecurityArt />;
  if (kind === "system") return <SystemArt />;

  // Odoo ERP animated artworks
  if (kind === "odoo-erp") return <OdooErpArt />;
  if (kind === "odoo-orm") return <OdooOrmArt />;
  if (kind === "odoo-views") return <OdooViewsArt />;
  if (kind === "odoo-security") return <OdooSecurityArt />;
  if (kind === "odoo-owl") return <OdooOwlArt />;
  if (kind === "odoo-api") return <OdooApiArt />;
  if (kind === "odoo-devops") return <OdooDevopsArt />;

  // Fallback vector illustrations
  if (kind === "recursion") return <RecursionArt />;
  if (kind === "testing") return <TestingArt />;

  return <BinaryArt />;
}
