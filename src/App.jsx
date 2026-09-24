import HeaderOuter from "./sections/header/HeaderOuter";
import HeroSectionOuter from "./sections/heroSectionOuters/HeroSectionOuter";
import CauseSectionOuter from "./sections/heroSectionCause/CauseSectionOuter";
import FaqSectionOuter from "./sections/faqSection/FaqSectionOuter";
import FacaDiferencaSection from "./sections/facaDiferencaSection/FacaDiferencaSection";

export default function App() {
  return (
    <div>
      <HeaderOuter />
      <main>
        <HeroSectionOuter />
        <CauseSectionOuter />
        <FacaDiferencaSection />
        <FaqSectionOuter />
      </main>
    </div>
  );
}
