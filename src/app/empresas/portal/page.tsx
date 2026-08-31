import type { Metadata } from "next";
import Link from "next/link";
import StubPage from "@/components/StubPage";
import { EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = { title: "Portal da Empresa" };

export default function PortalEmpresaPage() {
  return (
    <StubPage
      title="Portal da Empresa"
      description="Gerencie colaboradores, boletos e documentos da sua empresa."
      breadcrumbItems={[{ label: "Empresas", href: "/empresas" }, { label: "Portal" }]}
    >
      <Link
        href={EXTERNAL_LINKS.portalEmpresa}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-plansul-blue px-6 py-3 text-sm font-semibold text-white hover:bg-plansul-blue-light"
      >
        Acessar Portal da Empresa
      </Link>
    </StubPage>
  );
}
