import type { ReactNode } from "react";
import Link from "next/link";
import { Stethoscope, ClipboardCheck, Receipt, ShoppingBag, type LucideIcon } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export type FaqItem = {
  pergunta: string;
  resposta: ReactNode;
};

export type FaqCategoria = {
  titulo?: string;
  intro?: ReactNode;
  itens: FaqItem[];
};

export type FaqSetor = {
  slug: string;
  nome: string;
  descricao: string;
  icon: LucideIcon;
  intro?: ReactNode;
  categorias: FaqCategoria[];
  rodape?: ReactNode;
};

const linkClass = "font-semibold text-plansul-blue hover:underline";

const AppPlansul = () => (
  <Link href="/beneficiario/aplicativo" className={linkClass}>
    App Plansul
  </Link>
);

const WhatsAppCobranca = () => (
  <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className={linkClass}>
    {CONTACT.whatsapp}
  </a>
);

const EmailCobranca = () => (
  <a href={`mailto:${CONTACT.cobrancaEmail}`} className={linkClass}>
    {CONTACT.cobrancaEmail}
  </a>
);

const TelefoneCadastro = () => (
  <a href={CONTACT.cadastro.phoneHref} className={linkClass}>
    {CONTACT.cadastro.phone}
  </a>
);

const EmailCadastro = () => (
  <a href={`mailto:${CONTACT.cadastro.email}`} className={linkClass}>
    {CONTACT.cadastro.email}
  </a>
);

const EmailAutorizacao = () => (
  <a href={`mailto:${CONTACT.email}`} className={linkClass}>
    {CONTACT.email}
  </a>
);

const TelefoneCentral = () => (
  <a href={CONTACT.phoneHref} className={linkClass}>
    {CONTACT.phone}
  </a>
);

const EmailTerapia = () => (
  <a href={`mailto:${CONTACT.terapiaEmail}`} className={linkClass}>
    {CONTACT.terapiaEmail}
  </a>
);

const centroMedico: FaqCategoria[] = [
  {
    titulo: "Consultas",
    itens: [
      {
        pergunta: "Como faço para agendar uma consulta?",
        resposta: (
          <>
            Através do nosso call center — <TelefoneCentral /> — ou presencialmente.
          </>
        ),
      },
      {
        pergunta: "Posso agendar / confirmar minha consulta e/ou exame pelo WhatsApp?",
        resposta:
          "No momento, não disponibilizamos o WhatsApp como canal para agendamento ou confirmação de consultas e exames.",
      },
      {
        pergunta: "Quais documentos preciso levar para realizar meu atendimento de consulta ou exames?",
        resposta:
          "É necessário apresentar um documento oficial de identificação com foto, como RG, CNH ou passaporte.",
      },
      {
        pergunta: "Crianças podem ser atendidas sem o responsável legal?",
        resposta:
          "Não. Menores de 17 anos devem comparecer acompanhados de seu responsável legal para a realização do atendimento.",
      },
      {
        pergunta: "Quem pode comparecer ao retorno médico pelo paciente?",
        resposta:
          "O retorno médico poderá ser realizado por outra pessoa desde que ela possua procuração específica para essa finalidade.",
      },
      {
        pergunta: "Um familiar pode passar pela consulta sem a presença do paciente?",
        resposta: "Não. A consulta deve ser realizada com a presença do paciente.",
      },
    ],
  },
  {
    titulo: "Exames",
    itens: [
      {
        pergunta: "Preciso de pedido médico para realizar um exame?",
        resposta: "Sim, é obrigatório apresentar a solicitação médica para realização do exame.",
      },
      {
        pergunta: "Qual a validade para uma solicitação médica?",
        resposta:
          "A solicitação médica possui validade de 90 dias a partir da data de emissão e 30 dias a partir da data de autorização.",
      },
      {
        pergunta: "O que devo fazer se esquecer a solicitação médica?",
        resposta:
          "É necessário providenciar a solicitação médica antes da realização do exame. Sem a apresentação do pedido médico, não será possível realizar o exame.",
      },
      {
        pergunta: "Quem está autorizado a retirar os meus resultados de exames?",
        resposta:
          "O paciente poderá autorizar outra pessoa a retirar seus resultados no momento da realização do exame. O nome da pessoa autorizada deverá ser informado e registrado no comprovante de retirada.",
      },
    ],
  },
  {
    titulo: "Terapias",
    itens: [
      {
        pergunta: "Preciso de encaminhamento médico para iniciar uma terapia?",
        resposta:
          "Sim. É obrigatória a apresentação de encaminhamento médico para iniciar o atendimento terapêutico.",
      },
      {
        pergunta: "Como faço para agendar uma avaliação com o profissional da terapia?",
        resposta: (
          <>
            A solicitação para agendamento da avaliação deve ser encaminhada para o e-mail{" "}
            <EmailTerapia />.
          </>
        ),
      },
      {
        pergunta: "Crianças podem ser atendidas sem o responsável legal?",
        resposta: "Não. Crianças devem permanecer acompanhadas de seu responsável legal durante o atendimento.",
      },
      {
        pergunta: "Posso deixar a criança em atendimento e pegar no final da terapia?",
        resposta:
          "Não. O responsável deverá permanecer no local durante todo o atendimento, aguardando até o término da terapia.",
      },
    ],
  },
];

// [PREENCHER] Autorização ainda não tem um FAQ oficial aprovado pela
// Plansul — as perguntas abaixo são um ponto de partida com os canais de
// contato já confirmados, a substituir pelo conteúdo definitivo do setor.
const autorizacao: FaqCategoria[] = [
  {
    itens: [
      {
        pergunta: "Como solicito autorização para um procedimento ou exame?",
        resposta: (
          <>
            Entre em contato pelo e-mail <EmailAutorizacao /> ou pelo telefone <TelefoneCentral /> para
            dar entrada na sua solicitação de autorização.
          </>
        ),
      },
      {
        pergunta: "Como acompanho o andamento da minha autorização?",
        resposta: (
          <>
            Envie sua dúvida para <EmailAutorizacao /> informando os dados do procedimento solicitado.
          </>
        ),
      },
    ],
  },
];

const vendas: FaqCategoria[] = [
  {
    itens: [
      {
        pergunta: "O plano de saúde é obrigado a cobrir qualquer procedimento médico?",
        resposta:
          "Não. A cobertura obrigatória depende do tipo de plano contratado e das regras da ANS. Em geral, o plano deve cobrir os procedimentos previstos no Rol da ANS que sejam compatíveis com a segmentação contratada, como ambulatorial, hospitalar, obstétrica ou odontológica.",
      },
      {
        pergunta: "O que é o Rol de Procedimentos da ANS?",
        resposta:
          "É a lista que estabelece a cobertura mínima obrigatória dos planos regulamentados. Ela contempla consultas, exames, cirurgias, terapias e outros tratamentos, de acordo com o tipo de plano contratado.",
      },
      {
        pergunta: "O plano pode negar um procedimento solicitado pelo médico?",
        resposta:
          "Pode haver negativa quando o procedimento não estiver coberto pelo contrato ou quando não forem cumpridos os critérios previstos nas normas da ANS. A operadora deve apresentar a justificativa da negativa de forma clara, e o beneficiário pode solicitar a resposta por escrito.",
      },
      {
        pergunta: "Quais são os prazos máximos de carência?",
        resposta: (
          <>
            De forma geral, os limites máximos são:
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>24 horas para urgência e emergência;</li>
              <li>30 dias para consultas e exames simples;</li>
              <li>300 dias para parto a termo;</li>
              <li>180 dias para as demais coberturas;</li>
              <li>
                até 24 meses de Cobertura Parcial Temporária para procedimentos de alta complexidade,
                cirurgias e leitos de alta tecnologia relacionados a doenças ou lesões preexistentes
                declaradas.
              </li>
            </ul>
            <p className="mt-2">
              O contrato pode estabelecer prazos menores ou conceder isenção. Consulte as regras de
              carência da ANS.
            </p>
          </>
        ),
      },
      {
        pergunta: "Urgência e emergência são a mesma coisa?",
        resposta:
          "Não. Emergência é uma situação com risco imediato de vida ou de lesões irreparáveis. Urgência envolve acidentes pessoais ou complicações durante a gestação. A cobertura depende do período de carência, da segmentação e das condições contratuais.",
      },
      {
        pergunta: "O plano é obrigado a atender imediatamente em casos de urgência e emergência?",
        resposta:
          "Após 24 horas da contratação, existe cobertura obrigatória para urgência e emergência, observadas a segmentação do plano e as regras da ANS. Dependendo do tipo de plano e do cumprimento das demais carências, a cobertura poderá ter limitações.",
      },
      {
        pergunta: "O que fazer quando não existe profissional disponível na rede credenciada?",
        resposta:
          "O beneficiário deve entrar em contato com a operadora e solicitar uma alternativa. Cabe à operadora garantir o acesso ao serviço coberto dentro do prazo, do rol e da abrangência do plano.",
      },
      {
        pergunta: "Posso procurar atendimento particular e depois pedir reembolso?",
        resposta:
          "Não. O reembolso pode estar previsto no plano ou ser devido quando a operadora não conseguir garantir um atendimento coberto, conforme as regras da ANS. A análise e o pagamento devem ser realizados em até 30 dias pelo setor responsável.",
      },
      {
        pergunta: "O plano pode retirar um hospital, uma clínica ou um profissional da rede?",
        resposta:
          "A rede pode ser alterada, desde que sejam cumpridas as exigências da ANS. Em determinadas situações, a operadora deve substituir o prestador por outro.",
      },
      {
        pergunta: "O plano é obrigado a cobrir atendimento em qualquer cidade do Brasil?",
        resposta:
          "Não. O atendimento depende da abrangência geográfica contratada, que pode ser municipal, grupo de municípios, estadual, grupo de estados ou nacional. O beneficiário deve consultar a área de cobertura do seu produto.",
      },
      {
        pergunta: "Qual é a diferença entre acomodação em enfermaria e apartamento?",
        resposta:
          "Na enfermaria, a acomodação durante a internação é coletiva. No apartamento, a acomodação é individual. Essa diferença deve estar prevista no plano contratado.",
      },
      {
        pergunta: "Como funciona a coparticipação?",
        resposta: (
          <>
            <p>
              Nosso modelo é coparticipativo (30% sobre consultas, exames e pronto atendimento). Isso
              significa que:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Se você não utilizar o plano no mês, pagará apenas a mensalidade fixa.</li>
              <li>
                A coparticipação de 30% só é gerada quando houver uso, sendo cobrada diretamente no seu
                boleto mensal.
              </li>
              <li>
                Cobertura Total: internamentos (clínicos, cirúrgicos ou obstétricos) possuem cobertura
                total, sem cobrança de coparticipação.
              </li>
            </ul>
            <p className="mt-2">
              Segurança Financeira (Teto de Gastos): para sua tranquilidade, o Plansul possui um teto de
              coparticipação. O valor total das taxas de uso em um único boleto nunca excederá o valor de
              uma mensalidade adicional. Ou seja, o valor máximo do seu boleto será, no limite, o
              equivalente a duas mensalidades (a fixa + o teto de coparticipação).
            </p>
            <p className="mt-2">
              Atenção: caso note que o valor das coparticipações excedeu esse limite, entre em contato
              conosco antes de efetuar o pagamento para a correção do boleto. Como não trabalhamos com
              sistema de reembolso em boletos, esse acompanhamento é essencial.
            </p>
          </>
        ),
      },
      {
        pergunta: "O plano pode cobrar coparticipação em consultas, exames e terapias?",
        resposta:
          "Sim, desde que a cobrança esteja prevista no contrato e respeite as normas aplicáveis. O beneficiário tem direito de receber informações claras sobre os valores ou critérios utilizados.",
      },
      {
        pergunta: "Posso mudar de plano sem cumprir novas carências?",
        resposta:
          "Sim, quando forem atendidos os requisitos da portabilidade de carências. Ela permite trocar de plano, na mesma operadora ou em outra, sem cumprir novamente as carências já concluídas.",
      },
      {
        pergunta: "O plano pode ser cancelado por falta de pagamento?",
        resposta:
          "Pode, mas devem ser observadas as regras da ANS. Nos contratos alcançados pela regulamentação atual, o cancelamento por inadimplência exige pelo menos duas mensalidades não pagas, consecutivas ou não, além de notificação comprovada e concessão de prazo para quitação.",
      },
      {
        pergunta: "Quem é demitido ou se aposenta pode continuar no plano empresarial?",
        resposta:
          "Em determinadas situações, sim. O direito pode existir para quem contribuía com o pagamento do plano, desde que cumpra os requisitos legais, assuma o pagamento integral e manifeste interesse no prazo estabelecido.",
      },
      {
        pergunta: "Quem pode ser incluído como dependente no plano de saúde?",
        resposta:
          "Depende das regras do contrato. Normalmente, podem ser aceitos cônjuge ou companheiro, com comprovação por certidão de casamento ou união estável registrada em cartório, além de filhos e enteados menores ou com até 24 anos estando na faculdade. Alguns contratos também permitem a inclusão de pais, irmãos, netos e outros familiares.",
      },
      {
        pergunta: "Como faço para incluir um dependente?",
        resposta:
          "A solicitação deve ser feita à operadora ou, no caso de plano empresarial, ao setor responsável da empresa. O titular deverá apresentar os documentos exigidos e comprovar o vínculo com o dependente.",
      },
      {
        pergunta: "Quais documentos são necessários para incluir um dependente?",
        resposta:
          "Os documentos variam conforme o vínculo. Geralmente, são solicitados CPF, documento de identificação, certidão de nascimento, certidão de casamento ou documento que comprove a união estável.",
      },
      {
        pergunta: "Existe prazo para solicitar a inclusão de um dependente?",
        resposta:
          "Depende do tipo de inclusão e das condições do contrato. Para recém-nascidos e filhos adotivos, a solicitação deve ser realizada, preferencialmente, em até 30 dias para garantir os direitos previstos na legislação.",
      },
      {
        pergunta: "O recém-nascido pode utilizar o plano da mãe ou do pai?",
        resposta:
          "Nos planos com cobertura obstétrica, o recém-nascido, filho natural ou adotivo do beneficiário, possui cobertura assistencial durante os primeiros 30 dias após o nascimento, observadas as regras da ANS.",
      },
      {
        pergunta: "O recém-nascido precisa cumprir carência ao ser incluído?",
        resposta:
          "A inclusão pode ocorrer sem novas carências quando for solicitada em até 30 dias do nascimento e forem cumpridas as condições legais e contratuais aplicáveis.",
      },
      {
        pergunta: "Um filho adotivo também pode ser incluído sem carência?",
        resposta:
          "Sim. A legislação garante a inscrição do filho adotivo, observadas a idade, o prazo para solicitação e as carências já cumpridas pelo beneficiário responsável.",
      },
      {
        pergunta: "Posso incluir meu cônjuge ou companheiro no plano?",
        resposta:
          "Sim, desde que o contrato permita essa categoria de dependente. Será necessário apresentar certidão de casamento, declaração de união estável ou outro documento aceito para comprovar o vínculo.",
      },
      {
        pergunta: "Posso incluir um dependente a qualquer momento?",
        resposta:
          "Depende do contrato. Algumas inclusões são permitidas após casamento, nascimento, adoção ou início do vínculo com a empresa. Fora dos prazos previstos, pode haver aplicação de carência.",
      },
      {
        pergunta: "Um dependente incluído posteriormente terá que cumprir carência?",
        resposta:
          "Pode ser necessário. A aplicação da carência depende do tipo de plano, da quantidade de beneficiários no contrato empresarial, da data da solicitação e das regras contratuais.",
      },
      {
        pergunta: "Posso incluir apenas o dependente sem permanecer como titular?",
        resposta:
          "Em regra, o dependente precisa estar vinculado a um titular elegível. Se o titular perder o vínculo ou for excluído, a permanência do dependente dependerá das condições contratuais e das situações protegidas pela legislação.",
      },
      {
        pergunta: "O dependente terá as mesmas coberturas do titular?",
        resposta:
          "Normalmente, o dependente é incluído no mesmo produto e possui a mesma segmentação, acomodação, abrangência geográfica e rede assistencial do titular. Entretanto, as condições devem ser confirmadas no contrato.",
      },
    ],
  },
];

const cobranca: FaqCategoria[] = [
  {
    titulo: "1. Boletos e mensalidades",
    itens: [
      {
        pergunta: "Como faço para emitir a 2ª via do meu boleto?",
        resposta: (
          <>
            Você pode consultar e emitir a 2ª via da sua mensalidade pelo <AppPlansul />. Caso necessite
            de atendimento, entre em contato com a Cobrança do Plansul pelo WhatsApp <WhatsAppCobranca />{" "}
            ou pelo e-mail <EmailCobranca />.
          </>
        ),
      },
      {
        pergunta: "Não recebi meu boleto. O que devo fazer?",
        resposta: (
          <>
            A falta de recebimento do boleto não elimina a obrigação de pagamento da mensalidade.
            Consulte primeiro o <AppPlansul />. Caso não encontre o documento, entre em contato pelo
            WhatsApp <WhatsAppCobranca /> ou pelo e-mail <EmailCobranca />. Também recomendamos verificar
            se seus dados de contato estão atualizados no cadastro do Plansul.
          </>
        ),
      },
      {
        pergunta: "Meu boleto venceu. Ainda posso pagar?",
        resposta: (
          <>
            Sim. Dentro do prazo de até 60 dias contados a partir do vencimento, o pagamento poderá ser
            realizado normalmente, conforme as opções disponíveis no boleto. Consulte o <AppPlansul /> ou,
            caso necessite de atendimento, entre em contato pelo WhatsApp <WhatsAppCobranca />. Para
            débitos com período superior a 60 dias, será necessária análise da equipe de Cobrança do
            Plansul.
          </>
        ),
      },
      {
        pergunta: "Tenho uma mensalidade vencida há mais de 60 dias. Como faço para pagar?",
        resposta: (
          <>
            Mensalidades com atraso superior a 60 dias poderão não estar disponíveis para pagamento
            automático. Entre em contato diretamente com a Cobrança do Plansul pelo WhatsApp{" "}
            <WhatsAppCobranca /> para consultar o débito e verificar as condições disponíveis para
            regularização.
          </>
        ),
      },
      {
        pergunta: "Posso receber meu boleto pelo WhatsApp?",
        resposta: (
          <>
            Sim. O WhatsApp é um dos principais canais digitais utilizados pelo Plansul para comunicação
            com seus beneficiários. Mantenha seu número atualizado e utilize o canal oficial da Cobrança:{" "}
            <WhatsAppCobranca />. Você também pode consultar suas mensalidades pelo <AppPlansul />.
          </>
        ),
      },
      {
        pergunta: "Posso receber meu boleto por e-mail?",
        resposta: (
          <>
            Sim. O boleto e outras comunicações financeiras poderão ser encaminhados ao e-mail cadastrado
            no Plansul. Caso necessite de atendimento relacionado à cobrança, utilize o WhatsApp{" "}
            <WhatsAppCobranca /> ou o e-mail <EmailCobranca />. Para atualização dos seus dados
            cadastrais, entre em contato com a equipe de Cadastro do Plansul.
          </>
        ),
      },
      {
        pergunta: "Posso consultar minhas mensalidades pelo App Plansul?",
        resposta: (
          <>
            Sim. Pelo <AppPlansul />, você pode consultar as informações financeiras disponibilizadas
            pelo Plansul. Caso alguma mensalidade ou informação não esteja disponível no aplicativo,
            entre em contato com a Cobrança pelo WhatsApp <WhatsAppCobranca />.
          </>
        ),
      },
      {
        pergunta: "O valor do meu boleto está diferente do que eu esperava. O que devo fazer?",
        resposta: (
          <>
            Caso tenha dúvida sobre o valor apresentado, entre em contato com a Cobrança do Plansul antes
            de realizar o pagamento — WhatsApp <WhatsAppCobranca /> ou e-mail <EmailCobranca />. Informe
            os dados do beneficiário ou do contrato para que a equipe possa analisar a cobrança.
          </>
        ),
      },
    ],
  },
  {
    titulo: "2. Pagamentos",
    itens: [
      {
        pergunta: "Já paguei a mensalidade, mas ela continua aparecendo em aberto. O que faço?",
        resposta: (
          <>
            Alguns pagamentos podem levar um período para serem identificados e processados. Caso a
            mensalidade continue aparecendo em aberto após o processamento bancário, envie o comprovante
            pelo WhatsApp <WhatsAppCobranca /> ou pelo e-mail <EmailCobranca />. A equipe de Cobrança
            verificará a baixa do pagamento.
          </>
        ),
      },
      {
        pergunta: "Onde posso enviar meu comprovante de pagamento?",
        resposta: (
          <>
            Preferencialmente pelo WhatsApp oficial da Cobrança do Plansul: <WhatsAppCobranca />. Também
            é possível encaminhá-lo para <EmailCobranca />. Informe junto ao comprovante o nome do
            beneficiário ou responsável financeiro para facilitar a identificação do pagamento.
          </>
        ),
      },
      {
        pergunta: "Paguei o boleto duas vezes. O que devo fazer?",
        resposta: (
          <>
            Entre em contato com a Cobrança do Plansul e encaminhe os comprovantes dos dois pagamentos —
            WhatsApp <WhatsAppCobranca /> ou e-mail <EmailCobranca />. A equipe verificará os pagamentos e
            orientará sobre o procedimento aplicável.
          </>
        ),
      },
      {
        pergunta: "Fiz o pagamento de um valor diferente do boleto. Como regularizar?",
        resposta: (
          <>
            Entre em contato com a equipe de Cobrança para verificar se existe saldo residual ou
            diferença a regularizar. Envie o comprovante pelo WhatsApp <WhatsAppCobranca /> ou pelo e-mail{" "}
            <EmailCobranca />.
          </>
        ),
      },
      {
        pergunta: "Fiz um pagamento parcial. Por que ainda aparece saldo em aberto?",
        resposta: (
          <>
            Quando o valor pago é inferior ao valor total da mensalidade, permanecerá um saldo residual a
            receber. Consulte a situação pelo <AppPlansul /> ou solicite a conferência pelo WhatsApp{" "}
            <WhatsAppCobranca />.
          </>
        ),
      },
      {
        pergunta: "Posso pagar por PIX?",
        resposta: (
          <>
            Sim. O pagamento por PIX está disponível pelo <AppPlansul />. Também poderão ser
            disponibilizadas opções de pagamento por PIX por meio do QR Code presente no boleto. Em caso
            de dúvida, confirme a cobrança pelo WhatsApp oficial <WhatsAppCobranca /> antes de realizar o
            pagamento.
          </>
        ),
      },
    ],
  },
  {
    titulo: "3. Atrasos e inadimplência",
    itens: [
      {
        pergunta: "Estou com mensalidades atrasadas. Como consulto minha dívida?",
        resposta: (
          <>
            Você pode verificar as informações disponíveis no <AppPlansul /> ou entrar em contato pelo
            WhatsApp <WhatsAppCobranca /> para consultar as mensalidades pendentes e as possibilidades de
            regularização. Caso necessite, também poderá encaminhar sua solicitação para{" "}
            <EmailCobranca />.
          </>
        ),
      },
      {
        pergunta: "Tenho várias mensalidades em atraso. Posso negociar?",
        resposta: (
          <>
            Entre em contato com a Cobrança do Plansul pelo WhatsApp <WhatsAppCobranca /> para análise. A
            possibilidade de negociação dependerá da situação do contrato e dos débitos existentes.
          </>
        ),
      },
      {
        pergunta: "Posso parcelar minha dívida?",
        resposta: (
          <>
            As condições de negociação e eventual parcelamento dependerão da análise dos débitos e da
            situação do contrato. Entre em contato com a Cobrança do Plansul pelo WhatsApp{" "}
            <WhatsAppCobranca /> para verificar as condições disponíveis.
          </>
        ),
      },
      {
        pergunta: "Há juros e multa sobre mensalidades atrasadas?",
        resposta: (
          <>
            Os encargos aplicáveis serão apresentados no momento do pagamento, por meio do boleto ou QR
            Code PIX, conforme a opção utilizada. Para mais informações, entre em contato com a Cobrança
            do Plansul pelo WhatsApp <WhatsAppCobranca />.
          </>
        ),
      },
      {
        pergunta: "Como sei quais mensalidades estão atrasadas?",
        resposta: (
          <>
            Consulte as informações disponíveis no <AppPlansul />. Caso precise de um detalhamento dos
            débitos, entre em contato pelo WhatsApp <WhatsAppCobranca /> ou pelo e-mail <EmailCobranca />.
          </>
        ),
      },
      {
        pergunta: "Quero regularizar meu plano. O que preciso fazer?",
        resposta: (
          <>
            Consulte inicialmente suas informações financeiras pelo <AppPlansul />. Caso existam débitos
            que necessitem de análise ou negociação, entre em contato com a Cobrança do Plansul —
            WhatsApp <WhatsAppCobranca /> ou e-mail <EmailCobranca />. A equipe verificará a situação
            atual do contrato e as possibilidades de regularização.
          </>
        ),
      },
    ],
  },
  {
    titulo: "4. Notificações e cancelamento por inadimplência",
    itens: [
      {
        pergunta: "Recebi uma mensagem informando que estou inadimplente. O que significa?",
        resposta: (
          <>
            Significa que o Plansul identificou uma ou mais mensalidades pendentes vinculadas ao seu
            contrato. Consulte a situação pelo <AppPlansul /> ou entre em contato com a Cobrança pelo
            WhatsApp <WhatsAppCobranca /> para verificar os débitos e as possibilidades de regularização.
          </>
        ),
      },
      {
        pergunta: "Recebi uma notificação de inadimplência pelo WhatsApp. Preciso responder?",
        resposta:
          "Sim. Ao receber uma comunicação oficial do Plansul pelo WhatsApp solicitando confirmação de ciência, responda à mensagem. A confirmação permite registrar o recebimento da comunicação e possibilita que a equipe forneça, quando necessário, as orientações para regularização.",
      },
      {
        pergunta: "Meu plano pode ser cancelado por falta de pagamento?",
        resposta: (
          <>
            A inadimplência poderá resultar em medidas sobre o contrato, observadas as condições
            contratuais, o tipo de contratação e as normas aplicáveis da Agência Nacional de Saúde
            Suplementar — ANS. Ao receber uma notificação de inadimplência, procure a Cobrança do Plansul
            pelo WhatsApp <WhatsAppCobranca /> para verificar a situação do contrato e as possibilidades
            de regularização.
          </>
        ),
      },
      {
        pergunta: "Recebi um aviso sobre possibilidade de cancelamento. O que devo fazer?",
        resposta: (
          <>
            Entre em contato imediatamente com a Cobrança do Plansul. A equipe verificará os débitos
            existentes, a situação do contrato e as possibilidades de regularização — WhatsApp{" "}
            <WhatsAppCobranca /> ou e-mail <EmailCobranca />.
          </>
        ),
      },
      {
        pergunta: "Completei 50 dias de atraso. Meu plano será cancelado automaticamente?",
        resposta: (
          <>
            Não. O prazo de atraso, isoladamente, não representa confirmação automática de cancelamento.
            Nessa fase, é importante regularizar a situação financeira do contrato e observar as
            comunicações encaminhadas pelo Plansul. Para verificar sua situação, entre em contato com a
            Cobrança pelo WhatsApp <WhatsAppCobranca />.
          </>
        ),
      },
      {
        pergunta: "Posso regularizar a dívida depois de receber uma notificação?",
        resposta: (
          <>
            Sim, desde que a situação do contrato ainda permita a regularização. Ao receber uma
            notificação, entre em contato com a Cobrança do Plansul pelo WhatsApp <WhatsAppCobranca />. A
            equipe verificará os débitos existentes e informará os procedimentos disponíveis para
            regularização.
          </>
        ),
      },
      {
        pergunta:
          "Meu contrato já foi cancelado. Posso simplesmente pagar os boletos antigos para reativá-lo?",
        resposta: (
          <>
            Não. Caso o contrato já tenha sido cancelado, o pagamento de mensalidades antigas não
            significa reativação automática do plano. Antes de realizar qualquer pagamento com essa
            finalidade, entre em contato com o Plansul para verificar a situação do contrato e receber as
            orientações adequadas. Para questões financeiras, utilize o WhatsApp da Cobrança:{" "}
            <WhatsAppCobranca />.
          </>
        ),
      },
    ],
  },
  {
    titulo: "5. Cadastro e comunicações",
    intro: (
      <>
        As solicitações relacionadas à atualização e validação dos dados cadastrais são atendidas pela
        equipe de Cadastro do Plansul — telefone <TelefoneCadastro />, e-mail <EmailCadastro /> ou pelo{" "}
        <AppPlansul /> (funcionalidades cadastrais disponibilizadas no aplicativo).
      </>
    ),
    itens: [
      {
        pergunta: "Por que é importante manter meu WhatsApp atualizado?",
        resposta: (
          <>
            O WhatsApp é um dos principais meios de comunicação utilizados pelo Plansul para encaminhar
            informações importantes aos beneficiários. Manter o número atualizado ajuda a garantir o
            recebimento de comunicados, boletos, alertas e notificações. Para mais informações ou
            atualização cadastral, entre em contato com a equipe de Cadastro: telefone{" "}
            <TelefoneCadastro />, e-mail <EmailCadastro /> ou <AppPlansul />.
          </>
        ),
      },
      {
        pergunta: "Como atualizo meu telefone ou WhatsApp?",
        resposta: (
          <>
            A atualização deve ser realizada pelos canais de Cadastro do Plansul, podendo ser necessária
            a validação do novo número informado: telefone <TelefoneCadastro />, e-mail <EmailCadastro />{" "}
            ou <AppPlansul />.
          </>
        ),
      },
      {
        pergunta: "O e-mail é obrigatório?",
        resposta: (
          <>
            O WhatsApp é o principal meio de comunicação digital utilizado pelo Plansul nessa rotina. O
            e-mail é um canal adicional e seu cadastro é recomendado. Sempre que possível, mantenha seu
            WhatsApp e e-mail atualizados. Para atualização ou confirmação dos dados: telefone{" "}
            <TelefoneCadastro />, e-mail <EmailCadastro /> ou <AppPlansul />.
          </>
        ),
      },
      {
        pergunta: "Por que o Plansul solicita confirmação dos meus dados de contato?",
        resposta: (
          <>
            A atualização cadastral ajuda a garantir que informações importantes sejam encaminhadas
            corretamente ao beneficiário ou responsável. Para sua segurança, o Plansul poderá solicitar
            procedimentos de validação para confirmar os dados informados. Em caso de dúvida, entre em
            contato com a equipe de Cadastro: telefone <TelefoneCadastro />, e-mail <EmailCadastro /> ou{" "}
            <AppPlansul />.
          </>
        ),
      },
      {
        pergunta: "Posso cadastrar o WhatsApp do responsável financeiro?",
        resposta: (
          <>
            Quando houver um responsável financeiro pelo contrato, os dados deverão ser informados
            corretamente ao Plansul e poderão estar sujeitos à validação cadastral. Para orientação ou
            atualização, entre em contato com a equipe de Cadastro: telefone <TelefoneCadastro />, e-mail{" "}
            <EmailCadastro /> ou <AppPlansul />.
          </>
        ),
      },
    ],
  },
  {
    titulo: "6. Contratos empresariais",
    itens: [
      {
        pergunta: "Sou beneficiário de um plano empresarial. Posso negociar diretamente minha mensalidade?",
        resposta: (
          <>
            Nos contratos empresariais, a responsabilidade financeira é atribuída ao contratante ou
            responsável financeiro cadastrado. Por isso, a equipe deverá identificar o contrato e o
            responsável autorizado antes de fornecer informações ou realizar uma negociação. Para
            atendimento, entre em contato com a Cobrança do Plansul pelo WhatsApp <WhatsAppCobranca />.
          </>
        ),
      },
      {
        pergunta: "Minha empresa possui mensalidades em atraso. Quem deve procurar o Plansul?",
        resposta: (
          <>
            O responsável financeiro ou representante autorizado da empresa deve entrar em contato com a
            Cobrança do Plansul — WhatsApp <WhatsAppCobranca /> ou e-mail <EmailCobranca />. Tenha em mãos
            os dados da empresa ou do contrato para agilizar o atendimento.
          </>
        ),
      },
      {
        pergunta: "Posso consultar a dívida de outro beneficiário do contrato empresarial?",
        resposta: (
          <>
            A consulta das informações financeiras do contrato é preferencialmente de responsabilidade do
            responsável financeiro ou do contratante. As informações somente poderão ser fornecidas após
            a identificação e, quando necessária, a validação da autorização do solicitante. Para
            atendimento, entre em contato com a Cobrança do Plansul pelo WhatsApp <WhatsAppCobranca />.
          </>
        ),
      },
    ],
  },
  {
    titulo: "7. Segurança",
    itens: [
      {
        pergunta: "Como saber se uma cobrança do Plansul é verdadeira?",
        resposta: (
          <>
            Confirme sempre pelos canais oficiais: WhatsApp da Cobrança <WhatsAppCobranca />, e-mail{" "}
            <EmailCobranca /> ou <AppPlansul />. Se receber um boleto, PIX, link ou mensagem de origem
            duvidosa, não efetue o pagamento antes de confirmar com o Plansul.
          </>
        ),
      },
      {
        pergunta: "O Plansul pode pedir minha senha pelo WhatsApp?",
        resposta: (
          <>
            Não compartilhe senhas pessoais, senhas bancárias, códigos de acesso ou informações de cartão
            por mensagens. Em caso de dúvida sobre uma solicitação recebida, entre em contato diretamente
            com o WhatsApp oficial da Cobrança do Plansul: <WhatsAppCobranca />.
          </>
        ),
      },
      {
        pergunta: "Recebi uma cobrança de um número diferente. Devo pagar?",
        resposta: (
          <>
            Em caso de dúvida sobre a origem da cobrança, não realize o pagamento antes de confirmar sua
            autenticidade. Utilize o WhatsApp oficial da Cobrança do Plansul: <WhatsAppCobranca />.
          </>
        ),
      },
    ],
  },
];

const cobrancaIntro = (
  <>
    <p className="font-semibold text-slate-900">Canais oficiais da Cobrança do Plansul</p>
    <p className="mt-1">Para sua segurança, utilize sempre os canais oficiais:</p>
    <ul className="mt-2 list-disc space-y-1 pl-5">
      <li>
        WhatsApp — canal principal: <WhatsAppCobranca />
      </li>
      <li>
        E-mail: <EmailCobranca />
      </li>
      <li>
        <AppPlansul />: consulte suas mensalidades e informações financeiras diretamente pelo aplicativo.
      </li>
    </ul>
  </>
);

const cobrancaRodape = (
  <>
    <p className="font-semibold text-slate-900">Não encontrou sua dúvida?</p>
    <p className="mt-3">
      Para assuntos relacionados a boletos, pagamentos, mensalidades em atraso, negociação e
      regularização financeira, fale com a Cobrança do Plansul:
    </p>
    <ul className="mt-2 list-disc space-y-1 pl-5">
      <li>
        WhatsApp — canal principal: <WhatsAppCobranca />
      </li>
      <li>
        E-mail: <EmailCobranca />
      </li>
      <li>
        <AppPlansul />: consulte suas mensalidades e informações financeiras diretamente pelo aplicativo.
      </li>
    </ul>
    <p className="mt-4">
      Para atualização de telefone, WhatsApp, e-mail ou outras informações cadastrais, fale com a equipe
      de Cadastro do Plansul:
    </p>
    <ul className="mt-2 list-disc space-y-1 pl-5">
      <li>
        Telefone: <TelefoneCadastro />
      </li>
      <li>
        E-mail: <EmailCadastro />
      </li>
      <li>
        <AppPlansul />
      </li>
    </ul>
  </>
);

export const faqSetores: FaqSetor[] = [
  {
    slug: "centro-medico",
    nome: "Centro Médico",
    descricao: "Consultas, exames e terapias no Centro Médico Plansul.",
    icon: Stethoscope,
    categorias: centroMedico,
  },
  {
    slug: "autorizacao",
    nome: "Autorização",
    descricao: "Como solicitar e acompanhar autorizações de procedimentos e exames.",
    icon: ClipboardCheck,
    categorias: autorizacao,
  },
  {
    slug: "cobranca",
    nome: "Cobrança",
    descricao: "Boletos, pagamentos, atrasos e canais oficiais da Cobrança.",
    icon: Receipt,
    intro: cobrancaIntro,
    categorias: cobranca,
    rodape: cobrancaRodape,
  },
  {
    slug: "vendas",
    nome: "Vendas",
    descricao: "Cobertura, carências, coparticipação e inclusão de dependentes.",
    icon: ShoppingBag,
    categorias: vendas,
  },
];
