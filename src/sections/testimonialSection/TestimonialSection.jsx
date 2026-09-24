import { useState } from "react";
import Typography from "../../components/Typography";
import andersonAvatar from "../../assets/images/testimonials/anderson.png";
import annaAvatar from "../../assets/images/testimonials/anna-claudia-andrade.png";
import biancaAvatar from "../../assets/images/testimonials/bianca.png";
import julioAvatar from "../../assets/images/testimonials/julio.png";
import leaAvatar from "../../assets/images/testimonials/lea.png";

const testimonials = [
  {
    quote:
      "A SouJunior está me proporcionando ter uma vivência de trabalho como UX/UI Designer. Aplicar o conteúdo estudado em cursos, de forma prática, trabalhar em equipe com metodologias ágeis e me desenvolver profissionalmente, ao mesmo tempo que esse projeto está sendo construído.",
    name: "Anna Claudia Andrade",
    role: "UX/UI Designer",
    avatar: annaAvatar,
  },
  {
    quote:
      "Fui voluntário na Sou Junior e pude aprender sobre diversos aspectos da área de desenvolvimento e empregabilidade, o que acabou me auxiliando em processos seletivos, construção do perfil profissional e como ser encontrado pelos tech recruiters, até que após 6 meses de participação meu ‘sim’ chegou.",
    name: "Anderson Nunes",
    role: "Front-end",
    avatar: andersonAvatar,
  },
  {
    quote:
      "Na SouJunior colaboramos com outros participantes para construir ideias de forma única. Presenciar a receptividade dos Juniores e estabelecer conexões é uma experiência enriquecedora. Na SouJunior não aprendemos apenas a trabalhar de forma inteligente e com as melhores práticas, mas também formamos parcerias e desfrutamos de um ambiente empolgante diariamente.",
    name: "Júlio Masson",
    role: "Business",
    avatar: julioAvatar,
  },
  {
    quote:
      "Eu conheci o projeto da SouJunior quando estava estudando para ter mais segurança na área, e comecei assistindo as lives e as trocas eram incríveis pra mim, me ajudavam muito a me desenvolver e eu senti que precisava retribuir de alguma forma, então resolvi me inscrever como voluntária e fico muito feliz que posso participar de um projeto incrível assim. Hoje tenho com todas as áreas de Tecnologia que agrega muito para o meu conhecimento como Tech Recruiter.",
    name: "Bianca Alessandra",
    role: "Tech Recruiter",
    avatar: biancaAvatar,
  },
  {
    quote:
      "Iniciei na SouJunior como APM, participando da primeira versão do site, onde a ‘Experiência real de trabalho em projetos construída por uma empresa de tecnologia’ foi a motivação para a minha transição de carreira. A partir do início dessa experiência, com a mentoria da Head de Produto Vanêssa Santana, os estudos em tecnologia ficaram mais fáceis e com clareza. Na SouJunior todos têm a possibilidade de aprender colocando a ‘mão na massa’, e isso faz a diferença.",
    name: "Léa Cintra",
    role: "Associate Product Manager (APM)",
    avatar: leaAvatar,
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  function showPrevious() {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % testimonials.length);
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
          aria-live="polite"
          className="relative mx-auto mt-9 grid max-w-[58rem] md:mt-12"
        >
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Exibir depoimento anterior"
            className="absolute bottom-6 left-0 top-6 z-0 w-[52%] cursor-pointer rounded-3xl border border-[#46577E] bg-gradient-to-br from-[#1C2545] to-[#26355F] opacity-80 transition-opacity hover:opacity-100 focus-visible:z-20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE] md:bottom-8 md:top-8"
          />
          <button
            type="button"
            onClick={showNext}
            aria-label="Exibir próximo depoimento"
            className="absolute bottom-6 right-0 top-6 z-0 w-[52%] cursor-pointer rounded-3xl border border-[#46577E] bg-gradient-to-bl from-[#1C2545] to-[#26355F] opacity-80 transition-opacity hover:opacity-100 focus-visible:z-20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE] md:bottom-8 md:top-8"
          />

          {testimonials.map((item, index) => (
            <article
              key={item.name}
              aria-hidden={index !== activeIndex}
              className={`relative z-10 col-start-1 row-start-1 mx-auto flex h-full w-[88%] flex-col rounded-3xl border border-[#53658E] bg-gradient-to-r from-[#222B4B] via-[#263155] to-[#29365F] p-6 shadow-2xl shadow-black/30 md:w-[78%] md:p-10 lg:w-[72%] lg:p-12 ${
                index === activeIndex
                  ? "visible opacity-100"
                  : "invisible opacity-0"
              }`}
            >
              <blockquote className="font-funnel-sans text-sm italic leading-6 text-[#F4F4F6] md:text-base md:leading-7 lg:text-lg lg:leading-8">
                “{item.quote}”
              </blockquote>

              <div className="mt-auto flex items-center gap-3 pt-7">
                <img
                  src={item.avatar}
                  alt={`Foto de ${item.name}`}
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
          ))}
        </div>

        <div
          aria-label="Selecionar depoimento"
          className="mt-5 flex justify-center gap-2"
        >
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Exibir depoimento de ${item.name}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`h-2.5 cursor-pointer rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE] ${
                index === activeIndex
                  ? "w-8 bg-[#22D3EE]"
                  : "w-2.5 bg-[#53658E] hover:bg-[#A9B8DC]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
