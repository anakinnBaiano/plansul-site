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
      "O PLANSUL nasceu em 15 de março de 1993, conectado à Santa Casa de Misericórdia de Itabuna, com o propósito de oferecer saúde de qualidade, cuidado e dignidade à população. Hoje, celebramos 33 anos de história, aprendizado e evolução — mais do que um plano de saúde, somos uma instituição comprometida em cuidar de pessoas e fazer a diferença na vida de milhares de famílias.",
  },
];

export function getConteudoTexto(slug: string) {
  return conteudosTexto.find((c) => c.slug === slug) ?? null;
}
