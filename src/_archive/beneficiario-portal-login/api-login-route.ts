import { NextResponse } from "next/server";
import { BENEFICIARIO_SESSION_COOKIE } from "./auth";

/**
 * Login do Portal do Beneficiário (e-mail + senha, sem cadastro nesta área).
 * Os usuários vêm de um banco externo à parte do banco deste site (ver
 * BENEFICIARIO_DB_URL em .env.example) — a Plansul ainda vai passar o
 * caminho/credenciais de conexão. Até lá, respondemos "indisponível" em vez
 * de inventar uma autenticação falsa — nenhum e-mail/senha loga com sucesso.
 */
export async function POST(request: Request) {
  const { email, senha } = await request.json().catch(() => ({ email: "", senha: "" }));

  if (!email || !senha) {
    return NextResponse.json({ error: "Informe e-mail e senha." }, { status: 400 });
  }

  if (!process.env.BENEFICIARIO_DB_URL) {
    return NextResponse.json(
      { error: "Login indisponível no momento. Tente novamente mais tarde." },
      { status: 503 }
    );
  }

  // [PREENCHER] conectar ao banco externo (BENEFICIARIO_DB_URL) e validar
  // e-mail/senha. Se válido, definir o cookie de sessão abaixo e devolver
  // { ok: true }; se inválido, devolver 401 com uma mensagem genérica.
  const response = NextResponse.json(
    { error: "Login indisponível no momento. Tente novamente mais tarde." },
    { status: 503 }
  );
  // response.cookies.set(BENEFICIARIO_SESSION_COOKIE, "<id da sessão>", {
  //   httpOnly: true,
  //   secure: true,
  //   sameSite: "lax",
  //   path: "/",
  //   maxAge: 60 * 60 * 8, // 8h
  // });
  return response;
}
