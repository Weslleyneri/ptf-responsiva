const PROJECTS = [
  {
    id: "01",
    title: "Centro de Comando",
    color: "#67edf6",
    size: "size-wide",
    visual: "dashboard",
    filters: ["ai", "data", "systems"],
    category: { pt: "OPERAÇÕES + IA", en: "OPERATIONS + AI" },
    summary: {
      pt: "Portal executivo que transforma um backlog complexo em decisões rápidas, com leitura de SLA, histórico e priorização operacional.",
      en: "Executive portal that turns a complex backlog into fast decisions through SLA visibility, history and operational prioritization.",
    },
    challenge: {
      pt: "Centralizar diferentes recortes do backlog e impedir que chamados críticos se perdessem na rotina operacional.",
      en: "Centralize multiple backlog views and prevent critical tickets from getting lost in daily operations.",
    },
    role: {
      pt: "Definição das regras, experiência, arquitetura funcional, integração da API e validação técnica das entregas.",
      en: "Business rules, experience design, functional architecture, API integration and technical delivery validation.",
    },
    solution: {
      pt: "Uma experiência única com cards acionáveis, filtros, histórico de tratativas, alertas de prazo e apoio de IA para síntese do cenário.",
      en: "A unified experience with actionable cards, filters, action history, deadline alerts and AI-assisted scenario summaries.",
    },
    outcome: {
      pt: "Mais rastreabilidade das tratativas e uma visão unificada do risco de SLA para apoiar a gestão.",
      en: "Greater action traceability and a unified view of SLA risk to support management decisions.",
    },
    architecture: { pt: ["API DE BACKLOG", "REGRAS + IA", "PORTAL EXECUTIVO"], en: ["BACKLOG API", "RULES + AI", "EXECUTIVE PORTAL"] },
    tags: ["React", "JavaScript", "API", "LLM", "Analytics"],
  },
  {
    id: "02",
    title: "Estoque ATP",
    color: "#a77dff",
    size: "size-compact",
    visual: "stock",
    filters: ["data", "automation"],
    category: { pt: "DADOS + VISIBILIDADE", en: "DATA + VISIBILITY" },
    summary: {
      pt: "Monitoramento do valor de estoque, limites segurados, urnas e ATPs críticas, conectando Databricks à visão executiva.",
      en: "Monitoring of inventory value, insured limits, voting machines and critical ATP locations, connecting Databricks to executive analytics.",
    },
    challenge: {
      pt: "Transformar uma base extensa de peças e ATPs em uma leitura financeira clara, confiável e acionável.",
      en: "Turn a large parts and ATP dataset into a clear, reliable and actionable financial view.",
    },
    role: {
      pt: "Modelagem das regras, estruturação das fontes, cálculos DAX, validação do relacionamento e desenho da visão executiva.",
      en: "Rule modeling, source structuring, DAX calculations, relationship validation and executive dashboard design.",
    },
    solution: {
      pt: "Modelo analítico conectado ao datalake, com valor total, limite por ATP, atingimento, excedentes e recortes executivos.",
      en: "Analytics model connected to the data lake with total value, ATP limits, utilization, excess and executive views.",
    },
    outcome: {
      pt: "Leitura consolidada de valor, limite e criticidade por ATP para orientar priorização e controle.",
      en: "Consolidated value, limit and criticality views per ATP to guide prioritization and control.",
    },
    architecture: { pt: ["DATABRICKS", "MODELO + DAX", "POWER BI"], en: ["DATABRICKS", "MODEL + DAX", "POWER BI"] },
    tags: ["Power BI", "Databricks", "DAX", "SQL"],
  },
  {
    id: "03",
    title: "Projeto Cervelo",
    color: "#b7ff64",
    size: "",
    visual: "route",
    filters: ["automation", "data", "field"],
    category: { pt: "ROTEIRIZAÇÃO INTELIGENTE", en: "INTELLIGENT ROUTING" },
    summary: {
      pt: "Automação da roteirização de técnicos para reduzir deslocamentos, respeitar prioridades e ampliar a visibilidade da operação.",
      en: "Automated field technician routing to reduce travel, respect priorities and improve operational visibility.",
    },
    challenge: {
      pt: "Substituir a roteirização manual, sem visão consolidada de quilômetros, localização e prioridade dos chamados.",
      en: "Replace manual routing without a consolidated view of mileage, location and ticket priority.",
    },
    role: {
      pt: "Mapeamento do processo, desenho do fluxo futuro, acompanhamento da integração e estruturação dos indicadores.",
      en: "Process mapping, future-state flow design, integration follow-up and KPI structuring.",
    },
    solution: {
      pt: "Fluxo automatizado que organiza a jornada do técnico por localização e prioridade e estrutura dados para acompanhamento.",
      en: "Automated workflow that organizes technician journeys by location and priority and structures data for monitoring.",
    },
    outcome: {
      pt: "Base para uma operação com menor deslocamento, priorização consistente e maior controle da rotina em campo.",
      en: "Foundation for lower travel, consistent prioritization and greater control of field routines.",
    },
    architecture: { pt: ["CHAMADOS + GEO", "MOTOR DE ROTAS", "ROTINA DE CAMPO"], en: ["TICKETS + GEO", "ROUTING ENGINE", "FIELD ROUTINE"] },
    tags: ["Automation", "Geodata", "BI", "Field Service"],
  },
  {
    id: "04",
    title: "Brilha Mais",
    color: "#ff6fb7",
    size: "",
    visual: "chat",
    filters: ["ai", "automation", "field"],
    category: { pt: "IA CONVERSACIONAL", en: "CONVERSATIONAL AI" },
    summary: {
      pt: "Assistente operacional para interagir com técnicos, acompanhar indicadores e automatizar cobranças e escalonamentos.",
      en: "Operational assistant that interacts with technicians, tracks KPIs and automates follow-ups and escalations.",
    },
    challenge: {
      pt: "Ganhar proximidade com a rotina do técnico sem depender de cobranças e consolidações totalmente manuais.",
      en: "Gain visibility into technician routines without relying on fully manual follow-ups and consolidation.",
    },
    role: {
      pt: "Desenho da jornada conversacional, regras de escalonamento, indicadores e alinhamento das integrações.",
      en: "Conversation journey design, escalation rules, indicators and integration alignment.",
    },
    solution: {
      pt: "Conversação automatizada, acompanhamento de lotes e indicadores, comunicações por e-mail e escalonamento inteligente.",
      en: "Automated conversations, batch and KPI tracking, email communication and intelligent escalation.",
    },
    outcome: {
      pt: "Comunicação mais estruturada e maior capacidade de acompanhar pendências, confirmações e indicadores de campo.",
      en: "More structured communication and stronger monitoring of pending items, confirmations and field KPIs.",
    },
    architecture: { pt: ["DADOS DO TÉCNICO", "LLM + REGRAS", "WHATSAPP + E-MAIL"], en: ["TECHNICIAN DATA", "LLM + RULES", "WHATSAPP + EMAIL"] },
    tags: ["LLM", "WhatsApp", "Automation", "NPS"],
  },
  {
    id: "05",
    title: "Peças Backup",
    color: "#ffac66",
    size: "size-compact",
    visual: "parts",
    filters: ["systems", "data", "field"],
    category: { pt: "CONTROLE + EFICIÊNCIA", en: "CONTROL + EFFICIENCY" },
    summary: {
      pt: "Portal para acompanhar envio e consumo de peças backup, com saldo, rastreabilidade e comportamento por técnico.",
      en: "Portal to track backup-parts shipments and consumption with balances, traceability and technician behavior.",
    },
    challenge: {
      pt: "Controlar kits enviados a campo e identificar desvios de consumo ou necessidade de reposição.",
      en: "Control kits sent to the field and identify consumption deviations or replenishment needs.",
    },
    role: {
      pt: "Definição do produto, regras de controle, jornadas de envio e consumo e desenho das telas operacionais.",
      en: "Product definition, control rules, shipment and consumption journeys and operational screen design.",
    },
    solution: {
      pt: "Rastreabilidade de remessas e uso por técnico, visão de estoque e análise comparativa de consumo.",
      en: "Shipment and technician-usage traceability, inventory view and comparative consumption analysis.",
    },
    outcome: {
      pt: "Maior visibilidade sobre onde estão as peças, quanto foi utilizado e quais comportamentos exigem atenção.",
      en: "Greater visibility into parts location, usage levels and behaviors that require attention.",
    },
    architecture: { pt: ["REMESSAS", "SALDO + CONSUMO", "PAINEL POR TÉCNICO"], en: ["SHIPMENTS", "BALANCE + USAGE", "TECHNICIAN PANEL"] },
    tags: ["React", "PostgreSQL", "Dashboard", "Logistics"],
  },
  {
    id: "06",
    title: "RAT Digital",
    color: "#78a7ff",
    size: "size-compact",
    visual: "signature",
    filters: ["systems", "automation", "field"],
    category: { pt: "EXPERIÊNCIA EM CAMPO", en: "FIELD EXPERIENCE" },
    summary: {
      pt: "Jornada mobile para assinatura digital, geração do PDF padrão e compartilhamento direto pelo celular.",
      en: "Mobile journey for digital signatures, standard PDF generation and direct mobile sharing.",
    },
    challenge: {
      pt: "Eliminar atrito no encerramento do atendimento e garantir o documento final no padrão correto.",
      en: "Remove friction from service closure and ensure the final document follows the required standard.",
    },
    role: {
      pt: "Modelagem dos campos, experiência de assinatura, regras do PDF e fluxo de download e compartilhamento.",
      en: "Field modeling, signature experience, PDF rules and download and sharing flow.",
    },
    solution: {
      pt: "Assinatura em tela, preenchimento automatizado do PDF, download imediato e compartilhamento pelo menu nativo.",
      en: "On-screen signatures, automated PDF filling, instant download and native sharing.",
    },
    outcome: {
      pt: "Jornada mais simples em campo e documento final padronizado para cliente e técnico.",
      en: "Simpler field journey and a standardized final document for both customer and technician.",
    },
    architecture: { pt: ["DADOS DA RAT", "ASSINATURA MOBILE", "PDF FINAL"], en: ["RAT DATA", "MOBILE SIGNATURE", "FINAL PDF"] },
    tags: ["PDF", "Signature", "Mobile", "UX"],
  },
  {
    id: "07",
    title: "Portal de Conformidade",
    color: "#63e6be",
    size: "size-compact",
    visual: "shield",
    filters: ["systems", "automation"],
    category: { pt: "GOVERNANÇA + SEGURANÇA", en: "GOVERNANCE + SECURITY" },
    summary: {
      pt: "Experiência controlada para apoiar consultas de conformidade antes da contratação, com fluxo e rastreabilidade.",
      en: "Controlled experience that supports pre-hiring compliance checks with workflow and traceability.",
    },
    challenge: {
      pt: "Organizar um processo sensível que exige consistência, controle de acesso e registro das etapas.",
      en: "Organize a sensitive process that requires consistency, access control and step-by-step records.",
    },
    role: {
      pt: "Estruturação do fluxo, requisitos funcionais, experiência de consulta e princípios de segurança e privacidade.",
      en: "Workflow structure, functional requirements, query experience and security and privacy principles.",
    },
    solution: {
      pt: "Portal com etapas claras, perfis de acesso, registro de análise e centralização do status da consulta.",
      en: "Portal with clear stages, access profiles, analysis records and centralized query status.",
    },
    outcome: {
      pt: "Processo mais padronizado, auditável e protegido para apoiar a tomada de decisão responsável.",
      en: "More standardized, auditable and protected process for responsible decision-making.",
    },
    architecture: { pt: ["SOLICITAÇÃO", "ANÁLISE CONTROLADA", "REGISTRO + STATUS"], en: ["REQUEST", "CONTROLLED REVIEW", "RECORD + STATUS"] },
    tags: ["Security", "Workflow", "Privacy", "Governance"],
  },
  {
    id: "08",
    title: "Score de Técnicos",
    color: "#f3e66d",
    size: "size-wide",
    visual: "score",
    filters: ["systems", "data", "field"],
    category: { pt: "REGRAS + PERFORMANCE", en: "RULES + PERFORMANCE" },
    summary: {
      pt: "Sistema de score para transformar critérios técnicos em uma visão objetiva sobre perfis e aptidão de atendimento.",
      en: "Scoring system that turns technical criteria into an objective view of profiles and service eligibility.",
    },
    challenge: {
      pt: "Centralizar dados de técnicos e aplicar critérios consistentes para orientar quais perfis de cliente podem atender.",
      en: "Centralize technician data and apply consistent criteria to guide which customer profiles they can support.",
    },
    role: {
      pt: "Desenho das regras, modelo de pontuação, experiência de cadastro e visualização dos resultados.",
      en: "Rule design, scoring model, registration experience and results visualization.",
    },
    solution: {
      pt: "Portal leve com cadastro, motor de regras, score consolidado e classificação de aptidão por perfil.",
      en: "Lightweight portal with registration, rules engine, consolidated score and profile-based eligibility.",
    },
    outcome: {
      pt: "Critérios mais transparentes e uma base estruturada para direcionar capacitação e alocação técnica.",
      en: "More transparent criteria and a structured foundation for training and technician allocation.",
    },
    architecture: { pt: ["BASE TÉCNICA", "MOTOR DE SCORE", "PERFIL DE ATENDIMENTO"], en: ["TECHNICIAN BASE", "SCORING ENGINE", "SERVICE PROFILE"] },
    tags: ["JavaScript", "Rules", "Database", "Analytics"],
  },
];

const GITHUB_REPOS = [
  {
    id: "GH_01",
    name: "targetcs-site",
    title: { pt: "Target Consultoria", en: "Target Consulting" },
    type: "html",
    language: "HTML",
    updated: "2026-07-13",
    color: "#67edf6",
    summary: {
      pt: "Site responsivo para consultoria técnica dos setores industrial e farmacêutico, com foco em serviços para ambientes regulados.",
      en: "Responsive website for technical consulting in industrial and pharmaceutical sectors, focused on services for regulated environments.",
    },
    focus: {
      pt: ["Apresentação de serviços", "Experiência responsiva", "Conversão comercial"],
      en: ["Service presentation", "Responsive experience", "Commercial conversion"],
    },
    stack: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    url: "https://github.com/Weslleyneri/targetcs-site",
  },
  {
    id: "GH_02",
    name: "neritech",
    title: { pt: "Neri AI Tech", en: "Neri AI Tech" },
    type: "react",
    language: "TypeScript",
    updated: "2026-05-20",
    color: "#a77dff",
    summary: {
      pt: "Plataforma institucional para serviços de sites, automação com IA e modernização de sistemas, construída com uma stack React moderna.",
      en: "Institutional platform for websites, AI automation and system modernization services, built with a modern React stack.",
    },
    focus: {
      pt: ["Serviços de tecnologia", "Arquitetura React", "Integrações digitais"],
      en: ["Technology services", "React architecture", "Digital integrations"],
    },
    stack: ["React 19", "TypeScript", "Vite", "Supabase", "Firebase", "i18next"],
    url: "https://github.com/Weslleyneri/neritech",
  },
  {
    id: "GH_03",
    name: "academyIA",
    title: { pt: "Portal de Consulta", en: "Operations Portal" },
    type: "node",
    language: "Node.js",
    updated: "2026-04-06",
    color: "#b7ff64",
    summary: {
      pt: "Portal operacional com acessos separados para RH e Field Service, sessões autenticadas e rotas protegidas por perfil.",
      en: "Operations portal with separate HR and Field Service access, authenticated sessions and role-protected routes.",
    },
    focus: {
      pt: ["Controle por perfil", "Rotas protegidas", "Operação RH + Field"],
      en: ["Role-based access", "Protected routes", "HR + Field operations"],
    },
    stack: ["Node.js", "Express", "Sessions", "Multer", "JavaScript"],
    url: "https://github.com/Weslleyneri/academyIA",
  },
  {
    id: "GH_04",
    name: "SistemadeCompliance",
    title: { pt: "Sistema de Compliance", en: "Compliance System" },
    type: "node",
    language: "JavaScript",
    updated: "2025-12-24",
    color: "#ff6fb7",
    summary: {
      pt: "Experiência web modular para rotinas de conformidade, com áreas de administração, consulta, manual e carga de dados.",
      en: "Modular web experience for compliance workflows, with administration, lookup, guidance and data-upload areas.",
    },
    focus: {
      pt: ["Fluxo de conformidade", "Módulos operacionais", "Gestão de informação"],
      en: ["Compliance workflow", "Operational modules", "Information management"],
    },
    stack: ["HTML", "CSS", "JavaScript", "Node.js"],
    url: "https://github.com/Weslleyneri/SistemadeCompliance",
  },
  {
    id: "GH_05",
    name: "ianeri",
    title: { pt: "Neri AI Solutions", en: "Neri AI Solutions" },
    type: "html",
    language: "HTML",
    updated: "2025-10-02",
    color: "#ffac66",
    summary: {
      pt: "Conceito visual interativo para a marca Neri AI Solutions, com splash imersiva e portal institucional conectado.",
      en: "Interactive visual concept for the Neri AI Solutions brand, with an immersive splash and connected institutional portal.",
    },
    focus: {
      pt: ["Identidade de marca", "Entrada imersiva", "Navegação visual"],
      en: ["Brand identity", "Immersive entry", "Visual navigation"],
    },
    stack: ["HTML", "CSS", "JavaScript", "Visual Design"],
    url: "https://github.com/Weslleyneri/ianeri",
  },
  {
    id: "GH_06",
    name: "portalconsul-repository",
    title: { pt: "Portal Técnico", en: "Technical Portal" },
    type: "html",
    language: "HTML",
    updated: "2025-09-17",
    color: "#67edf6",
    summary: {
      pt: "Portal de consulta técnica com jornada orientada por filtros, campos operacionais e retorno de informações em uma interface escura.",
      en: "Technical lookup portal with a filter-led journey, operational fields and information results in a dark interface.",
    },
    focus: {
      pt: ["Consulta técnica", "Filtros operacionais", "Experiência dark"],
      en: ["Technical lookup", "Operational filters", "Dark experience"],
    },
    stack: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    url: "https://github.com/Weslleyneri/portalconsul-repository",
  },
  {
    id: "GH_07",
    name: "consultatech",
    title: { pt: "Consulta Tech", en: "Tech Lookup" },
    type: "html",
    language: "HTML",
    updated: "2025-07-28",
    color: "#a77dff",
    summary: {
      pt: "Aplicação de consulta para técnicos, organizada em uma interface compacta com seletores, campos e respostas operacionais.",
      en: "Lookup application for technicians, organized in a compact interface with selectors, fields and operational results.",
    },
    focus: {
      pt: ["Jornada de consulta", "Formulário inteligente", "Uso em campo"],
      en: ["Lookup journey", "Smart form", "Field usage"],
    },
    stack: ["HTML", "CSS", "JavaScript", "Forms"],
    url: "https://github.com/Weslleyneri/consultatech",
  },
  {
    id: "GH_08",
    name: "rotatech",
    title: { pt: "Rota Tech", en: "Route Tech" },
    type: "html",
    language: "HTML",
    updated: "2025-07-20",
    color: "#b7ff64",
    summary: {
      pt: "Portal para consulta de programação por base e técnico, com atualização de informações e experiência focada na rotina de campo.",
      en: "Scheduling lookup portal by service base and technician, with information updates and an experience focused on field routines.",
    },
    focus: {
      pt: ["Programação técnica", "Seleção por base", "Rotina de campo"],
      en: ["Technician scheduling", "Base selection", "Field routine"],
    },
    stack: ["HTML", "CSS", "JavaScript", "Operational UX"],
    url: "https://github.com/Weslleyneri/rotatech",
  },
];

const TRANSLATIONS = {
  pt: {
    nav: { projects: "Projetos", github: "GitHub Lab", impact: "Impacto", about: "Sobre", journey: "Jornada", contact: "Contato" },
    hero: { status: "PORTFÓLIO 2.1 // SISTEMA ONLINE", role: "DESENVOLVEDOR DE SISTEMAS, IA & LÍDER TÉCNICO", headline: "Eu construo <strong>inteligência</strong><br />para operações reais.", summary: "Transformo problemas complexos em sistemas, automações e experiências orientadas por dados — da estratégia à entrega.", ctaProjects: "Explorar cases", ctaAi: "Pergunte ao meu portfólio" },
    metrics: { cases: "CASES SELECIONADOS", tech: "TECNOLOGIAS", axes: "FRENTES DE ATUAÇÃO", delivery: "VISÃO DE ENTREGA" },
    projects: { kicker: "ARQUIVOS DE PROJETO", title: "Tecnologia que sai<br />da ideia e entra em <em>operação.</em>", intro: "Explore os cases por especialidade. Cada arquivo apresenta o desafio, minha atuação, a solução e o impacto operacional.", visible: "VISÍVEIS", open: "ABRIR CASE" },
    filters: { all: "Todos", ai: "IA", data: "Dados & BI", automation: "Automação", systems: "Sistemas", field: "Field Service" },
    github: { kicker: "GITHUB LAB // REPOSITÓRIOS REAIS", title: "Código aberto para<br /><em>explorar por dentro.</em>", intro: "Uma curadoria visual de projetos públicos do meu GitHub. Pesquise, filtre a stack e abra cada repositório para conhecer sua estrutura.", publicRepos: "REPOSITÓRIOS PÚBLICOS", curatedRepos: "PROJETOS EM DESTAQUE", source: "FONTE: GITHUB", searchLabel: "Pesquisar repositórios", filterAll: "Todos", visible: "VISÍVEIS", sync: "CURADORIA SINCRONIZADA COM OS REPOSITÓRIOS PÚBLICOS EM SETEMBRO DE 2026" },
    impact: { kicker: "MAPA DE IMPACTO", title: "Código é o meio.<br /><em>Resultado é o destino.</em>", card1label: "VISÃO END-TO-END", card1title: "Do problema operacional à solução em produção.", card1copy: "Investigação, arquitetura, experiência, desenvolvimento, validação e comunicação da entrega em uma única visão.", domains: "Sistemas, IA, automação, dados e Field Service conectados para resolver o problema completo.", stacklabel: "ECOSSISTEMA TÉCNICO" },
    about: { kicker: "HUMANO + TECNOLOGIA", title: "Eu não desenvolvo<br />apenas telas.<br /><em>Desenho caminhos.</em>", lead: "Sou desenvolvedor de sistemas e inteligência artificial com olhar para o todo: <strong>negócio, pessoas, tecnologia e resultado.</strong>", copy: "Atuo da investigação do problema à arquitetura, desenvolvimento e validação. Como profissional sênior, acompanho projetos, reviso construções e código e apoio a evolução técnica do time.", item1title: "Estratégia técnica", item1copy: "Traduzo necessidades reais em soluções viáveis e sustentáveis.", item2title: "Qualidade de entrega", item2copy: "Valido arquitetura, experiência, construção e código.", item3title: "Evolução do time", item3copy: "Acompanho projetos e apoio desenvolvedores da equipe.", item4title: "Visão operacional", item4copy: "Construo soluções pensadas para a rotina de quem usa." },
    domains: { kicker: "MATRIZ DE DOMÍNIO", title: "Onde tecnologia e<br /><em>operação se encontram.</em>", intro: "Minha força está em conectar disciplinas diferentes para entregar experiências completas, úteis e escaláveis.", aiTitle: "IA & Agentes", aiCopy: "LLMs, assistentes e inteligência aplicada a rotinas reais.", systemTitle: "Sistemas & UX", systemCopy: "Portais responsivos, interfaces claras e jornadas digitais.", dataTitle: "Dados & Decisão", dataCopy: "Modelos, indicadores e dashboards para decisões rápidas.", autoTitle: "Automação", autoCopy: "Fluxos conectados para reduzir esforço e aumentar controle." },
    journey: { kicker: "EVOLUÇÃO PROFISSIONAL", title: "Uma carreira construída<br />em <em>movimento contínuo.</em>", step1meta: "BASE", step1title: "Operação & Suporte", step1copy: "Conhecer o problema por dentro e entender o impacto na ponta.", step2meta: "CONSTRUÇÃO", step2title: "Sistemas & Automação", step2copy: "Transformar tarefas manuais em experiências digitais.", step3meta: "INTELIGÊNCIA", step3title: "Dados & IA", step3copy: "Conectar informação, contexto e modelos para apoiar decisões.", step4meta: "LIDERANÇA", step4title: "Qualidade & Time", step4copy: "Validar entregas e apoiar a evolução técnica das pessoas.", step5meta: "PRÓXIMO NÍVEL", step5copy: "Unir experiência e visão de futuro para criar novas soluções." },
    resume: { kicker: "PERFIL EXECUTIVO", title: "Experiência técnica.<br /><em>Visão de negócio.</em>", copy: "Um perfil multidisciplinar para liderar, desenvolver e acelerar produtos digitais, automações e iniciativas de inteligência artificial.", roleLabel: "POSICIONAMENTO", roleValue: "Desenvolvedor Sênior & Líder Técnico", focusLabel: "FOCO", focusValue: "Sistemas, IA, Dados & Automação", diffLabel: "DIFERENCIAL", diffValue: "Tecnologia conectada à operação", download: "Baixar currículo", linkedin: "Ver LinkedIn" },
    contact: { kicker: "PRÓXIMA CONEXÃO", title: "Vamos transformar<br />complexidade em <em>impacto?</em>", cta: "Iniciar conversa", ai: "Explorar com IA" },
    dialog: { challenge: "O DESAFIO", role: "MINHA ATUAÇÃO", solution: "A SOLUÇÃO", outcome: "IMPACTO GERADO", architecture: "ARQUITETURA DA EXPERIÊNCIA" },
    ai: { disclaimer: "Respostas geradas a partir do conteúdo deste portfólio." },
  },
  en: {
    nav: { projects: "Projects", github: "GitHub Lab", impact: "Impact", about: "About", journey: "Journey", contact: "Contact" },
    hero: { status: "PORTFOLIO 2.1 // SYSTEM ONLINE", role: "SYSTEMS & AI DEVELOPER · TECH LEAD", headline: "I build <strong>intelligence</strong><br />for real operations.", summary: "I turn complex problems into systems, automations and data-driven experiences — from strategy to delivery.", ctaProjects: "Explore cases", ctaAi: "Ask my portfolio" },
    metrics: { cases: "SELECTED CASES", tech: "TECHNOLOGIES", axes: "AREAS OF EXPERTISE", delivery: "DELIVERY VISION" },
    projects: { kicker: "PROJECT FILES", title: "Technology that moves<br />from idea to <em>operation.</em>", intro: "Explore cases by specialty. Each file presents the challenge, my role, the solution and its operational impact.", visible: "VISIBLE", open: "OPEN CASE" },
    filters: { all: "All", ai: "AI", data: "Data & BI", automation: "Automation", systems: "Systems", field: "Field Service" },
    github: { kicker: "GITHUB LAB // REAL REPOSITORIES", title: "Open code ready<br /><em>to explore within.</em>", intro: "A visual curation of public projects from my GitHub. Search, filter the stack and open each repository to inspect its structure.", publicRepos: "PUBLIC REPOSITORIES", curatedRepos: "FEATURED PROJECTS", source: "SOURCE: GITHUB", searchLabel: "Search repositories", filterAll: "All", visible: "VISIBLE", sync: "CURATION SYNCED WITH PUBLIC REPOSITORIES IN SEPTEMBER 2026" },
    impact: { kicker: "IMPACT MAP", title: "Code is the medium.<br /><em>Results are the destination.</em>", card1label: "END-TO-END VISION", card1title: "From an operational problem to a production solution.", card1copy: "Discovery, architecture, experience, development, validation and delivery communication in one integrated view.", domains: "Systems, AI, automation, data and Field Service connected to solve the entire problem.", stacklabel: "TECH ECOSYSTEM" },
    about: { kicker: "HUMAN + TECHNOLOGY", title: "I do not simply build<br />screens.<br /><em>I design paths.</em>", lead: "I am a systems and AI developer with a holistic view of <strong>business, people, technology and results.</strong>", copy: "I work from problem discovery to architecture, development and validation. As a senior professional, I follow projects, review solutions and code, and support the team's technical evolution.", item1title: "Technical strategy", item1copy: "I translate real needs into viable and sustainable solutions.", item2title: "Delivery quality", item2copy: "I validate architecture, experience, implementation and code.", item3title: "Team evolution", item3copy: "I follow projects and support developers on the team.", item4title: "Operational vision", item4copy: "I build solutions around the routines of the people using them." },
    domains: { kicker: "DOMAIN MATRIX", title: "Where technology and<br /><em>operations meet.</em>", intro: "My strength is connecting different disciplines to deliver complete, useful and scalable experiences.", aiTitle: "AI & Agents", aiCopy: "LLMs, assistants and intelligence applied to real routines.", systemTitle: "Systems & UX", systemCopy: "Responsive portals, clear interfaces and digital journeys.", dataTitle: "Data & Decisions", dataCopy: "Models, KPIs and dashboards for faster decisions.", autoTitle: "Automation", autoCopy: "Connected workflows that reduce effort and improve control." },
    journey: { kicker: "PROFESSIONAL EVOLUTION", title: "A career built through<br /><em>continuous motion.</em>", step1meta: "FOUNDATION", step1title: "Operations & Support", step1copy: "Understand the problem from within and its impact at the edge.", step2meta: "BUILD", step2title: "Systems & Automation", step2copy: "Turn manual tasks into digital experiences.", step3meta: "INTELLIGENCE", step3title: "Data & AI", step3copy: "Connect information, context and models to support decisions.", step4meta: "LEADERSHIP", step4title: "Quality & Team", step4copy: "Validate deliveries and support people's technical growth.", step5meta: "NEXT LEVEL", step5copy: "Combine experience and a future-facing vision to create new solutions." },
    resume: { kicker: "EXECUTIVE PROFILE", title: "Technical experience.<br /><em>Business vision.</em>", copy: "A multidisciplinary profile to lead, build and accelerate digital products, automations and artificial intelligence initiatives.", roleLabel: "POSITIONING", roleValue: "Senior Developer & Tech Lead", focusLabel: "FOCUS", focusValue: "Systems, AI, Data & Automation", diffLabel: "DIFFERENTIAL", diffValue: "Technology connected to operations", download: "Download résumé", linkedin: "View LinkedIn" },
    contact: { kicker: "NEXT CONNECTION", title: "Shall we turn<br />complexity into <em>impact?</em>", cta: "Start a conversation", ai: "Explore with AI" },
    dialog: { challenge: "THE CHALLENGE", role: "MY ROLE", solution: "THE SOLUTION", outcome: "IMPACT", architecture: "EXPERIENCE ARCHITECTURE" },
    ai: { disclaimer: "Answers are generated from this portfolio's content." },
  },
};

const UI = {
  pt: {
    projectLabel: "Abrir detalhes do projeto",
    filterLabel: "Filtrar projetos",
    repoLabel: "Selecionar repositório",
    repoFilterLabel: "Filtrar repositórios por tecnologia",
    repoSearchPlaceholder: "Pesquisar projeto ou tecnologia...",
    repoNoResults: "Nenhum repositório encontrado para este filtro.",
    repoOpen: "ABRIR REPOSITÓRIO",
    repoUpdated: "ATUALIZADO",
    repoStack: "STACK IDENTIFICADA",
    repoFocus: "MAPA DO PROJETO",
    commandRepository: "REPOSITÓRIO",
    soundOn: "Desativar ambientação sonora",
    soundOff: "Ativar ambientação sonora",
    soundActive: "SOM AMBIENTE ATIVO // USE O CONTROLE NO TOPO PARA DESATIVAR",
    soundInactive: "SOM AMBIENTE DESATIVADO",
    soundBlocked: "O NAVEGADOR BLOQUEOU O ÁUDIO // TOQUE NOVAMENTE NO BOTÃO DE SOM",
    askPlaceholder: "Pergunte sobre projetos, IA ou liderança...",
    commandPlaceholder: "Buscar seção ou projeto...",
    commandSection: "SEÇÃO",
    commandProject: "PROJETO",
    aiIntro: "Olá! Sou a versão interativa deste portfólio. Posso apresentar os projetos de Weslley, sua experiência com IA, stack ou atuação como líder técnico.",
    suggestions: ["Quais projetos usam IA?", "O que está no GitHub?", "Como ele atua como líder?", "Qual é a stack?"],
    answers: {
      ai: "Os principais cases com IA são Centro de Comando, que prevê apoio de IA para síntese operacional, e Brilha Mais, com uma jornada conversacional para técnicos. Weslley também trabalha com LLMs, GPT Maker e Copilot Studio.",
      leadership: "Weslley atua de ponta a ponta: valida arquitetura, experiência e código, acompanha a evolução dos projetos, apoia desenvolvedores da equipe e comunica o status das entregas com visão de negócio.",
      stack: "A stack reúne React, JavaScript, Python, Java, PostgreSQL, Supabase, Power BI, Databricks, Power Automate, Copilot Studio, GPT Maker e LLMs.",
      field: "Os cases diretamente ligados a Field Service incluem Cervelo, Brilha Mais, Peças Backup, RAT Digital e Score de Técnicos. Eles cobrem roteirização, comunicação, logística, documentação e qualificação técnica.",
      projects: "O portfólio apresenta oito cases: Centro de Comando, Estoque ATP, Cervelo, Brilha Mais, Peças Backup, RAT Digital, Portal de Conformidade e Score de Técnicos.",
      repositories: "O GitHub Lab reúne oito repositórios públicos em destaque, incluindo Neri AI Tech, Target Consultoria, Portal de Consulta, Sistema de Compliance e soluções para rotinas técnicas. Cada cartão permite filtrar a stack e abrir o código original.",
      contact: "Você pode falar com Weslley pelo LinkedIn ou conhecer o código e outros trabalhos no GitHub. Os dois links estão disponíveis no topo e no final do portfólio.",
      fallback: "Posso responder sobre projetos, inteligência artificial, liderança técnica, stack, Field Service ou formas de contato. Tente uma dessas áreas.",
    },
  },
  en: {
    projectLabel: "Open project details",
    filterLabel: "Filter projects",
    repoLabel: "Select repository",
    repoFilterLabel: "Filter repositories by technology",
    repoSearchPlaceholder: "Search project or technology...",
    repoNoResults: "No repositories found for this filter.",
    repoOpen: "OPEN REPOSITORY",
    repoUpdated: "UPDATED",
    repoStack: "IDENTIFIED STACK",
    repoFocus: "PROJECT MAP",
    commandRepository: "REPOSITORY",
    soundOn: "Disable ambient sound",
    soundOff: "Enable ambient sound",
    soundActive: "AMBIENT SOUND ACTIVE // USE THE TOP CONTROL TO DISABLE IT",
    soundInactive: "AMBIENT SOUND DISABLED",
    soundBlocked: "THE BROWSER BLOCKED AUDIO // TAP THE SOUND BUTTON AGAIN",
    askPlaceholder: "Ask about projects, AI or leadership...",
    commandPlaceholder: "Search for a section or project...",
    commandSection: "SECTION",
    commandProject: "PROJECT",
    aiIntro: "Hello! I am the interactive version of this portfolio. I can present Weslley's projects, AI experience, technology stack or work as a tech lead.",
    suggestions: ["Which projects use AI?", "What is on GitHub?", "How does he lead?", "What is his stack?"],
    answers: {
      ai: "The main AI cases are Centro de Comando, which includes AI-assisted operational summaries, and Brilha Mais, with a conversational journey for technicians. Weslley also works with LLMs, GPT Maker and Copilot Studio.",
      leadership: "Weslley works end to end: he validates architecture, experience and code, follows project progress, supports developers on the team and communicates delivery status with a business perspective.",
      stack: "The stack includes React, JavaScript, Python, Java, PostgreSQL, Supabase, Power BI, Databricks, Power Automate, Copilot Studio, GPT Maker and LLMs.",
      field: "Field Service cases include Cervelo, Brilha Mais, Peças Backup, RAT Digital and Score de Técnicos, covering routing, communication, logistics, documentation and technician qualification.",
      projects: "The portfolio presents eight cases: Centro de Comando, Estoque ATP, Cervelo, Brilha Mais, Peças Backup, RAT Digital, Portal de Conformidade and Score de Técnicos.",
      repositories: "The GitHub Lab features eight curated public repositories, including Neri AI Tech, Target Consulting, the Operations Portal, the Compliance System and solutions for technical workflows. Every card lets visitors filter the stack and open the original code.",
      contact: "You can reach Weslley on LinkedIn or explore code and other work on GitHub. Both links are available at the top and bottom of the portfolio.",
      fallback: "I can answer about projects, artificial intelligence, technical leadership, the technology stack, Field Service or contact options. Try one of those areas.",
    },
  },
};

let currentLanguage = "pt";
let currentFilter = "all";
let activeProjectIndex = null;
let currentRepoFilter = "all";
let repoQuery = "";
let activeRepoIndex = 0;
let soundEnabled = false;
let audioContext = null;
let ambientMaster = null;
let ambientNodes = [];
let ambientSequenceTimer = null;
let ambientStep = 0;
let soundToastTimer = null;

const root = document.documentElement;
const header = document.querySelector("#site-header");
const projectGrid = document.querySelector("#projects-grid");
const repoGrid = document.querySelector("#repo-grid");
const repoTerminal = document.querySelector("#repo-terminal");
const ambientAudio = document.querySelector("#ambient-audio");
const soundToast = document.querySelector("#sound-toast");
const projectDialog = document.querySelector("#project-dialog");
const commandDialog = document.querySelector("#command-dialog");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

function getCopy(object) {
  return object[currentLanguage] || object.pt;
}

function getNested(object, path) {
  return path.split(".").reduce((value, key) => value && value[key], object);
}

function visualMarkup(type) {
  const top = `<div class="mini-top"><i></i><i></i><i></i><b>LIVE_VIEW</b></div>`;
  if (type === "dashboard" || type === "stock") {
    return `<div class="visual-shell">${top}<div class="mini-stat-grid"><div class="mini-stat"><strong>${type === "stock" ? "R$" : "284"}</strong><span>${type === "stock" ? "VALOR" : "BACKLOG"}</span></div><div class="mini-stat"><strong>${type === "stock" ? "92%" : "37"}</strong><span>${type === "stock" ? "LIMITE" : "CRÍTICOS"}</span></div><div class="mini-stat"><strong>${type === "stock" ? "ATP" : "D-1"}</strong><span>${type === "stock" ? "UNIDADES" : "ALERTA"}</span></div></div><div class="mini-chart"><i style="--h:38%"></i><i style="--h:72%"></i><i style="--h:53%"></i><i style="--h:88%"></i><i style="--h:65%"></i><i style="--h:94%"></i><i style="--h:49%"></i></div></div>`;
  }
  if (type === "route") return `<div class="visual-shell">${top}<div class="mini-route"><i></i><i></i><i></i></div></div>`;
  if (type === "chat") return `<div class="visual-shell">${top}<div class="mini-chat"><p>Olá, como está sua rota hoje?</p><p>Chamados atualizados. Status enviado.</p><p>Indicadores sincronizados ✓</p></div></div>`;
  if (type === "parts") return `<div class="visual-shell">${top}<div class="mini-parts"><span>P-01</span><span>P-02</span><span>P-03</span><span>P-04</span><span>P-05</span><span>P-06</span><span>P-07</span><span>P-08</span></div></div>`;
  if (type === "signature") return `<div class="visual-shell">${top}<div class="mini-signature"><div>CLIENTE</div><div>TÉCNICO</div></div></div>`;
  if (type === "shield") return `<div class="visual-shell">${top}<div class="mini-shield">✓</div></div>`;
  return `<div class="visual-shell">${top}<div class="mini-score"><strong>87</strong><span>SCORE</span></div></div>`;
}

function renderProjects() {
  const visible = PROJECTS.map((project, index) => ({ project, index })).filter(({ project }) => currentFilter === "all" || project.filters.includes(currentFilter));
  projectGrid.innerHTML = visible.map(({ project, index }) => `
    <button class="project-card tilt-card ${project.size}" type="button" data-project-index="${index}" style="--project-color:${project.color}" aria-label="${UI[currentLanguage].projectLabel} ${project.title}">
      <div class="project-top"><span>${project.id} // CASE_FILE</span><span><i></i> ${getCopy(project.category)}</span></div>
      <div class="project-visual">${visualMarkup(project.visual)}</div>
      <div class="project-copy"><p class="project-category">${getCopy(project.category)}</p><h3>${project.title}</h3><p>${getCopy(project.summary)}</p></div>
      <div class="project-footer"><div class="project-tags">${project.tags.slice(0, 4).map((tag) => `<span>${tag}</span>`).join("")}</div><span class="project-open">${TRANSLATIONS[currentLanguage].projects.open} ↗</span></div>
    </button>`).join("");
  document.querySelector("#visible-project-count").textContent = String(visible.length).padStart(2, "0");
  projectGrid.querySelectorAll("[data-project-index]").forEach((card) => {
    card.addEventListener("click", () => openProject(Number(card.dataset.projectIndex)));
  });
  attachTilt(projectGrid.querySelectorAll(".tilt-card"));
}

function formatRepoDate(date) {
  return new Intl.DateTimeFormat(currentLanguage === "pt" ? "pt-BR" : "en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`)).replace(".", "").toUpperCase();
}

function filteredRepositories() {
  const normalizedQuery = repoQuery.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return GITHUB_REPOS.map((repo, index) => ({ repo, index })).filter(({ repo }) => {
    const matchesFilter = currentRepoFilter === "all" || repo.type === currentRepoFilter;
    const haystack = [repo.name, getCopy(repo.title), getCopy(repo.summary), repo.language, ...repo.stack]
      .join(" ")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    return matchesFilter && haystack.includes(normalizedQuery);
  });
}

function renderRepoTerminal(repo, index) {
  if (!repo) {
    repoTerminal.innerHTML = `<div class="repo-terminal-empty"><span>404</span><p>${UI[currentLanguage].repoNoResults}</p></div>`;
    return;
  }
  repoTerminal.style.setProperty("--repo-color", repo.color);
  repoTerminal.innerHTML = `
    <div class="repo-terminal-head"><span><i></i><i></i><i></i></span><b>github://Weslleyneri/${repo.name}</b><small>PUBLIC</small></div>
    <div class="repo-terminal-visual" aria-hidden="true">
      <div class="repo-orbit"><i></i><i></i><i></i><b>${String(index + 1).padStart(2, "0")}</b></div>
      <div class="repo-pulse"><span></span><span></span><span></span><span></span><span></span></div>
    </div>
    <div class="repo-terminal-copy">
      <p>${repo.id} // ${repo.language.toUpperCase()}</p>
      <h3>${getCopy(repo.title)}</h3>
      <p>${getCopy(repo.summary)}</p>
    </div>
    <div class="repo-terminal-map">
      <span>${UI[currentLanguage].repoFocus}</span>
      <div>${getCopy(repo.focus).map((item, itemIndex) => `${itemIndex ? "<i>→</i>" : ""}<b>${item}</b>`).join("")}</div>
    </div>
    <div class="repo-terminal-stack"><span>${UI[currentLanguage].repoStack}</span><div>${repo.stack.map((item) => `<b>${item}</b>`).join("")}</div></div>
    <div class="repo-terminal-footer"><span>${UI[currentLanguage].repoUpdated} // ${formatRepoDate(repo.updated)}</span><a href="${repo.url}" target="_blank" rel="noreferrer">${UI[currentLanguage].repoOpen} <b>↗</b></a></div>`;
}

function renderRepositories() {
  const visible = filteredRepositories();
  if (!visible.some(({ index }) => index === activeRepoIndex)) activeRepoIndex = visible[0]?.index ?? null;
  repoGrid.innerHTML = visible.length
    ? visible.map(({ repo, index }) => `
      <article class="repo-card-shell" role="listitem">
        <button class="repo-card tilt-card ${index === activeRepoIndex ? "is-active" : ""}" type="button" data-repo-index="${index}" style="--repo-color:${repo.color}" aria-pressed="${index === activeRepoIndex}" aria-label="${UI[currentLanguage].repoLabel} ${getCopy(repo.title)}">
          <div class="repo-card-head"><span>${repo.id}</span><span><i></i> PUBLIC</span></div>
          <div class="repo-card-visual" aria-hidden="true"><div><i></i><i></i><i></i><b>&lt;/&gt;</b></div><span>${repo.language}</span></div>
          <p>${repo.name}</p><h3>${getCopy(repo.title)}</h3><p>${getCopy(repo.summary)}</p>
          <div class="repo-card-tags">${repo.stack.slice(0, 3).map((item) => `<span>${item}</span>`).join("")}</div>
          <span class="repo-card-open">${index === activeRepoIndex ? "● SELECTED" : "EXPLORE"} <b>↘</b></span>
        </button>
      </article>`).join("")
    : `<p class="repo-empty">${UI[currentLanguage].repoNoResults}</p>`;
  document.querySelector("#visible-repo-count").textContent = String(visible.length).padStart(2, "0");
  repoGrid.querySelectorAll("[data-repo-index]").forEach((card) => {
    card.addEventListener("click", () => selectRepository(Number(card.dataset.repoIndex), true));
  });
  attachTilt(repoGrid.querySelectorAll(".tilt-card"));
  renderRepoTerminal(activeRepoIndex === null ? null : GITHUB_REPOS[activeRepoIndex], activeRepoIndex ?? 0);
}

function selectRepository(index, moveToDetail = false) {
  if (!GITHUB_REPOS[index]) return;
  activeRepoIndex = index;
  renderRepositories();
  playTone(470 + index * 18, .055);
  if (moveToDetail && window.innerWidth <= 820) {
    window.setTimeout(() => repoTerminal.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" }), 40);
  }
}

function openProject(index) {
  const project = PROJECTS[index];
  if (!project) return;
  activeProjectIndex = index;
  projectDialog.style.setProperty("--dialog-color", project.color);
  document.querySelector("#dialog-index").textContent = `${project.id} // CASE_FILE`;
  document.querySelector("#dialog-category").textContent = getCopy(project.category);
  document.querySelector("#dialog-title").textContent = project.title;
  document.querySelector("#dialog-description").textContent = getCopy(project.summary);
  document.querySelector("#dialog-challenge").textContent = getCopy(project.challenge);
  document.querySelector("#dialog-role").textContent = getCopy(project.role);
  document.querySelector("#dialog-solution").textContent = getCopy(project.solution);
  document.querySelector("#dialog-outcome").textContent = getCopy(project.outcome);
  document.querySelector("#dialog-architecture").innerHTML = getCopy(project.architecture).map((item, itemIndex) => `${itemIndex ? "<i>→</i>" : ""}<b>${item}</b>`).join("");
  document.querySelector("#dialog-tags").innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join("");
  if (!projectDialog.open) projectDialog.showModal();
  document.body.classList.add("dialog-open");
  playTone(440, .04);
}

function closeProject() {
  if (projectDialog.open) projectDialog.close();
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getNested(TRANSLATIONS[currentLanguage], element.dataset.i18n);
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = getNested(TRANSLATIONS[currentLanguage], element.dataset.i18nHtml);
    if (value) element.innerHTML = value;
  });
  document.documentElement.lang = currentLanguage === "pt" ? "pt-BR" : "en";
  const langToggle = document.querySelector("#lang-toggle");
  langToggle.querySelector("span").textContent = currentLanguage.toUpperCase();
  langToggle.querySelector("small").textContent = currentLanguage === "pt" ? "EN" : "PT";
  langToggle.setAttribute("aria-label", currentLanguage === "pt" ? "Mudar idioma para inglês" : "Switch language to Portuguese");
  document.querySelector("#ai-input").placeholder = UI[currentLanguage].askPlaceholder;
  document.querySelector("#command-input").placeholder = UI[currentLanguage].commandPlaceholder;
  document.querySelector("#repo-search").placeholder = UI[currentLanguage].repoSearchPlaceholder;
  document.querySelector("#project-filters").setAttribute("aria-label", UI[currentLanguage].filterLabel);
  document.querySelector("#repo-filters").setAttribute("aria-label", UI[currentLanguage].repoFilterLabel);
  document.title = currentLanguage === "pt" ? "Weslley Neri | Sistemas, IA & Liderança Técnica" : "Weslley Neri | Systems, AI & Technical Leadership";
  renderProjects();
  renderRepositories();
  updateSoundUI();
  renderSuggestions();
  resetAssistant();
  renderCommands();
  if (activeProjectIndex !== null && projectDialog.open) openProject(activeProjectIndex);
}

function attachTilt(elements) {
  if (reduceMotion || coarsePointer) return;
  elements.forEach((card) => {
    if (card.dataset.tiltReady) return;
    card.dataset.tiltReady = "true";
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      card.style.setProperty("--rx", `${(0.5 - y) * 7}deg`);
      card.style.setProperty("--ry", `${(x - 0.5) * 9}deg`);
      card.style.setProperty("--mx", `${x * 100}%`);
      card.style.setProperty("--my", `${y * 100}%`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  });
}

function setupBoot() {
  const boot = document.querySelector("#boot-screen");
  const progress = document.querySelector("#boot-progress");
  const status = document.querySelector("#boot-status");
  const actions = document.querySelector("#boot-actions");
  const soundCopy = document.querySelector("#boot-sound-copy");
  const gatedContent = [header, document.querySelector("#conteudo"), document.querySelector(".ai-launcher"), document.querySelector("#ai-panel")];
  document.body.classList.add("booting");
  gatedContent.forEach((element) => { if (element) element.inert = true; });
  let value = sessionStorage.getItem("wn-intro-seen") ? 88 : 0;
  let entering = false;
  const step = sessionStorage.getItem("wn-intro-seen") ? 8 : 3;
  const delay = reduceMotion ? 5 : 42;
  const revealChoice = () => {
    value = 100;
    progress.style.width = "100%";
    status.textContent = "SYSTEM READY // ESCOLHA A EXPERIÊNCIA";
    actions.hidden = false;
    soundCopy.hidden = false;
    window.setTimeout(() => document.querySelector("#enter-with-sound").focus(), reduceMotion ? 10 : 180);
  };
  const enter = async (withSound) => {
    if (entering) return;
    entering = true;
    actions.querySelectorAll("button").forEach((button) => { button.disabled = true; });
    status.textContent = withSound ? "ATIVANDO AMBIENTAÇÃO SYNTH" : "INICIANDO EM MODO SILENCIOSO";
    const started = withSound ? await startAmbient() : false;
    if (!withSound) stopAmbient();
    status.textContent = withSound ? (started ? "SOM ATIVO // ENTRANDO" : "ÁUDIO BLOQUEADO // USE O CONTROLE NO TOPO") : "MODO SILENCIOSO // ENTRANDO";
    sessionStorage.setItem("wn-intro-seen", "true");
    window.setTimeout(() => {
      boot.classList.add("is-complete");
      document.body.classList.remove("booting");
      gatedContent.forEach((element) => { if (element) element.inert = false; });
      document.querySelector("#conteudo").focus({ preventScroll: true });
    }, reduceMotion ? 10 : withSound ? 520 : 260);
  };
  const timer = window.setInterval(() => {
    value = Math.min(100, value + step + Math.random() * 5);
    progress.style.width = `${value}%`;
    if (value > 33) status.textContent = "CARREGANDO PROJETOS";
    if (value > 67) status.textContent = "CONECTANDO INTERAÇÕES";
    if (value >= 100) { window.clearInterval(timer); revealChoice(); }
  }, delay);
  document.querySelector("#enter-with-sound").addEventListener("click", () => enter(true));
  document.querySelector("#enter-without-sound").addEventListener("click", () => enter(false));
  boot.addEventListener("keydown", (event) => {
    if (actions.hidden) return;
    const buttons = [...actions.querySelectorAll("button:not(:disabled)")];
    if (event.key === "Escape") { event.preventDefault(); enter(false); return; }
    if (event.key !== "Tab" || buttons.length < 2) return;
    const first = buttons[0];
    const last = buttons[buttons.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
}

function setupCanvas() {
  if (reduceMotion || navigator.connection?.saveData) return;
  const canvas = document.querySelector("#neural-canvas");
  const context = canvas.getContext("2d");
  let points = [];
  let width = 0;
  let height = 0;
  let animationFrame = 0;
  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    const total = coarsePointer || width < 700 ? 16 : 46;
    points = Array.from({ length: total }, () => ({ x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - .5) * .16, vy: (Math.random() - .5) * .16 }));
  };
  const draw = () => {
    context.clearRect(0, 0, width, height);
    points.forEach((point, index) => {
      point.x += point.vx;
      point.y += point.vy;
      if (point.x < 0 || point.x > width) point.vx *= -1;
      if (point.y < 0 || point.y > height) point.vy *= -1;
      context.fillStyle = "rgba(103,237,246,.32)";
      context.fillRect(point.x, point.y, 1, 1);
      for (let next = index + 1; next < points.length; next += 1) {
        const target = points[next];
        const distance = Math.hypot(point.x - target.x, point.y - target.y);
        if (distance < 135) {
          context.strokeStyle = `rgba(103,237,246,${(1 - distance / 135) * .075})`;
          context.beginPath(); context.moveTo(point.x, point.y); context.lineTo(target.x, target.y); context.stroke();
        }
      }
    });
    animationFrame = requestAnimationFrame(draw);
  };
  resize(); draw();
  window.addEventListener("resize", resize, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(animationFrame); else draw();
  });
}

function createAmbientEngine() {
  if (ambientMaster) return true;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return false;
  audioContext ||= new AudioContextClass();

  ambientMaster = audioContext.createGain();
  ambientMaster.gain.value = 0.0001;
  ambientMaster.connect(audioContext.destination);

  const filter = audioContext.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 760;
  filter.Q.value = 0.7;
  filter.connect(ambientMaster);

  const chord = [110, 130.81, 164.81];
  chord.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = index === 1 ? "triangle" : "sine";
    oscillator.frequency.value = frequency;
    oscillator.detune.value = index === 0 ? -5 : index === 2 ? 5 : 0;
    gain.gain.value = index === 1 ? 0.11 : 0.16;
    oscillator.connect(gain); gain.connect(filter); oscillator.start();
    ambientNodes.push(oscillator, gain);
  });

  const filterLfo = audioContext.createOscillator();
  const filterLfoGain = audioContext.createGain();
  filterLfo.type = "sine";
  filterLfo.frequency.value = 0.055;
  filterLfoGain.gain.value = 210;
  filterLfo.connect(filterLfoGain); filterLfoGain.connect(filter.frequency); filterLfo.start();

  const noiseBuffer = audioContext.createBuffer(1, audioContext.sampleRate * 2, audioContext.sampleRate);
  const noiseData = noiseBuffer.getChannelData(0);
  for (let index = 0; index < noiseData.length; index += 1) noiseData[index] = Math.random() * 2 - 1;
  const noise = audioContext.createBufferSource();
  const noiseFilter = audioContext.createBiquadFilter();
  const noiseGain = audioContext.createGain();
  noise.buffer = noiseBuffer; noise.loop = true;
  noiseFilter.type = "bandpass"; noiseFilter.frequency.value = 1250; noiseFilter.Q.value = 0.45;
  noiseGain.gain.value = 0.012;
  noise.connect(noiseFilter); noiseFilter.connect(noiseGain); noiseGain.connect(ambientMaster); noise.start();
  ambientNodes.push(filter, filterLfo, filterLfoGain, noise, noiseFilter, noiseGain);
  return true;
}

function playAmbientNote() {
  if (!soundEnabled || !audioContext || audioContext.state !== "running") return;
  const notes = [220, 261.63, 329.63, 293.66, 246.94];
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = notes[ambientStep % notes.length];
  ambientStep += 1;
  gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.045, audioContext.currentTime + 0.5);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 3.4);
  oscillator.connect(gain); gain.connect(ambientMaster);
  oscillator.start(); oscillator.stop(audioContext.currentTime + 3.5);
}

function updateSoundUI() {
  const button = document.querySelector("#sound-toggle");
  if (!button) return;
  button.setAttribute("aria-pressed", String(soundEnabled));
  button.querySelector(".sound-icon").textContent = soundEnabled ? "◉" : "◌";
  button.querySelector("small").textContent = soundEnabled ? "ON" : "SOM";
  button.setAttribute("aria-label", soundEnabled ? UI[currentLanguage].soundOn : UI[currentLanguage].soundOff);
  root.classList.toggle("sound-on", soundEnabled);
}

function announceSound(message) {
  if (!soundToast) return;
  window.clearTimeout(soundToastTimer);
  soundToast.textContent = message;
  soundToast.classList.add("is-visible");
  soundToastTimer = window.setTimeout(() => soundToast.classList.remove("is-visible"), 3400);
}

async function startAmbient() {
  let mediaPromise = Promise.reject(new Error("Audio element unavailable"));
  if (ambientAudio) {
    ambientAudio.volume = 0.48;
    ambientAudio.muted = false;
    try { mediaPromise = Promise.resolve(ambientAudio.play()); } catch (error) { mediaPromise = Promise.reject(error); }
  }

  let contextPromise = Promise.reject(new Error("Web Audio unavailable"));
  try {
    if (createAmbientEngine()) contextPromise = audioContext.resume();
  } catch (error) {
    contextPromise = Promise.reject(error);
  }

  const [mediaResult, contextResult] = await Promise.allSettled([mediaPromise, contextPromise]);
  const mediaStarted = mediaResult.status === "fulfilled" && ambientAudio && !ambientAudio.paused;
  const contextStarted = contextResult.status === "fulfilled" && audioContext?.state === "running";
  soundEnabled = Boolean(mediaStarted || contextStarted);

  if (contextStarted) {
    const now = audioContext.currentTime;
    ambientMaster.gain.cancelScheduledValues(now);
    ambientMaster.gain.setValueAtTime(Math.max(ambientMaster.gain.value, 0.0001), now);
    ambientMaster.gain.exponentialRampToValueAtTime(mediaStarted ? 0.0001 : 0.11, now + (mediaStarted ? 0.3 : 1.2));
    if (!mediaStarted && !ambientSequenceTimer) {
      playAmbientNote();
      ambientSequenceTimer = window.setInterval(playAmbientNote, 4600);
    }
  }

  updateSoundUI();
  announceSound(soundEnabled ? UI[currentLanguage].soundActive : UI[currentLanguage].soundBlocked);
  return soundEnabled;
}

function stopAmbient(showStatus = false) {
  soundEnabled = false;
  if (ambientAudio) ambientAudio.pause();
  if (ambientSequenceTimer) {
    window.clearInterval(ambientSequenceTimer);
    ambientSequenceTimer = null;
  }
  if (audioContext && ambientMaster) {
    const now = audioContext.currentTime;
    ambientMaster.gain.cancelScheduledValues(now);
    ambientMaster.gain.setValueAtTime(Math.max(ambientMaster.gain.value, 0.0001), now);
    ambientMaster.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
  }
  updateSoundUI();
  if (showStatus) announceSound(UI[currentLanguage].soundInactive);
}

function playTone(frequency = 360, duration = 0.035) {
  if (!soundEnabled || !audioContext || audioContext.state !== "running") return;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0.012, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);
  oscillator.connect(gain); gain.connect(audioContext.destination);
  oscillator.start(); oscillator.stop(audioContext.currentTime + duration);
}

function setupSound() {
  const button = document.querySelector("#sound-toggle");
  updateSoundUI();
  button.addEventListener("click", async () => {
    if (soundEnabled) stopAmbient(true);
    else {
      await startAmbient();
      playTone(520, 0.08);
    }
  });
  document.addEventListener("click", (event) => {
    if (soundEnabled && event.target.closest("a, button") && !event.target.closest("#sound-toggle, #boot-screen")) playTone(330, 0.025);
  });
  document.addEventListener("visibilitychange", () => {
    if (!audioContext || !soundEnabled) return;
    if (document.hidden) audioContext.suspend().catch(() => {});
    else audioContext.resume().catch(() => {});
  });
}

function addAiMessage(text, sender) {
  const message = document.createElement("div");
  message.className = `ai-message ${sender}`;
  message.textContent = text;
  document.querySelector("#ai-messages").appendChild(message);
  message.scrollIntoView({ block: "end", behavior: reduceMotion ? "auto" : "smooth" });
}

function getAiAnswer(question) {
  const normalized = question.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const answers = UI[currentLanguage].answers;
  if (/\b(ia|ai|intelig|llm|agent|gpt|copilot)\b/.test(normalized)) return answers.ai;
  if (/lider|lead|time|team|senior|codigo|code|arquitet/.test(normalized)) return answers.leadership;
  if (/stack|tech|tecnolog|react|python|java|power bi|databricks|sql/.test(normalized)) return answers.stack;
  if (/field|campo|tecnico|technician|rota|route/.test(normalized)) return answers.field;
  if (/repositorio|repository|github|codigo aberto|open source/.test(normalized)) return answers.repositories;
  if (/projet|project|case|portfolio/.test(normalized)) return answers.projects;
  if (/contato|contact|falar|hire|contratar|linkedin|github/.test(normalized)) return answers.contact;
  return answers.fallback;
}

function askAssistant(question) {
  const clean = question.trim();
  if (!clean) return;
  addAiMessage(clean, "user");
  const typing = document.createElement("div");
  typing.className = "ai-message bot ai-typing";
  typing.innerHTML = "<i></i><i></i><i></i>";
  document.querySelector("#ai-messages").appendChild(typing);
  typing.scrollIntoView({ block: "end", behavior: "smooth" });
  window.setTimeout(() => { typing.remove(); addAiMessage(getAiAnswer(clean), "bot"); playTone(610, .06); }, reduceMotion ? 20 : 480);
}

function renderSuggestions() {
  document.querySelector("#ai-suggestions").innerHTML = UI[currentLanguage].suggestions.map((text) => `<button type="button">${text}</button>`).join("");
  document.querySelectorAll("#ai-suggestions button").forEach((button) => button.addEventListener("click", () => askAssistant(button.textContent)));
}

function resetAssistant() {
  const messages = document.querySelector("#ai-messages");
  messages.innerHTML = "";
  addAiMessage(UI[currentLanguage].aiIntro, "bot");
}

function setupAssistant() {
  const panel = document.querySelector("#ai-panel");
  const input = document.querySelector("#ai-input");
  const open = () => { panel.classList.add("is-open"); panel.setAttribute("aria-hidden", "false"); document.querySelector(".ai-launcher").style.visibility = "hidden"; window.setTimeout(() => input.focus(), 120); };
  const close = () => { panel.classList.remove("is-open"); panel.setAttribute("aria-hidden", "true"); document.querySelector(".ai-launcher").style.visibility = "visible"; };
  document.querySelectorAll(".ai-open-trigger").forEach((button) => button.addEventListener("click", open));
  document.querySelector("#ai-close").addEventListener("click", close);
  document.querySelector("#ai-form").addEventListener("submit", (event) => { event.preventDefault(); askAssistant(input.value); input.value = ""; });
  renderSuggestions(); resetAssistant();
}

function commandItems() {
  const sectionNames = currentLanguage === "pt"
    ? [["inicio", "Início"], ["projetos", "Projetos"], ["github-lab", "GitHub Lab"], ["impacto", "Mapa de impacto"], ["sobre", "Sobre mim"], ["jornada", "Jornada profissional"], ["curriculo", "Currículo"], ["contato", "Contato"]]
    : [["inicio", "Home"], ["projetos", "Projects"], ["github-lab", "GitHub Lab"], ["impacto", "Impact map"], ["sobre", "About me"], ["jornada", "Professional journey"], ["curriculo", "Résumé"], ["contato", "Contact"]];
  return [
    ...sectionNames.map(([id, label]) => ({ type: "section", id, label })),
    ...PROJECTS.map((project, index) => ({ type: "project", id: index, label: project.title })),
    ...GITHUB_REPOS.map((repo, index) => ({ type: "repository", id: index, label: `${getCopy(repo.title)} · ${repo.name}` })),
  ];
}

let selectedCommand = 0;
function renderCommands(query = "") {
  const normalized = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const items = commandItems().filter((item) => item.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(normalized));
  selectedCommand = Math.min(selectedCommand, Math.max(items.length - 1, 0));
  const list = document.querySelector("#command-list");
  list.innerHTML = items.map((item, index) => {
    const icon = item.type === "section" ? "§" : item.type === "repository" ? "⌘" : "◇";
    const typeLabel = item.type === "section" ? UI[currentLanguage].commandSection : item.type === "repository" ? UI[currentLanguage].commandRepository : UI[currentLanguage].commandProject;
    return `<button class="command-item ${index === selectedCommand ? "is-selected" : ""}" type="button" data-command-type="${item.type}" data-command-id="${item.id}"><span>${icon}</span><strong>${item.label}</strong><small>${typeLabel}</small></button>`;
  }).join("");
  list.querySelectorAll(".command-item").forEach((button) => button.addEventListener("click", () => executeCommand(button)));
  return items;
}

function executeCommand(button) {
  commandDialog.close();
  if (button.dataset.commandType === "project") openProject(Number(button.dataset.commandId));
  else if (button.dataset.commandType === "repository") {
    selectRepository(Number(button.dataset.commandId));
    document.querySelector("#github-lab")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  }
  else document.getElementById(button.dataset.commandId)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
}

function openCommands() {
  if (!commandDialog.open) commandDialog.showModal();
  selectedCommand = 0;
  const input = document.querySelector("#command-input");
  input.value = "";
  renderCommands();
  window.setTimeout(() => input.focus(), 60);
}

function setupCommands() {
  const input = document.querySelector("#command-input");
  document.querySelectorAll(".command-trigger").forEach((button) => button.addEventListener("click", openCommands));
  document.addEventListener("keydown", (event) => {
    const typing = ["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName);
    if ((event.key === "k" && (event.ctrlKey || event.metaKey)) || (event.key === "/" && !typing)) { event.preventDefault(); openCommands(); }
  });
  input.addEventListener("input", () => { selectedCommand = 0; renderCommands(input.value); });
  input.addEventListener("keydown", (event) => {
    const items = renderCommands(input.value);
    if (event.key === "ArrowDown") { event.preventDefault(); selectedCommand = Math.min(selectedCommand + 1, items.length - 1); renderCommands(input.value); }
    if (event.key === "ArrowUp") { event.preventDefault(); selectedCommand = Math.max(selectedCommand - 1, 0); renderCommands(input.value); }
    if (event.key === "Enter") { event.preventDefault(); const selected = document.querySelector(".command-item.is-selected"); if (selected) executeCommand(selected); }
  });
  commandDialog.addEventListener("click", (event) => { if (event.target === commandDialog) commandDialog.close(); });
}

function setupFilters() {
  document.querySelectorAll("#project-filters button").forEach((button) => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.filter;
      document.querySelectorAll("#project-filters button").forEach((item) => item.classList.toggle("is-active", item === button));
      renderProjects();
    });
  });
}

function setupRepositoryExplorer() {
  const search = document.querySelector("#repo-search");
  search.addEventListener("input", () => {
    repoQuery = search.value.trim();
    renderRepositories();
  });
  document.querySelectorAll("#repo-filters button").forEach((button) => {
    button.addEventListener("click", () => {
      currentRepoFilter = button.dataset.repoFilter;
      document.querySelectorAll("#repo-filters button").forEach((item) => item.classList.toggle("is-active", item === button));
      renderRepositories();
    });
  });
}

function setupNavigation() {
  const nav = document.querySelector("#main-nav");
  const toggle = document.querySelector("#menu-toggle");
  toggle.addEventListener("click", () => {
    const open = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open); toggle.classList.toggle("is-open", open); toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => { nav.classList.remove("is-open"); toggle.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); }));
  let frame = 0;
  const updateScroll = () => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll", `${max > 0 ? (window.scrollY / max) * 100 : 0}%`);
      header.classList.toggle("is-scrolled", window.scrollY > 20);
      frame = 0;
    });
  };
  window.addEventListener("scroll", updateScroll, { passive: true }); updateScroll();
}

function setupReveals() {
  if (reduceMotion || !("IntersectionObserver" in window)) { document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible")); return; }
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: .09 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupPointer() {
  if (reduceMotion) return;
  window.addEventListener("pointermove", (event) => { root.style.setProperty("--pointer-x", `${event.clientX}px`); root.style.setProperty("--pointer-y", `${event.clientY}px`); }, { passive: true });
}

function setupDialogs() {
  document.querySelector("#dialog-close").addEventListener("click", closeProject);
  projectDialog.addEventListener("close", () => { document.body.classList.remove("dialog-open"); activeProjectIndex = null; });
  projectDialog.addEventListener("click", (event) => { if (event.target === projectDialog) closeProject(); });
}

function init() {
  setupBoot();
  renderProjects();
  renderRepositories();
  setupFilters();
  setupRepositoryExplorer();
  setupDialogs();
  setupNavigation();
  setupReveals();
  setupPointer();
  setupCanvas();
  setupSound();
  setupAssistant();
  setupCommands();
  attachTilt(document.querySelectorAll(".identity-card, .impact-main"));
  document.querySelector("#lang-toggle").addEventListener("click", () => { currentLanguage = currentLanguage === "pt" ? "en" : "pt"; applyTranslations(); });
}

init();
