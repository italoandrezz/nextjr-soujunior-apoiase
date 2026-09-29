# 🚀 NextJr | SouJunior APOIA.se

[![CI](https://github.com/italoandrezz/nextjr-soujunior-apoiase/actions/workflows/ci.yml/badge.svg)](https://github.com/italoandrezz/nextjr-soujunior-apoiase/actions/workflows/ci.yml)
[![Licença MIT](https://img.shields.io/badge/licen%C3%A7a-MIT-blue.svg)](LICENSE)

Landing page desenvolvida pela equipe **NextJr** durante o Hackathon SouJunior. A aplicação apresenta o impacto da comunidade, explica como as contribuições sustentam seus projetos e direciona pessoas interessadas à campanha oficial da SouJunior no APOIA.se.

## 🌐 Aplicação publicada

**[Acessar a landing page](https://nextjr-soujunior-apoiase.vercel.app/)**

## 🎯 Funcionalidades

- apresentação da missão e do impacto da SouJunior;
- explicação visual do caminho percorrido por cada contribuição;
- acompanhamento da meta mensal da campanha;
- opções de apoio com acesso direto ao APOIA.se;
- indicadores de impacto da comunidade;
- carrossel de depoimentos com botões, teclado, mouse e gestos de arraste;
- perguntas frequentes em formato de acordeão;
- navegação interna responsiva para desktop, tablet e mobile;
- respeito à preferência de movimento reduzido do sistema;
- links para os canais oficiais da SouJunior.

> Os valores da campanha exibidos na página são um recorte referente a **24/09/2026** e ficam centralizados em `src/data/siteData.js`.

## 🛠️ Tecnologias

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- JavaScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- ESLint
- GitHub Actions
- Vercel

## 📁 Estrutura do projeto

```text
.
├── .github/
│   └── workflows/          # Integração contínua e regras de PR
├── public/                 # Favicon, robots, sitemap e imagem social
├── src/
│   ├── assets/             # Imagens, ícones e vídeo
│   ├── components/         # Componentes reutilizáveis
│   ├── constants/          # URLs compartilhadas
│   ├── data/               # Dados da campanha e depoimentos
│   ├── hooks/              # Hooks de movimento e interação visual
│   ├── sections/           # Seções da landing page
│   ├── test/               # Configuração global dos testes
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

Os testes ficam próximos dos componentes e das seções que validam, usando o padrão `*.test.jsx`.

## 🚀 Como executar

### Pré-requisitos

- [Node.js 22](https://nodejs.org/)
- npm

Se você utiliza NVM, execute `nvm use` na raiz do projeto para selecionar a versão indicada no arquivo `.nvmrc`.

### Instalação

```bash
git clone https://github.com/italoandrezz/nextjr-soujunior-apoiase.git
cd nextjr-soujunior-apoiase
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível no endereço informado pelo Vite no terminal.

## 🧪 Comandos disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run lint` | Verifica o padrão e a qualidade do código |
| `npm test` | Executa todos os testes uma vez |
| `npm run test:watch` | Executa os testes em modo de observação |
| `npm run test:coverage` | Gera o relatório de cobertura |
| `npm run build` | Gera o build otimizado de produção em `dist/` |
| `npm run preview` | Abre localmente o build de produção |

## ✅ Qualidade e integração contínua

Os testes automatizados cobrem componentes, hooks, seções e os principais fluxos de interação da landing page. A cobertura pode ser consultada com `npm run test:coverage`; o relatório HTML é gerado em `coverage/`.

O workflow de CI é executado em pushes e Pull Requests destinados à `develop` ou à `main` e valida:

1. instalação reproduzível com `npm ci`;
2. lint;
3. testes automatizados com limites mínimos de cobertura;
4. build de produção.

Pull Requests destinados à `main` também são validados para garantir que tenham origem na `develop`.

## ♿ Acessibilidade e responsividade

O projeto utiliza:

- landmarks e hierarquia semântica;
- link de salto para o conteúdo principal;
- navegação por teclado e indicadores de foco;
- nomes acessíveis em controles e links externos;
- textos alternativos em imagens informativas;
- conteúdo decorativo oculto para tecnologias assistivas;
- suporte a `prefers-reduced-motion`;
- layouts responsivos para desktop, tablet e mobile.

## 🚢 Deploy

O projeto está conectado à Vercel. Para seguir o fluxo deste repositório, a recomendação é configurar a `main` como **Production Branch**; as demais branches e os Pull Requests podem gerar ambientes de preview para validação.

Antes de uma entrega, execute:

```bash
npm run lint
npm test
npm run build
```

## 🌿 Fluxo de desenvolvimento

```text
feature/* ou fix/* → develop → main
```

- `main`: versão estável publicada em produção;
- `develop`: integração das funcionalidades aprovadas;
- `feature/*`, `fix/*`, `test/*` e `chore/*`: alterações isoladas.

As mudanças são integradas por Pull Requests e passam por Code Review antes do merge.

## 📝 Padrão de commits

O projeto adota Conventional Commits:

```text
feat: nova funcionalidade
fix: correção
docs: documentação
test: testes
refactor: refatoração
chore: configuração ou manutenção
```

## 👥 Equipe

A **NextJr** é uma equipe multidisciplinar formada por profissionais das áreas de Produto, Desenvolvimento, Qualidade e Design.

| Integrante | Papel na Squad |
|---|---|
| Gabriela Kimura | Design — Mentora |
| Paula Lins | Product Manager (PM) |
| Marina Santigo | Product Manager (PM) |
| Renata Borges | Quality Assurance (QA) |
| Louise Guimarães | UX/UI Designer |
| Bernadette Iglesias | UX/UI Designer |
| Ítalo Ramos | Desenvolvedor |
| Thaina de Souza | Desenvolvedora |
| Eric Souza | Desenvolvedor |
| Leandro Carone | Desenvolvedor |

## 📌 Status

✅ Projeto concluído e publicado. Melhorias incrementais podem continuar sendo desenvolvidas pelo fluxo de branches descrito acima.

## 📄 Licença

Este projeto está disponível sob a [licença MIT](LICENSE).
