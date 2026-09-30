import { useState } from "react";
import Button from "../../components/Button";
import logo from "../../assets/images/icon-logomarca.svg";
import Typography from "../../components/Typography";
import { APOIA_SE_URL } from "../../constants/links";

const navLinks = [
  { label: "O projeto", href: "#o-projeto" },
  { label: "A comunidade", href: "#a-comunidade" },
  { label: "Como apoiar", href: "#como-apoiar" },
  { label: "Perguntas frequentes", href: "#perguntas-frequentes" },
];

function NavigationLinks({ onNavigate }) {
  return navLinks.map((link) => (
    <a
      key={link.href}
      href={link.href}
      onClick={onNavigate}
      className="group rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE]"
    >
      <Typography
        variant="nav-header"
        color="muted"
        className="transition-colors group-hover:text-white group-focus-visible:text-white"
      >
        {link.label}
      </Typography>
    </a>
  ));
}

export default function HeaderInner() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    /* Header Inner - Container com largura máxima de 1120px (70rem) */
    <div
      className="relative flex min-h-[2.5rem] w-full max-w-[70rem] items-center justify-between gap-3 md:gap-4 lg:gap-8"
      onKeyDown={(event) => {
        if (event.key === "Escape") setIsMenuOpen(false);
      }}
    >
      {/* Logo */}
      <a
        href="#inicio"
        aria-label="Ir para o início"
        className="flex items-center gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE] md:max-lg:shrink-0"
      >
        <img src={logo} alt="SouJunior" className="h-8 w-auto" />
      </a>

      {/* Links de Navegação */}
      <nav aria-label="Navegação principal" className="ml-auto hidden items-center gap-8 md:flex md:max-lg:gap-3 md:max-lg:whitespace-nowrap">
        <NavigationLinks />
      </nav>

      <div className="ml-auto flex items-center gap-3 md:ml-0 md:max-lg:shrink-0">
        <div className="max-[479px]:hidden">
          <Button href={APOIA_SE_URL} showArrow className="md:max-lg:whitespace-nowrap md:max-lg:px-5">
            Apoie agora
          </Button>
        </div>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 text-[#F4F4F6] transition-colors hover:border-[#22D3EE] hover:text-[#22D3EE] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE] md:hidden"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-5 w-5"
          >
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegação mobile"
          className="absolute right-0 top-full mt-4 flex w-full max-w-72 flex-col gap-5 rounded-xl border border-white/10 bg-[#00011A]/95 p-6 shadow-2xl shadow-black/40 backdrop-blur-md md:hidden"
        >
          <NavigationLinks onNavigate={() => setIsMenuOpen(false)} />
          <Button href={APOIA_SE_URL} showArrow className="min-[480px]:hidden">
            Apoie agora
          </Button>
        </nav>
      )}
    </div>
  );
}
