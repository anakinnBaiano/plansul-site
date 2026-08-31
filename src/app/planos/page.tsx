import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import PlanCard from "@/components/PlanCard";
import { planos } from "@/data/planos";

export const metadata: Metadata = {
  title: "Planos",
  description: "Conheça os planos empresariais e individuais/familiares da Plansul.",
};

export default function PlanosPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Planos" }]} />
      <section className="mx-auto max-w-content px-4 pb-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">
          Encontre o plano ideal para sua necessidade.
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Comparamos aqui as opções empresarial e individual/familiar. Nenhum preço ou
          cobertura é exibido sem confirmação oficial — fale com um atendente para
          condições atualizadas.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {planos.map((plano) => (
            <PlanCard key={plano.slug} plano={plano} />
          ))}
        </div>
      </section>
    </>
  );
}
