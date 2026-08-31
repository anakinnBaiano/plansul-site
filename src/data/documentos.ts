/**
 * Documentos regulatórios / de transparência.
 * Todos os "href" devem apontar para URLs oficiais (PDF ou página).
 * Documentos em PDF devem abrir em nova aba (target="_blank").
 */

export type Documento = {
  titulo: string;
  descricao: string;
  href: string;
  tipo: "pdf" | "link";
};

export const documentos: Documento[] = [
  {
    titulo: "IDSS",
    descricao: "Índice de Desempenho da Saúde Suplementar.",
    href: "#", // [PREENCHER: URL oficial do documento/relatório de IDSS]
    tipo: "pdf",
  },
  {
    titulo: "Documentos ANS",
    descricao: "Documentos regulatórios exigidos pela Agência Nacional de Saúde Suplementar.",
    href: "https://www.gov.br/ans/pt-br",
    tipo: "link",
  },
  {
    titulo: "Reajustes",
    descricao: "Informações oficiais sobre reajustes de mensalidade.",
    href: "#", // [PREENCHER]
    tipo: "pdf",
  },
  {
    titulo: "Comunicados",
    descricao: "Comunicados oficiais aos beneficiários e prestadores.",
    href: "#", // [PREENCHER]
    tipo: "link",
  },
  {
    titulo: "Política de Privacidade",
    descricao: "Como a Plansul trata dados pessoais, em conformidade com a LGPD.",
    href: "/privacidade",
    tipo: "link",
  },
];
