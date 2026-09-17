// Traços verdes em "degrau" das artes da marca, fixos atrás de todo o
// conteúdo do site. Ficam com opacidade baixa e sem receber cliques para não
// competir com textos, botões e cards.
function Degrau({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 240 240" fill="none" aria-hidden="true" className={className}>
      <path
        d="M40 0 V70 Q40 100 70 100 H170 Q200 100 200 130 V240"
        stroke="currentColor"
        strokeWidth="36"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BrandBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden text-plansul-teal"
    >
      <Degrau className="absolute -left-16 top-10 w-32 opacity-[0.06] lg:-left-10 lg:top-16 lg:w-80 lg:opacity-[0.12]" />
      <Degrau className="absolute -right-16 bottom-0 w-32 rotate-180 opacity-[0.06] lg:-right-10 lg:w-80 lg:opacity-[0.12]" />
      <Degrau className="absolute -right-24 top-1/3 hidden w-56 -scale-x-100 opacity-[0.08] lg:block" />
    </div>
  );
}
