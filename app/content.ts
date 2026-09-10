export type Lang = 'pt' | 'en'

export const EMAIL = 'guilherme.dev.lopes@gmail.com'

// Na Vercel se resolve sozinha. Domínio próprio: defina NEXT_PUBLIC_SITE_URL.
export const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3005')

// ponytail: cole a URL do seu LinkedIn aqui e o link aparece sozinho no nav e no rodape.
export const LINKEDIN = ''

export const stack = [
  { group: { pt: 'Front end', en: 'Front end' }, items: ['React', 'Vue 3', 'TypeScript', 'JavaScript', 'Vuex', 'Ant Design', 'AngularJS'] },
  { group: { pt: 'Back end', en: 'Back end' }, items: ['Node.js', 'NestJS', 'PHP', 'Perl'] },
  { group: { pt: 'Dados', en: 'Data' }, items: ['PostgreSQL', 'MySQL', 'Oracle'] },
  {
    group: { pt: 'Nuvem', en: 'Cloud' },
    items: ['AWS', 'Lambda', 'EC2', 'S3', 'RDS', 'DynamoDB', 'API Gateway', 'CloudFront', 'SQS', 'CloudWatch'],
  },
]

export const experience = [
  {
    company: 'App Facilita',
    period: { pt: 'jul 2024 — hoje', en: 'Jul 2024 — now' },
    place: 'Goiânia, GO',
    concurrent: false,
    roles: {
      pt: ['Tech Lead Front End, desde dez 2024', 'Desenvolvedor Front End, jul a dez 2024'],
      en: ['Front End Tech Lead, since Dec 2024', 'Front End Developer, Jul to Dec 2024'],
    },
    bullets: {
      pt: [
        'Lidero tecnicamente um time de 6 pessoas, com code review e aprovação de PR',
        'Reestruturei o módulo de vendas e o uso mensal passou de 3.000 para 7.000',
        'Um trimestre inteiro sem bug novo em produção depois da refatoração',
        'Reescrevo módulos legados sem travar a entrega de funcionalidade nova',
      ],
      en: [
        'Technical lead for a team of 6, running code review and PR approval',
        'Rebuilt the sales module and monthly usage went from 3,000 to 7,000',
        'A full quarter with no new production bugs after the refactor',
        'I rewrite legacy modules without stalling new feature delivery',
      ],
    },
  },
  {
    company: 'Ileva Gestão Inteligente',
    period: { pt: 'fev 2023 — jul 2024', en: 'Feb 2023 — Jul 2024' },
    place: 'Goiás, BR',
    concurrent: false,
    roles: { pt: ['Desenvolvedor Full Stack'], en: ['Full Stack Developer'] },
    bullets: {
      pt: [
        'Integrei sistemas de seguradoras por API em PHP e JavaScript, automatizando o cadastro de placas',
        'Estruturei o histórico de sinistros e cortei pela metade o tempo de tratamento dos casos',
        'Correções e melhorias contínuas na aplicação AngularJS a partir do feedback dos usuários',
      ],
      en: [
        'Integrated insurer systems through a PHP and JavaScript API, automating plate registration',
        'Built the claims history module and cut case handling time in half',
        'Continuous fixes and improvements on the AngularJS app, driven by user feedback',
      ],
    },
  },
  {
    company: 'Sinapse Inteligência Artificial',
    period: { pt: 'fev 2023 — jul 2024', en: 'Feb 2023 — Jul 2024' },
    place: 'Mato Grosso do Sul, BR',
    concurrent: true,
    roles: { pt: ['Desenvolvedor Full Stack'], en: ['Full Stack Developer'] },
    bullets: {
      pt: [
        'Front end e suporte de back end de uma plataforma de agendamento para clínicas médicas',
        'Interfaces em Vue 3, Vuex e Ant Design',
        'Serviços de back end com NestJS, TypeScript e PostgreSQL',
      ],
      en: [
        'Front end and back end support for a scheduling platform for medical clinics',
        'Interfaces in Vue 3, Vuex and Ant Design',
        'Back end services with NestJS, TypeScript and PostgreSQL',
      ],
    },
  },
  {
    company: 'Óticas Brasil',
    period: { pt: 'jun 2022 — jun 2023', en: 'Jun 2022 — Jun 2023' },
    place: 'Goiânia, GO',
    concurrent: false,
    roles: { pt: ['Desenvolvedor Full Stack'], en: ['Full Stack Developer'] },
    bullets: {
      pt: [
        'Sistema de métricas de vendas em Perl, JavaScript e MySQL que elevou a conversão da rede em 30%, em 38 lojas',
        'Automatizei o controle de garantias, da abertura do processo ao contato com o fornecedor',
        'Relatórios analíticos cruzando os dados da operação diária',
      ],
      en: [
        'Sales metrics system in Perl, JavaScript and MySQL that lifted network conversion by 30% across 38 stores',
        'Automated warranty control, from case opening to supplier contact',
        'Analytical reports cross referencing daily operations data',
      ],
    },
  },
  {
    company: 'Consulti Brasil',
    period: { pt: 'jun 2021 — jun 2022', en: 'Jun 2021 — Jun 2022' },
    place: 'Goiânia, GO',
    concurrent: false,
    roles: { pt: ['Suporte técnico'], en: ['Technical Support'] },
    bullets: {
      pt: [
        'Suporte a parceiros e clientes finais',
        'Testes de regressão e configuração de ambientes',
      ],
      en: [
        'Support for partners and end customers',
        'Regression testing and environment setup',
      ],
    },
  },
]

export const education = {
  school: 'Pontifícia Universidade Católica de Goiás',
  course: { pt: 'Análise e Desenvolvimento de Sistemas', en: 'Systems Analysis and Development' },
  period: '2021 — 2023',
}

export const copy = {
  pt: {
    htmlLang: 'pt-BR',
    skip: 'Ir para o conteúdo',
    nav: { how: 'Como trabalho', path: 'Trajetória' },
    cta: 'Enviar um email',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    langLabel: 'Ler em inglês',

    heroTitle: ['Software para quem', 'não vende software.'],
    heroText:
      'Quatro anos construindo o sistema em que a seguradora, a clínica e as 38 óticas trabalham todo dia. Hoje sou tech lead de front end no App Facilita, onde reestruturei o módulo de vendas e o uso mensal saiu de 3.000 para 7.000.',

    featuredLabel: 'Trabalho em destaque',
    featuredTitle: 'Um projeto do começo ao fim, em breve aqui',
    featuredNote: 'Em construção.',
    featuredHint:
      'Este espaço vai receber um case completo: o problema, as decisões de arquitetura e o resultado medido.',

    howLabel: 'Como trabalho',
    howTitle: 'Antes de escrever código, eu descubro qual é o problema',
    howLead:
      'Quase todo sistema legado chega com o diagnóstico pronto: "o código está ruim". Código ruim é consequência — o problema costuma ser uma regra de negócio que ninguém escreveu.',
    howText: [
      'Começo pelo que quebra: agrupo os bugs que voltam e conto quantos são o mesmo defeito com roupas diferentes. No módulo de vendas do App Facilita, uma dúzia de chamados virou uma causa só, o backlog antigo foi a zero e o trimestre seguinte fechou sem bug novo em produção.',
      'Daí a decisão é de tamanho, não de técnica: corto o módulo em fatias que sobem sozinhas, com o time entregando o tempo todo, e fecho a porta por onde o bug entrou — teste, regra no code review, conversa com quem escreveu. É o padrão que mantenho com as 6 pessoas que lidero.',
      'E boa parte do trabalho é decidir o que não construir: código que não existe não quebra.',
    ],

    pathLabel: 'Trajetória',
    pathTitle: 'Onde eu estive',
    concurrent: 'em paralelo',
    eduLabel: 'Formação',

    stackLabel: 'Stack',
    stackTitle: 'Com o que eu construo',

    contactLabel: 'Contato',
    contactTitle: ['Compartilhe o contexto da vaga.'],
    contactText:
      'Conte o que o time precisa resolver hoje.',
    copyEmail: 'Copiar email',
    copied: 'Email copiado',

    footerRole: 'Desenvolvedor full stack sênior e tech lead',
    footerPlace: 'Goiânia, Goiás, Brasil',
    footerNote: 'Este site não coleta dados e não usa cookies.',
  },

  en: {
    htmlLang: 'en',
    skip: 'Skip to content',
    nav: { how: 'How I work', path: 'Track record' },
    cta: 'Send an email',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    langLabel: 'Ler em português',

    heroTitle: ['Software for people', 'who do not sell software.'],
    heroText:
      'Four years building the system the insurer, the clinic and the 38 optical stores work in every day. Today I am front end tech lead at App Facilita, where I rebuilt the sales module and monthly usage went from 3,000 to 7,000.',

    featuredLabel: 'Featured work',
    featuredTitle: 'One project end to end, coming here soon',
    featuredNote: 'In progress.',
    featuredHint:
      'This space will hold a full case study: the problem, the architecture decisions and the measured outcome.',

    howLabel: 'How I work',
    howTitle: 'Before writing code, I find out what the problem really is',
    howLead:
      'Almost every legacy system arrives with the diagnosis already written: "the code is bad". Bad code is a consequence — the problem is usually a business rule nobody ever wrote down.',
    howText: [
      'I start with what breaks: I group the bugs that keep coming back and count how many are the same defect wearing different clothes. In the App Facilita sales module, a dozen tickets turned out to be one cause, the old backlog went to zero and the next quarter closed with no new production bugs.',
      'From there the call is about size, not technique: I cut the module into slices that ship on their own, with the team delivering the whole time, then close the door the bug came through — a test, the rule in code review, a conversation with whoever wrote it. That is the standard I hold with the 6 people I lead.',
      'And a good share of the work is deciding what not to build: code that does not exist cannot break.',
    ],

    pathLabel: 'Track record',
    pathTitle: 'Where I have been',
    concurrent: 'concurrent',
    eduLabel: 'Education',

    stackLabel: 'Stack',
    stackTitle: 'What I build with',

    contactLabel: 'Contact',
    contactTitle: ['Share the context of the role.'],
    contactText:
      'Tell me what the team needs to solve this quarter. If I am not the right person for it, I will say so in my first reply.',
    copyEmail: 'Copy email',
    copied: 'Email copied',

    footerRole: 'Senior full stack developer and tech lead',
    footerPlace: 'Goiânia, Goiás, Brazil',
    footerNote: 'This site collects no data and uses no cookies.',
  },
}
