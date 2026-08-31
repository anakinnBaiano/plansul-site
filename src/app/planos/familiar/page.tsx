import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/Contact";
import { planos } from "@/data/planos";
import { Ban, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Plano Individual / Familiar",
  description: "Planos de saúde individuais e familiares da Plansul.",
};

export default function PlanoFamiliarPage() {
  const plano = planos.find((p) => p.slug === "familiar")!;

  return (
    <>
      <Breadcrumb items={[{ label: "Planos", href: "/planos" }, { label: "Individual / Familiar" }]} />
      <section className="mx-auto max-w-content px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-slate-500">{plano.nome}</h1>
            <p className="mt-3 text-slate-500">{plano.publico}</p>

            <ul className="mt-8 space-y-3">
              {plano.caracteristicas.map((item) => (
                <li key={item} className="flex flex-col gap-2">
                  <div className="flex items-start gap-2 text-slate-500">
                    <Check size={20} className="mt-0.5 shrink-0 text-slate-400" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                  {plano.desativado && item.startsWith("Abrangência") && (
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                      <Ban size={14} aria-hidden="true" />
                      Desativado
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Contact
              categoria="plano-familiar"
              title="Falar com um atendente"
              showPhoneField
              submitLabel="Quero saber mais"
            />
          </div>
        </div>
      </section>
    </>
  );
}
