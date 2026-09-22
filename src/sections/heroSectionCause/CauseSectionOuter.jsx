import CauseSectionInner from "./CauseSectionInner";

export default function CauseSectionOuter() {
  return (
    /* 
      Cause Section Outer:
      - py-16 md:py-20 px-4 md:px-20 (Padding de 80px superior e lateral)
      - Background com gradiente 180deg de #00021A (75.16%) para #113470 (100%)
    */
    <section
      className="w-full h-[821px] flex flex-col justify-start items-center gap-6 pt-12 px-6 pb-0 min-[391px]:h-[913px] min-[391px]:gap-8 min-[391px]:pt-16 min-[391px]:px-8 min-[835px]:h-[784px] min-[835px]:flex-row min-[835px]:justify-center min-[835px]:items-start min-[835px]:gap-0 min-[835px]:pt-20 min-[835px]:px-20 relative"
      style={{
        background: "linear-gradient(180deg, #00021A 75.16%, #113470 100%)"
      }}
    >
      <CauseSectionInner />
    </section>
  );
}
