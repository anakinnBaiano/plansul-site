import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";

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
 * Conosco, "quero saber mais" dos planos etc.).
 *
 * ATENÇÃO: o site não usa mais banco de dados — nada aqui é persistido em
 * disco. A mensagem só fica registrada no log do servidor (`docker compose
 * logs -f web` ou console do `npm run dev`). Para não perder contatos de
 * verdade, configure SMTP_HOST/SMTP_USER/SMTP_PASSWORD ou FORM_SUBMIT_ENDPOINT
 * (.env.example) e plugue o envio de e-mail/webhook aqui antes de publicar em
 * produção.
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

  const manifestacao = {
    id: randomUUID(),
    categoria,
    nome: nome.trim(),
    email: email.trim(),
    telefone: typeof telefone === "string" && telefone.trim() ? telefone.trim() : null,
    mensagem: mensagem.trim(),
    criadoEm: new Date().toISOString(),
  };

  console.log("[manifestacoes] nova mensagem recebida:", manifestacao);

  return NextResponse.json({ id: manifestacao.id }, { status: 201 });
}
