"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

const MIN = 0.14;
const MAX = 0.86;

export function SplitPanes({
  className,
  storageKey,
  defaultSplit = 0.68,
  left,
  right,
}: {
  className?: string;
  storageKey: string;
  defaultSplit?: number;
  left: ReactNode;
  right: ReactNode;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef(defaultSplit);
  const [split, setSplit] = useState(defaultSplit);
  const [vertical, setVertical] = useState(false);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    try {
      const saved = Number(window.localStorage.getItem(storageKey));
      if (saved >= MIN && saved <= MAX) {
        splitRef.current = saved;
        setSplit(saved);
      }
    } catch {
      /* ignore */
    }
  }, [storageKey]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const sync = () => setVertical(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const persist = useCallback((value: number) => {
    try {
      window.localStorage.setItem(storageKey, String(value));
    } catch {
      /* ignore */
    }
  }, [storageKey]);

  const applyPointer = useCallback((clientX: number, clientY: number) => {
    const box = wrapRef.current?.getBoundingClientRect();
    if (!box) return;
    const next = vertical
      ? (clientY - box.top) / box.height
      : (clientX - box.left) / box.width;
    const clamped = Math.min(MAX, Math.max(MIN, next));
    splitRef.current = clamped;
    setSplit(clamped);
  }, [vertical]);

  function onPointerDown(event: React.PointerEvent<HTMLButtonElement>) {
    event.preventDefault();
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    applyPointer(event.clientX, event.clientY);
  }

  function onPointerMove(event: React.PointerEvent<HTMLButtonElement>) {
    if (!dragging) return;
    applyPointer(event.clientX, event.clientY);
  }

  function onPointerUp(event: React.PointerEvent<HTMLButtonElement>) {
    if (!dragging) return;
    setDragging(false);
    persist(splitRef.current);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function onDoubleClick() {
    splitRef.current = defaultSplit;
    setSplit(defaultSplit);
    persist(defaultSplit);
  }

  return (
    <div
      ref={wrapRef}
      className={`ih-split${vertical ? " is-vertical" : ""}${dragging ? " is-dragging" : ""}${className ? ` ${className}` : ""}`}
      style={{ ["--ih-split" as string]: String(split) }}
    >
      <div className="ih-split-pane is-start">{left}</div>
      <button
        type="button"
        className="ih-split-gutter"
        aria-label={vertical ? "Resize editor and result vertically" : "Resize editor and result"}
        aria-orientation={vertical ? "horizontal" : "vertical"}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDoubleClick={onDoubleClick}
      />
      <div className="ih-split-pane is-end">{right}</div>
    </div>
  );
}
