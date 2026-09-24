import HeaderOuter from "./sections/header/HeaderOuter";
import HeroSectionOuter from "./sections/heroSectionOuters/HeroSectionOuter";
import CauseSectionOuter from "./sections/heroSectionCause/CauseSectionOuter";
import ImpactSectionOuter from "./sections/SectionImpactOuter/ImpactSectionOuter";
import FaqSectionOuter from "./sections/faqSection/FaqSectionOuter";
import FacaDiferencaSection from "./sections/facaDiferencaSection/FacaDiferencaSection";

export default function App() {
  return (
    <div>
      <HeaderOuter />
      <HeroSectionOuter />
      <CauseSectionOuter />
      <ImpactSectionOuter />
      <FacaDiferencaSection />
      <FaqSectionOuter />
    </div>
  );
}
