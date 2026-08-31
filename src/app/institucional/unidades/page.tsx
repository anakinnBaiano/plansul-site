import type { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Nossas Unidades",
  description: "Endereços e telefones das unidades de atendimento da Plansul.",
};

export const dynamic = "force-dynamic";

export default async function UnidadesPage() {
  const unidades = await prisma.unidade.findMany({ orderBy: { ordem: "asc" } });

  return (
    <>
      <Breadcrumb items={[{ label: "Institucional", href: "/institucional" }, { label: "Nossas Unidades" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">Nossas Unidades</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Encontre o endereço e telefone da unidade mais próxima de você.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {unidades.map((unidade) => (
            <article
              key={unidade.id}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-plansul-blue hover:bg-gradient-to-br hover:from-plansul-blue hover:to-plansul-teal hover:shadow-lg"
            >
              <h2 className="text-lg font-bold text-plansul-blue transition-colors duration-300 group-hover:text-white">
                {unidade.cidade} – {unidade.estado}
              </h2>
              <p className="mt-3 flex items-start gap-2 text-sm text-slate-600 transition-colors duration-300 group-hover:text-white/85">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-plansul-teal transition-colors duration-300 group-hover:text-white"
                  aria-hidden="true"
                />
                {unidade.endereco}
              </p>
              <a
                href={`tel:${unidade.telefone.replace(/\D/g, "")}`}
                className="mt-2 flex items-center gap-2 text-sm font-medium text-plansul-blue transition-colors duration-300 hover:underline group-hover:text-white"
              >
                <Phone
                  size={18}
                  className="shrink-0 text-plansul-teal transition-colors duration-300 group-hover:text-white"
                  aria-hidden="true"
                />
                {unidade.telefone}
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
