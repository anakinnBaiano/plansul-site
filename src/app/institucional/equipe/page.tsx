import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { equipe as equipeData } from "@/data/equipe";
import { Quote } from "lucide-react";

export const metadata: Metadata = { title: "Nossa equipe" };

function iniciais(nome: string) {
  return nome
    .split(" ")
    .filter((parte) => parte.length > 2 || /^[A-ZÀ-Ú]/.test(parte))
    .slice(0, 2)
    .map((parte) => parte[0])
    .join("")
    .toUpperCase();
}

export default function EquipePage() {
  const equipe = [...equipeData].sort((a, b) => a.ordem - b.ordem);

  return (
    <>
      <Breadcrumb items={[{ label: "Institucional", href: "/institucional" }, { label: "Nossa equipe" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">Nossa equipe</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Conheça quem lidera o compromisso da Plansul com a saúde suplementar de qualidade.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {equipe.map((membro) => (
            <article
              key={membro.id}
              className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-plansul-blue hover:bg-gradient-to-br hover:from-plansul-blue hover:to-plansul-teal hover:shadow-lg"
            >
              <div className="relative h-28 w-28 overflow-hidden rounded-full bg-plansul-blue/10 transition-colors duration-300 group-hover:bg-white/20">
                {membro.fotoUrl ? (
                  <Image
                    src={membro.fotoUrl}
                    alt={membro.nome}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center text-2xl font-bold text-plansul-blue transition-colors duration-300 group-hover:text-white">
                    {iniciais(membro.nome)}
                  </span>
                )}
              </div>

              <h2 className="mt-5 text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-white">{membro.nome}</h2>
              <p className="text-xs font-normal uppercase tracking-wider text-plansul-teal transition-colors duration-300 group-hover:text-white">{membro.cargo}</p>

              <Quote className="mt-4 text-plansul-blue/20 transition-colors duration-300 group-hover:text-white/30" size={28} aria-hidden="true" />
              <p className="mt-2 text-sm font-normal leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-white/85">{membro.depoimento}</p>
            </article>
          ))}
        </div>

        {equipe.some((m) => !m.fotoUrl) && (
          <p className="mt-8 text-xs text-slate-400">
            Fotos oficiais pendentes de recebimento — os cards acima usam um espaço reservado
            até serem adicionadas.
          </p>
        )}
      </section>
    </>
  );
}
