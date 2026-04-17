export type CourseLevel = "licenciatura" | "tecnologo" | "pos-graduacao";
export type CourseArea =
  | "agronegocio"
  | "comunicacao"
  | "juridico"
  | "educacao"
  | "engenharia"
  | "financas"
  | "negocios"
  | "gestao-publica"
  | "saude"
  | "tecnologia";
export type CourseType = "Licenciatura" | "Tecnólogo" | "Pós-graduação";

export interface Course {
  name: string;
  level: CourseLevel;
  area: CourseArea;
  type: CourseType;
  duration?: string;
  isFeatured?: boolean;
  featuredRank?: number;
  featuredNote?: string;
}

export const courses: Course[] = [
  // ── LICENCIATURA ─────────────────────────────────────────────────────────

  // Educação e Humanidades
  { name: "Andragogia", level: "licenciatura", area: "educacao", type: "Licenciatura" },
  { name: "Artes", level: "licenciatura", area: "educacao", type: "Licenciatura" },
  { name: "Artes Visuais", level: "licenciatura", area: "educacao", type: "Licenciatura" },
  { name: "Ciências da Religião", level: "licenciatura", area: "educacao", type: "Licenciatura" },
  { name: "Ciências Sociais", level: "licenciatura", area: "educacao", type: "Licenciatura" },
  { name: "Educação Especial", level: "licenciatura", area: "educacao", type: "Licenciatura" },
  { name: "Filosofia", level: "licenciatura", area: "educacao", type: "Licenciatura" },
  { name: "Geografia", level: "licenciatura", area: "educacao", type: "Licenciatura" },
  { name: "História", level: "licenciatura", area: "educacao", type: "Licenciatura" },
  { name: "Letras – Português / LIBRAS", level: "licenciatura", area: "educacao", type: "Licenciatura" },
  { name: "Letras – Espanhol", level: "licenciatura", area: "educacao", type: "Licenciatura" },
  { name: "Letras – Francês", level: "licenciatura", area: "educacao", type: "Licenciatura" },
  { name: "Letras – Inglês", level: "licenciatura", area: "educacao", type: "Licenciatura" },
  { name: "Letras – Italiano", level: "licenciatura", area: "educacao", type: "Licenciatura" },
  { name: "Matemática", level: "licenciatura", area: "educacao", type: "Licenciatura" },
  { name: "Pedagogia", level: "licenciatura", area: "educacao", type: "Licenciatura" },
  { name: "Psicopedagogia", level: "licenciatura", area: "educacao", type: "Licenciatura" },
  { name: "Sociologia", level: "licenciatura", area: "educacao", type: "Licenciatura" },
  { name: "Teatro", level: "licenciatura", area: "educacao", type: "Licenciatura" },

  // Saúde
  { name: "Ciências Biológicas", level: "licenciatura", area: "saude", type: "Licenciatura" },
  { name: "Educação Física", level: "licenciatura", area: "saude", type: "Licenciatura" },

  // Tecnologia
  { name: "Computação e Informática", level: "licenciatura", area: "tecnologia", type: "Licenciatura" },

  // ── TECNÓLOGO ─────────────────────────────────────────────────────────────

  // Agronegócio
  { name: "Gestão do Agronegócio", level: "tecnologo", area: "agronegocio", type: "Tecnólogo" },

  // Comunicação, Design e Marketing
  { name: "Design de Animação", level: "tecnologo", area: "comunicacao", type: "Tecnólogo" },
  { name: "Design de Interiores", level: "tecnologo", area: "comunicacao", type: "Tecnólogo" },
  { name: "Design de Produto", level: "tecnologo", area: "comunicacao", type: "Tecnólogo" },
  { name: "Design Gráfico", level: "tecnologo", area: "comunicacao", type: "Tecnólogo" },
  { name: "Marketing", level: "tecnologo", area: "comunicacao", type: "Tecnólogo", isFeatured: true, featuredRank: 5 },
  { name: "Marketing Digital", level: "tecnologo", area: "comunicacao", type: "Tecnólogo" },
  { name: "Mídias Sociais Digitais", level: "tecnologo", area: "comunicacao", type: "Tecnólogo" },
  { name: "Produção Audiovisual", level: "tecnologo", area: "comunicacao", type: "Tecnólogo" },
  { name: "Produção de Conteúdos Digitais", level: "tecnologo", area: "comunicacao", type: "Tecnólogo" },

  // Direito, Segurança e Serviços Jurídicos
  { name: "Criminologia", level: "tecnologo", area: "juridico", type: "Tecnólogo" },
  { name: "Gestão da Atividade Policial", level: "tecnologo", area: "juridico", type: "Tecnólogo" },
  { name: "Gestão de Segurança Privada", level: "tecnologo", area: "juridico", type: "Tecnólogo", isFeatured: true, featuredRank: 2 },
  { name: "Investigação e Perícia Judicial", level: "tecnologo", area: "juridico", type: "Tecnólogo" },
  { name: "Mediação, Conciliação e Arbitragem", level: "tecnologo", area: "juridico", type: "Tecnólogo" },
  { name: "Perícia Judicial e Extrajudicial", level: "tecnologo", area: "juridico", type: "Tecnólogo" },
  { name: "Segurança no Trânsito", level: "tecnologo", area: "juridico", type: "Tecnólogo" },
  { name: "Segurança Pública", level: "tecnologo", area: "juridico", type: "Tecnólogo" },
  { name: "Serviços Jurídicos", level: "tecnologo", area: "juridico", type: "Tecnólogo", isFeatured: true, featuredRank: 1, featuredNote: "Mais indicado para concursos" },
  { name: "Serviços Jurídicos e Notariais", level: "tecnologo", area: "juridico", type: "Tecnólogo" },
  { name: "Serviços Penais", level: "tecnologo", area: "juridico", type: "Tecnólogo" },
  { name: "Serviços Previdenciários", level: "tecnologo", area: "juridico", type: "Tecnólogo" },

  // Educação e Humanidades
  { name: "Coaching e Desenvolvimento Humano", level: "tecnologo", area: "educacao", type: "Tecnólogo" },
  { name: "Desenvolvimento Comunitário", level: "tecnologo", area: "educacao", type: "Tecnólogo" },
  { name: "Empreendedorismo Educacional", level: "tecnologo", area: "educacao", type: "Tecnólogo" },
  { name: "Ministério Pastoral", level: "tecnologo", area: "educacao", type: "Tecnólogo" },
  { name: "Tradutor e Intérprete – Português-Francês", level: "tecnologo", area: "educacao", type: "Tecnólogo" },

  // Engenharia e Produção
  { name: "Gestão da Produção Industrial", level: "tecnologo", area: "engenharia", type: "Tecnólogo" },

  // Finanças e Contabilidade
  { name: "Gestão de Investimentos", level: "tecnologo", area: "financas", type: "Tecnólogo" },
  { name: "Gestão Financeira", level: "tecnologo", area: "financas", type: "Tecnólogo" },

  // Gestão, Negócios e Logística
  { name: "Comércio Exterior", level: "tecnologo", area: "negocios", type: "Tecnólogo" },
  { name: "Gestão Comercial", level: "tecnologo", area: "negocios", type: "Tecnólogo" },
  { name: "Gestão de Cooperativas", level: "tecnologo", area: "negocios", type: "Tecnólogo" },
  { name: "Gestão de Lojas e Pontos de Vendas", level: "tecnologo", area: "negocios", type: "Tecnólogo" },
  { name: "Gestão de Negócios Imobiliários", level: "tecnologo", area: "negocios", type: "Tecnólogo" },
  { name: "Gestão de Recursos Humanos", level: "tecnologo", area: "negocios", type: "Tecnólogo", isFeatured: true, featuredRank: 3 },
  { name: "Gestão de Turismo", level: "tecnologo", area: "negocios", type: "Tecnólogo" },
  { name: "Gestão de Varejo", level: "tecnologo", area: "negocios", type: "Tecnólogo" },
  { name: "Logística", level: "tecnologo", area: "negocios", type: "Tecnólogo", isFeatured: true, featuredRank: 4 },
  { name: "Processos Gerenciais", level: "tecnologo", area: "negocios", type: "Tecnólogo" },
  { name: "Recrutamento, Seleção e Desenvolvimento de Pessoas", level: "tecnologo", area: "negocios", type: "Tecnólogo" },
  { name: "Secretariado", level: "tecnologo", area: "negocios", type: "Tecnólogo" },

  // Gestão Pública
  { name: "Gestão Pública", level: "tecnologo", area: "gestao-publica", type: "Tecnólogo" },

  // Saúde e Bem-Estar
  { name: "Atividades de Academia", level: "tecnologo", area: "saude", type: "Tecnólogo" },
  { name: "Embelezamento e Imagem Pessoal", level: "tecnologo", area: "saude", type: "Tecnólogo" },
  { name: "Gastronomia", level: "tecnologo", area: "saude", type: "Tecnólogo" },
  { name: "Gerência em Saúde", level: "tecnologo", area: "saude", type: "Tecnólogo" },
  { name: "Gestão de Clínicas e Consultórios", level: "tecnologo", area: "saude", type: "Tecnólogo" },
  { name: "Gestão de Registros e Informações em Saúde", level: "tecnologo", area: "saude", type: "Tecnólogo" },
  { name: "Gestão do Esporte", level: "tecnologo", area: "saude", type: "Tecnólogo" },
  { name: "Gestão em Farmácia", level: "tecnologo", area: "saude", type: "Tecnólogo" },

  // Tecnologia e Dados
  { name: "Análise e Desenvolvimento de Sistemas", level: "tecnologo", area: "tecnologia", type: "Tecnólogo" },
  { name: "Banco de Dados", level: "tecnologo", area: "tecnologia", type: "Tecnólogo" },
  { name: "Big Data e Inteligência Analítica", level: "tecnologo", area: "tecnologia", type: "Tecnólogo" },
  { name: "Gestão da Tecnologia da Informação", level: "tecnologo", area: "tecnologia", type: "Tecnólogo" },
  { name: "Inteligência Artificial", level: "tecnologo", area: "tecnologia", type: "Tecnólogo" },
  { name: "Internet das Coisas", level: "tecnologo", area: "tecnologia", type: "Tecnólogo" },
  { name: "Jogos Digitais", level: "tecnologo", area: "tecnologia", type: "Tecnólogo" },
  { name: "Redes de Computadores", level: "tecnologo", area: "tecnologia", type: "Tecnólogo" },
  { name: "Segurança da Informação", level: "tecnologo", area: "tecnologia", type: "Tecnólogo" },
  { name: "Sistemas para Internet", level: "tecnologo", area: "tecnologia", type: "Tecnólogo" },
  { name: "Transformação Digital", level: "tecnologo", area: "tecnologia", type: "Tecnólogo" },

  // ── PÓS-GRADUAÇÃO ─────────────────────────────────────────────────────────

  // Agronegócio
  { name: "Agronegócio", level: "pos-graduacao", area: "agronegocio", type: "Pós-graduação" },
  { name: "Administração e Agronegócio", level: "pos-graduacao", area: "agronegocio", type: "Pós-graduação" },
  { name: "Agricultura e Agronegócio", level: "pos-graduacao", area: "agronegocio", type: "Pós-graduação" },
  { name: "Agricultura e Sustentabilidade", level: "pos-graduacao", area: "agronegocio", type: "Pós-graduação" },
  { name: "Agrometeorologia e Climatologia", level: "pos-graduacao", area: "agronegocio", type: "Pós-graduação" },
  { name: "Certificação Ambiental e Consultoria", level: "pos-graduacao", area: "agronegocio", type: "Pós-graduação" },
  { name: "Direito Aplicado ao Agronegócio", level: "pos-graduacao", area: "agronegocio", type: "Pós-graduação" },
  { name: "Fertilidade, Manejo de Solos e Nutrição de Plantas", level: "pos-graduacao", area: "agronegocio", type: "Pós-graduação" },
  { name: "Gestão Ambiental e Sustentabilidade", level: "pos-graduacao", area: "agronegocio", type: "Pós-graduação" },
  { name: "Gestão e Economia do Agronegócio", level: "pos-graduacao", area: "agronegocio", type: "Pós-graduação" },
  { name: "Recuperação Ambiental de Áreas Degradadas e Contaminadas", level: "pos-graduacao", area: "agronegocio", type: "Pós-graduação" },
  { name: "Sustentabilidade e Meio Ambiente", level: "pos-graduacao", area: "agronegocio", type: "Pós-graduação" },

  // Comunicação, Design e Marketing
  { name: "Branding e Relações Públicas", level: "pos-graduacao", area: "comunicacao", type: "Pós-graduação" },
  { name: "Comunicação e Multimeios", level: "pos-graduacao", area: "comunicacao", type: "Pós-graduação" },
  { name: "Design Thinking, Criatividade e Inovação", level: "pos-graduacao", area: "comunicacao", type: "Pós-graduação" },
  { name: "Gestão da Comunicação e Mídias Digitais", level: "pos-graduacao", area: "comunicacao", type: "Pós-graduação" },
  { name: "Gestão da Comunicação Organizacional e Jornalismo", level: "pos-graduacao", area: "comunicacao", type: "Pós-graduação" },
  { name: "Gestão de Marketing e E-Commerce", level: "pos-graduacao", area: "comunicacao", type: "Pós-graduação" },
  { name: "Marketing Digital", level: "pos-graduacao", area: "comunicacao", type: "Pós-graduação" },
  { name: "MBA em Comunicação Corporativa", level: "pos-graduacao", area: "comunicacao", type: "Pós-graduação" },
  { name: "MBA em Marketing e Vendas", level: "pos-graduacao", area: "comunicacao", type: "Pós-graduação" },

  // Direito, Segurança e Serviços Jurídicos
  { name: "Advocacia no Direito Privado", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Arbitragem, Conciliação e Mediação", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direito Administrativo", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direito Administrativo e Gestão de Pessoas no Setor Público", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direito Administrativo e Gestão Orçamentária e Financeira no Setor Público", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direito Administrativo e Gestão Pública", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direito Aduaneiro", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direito Ambiental", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direito Constitucional", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direito da Criança e do Adolescente", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direito das Famílias e Sucessões", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direito do Consumidor", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direito do Trabalho", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direito e Serviço Social no Judiciário", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direito Eleitoral, Governança e Marketing Político", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direito Empresarial", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direito Financeiro", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direito Médico e Hospitalar", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direito Notarial e Registral", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direito Penal e Processual Penal", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direito Previdenciário e Saúde do Trabalhador", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direito Previdenciário RGPS: A Nova Previdência", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direito Processual Civil", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direito Público", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direito Tributário", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Direitos Humanos", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Docência em Direito Civil", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Docência em Direito Penal", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Investigação Criminal e Psicologia Forense", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Licitações e Contratos – Lei 14.133/2021", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Perícia Criminal", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Psicologia Jurídica", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },
  { name: "Segurança Pública", level: "pos-graduacao", area: "juridico", type: "Pós-graduação" },

  // Educação e Humanidades (representa portfólio de +100 especializações)
  { name: "Alfabetização e Letramento", level: "pos-graduacao", area: "educacao", type: "Pós-graduação" },
  { name: "Andragogia e Educação de Adultos", level: "pos-graduacao", area: "educacao", type: "Pós-graduação" },
  { name: "Arte-Educação", level: "pos-graduacao", area: "educacao", type: "Pós-graduação" },
  { name: "Atendimento Educacional Especializado (AEE)", level: "pos-graduacao", area: "educacao", type: "Pós-graduação" },
  { name: "Coordenação Pedagógica", level: "pos-graduacao", area: "educacao", type: "Pós-graduação" },
  { name: "Docência no Ensino Superior", level: "pos-graduacao", area: "educacao", type: "Pós-graduação" },
  { name: "Educação Ambiental", level: "pos-graduacao", area: "educacao", type: "Pós-graduação" },
  { name: "Educação de Jovens e Adultos (EJA)", level: "pos-graduacao", area: "educacao", type: "Pós-graduação" },
  { name: "Educação Especial e Inclusiva", level: "pos-graduacao", area: "educacao", type: "Pós-graduação" },
  { name: "Educação Infantil", level: "pos-graduacao", area: "educacao", type: "Pós-graduação" },
  { name: "Educação Matemática", level: "pos-graduacao", area: "educacao", type: "Pós-graduação" },
  { name: "Gestão Escolar e Coordenação Pedagógica", level: "pos-graduacao", area: "educacao", type: "Pós-graduação" },
  { name: "História e Cultura Afro-Brasileira e Africana", level: "pos-graduacao", area: "educacao", type: "Pós-graduação" },
  { name: "LIBRAS – Língua Brasileira de Sinais", level: "pos-graduacao", area: "educacao", type: "Pós-graduação" },
  { name: "Metodologias Ativas no Ensino", level: "pos-graduacao", area: "educacao", type: "Pós-graduação" },
  { name: "Neurociência Aplicada à Educação", level: "pos-graduacao", area: "educacao", type: "Pós-graduação" },
  { name: "Orientação Educacional e Supervisão Escolar", level: "pos-graduacao", area: "educacao", type: "Pós-graduação" },
  { name: "Psicologia da Educação", level: "pos-graduacao", area: "educacao", type: "Pós-graduação" },
  { name: "Psicopedagogia Institucional e Clínica", level: "pos-graduacao", area: "educacao", type: "Pós-graduação" },
  { name: "TEA – Transtorno do Espectro Autista", level: "pos-graduacao", area: "educacao", type: "Pós-graduação" },
  { name: "Tecnologias Educacionais", level: "pos-graduacao", area: "educacao", type: "Pós-graduação" },

  // Engenharia e Arquitetura
  { name: "Arquitetura de Cidades", level: "pos-graduacao", area: "engenharia", type: "Pós-graduação" },
  { name: "Arquitetura de Interiores", level: "pos-graduacao", area: "engenharia", type: "Pós-graduação" },
  { name: "Arquitetura Paisagística", level: "pos-graduacao", area: "engenharia", type: "Pós-graduação" },
  { name: "Engenharia Ambiental", level: "pos-graduacao", area: "engenharia", type: "Pós-graduação" },
  { name: "Engenharia Civil e Sustentável", level: "pos-graduacao", area: "engenharia", type: "Pós-graduação" },
  { name: "Engenharia de Alimentos", level: "pos-graduacao", area: "engenharia", type: "Pós-graduação" },
  { name: "Engenharia de Estruturas", level: "pos-graduacao", area: "engenharia", type: "Pós-graduação" },
  { name: "Engenharia Elétrica", level: "pos-graduacao", area: "engenharia", type: "Pós-graduação" },
  { name: "Gerenciamento de Projetos para Engenheiros", level: "pos-graduacao", area: "engenharia", type: "Pós-graduação" },
  { name: "Lean Manufacturing", level: "pos-graduacao", area: "engenharia", type: "Pós-graduação" },
  { name: "Segurança do Trabalho", level: "pos-graduacao", area: "engenharia", type: "Pós-graduação" },

  // Finanças e Contabilidade
  { name: "Auditoria e Controladoria", level: "pos-graduacao", area: "financas", type: "Pós-graduação" },
  { name: "Auditoria e Perícia Contábil", level: "pos-graduacao", area: "financas", type: "Pós-graduação" },
  { name: "Contabilidade Tributária", level: "pos-graduacao", area: "financas", type: "Pós-graduação" },
  { name: "MBA em Gestão Financeira e Controladoria", level: "pos-graduacao", area: "financas", type: "Pós-graduação" },
  { name: "MBA Executivo em Gestão de Investimentos", level: "pos-graduacao", area: "financas", type: "Pós-graduação" },

  // Gestão, Negócios e Logística
  { name: "Administração Estratégica", level: "pos-graduacao", area: "negocios", type: "Pós-graduação" },
  { name: "Comércio Exterior", level: "pos-graduacao", area: "negocios", type: "Pós-graduação" },
  { name: "Gestão de Pessoas", level: "pos-graduacao", area: "negocios", type: "Pós-graduação" },
  { name: "Logística e Supply Chain Management", level: "pos-graduacao", area: "negocios", type: "Pós-graduação" },
  { name: "MBA em Gestão Empresarial", level: "pos-graduacao", area: "negocios", type: "Pós-graduação" },

  // Gestão Pública
  { name: "Administração Pública e Gestão de Pessoas", level: "pos-graduacao", area: "gestao-publica", type: "Pós-graduação" },
  { name: "Auditoria e Direito no Setor Público", level: "pos-graduacao", area: "gestao-publica", type: "Pós-graduação" },
  { name: "Contabilidade Pública", level: "pos-graduacao", area: "gestao-publica", type: "Pós-graduação" },
  { name: "Gestão Pública", level: "pos-graduacao", area: "gestao-publica", type: "Pós-graduação" },
  { name: "Governança e Políticas Públicas", level: "pos-graduacao", area: "gestao-publica", type: "Pós-graduação" },

  // Saúde e Bem-Estar
  { name: "ABA Aplicada ao TEA", level: "pos-graduacao", area: "saude", type: "Pós-graduação" },
  { name: "Administração Hospitalar", level: "pos-graduacao", area: "saude", type: "Pós-graduação" },
  { name: "Análises Clínicas e Toxicológicas", level: "pos-graduacao", area: "saude", type: "Pós-graduação" },
  { name: "Enfermagem do Trabalho", level: "pos-graduacao", area: "saude", type: "Pós-graduação" },
  { name: "Enfermagem em Urgência e Emergência", level: "pos-graduacao", area: "saude", type: "Pós-graduação" },
  { name: "Ensino e Treinamento do Futsal", level: "pos-graduacao", area: "saude", type: "Pós-graduação" },
  { name: "Estética e Cosmetologia", level: "pos-graduacao", area: "saude", type: "Pós-graduação" },
  { name: "Fisioterapia Hospitalar", level: "pos-graduacao", area: "saude", type: "Pós-graduação" },
  { name: "Fisioterapia Respiratória", level: "pos-graduacao", area: "saude", type: "Pós-graduação" },
  { name: "Nutrição Clínica", level: "pos-graduacao", area: "saude", type: "Pós-graduação" },
  { name: "Nutrição Esportiva", level: "pos-graduacao", area: "saude", type: "Pós-graduação" },
  { name: "Produção Animal", level: "pos-graduacao", area: "saude", type: "Pós-graduação" },
  { name: "Psicologia Hospitalar", level: "pos-graduacao", area: "saude", type: "Pós-graduação" },
  { name: "Saúde Mental e Intervenções Psicossociais", level: "pos-graduacao", area: "saude", type: "Pós-graduação" },
  { name: "Saúde Pública", level: "pos-graduacao", area: "saude", type: "Pós-graduação" },
  { name: "TEA – Intervenção Precoce", level: "pos-graduacao", area: "saude", type: "Pós-graduação" },
  { name: "Zoonoses", level: "pos-graduacao", area: "saude", type: "Pós-graduação" },

  // Tecnologia e Dados
  { name: "Análise de Sistemas", level: "pos-graduacao", area: "tecnologia", type: "Pós-graduação" },
  { name: "Business Intelligence", level: "pos-graduacao", area: "tecnologia", type: "Pós-graduação" },
  { name: "Ciência de Dados e Big Data", level: "pos-graduacao", area: "tecnologia", type: "Pós-graduação" },
  { name: "Inteligência Artificial e Machine Learning", level: "pos-graduacao", area: "tecnologia", type: "Pós-graduação" },
  { name: "Segurança da Informação", level: "pos-graduacao", area: "tecnologia", type: "Pós-graduação" },
];

export const levelLabels: Record<CourseLevel, string> = {
  licenciatura: "Licenciatura",
  tecnologo: "Tecnólogo",
  "pos-graduacao": "Pós-graduação",
};

export const areaLabels: Record<CourseArea, string> = {
  agronegocio: "Agronegócio",
  comunicacao: "Comunicação e Marketing",
  juridico: "Direito e Segurança",
  educacao: "Educação e Humanidades",
  engenharia: "Engenharia e Arquitetura",
  financas: "Finanças e Contabilidade",
  negocios: "Gestão e Negócios",
  "gestao-publica": "Gestão Pública",
  saude: "Saúde e Bem-Estar",
  tecnologia: "Tecnologia e Dados",
};

export const areaIcons: Record<CourseArea, string> = {
  agronegocio: "🌾",
  comunicacao: "🎨",
  juridico: "⚖️",
  educacao: "🍎",
  engenharia: "🏗️",
  financas: "💰",
  negocios: "💼",
  "gestao-publica": "🏛️",
  saude: "🏥",
  tecnologia: "💻",
};

export const levelIcons: Record<CourseLevel, string> = {
  licenciatura: "🎓",
  tecnologo: "⚡",
  "pos-graduacao": "🏆",
};
