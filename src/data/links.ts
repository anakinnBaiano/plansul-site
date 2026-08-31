import { CONTACT, EXTERNAL_LINKS } from "@/lib/constants";

/**
 * Links usados na seção "Como podemos ajudar?" da Home e nos Acessos Rápidos.
 * Centralizados aqui para não duplicar rótulos/descrições pelas páginas.
 */

export type QuickAccessIcon =
  | "user"
  | "building"
  | "stethoscope"
  | "search"
  | "heart"
  | "headset";

export type QuickAccessLink = {
  titulo: string;
  descricao: string;
  href: string;
  icon: QuickAccessIcon;
  external?: boolean;
};

export const quickAccessLinks: QuickAccessLink[] = [
  {
    titulo: "Sou beneficiário",
    descricao: "Acessar meus serviços",
    href: "/beneficiario",
    icon: "user",
  },
  {
    titulo: "Sou empresa",
    descricao: "Acessar portal da empresa",
    href: EXTERNAL_LINKS.portalEmpresa,
    icon: "building",
    external: true,
  },
  {
    titulo: "Sou prestador",
    descricao: "Acessar portal do prestador",
    href: EXTERNAL_LINKS.portalPrestador,
    icon: "stethoscope",
    external: true,
  },
  {
    titulo: "Quero encontrar um médico",
    descricao: "Acessar Guia Médico",
    href: EXTERNAL_LINKS.guiaMedico,
    icon: "search",
    external: true,
  },
  {
    titulo: "Quero contratar um plano",
    descricao: "Falar com atendimento no WhatsApp",
    href: CONTACT.whatsappPlanosHref,
    icon: "heart",
    external: true,
  },
  {
    titulo: "Preciso de atendimento",
    descricao: "Falar com a Plansul",
    href: "/atendimento",
    icon: "headset",
  },
];
