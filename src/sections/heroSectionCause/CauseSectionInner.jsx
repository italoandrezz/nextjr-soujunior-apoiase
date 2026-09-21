import CauseTimelineItem from "./CauseTimeLineItem";

export default function CauseSectionInner() {
  // Dados extraídos das imagens da Timeline do Figma
  const timelineData = [
    {
      id: 1,
      title: "Quando você apoia",
      description: "Sua contribuição ajuda a manter a comunidade ativa",
      iconSrc: "/src/assets/images/icon-credit-card.png"
    },
    {
      id: 2,
      title: "Mantemos a estrutura ativa",
      description:
        "Ferramentas, produtos e recursos digitais sustentam o trabalho dos times",
      iconSrc: "/src/assets/images/icon-scaled-balance.png"
    },
    {
      id: 3,
      title: "Projetos ganham vida em equipe",
      description:
        "Juniores, mentores e diferentes áreas colaboram em desafios reais",
      iconSrc: "/src/assets/images/icon-project.png"
    },
    {
      id: 4,
      title: "Conhecimento vira experiência",
      description:
        "Profissionais aplicam conhecimentos e desenvolvem novas habilidades",
      iconSrc: "/src/assets/images/icon-hat.png"
    },
    {
      id: 5,
      title: "A experiência prepara para novos desafios",
      description:
        "Experiência, portfólio e networking fortalecem a preparação para o mercado tech",
      iconSrc: "/src/assets/images/icon-medal.png"
    }
  ];

  return (
    /* Cause Section Inner - max-w-[70rem] = 1120px */
    <div className="max-w-[70rem] w-full flex flex-col justify-center items-center gap-10 min-[391px]:gap-8 min-[835px]:gap-16">
      {/* Section Header */}
      <div className="max-w-[49.125rem] w-full flex flex-col items-center gap-4 text-center px-4">
        <h2 className="text-2xl min-[391px]:text-3xl min-[835px]:text-4xl font-bold text-white tracking-tight leading-tight">
          O que seu apoio coloca em jogo
        </h2>
        <p className="text-gray-300 text-sm min-[835px]:text-base leading-relaxed">
          Ao apoiar a SouJunior, você impulsiona um ambiente onde conhecimento
          vira prática
        </p>
      </div>

      {/* Content / Timeline Container */}
      <div className="w-full max-w-[20rem] min-[391px]:max-w-[23.5rem] min-[835px]:max-w-none relative flex flex-col min-[835px]:flex-row items-center min-[835px]:items-start justify-between gap-8 min-[835px]:gap-2">
        {/* Linha da Timeline (Linha cinza conectando os círculos no Desktop) */}
        <div className="hidden min-[835px]:block absolute top-6 left-6 right-6 h-[2px] bg-white z-0" />

        <div className="min-[835px]:hidden absolute top-6 bottom-6 left-6 w-[2px] bg-white z-0" />

        {/* Mapeamento dos 5 itens da Timeline */}
        {timelineData.map((item) => (
          <CauseTimelineItem
            key={item.id}
            title={item.title}
            description={item.description}
            iconSrc={item.iconSrc}
            altText={item.title}
          />
        ))}
      </div>
    </div>
  );
}
