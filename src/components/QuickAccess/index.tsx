import {
  User,
  Building2,
  Stethoscope,
  Search,
  HeartPulse,
  Headset,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { quickAccessLinks, type QuickAccessIcon } from "@/data/links";

const ICONS: Record<QuickAccessIcon, typeof User> = {
  user: User,
  building: Building2,
  stethoscope: Stethoscope,
  search: Search,
  heart: HeartPulse,
  headset: Headset,
};

export default function QuickAccess() {
  return (
    <section aria-labelledby="como-ajudar-heading" className="bg-slate-50">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8">
        <h2
          id="como-ajudar-heading"
          className="text-center text-2xl font-bold text-plansul-blue sm:text-3xl"
        >
          Como podemos ajudar?
        </h2>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quickAccessLinks.map((item) => (
            <li key={item.titulo}>
              <ServiceCard
                icon={ICONS[item.icon]}
                titulo={item.titulo}
                descricao={item.descricao}
                href={item.href}
                external={item.external}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
