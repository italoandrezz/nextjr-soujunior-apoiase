import useSpotlight from "../../hooks/useSpotlight";

const iconPaths = {
  community: <path d="M5 19v-2.2A3.8 3.8 0 0 1 8.8 13h6.4a3.8 3.8 0 0 1 3.8 3.8V19M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 10H2v10h20V10h-2" />,
  mentors: <path d="M3 20v-1.8A4.2 4.2 0 0 1 7.2 14h1.6a4.2 4.2 0 0 1 4.2 4.2V20M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14 14h2.8a4.2 4.2 0 0 1 4.2 4.2V20M16 11a3 3 0 1 0 0-6" />,
  companies: <path d="M4 21V4h12v17M16 9h4v12M2 21h20M8 8h1M12 8h1M8 12h1M12 12h1M8 16h1M12 16h1" />,
};

export default function ParticipationCard({ title, description, icon }) {
  const spotlightProps = useSpotlight();

  return (
    <article
      {...spotlightProps}
      className="relative flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#242731] bg-gradient-to-b from-[#080D27] to-[#05091F] p-5 md:min-h-60 md:p-6 lg:min-h-64 lg:p-8"
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
      <span
        aria-hidden="true"
        className="relative z-10 flex h-10 w-10 items-center justify-center rounded border border-[#22D3EE] text-[#22D3EE]"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
          {iconPaths[icon]}
        </svg>
      </span>
      <h3 className="relative z-10 mt-5 font-funnel-display text-lg font-bold leading-6 text-[#F4F4F6] lg:text-xl">
        {title}
      </h3>
      <p className="relative z-10 mt-3 font-funnel-sans text-sm leading-5 text-[#A9A9A9] lg:text-base lg:leading-6">
        {description}
      </p>
    </article>
  );
}
