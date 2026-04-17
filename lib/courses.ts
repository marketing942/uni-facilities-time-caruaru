export type CourseLevel = "graduacao" | "tecnologo" | "pos-graduacao";
export type CourseArea =
  | "tecnologia"
  | "negocios"
  | "humanas"
  | "saude"
  | "exatas"
  | "educacao"
  | "juridico"
  | "criativo"
  | "agronegocio"
  | "outros";
export type CourseType =
  | "Bacharelado"
  | "Licenciatura"
  | "Semipresencial"
  | "Tecnólogo"
  | "Pós-graduação";

export interface Course {
  name: string;
  level: CourseLevel;
  area: CourseArea;
  type: CourseType;
  duration?: string;
  priceFrom?: string;
}

export const courses: Course[] = [
  // GRADUAÇÃO - Tecnologia
  { name: "Engenharia de Dados", level: "graduacao", area: "tecnologia", type: "Bacharelado", duration: "4 anos", priceFrom: "R$199/mês" },
  { name: "Engenharia de Software", level: "graduacao", area: "tecnologia", type: "Bacharelado", duration: "4 anos", priceFrom: "R$199/mês" },
  { name: "Engenharia DevOps", level: "graduacao", area: "tecnologia", type: "Bacharelado", duration: "3 anos", priceFrom: "R$199/mês" },
  { name: "Engenharia de Segurança Cibernética", level: "graduacao", area: "tecnologia", type: "Bacharelado", duration: "3 anos", priceFrom: "R$199/mês" },
  { name: "Engenharia de Design Digital", level: "graduacao", area: "tecnologia", type: "Bacharelado", duration: "4 anos", priceFrom: "R$199/mês" },
  { name: "Computação e Informática", level: "graduacao", area: "tecnologia", type: "Licenciatura", duration: "4 anos", priceFrom: "R$119/mês" },

  // GRADUAÇÃO - Negócios
  { name: "Administração", level: "graduacao", area: "negocios", type: "Bacharelado", priceFrom: "R$119/mês" },
  { name: "Administração Pública", level: "graduacao", area: "negocios", type: "Bacharelado", priceFrom: "R$119/mês" },
  { name: "Ciências Contábeis", level: "graduacao", area: "negocios", type: "Bacharelado", priceFrom: "R$119/mês" },
  { name: "Ciências Econômicas", level: "graduacao", area: "negocios", type: "Bacharelado", priceFrom: "R$119/mês" },
  { name: "Ciências Imobiliárias", level: "graduacao", area: "negocios", type: "Bacharelado", priceFrom: "R$119/mês" },
  { name: "Publicidade e Propaganda", level: "graduacao", area: "negocios", type: "Bacharelado", priceFrom: "R$119/mês" },

  // GRADUAÇÃO - Humanas
  { name: "Ciência Política", level: "graduacao", area: "humanas", type: "Bacharelado", priceFrom: "R$119/mês" },
  { name: "Ciências Sociais", level: "graduacao", area: "humanas", type: "Bacharelado", priceFrom: "R$119/mês" },
  { name: "Sociologia", level: "graduacao", area: "humanas", type: "Bacharelado", priceFrom: "R$119/mês" },
  { name: "Relações Internacionais", level: "graduacao", area: "humanas", type: "Bacharelado", priceFrom: "R$119/mês" },
  { name: "Geografia", level: "graduacao", area: "humanas", type: "Bacharelado", priceFrom: "R$119/mês" },
  { name: "Letras", level: "graduacao", area: "humanas", type: "Bacharelado", priceFrom: "R$119/mês" },
  { name: "Teologia", level: "graduacao", area: "humanas", type: "Bacharelado", priceFrom: "R$119/mês" },
  { name: "Museologia", level: "graduacao", area: "humanas", type: "Bacharelado", priceFrom: "R$119/mês" },
  { name: "Arquivologia", level: "graduacao", area: "humanas", type: "Bacharelado", priceFrom: "R$119/mês" },
  { name: "Biblioteconomia", level: "graduacao", area: "humanas", type: "Bacharelado", priceFrom: "R$119/mês" },

  // GRADUAÇÃO - Saúde
  { name: "Ciências Biológicas", level: "graduacao", area: "saude", type: "Semipresencial", priceFrom: "R$119/mês" },
  { name: "Educação Física", level: "graduacao", area: "saude", type: "Semipresencial", priceFrom: "R$119/mês" },

  // GRADUAÇÃO - Exatas
  { name: "Física", level: "graduacao", area: "exatas", type: "Bacharelado", priceFrom: "R$119/mês" },
  { name: "Estatística", level: "graduacao", area: "exatas", type: "Bacharelado", priceFrom: "R$119/mês" },

  // GRADUAÇÃO - Educação
  { name: "Pedagogia", level: "graduacao", area: "educacao", type: "Licenciatura", priceFrom: "R$119/mês" },
  { name: "Psicopedagogia", level: "graduacao", area: "educacao", type: "Licenciatura", priceFrom: "R$119/mês" },
  { name: "História", level: "graduacao", area: "educacao", type: "Licenciatura", priceFrom: "R$119/mês" },
  { name: "Filosofia", level: "graduacao", area: "educacao", type: "Licenciatura", priceFrom: "R$119/mês" },
  { name: "Matemática", level: "graduacao", area: "educacao", type: "Licenciatura", priceFrom: "R$119/mês" },
  { name: "Química", level: "graduacao", area: "educacao", type: "Licenciatura", priceFrom: "R$119/mês" },
  { name: "Letras (várias combinações)", level: "graduacao", area: "educacao", type: "Licenciatura", priceFrom: "R$119/mês" },
  { name: "Artes / Artes Visuais", level: "graduacao", area: "educacao", type: "Licenciatura", priceFrom: "R$119/mês" },
  { name: "Educação Especial", level: "graduacao", area: "educacao", type: "Licenciatura", priceFrom: "R$119/mês" },
  { name: "Teatro", level: "graduacao", area: "educacao", type: "Licenciatura", priceFrom: "R$119/mês" },
  { name: "Andragogia", level: "graduacao", area: "educacao", type: "Licenciatura", priceFrom: "R$119/mês" },
  { name: "Ciências da Religião", level: "graduacao", area: "educacao", type: "Licenciatura", priceFrom: "R$119/mês" },

  // TECNÓLOGO - Tecnologia
  { name: "Análise e Desenvolvimento de Sistemas", level: "tecnologo", area: "tecnologia", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Banco de Dados", level: "tecnologo", area: "tecnologia", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Big Data e Inteligência Analítica", level: "tecnologo", area: "tecnologia", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Inteligência Artificial", level: "tecnologo", area: "tecnologia", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Internet das Coisas", level: "tecnologo", area: "tecnologia", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Redes de Computadores", level: "tecnologo", area: "tecnologia", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Sistemas para Internet", level: "tecnologo", area: "tecnologia", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Segurança da Informação", level: "tecnologo", area: "tecnologia", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Jogos Digitais", level: "tecnologo", area: "tecnologia", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Transformação Digital", level: "tecnologo", area: "tecnologia", type: "Tecnólogo", priceFrom: "R$99/mês" },

  // TECNÓLOGO - Saúde
  { name: "Gerência em Saúde", level: "tecnologo", area: "saude", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Gestão de Clínicas e Consultórios", level: "tecnologo", area: "saude", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Gestão de Registros em Saúde", level: "tecnologo", area: "saude", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Gestão em Farmácia", level: "tecnologo", area: "saude", type: "Tecnólogo", priceFrom: "R$99/mês" },

  // TECNÓLOGO - Gestão e Negócios
  { name: "Gestão Comercial", level: "tecnologo", area: "negocios", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Gestão Financeira", level: "tecnologo", area: "negocios", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Gestão de RH", level: "tecnologo", area: "negocios", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Gestão Pública", level: "tecnologo", area: "negocios", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Gestão de Investimentos", level: "tecnologo", area: "negocios", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Gestão da Qualidade", level: "tecnologo", area: "negocios", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Gestão da Produção Industrial", level: "tecnologo", area: "negocios", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Processos Gerenciais", level: "tecnologo", area: "negocios", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Logística", level: "tecnologo", area: "negocios", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Marketing / Marketing Digital", level: "tecnologo", area: "negocios", type: "Tecnólogo", priceFrom: "R$99/mês" },

  // TECNÓLOGO - Jurídico
  { name: "Serviços Jurídicos", level: "tecnologo", area: "juridico", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Perícia Judicial", level: "tecnologo", area: "juridico", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Investigação e Perícia Judicial", level: "tecnologo", area: "juridico", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Segurança Pública", level: "tecnologo", area: "juridico", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Segurança no Trabalho", level: "tecnologo", area: "juridico", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Segurança no Trânsito", level: "tecnologo", area: "juridico", type: "Tecnólogo", priceFrom: "R$99/mês" },

  // TECNÓLOGO - Criativo
  { name: "Design Gráfico", level: "tecnologo", area: "criativo", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Design de Interiores", level: "tecnologo", area: "criativo", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Design de Produto", level: "tecnologo", area: "criativo", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Design de Animação", level: "tecnologo", area: "criativo", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Produção Audiovisual", level: "tecnologo", area: "criativo", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Produção de Conteúdo Digital", level: "tecnologo", area: "criativo", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Mídias Sociais", level: "tecnologo", area: "criativo", type: "Tecnólogo", priceFrom: "R$99/mês" },

  // TECNÓLOGO - Outros
  { name: "Gastronomia", level: "tecnologo", area: "outros", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Turismo", level: "tecnologo", area: "outros", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Agronegócio", level: "tecnologo", area: "agronegocio", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Coaching e Desenvolvimento Humano", level: "tecnologo", area: "outros", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Negócios Sustentáveis (ESG)", level: "tecnologo", area: "outros", type: "Tecnólogo", priceFrom: "R$99/mês" },
  { name: "Ministério Pastoral", level: "tecnologo", area: "outros", type: "Tecnólogo", priceFrom: "R$99/mês" },

  // PÓS-GRADUAÇÃO - Agronegócio
  { name: "Agricultura e Sustentabilidade", level: "pos-graduacao", area: "agronegocio", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Gestão do Agronegócio", level: "pos-graduacao", area: "agronegocio", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Agrometeorologia", level: "pos-graduacao", area: "agronegocio", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Fertilidade do Solo", level: "pos-graduacao", area: "agronegocio", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Recuperação Ambiental", level: "pos-graduacao", area: "agronegocio", type: "Pós-graduação", priceFrom: "R$59/mês" },

  // PÓS-GRADUAÇÃO - Comunicação e Design
  { name: "Marketing Digital", level: "pos-graduacao", area: "criativo", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Branding e RP", level: "pos-graduacao", area: "criativo", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Comunicação Organizacional", level: "pos-graduacao", area: "criativo", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Gestão de Mídias Digitais", level: "pos-graduacao", area: "criativo", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Design Thinking", level: "pos-graduacao", area: "criativo", type: "Pós-graduação", priceFrom: "R$59/mês" },

  // PÓS-GRADUAÇÃO - Direito
  { name: "Direito Penal", level: "pos-graduacao", area: "juridico", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Direito Civil", level: "pos-graduacao", area: "juridico", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Direito Trabalhista", level: "pos-graduacao", area: "juridico", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Direito Tributário", level: "pos-graduacao", area: "juridico", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Direito Previdenciário", level: "pos-graduacao", area: "juridico", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Direito Administrativo", level: "pos-graduacao", area: "juridico", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Direito Ambiental", level: "pos-graduacao", area: "juridico", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Direito Médico", level: "pos-graduacao", area: "juridico", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Perícia Criminal", level: "pos-graduacao", area: "juridico", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Licitações (Lei 14.133)", level: "pos-graduacao", area: "juridico", type: "Pós-graduação", priceFrom: "R$59/mês" },

  // PÓS-GRADUAÇÃO - Educação
  { name: "Alfabetização e Letramento", level: "pos-graduacao", area: "educacao", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Educação Especial / Inclusiva", level: "pos-graduacao", area: "educacao", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Psicopedagogia", level: "pos-graduacao", area: "educacao", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Gestão Escolar", level: "pos-graduacao", area: "educacao", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Docência (várias áreas)", level: "pos-graduacao", area: "educacao", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Metodologias Ativas", level: "pos-graduacao", area: "educacao", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "LIBRAS", level: "pos-graduacao", area: "educacao", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Educação Infantil", level: "pos-graduacao", area: "educacao", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Coordenação Pedagógica", level: "pos-graduacao", area: "educacao", type: "Pós-graduação", priceFrom: "R$59/mês" },

  // PÓS-GRADUAÇÃO - Engenharia
  { name: "Engenharia Civil", level: "pos-graduacao", area: "exatas", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Engenharia de Produção", level: "pos-graduacao", area: "exatas", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Engenharia Ambiental", level: "pos-graduacao", area: "exatas", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Energias Renováveis", level: "pos-graduacao", area: "exatas", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Segurança do Trabalho", level: "pos-graduacao", area: "exatas", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Engenharia Elétrica", level: "pos-graduacao", area: "exatas", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Engenharia Química", level: "pos-graduacao", area: "exatas", type: "Pós-graduação", priceFrom: "R$59/mês" },

  // PÓS-GRADUAÇÃO - Finanças
  { name: "Controladoria", level: "pos-graduacao", area: "negocios", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Auditoria", level: "pos-graduacao", area: "negocios", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Contabilidade", level: "pos-graduacao", area: "negocios", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Finanças Corporativas", level: "pos-graduacao", area: "negocios", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Gestão Tributária", level: "pos-graduacao", area: "negocios", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "MBA em Finanças", level: "pos-graduacao", area: "negocios", type: "Pós-graduação", priceFrom: "R$59/mês" },

  // PÓS-GRADUAÇÃO - Gestão Pública
  { name: "Administração Pública", level: "pos-graduacao", area: "humanas", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Políticas Públicas", level: "pos-graduacao", area: "humanas", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Auditoria no Setor Público", level: "pos-graduacao", area: "humanas", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Governança Pública", level: "pos-graduacao", area: "humanas", type: "Pós-graduação", priceFrom: "R$59/mês" },

  // PÓS-GRADUAÇÃO - Veterinária
  { name: "Produção Animal", level: "pos-graduacao", area: "saude", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Zoonoses", level: "pos-graduacao", area: "saude", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Segurança de Alimentos", level: "pos-graduacao", area: "saude", type: "Pós-graduação", priceFrom: "R$59/mês" },

  // PÓS-GRADUAÇÃO - Negócios
  { name: "Gestão de Pessoas", level: "pos-graduacao", area: "negocios", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Gestão de Projetos", level: "pos-graduacao", area: "negocios", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Empreendedorismo", level: "pos-graduacao", area: "negocios", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Logística", level: "pos-graduacao", area: "negocios", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Marketing e Vendas", level: "pos-graduacao", area: "negocios", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "MBA Executivo", level: "pos-graduacao", area: "negocios", type: "Pós-graduação", priceFrom: "R$59/mês" },

  // PÓS-GRADUAÇÃO - Saúde
  { name: "Enfermagem", level: "pos-graduacao", area: "saude", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Farmácia Clínica", level: "pos-graduacao", area: "saude", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Fisioterapia", level: "pos-graduacao", area: "saude", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Nutrição", level: "pos-graduacao", area: "saude", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Psicologia", level: "pos-graduacao", area: "saude", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Saúde Pública", level: "pos-graduacao", area: "saude", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Gestão Hospitalar", level: "pos-graduacao", area: "saude", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Biomedicina Estética", level: "pos-graduacao", area: "saude", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "UTI", level: "pos-graduacao", area: "saude", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Oncologia", level: "pos-graduacao", area: "saude", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Neurociência", level: "pos-graduacao", area: "saude", type: "Pós-graduação", priceFrom: "R$59/mês" },

  // PÓS-GRADUAÇÃO - Tecnologia
  { name: "Ciência de Dados", level: "pos-graduacao", area: "tecnologia", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Inteligência Artificial", level: "pos-graduacao", area: "tecnologia", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Segurança da Informação", level: "pos-graduacao", area: "tecnologia", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Engenharia de Software", level: "pos-graduacao", area: "tecnologia", type: "Pós-graduação", priceFrom: "R$59/mês" },
  { name: "Business Intelligence", level: "pos-graduacao", area: "tecnologia", type: "Pós-graduação", priceFrom: "R$59/mês" },
];

export const levelLabels: Record<CourseLevel, string> = {
  graduacao: "Graduação",
  tecnologo: "Tecnólogo",
  "pos-graduacao": "Pós-graduação",
};

export const areaLabels: Record<CourseArea, string> = {
  tecnologia: "Tecnologia",
  negocios: "Negócios",
  humanas: "Humanas e Sociais",
  saude: "Saúde",
  exatas: "Exatas e Engenharia",
  educacao: "Educação",
  juridico: "Jurídico e Segurança",
  criativo: "Criativo e Comunicação",
  agronegocio: "Agronegócio",
  outros: "Outros",
};

export const areaIcons: Record<CourseArea, string> = {
  tecnologia: "💻",
  negocios: "💼",
  humanas: "🌍",
  saude: "🏥",
  exatas: "🔬",
  educacao: "🎓",
  juridico: "⚖️",
  criativo: "🎨",
  agronegocio: "🌱",
  outros: "✨",
};

export const levelIcons: Record<CourseLevel, string> = {
  graduacao: "🎓",
  tecnologo: "⚡",
  "pos-graduacao": "🏆",
};
