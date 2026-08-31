/**
 * Unidades físicas de atendimento.
 * Substituiu a tabela `Unidade` do banco (Prisma/SQLite) — mesmo conteúdo,
 * agora como arquivo estático (ver histórico em prisma/seed.ts).
 */

export type Unidade = {
  id: string;
  slug: string;
  cidade: string;
  estado: string;
  endereco: string;
  telefone: string;
  ordem: number;
};

export const unidades: Unidade[] = [
  {
    id: "itabuna-ba",
    slug: "itabuna-ba",
    cidade: "Itabuna",
    estado: "BA",
    endereco: "R. Santa Cruz, S/N – Nossa Sra. de Fátima, Itabuna – BA, CEP 45603-305",
    telefone: "(73) 3214-3800",
    ordem: 0,
  },
  {
    id: "ilheus-ba",
    slug: "ilheus-ba",
    cidade: "Ilhéus",
    estado: "BA",
    endereco: "Galeria Encantur, sala 7 – Rua Jorge Amado, 102, Centro, Ilhéus – BA, CEP 45653-200",
    telefone: "(73) 3223-9623",
    ordem: 1,
  },
];
