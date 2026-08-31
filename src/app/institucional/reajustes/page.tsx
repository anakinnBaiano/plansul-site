import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import DocumentoAnoList from "@/components/DocumentoAnoList";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Reajuste de Contratos Coletivos",
  description: "Comunicados oficiais de reajuste de contratos coletivos da Plansul, por ano.",
};

export const dynamic = "force-dynamic";

export default async function ReajustesPage() {
  const documentos = await prisma.documento.findMany({
    where: { categoria: "reajuste-coletivo" },
    orderBy: { ano: "desc" },
  });

  return (
    <>
      <Breadcrumb items={[{ label: "Institucional", href: "/institucional" }, { label: "Reajuste de Contratos Coletivos" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">Reajuste de Contratos Coletivos</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Comunicados oficiais de reajuste para contratos coletivos, conforme a
          regulamentação da ANS (RN 309).
        </p>

        <DocumentoAnoList documentos={documentos} />
      </section>
    </>
  );
}
