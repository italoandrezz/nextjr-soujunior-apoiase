import Button from "../../components/Button";
import Typography from "../../components/Typography";

const campaignGoal = {
  monthlyGoal: "R$ 1.500/mês",
  currentAmount: "R$ 767",
  progress: 51.13,
  supporters: 116,
};

export default function NossaMetaSection() {
  return (
    <section
      aria-labelledby="nossa-meta-title"
      className="w-full bg-[#00021A] px-4 py-12 md:px-8 md:py-16 lg:px-20 lg:py-20"
    >
      <div className="mx-auto grid w-full max-w-[70rem] grid-cols-1 gap-10 rounded-3xl border border-[#4E4E4E] bg-gradient-to-br from-[#05071B] to-[#080D27] p-6 md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:p-12">
        <div>
          <p className="font-funnel-sans text-sm font-bold uppercase tracking-[0.08em] text-[#F4F4F6] md:text-base">
            Nossa meta
          </p>
          <Typography
            id="nossa-meta-title"
            variant="h2"
            color="yellow"
            className="mt-4"
          >
            {campaignGoal.monthlyGoal}
          </Typography>
          <Button
            href="https://apoia.se/soujunior"
            showArrow
            className="mt-6"
          >
            Apoie agora
          </Button>
        </div>

        <div>
          <div
            role="progressbar"
            aria-label="Progresso da meta mensal"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={campaignGoal.progress}
            aria-valuetext={`${campaignGoal.progress.toLocaleString("pt-BR")}% da meta mensal alcançada`}
            className="h-12 w-full rounded-full border-2 border-[#22D3EE] bg-[#242731] p-1.5"
          >
            <div
              className="h-full rounded-full bg-[#22D3EE]"
              style={{ width: `${campaignGoal.progress}%` }}
            />
          </div>

          <p className="mt-5 font-funnel-sans text-sm font-semibold leading-5 text-[#F4F4F6] md:text-base md:leading-6">
            {campaignGoal.progress.toLocaleString("pt-BR")}% ({campaignGoal.currentAmount}) da
            meta de R$ 1.500/mês, graças a {campaignGoal.supporters} apoiadores.
          </p>
          <p className="mt-4 max-w-[36rem] font-funnel-sans text-xs leading-5 text-[#A9A9A9] md:text-sm md:leading-6">
            Para essa experiência continuar acontecendo, esse valor mensal ajuda
            a sustentar a estrutura necessária para os projetos e iniciativas da
            SouJunior.
          </p>
        </div>
      </div>
    </section>
  );
}
