import ImpactCard from "./ImpactCard";
import TestimonialCarousel from "./TestimonialsCarousel";

export default function ImpactSectionInner() {
  const metricsData = [
    { id: 1, number: "+120", label: "Membros ativos" },
    { id: 2, number: "+35", label: "Mentores" },
    { id: 3, number: "+50", label: "No mercado de trabalho" }
  ];

  return (
    /* Container com max-w-[1121px] no desktop e max-w-[770px] no tablet */
    <div className="max-w-[70.0625rem] w-full flex flex-col items-center gap-8 md:gap-10 lg:gap-16 text-center">
      {/* 1. Numbers Title (Ajustado gap: 24px no Tablet, 32px no Desktop) */}
      <div className="flex flex-col justify-center items-center gap-4 md:gap-6 max-w-[48.125rem] lg:max-w-[49.5rem] w-full px-2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
          O que acontece quando <br className="hidden sm:inline" />
          oportunidades ganham espaço
        </h2>
        <span className="text-xs md:text-sm font-semibold tracking-wider text-gray-300 uppercase italic">
          IMPACTO EM <span className="not-italic">NÚMEROS</span>
        </span>
      </div>

      {/* 2. Metrics Row (gap: 16px no Tablet e 24px no Desktop) */}
      <div className="w-full max-w-[43.5rem] lg:max-w-[57.25rem] flex flex-col md:flex-row justify-center items-center gap-4 md:gap-4 lg:gap-6 px-2">
        {metricsData.map((metric) => (
          <ImpactCard
            key={metric.id}
            number={metric.number}
            label={metric.label}
          />
        ))}
      </div>

      {/* 3. Subtítulo dos Depoimentos */}
      <div className="pt-4 md:pt-6">
        <span className="text-xs md:text-sm font-semibold tracking-wider text-gray-300 uppercase italic">
          DEPOIMENTOS DA <span className="not-italic">COMUNIDADE</span>
        </span>
      </div>

      {/* 4. PLACEHOLDER DO CARROSSEL */}
      <div className="w-full max-w-[48.125rem] lg:max-w-[70rem] min-h-[14rem] md:min-h-[18rem] lg:min-h-[22rem] rounded-3xl flex items-center justify-center p-6 text-gray-400 text-sm">
        <TestimonialCarousel />
      </div>

      {/* 5. Botão Apoie Agora */}
      <div>
        <a
          href="https://apoia.se/soujunior"
          className="bg-[#3B82F6] hover:bg-blue-600 text-white text-sm font-medium px-8 py-3 rounded-xl transition-all duration-200 inline-block shadow-lg"
        >
          Apoie agora
        </a>
      </div>
    </div>
  );
}
