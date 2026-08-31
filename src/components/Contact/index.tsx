"use client";

import { useId, useState, type FormEvent } from "react";

export type ContactCategoria =
  | "contato"
  | "ouvidoria"
  | "trabalhe-conosco"
  | "plano-familiar"
  | "plano-empresarial"
  | "empresas-contrate";

type ContactProps = {
  categoria: ContactCategoria;
  title?: string;
  showPhoneField?: boolean;
  submitLabel?: string;
};

type FormState = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  nome: "",
  email: "",
  telefone: "",
  mensagem: "",
};

/**
 * Formulário de Contato / Ouvidoria / Trabalhe Conosco / "quero saber mais".
 * Envia para POST /api/manifestacoes, que grava no banco local (tabela
 * Manifestacao) — ver src/app/api/manifestacoes/route.ts. Não envia e-mail
 * (SMTP ainda não configurado, ver FORM_SUBMIT_ENDPOINT/.env.example).
 */
export default function Contact({
  categoria,
  title = "Fale com a gente",
  showPhoneField = true,
  submitLabel = "Enviar mensagem",
}: ContactProps) {
  const formId = useId();
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [enviando, setEnviando] = useState(false);
  const [erroEnvio, setErroEnvio] = useState<string | null>(null);

  function validate(v: FormState): FormErrors {
    const next: FormErrors = {};
    if (!v.nome.trim()) next.nome = "Informe seu nome.";
    if (!v.email.trim()) {
      next.email = "Informe seu e-mail.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) {
      next.email = "Informe um e-mail válido.";
    }
    if (!v.mensagem.trim()) next.mensagem = "Escreva sua mensagem.";
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setEnviando(true);
    setErroEnvio(null);
    try {
      const response = await fetch("/api/manifestacoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ categoria, ...values }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setErroEnvio(data?.error ?? "Não foi possível enviar. Tente novamente.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setValues(initialState);
    } catch {
      setErroEnvio("Não foi possível enviar. Verifique sua conexão e tente novamente.");
      setStatus("error");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <h2 className="text-xl font-bold text-plansul-blue">{title}</h2>

      {status === "success" && (
        <p
          role="status"
          className="mt-4 rounded-lg bg-plansul-teal/10 px-4 py-3 text-sm font-medium text-plansul-teal-dark"
        >
          Mensagem enviada com sucesso. Em breve entraremos em contato.
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {erroEnvio}
        </p>
      )}

      <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label htmlFor={`${formId}-nome`} className="block text-sm font-medium text-slate-700">
            Nome
          </label>
          <input
            id={`${formId}-nome`}
            name="nome"
            type="text"
            autoComplete="name"
            value={values.nome}
            onChange={(e) => setValues((v) => ({ ...v, nome: e.target.value }))}
            aria-invalid={Boolean(errors.nome)}
            aria-describedby={errors.nome ? `${formId}-nome-erro` : undefined}
            className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-plansul-teal focus:outline-none focus:ring-2 focus:ring-plansul-teal/40"
          />
          {errors.nome && (
            <p id={`${formId}-nome-erro`} className="mt-1 text-sm text-red-600">
              {errors.nome}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${formId}-email`} className="block text-sm font-medium text-slate-700">
            E-mail
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-email-erro` : undefined}
            className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-plansul-teal focus:outline-none focus:ring-2 focus:ring-plansul-teal/40"
          />
          {errors.email && (
            <p id={`${formId}-email-erro`} className="mt-1 text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        {showPhoneField && (
          <div>
            <label htmlFor={`${formId}-telefone`} className="block text-sm font-medium text-slate-700">
              Telefone
            </label>
            <input
              id={`${formId}-telefone`}
              name="telefone"
              type="tel"
              autoComplete="tel"
              value={values.telefone}
              onChange={(e) => setValues((v) => ({ ...v, telefone: e.target.value }))}
              className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-plansul-teal focus:outline-none focus:ring-2 focus:ring-plansul-teal/40"
            />
          </div>
        )}

        <div>
          <label htmlFor={`${formId}-mensagem`} className="block text-sm font-medium text-slate-700">
            Mensagem
          </label>
          <textarea
            id={`${formId}-mensagem`}
            name="mensagem"
            rows={5}
            value={values.mensagem}
            onChange={(e) => setValues((v) => ({ ...v, mensagem: e.target.value }))}
            aria-invalid={Boolean(errors.mensagem)}
            aria-describedby={errors.mensagem ? `${formId}-mensagem-erro` : undefined}
            className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-plansul-teal focus:outline-none focus:ring-2 focus:ring-plansul-teal/40"
          />
          {errors.mensagem && (
            <p id={`${formId}-mensagem-erro`} className="mt-1 text-sm text-red-600">
              {errors.mensagem}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={enviando}
          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-plansul-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-plansul-blue-light disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {enviando ? "Enviando..." : submitLabel}
        </button>
      </form>
    </div>
  );
}
