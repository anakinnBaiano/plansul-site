import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";
import { FOOTER_LINKS, CONTACT, SOCIAL_LINKS, SITE, EXTERNAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-plansul-blue-dark text-slate-200">
      <div className="mx-auto grid max-w-content gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-xl font-bold text-white">
            PLAN<span className="text-plansul-teal-light">SUL</span>
          </p>
          <p className="mt-3 text-sm text-slate-300">{SITE.tagline}</p>
        </div>

        <nav aria-label="Links institucionais do rodapé">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Institucional
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {FOOTER_LINKS.institucional.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Atendimento e privacidade">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Atendimento
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {FOOTER_LINKS.institucionalExtra.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate-300">{CONTACT.phone}</p>
          <p className="text-sm text-slate-300">{CONTACT.email}</p>
        </nav>

        <nav aria-label="Portais externos">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Portais
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {FOOTER_LINKS.portais.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex gap-4 text-sm text-slate-300">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Plansul"
              className="hover:text-white"
            >
              <Instagram size={20} aria-hidden="true" />
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Plansul"
              className="hover:text-white"
            >
              <Facebook size={20} aria-hidden="true" />
            </a>
          </div>
        </nav>
      </div>

      <div className="border-t border-slate-800 py-8">
        <div className="mx-auto flex max-w-content flex-col items-center gap-3 px-4 text-center sm:px-6 lg:px-8">
          <a
            href={EXTERNAL_LINKS.ans}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 transition-opacity hover:opacity-90"
          >
            <span className="rounded border-2 border-black bg-black px-2 py-1 text-xs font-bold leading-none text-white sm:text-sm">
              ANS nº {SITE.ansRegistro}
            </span>
            <Image
              src="/ans-logo.png"
              alt="ANS - Agência Nacional de Saúde Suplementar"
              width={243}
              height={49}
              className="h-6 w-auto"
            />
          </a>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} PLANSUL. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
