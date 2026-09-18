import HeroSectionInner from "./HeroSectionInner";

export default function HeroSectionOuter() {
  return (
    /* 
      Hero Section Outer:
      - max-w-[80rem] = 1280px
      - min-h-[38.9375rem] = 623px
      - padding: 80px = p-20
    */
    <section className="w-full bg-[#030712] relative overflow-hidden flex justify-center items-center py-12 md:py-20 px-4 md:px-20">
      {/* Efeito Visual do Fundo (Grade + Gradiente Azul Neon) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to top, rgba(37, 99, 235, 0.3) 0%, transparent 60%),
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 40px 40px, 40px 40px"
        }}
      />

      {/* Hero Section Inner inserido no centro */}
      <div className="relative z-10 w-full max-w-[80rem] flex justify-center items-center">
        <HeroSectionInner />
      </div>
    </section>
  );
}
