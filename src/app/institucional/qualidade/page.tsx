import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { documentos } from "@/data/documentos";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Transparência e Qualidade",
  description: "Documentos regulatórios, IDSS e comunicados oficiais da Plansul.",
};

export default function QualidadePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Institucional", href: "/institucional" }, { label: "Qualidade" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">Transparência e Qualidade</h1>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {documentos.map((doc) => (
            <li key={doc.titulo}>
              <a
                href={doc.href}
                target={doc.tipo === "pdf" ? "_blank" : undefined}
                rel={doc.tipo === "pdf" ? "noopener noreferrer" : undefined}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-plansul-teal hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-plansul-teal"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-plansul-teal/10 text-plansul-teal">
                  <FileText size={24} aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-lg font-semibold text-slate-900">{doc.titulo}</h2>
                <p className="mt-1 text-sm text-slate-600">{doc.descricao}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
