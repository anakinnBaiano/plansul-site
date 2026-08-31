import type { Metadata } from "next";
import Link from "next/link";
import StubPage from "@/components/StubPage";
import { EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = { title: "Portal do Prestador" };

export default function PortalPrestadorPage() {
  return (
    <StubPage
      title="Portal do Prestador"
      description="Acesso externo ao sistema oficial do prestador Plansul."
      breadcrumbItems={[{ label: "Prestadores", href: "/prestadores" }, { label: "Portal" }]}
    >
      <Link
        href={EXTERNAL_LINKS.portalPrestador}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-plansul-blue px-6 py-3 text-sm font-semibold text-white hover:bg-plansul-blue-light"
      >
        Acessar Portal do Prestador
      </Link>
    </StubPage>
  );
}
