// Mapeamento das variações de cores
const colorVariants = {
  default: 'text-[#F4F4F6]', // Cor padrão
  yellow: 'text-[#FACC15]',  // Destaque amarelo
  muted: 'text-[#A9A9A9]',   // Cinza secundário
};

// Mapeamento de todas as variações tipográficas
const typographyVariants = {
  // --- Headings ---
  h1: 'font-funnel-display font-bold text-[24px] leading-[32px] md:text-[32px] md:leading-[40px] lg:text-[48px] lg:leading-[56px]',
  h2: 'font-funnel-display font-bold text-[20px] leading-[24px] md:text-[24px] md:leading-[32px] lg:text-[40px] lg:leading-[50px]',

  // --- Body ---
  'body-lg': 'font-funnel-sans font-normal text-[14px] leading-[20px] md:text-[18px] md:leading-[24px] lg:text-[24px] lg:leading-[32px]',
  'body-md': 'font-funnel-sans font-normal text-[14px] leading-[20px] md:text-[18px] md:leading-[24px] lg:text-[18px] lg:leading-[24px]',
  'body-semibold': 'font-funnel-sans font-semibold text-[14px] leading-[20px] md:text-[18px] md:leading-[24px] lg:text-[22px] lg:leading-[24px]',
  'body-sm': 'font-funnel-sans font-normal text-[12px] leading-[16px] md:text-[14px] md:leading-[18px] lg:text-[16px] lg:leading-[18px]',

  // --- Button & Navigation ---
  // Button / CTA: 12px (Mobile) -> 16px (Tablet/Desktop), line-height: 18px, weight: 600
  button: 'font-funnel-sans font-semibold text-[12px] md:text-[16px] leading-[18px]',

  // Navigation Header: 14px (Desktop), line-height: 14px, weight: 500
  'nav-header': 'font-funnel-sans font-medium text-[14px] leading-[14px]',

  // Navigation Footer: 12px (Mobile) -> 14px (Tablet/Desktop), line-height: 14px, weight: 400
  'nav-footer': 'font-funnel-sans font-normal text-[12px] md:text-[14px] leading-[14px]',

  // Label / Eyebrow: 14px (Mobile) -> 18px (Tablet) -> 24px (Desktop), line-height: 18px, weight: 700, letter-spacing: 1%
  eyebrow: 'font-funnel-sans font-bold text-[14px] md:text-[18px] lg:text-[24px] leading-[18px] tracking-[0.01em]',

  // Caption: 12px (Mobile) -> 14px (Tablet/Desktop), line-height: 14px, weight: 400
  caption: 'font-funnel-sans font-normal text-[12px] md:text-[14px] leading-[14px]',
};

// Tags HTML padrão para manter a semântica correta
const defaultTags = {
  h1: 'h1',
  h2: 'h2',
  'body-lg': 'p',
  'body-md': 'p',
  'body-semibold': 'p',
  'body-sm': 'span',
  button: 'span',
  'nav-header': 'span',
  'nav-footer': 'span',
  eyebrow: 'span',
  caption: 'span',
};

export default function Typography({
  variant = 'body-md',
  color = 'default',
  as,
  className = '',
  children,
  ...props
}) {
  const Component = as || defaultTags[variant] || 'div';
  const variantClasses = typographyVariants[variant] || '';
  const colorClass = colorVariants[color] || colorVariants.default;

  return (
    <Component className={`${colorClass} ${variantClasses} ${className}`} {...props}>
      {children}
    </Component>
  );
}