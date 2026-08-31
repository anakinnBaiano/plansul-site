import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/Contact";
import { planos } from "@/data/planos";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Plano Empresarial",
  description: "Planos de saúde para empresas de todos os portes.",
};

export default function PlanoEmpresarialPage() {
  const plano = planos.find((p) => p.slug === "empresarial")!;

  return (
    <>
      <Breadcrumb items={[{ label: "Planos", href: "/planos" }, { label: "Empresarial" }]} />
      <section className="mx-auto max-w-content px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-plansul-blue">{plano.nome}</h1>
            <p className="mt-3 text-slate-600">{plano.publico}</p>

            <ul className="mt-8 space-y-3">
              {plano.caracteristicas.map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-700">
                  <Check size={20} className="mt-0.5 shrink-0 text-plansul-teal" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Contact
              categoria="plano-empresarial"
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
