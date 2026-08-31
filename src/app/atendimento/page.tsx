import type { Metadata } from "next";
import { Mail, MessageCircleQuestion, Megaphone, UserRound } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCard from "@/components/ServiceCard";
import { CONTACT, EXTERNAL_LINKS } from "@/lib/constants";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Atendimento",
  description: "Central de atendimento Plansul: contato, ouvidoria, FAQ, WhatsApp e telefone.",
};

const cards = [
  { titulo: "Contato", descricao: "Envie sua mensagem para a nossa equipe.", href: "/atendimento/contato", icon: Mail },
  { titulo: "Ouvidoria", descricao: "Sua opinião ajuda a melhorar nossos serviços.", href: "/ouvidoria", icon: Megaphone },
  { titulo: "FAQ", descricao: "Respostas para as dúvidas mais frequentes.", href: "/atendimento/faq", icon: MessageCircleQuestion },
  { titulo: "Portal do Usuário", descricao: "Acesse seus dados e serviços.", href: EXTERNAL_LINKS.portalBeneficiario, icon: UserRound, external: true },
];

export const dynamic = "force-dynamic";

export default async function AtendimentoPage() {
  const unidades = await prisma.unidade.findMany({ orderBy: { ordem: "asc" } });

  return (
    <>
      <Breadcrumb items={[{ label: "Atendimento" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">Como podemos ajudar?</h1>

        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 px-6 py-4 text-sm text-slate-700">
          <p>
            <strong>Telefone:</strong> {CONTACT.phone}
          </p>
          {unidades.map((unidade) => (
            <p key={unidade.id} className="mt-1">
              <strong>Endereço ({unidade.cidade} – {unidade.estado}):</strong> {unidade.endereco}
            </p>
          ))}
          <p className="mt-1">
            <strong>Horário:</strong> {CONTACT.hours}
          </p>
          <p className="mt-1 text-plansul-teal-dark">
            <strong>Urgência:</strong> {CONTACT.emergencyNote}
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <li key={card.titulo}>
              <ServiceCard
                icon={card.icon}
                titulo={card.titulo}
                descricao={card.descricao}
                href={card.href}
                external={card.external}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
