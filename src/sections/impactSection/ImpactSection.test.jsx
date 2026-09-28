import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { impactMetrics } from "../../data/siteData";
import ImpactSection from "./ImpactSection";

describe("ImpactSection", () => {
  it("renderiza todas as métricas de impacto em uma lista descritiva", () => {
    const { container } = render(<ImpactSection />);

    expect(
      screen.getByRole("heading", { name: /o que acontece quando oportunidades/i }),
    ).toBeInTheDocument();
    expect(container.querySelector("dl")).toBeInTheDocument();

    for (const metric of impactMetrics) {
      expect(screen.getByText(metric.value)).toBeInTheDocument();
      expect(screen.getByText(metric.label)).toBeInTheDocument();
    }
  });
});
