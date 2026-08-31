import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Seed idempotente: pode rodar várias vezes sem duplicar registros
 * (usa upsert em todas as tabelas — inclusive reaplicando arquivoUrl em
 * registros já existentes, então rodar de novo após adicionar um PDF novo
 * atualiza o link sem precisar apagar o banco).
 *
 * Reajuste de Contratos Coletivos: todos os anos de 2017 a 2026 já têm PDF
 * oficial (RN 309/ANS) recebido e cadastrado.
 *
 * IDSS: só os anos de 2022, 2023 e 2025 têm PDF oficial recebido até agora.
 * Os demais (2018–2021, 2024, 2026) seguem com arquivoUrl = null — assim que
 * chegarem, coloque o PDF em public/documentos/idss/ e adicione o caminho no
 * objeto arquivosIdss abaixo.
 */
async function main() {
  // ---------- Unidades ----------
  await prisma.unidade.upsert({
    where: { slug: "itabuna-ba" },
    update: {
      cidade: "Itabuna",
      estado: "BA",
      endereco: "R. Santa Cruz, S/N – Nossa Sra. de Fátima, Itabuna – BA, CEP 45603-305",
      telefone: "(73) 3214-3800",
      ordem: 0,
    },
    create: {
      slug: "itabuna-ba",
      cidade: "Itabuna",
      estado: "BA",
      endereco: "R. Santa Cruz, S/N – Nossa Sra. de Fátima, Itabuna – BA, CEP 45603-305",
      telefone: "(73) 3214-3800",
      ordem: 0,
    },
  });

  await prisma.unidade.upsert({
    where: { slug: "ilheus-ba" },
    update: {
      cidade: "Ilhéus",
      estado: "BA",
      endereco: "Galeria Encantur, sala 7 – Rua Jorge Amado, 102, Centro, Ilhéus – BA, CEP 45653-200",
      telefone: "(73) 3223-9623",
      ordem: 1,
    },
    create: {
      slug: "ilheus-ba",
      cidade: "Ilhéus",
      estado: "BA",
      endereco: "Galeria Encantur, sala 7 – Rua Jorge Amado, 102, Centro, Ilhéus – BA, CEP 45653-200",
      telefone: "(73) 3223-9623",
      ordem: 1,
    },
  });

  // ---------- Equipe ----------
  await prisma.membroEquipe.upsert({
    where: { id: "diretor-medico-eric-ettinger" },
    update: {},
    create: {
      id: "diretor-medico-eric-ettinger",
      nome: "Dr. Eric Ettinger Júnior",
      cargo: "Diretor Médico",
      depoimento:
        "Com números em situação crescente, a atual gestão do Plansul é marcada principalmente pela inovação, garantindo saúde suplementar de qualidade em todos os serviços prestados. A verticalização do atendimento é uma realidade muito satisfatória para nós, e o Centro Médico Plansul segue atendendo, diariamente, a todos os seus conveniados com muita ética e respeito.",
      fotoUrl: "/equipe/eric-ettinger-junior.jpg",
      ordem: 0,
    },
  });

  await prisma.membroEquipe.upsert({
    where: { id: "gestor-celso-roberto-dos-santos" },
    update: {},
    create: {
      id: "gestor-celso-roberto-dos-santos",
      nome: "Celso Roberto dos Santos",
      cargo: "Gestor",
      depoimento:
        "Uma das grandes preocupações da atual gestão do Plansul é atender com qualidade, seja na venda do plano ou no atendimento direto ao paciente. Para isso, capacitamos todos os envolvidos regularmente focando em um único resultado: a excelência na satisfação. Pesquisas de satisfação são implementadas, e avaliações gerenciais nos permite acompanhar, passo a passo, a realidade do cliente Plansul.",
      fotoUrl: "/equipe/celso-roberto-dos-santos.jpg",
      ordem: 1,
    },
  });

  // ---------- Conteúdo institucional (texto editável) ----------
  await prisma.conteudoTexto.upsert({
    where: { slug: "historia" },
    update: {},
    create: {
      slug: "historia",
      titulo: "Nossa História",
      corpo:
        "Fundada em 15 de março de 1993, a Plansul nasceu como o plano de saúde próprio da Santa Casa de Itabuna, atuando na modalidade exclusivamente hospitalar e na condição de um setor da própria Santa Casa. Desde então, a empresa vem consolidando sua trajetória na saúde suplementar da região, ampliando a estrutura de atendimento e mantendo o compromisso com a qualidade e a proximidade com quem depende dos seus serviços todos os dias.",
      // [PREENCHER] demais marcos da história oficial (expansão da rede,
      // criação do Centro Médico Plansul, certificações, etc.) — adicionar
      // aqui conforme forem confirmados pela empresa.
    },
  });

  // ---------- Documentos: IDSS (2018–2026, conforme solicitado) ----------
  // arquivoUrl preenchido para os anos cujo PDF oficial já foi recebido;
  // os demais seguem null até chegarem (front-end mostra "PDF em breve").
  // 2021 não tem PDF próprio — a Plansul pediu para usar o relatório de 2022
  // também nesse ano enquanto o documento de 2021 não chega.
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
  for (const [index, ano] of Object.keys(arquivosIdss).map(Number).entries()) {
    const arquivoUrl = arquivosIdss[ano];
    await prisma.documento.upsert({
      where: { categoria_ano: { categoria: "idss", ano } },
      update: { arquivoUrl },
      create: {
        categoria: "idss",
        ano,
        titulo: `IDSS ${ano}`,
        descricao: "Índice de Desempenho da Saúde Suplementar.",
        arquivoUrl,
        ordem: index,
      },
    });
  }

  // ---------- Documentos: Reajuste de Contratos Coletivos ----------
  // Os comunicados oficiais recebidos cobrem 2017–2026 (RN 309/ANS) — faixa
  // maior que a solicitada originalmente (2021–2026), então os anos de 2017
  // a 2020 foram incluídos aqui porque os PDFs comprovam que existem.
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
  for (const [index, ano] of Object.keys(arquivosReajuste).map(Number).entries()) {
    const { url, descricao } = arquivosReajuste[ano];
    const tituloDescricao =
      descricao ?? "Comunicado oficial de reajuste (RN 309/ANS) para contratos coletivos.";
    await prisma.documento.upsert({
      where: { categoria_ano: { categoria: "reajuste-coletivo", ano } },
      update: { arquivoUrl: url, descricao: tituloDescricao },
      create: {
        categoria: "reajuste-coletivo",
        ano,
        titulo: `Reajuste de Contratos Coletivos ${ano}`,
        descricao: tituloDescricao,
        arquivoUrl: url,
        ordem: index,
      },
    });
  }

  console.log("Seed concluído.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
