/**
 * ARQUIVADO em 2026-08-25 — módulo de login (e-mail/senha) do Portal do
 * Beneficiário. Substituído por um redirecionamento direto ao sistema já
 * existente (https://mv.plansul.net/mvsaudeweb/#/login/beneficiario), então
 * não está mais em uso no site. Guardado aqui inteiro (esta página +
 * LoginForm.tsx + LogoutButton.tsx + auth.ts + api-login-route.ts +
 * api-logout-route.ts) caso decidam voltar a autenticar dentro do próprio
 * site no futuro.
 *
 * Para reativar: mover este arquivo para src/app/beneficiario/page.tsx,
 * LoginForm.tsx/LogoutButton.tsx para src/components/, auth.ts para
 * src/lib/, e api-login-route.ts / api-logout-route.ts para
 * src/app/api/beneficiario/login/route.ts e .../logout/route.ts.
 */
import type { Metadata } from "next";
import { cookies } from "next/headers";
import {
  UserRound,
  Stethoscope,
  FileCheck2,
  RefreshCcw,
  Network,
  Smartphone,
  HelpCircle,
  Headset,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCard from "@/components/ServiceCard";
import LoginForm from "./LoginForm";
import LogoutButton from "./LogoutButton";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { BENEFICIARIO_SESSION_COOKIE } from "./auth";

export const metadata: Metadata = {
  title: "Beneficiário",
  description: "Tudo o que você precisa em um só lugar: portal, guia médico, autorizações e mais.",
};

export const dynamic = "force-dynamic";

const cards = [
  {
    titulo: "Portal do Usuário",
    descricao: "Acesse boletos, carteirinha digital e seus dados.",
    href: EXTERNAL_LINKS.portalBeneficiario,
    external: true,
    icon: UserRound,
  },
  {
    titulo: "Guia Médico",
    descricao: "Encontre médicos, clínicas e serviços da rede.",
    href: "/rede-credenciada",
    icon: Stethoscope,
  },
  {
    titulo: "Autorizações",
    descricao: "Consulte o status de solicitações e autorizações.",
    href: "/beneficiario/autorizacoes",
    icon: FileCheck2,
  },
  {
    titulo: "Segunda via",
    descricao: "Emita a segunda via de boletos e documentos.",
    href: "/beneficiario/segunda-via",
    icon: RefreshCcw,
  },
  {
    titulo: "Rede credenciada",
    descricao: "Consulte hospitais, clínicas e laboratórios credenciados.",
    href: "/rede-credenciada",
    icon: Network,
  },
  {
    titulo: "Aplicativo",
    descricao: "Baixe o aplicativo Plansul para Android e iOS e acompanhe tudo pelo celular.",
    href: "/beneficiario/aplicativo",
    icon: Smartphone,
  },
  {
    titulo: "Dúvidas frequentes",
    descricao: "Respostas rápidas para as perguntas mais comuns.",
    href: "/atendimento/faq",
    icon: HelpCircle,
  },
  {
    titulo: "Atendimento",
    descricao: "Fale com a nossa central de atendimento.",
    href: "/atendimento",
    icon: Headset,
  },
];

export default function BeneficiarioPage() {
  const autenticado = cookies().has(BENEFICIARIO_SESSION_COOKIE);

  return (
    <>
      <Breadcrumb items={[{ label: "Beneficiário" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        {autenticado ? (
          <>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-plansul-blue">
                  Tudo o que você precisa em um só lugar.
                </h1>
                <p className="mt-3 max-w-2xl text-slate-600">
                  Escolha abaixo o que você precisa fazer — em poucos cliques você chega lá.
                </p>
              </div>
              <LogoutButton />
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
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-plansul-blue">Portal do Beneficiário</h1>
            <p className="mt-3 max-w-2xl text-slate-600">
              Entre com seu e-mail e senha para acessar boletos, carteirinha digital,
              autorizações e todos os demais serviços.
            </p>

            <div className="mt-10 max-w-md">
              <LoginForm />
            </div>
          </>
        )}
      </section>
    </>
  );
}
