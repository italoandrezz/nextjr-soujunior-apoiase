import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { APOIA_SE_URL } from "../../constants/links";
import CauseSectionOuter from "./CauseSectionOuter";

describe("CauseSectionOuter", () => {
  it("explica a jornada do apoio e mantém o destino da navegação", () => {
    const { container } = render(<CauseSectionOuter />);

    expect(container.querySelector("section")).toHaveAttribute("id", "o-projeto");
    expect(
      screen.getByRole("heading", { name: /seu apoio pode ser a primeira oportunidade/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /você contribui/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /chega preparado ao mercado/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /apoie agora/i })).toHaveAttribute(
      "href",
      APOIA_SE_URL,
    );
  });
});
