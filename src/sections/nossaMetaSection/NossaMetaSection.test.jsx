import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { campaignGoal } from "../../data/siteData";
import NossaMetaSection from "./NossaMetaSection";

describe("NossaMetaSection", () => {
  it("expõe o progresso mensal para tecnologias assistivas", () => {
    render(<NossaMetaSection />);

    const progressbar = screen.getByRole("progressbar", {
      name: /progresso da meta mensal/i,
    });
    expect(progressbar).toHaveAttribute("aria-valuemin", "0");
    expect(progressbar).toHaveAttribute("aria-valuemax", "100");
    expect(progressbar).toHaveAttribute(
      "aria-valuenow",
      String(campaignGoal.progress),
    );
  });

  it("renderiza o valor, apoiadores e link da campanha", () => {
    render(<NossaMetaSection />);

    expect(screen.getByText(campaignGoal.monthlyGoal)).toBeInTheDocument();
    expect(screen.getByText(/116 apoiadores/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /apoie agora/i })).toHaveAttribute(
      "href",
      "https://apoia.se/soujunior",
    );
  });
});
