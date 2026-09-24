import heroPoster from "../../assets/images/hero-poster.svg";
import heroVideo from "../../assets/video/videobackground.mp4";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import HeroSectionInner from "./HeroSectionInner";

export default function HeroSectionOuter() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="inicio"
      className="relative flex min-h-[38.9375rem] w-full items-center justify-center overflow-hidden bg-[#030712] px-4 py-12 md:px-20 md:py-20"
    >
      <img
        src={heroPoster}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-bottom"
      />

      {!prefersReducedMotion && (
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          tabIndex={-1}
          poster={heroPoster}
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-bottom"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-1 bg-linear-to-t from-[rgba(3,7,18,0.5)] to-[rgba(3,7,18,0.1)]"
      />

      <div className="relative z-10 flex w-full max-w-[80rem] items-center justify-center">
        <HeroSectionInner />
      </div>
    </section>
  );
}
