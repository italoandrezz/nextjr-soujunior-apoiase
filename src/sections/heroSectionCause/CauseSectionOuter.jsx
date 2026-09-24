import CauseSectionInner from "./CauseSectionInner";

export default function CauseSectionOuter() {
  return (
    <section
      className="relative flex w-full flex-col items-center justify-start gap-6 bg-[#00021A] px-6 py-12 min-[391px]:gap-8 min-[391px]:px-8 min-[391px]:py-16 min-[835px]:flex-row min-[835px]:items-start min-[835px]:justify-center min-[835px]:gap-0 min-[835px]:px-20 min-[835px]:py-20"
    >
      <CauseSectionInner />
    </section>
  );
}
