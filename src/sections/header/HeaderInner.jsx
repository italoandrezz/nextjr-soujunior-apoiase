import Button from "../../components/Button";
import logo from "../../assets/images/icon-logomarca.svg";
import Typography from "../../components/Typography";
import { APOIA_SE_URL } from "../../constants/links";

export default function HeaderInner() {
  return (
    /* Header Inner - Container com largura máxima de 1120px (70rem) */
    <div className="max-w-[70rem] w-full min-h-[2.5rem] flex items-center justify-between gap-8">
      {/* Logo */}
      <a
        href="#inicio"
        aria-label="Ir para o início"
        className="flex items-center gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE]"
      >
        <img src={logo} alt="SouJunior" className="h-8 w-auto" />
      </a>

      {/* Links de Navegação */}
      <nav className="hidden md:flex items-center gap-8 ml-auto">
        <a
          href="#o-projeto"
          className="group rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE]"
        >
          <Typography
            variant="nav-header"
            color="muted"
            className="transition-colors group-hover:text-white"
          >
            O projeto
          </Typography>
        </a>
        <a
          href="#a-comunidade"
          className="group rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE]"
        >
          <Typography
            variant="nav-header"
            color="muted"
            className="transition-colors group-hover:text-white"
          >
            A comunidade
          </Typography>
        </a>
        <a
          href="#como-apoiar"
          className="group rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE]"
        >
          <Typography
            variant="nav-header"
            color="muted"
            className="transition-colors group-hover:text-white"
          >
            Como apoiar
          </Typography>
        </a>
        <a
          href="#perguntas-frequentes"
          className="group rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE]"
        >
          <Typography
            variant="nav-header"
            color="muted"
            className="transition-colors group-hover:text-white"
          >
            Perguntas frequentes
          </Typography>
        </a>
      </nav>

      {/* Botão Apoie Agora */}
      <div className="">
        <Button href={APOIA_SE_URL} showArrow>
          Apoie agora
        </Button>
      </div>
    </div>
  );
}
