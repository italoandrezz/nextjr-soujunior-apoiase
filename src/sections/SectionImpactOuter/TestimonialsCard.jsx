export default function TestimonialCard({
  quote,
  name,
  role,
  avatarUrl,
  onClick
}) {
  return (
    <div
      onClick={onClick}
      className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px] min-h-[180px] md:min-h-[278px] lg:min-h-[350px] rounded-[2rem] border border-[#F4F4F6]/40 p-5 md:p-8 lg:p-10 flex flex-col justify-between shadow-2xl cursor-pointer select-none"
      style={{
        background: "linear-gradient(259.04deg, #2F3E6F 0%, #1E263F 99.01%)"
      }}
    >
      {/* Citação / Depoimento */}
      <p className="text-gray-200 italic font-normal text-xs md:text-base lg:text-lg leading-relaxed md:leading-normal">
        "{quote}"
      </p>

      {/* Perfil do Autor */}
      <div className="flex items-center gap-3 md:gap-4 pt-4">
        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border border-white/20 bg-gray-600 flex-shrink-0">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white text-xs font-bold bg-blue-900">
              {name ? name.charAt(0) : "U"}
            </div>
          )}
        </div>

        <div className="flex flex-col text-left">
          <h4 className="text-white font-bold text-sm md:text-base lg:text-lg leading-snug">
            {name}
          </h4>
          <span className="text-gray-300 text-xs md:text-sm font-normal">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}
