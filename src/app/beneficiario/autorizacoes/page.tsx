import type { Metadata } from "next";
import Link from "next/link";
import StubPage from "@/components/StubPage";
import { EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = { title: "Autorizações" };

export default function AutorizacoesPage() {
  return (
    <StubPage
      title="Autorizações"
      description="Acompanhe o status de solicitações e autorizações de exames e procedimentos."
      breadcrumbItems={[{ label: "Beneficiário", href: "/beneficiario" }, { label: "Autorizações" }]}
    >
      <Link
        href={EXTERNAL_LINKS.portalBeneficiario}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-plansul-blue px-6 py-3 text-sm font-semibold text-white hover:bg-plansul-blue-light"
      >
        Consultar no Portal do Usuário
      </Link>
    </StubPage>
  );
}
