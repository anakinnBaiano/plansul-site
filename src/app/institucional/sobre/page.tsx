import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Quote, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { getConteudoTexto } from "@/data/conteudoInstitucional";
import { equipe as equipeData } from "@/data/equipe";

export const metadata: Metadata = {
  title: "Sobre a Empresa",
  description: "Conheça a história da Plansul e quem lidera o compromisso com a saúde suplementar de qualidade.",
};

export default function SobreEmpresaPage() {
  const historia = getConteudoTexto("historia");
  const equipe = [...equipeData].sort((a, b) => a.ordem - b.ordem);

  return (
    <>
      <Breadcrumb items={[{ label: "Institucional", href: "/institucional" }, { label: "Sobre a Empresa" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">
          Sobre a Plan<span className="text-plansul-teal">sul</span>
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Cuidar de você é o nosso plano.
        </p>

        {historia && (
          <div className="mt-8 max-w-3xl">
            <h2 className="text-xl font-bold text-plansul-blue">Nossa história</h2>
            <p className="mt-3 leading-relaxed text-slate-600">{historia.corpo}</p>
            <Link
              href="/institucional/historia"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-plansul-teal hover:underline"
            >
              Conheça nossa história completa
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        )}

        {equipe.length > 0 && (
          <div className="mt-14">
            <h2 className="text-xl font-bold text-plansul-blue">Nossa liderança</h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Quem lidera o compromisso da Plansul com a saúde suplementar de qualidade.
            </p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {equipe.map((membro) => (
                <article
                  key={membro.id}
                  className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-plansul-blue hover:bg-gradient-to-br hover:from-plansul-blue hover:to-plansul-teal hover:shadow-lg"
                >
                  <div className="relative h-28 w-28 overflow-hidden rounded-full bg-plansul-blue/10 transition-colors duration-300 group-hover:bg-white/20">
                    {membro.fotoUrl && (
                      <Image
                        src={membro.fotoUrl}
                        alt={membro.nome}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    )}
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-white">{membro.nome}</h3>
                  <p className="text-xs font-normal uppercase tracking-wider text-plansul-teal transition-colors duration-300 group-hover:text-white">{membro.cargo}</p>

                  <Quote className="mt-4 text-plansul-blue/20 transition-colors duration-300 group-hover:text-white/30" size={28} aria-hidden="true" />
                  <p className="mt-2 text-sm font-normal leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-white/85">{membro.depoimento}</p>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
