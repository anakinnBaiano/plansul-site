import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import DocumentoAnoList from "@/components/DocumentoAnoList";
import { prisma } from "@/lib/prisma";
import { EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "IDSS",
  description: "Índice de Desempenho da Saúde Suplementar da Plansul, por ano, com direcionamento ao Portal ANS.",
};

export const dynamic = "force-dynamic";

export default async function IdssPage() {
  const documentos = await prisma.documento.findMany({
    where: { categoria: "idss" },
    orderBy: { ano: "desc" },
  });

  return (
    <>
      <Breadcrumb items={[{ label: "Institucional", href: "/institucional" }, { label: "IDSS" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">IDSS</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          O Índice de Desempenho da Saúde Suplementar (IDSS) é calculado anualmente pela ANS
          para avaliar operadoras de planos de saúde.
        </p>

        <a
          href={EXTERNAL_LINKS.ans}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full border-2 border-plansul-blue px-6 py-3 text-sm font-semibold text-plansul-blue transition-colors hover:bg-plansul-blue hover:text-white"
        >
          Consultar no Portal ANS
          <ExternalLink size={16} aria-hidden="true" />
        </a>

        <DocumentoAnoList documentos={documentos} />
      </section>
    </>
  );
}
