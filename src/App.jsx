import HeaderOuter from "./sections/header/HeaderOuter";
import HeroSectionOuter from "./sections/heroSectionOuters/HeroSectionOuter";
import CauseSectionOuter from "./sections/heroSectionCause/CauseSectionOuter";
import FaqSectionOuter from "./sections/faqSection/FaqSectionOuter";
import FacaDiferencaSection from "./sections/facaDiferencaSection/FacaDiferencaSection";
import NossaMetaSection from "./sections/nossaMetaSection/NossaMetaSection";

export default function App() {
  return (
    <div>
      <HeaderOuter />
      <HeroSectionOuter />
      <CauseSectionOuter />
      <NossaMetaSection />
      <FacaDiferencaSection />
      <FaqSectionOuter />
    </div>
  );
}
