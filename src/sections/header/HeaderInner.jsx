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

function NavigationLinks() {
  return navLinks.map((link) => (
    <a
      key={link.href}
      href={link.href}
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

  return (
    /* Header Inner - Container com largura máxima de 1120px (70rem) */
    <div
      className="relative flex min-h-[2.5rem] w-full max-w-[70rem] items-center justify-between gap-3 md:gap-4 lg:gap-8"
    >
      {/* Logo */}
      <a
        href="#inicio"
        aria-label="Ir para o início"
        className="flex items-center gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE] md:max-lg:shrink-0"
      >
        <img src={logo} alt="SouJunior" className="h-auto w-[101px] md:h-8 md:w-auto" />
      </a>

      {/* Links de Navegação */}
      <nav aria-label="Navegação principal" className="ml-auto hidden items-center gap-8 md:flex md:max-lg:gap-3 md:max-lg:whitespace-nowrap">
        <NavigationLinks />
      </nav>

      <div className="ml-auto shrink-0 md:ml-0 lg:shrink">
        <Button
          href={APOIA_SE_URL}
          showArrow
          className="max-md:whitespace-nowrap max-md:px-5 max-md:py-3 max-md:text-xs md:max-lg:whitespace-nowrap md:max-lg:px-5"
        >
          Apoie agora
        </Button>
      </div>
    </div>
  );
}
