import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Menu, X, CheckCircle2, Zap, Brain, ShieldCheck, 
  CalendarDays, BarChart3, LayoutDashboard, Users, Clock, Settings, Blocks, Lock,
  TrendingUp, Layers, Briefcase, RefreshCw, Star, ArrowRight, Play, Hexagon, Bell, Upload
} from 'lucide-react';

// --- Shared Animations ---
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { staggerChildren: 0.1 }
};

// --- Components ---

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="M-System Logo" 
              className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(216,162,74,0.4)] group-hover:scale-105 transition-transform" 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg width='48' height='48' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='48' height='48' rx='12' fill='%23D8A24A'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='24' font-weight='bold' fill='%230B0B0B' text-anchor='middle' dominant-baseline='middle'%3EM%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-brand-gold-soft transition-colors">
            M-System
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
          <a href="#about" className="hover:text-white transition-colors">Sobre</a>
          <a href="#features" className="hover:text-white transition-colors">Recursos</a>
          <a href="#founder" className="hover:text-white transition-colors">Fundador</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">Como Funciona</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Clientes</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="mailto:carthagemauricio@gmail.com" className="px-5 py-2.5 rounded-full bg-white text-bg-primary font-medium text-sm hover:scale-105 transition-transform">
            Começar Agora
          </a>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-bg-card border-b border-white/5 p-6 flex flex-col gap-4 shadow-2xl md:hidden"
        >
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-white font-medium">Sobre</a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-white font-medium">Recursos</a>
          <a href="#founder" onClick={() => setMobileMenuOpen(false)} className="text-white font-medium">Fundador</a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-white font-medium">Como Funciona</a>
          <div className="h-px bg-white/10 w-full my-2"></div>
          <a href="mailto:carthagemauricio@gmail.com" onClick={() => setMobileMenuOpen(false)} className="w-full py-3 rounded-xl bg-white text-bg-primary font-medium block text-center">Começar Agora</a>
        </motion.div>
      )}
    </nav>
  );
}

function HeroImage() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      className="relative w-full max-w-md mx-auto"
    >
      {/* Background glow behind image */}
      <div className="absolute inset-0 bg-brand-gold blur-[100px] opacity-20 -z-10 rounded-full mix-blend-screen"></div>
      
      <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl gold-glow group">
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent z-10 opacity-80"></div>
        
        {/* Placeholder for the user's uploaded image */}
        <img 
          src="/hero-image.png" 
          alt="Maurício - Fundador M-System" 
          className="w-full h-auto object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-1000"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg width='400' height='500' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='500' fill='%231B1B1B'/%3E%3C/svg%3E";
          }}
        />

        <div className="absolute bottom-8 left-8 right-8 z-20">
           <div className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center gap-4 backdrop-blur-xl">
             <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0 border border-brand-gold/30">
                <Star className="w-6 h-6 text-brand-gold fill-brand-gold" />
             </div>
             <div>
               <p className="text-white font-heading font-bold text-lg">Maurício</p>
               <p className="text-brand-gold-soft text-sm font-medium">Fundador & CEO, M-System</p>
             </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-brand-gold/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        <motion.div 
          className="space-y-8 text-center lg:text-left"
          variants={staggerContainer}
          initial="initial"
          animate="whileInView"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-gold/20 bg-brand-gold/5 text-brand-gold text-xs font-semibold tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
            </span>
            A Nova Era da Gestão
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight">
             Organização que <span className="gradient-text-gold block mt-2">gera resultado.</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
             Automatize processos, organize agendamentos e transforme sua empresa com tecnologia inteligente de ponta.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
             <a href="mailto:carthagemauricio@gmail.com" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-bg-primary font-semibold hover:bg-brand-gold-soft hover:text-bg-primary transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-brand-gold/50 flex items-center justify-center gap-2 group">
               Começar Agora
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </a>
             <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2 group">
               <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center">
                 <Play className="w-3 h-3 text-brand-gold group-hover:scale-110 transition-transform" />
               </div>
               Ver Demonstração
             </a>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="pt-8 flex items-center justify-center lg:justify-start gap-8 opacity-60">
             <div className="flex flex-col gap-1 items-center lg:items-start text-sm">
                <p className="font-bold text-white text-xl">Integrações</p>
                <p className="text-xs">Seamless API</p>
             </div>
             <div className="w-px h-10 bg-white/10"></div>
             <div className="flex flex-col gap-1 items-center lg:items-start text-sm">
                <p className="font-bold text-white text-xl">Performance</p>
                <p className="text-xs">Ultrafast UI</p>
             </div>
          </motion.div>
        </motion.div>

        <div className="flex justify-center relative">
           <HeroImage />
        </div>
      </div>
    </section>
  );
}

function About() {
  const cards = [
    { icon: Brain, title: "Gestão Inteligente", desc: "Painéis que aprendem e adaptam-se ao seu negócio." },
    { icon: Zap, title: "Automação Empresarial", desc: "Reduza o trabalho manual em até 80% diariamente." },
    { icon: CalendarDays, title: "Agendamento Simplificado", desc: "Seu calendário trabalhado como um assistente pessoal." },
    { icon: ShieldCheck, title: "Controle Total", desc: "Segurança de nível enterprise para seus dados cruciais." }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
            A tecnologia certa para <span className="gradient-text-gold">empresas modernas</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-text-muted text-lg">
            A M-System ajuda empresas a automatizarem processos, melhorarem a organização e aumentarem a produtividade através de soluções projetadas com perfeição.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              className="bg-bg-card p-8 rounded-3xl border border-white/5 hover:border-brand-gold/30 gold-glow-hover transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#222] flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-colors">
                <card.icon className="w-6 h-6 text-white group-hover:text-brand-gold transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-white">{card.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { title: "Dashboard Inteligente", icon: LayoutDashboard },
    { title: "Gestão de Clientes", icon: Users },
    { title: "Agendamentos Automáticos", icon: Clock },
    { title: "Relatórios Avançados", icon: BarChart3 },
    { title: "Notificações em Tempo Real", icon: Bell },
    { title: "Painel Administrativo", icon: Settings },
    { title: "Integrações Modernas", icon: Blocks },
    { title: "Controle Empresarial", icon: Lock }
  ];

  return (
    <section id="features" className="py-24 relative bg-[#0e0e0e] border-y border-white/5">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-gold/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
           <motion.h2 variants={fadeInUp} initial="initial" whileInView="whileInView" className="text-3xl md:text-5xl font-heading font-bold tracking-tight">
             Funcionalidades <span className="gradient-text-gold">poderosas</span>
           </motion.h2>
           <motion.a href="#benefits" variants={fadeInUp} initial="initial" whileInView="whileInView" className="px-6 py-3 rounded-full border border-white/10 hover:border-brand-gold/50 hover:bg-brand-gold/10 transition-all font-medium text-sm flex items-center gap-2">
             Ver todos recursos <ArrowRight className="w-4 h-4" />
           </motion.a>
        </div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          {features.map((feat, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              className="group glass-panel p-6 rounded-2xl flex items-center gap-4 hover:bg-white/5 transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/0 via-brand-gold/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <div className="w-10 h-10 rounded-lg bg-bg-primary flex items-center justify-center border border-white/5 group-hover:border-brand-gold/30 transition-colors">
                <feat.icon className="w-5 h-5 text-text-muted group-hover:text-brand-gold transition-colors" />
              </div>
              <h4 className="font-medium text-white group-hover:text-brand-gold-soft transition-colors tracking-wide text-sm">{feat.title}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    { title: "Mais produtividade", icon: TrendingUp },
    { title: "Melhor organização", icon: Layers },
    { title: "Gestão inteligente", icon: Brain },
    { title: "Atendimento rápido", icon: Zap },
    { title: "Controle simplificado", icon: Briefcase },
    { title: "Crescimento empresarial", icon: RefreshCw }
  ];

  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="space-y-8">
           <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-heading font-bold tracking-tight leading-tight">
             Tudo que sua empresa precisa <span className="gradient-text-gold">para crescer</span>
           </motion.h2>
           <motion.p variants={fadeInUp} className="text-text-muted text-lg font-light leading-relaxed">
             Desenhado sob os mais estritos padrões de qualidade. A M-System não é apenas um software, é a fundação para o futuro da sua organização.
           </motion.p>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-4">
              {benefits.map((benefit, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
                  </div>
                  <span className="font-medium text-white">{benefit.title}</span>
                </motion.div>
              ))}
           </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full bg-bg-card rounded-[40px] border border-white/10 p-8 flex flex-col overflow-hidden gold-glow"
        >
           {/* Abstract Data Viz for aesthetic */}
           <div className="absolute top-0 right-0 w-full h-full opacity-30 select-none pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,100 L0,80 Q25,90 50,70 T100,50 L100,100 Z" fill="url(#goldGradient)" />
                <path d="M0,100 L0,90 Q25,100 50,85 T100,65 L100,100 Z" fill="url(#goldGradient)" opacity="0.5" />
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#D8A24A" />
                    <stop offset="100%" stopColor="#0B0B0B" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
           </div>

           <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
                   <TrendingUp className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-white">Métricas de Crescimento</h3>
              </div>

              <div className="space-y-4 mt-auto">
                 {[1,2,3].map((i) => (
                   <div key={i} className="h-16 w-full glass-panel rounded-xl flex items-center px-4 relative overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${80 - (i*10)}%` }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className="absolute left-0 top-0 bottom-0 bg-brand-gold/10"
                      />
                      <div className="relative z-10 flex justify-between w-full">
                         <span className="text-sm font-medium text-white/80">Segmento {i}</span>
                         <span className="text-sm font-bold text-brand-gold">+{150 - i*20}%</span>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}

function Founder() {
  const [founderImage, setFounderImage] = useState<string>('/founder.jpg');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem('founderProfileImage');
    if (savedImage) {
      setFounderImage(savedImage);
    }
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 1000;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);
        
        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.85);
        setFounderImage(compressedBase64);
        try {
          localStorage.setItem('founderProfileImage', compressedBase64);
        } catch (err) {
          console.error("Local storage full", err);
          alert("Imagem muito grande para salvar no dispositivo.");
        }
      };
      if (e.target?.result) {
        img.src = e.target.result as string;
      }
    };
    reader.readAsDataURL(file);
  };

  const triggerFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <section id="founder" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="glass-panel rounded-[40px] border border-white/10 p-8 md:p-12 lg:p-16 relative overflow-hidden">
           {/* Abstract Glow */}
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
           
           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1 space-y-8"
              >
                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-sm font-semibold tracking-wide shadow-[0_0_15px_rgba(216,162,74,0.15)]">
                   <Star className="w-4 h-4 fill-brand-gold" />
                   Sobre o Fundador
                 </div>
                 
                 <div className="space-y-4">
                     <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-white leading-[1.1]">
                       A visão por trás da <span className="gradient-text-gold block mt-2">M-System.</span>
                     </h2>
                 </div>
                 
                 <div className="relative">
                    <div className="absolute -left-6 top-0 text-brand-gold/20 text-6xl font-heading font-bold leading-none">"</div>
                    <p className="text-text-muted text-lg lg:text-xl leading-relaxed font-light italic pl-4 border-l-2 border-brand-gold/30 relative z-10">
                      A M-System nasceu de uma necessidade real: automatizar a complexidade para focar no crescimento. 
                      Construímos mais que um software, criamos o ecossistema perfeito para empresas modernas escalarem com excelência e organização incomparáveis.
                    </p>
                 </div>
                 
                 <div className="pt-4 flex items-center gap-4">
                    <div className="h-px bg-white/10 w-12"></div>
                    <div>
                        <p className="text-white font-heading font-bold text-xl">Maurício</p>
                        <p className="text-brand-gold-soft text-sm font-medium tracking-wide">Fundador & CEO da M-System</p>
                    </div>
                 </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="order-1 lg:order-2 flex justify-center lg:justify-end perspective-1000"
              >
                 <div className="relative w-full max-w-sm lg:max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl gold-glow-strong group transition-all duration-700">
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-brand-gold/10 z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-700 mix-blend-overlay pointer-events-none"></div>
                    
                    {/* Hidden file input */}
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      ref={fileInputRef} 
                      onChange={handleImageUpload} 
                    />

                    {/* Image rendering */}
                    <img 
                      src={founderImage} 
                      alt="Maurício - CEO da M-System" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter hover:contrast-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg width='400' height='500' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='500' fill='%231B1B1B'/%3E%3C/svg%3E";
                      }}
                    />
                    
                    {/* Upload button overlay */}
                    <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={triggerFileUpload}
                        className="bg-bg-primary/80 hover:bg-brand-gold text-white px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-2 border border-white/20 transition-colors shadow-lg cursor-pointer"
                      >
                        <Upload className="w-4 h-4" />
                        <span className="text-sm font-medium">Trocar Foto</span>
                      </button>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 pointer-events-none">
                       <div className="glass-panel p-4 rounded-2xl border border-white/20 backdrop-blur-xl flex items-center justify-between">
                          <span className="text-white text-sm font-medium">Vamos crescer juntos</span>
                          <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center">
                              <ArrowRight className="w-4 h-4 text-bg-primary" />
                          </div>
                       </div>
                    </div>
                 </div>
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: "01", title: "Configure sua empresa", desc: "Setup inicial personalizado em minutos." },
    { num: "02", title: "Automatize processos", desc: "Deixe o sistema trabalhar por você com fluxos inteligentes." },
    { num: "03", title: "Cresça com inteligência", desc: "Acompanhe relatórios e otimize seus resultados." }
  ];

  return (
    <section id="how-it-works" className="py-24 relative bg-[#080808]">
       <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
         <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-20"
         >
            Três passos para o <span className="gradient-text-gold">sucesso</span>
         </motion.h2>

         <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line desktop */}
            <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"></div>
            
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-bg-card border-2 border-brand-gold/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(216,162,74,0.15)] relative">
                   <span className="text-2xl font-heading font-bold text-brand-gold">{step.num}</span>
                   {/* Decorative dots connecting lines */}
                   {i !== 2 && <div className="hidden md:block absolute top-1/2 -right-4 w-2 h-2 rounded-full bg-brand-gold/50 -translate-y-1/2"></div>}
                   {i !== 0 && <div className="hidden md:block absolute top-1/2 -left-4 w-2 h-2 rounded-full bg-brand-gold/50 -translate-y-1/2"></div>}
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed max-w-[250px] mx-auto">{step.desc}</p>
              </motion.div>
            ))}
         </div>
       </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { text: "A organização da nossa empresa mudou completamente.", name: "Ricardo Santos", role: "CEO, TechCorp" },
    { text: "Sistema moderno, rápido e extremamente eficiente.", name: "Ana Costa", role: "Operations, Nexus" },
    { text: "A produtividade aumentou drasticamente.", name: "Paulo Mendes", role: "Diretor, VeloSystems" }
  ];

  return (
    <section id="testimonials" className="py-24 relative">
       <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">Empresas que confiaram na <span className="gradient-text-gold">M-System</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-bg-card p-8 rounded-3xl border border-white/5 hover:border-brand-gold/20 transition-colors flex flex-col justify-between gap-8 group relative overflow-hidden"
              >
                 <div className="flex gap-1 mb-4">
                   {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-brand-gold text-brand-gold" />)}
                 </div>
                 <p className="text-lg font-medium text-white/90 leading-relaxed font-heading">"{t.text}"</p>
                 <div className="flex items-center gap-4 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#333] to-[#111] border border-white/10 group-hover:border-brand-gold/30 transition-colors"></div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-text-muted">{t.role}</p>
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>
       </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="py-24 relative px-6 md:px-12">
       <div className="max-w-5xl mx-auto relative rounded-[40px] overflow-hidden isolate">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-bg-card to-[#0a0a0a] z-[-2]"></div>
          <div className="absolute inset-0 bg-brand-gold/10 z-[-1] mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold blur-[150px] opacity-20 z-[-1] translate-x-1/3 -translate-y-1/3 rounded-full"></div>
          
          <div className="absolute inset-0 border border-white/10 rounded-[40px] pointer-events-none"></div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-6 py-20 md:py-28 text-center flex flex-col items-center justify-center space-y-8"
          >
             <h2 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tight leading-tight max-w-2xl">
               Leve sua empresa para o <span className="gradient-text-gold">próximo nível.</span>
             </h2>
             <p className="text-lg text-text-muted font-light max-w-xl">
               Automatize, organize e cresça com a M-System. A inovação que o seu negócio precisa para liderar o mercado.
             </p>
             <div className="pt-4 flex justify-center w-full">
                <a href="mailto:carthagemauricio@gmail.com" className="px-10 py-5 rounded-full bg-brand-gold text-bg-primary font-bold text-lg hover:bg-white hover:text-bg-primary transition-all shadow-brand-gold/50 shadow-xl flex items-center gap-3">
                  Solicitar Demonstração
                  <ArrowRight className="w-5 h-5" />
                </a>
             </div>
          </motion.div>
       </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg-primary pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2 space-y-6">
             <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img 
                    src="/logo.png" 
                    alt="M-System Logo" 
                    className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(216,162,74,0.4)]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg width='48' height='48' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='48' height='48' rx='12' fill='%23D8A24A'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='24' font-weight='bold' fill='%230B0B0B' text-anchor='middle' dominant-baseline='middle'%3EM%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <span className="font-heading font-bold text-xl tracking-tight text-white">M-System</span>
             </div>
             <p className="text-text-muted text-sm max-w-xs leading-relaxed">
               Automatização e organização para empresas modernas alcançarem o seu potencial máximo.
             </p>
             <div className="flex gap-4">
               {/* Social Icons Placeholder */}
               {['TW', 'LN', 'IN'].map(social => (
                 <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs font-semibold text-text-muted hover:text-brand-gold hover:border-brand-gold/50 transition-colors">
                   {social}
                 </a>
               ))}
             </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Produto</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li><a href="#features" className="hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Benefícios</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Clientes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li><a href="#about" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#cta" className="hover:text-white transition-colors">Solicitar Demonstração</a></li>
              <li><a href="mailto:carthagemauricio@gmail.com" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
           <p className="text-xs text-text-muted">© {new Date().getFullYear()} M-System. Todos os direitos reservados.</p>
           <div className="flex items-center gap-6 text-xs text-text-muted">
              <a href="#" className="hover:text-white transition-colors">Moçambique (PT)</a>
           </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-main font-sans selection:bg-brand-gold/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Benefits />
        <Founder />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
