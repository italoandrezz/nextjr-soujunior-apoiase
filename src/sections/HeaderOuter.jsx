import HeaderInner from "./HeaderInner";

export default function HeaderOuter() {
  return (
    /* Header Outer - Estrutura Principal de Layout */
    <header className="w-full bg-[#00011A] flex justify-center items-center py-8 px-4 md:px-20">
      {/* Importação e inclusão do Header Inner */}
      <HeaderInner />
    </header>
  );
}
