import Typography from '../../components/Typography';
import Button from '../../components/Button';
import { AccordionDemo } from '../../components/Accordion';

export default function FaqSectionOuter() {
    return (
        <section className="flex w-full flex-col items-center bg-[#113470] px-4 py-12 md:px-10 md:py-14 lg:px-16">
            <div className="flex w-full max-w-[80rem] flex-col items-center gap-8 md:gap-10">
                <Typography variant="h2" className="w-full text-center items-center justify-center lg:px-6">
                    Ainda ficou com alguma dúvida?
                </Typography>

                <AccordionDemo />
                
                <Button
                    href="mailto:parcerias@soujunior.tech"
                    showSupportAgent
                    className="rounded-[10px] px-5 py-3 text-[12px] text-[#00021A]"
                >
                    Fale conosco
                </Button>
            </div>
        </section>
    );

}
