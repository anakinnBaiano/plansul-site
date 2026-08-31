import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Timeline from "@/components/Timeline";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = { title: "Nossa história" };

export const dynamic = "force-dynamic";

export default async function HistoriaPage() {
  const conteudo = await prisma.conteudoTexto.findUnique({
    where: { slug: "historia" },
  });

  const timelineItems = conteudo
    ? [
        {
          ano: "1993",
          titulo: "Fundação da Plansul",
          descricao: conteudo.corpo,
        },
        // [PREENCHER] novos marcos entram aqui conforme forem confirmados
        // (ver prisma/seed.ts — tabela ConteudoTexto / Documento).
      ]
    : [];

  return (
    <>
      <Breadcrumb items={[{ label: "Institucional", href: "/institucional" }, { label: "Nossa história" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">Nossa história</h1>

        <div className="mt-10">
          <Timeline items={timelineItems} />
        </div>
      </section>
    </>
  );
}
