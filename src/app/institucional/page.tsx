import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Building2, History, Users, MapPin, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCard from "@/components/ServiceCard";
import { getConteudoTexto } from "@/data/conteudoInstitucional";
import { equipe as equipeData } from "@/data/equipe";

export const metadata: Metadata = {
  title: "Institucional",
  description: "Quem somos, nossa história, nossa liderança, qualidade e transparência.",
};

const cards = [
  { titulo: "Sobre a Empresa", descricao: "Nossa história e quem lidera a Plansul.", href: "/institucional/sobre", icon: Building2 },
  { titulo: "Nossa história", descricao: "A trajetória oficial da Plansul.", href: "/institucional/historia", icon: History },
  { titulo: "Nossa equipe", descricao: "Quem cuida da Plansul todos os dias.", href: "/institucional/equipe", icon: Users },
  { titulo: "Nossas Unidades", descricao: "Endereços e telefones de atendimento.", href: "/institucional/unidades", icon: MapPin },
];

// Comentários curtos e temáticos para a seção de liderança desta página —
// resumem, com foco em técnica/qualidade e em gestão/organização, o que
// Dr. Eric e o Sr. Celso já disseram na íntegra em /institucional/equipe.
// Identificados pelo id usado em src/data/equipe.ts.
const DESTAQUES_LIDERANCA: Record<string, string> = {
  "diretor-medico-eric-ettinger":
    "Compromisso técnico com a qualidade assistencial: inovação e verticalização do atendimento para garantir saúde suplementar de excelência em cada consulta do Centro Médico Plansul.",
  "gestor-celso-roberto-dos-santos":
    "Gestão orientada à organização do plano: capacitação contínua das equipes e acompanhamento constante da satisfação de quem confia na Plansul.",
};

export default function InstitucionalPage() {
  const historia = getConteudoTexto("historia");
  const equipe = [...equipeData].sort((a, b) => a.ordem - b.ordem);

  return (
    <>
      <Breadcrumb items={[{ label: "Institucional" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">Quem somos</h1>

        {historia && (
          <>
            <p className="mt-3 max-w-2xl text-slate-600">{historia.corpo}</p>
            <Link
              href="/institucional/historia"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-plansul-teal hover:underline"
            >
              Conheça nossa história completa
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </>
        )}

        {equipe.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-plansul-blue">Nossa liderança</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {equipe.map((membro) => (
                <div
                  key={membro.id}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-plansul-blue hover:bg-gradient-to-br hover:from-plansul-blue hover:to-plansul-teal hover:shadow-lg"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-plansul-blue/10 transition-colors duration-300 group-hover:bg-white/20">
                    {membro.fotoUrl && (
                      <Image
                        src={membro.fotoUrl}
                        alt={membro.nome}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 transition-colors duration-300 group-hover:text-white">{membro.nome}</p>
                    <p className="text-xs font-normal uppercase tracking-wider text-plansul-teal transition-colors duration-300 group-hover:text-white">{membro.cargo}</p>
                    <p className="mt-2 text-sm font-normal text-slate-600 transition-colors duration-300 group-hover:text-white/85">
                      {DESTAQUES_LIDERANCA[membro.id] ?? membro.depoimento}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/institucional/equipe"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-plansul-teal hover:underline"
            >
              Ver depoimento completo da equipe
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        )}

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <li key={card.titulo}>
              <ServiceCard
                icon={card.icon}
                titulo={card.titulo}
                descricao={card.descricao}
                href={card.href}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
