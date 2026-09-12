/** Ease the nearest scroller to a heading, then flash it so the jump is obvious. */
export function scrollToHeading(node: HTMLElement) {
  const scroller = scrollParent(node);
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const from = scrollTop(scroller);
  const to = targetTop(scroller, node);
  if (reduce) {
    setScrollTop(scroller, to);
    pulse(node);
    return;
  }
  const distance = to - from;
  const duration = Math.min(720, Math.max(280, Math.abs(distance) * 0.42));
  const origin = performance.now();
  const ease = (t: number) => 1 - (1 - t) ** 3;
  const tick = (now: number) => {
    const progress = Math.min(1, (now - origin) / duration);
    setScrollTop(scroller, from + distance * ease(progress));
    if (progress < 1) {
      requestAnimationFrame(tick);
      return;
    }
    pulse(node);
  };
  requestAnimationFrame(tick);
}

function scrollParent(node: HTMLElement): HTMLElement | Window {
  let current = node.parentElement;
  while (current && current !== document.body && current !== document.documentElement) {
    const style = getComputedStyle(current);
    const oy = style.overflowY;
    if ((oy === "auto" || oy === "scroll" || oy === "overlay") && current.scrollHeight > current.clientHeight + 1) {
      return current;
    }
    current = current.parentElement;
  }
  return window;
}

function scrollTop(scroller: HTMLElement | Window) {
  return scroller === window ? window.scrollY : (scroller as HTMLElement).scrollTop;
}

function setScrollTop(scroller: HTMLElement | Window, top: number) {
  if (scroller === window) {
    window.scrollTo(0, top);
    return;
  }
  (scroller as HTMLElement).scrollTop = top;
}

function targetTop(scroller: HTMLElement | Window, node: HTMLElement) {
  const offset = 104;
  if (scroller === window) {
    return node.getBoundingClientRect().top + window.scrollY - offset;
  }
  const root = scroller as HTMLElement;
  return node.getBoundingClientRect().top - root.getBoundingClientRect().top + root.scrollTop - offset;
}

function pulse(node: HTMLElement) {
  node.classList.remove("ih-heading-arrive");
  void node.offsetWidth;
  node.classList.add("ih-heading-arrive");
  window.setTimeout(() => node.classList.remove("ih-heading-arrive"), 800);
}
