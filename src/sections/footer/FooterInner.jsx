import discordIcon from "../../assets/images/Discordstates.svg";
import discordHoverIcon from "../../assets/images/discordhover.svg";
import facebookIcon from "../../assets/images/Facebookstates.svg";
import facebookHoverIcon from "../../assets/images/facebookhover.svg";
import githubIcon from "../../assets/images/Githubstates.svg";
import githubHoverIcon from "../../assets/images/githubhover.svg";
import websiteIcon from "../../assets/images/Globestates.svg";
import websiteHoverIcon from "../../assets/images/globehover.svg";
import instagramIcon from "../../assets/images/Instagramstates.svg";
import instagramHoverIcon from "../../assets/images/instagramhover.svg";
import linkedinIcon from "../../assets/images/Linkedlnstates.svg";
import linkedinHoverIcon from "../../assets/images/Linkdinhover.svg";
import logo from "../../assets/images/Logomarca.svg";
import youtubeIcon from "../../assets/images/Youtubestates.svg";
import youtubeHoverIcon from "../../assets/images/youtubhover.svg";
import whatsappIcon from "../../assets/images/whatsappstates.png";
import whatsappHoverIcon from "../../assets/images/whatsapphover.png";

const socialIcons = [
  {
    id: "github",
    label: "GitHub",
    iconUrl: githubIcon,
    hoverIconUrl: githubHoverIcon,
    href: "https://github.com/SouJunior",
  },
  {
    id: "discord",
    label: "Discord",
    iconUrl: discordIcon,
    hoverIconUrl: discordHoverIcon,
    href: "https://discord.com/invite/soujunior-community-759176734460346423",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    iconUrl: linkedinIcon,
    hoverIconUrl: linkedinHoverIcon,
    href: "https://www.linkedin.com/company/soujunior/",
  },
  {
    id: "youtube",
    label: "YouTube",
    iconUrl: youtubeIcon,
    hoverIconUrl: youtubeHoverIcon,
    href: "https://www.youtube.com/@soujuniortech",
  },
  {
    id: "instagram",
    label: "Instagram",
    iconUrl: instagramIcon,
    hoverIconUrl: instagramHoverIcon,
    href: "https://www.instagram.com/soujunior.tech/",
  },
  {
    id: "site",
    label: "Website",
    iconUrl: websiteIcon,
    hoverIconUrl: websiteHoverIcon,
    href: "https://www.soujunior.tech/",
  },
  {
    id: "facebook",
    label: "Facebook",
    iconUrl: facebookIcon,
    hoverIconUrl: facebookHoverIcon,
    href: "https://www.facebook.com/people/SouJunior/100086671131030/",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    iconUrl: whatsappIcon,
    hoverIconUrl: whatsappHoverIcon,
    href: "https://chat.whatsapp.com/JJzCMlqMKlw1YOhOk7QB3W",
  },
];

const navLinks = [
  { label: "O projeto", href: "#o-projeto" },
  { label: "A comunidade", href: "#a-comunidade" },
  { label: "Como apoiar", href: "#como-apoiar" },
  { label: "Perguntas frequentes", href: "#perguntas-frequentes" },
];

export default function FooterInner() {
  return (
    /* Footer Inner: max-w-[1120px], flex-col, centralizado */
    <div className="w-full max-w-[1120px] flex flex-col justify-center items-center gap-10">
      {/* Footer Columns: Marca (Esquerda) e Navegação (Direita) */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-20">
        {/* Footer Brand */}
        <div className="flex flex-col items-center md:items-start gap-8 max-w-[885px] w-full">
          {/* Footer Logo */}
          <div className="flex items-center gap-2 h-[20.79px] w-[132.9px] md:h-[52.21px] md:w-auto">
            <img
              src={logo}
              alt="SouJunior"
              className="h-full w-full object-contain md:w-auto"
            />
          </div>

          {/* Texto Descritivo */}
          <p className="text-[#F4F4F6] text-base font-normal leading-[150%] text-center md:text-left max-w-[346px]">
            Comunidade de tecnologia para profissionais em início e transição de
            carreira.
          </p>

          {/* Social Icons */}
          <div className="grid grid-cols-4 items-center gap-6 md:flex md:flex-wrap">
            {socialIcons.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group flex h-6 w-6 items-center justify-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE] md:h-8 md:w-8"
              >
                <span className="relative h-full w-full">
                  <img
                    src={social.iconUrl}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-contain transition-opacity duration-200 group-hover:opacity-0 group-focus-visible:opacity-0 motion-reduce:transition-none"
                  />
                  <img
                    src={social.hoverIconUrl}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Navigation Groups */}
        <div className="flex flex-col items-center md:items-end gap-6 md:gap-8 w-full md:w-auto min-w-[155px]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-sm text-base font-normal text-[#F4F4F6] transition-colors hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE]"
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
