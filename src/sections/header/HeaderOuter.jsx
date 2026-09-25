import { useEffect, useState } from "react";
import HeaderInner from "./HeaderInner";

export default function HeaderOuter() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    /* Header Outer - Estrutura Principal de Layout */
    <header
      className={`sticky top-0 z-50 flex w-full items-center justify-center border-b px-4 py-8 transition-[background-color,border-color,backdrop-filter] duration-300 md:px-20 ${
        isScrolled
          ? "border-white/5 bg-[#00011A]/80 backdrop-blur-md"
          : "border-transparent bg-[#00011A]"
      }`}
    >
      {/* Importação e inclusão do Header Inner */}
      <HeaderInner />
    </header>
  );
}
