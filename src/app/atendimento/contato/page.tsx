import type { Metadata } from "next";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a equipe de atendimento da Plansul.",
};

export default function ContatoPage() {
  return (
    <section className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-plansul-blue">Contato</h1>

      <div className="mt-8 max-w-sm space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
        <div>
          <p className="font-semibold text-plansul-blue">Telefone - Atendimento</p>
          <p>{CONTACT.phone}</p>
        </div>
        <div>
          <p className="font-semibold text-plansul-blue">Telefone/WhatsApp - Cobrança</p>
          <p>{CONTACT.whatsapp}</p>
        </div>
        <div>
          <p className="font-semibold text-plansul-blue">Telefone/WhatsApp - Vendas</p>
          <p>{CONTACT.vendas}</p>
        </div>
        <div>
          <p className="font-semibold text-plansul-blue">E-mail</p>
          <p>{CONTACT.email}</p>
        </div>
        <div>
          <p className="font-semibold text-plansul-blue">E-mail da Ouvidoria</p>
          <p>{CONTACT.ouvidoriaEmail}</p>
        </div>
      </div>
    </section>
  );
}
