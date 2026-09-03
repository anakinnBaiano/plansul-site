import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/Contact";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ouvidoria",
  description: "Ouvidoria Plansul: sua opinião ajuda a melhorar nossos serviços.",
};

export default function OuvidoriaPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Ouvidoria" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">
          Ouvidoria Plan<span className="text-plansul-teal">sul</span>
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Sua opinião ajuda a melhorar nossos serviços.
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Contact categoria="ouvidoria" title="Enviar manifestação" submitLabel="Enviar manifestação" />
          </div>
          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
            <p className="font-semibold text-plansul-blue">Contato direto</p>
            <a href="tel:+557332143800,3804" className="mt-2 block hover:underline">
              (73) 3214-3800 - ramal 3804
            </a>
            <p className="mt-1">{CONTACT.ouvidoriaEmail}</p>
            <p className="mt-4 font-semibold text-plansul-blue">Prazo de resposta</p>
            <p className="mt-1">
              Sua manifestação será respondida em até 7 dias úteis a partir do registro.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
