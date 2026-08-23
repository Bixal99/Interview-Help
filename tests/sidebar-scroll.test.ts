import { describe, expect, it, vi } from "vitest";
import { centerSidebarActive } from "../lib/sidebar-scroll";

describe("centerSidebarActive", () => {
  it("scrolls so the active link sits in the vertical center", () => {
    const active = {
      clientHeight: 40,
      getBoundingClientRect: () => ({ top: 400, height: 40 } as DOMRect),
    };
    const container = {
      clientHeight: 200,
      scrollTop: 100,
      getBoundingClientRect: () => ({ top: 0, height: 200 } as DOMRect),
      querySelector: vi.fn(() => active),
    } as unknown as HTMLElement;

    centerSidebarActive(container);

    // active top 400 relative to container top 0; center target is 80 → delta 320
    // scrollTop becomes 100 + 320 = 420
    expect(container.scrollTop).toBe(420);
  });

  it("no-ops when there is no active link", () => {
    const container = {
      clientHeight: 200,
      scrollTop: 50,
      getBoundingClientRect: () => ({ top: 0, height: 200 } as DOMRect),
      querySelector: vi.fn(() => null),
    } as unknown as HTMLElement;

    centerSidebarActive(container);
    expect(container.scrollTop).toBe(50);
  });
});
