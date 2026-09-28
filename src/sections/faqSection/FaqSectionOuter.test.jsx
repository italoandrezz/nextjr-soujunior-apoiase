import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WHATSAPP_COMMUNITY_URL } from "../../constants/links";
import FaqSectionOuter from "./FaqSectionOuter";

describe("FaqSectionOuter", () => {
  it("oferece respostas e um contato externo seguro", () => {
    render(<FaqSectionOuter />);

    expect(
      screen.getByRole("heading", { name: /ainda ficou com alguma dúvida/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("button").length).toBeGreaterThan(1);

    const contactLink = screen.getByRole("link", { name: /fale conosco/i });
    expect(contactLink).toHaveAttribute("href", WHATSAPP_COMMUNITY_URL);
    expect(contactLink).toHaveAttribute("target", "_blank");
    expect(contactLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
