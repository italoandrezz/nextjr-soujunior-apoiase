export default function CauseTimelineItem({
  title,
  description,
  iconSrc,
  altText
}) {
  return (
    <div className="w-full min-[835px]:w-auto min-[835px]:flex-1 min-[835px]:min-w-0 flex flex-row min-[835px]:flex-col items-center min-[835px]:items-center text-left min-[835px]:text-center relative z-10 px-0 min-[835px]:px-2">
      {/* 1. Círculo do Ícone da Timeline */}
      <div className="w-12 h-12 min-[835px]:w-14 min-[835px]:h-14 rounded-full bg-[#22D3EE] flex items-center justify-center p-2.5 shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105">
        {iconSrc ? (
          <img
            src={iconSrc}
            alt={altText || title}
            className="w-full h-full object-contain"
          />
        ) : (
          /* Placeholder visual caso o ícone ainda não tenha sido inserido */
          <span className="w-3 h-3 bg-[#00021A] rounded-full"></span>
        )}
      </div>

      {/* 2. Conteúdo de Texto */}
      <div className="mt-0 ml-4 min-[835px]:mt-6 min-[835px]:ml-0 flex-1 min-w-0 flex flex-col items-center text-center gap-2">
        <h3 className="text-white text-base min-[835px]:text-lg font-bold leading-snug">
          {title}
        </h3>
        <p className="text-gray-400 text-xs min-[835px]:text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
