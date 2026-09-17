import Hero from "@/components/Hero";
import QuickAccess from "@/components/QuickAccess";
import PlanCard from "@/components/PlanCard";
import { planos } from "@/data/planos";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={
          <>
            Bem-vindo ao <span className="text-plansul-blue">Plan</span>
            <span className="text-plansul-teal">sul</span>
          </>
        }
        title="Nosso plano é cuidar do seu bem estar"
        subtitle="Saúde, atendimento e cuidado próximos de você."
        primaryCta={{ label: "Sou beneficiário", href: "/beneficiario" }}
        secondaryCta={{ label: "Quero contratar um plano", href: "/planos" }}
        newsCta={{ label: "Avisos", href: "/noticias" }}
        images={[
          { src: "/hero/planos-empresarial-equipe.jpg", position: "center 8%" },
          { src: "/hero/planos-empresarial-aperto-mao.jpg", position: "center 8%" },
          { src: "/hero/planos-familiar.jpg", fit: "contain" },
          { src: "/hero/planos-familiar-2.jpg", position: "center 8%" },
        ]}
        imageAlt="Família caminhando e sorrindo em um parque arborizado"
      />

      <QuickAccess />

      <section id="planos-heading" aria-labelledby="planos-heading-title" className="scroll-mt-24">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8">
          <h2 id="planos-heading-title" className="text-2xl font-bold text-plansul-blue sm:text-3xl">
            Encontre o plano ideal para sua necessidade.
          </h2>
          <p className="mt-2 max-w-xl text-slate-600">
            Opções para empresas e para quem busca um plano individual ou familiar.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {planos.map((plano) => (
              <PlanCard key={plano.slug} plano={plano} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
