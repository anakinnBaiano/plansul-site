/**
 * Dados dos planos.
 *
 * ATENÇÃO: nenhum preço foi inventado aqui. Características e condições
 * (coparticipação, fidelidade, abrangência) são as oficiais informadas pela
 * área comercial da Plansul.
 */

export type Plano = {
  slug: string;
  categoria: "empresarial" | "familiar";
  nome: string;
  publico: string;
  caracteristicas: string[];
  // Comercialização pausada — o card aparece em cinza com um selo "Desativado".
  desativado?: boolean;
};

export const planos: Plano[] = [
  {
    slug: "empresarial",
    categoria: "empresarial",
    nome: "Plano Empresarial",
    publico: "Empresas de todos os portes que desejam oferecer saúde aos colaboradores.",
    caracteristicas: [
      "Categoria Exclusive: coparticipação de 30% sobre o valor dos procedimentos realizados, além da mensalidade",
      "Coparticipação total limitada ao valor de uma mensalidade",
      "Período de fidelidade: 12 meses",
      "Abrangência: Itabuna ou Ilhéus, conforme o plano contratado",
    ],
  },
  {
    slug: "familiar",
    categoria: "familiar",
    nome: "Plano Individual / Familiar",
    publico: "Pessoas físicas e famílias que buscam um plano de saúde particular.",
    caracteristicas: [
      "Categoria Exclusive: coparticipação de 30% sobre o valor dos procedimentos, limitada ao valor de uma mensalidade",
      "Categoria Gold: coparticipação de 50% após o beneficiário exceder o uso do pacote contratado",
      "Período de fidelidade: 12 meses",
      "Abrangência: Itabuna ou Ilhéus, conforme o plano contratado",
      "Situação atual: planos temporariamente inativos para novas contratações",
    ],
    desativado: true,
  },
];
