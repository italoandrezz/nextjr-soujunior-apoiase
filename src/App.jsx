import HeaderOuter from "./sections/header/HeaderOuter";
import HeroSectionOuter from "./sections/heroSectionOuters/HeroSectionOuter";
import CauseSectionOuter from "./sections/heroSectionCause/CauseSectionOuter";
import FaqSectionOuter from "./sections/faqSection/FaqSectionOuter";
import FacaDiferencaSection from "./sections/facaDiferencaSection/FacaDiferencaSection";
import NossaMetaSection from "./sections/nossaMetaSection/NossaMetaSection";
import TestimonialSection from "./sections/testimonialSection/TestimonialSection";
import ImpactSection from "./sections/impactSection/ImpactSection";
import FooterOuter from "./sections/footer/FooterOuter";

export default function App() {
  return (
    <div>
      <a
        href="#conteudo-principal"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-[#F3F4F6] px-4 py-3 font-funnel-sans font-semibold text-[#00021A] transition-transform focus:translate-y-0"
      >
        Ir para o conteúdo principal
      </a>
      <HeaderOuter />
      <main id="conteudo-principal" tabIndex="-1">
        <HeroSectionOuter />
        <CauseSectionOuter />
        <NossaMetaSection />
        <FacaDiferencaSection />
        <ImpactSection />
        <TestimonialSection />
        <FaqSectionOuter />
        <FooterOuter />
      </main>
    </div>
  );
}
