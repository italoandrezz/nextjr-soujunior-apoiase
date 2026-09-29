import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { APOIA_SE_URL } from "../../constants/links";
import { participationOptions, supportOptions } from "../../data/siteData";
import FacaDiferencaSection from "./FacaDiferencaSection";

describe("FacaDiferencaSection", () => {
  it("apresenta as formas de participação e apoio", () => {
    render(<FacaDiferencaSection />);

    expect(
      screen.getByRole("heading", { name: /faça a diferença na soujunior/i }),
    ).toBeInTheDocument();

    for (const option of participationOptions) {
      expect(screen.getByRole("heading", { name: option.title })).toBeInTheDocument();
    }

    for (const option of supportOptions) {
      const supportLink = screen.getByRole("link", {
        name: (accessibleName) => accessibleName.startsWith(option.value),
      });
      expect(supportLink).toHaveAttribute("href", APOIA_SE_URL);
      expect(supportLink).toHaveAttribute("target", "_blank");
    }
  });

  it("carrega a ilustração de apoio de forma otimizada", () => {
    render(<FacaDiferencaSection />);

    const illustration = screen.getByRole("img", {
      name: /mascote da soujunior/i,
    });
    expect(illustration).toHaveAttribute("loading", "lazy");
    expect(illustration).toHaveAttribute("decoding", "async");
  });
});
