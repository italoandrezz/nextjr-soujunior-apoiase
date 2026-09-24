import HeaderOuter from "./sections/header/HeaderOuter";
import HeroSectionOuter from "./sections/heroSectionOuters/HeroSectionOuter";
import CauseSectionOuter from "./sections/heroSectionCause/CauseSectionOuter";
import FaqSectionOuter from "./sections/faqSection/FaqSectionOuter";
import FacaDiferencaSection from "./sections/facaDiferencaSection/FacaDiferencaSection";
import NossaMetaSection from "./sections/nossaMetaSection/NossaMetaSection";
import FooterOuter from "./sections/footer/FooterOuter";

export default function App() {
  return (
    <div>
      <HeaderOuter />
      <main>
        <HeroSectionOuter />
        <CauseSectionOuter />
        <NossaMetaSection />
        <FacaDiferencaSection />
        <FaqSectionOuter />
        <FooterOuter />
      </main>
    </div>
  );
}
