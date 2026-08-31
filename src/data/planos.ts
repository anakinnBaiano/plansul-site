/**
 * Dados dos planos.
 *
 * ATENÇÃO: nenhum preço ou cobertura foi inventado aqui. Por enquanto só a
 * abrangência foi confirmada (Itabuna e Ilhéus); demais características/
 * condições entram aqui assim que a área comercial fornecer.
 */

export type Plano = {
  slug: string;
  categoria: "empresarial" | "familiar";
  nome: string;
  publico: string;
  caracteristicas: string[];
};

export const planos: Plano[] = [
  {
    slug: "empresarial",
    categoria: "empresarial",
    nome: "Plano Empresarial",
    publico: "Empresas de todos os portes que desejam oferecer saúde aos colaboradores.",
    caracteristicas: ["Abrangência: Itabuna e Ilhéus"],
  },
  {
    slug: "familiar",
    categoria: "familiar",
    nome: "Plano Individual / Familiar",
    publico: "Pessoas físicas e famílias que buscam um plano de saúde particular.",
    caracteristicas: ["Abrangência: Itabuna e Ilhéus"],
  },
];
