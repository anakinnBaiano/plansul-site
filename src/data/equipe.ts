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
    id: "diretor-medico-vinicius-de-brito-rodrigues",
    nome: "Dr. Vinicius de Brito Rodrigues",
    cargo: "Diretor Médico",
    depoimento:
      "Médico e gestor em saúde, acredita que cuidar de pessoas vai muito além da assistência médica. Com experiência em gestão, estratégia e governança, busca contribuir para organizações de saúde mais eficientes, humanas e sustentáveis, onde boas decisões se transformem em melhores experiências para pacientes, profissionais e toda a sociedade.",
    fotoUrl: "/equipe/vinicius-de-brito-rodrigues.jpg",
    ordem: 0,
  },
  {
    id: "gestor-celso-roberto-dos-santos",
    nome: "Celso Roberto dos Santos",
    cargo: "Gestor",
    depoimento:
      "Gestão orientada à organização, ao fortalecimento e à melhoria contínua do plano, com investimentos na capacitação das equipes, no aprimoramento dos processos e na qualidade dos serviços prestados. Mantemos um acompanhamento próximo e constante da satisfação dos beneficiários, buscando compreender suas necessidades e oferecer uma experiência cada vez mais eficiente, acolhedora e humanizada a todos que confiam no PLANSUL.",
    fotoUrl: "/equipe/celso-roberto-dos-santos.jpg",
    ordem: 1,
  },
];
