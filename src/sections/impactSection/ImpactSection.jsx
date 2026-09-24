import Typography from "../../components/Typography";

const impactMetrics = [
  {
    value: "120+",
    label: "Membros ativos",
  },
  {
    value: "35+",
    label: "Mentores",
  },
  {
    value: "50+",
    label: "No mercado de trabalho",
  },
];

function ImpactCard({ value, label }) {
  function handlePointerMove(event) {
    if (
      event.pointerType === "touch" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();

    card.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    card.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
    card.style.setProperty("--spotlight-opacity", "1");
  }

  function handlePointerLeave(event) {
    event.currentTarget.style.setProperty("--spotlight-opacity", "0");
  }

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative flex min-h-40 overflow-hidden rounded-xl border border-[#242731] bg-gradient-to-br from-[#080D27] to-[#102A61] p-6 text-center shadow-lg shadow-black/10 md:min-h-48 lg:min-h-52"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 motion-reduce:transition-none"
        style={{
          background:
            "radial-gradient(220px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(10, 22, 98, 0.72), transparent 70%)",
          opacity: "var(--spotlight-opacity, 0)",
        }}
      />

      <div className="relative z-10 flex w-full flex-col items-center justify-center">
        <dt className="order-2 mt-4 font-funnel-sans text-sm font-semibold leading-5 text-[#F4F4F6] md:text-base">
          {label}
        </dt>
        <dd className="order-1 font-funnel-display text-5xl font-bold leading-none text-[#F4F4F6] md:text-6xl lg:text-7xl">
          {value}
        </dd>
      </div>
    </div>
  );
}

export default function ImpactSection() {
  return (
    <section
      aria-labelledby="impact-title"
      className="w-full bg-[#00021A] px-4 py-16 md:px-8 md:py-20 lg:px-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[70rem]">
        <div className="grid gap-5 text-center md:grid-cols-2 md:items-start md:gap-12 md:text-left lg:gap-24">
          <Typography id="impact-title" variant="h2">
            O que acontece quando oportunidades ganham espaço
          </Typography>

          <p className="mx-auto max-w-[29rem] font-funnel-sans text-sm leading-5 text-[#A9A9A9] md:mx-0 md:justify-self-end md:pt-2 md:text-base md:leading-6">
            Cada número carrega uma jornada de aprendizado prático,
            colaboração em equipe e desenvolvimento para o mercado.
          </p>
        </div>

        <dl className="mt-10 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-3 md:gap-6 lg:mt-16 lg:gap-8">
          {impactMetrics.map((metric) => (
            <ImpactCard key={metric.label} {...metric} />
          ))}
        </dl>
      </div>
    </section>
  );
}
