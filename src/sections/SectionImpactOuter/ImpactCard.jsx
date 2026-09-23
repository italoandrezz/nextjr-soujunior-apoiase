export default function ImpactCard({ number, label }) {
  return (
    <div
      className="flex flex-col justify-center items-center p-4 md:p-6 lg:p-8 gap-1 md:gap-2 w-full md:max-w-[14.083rem] lg:max-w-[18.083rem] min-h-[7.25rem] lg:min-h-[10.8125rem] rounded-2xl border border-white/10 shadow-lg text-center"
      style={{
        background:
          "linear-gradient(180deg, rgba(60, 126, 249, 0.1) 0%, rgba(36, 39, 49, 0.1) 68%)"
      }}
    >
      <span className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        {number}
      </span>
      <p className="text-gray-300 text-xs md:text-sm lg:text-base font-normal">
        {label}
      </p>
    </div>
  );
}
