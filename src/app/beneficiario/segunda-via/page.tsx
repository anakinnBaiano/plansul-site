import type { Metadata } from "next";
import Link from "next/link";
import StubPage from "@/components/StubPage";
import { EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = { title: "Segunda via" };

export default function SegundaViaPage() {
  return (
    <StubPage
      title="Segunda via"
      description="Emita a segunda via de boletos e documentos diretamente no Portal do Usuário."
      breadcrumbItems={[{ label: "Beneficiário", href: "/beneficiario" }, { label: "Segunda via" }]}
    >
      <Link
        href={EXTERNAL_LINKS.portalBeneficiario}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-plansul-blue px-6 py-3 text-sm font-semibold text-white hover:bg-plansul-blue-light"
      >
        Emitir no Portal do Usuário
      </Link>

      <div className="mt-8 max-w-sm rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
        <p className="font-semibold text-plansul-blue">Cobrança</p>
        <p className="mt-1">(73) 3214-3806</p>
        <p>(73) 3214-3807</p>
        <p>(73) 3214-3808</p>
        <p className="mt-3 font-semibold text-plansul-blue">E-mail</p>
        <p className="mt-1">cobranca@plansul.net</p>
      </div>
    </StubPage>
  );
}
