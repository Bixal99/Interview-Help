export const WINDING_WIDTH = 1000;
export const WINDING_LEAD = 48;

type Point = { x: number; y: number };

export function windingColumns(count: number, forceSingle = false) {
  if (forceSingle || count <= 1) return 1;
  if (count <= 3) return count;
  return 3;
}

export function windingLayout(count: number, options?: { singleColumn?: boolean }) {
  const cols = windingColumns(count, options?.singleColumn);
  const padX = cols === 1 ? 108 : 120;
  const padTop = cols === 1 ? 96 : 72;
  const padBottom = cols === 1 ? 96 : 36;
  const rowH = cols === 1 ? 152 : 220;
  const wave = cols === 1 ? 0 : 52;
  const span = WINDING_WIDTH - padX * 2;
  const denom = Math.max(cols - 1, 1);
  const points = Array.from({ length: count }, (_, index) => {
    const row = Math.floor(index / cols);
    const colInRow = index % cols;
    const col = row % 2 === 0 ? colInRow : cols - 1 - colInRow;
    return {
      x: cols === 1 ? WINDING_WIDTH / 2 + (index % 2 === 0 ? -22 : 22) : padX + (col / denom) * span,
      y: padTop + row * rowH + (cols === 1 ? 0 : col % 2 === 0 ? wave : -wave),
    };
  });
  return {
    points,
    width: WINDING_WIDTH,
    height: padTop + Math.ceil(Math.max(count, 1) / cols) * rowH + padBottom,
    cols,
  };
}

export function windingTerminals(points: Point[], cols?: number) {
  if (!points.length) return null;
  const first = points[0];
  const last = points[points.length - 1];
  const vertical = cols === 1;
  return {
    start: vertical ? { x: first.x, y: first.y - WINDING_LEAD } : { x: first.x - WINDING_LEAD, y: first.y },
    end: vertical ? { x: last.x, y: last.y + WINDING_LEAD } : { x: last.x + WINDING_LEAD, y: last.y },
  };
}

function windingControls(previous: Point, next: Point) {
  const dx = next.x - previous.x;
  return {
    c1: { x: previous.x + dx * 0.45, y: previous.y },
    c2: { x: previous.x + dx * 0.55, y: next.y },
  };
}

function cubicPoint(p0: Point, p1: Point, p2: Point, p3: Point, t: number): Point {
  const mt = 1 - t;
  const a = mt * mt * mt;
  const b = 3 * mt * mt * t;
  const c = 3 * mt * t * t;
  const d = t * t * t;
  return {
    x: a * p0.x + b * p1.x + c * p2.x + d * p3.x,
    y: a * p0.y + b * p1.y + c * p2.y + d * p3.y,
  };
}

function cubicLength(p0: Point, p1: Point, p2: Point, p3: Point, samples = 16) {
  let length = 0;
  let previous = p0;
  for (let index = 1; index <= samples; index += 1) {
    const point = cubicPoint(p0, p1, p2, p3, index / samples);
    length += Math.hypot(point.x - previous.x, point.y - previous.y);
    previous = point;
  }
  return length;
}

export function windingPath(points: Point[], cols?: number) {
  if (!points.length) return "";
  const start = points[0];
  const vertical = cols === 1;
  let d = vertical
    ? `M ${start.x} ${start.y - WINDING_LEAD} V ${start.y}`
    : `M ${start.x - WINDING_LEAD} ${start.y} H ${start.x}`;
  for (let index = 1; index < points.length; index += 1) {
    const previous = points[index - 1];
    const next = points[index];
    const { c1, c2 } = windingControls(previous, next);
    d += ` C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${next.x} ${next.y}`;
  }
  const last = points[points.length - 1];
  return vertical ? `${d} V ${last.y + WINDING_LEAD}` : `${d} H ${last.x + WINDING_LEAD}`;
}

/** Path length to each node, plus the trailing lead. Avoids SVG getPointAtLength. */
export function windingMetrics(points: Point[]) {
  const lengths: number[] = [];
  let total = 0;
  if (!points.length) return { lengths, total };
  total += WINDING_LEAD;
  lengths.push(total);
  for (let index = 1; index < points.length; index += 1) {
    const previous = points[index - 1];
    const next = points[index];
    const { c1, c2 } = windingControls(previous, next);
    total += cubicLength(previous, c1, c2, next);
    lengths.push(total);
  }
  total += WINDING_LEAD;
  return { lengths, total };
}

export function closestPathLength(
  path: { getTotalLength: () => number; getPointAtLength: (length: number) => { x: number; y: number } },
  x: number,
  y: number,
) {
  const total = path.getTotalLength();
  if (!total) return 0;
  const coarse = Math.min(80, Math.max(24, Math.ceil(total / 40)));
  let best = 0;
  let bestDistance = Number.POSITIVE_INFINITY;
  for (let index = 0; index <= coarse; index += 1) {
    const length = (index / coarse) * total;
    const point = path.getPointAtLength(length);
    const distance = (point.x - x) ** 2 + (point.y - y) ** 2;
    if (distance < bestDistance) {
      bestDistance = distance;
      best = length;
    }
  }
  const window = total / coarse;
  const start = Math.max(0, best - window);
  const end = Math.min(total, best + window);
  const fine = 12;
  for (let index = 0; index <= fine; index += 1) {
    const length = start + ((end - start) * index) / fine;
    const point = path.getPointAtLength(length);
    const distance = (point.x - x) ** 2 + (point.y - y) ** 2;
    if (distance < bestDistance) {
      bestDistance = distance;
      best = length;
    }
  }
  return best;
}
