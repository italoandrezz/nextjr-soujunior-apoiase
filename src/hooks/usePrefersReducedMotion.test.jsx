import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import usePrefersReducedMotion from "./usePrefersReducedMotion";

describe("usePrefersReducedMotion", () => {
  let mediaQuery;
  let changeHandler;

  beforeEach(() => {
    mediaQuery = {
      matches: false,
      addEventListener: vi.fn((event, handler) => {
        if (event === "change") changeHandler = handler;
      }),
      removeEventListener: vi.fn(),
    };
    window.matchMedia = vi.fn(() => mediaQuery);
  });

  it("acompanha mudanças na preferência de movimento", () => {
    const { result, unmount } = renderHook(() => usePrefersReducedMotion());

    expect(result.current).toBe(false);

    act(() => {
      mediaQuery.matches = true;
      changeHandler();
    });

    expect(result.current).toBe(true);
    unmount();
    expect(mediaQuery.removeEventListener).toHaveBeenCalledWith("change", changeHandler);
  });
});
