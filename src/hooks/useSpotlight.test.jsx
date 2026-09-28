import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import useSpotlight from "./useSpotlight";

function SpotlightProbe() {
  const spotlightProps = useSpotlight();
  return <div data-testid="card" {...spotlightProps} />;
}

describe("useSpotlight", () => {
  beforeEach(() => {
    window.matchMedia = vi.fn(() => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));
  });

  it("atualiza a posição do brilho com o ponteiro e o remove ao sair", () => {
    render(<SpotlightProbe />);
    const card = screen.getByTestId("card");
    card.getBoundingClientRect = vi.fn(() => ({ left: 10, top: 20 }));

    fireEvent.pointerMove(card, {
      pointerType: "mouse",
      clientX: 60,
      clientY: 80,
    });

    expect(card.style.getPropertyValue("--spotlight-x")).toBe("50px");
    expect(card.style.getPropertyValue("--spotlight-y")).toBe("60px");
    expect(card.style.getPropertyValue("--spotlight-opacity")).toBe("1");

    fireEvent.pointerLeave(card);
    expect(card.style.getPropertyValue("--spotlight-opacity")).toBe("0");
  });

  it("não anima em toque ou com movimento reduzido", () => {
    window.matchMedia = vi.fn(() => ({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));
    render(<SpotlightProbe />);
    const card = screen.getByTestId("card");

    fireEvent.pointerMove(card, { pointerType: "touch", clientX: 60, clientY: 80 });
    expect(card.style.getPropertyValue("--spotlight-opacity")).toBe("");
  });
});
