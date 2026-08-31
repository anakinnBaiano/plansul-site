import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = { title: "Guia Médico" };

// Redireciona direto para o Guia Médico oficial (sistema já existente).
export default function GuiaMedicoRedirectPage() {
  redirect(EXTERNAL_LINKS.guiaMedico);
}
