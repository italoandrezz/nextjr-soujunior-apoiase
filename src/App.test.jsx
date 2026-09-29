import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renderiza a landing page com navegação, conteúdo principal e rodapé", () => {
    render(<App />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toHaveAttribute("id", "conteudo-principal");
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /ir para o conteúdo principal/i }),
    ).toHaveAttribute("href", "#conteudo-principal");
    expect(
      screen.getByRole("heading", { name: /toda carreira tech precisa/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /quem já passou pela soujunior/i }),
    ).toBeInTheDocument();
  });
});
