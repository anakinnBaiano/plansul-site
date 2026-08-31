/**
 * Documentos regulatórios publicados por ano (IDSS e Reajuste de Contratos
 * Coletivos — um PDF por ano). Substituiu a tabela `Documento` do banco
 * (Prisma/SQLite) — mesmo conteúdo, agora como arquivo estático (ver
 * histórico em prisma/seed.ts).
 */

export type DocumentoPorAno = {
  id: string;
  categoria: "idss" | "reajuste-coletivo";
  ano: number;
  titulo: string;
  descricao: string | null;
  // Caminho público do PDF. Fica null enquanto o arquivo oficial ainda não
  // foi recebido — o front-end mostra "PDF em breve" nesse caso, nunca
  // inventa um link.
  arquivoUrl: string | null;
  ordem: number;
};

// IDSS 2018–2026: só os anos de 2022, 2023 e 2025 têm PDF oficial recebido
// até agora. 2021 não tem PDF próprio — a Plansul pediu para usar o
// relatório de 2022 também nesse ano enquanto o documento de 2021 não chega.
const arquivosIdss: Record<number, string | null> = {
  2018: "/documentos/idss/idss-2018.pdf",
  2019: "/documentos/idss/idss-2019.pdf",
  2020: "/documentos/idss/idss-2020.pdf",
  2021: "/documentos/idss/idss-2022.pdf",
  2022: "/documentos/idss/idss-2022.pdf",
  2023: "/documentos/idss/idss-2023.pdf",
  2024: "/documentos/idss/idss-2024.pdf",
  2025: "/documentos/idss/idss-2025.pdf",
  2026: null,
};

const documentosIdss: DocumentoPorAno[] = Object.keys(arquivosIdss)
  .map(Number)
  .map((ano, index) => ({
    id: `idss-${ano}`,
    categoria: "idss" as const,
    ano,
    titulo: `IDSS ${ano}`,
    descricao: "Índice de Desempenho da Saúde Suplementar.",
    arquivoUrl: arquivosIdss[ano],
    ordem: index,
  }));

// Reajuste de Contratos Coletivos: os comunicados oficiais recebidos cobrem
// 2017–2026 (RN 309/ANS) — faixa maior que a solicitada originalmente
// (2021–2026), incluída porque os PDFs comprovam que existem.
const arquivosReajuste: Record<number, { url: string; descricao?: string }> = {
  2017: { url: "/documentos/reajustes/reajuste-2017.pdf" },
  2018: { url: "/documentos/reajustes/reajuste-2018.pdf" },
  2019: { url: "/documentos/reajustes/reajuste-2019.pdf" },
  2020: { url: "/documentos/reajustes/reajuste-2020.pdf" },
  2021: { url: "/documentos/reajustes/reajuste-2021.pdf" },
  2022: { url: "/documentos/reajustes/reajuste-2022.pdf" },
  2023: { url: "/documentos/reajustes/reajuste-2023.pdf" },
  2024: { url: "/documentos/reajustes/reajuste-2024.pdf" },
  2025: { url: "/documentos/reajustes/reajuste-2025.pdf" },
  2026: {
    url: "/documentos/reajustes/reajuste-2026.pdf",
    descricao: "Comunicado oficial de reajuste (RN 309/ANS) para contratos coletivos — versão corrigida.",
  },
};

const documentosReajuste: DocumentoPorAno[] = Object.keys(arquivosReajuste)
  .map(Number)
  .map((ano, index) => ({
    id: `reajuste-coletivo-${ano}`,
    categoria: "reajuste-coletivo" as const,
    ano,
    titulo: `Reajuste de Contratos Coletivos ${ano}`,
    descricao:
      arquivosReajuste[ano].descricao ??
      "Comunicado oficial de reajuste (RN 309/ANS) para contratos coletivos.",
    arquivoUrl: arquivosReajuste[ano].url,
    ordem: index,
  }));

export const documentosPorAno: DocumentoPorAno[] = [...documentosIdss, ...documentosReajuste];

export function getDocumentosPorCategoria(categoria: DocumentoPorAno["categoria"]) {
  return documentosPorAno.filter((d) => d.categoria === categoria);
}
