import type { Metadata } from "next";
import { Archivo, Lexend } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE, CONTACT, EXTERNAL_LINKS } from "@/lib/constants";

// Substitui a "Inter" (declarada em globals.css mas nunca carregada de fato —
// o site rodava na fonte padrão do sistema). Dupla de fontes: Archivo nos
// títulos (traço mais sério/corporativo, sem perder presença em tamanhos
// grandes) e Lexend no restante do texto — desenhada com foco em
// legibilidade (peso mais forte que uma fonte fina, sem ficar "grossa" ou
// infantil), boa para um público que mistura beneficiários idosos e jovens.
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Nossa Melhor Referência`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Saúde, atendimento e cuidado próximos de você. Portal do beneficiário, planos empresariais e individuais, rede credenciada e atendimento Plansul.",
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: "Saúde, atendimento e cuidado próximos de você.",
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: "Saúde, atendimento e cuidado próximos de você.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: SITE.themeColor,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: "Plansul",
  url: SITE.url,
  logo: `${SITE.url}/logo-plansul.png`,
  // [PREENCHER] telefone, endereço e redes sociais oficiais devem ser adicionados
  // aqui (contactPoint / address / sameAs) assim que confirmados.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${lexend.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-plansul-blue focus:px-4 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo principal
        </a>
        <Header />
        <main id="conteudo-principal" className="flex-1">
          {children}
        </main>
        <section aria-label="Localização da Plansul" className="border-t border-slate-200">
          <iframe
            src={EXTERNAL_LINKS.googleMapsEmbed}
            title={`Localização da Plansul — ${CONTACT.address}`}
            className="h-80 w-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
