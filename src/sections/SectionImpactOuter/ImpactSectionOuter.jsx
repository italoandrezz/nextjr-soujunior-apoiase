import ImpactSectionInner from "./ImpactSectionInner";

export default function ImpactSectionOuter() {
  return (
    /* 
      Impact Section Outer (Responsivo: Mobile -> Tablet -> Desktop)
      - Mobile: min-h-auto, pb-12, px-4
      - Tablet (md: 768px+): min-h-[1091px] (68.1875rem), pb-16 (64px), px-8 (32px)
      - Desktop (lg: 1024px+): min-h-[1455px] (90.9375rem), pb-20 (80px), px-20 (80px)
    */
    <section
      className="w-full min-h-[68.1875rem] lg:min-h-[90.9375rem] mx-auto flex flex-col justify-end items-center pt-0 pb-12 md:pb-16 lg:pb-20 px-4 md:px-8 lg:px-20 relative"
      style={{
        background: "linear-gradient(180deg, #113470 0%, #242731 14.9%)"
      }}
    >
      <ImpactSectionInner />
    </section>
  );
}
