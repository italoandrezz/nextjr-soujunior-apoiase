import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "./Button";

describe("Button", () => {
  it("abre links externos em uma nova aba com proteção", () => {
    render(<Button href="https://example.com">Apoiar</Button>);

    const link = screen.getByRole("link", { name: "Apoiar" });
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("mantém links internos na mesma aba", () => {
    render(<Button href="#inicio">Início</Button>);

    const link = screen.getByRole("link", { name: "Início" });
    expect(link).not.toHaveAttribute("target");
    expect(link).not.toHaveAttribute("rel");
  });

  it("renderiza os ícones opcionais como decorativos", () => {
    const { container } = render(
      <Button showArrow showSupportAgent>
        Continuar
      </Button>,
    );

    expect(screen.getByRole("button", { name: "Continuar" })).toBeInTheDocument();
    expect(container.querySelectorAll('svg[aria-hidden="true"]')).toHaveLength(2);
  });
});
