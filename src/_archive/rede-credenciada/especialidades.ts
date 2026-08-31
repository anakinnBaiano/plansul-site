/**
 * Lista de especialidades usada como filtro na página de Rede Credenciada.
 * Preencher com a lista real assim que integrado ao Guia Médico oficial.
 */

export type Especialidade = {
  slug: string;
  nome: string;
};

export const especialidades: Especialidade[] = [
  { slug: "clinica-geral", nome: "Clínica Geral" },
  { slug: "cardiologia", nome: "Cardiologia" },
  { slug: "pediatria", nome: "Pediatria" },
  { slug: "ginecologia-obstetricia", nome: "Ginecologia e Obstetrícia" },
  { slug: "ortopedia", nome: "Ortopedia" },
  { slug: "dermatologia", nome: "Dermatologia" },
  // [PREENCHER: lista completa de especialidades oficiais]
];
