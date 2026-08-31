"use client";

import { useId, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail } from "lucide-react";

type FormState = {
  email: string;
  senha: string;
};

const initialState: FormState = { email: "", senha: "" };

/**
 * Login do Portal do Beneficiário — só e-mail e senha, sem cadastro nesta
 * área (os usuários vêm de um banco externo, ver
 * src/app/api/beneficiario/login/route.ts). Enquanto esse banco não estiver
 * conectado, a API responde "indisponível" — nunca simulamos um login com
 * sucesso.
 */
export default function LoginForm() {
  const formId = useId();
  const router = useRouter();
  const [values, setValues] = useState<FormState>(initialState);
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErro(null);

    if (!values.email.trim() || !values.senha.trim()) {
      setErro("Informe e-mail e senha.");
      return;
    }

    setEnviando(true);
    try {
      const response = await fetch("/api/beneficiario/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setErro(data?.error ?? "Não foi possível entrar. Tente novamente.");
        return;
      }

      router.refresh();
    } catch {
      setErro("Não foi possível entrar. Verifique sua conexão e tente novamente.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <h2 className="text-xl font-bold text-plansul-blue">Entrar</h2>
      <p className="mt-1 text-sm text-slate-600">
        Acesse com o e-mail e a senha cadastrados no seu plano.
      </p>

      {erro && (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {erro}
        </p>
      )}

      <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label htmlFor={`${formId}-email`} className="block text-sm font-medium text-slate-700">
            E-mail
          </label>
          <div className="relative mt-1">
            <Mail
              size={18}
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              id={`${formId}-email`}
              name="email"
              type="email"
              autoComplete="email"
              required
              value={values.email}
              onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
              className="block w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 text-sm focus:border-plansul-teal focus:outline-none focus:ring-2 focus:ring-plansul-teal/40"
            />
          </div>
        </div>

        <div>
          <label htmlFor={`${formId}-senha`} className="block text-sm font-medium text-slate-700">
            Senha
          </label>
          <div className="relative mt-1">
            <Lock
              size={18}
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              id={`${formId}-senha`}
              name="senha"
              type="password"
              autoComplete="current-password"
              required
              value={values.senha}
              onChange={(e) => setValues((v) => ({ ...v, senha: e.target.value }))}
              className="block w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 text-sm focus:border-plansul-teal focus:outline-none focus:ring-2 focus:ring-plansul-teal/40"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={enviando}
          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-plansul-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-plansul-blue-light disabled:cursor-not-allowed disabled:opacity-60"
        >
          {enviando ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
