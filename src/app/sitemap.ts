import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

const routes = [
  "",
  "/planos",
  "/planos/empresarial",
  "/planos/familiar",
  "/beneficiario",
  "/beneficiario/segunda-via",
  "/beneficiario/autorizacoes",
  "/empresas",
  "/empresas/portal",
  "/empresas/contrate",
  "/prestadores",
  "/prestadores/portal",
  "/prestadores/tiss",
  "/prestadores/comunicados",
  "/institucional",
  "/institucional/historia",
  "/institucional/equipe",
  "/institucional/unidades",
  "/institucional/qualidade",
  "/institucional/idss",
  "/institucional/reajustes",
  "/atendimento",
  "/atendimento/contato",
  "/atendimento/faq",
  "/ouvidoria",
  "/trabalhe-conosco",
  "/privacidade",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}
