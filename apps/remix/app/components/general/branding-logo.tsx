import type { SVGAttributes } from 'react';

export type LogoProps = SVGAttributes<SVGSVGElement>;

export const BrandingLogo = ({ className, ...props }: LogoProps) => {
  return (
    <img
      src="/logo-orgao.png"
      alt="DMGTTRANS"
      className={`h-8 w-auto object-contain ${className || ''}`}
    />
  );
};
