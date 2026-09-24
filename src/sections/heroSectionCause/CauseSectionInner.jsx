import CauseTimelineItem from "./CauseTimeLineItem";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import businessIcon from "../../assets/images/business.svg";
import checkCircleIcon from "../../assets/images/check-circle.svg";
import flowchartIcon from "../../assets/images/flowchart.svg";
import groupsIcon from "../../assets/images/groups.svg";
import paymentArrowDownIcon from "../../assets/images/payment-arrow-down.svg";

export default function CauseSectionInner() {
  const timelineData = [
    {
      id: 1,
      title: "Você contribui",
      description: "Sua doação entra direto no custeio da operação da comunidade",
      iconSrc: paymentArrowDownIcon
    },
    {
      id: 2,
      title: "A estrutura segue de pé",
      description: "Ferramentas, licenças e ambientes digitais que os times usam todo dia",
      iconSrc: businessIcon
    },
    {
      id: 3,
      title: "Os times entram em campo",
      description: "Juniores e mentores de 12 áreas constroem produtos reais, com prazo e entrega",
      iconSrc: groupsIcon
    },
    {
      id: 4,
      title: "O júnior vive a rotina de verdade",
      description: "Squad, cerimônias ágeis e feedback de mentor — o que curso nenhum ensina",
      iconSrc: flowchartIcon
    },
    {
      id: 5,
      title: "E chega preparado ao mercado",
      description: "Sai com portfólio, vivência comprovada e rede de contatos para a primeira vaga",
      iconSrc: checkCircleIcon
    }
  ];

  return (
    <div className="flex w-full max-w-[70rem] flex-col gap-14 min-[835px]:grid min-[835px]:grid-cols-[minmax(16rem,24rem)_minmax(0,1fr)] min-[835px]:gap-16 lg:gap-24">
      <div className="flex flex-col items-start gap-6 min-[835px]:pt-1">
        <Typography
          variant="h1"
          as="h2"
          className="max-w-[22rem] tracking-tight"
        >
          Seu apoio pode ser a primeira oportunidade de alguém
        </Typography>
        <Typography variant="body-sm" as="p" className="max-w-[22rem]">
          Ao apoiar a SouJunior, você impulsiona um ambiente onde{' '}
          <Typography variant="body-sm" color="yellow" as="strong">
            conhecimento vira prática
          </Typography>
        </Typography>
        <Button href="https://apoia.se/soujunior" variant="light" showArrow>
          Apoie agora
        </Button>
      </div>

      <div className="relative flex flex-col gap-0 pl-0 min-[500px]:pl-4 min-[835px]:pl-0">
        {timelineData.map((item) => (
          <CauseTimelineItem
            key={item.id}
            title={item.title}
            description={item.description}
            iconSrc={item.iconSrc}
            altText={item.title}
            isLast={item.id === timelineData.length}
          />
        ))}
      </div>
    </div>
  );
}
