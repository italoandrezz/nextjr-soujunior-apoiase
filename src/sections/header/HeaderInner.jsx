export default function HeaderInner() {
  return (
    /* Header Inner - Container com largura máxima de 1120px (70rem) */
    <div className="max-w-[70rem] w-full min-h-[2.5rem] flex items-center justify-between gap-4">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
          <span className="bg-white rounded-xs"></span>
          <span className="bg-white rounded-xs"></span>
          <span className="bg-white rounded-xs"></span>
          <span className="bg-white rounded-xs"></span>
        </div>
        <span className="text-xl font-bold tracking-tight text-white">
          SouJunior
        </span>
      </div>

      {/* Links de Navegação */}
      <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
        <a href="#o-projeto" className="hover:text-white transition-colors">
          O projeto
        </a>
        <a href="#a-comunidade" className="hover:text-white transition-colors">
          A comunidade
        </a>
        <a href="#como-apoiar" className="hover:text-white transition-colors">
          Como apoiar
        </a>
        <a
          href="#perguntas-frequentes"
          className="hover:text-white transition-colors"
        >
          Perguntas frequentes
        </a>
      </nav>

      {/* Botão Apoie Agora */}
      <div>
        <a
          href="#apoie-agora"
          className="bg-[#3B82F6] hover:bg-blue-600 text-white text-sm font-medium px-6 py-2.5 rounded-xl transition-colors inline-block"
        >
          Apoie agora
        </a>
      </div>
    </div>
  );
}
