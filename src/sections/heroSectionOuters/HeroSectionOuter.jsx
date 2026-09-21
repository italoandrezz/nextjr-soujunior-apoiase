import HeroSectionInner from "./HeroSectionInner";

export default function HeroSectionOuter() {
  return (
    /* 
      Hero Section Outer:
      - relative + overflow-hidden: Mantém o vídeo preso dentro da seção
      - min-h-[38.9375rem] = 623px
    */
    <section className="w-full min-h-[38.9375rem] bg-[#030712] relative overflow-hidden flex justify-center items-center py-12 md:py-20 px-4 md:px-20">
      {/* 1. VÍDEO DE FUNDO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="/src/assets/video/videobackground.mp4" type="video/mp4" />
      </video>

      {/* 2. OVERLAY LEVE (Sem bg-black/50 e com gradiente suave para preservar a nitidez) */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(3, 7, 18, 0.5) 0%, rgba(3, 7, 18, 0.1) 100%)`
        }}
      />

      {/* 3. CONTEÚDO */}
      <div className="relative z-10 w-full max-w-[80rem] flex justify-center items-center">
        <HeroSectionInner />
      </div>
    </section>
  );
}
