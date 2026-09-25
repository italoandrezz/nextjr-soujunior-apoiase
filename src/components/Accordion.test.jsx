import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { AccordionDemo } from "./Accordion";

describe("AccordionDemo", () => {
  it("abre e fecha uma resposta preservando os atributos acessíveis", async () => {
    const user = userEvent.setup();
    render(<AccordionDemo />);

    const trigger = screen.getByRole("button", {
      name: /o que é o apoia\.se/i,
    });
    const panel = document.getElementById(trigger.getAttribute("aria-controls"));

    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(panel).toHaveAttribute("aria-hidden", "true");

    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(panel).toHaveAttribute("aria-hidden", "false");

    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("mantém apenas uma pergunta aberta por vez", async () => {
    const user = userEvent.setup();
    render(<AccordionDemo />);

    const triggers = screen.getAllByRole("button");
    await user.click(triggers[0]);
    await user.click(triggers[1]);

    expect(triggers[0]).toHaveAttribute("aria-expanded", "false");
    expect(triggers[1]).toHaveAttribute("aria-expanded", "true");
  });
});
