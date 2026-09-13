/** Scroll the active sidebar link into the vertical center of its scroll container. */
export function centerSidebarActive(container: HTMLElement) {
  const active = container.querySelector<HTMLElement>("a.active, a.is-active");
  if (!active) return;
  const containerRect = container.getBoundingClientRect();
  const activeRect = active.getBoundingClientRect();
  const delta =
    activeRect.top - containerRect.top - (container.clientHeight / 2 - active.clientHeight / 2);
  container.scrollTop += delta;
}
