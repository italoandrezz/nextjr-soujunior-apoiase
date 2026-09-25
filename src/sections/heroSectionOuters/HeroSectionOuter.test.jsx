import { render } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import HeroSectionOuter from "./HeroSectionOuter";

function mockReducedMotion(matches) {
  window.matchMedia = vi.fn().mockReturnValue({
    matches,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  });
}

describe("HeroSectionOuter", () => {
  beforeEach(() => mockReducedMotion(false));

  it("renderiza o vídeo decorativo quando animações são permitidas", () => {
    const { container } = render(<HeroSectionOuter />);

    const video = container.querySelector("video");
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute("aria-hidden", "true");
    expect(video.querySelector('source[type="video/mp4"]')).toBeInTheDocument();
  });

  it("mantém apenas o poster quando o usuário reduz movimentos", () => {
    mockReducedMotion(true);
    const { container } = render(<HeroSectionOuter />);

    expect(container.querySelector("video")).not.toBeInTheDocument();
    expect(container.querySelector('img[aria-hidden="true"]')).toBeInTheDocument();
  });
});
