export default function HeroContent() {
  return (
    /* Hero Content: gap-6 (24px), max-w-[48.875rem] (782px) */
    <div className="flex flex-col justify-center items-center gap-6 max-w-[48.875rem] w-full text-center">
      {/* Título Principal */}
      <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white leading-tight tracking-tight">
        Seu apoio mantém <br className="hidden sm:inline" />
        oportunidades em movimento
      </h1>

      {/* Descrição */}
      <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-[45rem]">
        A SouJunior conecta profissionais em início ou transição de carreira a
        projetos reais em tecnologia. Sua contribuição ajuda a manter essa
        oportunidade gratuita para quem participa
      </p>

      {/* Ação (CTA + Legenda) */}
      <div className="flex flex-col items-center gap-3 pt-2">
        <a
          href="#apoiar"
          className="bg-[#E5E7EB] hover:bg-white text-[#111827] text-sm font-semibold px-8 py-3 rounded-xl transition-all duration-200 active:scale-95 shadow-md"
        >
          Quero apoiar
        </a>
        <span className="text-xs text-gray-400 font-normal">
          A partir de R$ 2/mês pelo APOIA.se
        </span>
      </div>
    </div>
  );
}
