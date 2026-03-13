import { 
  Zap, 
  TrendingUp, 
  Star, 
  Monitor, 
  Clock, 
  Globe, 
  CalendarDays, 
  Video, 
  DollarSign, 
  CreditCard, 
  FileText 
} from "lucide-react";

export interface Job {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  salary: string;
  location: string;
  type: string;
  techStack: string[];
  requirements: string[];
  benefits: { icon: any; text: string }[];
  responsibilities: string[];
  softSkills: string[];
  workEnvironment: { icon: any; text: string }[];
  paymentTerms: { icon: any; text: string }[];
  team: string[];
}

export const jobs: Job[] = [
  {
    id: "1",
    slug: "desenvolvedor-full-stack",
    title: "Desenvolvedor(a) Full Stack",
    shortDescription: "Integre o time da Suaiden, empresa focada em construção de aplicações web com uso de Inteligência Artificial.",
    fullDescription: "Buscamos alguém com perfil técnico e estratégico, que tenha interesse em atuar não apenas no desenvolvimento, mas também no controle de qualidade, estruturação de processos e evolução comercial dos nossos produtos.",
    salary: "USD 500,00 / mês",
    location: "Remoto (Arizona Timezone)",
    type: "Full-time (40h)",
    techStack: ["React", "Vue.js", "Node.js", "TypeScript", "TailwindCSS", "Supabase", "Nest.js", "GitHub", "Lovable", "Cursor"],
    requirements: [
      "Experiência em desenvolvimento Full Stack (Node.js, Vue.js, React, TypeScript, TailwindCSS)",
      "Familiaridade com ferramentas de IA para desenvolvimento ágil (Lovable, Bolt.new, Cursor, MCPs)",
      "Integração com bancos de dados relacionais e não-relacionais (Supabase)",
      "Consumo e criação de APIs (Node.js/Nest.js)",
      "Versionamento de código (GitHub)",
      "Integrações com CRMs",
    ],
    benefits: [
      { icon: Zap, text: "Autonomia para propor e implementar soluções" },
      { icon: TrendingUp, text: "Contato direto com decisões estratégicas" },
      { icon: Star, text: "Oportunidade real de crescimento" },
    ],
    responsibilities: [
      "Atuar no desenvolvimento, manutenção e evolução dos sistemas e projetos da empresa",
      "Garantir a qualidade dos produtos, realizando testes e validações antes de publicações e atualizações",
      "Monitorar o funcionamento das plataformas, identificando falhas, gargalos e oportunidades de melhoria",
      "Participar ativamente da estruturação e evolução dos nossos produtos SaaS, com foco em performance, estabilidade e escalabilidade",
      "Operar e otimizar o sistema de IA/SDR, ajustando fluxos, integrações e scripts conforme necessidade",
      "Atuar na área comercial executando atendimentos iniciais (SDR), entendendo na prática a jornada do cliente",
      "Identificar pontos de melhoria no funil de vendas, propondo ajustes em processos, automações e integrações",
      "Conectar desenvolvimento, marketing e comercial, garantindo que os sistemas estejam alinhados aos objetivos de conversão",
      "Contribuir estrategicamente com ideias para melhoria contínua dos produtos, serviços e processos internos",
    ],
    softSkills: [
      "Análise crítica e visão estratégica",
      "Comunicação clara e objetiva",
      "Proatividade e iniciativa",
      "Trabalho em equipe e adaptabilidade",
    ],
    workEnvironment: [
      { icon: Monitor, text: "100% remoto (home office)" },
      { icon: Clock, text: "Carga horária: 40 horas semanais (segunda a sábado / Domingo a Sexta)" },
      { icon: Globe, text: "Horário: Alinhado ao fuso do Arizona (EUA)" },
      { icon: CalendarDays, text: "Daily: De segunda a sexta-feira às 13h do Brasil" },
      { icon: Video, text: "Durante o expediente, é necessário permanecer online com Zoom aberto e câmera ligada" },
    ],
    paymentTerms: [
      { icon: DollarSign, text: "Remuneração: USD 500,00 por mês" },
      { icon: Star, text: "Bonificações: Por projetos e conforme o crescimento da empresa" },
      { icon: CreditCard, text: "Pagamento: Via PayPal, realizado quinzenalmente nos dias 5 e 20 de cada mês" },
      { icon: FileText, text: "Contrato: Segue as normas americanas do estado do Arizona" },
      { icon: CalendarDays, text: "Feriados: Seguimos o calendário de feriados dos EUA" },
      { icon: Clock, text: "Período de teste remunerado: 15 dias, para avaliar desempenho e integração com a equipe" },
    ],
    team: [
      "2 Desenvolvedores Full Stack",
      "1 Especialista em automações com n8n",
      "1 Tech Lead",
    ]
  }
];
