import { motion } from "framer-motion";
import { Badge } from "../../components/jobs/ui/badge";
import {
  Monitor,
  Clock,
  CalendarDays,
  Video,
  DollarSign,
  Users,
  Rocket,
  CheckCircle2,
  Briefcase,
  Globe,
  CreditCard,
  FileText,
  Star,
  ArrowLeft,
} from "lucide-react";
import { Button } from "../../components/jobs/ui/button";
import { useNavigate } from "react-router-dom";

import type { Easing } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as Easing },
  }),
};

const workEnvironment = [
  { icon: Monitor, text: "100% remoto (home office)" },
  { icon: Clock, text: "Carga horária: 40 horas semanais (segunda a sábado / Domingo a Sexta)" },
  { icon: Globe, text: "Horário: Alinhado ao fuso do Arizona (EUA)" },
  { icon: CalendarDays, text: "Daily: De segunda a sexta-feira às 13h do Brasil" },
  { icon: Video, text: "Durante o expediente, é necessário permanecer online com Zoom aberto e câmera ligada" },
];

const responsibilities = [
  "Atuar no desenvolvimento, manutenção e evolução dos sistemas e projetos da empresa",
  "Garantir a qualidade dos produtos, realizando testes e validações antes de publicações e atualizações",
  "Monitorar o funcionamento das plataformas, identificando falhas, gargalos e oportunidades de melhoria",
  "Participar ativamente da estruturação e evolução dos nossos produtos SaaS, com foco em performance, estabilidade e escalabilidade",
  "Operar e otimizar o sistema de IA/SDR, ajustando fluxos, integrações e scripts conforme necessidade",
  "Atuar na área comercial executando atendimentos iniciais (SDR), entendendo na prática a jornada do cliente",
  "Identificar pontos de melhoria no funil de vendas, propondo ajustes em processos, automações e integrações",
  "Conectar desenvolvimento, marketing e comercial, garantindo que os sistemas estejam alinhados aos objetivos de conversão",
  "Contribuir estrategicamente com ideias para melhoria contínua dos produtos, serviços e processos internos",
];

const payments = [
  { icon: DollarSign, text: "Remuneração: USD 500,00 por mês" },
  { icon: Star, text: "Bonificações: Por projetos e conforme o crescimento da empresa" },
  { icon: CreditCard, text: "Pagamento: Via PayPal, realizado quinzenalmente nos dias 5 e 20 de cada mês" },
  { icon: FileText, text: "Contrato: Segue as normas americanas do estado do Arizona" },
  { icon: CalendarDays, text: "Feriados: Seguimos o calendário de feriados dos EUA" },
  { icon: Clock, text: "Período de teste remunerado: 15 dias, para avaliar desempenho e integração com a equipe" },
];

const team = [
  "2 Desenvolvedores Full Stack",
  "1 Especialista em automações com n8n",
  "1 Tech Lead",
];

const SectionTitle = ({ icon: Icon, children, custom = 0 }: { icon: React.ElementType; children: React.ReactNode; custom?: number }) => (
  <motion.h2
    variants={fadeUp}
    custom={custom}
    className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3"
  >
    <Icon className="w-6 h-6 text-primary" />
    {children}
  </motion.h2>
);

const JobDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(hsl(210_100%_56%/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(210_100%_56%/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Back button */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <Button
            variant="ghost"
            className="mb-8 text-muted-foreground hover:text-foreground"
            onClick={() => navigate("/vagas")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Vagas
          </Button>
        </motion.div>

        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-center mb-16">
          <Badge variant="tech" className="mb-6 text-sm px-4 py-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
            Próxima Etapa
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Obrigado pelo seu interesse em fazer parte da{" "}
            <span className="text-primary">nossa equipe!</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Antes de avançarmos para a próxima etapa, confira as informações essenciais sobre como trabalhamos:
          </p>
        </motion.div>

        {/* Ambiente de Trabalho */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-14">
          <SectionTitle icon={Monitor}>Ambiente de Trabalho</SectionTitle>
          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            {workEnvironment.map((item, i) => (
              <motion.div key={i} variants={fadeUp} custom={i + 1} className="flex items-start gap-3">
                <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-card-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Responsabilidades */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-14">
          <SectionTitle icon={Briefcase}>Responsabilidades da Vaga</SectionTitle>
          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            {responsibilities.map((item, i) => (
              <motion.div key={i} variants={fadeUp} custom={i + 1} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <p className="text-card-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Condições e Pagamentos */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-14">
          <SectionTitle icon={DollarSign}>Condições e Pagamentos</SectionTitle>
          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            {payments.map((item, i) => (
              <motion.div key={i} variants={fadeUp} custom={i + 1} className="flex items-start gap-3">
                <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-card-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Equipe Atual */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-14">
          <SectionTitle icon={Users}>Equipe Atual</SectionTitle>
          <div className="grid sm:grid-cols-3 gap-4">
            {team.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 1}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 transition-colors duration-300"
              >
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-card-foreground font-medium">{member}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Oportunidade */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-14">
          <SectionTitle icon={Rocket}>Oportunidade</SectionTitle>
          <motion.div variants={fadeUp} custom={1} className="bg-card border border-primary/20 rounded-xl p-6 sm:p-8 space-y-4">
            <p className="text-card-foreground leading-relaxed">
              Buscamos alguém com perfil técnico e estratégico, que tenha interesse em atuar não apenas no desenvolvimento, mas também no controle de qualidade, estruturação de processos e evolução comercial dos nossos produtos.
            </p>
            <p className="text-card-foreground leading-relaxed">
              Aqui você terá contato direto com projetos envolvendo{" "}
              <span className="text-primary font-medium">Inteligência Artificial</span>, automações e sistemas comerciais, participando ativamente da construção e otimização do funil de vendas e das soluções tecnológicas da empresa.
            </p>
          </motion.div>
        </motion.section>

        {/* CTA Entrevista */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-14">
          <motion.div variants={fadeUp} custom={1} className="text-center">
            <Button
              variant="hero"
              size="lg"
              className="px-10 py-6 text-lg"
              onClick={() => navigate("/entrevista")}
            >
              <Rocket className="w-5 h-5 mr-2" />
              Candidatar-se agora
            </Button>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          © 2026 • Vaga remota com contrato direto com empresa americana
        </p>
      </div>
    </div>
  );
};

export default JobDetailsPage;
