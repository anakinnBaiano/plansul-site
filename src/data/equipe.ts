/**
 * Equipe / liderança institucional (página "Nossa equipe").
 * Substituiu a tabela `MembroEquipe` do banco (Prisma/SQLite) — mesmo
 * conteúdo, agora como arquivo estático (ver histórico em prisma/seed.ts).
 */

export type MembroEquipe = {
  id: string;
  nome: string;
  cargo: string;
  depoimento: string;
  fotoUrl: string | null;
  ordem: number;
};

export const equipe: MembroEquipe[] = [
  {
    id: "diretor-medico-eric-ettinger",
    nome: "Dr. Eric Ettinger Júnior",
    cargo: "Diretor Médico",
    depoimento:
      "Com números em situação crescente, a atual gestão do Plansul é marcada principalmente pela inovação, garantindo saúde suplementar de qualidade em todos os serviços prestados. A verticalização do atendimento é uma realidade muito satisfatória para nós, e o Centro Médico Plansul segue atendendo, diariamente, a todos os seus conveniados com muita ética e respeito.",
    fotoUrl: "/equipe/eric-ettinger-junior.jpg",
    ordem: 0,
  },
  {
    id: "gestor-celso-roberto-dos-santos",
    nome: "Celso Roberto dos Santos",
    cargo: "Gestor",
    depoimento:
      "Uma das grandes preocupações da atual gestão do Plansul é atender com qualidade, seja na venda do plano ou no atendimento direto ao paciente. Para isso, capacitamos todos os envolvidos regularmente focando em um único resultado: a excelência na satisfação. Pesquisas de satisfação são implementadas, e avaliações gerenciais nos permite acompanhar, passo a passo, a realidade do cliente Plansul.",
    fotoUrl: "/equipe/celso-roberto-dos-santos.jpg",
    ordem: 1,
  },
];
