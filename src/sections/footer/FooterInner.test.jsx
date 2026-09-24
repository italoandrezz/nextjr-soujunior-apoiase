import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FooterInner from "./FooterInner";

describe("FooterInner", () => {
  it("renderiza os links internos de navegação", () => {
    render(<FooterInner />);

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

  it("protege todos os links externos das redes sociais", () => {
    render(<FooterInner />);

    const socialLabels = [
      "GitHub",
      "Discord",
      "LinkedIn",
      "YouTube",
      "Instagram",
      "Website",
      "Facebook",
      "Whatsapp",
    ];

    for (const label of socialLabels) {
      const link = screen.getByRole("link", { name: label });
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});
