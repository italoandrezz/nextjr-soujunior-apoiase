import Button from "../../components/Button";
import Typography from "../../components/Typography";
import { APOIA_SE_URL } from "../../constants/links";

export default function HeroContent() {
  return (
    /* Hero Content: gap-6 (24px), max-w-[48.875rem] (782px) */
    <div className="flex flex-col justify-center items-center gap-6 max-w-[48.875rem] w-full text-center">
      {/* Título Principal */}
      <Typography variant="h1" color="default" className="font-display font-bold text-[24px] leading-[32px] md:text-[32px] md:leading-[40px] lg:text-[48px] lg:leading-[56px]">
        Toda carreira tech precisa de <br className="hidden sm:inline" /> um
        lugar para começar
      </Typography>

      {/* Descrição */}
      <Typography variant="body-lg" color="default" className="text-gray-300 text-[14px] leading-[20px] md:text-[18px] md:leading-[24px] lg:text-[24px] lg:leading-[32px]">
        Antes da primeira oportunidade, é preciso viver a profissão na prática. Na SouJunior, essa experiência acontece em projetos reais e colaborativos.
      </Typography>

      {/* Ação (CTA + Legenda) */}
      <div className="flex flex-col items-center gap-3 pt-2">
        <Button 
        href={APOIA_SE_URL}
        variant="light" 
        size="lg"
        showArrow
      >
        <span>Quero apoiar</span>
      </Button>
        <span className="text-xs text-gray-400 font-normal">
          A partir de R$ 2/mês pelo APOIA.se
        </span>
      </div>
    </div>
  );
}
