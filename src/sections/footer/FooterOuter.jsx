import FooterInner from "./FooterInner";

export default function FooterOuter() {
  return (
    /* 
      Footer Outer:
      - Cor neutra de fundo: #242731
      - Padding Desktop: 112px superior/inferior, 80px laterais (py-28 px-20)
      - Responsivo para Tablet/Mobile: py-12 px-6
    */
    <footer className="w-full bg-[#242731] flex justify-center items-center py-12 md:py-20 lg:py-[112px] px-6 md:px-12 lg:px-20">
      <FooterInner />
    </footer>
  );
}
