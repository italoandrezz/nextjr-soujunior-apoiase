import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { testimonials } from "../../data/testimonials";
import TestimonialSection from "./TestimonialSection";

function getVisibleTestimonial(container) {
  return [...container.querySelectorAll("article")].find(
    (article) => article.getAttribute("aria-hidden") === "false",
  );
}

describe("TestimonialSection", () => {
  it("exibe o primeiro depoimento inicialmente e avança pelo botão", async () => {
    const user = userEvent.setup();
    const { container } = render(<TestimonialSection />);

    expect(getVisibleTestimonial(container)).toHaveTextContent(testimonials[0].name);

    await user.click(
      screen.getByRole("button", { name: /próximo depoimento/i }),
    );
    expect(getVisibleTestimonial(container)).toHaveTextContent(testimonials[1].name);
  });

  it("volta do primeiro para o último depoimento", async () => {
    const user = userEvent.setup();
    const { container } = render(<TestimonialSection />);

    await user.click(
      screen.getByRole("button", { name: /depoimento anterior/i }),
    );
    expect(getVisibleTestimonial(container)).toHaveTextContent(
      testimonials.at(-1).name,
    );
  });

  it("aceita navegação pelas setas do teclado", () => {
    const { container } = render(<TestimonialSection />);
    const carousel = screen.getByRole("region", {
      name: /depoimentos de participantes/i,
    });

    fireEvent.keyDown(carousel, { key: "ArrowRight" });
    expect(getVisibleTestimonial(container)).toHaveTextContent(testimonials[1].name);

    fireEvent.keyDown(carousel, { key: "ArrowLeft" });
    expect(getVisibleTestimonial(container)).toHaveTextContent(testimonials[0].name);
  });

  it("avança e retorna pelos gestos de arraste", () => {
    const { container } = render(<TestimonialSection />);
    const carousel = screen.getByRole("region", {
      name: /depoimentos de participantes/i,
    });

    fireEvent.pointerDown(carousel, { clientX: 200, pointerId: 1 });
    fireEvent.pointerUp(carousel, { clientX: 100, pointerId: 1 });
    expect(getVisibleTestimonial(container)).toHaveTextContent(testimonials[1].name);

    fireEvent.pointerDown(carousel, { clientX: 100, pointerId: 2 });
    fireEvent.pointerUp(carousel, { clientX: 200, pointerId: 2 });
    expect(getVisibleTestimonial(container)).toHaveTextContent(testimonials[0].name);
  });

  it("ignora movimentos curtos e gestos cancelados", () => {
    const { container } = render(<TestimonialSection />);
    const carousel = screen.getByRole("region", {
      name: /depoimentos de participantes/i,
    });

    fireEvent.pointerDown(carousel, { clientX: 150, pointerId: 1 });
    fireEvent.pointerUp(carousel, { clientX: 130, pointerId: 1 });
    expect(getVisibleTestimonial(container)).toHaveTextContent(testimonials[0].name);

    fireEvent.pointerDown(carousel, { clientX: 200, pointerId: 2 });
    fireEvent.pointerCancel(carousel, { pointerId: 2 });
    fireEvent.pointerUp(carousel, { clientX: 100, pointerId: 2 });
    expect(getVisibleTestimonial(container)).toHaveTextContent(testimonials[0].name);
  });
});
