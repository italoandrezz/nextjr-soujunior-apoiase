import { useRef, useState } from "react";

import Typography from "../../components/Typography";

import { testimonials } from "../../data/testimonials";

const positionClasses = {
  active: "z-20 translate-x-0 scale-100 opacity-100",
  previous:
    "pointer-events-none z-[15] -translate-x-[13%] scale-[0.88] opacity-100",
  previousFar:
    "pointer-events-none z-10 -translate-x-[24%] scale-[0.78] opacity-100",
  next: "pointer-events-none z-[15] translate-x-[13%] scale-[0.88] opacity-100",
  nextFar:
    "pointer-events-none z-10 translate-x-[24%] scale-[0.78] opacity-100",
};

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const dragStartX = useRef(null);
  const isDragging = useRef(false);

  function showPrevious() {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  }

  function showNext() {
    setActiveIndex(
      (current) => (current + 1) % testimonials.length,
    );
  }

  function handleKeyDown(event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  }

  function handlePointerDown(event) {
    dragStartX.current = event.clientX;
    isDragging.current = true;

    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerUp(event) {
    if (!isDragging.current || dragStartX.current === null) {
      return;
    }

    const dragDistance = event.clientX - dragStartX.current;

    const swipeThreshold = 50;

    if (Math.abs(dragDistance) >= swipeThreshold) {
      if (dragDistance > 0) {
        showPrevious();
      } else {
        showNext();
      }
    }

    dragStartX.current = null;
    isDragging.current = false;
  }

  function handlePointerCancel() {
    dragStartX.current = null;
    isDragging.current = false;
  }

  function getCardPosition(index) {
    if (index === activeIndex) return "active";

    const forwardDistance =
      (index - activeIndex + testimonials.length) % testimonials.length;

    if (forwardDistance === 1) return "next";
    if (forwardDistance === 2) return "nextFar";
    if (forwardDistance === 3) return "previousFar";

    return "previous";
  }

  return (
    <section
      aria-labelledby="testimonial-title"
      className="w-full overflow-hidden bg-[#00021A] px-4 py-16 md:px-8 md:py-20 lg:px-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[70rem]">
        <Typography
          id="testimonial-title"
          variant="h2"
          className="text-center"
        >
          Quem já passou pela SouJunior
        </Typography>

        <div
          role="region"
          aria-roledescription="carrossel"
          aria-label="Depoimentos de participantes da SouJunior"
          aria-live="polite"
          onKeyDown={handleKeyDown}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          className="relative mx-auto mt-9 grid max-w-[70rem] touch-pan-y perspective-[1200px] select-none md:mt-12"
        >
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Exibir depoimento anterior"
            className="absolute bottom-6 left-0 top-6 z-30 w-[16%] cursor-pointer rounded-l-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE] md:bottom-8 md:top-8"
          />

          <button
            type="button"
            onClick={showNext}
            aria-label="Exibir próximo depoimento"
            className="absolute bottom-6 right-0 top-6 z-30 w-[16%] cursor-pointer rounded-r-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE] md:bottom-8 md:top-8"
          />

          {testimonials.map((item, index) => {
            const position = getCardPosition(index);

            return (
              <article
                key={item.name}
                aria-hidden={position !== "active"}
                className={`relative col-start-1 row-start-1 mx-auto flex h-full w-[92%] transform-gpu flex-col rounded-3xl border border-[#53658E] bg-gradient-to-r from-[#222B4B] via-[#263155] to-[#29365F] p-6 shadow-2xl shadow-black/30 transition-[opacity,transform,translate,scale] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none md:w-[84%] md:p-10 lg:w-[80%] lg:p-12 ${positionClasses[position]}`}
              >
                <blockquote className="font-funnel-sans text-sm italic leading-6 text-[#F4F4F6] md:text-base md:leading-7 lg:text-lg lg:leading-8">
                  “{item.quote}”
                </blockquote>

                <div className="mt-auto flex items-center gap-3 pt-7">
                  <img
                    src={item.avatar}
                    alt={`Foto de ${item.name}`}
                    width="48"
                    height="48"
                    className="h-11 w-11 shrink-0 rounded-full border-2 border-[#D6A868] object-cover md:h-12 md:w-12"
                  />

                  <div>
                    <p className="font-funnel-sans text-sm font-bold text-[#F4F4F6] md:text-base">
                      {item.name}
                    </p>

                    <p className="mt-0.5 font-funnel-sans text-xs text-[#D4DBEC] md:text-sm">
                      {item.role}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}