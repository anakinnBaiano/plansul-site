/**
 * Blocos de texto institucional (ex.: "historia" = texto da página Nossa
 * História). Substituiu a tabela `ConteudoTexto` do banco (Prisma/SQLite) —
 * mesmo conteúdo, agora como arquivo estático (ver histórico em
 * prisma/seed.ts).
 */

export type ConteudoTexto = {
  slug: string;
  titulo: string;
  corpo: string;
};

export const conteudosTexto: ConteudoTexto[] = [
  {
    slug: "historia",
    titulo: "Nossa História",
    corpo:
      "Fundada em 15 de março de 1993, a Plansul nasceu como o plano de saúde próprio da Santa Casa de Itabuna, atuando na modalidade exclusivamente hospitalar e na condição de um setor da própria Santa Casa. Desde então, a empresa vem consolidando sua trajetória na saúde suplementar da região, ampliando a estrutura de atendimento e mantendo o compromisso com a qualidade e a proximidade com quem depende dos seus serviços todos os dias.",
    // [PREENCHER] demais marcos da história oficial (expansão da rede,
    // criação do Centro Médico Plansul, certificações, etc.) — adicionar
    // aqui conforme forem confirmados pela empresa.
  },
];

export function getConteudoTexto(slug: string) {
  return conteudosTexto.find((c) => c.slug === slug) ?? null;
}
