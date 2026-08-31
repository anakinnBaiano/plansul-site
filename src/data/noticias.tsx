import type { ReactNode } from "react";

/**
 * Notícias e comunicados exibidos em /noticias. Cada item vem exatamente
 * como recebido da Plansul — sem datas de publicação inventadas quando não
 * informadas.
 */
export type Noticia = {
  slug: string;
  categoria: string;
  titulo: string;
  corpo: ReactNode;
  // [PREENCHER quando faltar] Data de publicação do aviso — obrigatória para
  // comunicados de substituição de rede (ANS exige comprovar 30 dias de
  // antecedência e 180 dias de disponibilidade). Formato livre, ex.: "05/08/2026".
  dataPublicacao?: string;
};

// "Comunicado" e "Atenção" são avisos que exigem atenção imediata do
// beneficiário/prestador — por isso usam o selo em vermelho, diferente das
// demais categorias (que seguem a paleta institucional verde-água).
const CATEGORIAS_ALERTA = ["Comunicado", "Atenção"];

export function isCategoriaAlerta(categoria: string) {
  return CATEGORIAS_ALERTA.includes(categoria);
}

export function categoriaBadgeClass(categoria: string) {
  return isCategoriaAlerta(categoria)
    ? "gap-1.5 bg-red-100 text-red-700 text-sm font-bold"
    : "bg-plansul-teal/10 text-plansul-teal-dark text-xs font-semibold";
}

// Destaque de hover do card: avisos usam sombra/borda vermelha para chamar
// atenção; as demais categorias seguem o hover padrão em verde-água.
export function categoriaCardHoverClass(categoria: string) {
  return CATEGORIAS_ALERTA.includes(categoria)
    ? "hover:border-red-400 hover:shadow-red-500/30"
    : "hover:border-plansul-teal hover:shadow-slate-400/20";
}

export const noticias: Noticia[] = [
  {
    slug: "substituicao-prestadores-cedin-ceti",
    categoria: "Comunicado",
    titulo: "Substituição de prestadores eventuais",
    corpo: (
      <>
        <p>
          Informamos que os prestadores eventuais{" "}
          <strong>
            CEDIN – Centro em Desenvolvimento Infantil e Transtorno do Espectro Autista
          </strong>
          , inscrito no CNPJ <strong>48.926.221/0001-11</strong>, e{" "}
          <strong>CETI – Centro Especializado em Transformar a Infância</strong>, inscrito no
          CNPJ <strong>29.100.338/0001-05</strong>, estão sendo substituídos pela nossa rede
          credenciada e própria.
        </p>
        <p>
          Dúvidas, favor entrar em contato.
          <br />
          <strong>
            Telefone:{" "}
            <a href="tel:+557332143800,3805" className="underline hover:no-underline">
              (73) 3214-3800, ramal 3805
            </a>
            .
          </strong>
        </p>
        <p>
          Reiteramos que os atendimentos não sofrerão interrupções, sendo mantidos regulares e
          com toda equipe multidisciplinar habilitada.
        </p>
        <p className="italic">Em caso de dúvidas, nossa equipe permanece à disposição.</p>
        <p>
          <strong>
            Atenciosamente,
            <br />
            A Direção
          </strong>
        </p>
      </>
    ),
  },
  {
    slug: "autorizacoes-vitoria-da-conquista",
    categoria: "Atenção",
    titulo: "Mudança no processo de autorizações — Vitória da Conquista e região",
    corpo: (
      <>
        <p>
          Usuários do Plansul de <strong>Vitória da Conquista e cidades da região:</strong>
        </p>
        <p>
          A partir do <strong>dia 01/11/2025</strong>, todas as autorizações não serão mais
          adquiridas de forma presencial na sede do Plansul, ou seja, serão feitas pelos próprios{" "}
          <strong>prestadores</strong> ou através do{" "}
          <strong>
            e-mail{" "}
            <a href="mailto:autorizacaovdc@plansul.net" className="underline hover:no-underline">
              autorizacaovdc@plansul.net
            </a>
          </strong>
          , objetivando maior agilidade no atendimento.
        </p>
        <p>
          Em caso de dúvidas, entre em contato por telefone:{" "}
          <strong>
            <a href="tel:+557332143800" className="underline hover:no-underline">
              (73) 3214-3800
            </a>
            !
          </strong>
        </p>
        <p>
          <strong>Agradecemos pela parceria de sempre!</strong>
        </p>
      </>
    ),
  },
];
