import HeroContent from "./HeroContent";

export default function HeroSectionInner() {
  return (
    /* 
      Hero Section Inner:
      - max-w-[57.625rem] = 922px
      - min-h-[28.5rem] = 456px
      - rounded-[2.5rem] = 40px
      - bg-black/20 = rgba(0,0,0,0.2)
      - border-[#F4F4F6]/50 = border: 0.5px solid #F4F4F6
    */
    <div className="max-w-[57.625rem] w-full min-h-[28.5rem] bg-black/20 backdrop-blur-md border border-[#F4F4F6]/30 rounded-[2.5rem] p-6 sm:p-8 md:p-12 flex flex-col justify-center items-center shadow-2xl">
      <HeroContent />
    </div>
  );
}
