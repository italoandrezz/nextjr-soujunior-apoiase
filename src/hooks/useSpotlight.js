import usePrefersReducedMotion from "./usePrefersReducedMotion";

export default function useSpotlight() {
  const prefersReducedMotion = usePrefersReducedMotion();

  function handlePointerMove(event) {
    if (event.pointerType === "touch" || prefersReducedMotion) return;

    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();

    card.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    card.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
    card.style.setProperty("--spotlight-opacity", "1");
  }

  function handlePointerLeave(event) {
    event.currentTarget.style.setProperty("--spotlight-opacity", "0");
  }

  return { onPointerMove: handlePointerMove, onPointerLeave: handlePointerLeave };
}
