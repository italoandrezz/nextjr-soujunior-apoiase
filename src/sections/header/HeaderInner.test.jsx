import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HeaderInner from "./HeaderInner";

describe("HeaderInner", () => {
  it("direciona a logo e os itens do menu para as seções corretas", () => {
    render(<HeaderInner />);

    expect(screen.getByRole("link", { name: /ir para o início/i })).toHaveAttribute(
      "href",
      "#inicio",
    );
    expect(screen.getByRole("link", { name: "O projeto" })).toHaveAttribute(
      "href",
      "#o-projeto",
    );
    expect(screen.getByRole("link", { name: "A comunidade" })).toHaveAttribute(
      "href",
      "#a-comunidade",
    );
    expect(screen.getByRole("link", { name: "Como apoiar" })).toHaveAttribute(
      "href",
      "#como-apoiar",
    );
    expect(
      screen.getByRole("link", { name: "Perguntas frequentes" }),
    ).toHaveAttribute("href", "#perguntas-frequentes");
  });

  it("mantém o CTA de apoio como link externo protegido", () => {
    render(<HeaderInner />);

    const supportLink = screen.getByRole("link", { name: /apoie agora/i });
    expect(supportLink).toHaveAttribute("href", "https://apoia.se/soujunior");
    expect(supportLink).toHaveAttribute("target", "_blank");
    expect(supportLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
