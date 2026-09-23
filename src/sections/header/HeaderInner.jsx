import Button from "../../components/Button";
import logo from "../../assets/images/icon-logomarca.svg";
import Typography from "../../components/Typography";

export default function HeaderInner() {
  return (
    /* Header Inner - Container com largura máxima de 1120px (70rem) */
    <div className="max-w-[70rem] w-full min-h-[2.5rem] flex items-center justify-between gap-4">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img src={logo} alt="SouJunior" className="h-8 w-auto" />
      </div>

      {/* Links de Navegação */}
      <nav className="hidden md:flex items-center gap-8 ml-auto">
        <a href="#o-projeto" className="group">
          <Typography variant="nav-header" color="muted" className="transition-colors group-hover:text-white">
            O projeto
          </Typography>
        </a>
        <a href="#a-comunidade" className="group">
          <Typography variant="nav-header" color="muted" className="transition-colors group-hover:text-white">
            A comunidade
          </Typography>
        </a>
        <a href="#como-apoiar" className="group">
          <Typography variant="nav-header" color="muted" className="transition-colors group-hover:text-white">
            Como apoiar
          </Typography>
        </a>
        <a href="#perguntas-frequentes" className="group">
          <Typography variant="nav-header" color="muted" className="transition-colors group-hover:text-white">
            Perguntas frequentes
          </Typography>
        </a>
      </nav>

      {/* Botão Apoie Agora */}
      <div>
        <Button href="https://apoia.se/soujunior" target="_blank" rel="noopener noreferrer" showArrow>
          Apoie agora
        </Button>
      </div>
    </div>
  );
}
