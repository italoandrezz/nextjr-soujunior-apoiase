import { useId, useState } from 'react';

const faqItems = [
    {
        question: 'O que é o APOIA.se e como funciona minha contribuição?',
        answer: 'O APOIA.se é uma plataforma brasileira de financiamento coletivo utilizada por projetos e iniciativas sociais, educacionais e criativas. É por meio dela que a SouJunior recebe os apoios recorrentes: você escolhe o valor, realiza o pagamento e gerencia sua contribuição diretamente pela plataforma.',
    },
    {
        question: 'Por que a SouJunior precisa de apoio financeiro e como os recursos são utilizados?',
        answer: 'Mesmo sendo construída por voluntários, a SouJunior precisa manter infraestrutura digital, ferramentas, produtos e projetos ativos. As contribuições ajudam a sustentar esse ecossistema para que profissionais continuem desenvolvendo habilidades e construindo experiência prática.',
    },
    {
        question: 'Qual é o valor mínimo para apoiar a SouJunior?',
        answer: 'É possível apoiar a partir de R$ 2 por mês. Outros valores podem ser escolhidos diretamente no APOIA.se.',
    },
    {
        question: 'Como posso participar da SouJunior?',
        answer: 'A SouJunior oferece diferentes formas de atuação dentro da comunidade. É possível participar como Júnior/Mentorado, recebendo acompanhamento e mentoria; como Mentor, apoiando o desenvolvimento dos juniores; como Head, contribuindo voluntariamente com experiência profissional; ou como Apoiador, fortalecendo financeiramente a continuidade dos projetos e iniciativas da comunidade.',
    },
    {
        question: 'Como empresas podem apoiar ou se tornar parceiras da SouJunior?',
        answer: (
            <>
                Empresas e patrocinadores podem contribuir para a continuidade da comunidade e fortalecer iniciativas que oferecem experiência prática e desenvolvimento de novos talentos em tecnologia. Para parcerias B2B, infraestrutura ou patrocínios,{' '}
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=parcerias@soujunior.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white"
                >
                    entre em contato pelo site oficial
                </a>.
            </>
        ),
    },
    {
        question: 'Como posso acompanhar os projetos e o impacto da SouJunior?',
        answer: (
            <>
                Você pode acompanhar as iniciativas e conhecer melhor a atuação da comunidade&nbsp;
                <a
                    href="https://www.soujunior.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white"
                >
                     pelo site oficial da SouJunior
                </a>.
                Lá estão reunidas informações sobre projetos, áreas de atuação, participação da comunidade e outras formas de acompanhar o que está sendo desenvolvido.',
            </>
        )

    },
];

export function AccordionDemo() {
    const [openIndex, setOpenIndex] = useState(null);
    const accordionId = useId();

    return (
        <div className="w-full max-w-[73.25rem]">
            {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                const triggerId = `${accordionId}-trigger-${index}`;
                const panelId = `${accordionId}-panel-${index}`;

                return (
                    <div key={item.question} className="border-b border-white/35">
                        <button
                            type="button"
                            id={triggerId}
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            className="flex w-full items-center justify-between gap-6 rounded-sm py-5 text-left font-funnel-sans text-[16px] font-medium leading-6 text-[#F4F4F6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE] md:px-6 md:py-6 md:text-[18px]"
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                        >
                            <span>{item.question}</span>
                            <span
                                aria-hidden="true"
                                className={`h-2.5 w-2.5 shrink-0 rotate-45 border-b-2 border-r-2 border-[#F4F4F6] transition-transform duration-200 ${isOpen ? '-rotate-[135deg]' : ''}`}
                            />
                        </button>
                        <div
                            id={panelId}
                            role="region"
                            aria-labelledby={triggerId}
                            aria-hidden={!isOpen}
                            inert={!isOpen}
                            className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                        >
                            <div className="overflow-hidden">
                                <p className="px-0 pb-6 font-funnel-sans text-[14px] leading-6 text-white/80 md:px-6 md:text-[16px]">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
