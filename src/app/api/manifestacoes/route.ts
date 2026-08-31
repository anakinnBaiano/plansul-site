import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const CATEGORIAS_VALIDAS = [
  "contato",
  "ouvidoria",
  "trabalhe-conosco",
  "plano-familiar",
  "plano-empresarial",
  "empresas-contrate",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Recebe as mensagens dos formulários do site (Contato, Ouvidoria, Trabalhe
 * Conosco, "quero saber mais" dos planos etc.) e grava no banco local
 * (tabela Manifestacao). Consultar com `npm run db:studio` enquanto não há
 * um painel próprio. Não envia e-mail — SMTP_HOST/SMTP_USER/SMTP_PASSWORD
 * (.env.example) ainda não foram configurados.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Corpo da requisição inválido." }, { status: 400 });
  }

  const { categoria, nome, email, telefone, mensagem } = body as Record<string, unknown>;

  if (typeof categoria !== "string" || !CATEGORIAS_VALIDAS.includes(categoria)) {
    return NextResponse.json({ error: "Categoria inválida." }, { status: 400 });
  }
  if (typeof nome !== "string" || !nome.trim()) {
    return NextResponse.json({ error: "Informe seu nome." }, { status: 400 });
  }
  if (typeof email !== "string" || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Informe um e-mail válido." }, { status: 400 });
  }
  if (typeof mensagem !== "string" || !mensagem.trim()) {
    return NextResponse.json({ error: "Escreva sua mensagem." }, { status: 400 });
  }

  const manifestacao = await prisma.manifestacao.create({
    data: {
      categoria,
      nome: nome.trim(),
      email: email.trim(),
      telefone: typeof telefone === "string" && telefone.trim() ? telefone.trim() : null,
      mensagem: mensagem.trim(),
    },
  });

  return NextResponse.json({ id: manifestacao.id }, { status: 201 });
}
