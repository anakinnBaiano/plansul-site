import { CONTACT } from "@/lib/constants";

// Botão flutuante fixo no canto inferior direito, no padrão que a maioria
// dos sites usa para o WhatsApp — sempre visível, em todas as páginas.
export default function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsappPlanosHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com vendas pelo WhatsApp"
      title="Falar com vendas pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#1ebe57]"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2Zm0 1.67c2.21 0 4.29.86 5.85 2.42a8.23 8.23 0 0 1 2.42 5.82c0 4.55-3.71 8.25-8.27 8.25a8.3 8.3 0 0 1-4.21-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.27-4.4c0-4.55 3.71-8.23 8.27-8.23Zm-4.5 4.36c-.17 0-.44.06-.67.32-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.02 2.57.12.17 1.75 2.67 4.24 3.74 2.07.89 2.49.71 2.94.67.45-.04 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.23-.16-.48-.28-.25-.13-1.45-.72-1.68-.8-.23-.08-.39-.13-.56.12-.17.25-.64.8-.78.96-.14.17-.29.19-.53.06-.25-.13-1.05-.39-1.99-1.24-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.24-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.37-.78-1.87-.2-.49-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01Z" />
      </svg>
    </a>
  );
}
