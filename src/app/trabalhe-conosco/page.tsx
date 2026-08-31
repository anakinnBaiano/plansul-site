import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Trabalhe Conosco",
  description: "Oportunidades de carreira na Plansul.",
};

export default function TrabalheConoscoPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Trabalhe Conosco" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">Trabalhe Conosco</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          No momento não temos uma lista de vagas em aberto, mas estamos sempre em busca de
          profissionais que compartilham do nosso compromisso com a saúde e o bem-estar dos
          nossos beneficiários. Envie seu currículo pelo formulário abaixo e entraremos em
          contato caso surja uma oportunidade compatível com o seu perfil.
        </p>
        <div className="mt-8 max-w-xl">
          <Contact
            categoria="trabalhe-conosco"
            title="Enviar currículo / candidatura"
            submitLabel="Enviar candidatura"
            showPhoneField
          />
        </div>
      </section>
    </>
  );
}
