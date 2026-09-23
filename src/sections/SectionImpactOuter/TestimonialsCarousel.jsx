import { useState } from "react";
import TestimonialCard from "./TestimonialsCard";

export default function TestimonialCarousel() {
  const testimonials = [
    {
      id: 1,
      quote:
        "A SouJunior está me proporcionando ter uma vivência de trabalho como UX/UI Designer. Aplicar o conteúdo estudado em cursos, de forma prática, trabalhar em equipe com metodologias ágeis e me desenvolver profissionalmente, ao mesmo tempo que esse projeto está sendo construído.",
      name: "Anna Claudia Andrade",
      role: "UX/UI Designer",
      avatarUrl: ""
    },
    {
      id: 2,
      quote:
        "Iniciei na SouJunior como APM, participando da primeira versão do site, onde a 'Experiência real de trabalho em projetos construída por uma empresa de tecnologia' foi a motivação para a minha transição de carreira. A partir do início dessa experiência, com a mentoria da Head de Produto Vanêssa Santana, os estudos em tecnologia ficaram mais fáceis e com clareza. Na SouJunior todos têm a possibilidade de aprender colocando a 'mão na massa', e isso faz a diferença.",
      name: "Léa Cintra",
      role: "Associate Product Manager (APM)",
      avatarUrl: ""
    },
    {
      id: 3,
      quote:
        "Eu conheci o projeto da SouJunior quando estava estudando para ter mais segurança na área, e comecei assistindo as lives e as trocas eram incríveis pra mim, me ajudavam muito a me desenvolver e eu senti que precisava retribuir de alguma forma, então resolvi me inscrever como voluntária e fico muito feliz que posso participar de um projeto incrível assim. Hoje tenho com todas as áreas de Tecnologia que agrega muito para o meu conhecimento como Tech Recruiter.",
      name: "Bianca Alessandra",
      role: "Tech Recruiter",
      avatarUrl: ""
    },
    {
      id: 4,
      quote:
        "Na SouJunior colaboramos com outros participantes para construir ideias de forma única. Presenciar a recepcionalidade dos Juniores e estabelecer conexões é uma experiência enriquecedora. Na SouJunior não aprendemos apenas a trabalhar de forma inteligente e com as melhores práticas, mas também formamos parcerias e desfrutamos de um ambiente empolgante diariamente.",
      name: "Júlio Masson",
      role: "Business",
      avatarUrl: ""
    },
    {
      id: 5,
      quote:
        "Fui voluntário na Sou Junior e pude aprender sobre diversos aspectos da área de desenvolvimento e empregabilidade, o que acabou me auxiliando em processos seletivos, construção do perfil profissional e como ser encontrado pelos tech recruiters, até que após 6 meses de participação meu 'sim' chegou.",
      name: "Anderson Nunes",
      role: "Front-end",
      avatarUrl: ""
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index) => {
    if (index === activeIndex) {
      // Clicar no card da frente faz o próximo assumir o topo
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    } else {
      // Clicar em um card do leque traz ele diretamente para a frente
      setActiveIndex(index);
    }
  };

  // Posicionamento espelhado em leque (Simétrico)
  const getCardStyle = (index) => {
    const total = testimonials.length;
    let offset = (index - activeIndex + total) % total;
    if (offset > total / 2) offset -= total;

    // Card Principal (Frente / Centralizado)
    if (offset === 0) {
      return {
        transform: "translateX(0px) translateY(0px) scale(1)",
        zIndex: 30,
        opacity: 1
      };
    }

    // 1º Card à Direita
    if (offset === 1) {
      return {
        transform: "translateX(70px) translateY(-10px) scale(0.95)",
        zIndex: 20,
        opacity: 0.9
      };
    }

    // 2º Card à Direita (Atrás)
    if (offset === 2) {
      return {
        transform: "translateX(130px) translateY(-20px) scale(0.90)",
        zIndex: 10,
        opacity: 0.8
      };
    }

    // 1º Card à Esquerda
    if (offset === -1) {
      return {
        transform: "translateX(-70px) translateY(-10px) scale(0.95)",
        zIndex: 20,
        opacity: 0.9
      };
    }

    // 2º Card à Esquerda (Atrás)
    if (offset === -2) {
      return {
        transform: "translateX(-130px) translateY(-20px) scale(0.90)",
        zIndex: 10,
        opacity: 0.8
      };
    }

    // Demais cards ocultos
    return {
      transform: "translateX(0px) translateY(0px) scale(0.8)",
      zIndex: 0,
      opacity: 0
    };
  };

  return (
    <div className="w-full relative min-h-[220px] md:min-h-[300px] lg:min-h-[380px] flex justify-center items-center overflow-visible py-8">
      {testimonials.map((item, index) => {
        const style = getCardStyle(index);

        return (
          <div
            key={item.id}
            onClick={() => handleCardClick(index)}
            className="absolute transition-all duration-500 ease-in-out w-full max-w-[360px] md:max-w-[550px] lg:max-w-[800px] cursor-pointer"
            style={{
              transform: style.transform,
              zIndex: style.zIndex,
              opacity: style.opacity
            }}
          >
            <TestimonialCard
              quote={item.quote}
              name={item.name}
              role={item.role}
              avatarUrl={item.avatarUrl}
            />
          </div>
        );
      })}
    </div>
  );
}
