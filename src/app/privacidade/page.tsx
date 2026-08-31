import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a Plansul trata dados pessoais, em conformidade com a LGPD.",
};

export default function PrivacidadePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Privacidade" }]} />
      <section className="mx-auto max-w-content px-4 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-plansul-blue">Política de Privacidade</h1>

        <div className="prose prose-slate mt-8 max-w-none text-slate-700">
          <p>
            A <strong>ASSOCIAÇÃO DO PLANO DE SAÚDE DA SANTA CASA DE MISERICÓRDIA DE ITABUNA –
            PLANSUL</strong>, é uma operadora comprometida a privacidade dos dados de seus
            clientes e público geral. Em nossa Política de Privacidade e Proteção de Dados
            explicamos como tratamos suas informações, tudo em conformidade com a legislação
            nacional.
          </p>
          <p>
            Por favor, leia esta Política de Privacidade e Proteção de Dados Pessoais
            cuidadosamente formulada de forma simples, transparente e objetiva, informando
            quais dados pessoais serão obtidos, assim como quando e de qual forma eles
            poderão ser utilizados.
          </p>

          <h2>1 - Sobre a política</h2>
          <p>
            A Política de tratamento de dados é mantida pelo PLANSUL para garantir a proteção
            de dados pessoais dos titulares nos termos das Leis Federais nº 12.965/2014, que
            trata sobre o Marco Civil da Internet, bem como, a Lei Geral de Proteção de
            Dados, nº 13.709/2018, vigentes no país. Esta política se aplica a todos os
            clientes da operadora e ao público em geral, e engloba, de maneira básica, as
            formas nas quais tratamos os dados pessoais dessas pessoas.
          </p>
          <p>
            Os dados coletados se aplicam a indivíduos (pessoas naturais) que interagem com
            serviços do PLANSUL como consumidores/beneficiários (&ldquo;Você&rdquo;). Esta
            Política explica como seus Dados Pessoais são coletados, usados e divulgados pelo
            PLANSUL (referido nessa política como &ldquo;ASSOCIAÇÃO DO PLANO DE SAÚDE DA
            SANTA CASA DE MISERICÓRDIA DE ITABUNA – PLANSUL&rdquo;, &ldquo;Nós&rdquo;,
            &ldquo;Conosco&rdquo;). Ela também informa como Você pode acessar e atualizar seus
            Dados Pessoais e tomar certas decisões sobre como seus Dados Pessoais são
            utilizados.
          </p>
          <p>
            Esta Política abrange nossas atividades de coleta de dados tanto online e
            offline, abrangendo os Dados Pessoais que &lsquo;Nós&rsquo; coletamos por meio de
            nossos vários canais, incluindo – mas não limitado a – Sites na web, Serviço de
            Atendimento, autorização, Pesquisas e Eventos. Por favor, note que
            &lsquo;Nós&rsquo; poderemos agregar Dados Pessoais combinados de diferentes
            fontes (por exemplo, nosso site e eventos offline). Como parte disso,
            &lsquo;Nós&rsquo; combinamos os Dados Pessoais que foram originalmente coletados
            por diferentes prestadores ou parceiros e órgãos fiscalizadores do PLANSUL. Você
            pode consultar a seção &ldquo;Sobre seus direitos referentes a Dados
            Pessoais&rdquo; para obter mais informações sobre como se opor a isso.
          </p>
          <p>
            Em caso de dúvidas adicionais ou requisições, por favor, entre em contato com
            nosso Encarregado – Gestor de proteção de dados por meio do endereço de e-mail:{" "}
            <a href="mailto:noc@plansul.net" className="text-plansul-teal hover:underline">
              noc@plansul.net
            </a>
            .
          </p>
          <p>
            A Política informa também os canais de contato para dúvidas e solicitações dos
            &ldquo;Titulares de Dados Pessoais&rdquo; relacionados aos dados pessoais
            coletados. Esta Política requer o consentimento do &ldquo;Titular de Dados
            Pessoais&rdquo;, que ocorrerá de forma expressa, ao clicar no botão
            &ldquo;Continuar&rdquo; disponível no Portal Corporativo, ou pela utilização
            efetiva de qualquer Portal, sistema, software, aplicativo ou serviço do PLANSUL.
            Com o consentimento, o &ldquo;Titular de Dados Pessoais&rdquo; permitirá a coleta
            e o tratamento dos seus dados pelo PLANSUL, nos termos desta Política que foi
            elaborada de acordo com a legislação vigente no país.
          </p>
          <p>
            Em alguns casos específicos, se Você decidir por não nos fornecer os seus Dados
            Pessoais apontados como necessários (Nós indicaremos quando esse for o caso, por
            exemplo, colocando explicitamente essa informação em nossos formulários de
            registro), Nós talvez não possamos fornecer a Você nossos produtos e/ou serviços.
          </p>

          <h2>2. Fontes de dados pessoais</h2>
          <p>Nós coletamos seus Dados Pessoais através das seguintes fontes:</p>
          <ul>
            <li>
              Através do Portal Corporativo:{" "}
              <a
                href="https://www.plansul.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-plansul-teal hover:underline"
              >
                www.plansul.net
              </a>
              , quando coletamos informações através de cookies, IP e localização, bem como
              quando o &ldquo;Titular de Dados Pessoais&rdquo; preenche formulários para ter
              acesso a algum produto ou serviço;
            </li>
            <li>
              Correio Eletrônico e sistemas de troca de mensagens instantâneas: Serviços
              utilizados para manter comunicações eletrônicas entre Você e o PLANSUL,
              incluindo aqueles disponibilizados diretamente por Nós, ou serviços de
              terceiros como WhatsApp e Telegram;
            </li>
            <li>
              Através de sistemas e aplicativos usados para manter interações com os diversos
              tipos de titulares (por exemplo: prospectivos clientes, clientes,
              beneficiários, médicos, prestadores, fornecedores, prospectivos colaboradores,
              colaboradores, participantes em eventos promovidos pela cooperativa);
            </li>
            <li>Por meio da área comercial no momento da prospecção e da venda de planos de saúde;</li>
            <li>
              Por meio da área operacional para a habilitação do &ldquo;Titular de Dados
              Pessoais&rdquo; nos sistemas computacionais do PLANSUL;
            </li>
            <li>
              Por meio das áreas de relacionamento com os diversos tipos de Titulares para
              atender finalidades vinculadas às necessidades do &ldquo;Titular de Dados
              Pessoais&rdquo; e do Controlador de acordo com as bases legais;
            </li>
            <li>
              Por meio de terceiros, nas seguintes situações: a) quando o empregador do
              &ldquo;Titular de Dados Pessoais&rdquo; fornece ou atualiza dados pessoais para
              a inclusão dele e/ou dependentes no Plano de Saúde, b) quando os dados são
              públicos ou tornados públicos pelo titular, c) quando o &ldquo;Titular de Dados
              Pessoais&rdquo; usa a rede credenciada da operadora;
            </li>
            <li>Por meio de fontes públicas (por exemplo: agências, órgão de proteção ao crédito);</li>
            <li>
              Por meio dos canais de atendimento, quando o &ldquo;Titular de Dados
              Pessoais&rdquo; busca qualquer serviço do PLANSUL. Em alguns casos a ligação
              poderá ser gravada para avaliação da qualidade do atendimento, em outros casos
              os logs ou registros de acesso aos canais digitais podem ser armazenados;
            </li>
            <li>
              Por meio da rede própria e credenciada de serviços de saúde quando o
              &ldquo;Titular de Dados Pessoais&rdquo; obtém acesso aos atendimentos de saúde;
            </li>
            <li>
              Por meio dos parceiros conveniados ao PLANSUL para vendas de medicamentos ou
              produtos com desconto ao &ldquo;Titular de Dados Pessoais&rdquo;;
            </li>
            <li>Por meio de pesquisas de satisfação, em todos os pontos e canais de atendimentos e de serviços;</li>
            <li>Por meio de campanhas diversas, incluindo as promocionais;</li>
            <li>
              Por meio da área administrativa para fins de elaboração de contratos,
              documentos e registros que forem necessárias ao atendimento do interesse do
              &ldquo;Titular de Dados Pessoais&rdquo;;
            </li>
            <li>Registros offline: Registros preenchidos offline, distribuídos durante eventos e outras interações com o PLANSUL.</li>
          </ul>

          <h2>3. Quais os dados pessoais que coletamos e como são coletados</h2>
          <p>
            Durante sua interação com as ferramentas disponibilizados pelo PLANSUL, via
            eletrônico ou presencial, podemos coletar vários tipos de dados pessoais,
            conforme exposto a seguir:
          </p>
          <p>
            <strong>Dados biográficos:</strong> Nome, Nome Social, Sexo, Gênero, Estado
            Civil, Nome da Mãe, Nacionalidade, Naturalidade.
          </p>
          <p>
            <strong>Dados cadastrais:</strong> CPF, Registro de Identidade Civil, Cartão
            Nacional de Saúde, Título de Eleitor, PIS/PASEP do beneficiário ou Número de
            Identificação do Trabalhador – NIT, Número da Declaração de Nascido Vivo.
          </p>
          <p>
            <strong>Dados de localização:</strong> Endereço de Cobrança, Endereço de
            Correspondência, Endereço Residencial ou Profissional. Dados de Contato: Telefone
            Celular, Telefone Fixo, Telefone Comercial, Número WhatsApp, endereço eletrônico
            (e-mail). Dados de autenticação: Nome de usuário, senha, log de acesso, IP da
            máquina, local de acesso, provedor, dispositivo de acesso.
          </p>
          <p>
            <strong>Dados de registros:</strong> informações obtidas dos Titulares em
            decorrência das interações com o PLANSUL, podendo ser registros eletrônicos,
            físicos, áudios, vídeos e imagens.
          </p>
          <p>
            <strong>Dados gerado por consumidores:</strong> Incluindo qualquer conteúdo que
            Você cria e compartilha com o PLANSUL em redes sociais de terceiros ou por meio
            de carregamento para um de nossos sites, aplicativos e demais serviços online e
            offline, incluindo o uso de aplicativos de rede social de terceiros, como o
            Facebook, Instagram, Linkedin e similares. Esses dados incluem textos,
            comentários, artigos, fotos, vídeos, histórias pessoais ou outros conteúdos e
            mídias semelhantes.
          </p>
          <p>
            <strong>Informações financeiras e de pagamento:</strong> Quaisquer dados que o
            PLANSUL necessita para atender a um pedido, ou que Você usa para fazer o
            pagamento de um serviço, como os dados de seu cartão de débito ou crédito (nome
            do titular do cartão, número do cartão, data de validade e etc.) ou outras formas
            de pagamento utilizadas. O PLANSUL ou nossos prestadores de serviço de
            processamento de pagamentos manuseia suas informações financeiras e de pagamento
            em conformidade com as leis, normas e os padrões de segurança aplicáveis.
          </p>
          <p>
            <strong>Dados pessoais de crianças e adolescentes:</strong> O PLANSUL coletará
            dados pessoais de crianças e adolescentes diretamente dos seus pais ou
            responsáveis legais, e com o consentimento explícito, e de acordo com as regras
            da legislação vigente.
          </p>
          <p>
            <strong>Dados sensíveis:</strong> Conforme conceito da própria lei, sendo dados de
            saúde, biométricos usados para fins de identificação inequívoca, origem racial ou
            étnica, convicções religiosas ou filosóficas, filiação sindical, genéticas,
            relativos à vida sexual ou à orientação sexual do Titular, relacionados a
            infrações ou condenações penais ou medidas de segurança relacionadas.
          </p>
          <p>
            Em qualquer momento o &ldquo;Titular de Dados Pessoais&rdquo; poderá acessar,
            atualizar e complementar seus dados, bem como solicitar a exclusão dos seus dados
            coletados, através do e-mail:{" "}
            <a href="mailto:noc@plansul.net" className="text-plansul-teal hover:underline">
              noc@plansul.net
            </a>
            . A solicitação será analisada, respeitando a obrigatoriedade da manutenção dos
            dados exigidos pela Agência Reguladora, e a resposta será apresentada no prazo
            legal.
          </p>

          <h2>4 - Utilização dos dados pessoais coletados</h2>
          <p>O &ldquo;Titular de Dados Pessoais&rdquo; concorda com a coleta dos dados pelo PLANSUL para as seguintes finalidades:</p>
          <ul>
            <li>Elaborar e Operacionalizar contratos, termos e acordos;</li>
            <li>Fornecer serviços, produtos ou informações previstos nos contratos firmados;</li>
            <li>Cumprir obrigações legais e regulatórias;</li>
            <li>Cumprir obrigações acessórias vinculadas aos contratos firmados com os &ldquo;Titulares dos Dados Pessoais&rdquo;;</li>
            <li>Para a proteção da vida, atendimento médico-hospitalar e realização de exames de diagnósticos e terapias;</li>
            <li>Realizar o relacionamento com o &ldquo;Titular de Dados Pessoais&rdquo;;</li>
            <li>Enviar mensagens por correio eletrônico (e-mail), aplicativo próprio ou de mensagens;</li>
            <li>Prover atendimento às demandas do &ldquo;Titular de Dados Pessoais&rdquo;;</li>
            <li>Melhorar os serviços oferecidos ao &ldquo;Titular de Dados Pessoais&rdquo;;</li>
            <li>Configurar e administrar contas de usuários em sistemas, portais e aplicativos;</li>
            <li>Aplicar termos de uso de sistemas, aplicativos e portais;</li>
            <li>Para fornecer assistência, suporte e treinamento aos usuários de sistemas, portais e aplicativos;</li>
            <li>Oferecer e sugerir acesso à conteúdos, notícias, informações comerciais, produtos e serviços;</li>
            <li>Manter conformidade (compliance), controles internos, auditorias internas e externas;</li>
            <li>Aprimorar e personalizar a experiência do &ldquo;Titular de Dados Pessoais&rdquo; na utilização dos serviços;</li>
            <li>Analisar a utilização dos serviços pelo &ldquo;Titular de Dados Pessoais&rdquo; na condição de usuário do sistema;</li>
            <li>Realizar avaliações gerenciais, estatísticas e analíticas (nestes casos os dados serão anonimizados);</li>
            <li>Realizar pesquisas de satisfação e de mercado;</li>
            <li>Participar em processos de venda, aquisição, reestruturação, fusão ou outro tipo de ato em um eventual processo de negociação da Operadora de Planos de Saúde;</li>
            <li>Aprimorar os produtos e serviços oferecidos;</li>
            <li>Alcançar o &ldquo;Titular de Dados Pessoais&rdquo; com ações de marketing, nos parâmetros permitidos pela legislação;</li>
            <li>Proteger Direitos e propriedades do PLANSUL e exercer o Direito de Defesa em quaisquer instâncias judiciais, administrativas e/ou arbitrais;</li>
            <li>Prevenir, detectar e contribuir com a investigação de fraudes, violações da lei e outras oriundas de notificações de autoridades do judiciário, policiais, órgãos reguladores, instituições governamentais;</li>
            <li>Fornecer, sempre que requerido pelo &ldquo;Titular de Dados Pessoais&rdquo;, informações sobre a coleta, tratamento, arquivamento, processamento e eliminação dos seus dados;</li>
            <li>Inscrever dados do &ldquo;Titular de Dados Pessoais&rdquo; em órgãos de Proteção ao Crédito.</li>
          </ul>
          <p>
            O tratamento de dados pessoais sem o consentimento do &ldquo;Titular de Dados
            Pessoais&rdquo; será realizado apenas em conformidade com a legislação, como por
            exemplo:
          </p>
          <ul>
            <li>Para atender aos interesses legítimos do PLANSUL ou de terceiros, exceto no caso de prevalecerem direitos e liberdades fundamentais do &ldquo;Titular de Dados Pessoais&rdquo;;</li>
            <li>Cumprimento de obrigação legal ou regulatória;</li>
            <li>Realização de estudos por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais;</li>
            <li>Quando necessário para a execução de contrato ou de procedimentos preliminares relacionados a contratos dos quais seja parte o &ldquo;Titular de Dados Pessoais&rdquo;, e a pedido deste;</li>
            <li>Proteção da vida ou da incolumidade física do &ldquo;Titular de Dados Pessoais&rdquo; ou de terceiros;</li>
            <li>Para a tutela da saúde, em procedimento realizado por profissionais da área da saúde ou por entidades sanitárias;</li>
            <li>Para o exercício de direitos em processo judicial, administrativo ou arbitral (Lei de Arbitragem 9.307/1996);</li>
            <li>Para a proteção do crédito.</li>
          </ul>
          <p>
            O consentimento de menores de 12 (doze) anos, e de adolescentes, menores de 18
            (dezoito) anos, ocorrerá desde que devidamente assistidos ou representados,
            conforme a legislação em vigor.
          </p>

          <h2>5. Sobre uso de cookies</h2>
          <p>
            Os Cookies são pequenos arquivos de texto que podem ser colocados no seu
            computador ou dispositivo portátil por sites ou serviços na web que Você utiliza.
            São utilizados para garantir o bom funcionamento de sites e demais serviços
            online, assim como para fornecer informações aos proprietários do site ou
            serviço online.
          </p>
          <p>O PLANSUL utiliza os seguintes tipos de Cookies em seus sites e serviços compatíveis:</p>
          <ul>
            <li>
              Cookies de sessão: São Cookies de uso temporário, que são excluídos no momento
              em que Você fecha o seu navegador. Quando Você reinicia o seu navegador e volta
              para o site que criou o cookie, esse site trata Você como um novo visitante.
            </li>
            <li>
              Cookies necessários: São Cookies estritamente necessários para a operação de um
              site ou serviço compatível do PLANSUL. Eles permitem que Você navegue pelo site
              e use nossos recursos.
            </li>
            <li>
              Cookies de Desempenho: coletam informações de como o usuário utiliza o Portal,
              navegadores de internet usados, sistemas operacionais usados, sites visitados,
              páginas visualizadas, quantidade e duração de visitas, esses cookies podem ser
              usados para melhorar sua navegação e aprimorar sua experiência.
            </li>
            <li>
              Cookies Funcionais: permitem que o site relembre escolhas que o usuário fez
              (tais como o seu nome de usuário ou ID, preferência de idioma ou a área ou
              região onde o usuário está).
            </li>
            <li>
              Cookies de Publicidade: usados para rastrear os hábitos de navegação do usuário
              e para fornecer publicidade. Estes cookies também limitam o número de vezes que
              você vê um anúncio e medem a eficácia das campanhas publicitárias. Eles
              lembram, também, que o usuário já visitou um site e esta informação é
              compartilhada com outras organizações, como anunciantes.
            </li>
          </ul>
          <p>
            É importante lembrar que cabe a Você assegurar que as configurações do seu
            computador ou dispositivo portátil reflitam se Você consente em aceitar Cookies
            ou não. A maioria dos navegadores permite que Você estabeleça regras para
            avisá-lo antes de aceitar Cookies ou simplesmente recusá-los. Você não precisa
            ter Cookies habilitados para usar ou navegar a maior parte dos sites e serviços
            online do PLANSUL, entretanto neste caso não podemos assegurar que Você vai
            conseguir acessar todos os seus recursos. Recomendamos que Você veja no botão
            &ldquo;ajuda&rdquo; no seu navegador como realizar esse tipo de configuração.
            Lembre-se que se Você usar navegadores, ou mesmo computadores e/ou dispositivos
            portáteis diferentes em locais diferentes, Você precisará se assegurar de que
            cada dispositivo e navegador esteja ajustado para suas preferências pessoais de
            Cookies.
          </p>

          <h2>6. Compartilhamento dos dados pessoais coletados</h2>
          <p>O &ldquo;Titular de Dados Pessoais&rdquo; concorda também com o compartilhamento dos dados nas seguintes situações:</p>
          <ul>
            <li>Os dados pessoais poderão ser compartilhados com terceiros sempre que o compartilhamento for necessário para o cumprimento do requisito legal/regulatório e cumprimento do contrato;</li>
            <li>Os dados pessoais poderão ser compartilhados com profissionais de auditoria de saúde (médicos, enfermeiros, farmacêuticos, técnicos), próprios ou terceirizados;</li>
            <li>
              O compartilhamento de dados poderá ocorrer com entidades ligadas ao governo
              (Federal, Estadual ou Municipal), empregadores, rede prestadora de serviços,
              profissionais de saúde e seus prepostos (funcionários, assistentes,
              secretárias), rede prestadora de serviços, dentre outros. Esta lista não é
              exaustiva, podendo o Controlador compartilhar com terceiros não declarados, se
              necessário, para o cumprimento das obrigações vinculadas ao Controlador e ao
              &ldquo;Titular de Dados Pessoais&rdquo;;
            </li>
            <li>
              Os dados serão compartilhados entre os setores do PLANSUL, sempre que necessário
              para atender o fluxo dos processos internos, de acordo com as bases legais
              definidas e finalidades prescritas. O compartilhamento ocorrerá mediante as
              telas do sistema, e-mail, sistemas de mensagens ou através de documentos
              físicos.
            </li>
            <li>Os dados serão compartilhados, a pedido do &ldquo;Titular de Dados Pessoais&rdquo; para terceiros em caso de solicitação de portabilidade dos seus dados.</li>
            <li>
              Fornecedores de serviços diversos como advogados, médicos, enfermeiros, técnicos
              de enfermagem, farmacêuticos, profissionais liberais ou empresas contratadas
              pelo PLANSUL para o cumprimento do contrato firmado com o &ldquo;Titular de
              Dados Pessoais&rdquo;, para exercícios de direitos ou para proteger seus
              interesses legítimos.
            </li>
          </ul>

          <h2>7. Sobre retenção e término do tratamento de seus dados pessoais</h2>
          <p>
            De acordo com a legislação vigente, o PLANSUL utiliza seus Dados Pessoais por
            quanto tempo for necessário para satisfazer as finalidades para as quais seus
            Dados Pessoais foram coletados, conforme descrito nesta política, ou para cumprir
            com os requerimentos legais aplicáveis. Você pode obter maiores detalhes sobre a
            retenção dos seus Dados Pessoais através dos canais de comunicação detalhados
            nesta política.
          </p>
          <p>
            Quando no término do tratamento de seus Dados Pessoais, estes serão eliminados no
            âmbito e nos limites técnicos das atividades, autorizada a conservação nas
            situações previstas na legislação vigente.
          </p>

          <h2>8. Sobre a divulgação, armazenamento e transferência</h2>
          <p>
            O PLANSUL adota medidas adequadas para garantir que seus Dados Pessoais sejam
            mantidos de forma confidencial e segura. Entretanto, que estas proteções não se
            aplicam a informações que Você tenha escolhido compartilhar em áreas públicas,
            como redes sociais de terceiros.
          </p>
          <ul>
            <li>
              Pessoas que podem acessar seus Dados Pessoais: Seus Dados Pessoais serão
              processados por nossos colaboradores ou agentes autorizados, desde que estes
              precisem ter acesso a tais informações, dependendo dos propósitos específicos
              para os quais seus Dados Pessoais tenham sido coletados.
            </li>
            <li>
              Medidas tomadas em ambientes operacionais: Armazenamos seus Dados Pessoais em
              ambientes operacionais que usam medidas de segurança razoáveis, tanto técnicas
              quanto administrativas, para prevenir qualquer tipo de acesso não autorizado.
              Seguimos protocolos razoáveis para proteger Dados Pessoais.
            </li>
            <li>
              Medidas que o PLANSUL espera que Você tome: É importante que Você também tenha
              um papel em manter seus Dados Pessoais seguros. Quando criar uma conta online,
              por favor, assegure-se de escolher uma senha que seja forte para evitar que
              partes não autorizadas a adivinhem. Recomendamos que Você nunca revele ou
              compartilhe sua senha com outras pessoas. Você é o único responsável por manter
              esta senha confidencial e por qualquer ação realizada através de sua conta nos
              sites e serviços compatíveis do PLANSUL. Se Você usar um computador
              compartilhado ou público, nunca escolha a opção de lembrar seu nome de login,
              endereço de e-mail ou senha, e certifique-se que Você saiu da sua conta
              (realizou o log out) sempre que deixar o computador.
            </li>
            <li>
              Transferência de seus Dados Pessoais: Dada a natureza do nosso negócio, é
              possível que tenhamos que transferir seus Dados Pessoais armazenados dentro do
              PLANSUL para terceiros, de acordo com as finalidades estabelecidas nesta
              Política de Privacidade.
            </li>
          </ul>

          <h2>9. Como protegemos os dados pessoais</h2>
          <p>
            Todos os nossos colaboradores são treinados para adotar métodos, procedimentos e
            medidas de proteção aos dados pessoais coletados. O PLANSUL utiliza os métodos
            necessários para anonimizar os dados coletados.
          </p>
          <p>
            O PLANSUL mantém inventário de dados coletados, avaliando seu tratamento de
            acordo com os princípios previstos na Lei Geral de Proteção de Dados.
          </p>
          <p>
            As medidas de proteção ocorrem de acordo com o ciclo de vida dos dados pessoais e
            de acordo com o grau de risco avaliado em cada processo.
          </p>
          <p>
            Desde a coleta, são aplicadas medidas de proteção vinculada aos documentos
            coletados, aos sistemas usados e aos processos. Os dados pessoais retidos ficam
            em banco de dados eletrônicos ou em locais físicos.
          </p>
          <p>
            A documentação física poderá ser digitalizada. E locais de arquivamento de
            documentos físicos são monitorados e estruturados para que haja preservação dos
            dados, e apenas acesso autorizado. Aqueles que entram em contato com dados
            pessoais devem se comprometer a manter sigilo absoluto. A quebra do sigilo
            acarretará responsabilização nos moldes da legislação brasileira.
          </p>
          <p>
            Os dados armazenados digitalmente são protegidos por um conjunto de ferramentas e
            tecnologias que visam garantir a confidencialidade, segurança, integridade e
            disponibilidade.
          </p>
          <p>
            Considerando, contudo, a natureza da internet e a existência de pessoas com más
            intenções, não é possível garantir que estas não acessarão indevidamente as
            informações do &ldquo;Titular de Dados Pessoais&rdquo;. Caso isso ocorra, serão
            adotados todos os procedimentos previstos na Lei Geral de Proteção de Dados.
          </p>
          <p>O acesso aos sistemas e áreas restritas, ocorrem apenas mediante autenticação do usuário.</p>
          <p>O PLANSUL não se responsabiliza pela privacidade e segurança de informações recolhidas por terceiros.</p>

          <h2>10. Quais são os meus direitos como titular?</h2>
          <p>A Lei Geral de Proteção de Dados garante que você tenha uma série de direitos relacionados aos seus dados, são eles:</p>
          <ul>
            <li>A revogação do consentimento</li>
            <li>Acesso aos dados</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade</li>
            <li>Confirmação da existência de tratamento</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados</li>
            <li>Eliminação dos dados tratados</li>
            <li>Informação sobre a possibilidade de não fornecer o seu consentimento, bem como de ser informado sobre as consequências, em caso de negativa</li>
            <li>Obtenção de informações sobre as entidades públicas ou privadas com as quais o PLANSUL compartilhou seus dados</li>
            <li>Requisição da portabilidade de seus dados a outro fornecedor de serviços ou produtos</li>
          </ul>

          <p>
            Em caso de dúvidas sobre o tratamento de dados pessoais, entre em contato pelo
            e-mail{" "}
            <a href="mailto:noc@plansul.net" className="text-plansul-teal hover:underline">
              noc@plansul.net
            </a>{" "}
            ou pelos canais da nossa{" "}
            <a href="/atendimento" className="text-plansul-teal hover:underline">
              central de atendimento
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
