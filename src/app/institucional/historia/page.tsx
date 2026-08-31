import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Timeline from "@/components/Timeline";
import { getConteudoTexto } from "@/data/conteudoInstitucional";

export const metadata: Metadata = { title: "Nossa história" };

export default function HistoriaPage() {
  const conteudo = getConteudoTexto("historia");

  const timelineItems = conteudo
    ? [
        {
          ano: "1993",
          titulo: "Fundação da Plansul",
          descricao: conteudo.corpo,
        },
        // [PREENCHER] novos marcos entram aqui conforme forem confirmados
        // (ver src/data/conteudoInstitucional.ts e src/data/documentosPorAno.ts).
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
