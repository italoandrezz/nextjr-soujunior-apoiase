export default function FooterInner() {
  const logoUrl = "/src/assets/images/Logomarca.svg";

  // Lista de redes sociais com ícone e link
  const socialIcons = [
    {
      id: "github",
      label: "GitHub",
      iconUrl: "/src/assets/images/Github states.svg",
      href: "#"
    },
    {
      id: "discord",
      label: "Discord",
      iconUrl: "/src/assets/images/Discord states.svg",
      href: "#"
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      iconUrl: "/src/assets/images/Linkedln states.svg",
      href: "#"
    },
    {
      id: "youtube",
      label: "YouTube",
      iconUrl: "/src/assets/images/Youtube states.svg",
      href: "#"
    },
    {
      id: "instagram",
      label: "Instagram",
      iconUrl: "/src/assets/images/Instagram states.svg",
      href: "#"
    },
    {
      id: "site",
      label: "Website",
      iconUrl: "/src/assets/images/globe states.svg",
      href: "#"
    },
    {
      id: "facebook",
      label: "Facebook",
      iconUrl: "/src/assets/images/Facebook states.svg",
      href: "#"
    }
  ];

  // Links de Navegação do Rodapé
  const navLinks = [
    { label: "O projeto", href: "#projeto" },
    { label: "A comunidade", href: "#comunidade" },
    { label: "Como apoiar", href: "#apoiar" },
    { label: "Perguntas frequentes", href: "#faq" }
  ];

  return (
    /* Footer Inner: max-w-[1120px], flex-col, centralizado */
    <div className="w-full max-w-[1120px] flex flex-col justify-center items-center gap-10">
      {/* Footer Columns: Marca (Esquerda) e Navegação (Direita) */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8 md:gap-20">
        {/* Footer Brand */}
        <div className="flex flex-col items-start gap-8 max-w-[885px] w-full">
          {/* Footer Logo */}
          <div className="flex items-center gap-2 h-[52.21px]">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt="SouJunior Logo"
                className="h-full object-contain"
              />
            ) : (
              <span className="text-white text-2xl md:text-3xl font-bold tracking-tight">
                SouJunior
              </span>
            )}
          </div>

          {/* Texto Descritivo */}
          <p className="text-[#F4F4F6] text-base font-normal leading-[150%] max-w-[346px]">
            Comunidade de tecnologia para profissionais em início e transição de
            carreira.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6 flex-wrap">
            {socialIcons.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 flex items-center justify-center text-[#2fd3f6] hover:opacity-80 transition-opacity"
              >
                {social.iconUrl ? (
                  <img
                    src={social.iconUrl}
                    alt={social.label}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  /* Fallback visual simples caso a imagem não seja carregada */
                  <span className="text-xs font-bold uppercase">
                    {social.label.slice(0, 2)}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Footer Navigation Groups */}
        <div className="flex flex-col items-start md:items-end gap-6 md:gap-8 w-full md:w-auto min-w-[155px]">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-[#F4F4F6] text-base font-normal hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Linha Divisória */}
      <div className="w-full h-[1px] bg-white/20 my-2" />

      {/* Copyright */}
      <div className="text-gray-400 text-sm font-normal text-center">
        © 2026 SouJunior · Todos os direitos reservados
      </div>
    </div>
  );
}
