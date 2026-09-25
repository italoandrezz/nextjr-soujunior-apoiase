import Button from "../../components/Button";
import Typography from "../../components/Typography";
import supportIllustration from "../../assets/images/illustration-apoiase.png";
import { APOIA_SE_URL } from "../../constants/links";
import { participationOptions, supportOptions } from "../../data/siteData";
import ParticipationCard from "./ParticipationCard";

export default function FacaDiferencaSection() {
  return (
    <section
      id="a-comunidade"
      aria-labelledby="faca-diferenca-title"
      className="w-full scroll-mt-20 bg-[#00021A] px-4 py-16 md:px-8 md:py-20 lg:px-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[70rem]">
        <Typography
          id="faca-diferenca-title"
          variant="h2"
          className="text-left"
        >
          Faça a diferença na SouJunior
        </Typography>
        <p className="mt-3 font-funnel-sans text-xs font-semibold uppercase leading-4 tracking-[0.04em] text-[#A9A9A9] md:text-sm">
          Escolha como fazer parte desse movimento
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-3 lg:mt-12 lg:gap-6">
          {participationOptions.map((option) => (
            <ParticipationCard key={option.title} {...option} />
          ))}
        </div>

        <div
          id="como-apoiar"
          className="mt-10 grid scroll-mt-44 grid-cols-1 items-center gap-8 md:mt-14 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.9fr)] md:gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-20"
        >
          <div className="order-2 flex min-w-0 flex-col gap-4 md:order-1 lg:max-w-[34rem]">
            {supportOptions.map((option) => (
              <a
                key={option.value}
                href={APOIA_SE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${option.value}. ${option.description} Apoiar a SouJunior no APOIA.se, abre em nova aba.`}
                className={`group relative block overflow-hidden rounded-xl border p-5 transition-colors duration-300 before:absolute before:inset-0 before:bg-[rgba(60,126,249,0.72)] before:opacity-0 before:transition-opacity before:duration-300 hover:border-[#22D3EE] hover:before:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE] md:p-6 ${
                  option.recommended
                    ? "border-[#3C7EF9]/50 bg-gradient-to-r from-[#0A1662]/45 to-[#173871]"
                    : "border-[#242731] bg-gradient-to-r from-[#080D27] to-[#102A61]"
                }`}
              >
                <div className="relative z-10">
                  {option.recommended && (
                    <p className="mb-4 inline-flex rounded-full bg-[#22D3EE] px-3 py-1 font-funnel-sans text-[0.625rem] font-bold uppercase leading-none text-[#00021A]">
                      Recomendado
                    </p>
                  )}
                  <h3 className="font-funnel-display text-base font-semibold leading-6 text-[#F4F4F6] md:text-lg">
                    {option.value}
                  </h3>
                  <p className="mt-2 font-funnel-sans text-sm leading-5 text-[#A9A9A9] transition-colors duration-300 group-hover:text-[#F4F4F6]">
                    {option.description}
                  </p>
                </div>
              </a>
            ))}

            <p className="mt-2 max-w-[32rem] font-funnel-sans text-xs leading-5 text-[#A9A9A9] md:text-sm">
              Quer contribuir com outro valor? Escolha diretamente no APOIA.se e
              realize o pagamento com segurança.
            </p>
            <Button
              href={APOIA_SE_URL}
              showArrow
              className="mt-1 w-fit"
            >
              Quero apoiar
            </Button>
          </div>

          <div className="order-1 flex min-w-0 justify-center md:order-2 md:justify-end">
            <img
              src={supportIllustration}
              alt="Mascote da SouJunior ao lado de um celular exibindo a campanha no APOIA.se"
              width="572"
              height="677"
              loading="lazy"
              decoding="async"
              className="h-auto w-full max-w-[20rem] object-contain md:max-w-[24rem] lg:max-w-[31rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
