/**
 * Constantes institucionais.
 *
 * IMPORTANTE: os valores marcados com "[PREENCHER]" são placeholders.
 * Substitua por informações oficiais da Plansul antes de publicar o site
 * (regra de ouro do projeto: nunca inventar dados institucionais).
 */

export const SITE = {
  name: "Plansul",
  legalName: "[PREENCHER: Razão social oficial da Plansul]",
  tagline: "Cuidar de você é o nosso plano.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.plansul.net",
  themeColor: "#0a3e61",
  ansRegistro: "42000-0",
};

export const CONTACT = {
  // Central de atendimento — mesmo número da unidade Itabuna (cadastrado em
  // prisma/seed.ts / Unidade).
  phone: "(73) 3214-3800",
  phoneHref: "tel:+557332143800",
  whatsapp: "(73) 3214-3806",
  whatsappHref:
    "https://api.whatsapp.com/send/?phone=557332143806&text=Gostaria+de+informa%C3%A7%C3%B5es+sobre+minha+situa%C3%A7%C3%A3o+financeira&type=phone_number&app_absent=0",
  // Vendas: (73) 3214-3809 — atende tanto por ligação quanto por WhatsApp
  // (mesmo número usado no botão "Falar com atendimento" dos cards de planos).
  vendas: "(73) 3214-3809",
  vendasHref: "tel:+557332143809",
  // Número específico de WhatsApp usado no botão "Falar com atendimento" dos
  // cards de planos (ver /#planos-heading).
  whatsappPlanosHref:
    "https://api.whatsapp.com/send/?phone=557332143809&text=Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+planos+de+sa%C3%BAde+da+Plansul&type=phone_number&app_absent=0",
  email: "autorizacaoitb@plansul.net",
  ouvidoriaEmail: "ouvidoria@plansul.net",
  address: "R. Santa Cruz, S/N – Nossa Sra. de Fátima, Itabuna – BA, CEP 45603-305",
  hours: "Segunda a sexta, das 07h às 18h",
  // Atendimento de urgência acontece nos hospitais, fora do horário comercial
  // acima — mantido separado porque é uma informação de natureza diferente
  // (não é "quando ligar para o atendimento", é "onde buscar urgência").
  emergencyNote: "Atendimento de urgência: 24h, nos hospitais da rede credenciada.",
};

export const EXTERNAL_LINKS = {
  portalBeneficiario:
    process.env.NEXT_PUBLIC_PORTAL_BENEFICIARIO_URL || "#portal-beneficiario",
  portalEmpresa:
    process.env.NEXT_PUBLIC_PORTAL_EMPRESA_URL || "#portal-empresa",
  portalPrestador:
    process.env.NEXT_PUBLIC_PORTAL_PRESTADOR_URL || "#portal-prestador",
  guiaMedico: process.env.NEXT_PUBLIC_GUIA_MEDICO_URL || "#guia-medico",
  ans: "https://www.gov.br/ans/pt-br",
  googleMapsEmbed: "https://www.google.com/maps?cid=419296120835816008&output=embed",
};

export const APP_LINKS = {
  playStore: "https://play.google.com/store/apps/details?id=br.com.mv.mvsaude.beneficiario.plansul",
  appStore: "[PREENCHER]",
};

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/plansulsaude/",
  facebook: "https://www.facebook.com/plansul",
  linkedin: "[PREENCHER]",
};

export const NAV_LINKS = [
  // Não vai para a página /planos — rola até a seção de planos na Home
  // (o Next.js navega pra "/" e desce até o id "planos-heading").
  { label: "Planos", href: "/#planos-heading" },
  { label: "Empresas", href: "/empresas" },
  { label: "Prestadores", href: "/prestadores" },
  { label: "Rede Credenciada", href: EXTERNAL_LINKS.guiaMedico, external: true },
  { label: "Institucional", href: "/institucional" },
  { label: "IDSS", href: "/institucional/idss" },
  // Rótulo abreviado só no menu (a página usa o nome completo no título) —
  // com o nome inteiro o menu desktop não cabe nem em telas grandes.
  { label: "Reajustes", href: "/institucional/reajustes" },
  { label: "Atendimento", href: "/atendimento" },
  { label: "Notícias Plansul", href: "/noticias" },
];

export const FOOTER_LINKS = {
  institucional: [
    { label: "Institucional", href: "/institucional" },
    // Não vai para a página /planos — rola até a seção de planos na Home
  // (o Next.js navega pra "/" e desce até o id "planos-heading").
  { label: "Planos", href: "/#planos-heading" },
    { label: "Beneficiário", href: "/beneficiario" },
    { label: "Empresas", href: "/empresas" },
    { label: "Prestadores", href: "/prestadores" },
    { label: "Notícias Plansul", href: "/noticias" },
  ],
  institucionalExtra: [
    { label: "Contato", href: "/atendimento/contato" },
    { label: "Ouvidoria", href: "/ouvidoria" },
    { label: "IDSS", href: "/institucional/idss" },
    { label: "Reajuste de Contratos Coletivos", href: "/institucional/reajustes" },
    { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
    { label: "Privacidade", href: "/privacidade" },
  ],
  portais: [
    { label: "Portal do Usuário", href: EXTERNAL_LINKS.portalBeneficiario, external: true },
    { label: "Portal da Empresa", href: EXTERNAL_LINKS.portalEmpresa, external: true },
    { label: "Portal do Prestador", href: EXTERNAL_LINKS.portalPrestador, external: true },
    { label: "Guia Médico", href: EXTERNAL_LINKS.guiaMedico, external: true },
  ],
};
