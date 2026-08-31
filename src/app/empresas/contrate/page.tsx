import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = { title: "Contrate um plano empresarial" };

export default function ContrateEmpresaPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Empresas", href: "/empresas" }, { label: "Contrate" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">Contrate um plano empresarial</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Preencha o formulário e um atendente da Plansul entrará em contato.
        </p>
        <div className="mt-8 max-w-xl">
          <Contact categoria="empresas-contrate" title="Solicitar contato comercial" submitLabel="Solicitar contato" />
        </div>
      </section>
    </>
  );
}
