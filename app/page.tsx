'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WaitlistModal } from '@/components/WaitlistModal';
import { AnimatedHeroText } from '@/components/AnimatedHeroText';
import { SocialProofWidget } from '@/components/SocialProofWidget';
import { InfiniteLogoTicker } from '@/components/InfiniteLogoTicker';
import { ConversionChart } from '@/components/ConversionChart';
import { ComparisonSection } from '@/components/ComparisonSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { 
  ArrowRight, 
  CheckCircle2, 
  Target,
  Zap, 
  ShieldCheck, 
  Search,
  Star,
  Activity,
  ChevronDown,
  Users,
  AlertCircle,
  TrendingDown,
  Clock,
  Rocket,
  MonitorSmartphone,
  LayoutDashboard,
  MessageSquare,
  Gem,
  Command,
  Hexagon,
  Triangle,
  Leaf,
  Ghost,
  Wallet,
  Hourglass,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: "Was bedeutet das Leasing-Modell genau?",
    answer: "Statt viel Geld auf einmal für eine neue Website zu zahlen, mietest du deine professionelle Website bei uns für eine feste monatliche Rate. Das Beste daran: Hosting, Wartung, Updates und Support sind bereits inklusive. Du hast keine versteckten Kosten und die volle Sicherheit."
  },
  {
    question: "Warum nutzt ihr keine Standard-Baukästen wie WordPress?",
    answer: "Gewöhnliche Baukästen sind oft langsam, fehleranfällig und schwer zu bedienen. Wir entwickeln deine Website mit modernster, handgeschriebener Technologie. Das Ergebnis: Blitzschnelle Ladezeiten, besserer Schutz vor Hackern und ein Design, das perfekt zu dir passt und deine Kunden überzeugt."
  },
  {
    question: "Wie lange dauert es, bis die neue Seite online ist?",
    answer: "Dank unserer bewährten und strukturierten Methode benötigen wir für die meisten Websites nur etwa 2 bis 4 Wochen vom ersten Gespräch bis zum fertigen Start der Homepage."
  },
  {
    question: "Zahle ich extra, wenn ich Änderungen möchte?",
    answer: "Nein. In deinem monatlichen Tarif sind kleine inhaltliche Anpassungen sowie alle wichtigen Sicherheitsupdates komplett abgedeckt. Du bist bestens versorgt."
  },
  {
    question: "Was passiert, wenn ich kündigen möchte?",
    answer: "Du bleibst stets flexibel. Nach einer kurzen Mindestlaufzeit kannst du monatlich kündigen. Wenn du gehst, nimmst du die Seite einfach vom Netz – oder du entscheidest dich, sie zu einem fairen, vorher festgelegten Festpreis komplett zu übernehmen."
  }
];

// Reusable animation variants
const fadeInUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const testimonialsData = [
  { quote: "Seit wir Revela nutzen, haben wir deutlich mehr qualifizierte Anfragen in unserem Postfach. Das Leasingmodell ist für uns perfekt – keine riesigen Vorabkosten und man muss sich um nichts kümmern.", name: "Sven Krause", role: "Geschäftsführer, Krause Heiztechnik", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop" },
  { quote: "Endlich ein Partner, der mitdenkt! Änderungen gehen blitzschnell über das Portal, und die Seite lädt so extrem schnell, dass auch unser Google-Ranking spürbar besser wurde.", name: "Laura Weber", role: "Inhaberin, Weber Immobilien", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop" },
  { quote: "Unsere alte Homepage war eine einzige Baustelle. Revela hat uns da herausgeholt. Wir zahlen einen fairen, fixen Preis im Monat und die Seite sieht einfach aus wie eine hochpreisige Produktion.", name: "Marc Tessmer", role: "Gründer", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" },
  { quote: "Das persönliche Onboarding und die unfassbar schnelle Umsetzung (unter 3 Wochen) haben mich komplett überzeugt. Ich kann dieses Modell jedem Unternehmer wärmstens empfehlen.", name: "Dr. Elena Schmidt", role: "Praxisleitung", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop" },
  { quote: "Transparenz und Expertise. Bei Revela weiß ich genau, was ich zahle und was ich an hochklassigem Service dafür bekomme. Ein Gamechanger für unseren digitalen Vertrieb.", name: "Johannes Koch", role: "CEO, Koch Logistics", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop" },
  { quote: "Als wir von Baukastensystemen auf das Maß-Design von Revela umgestellt haben, stieg unsere Conversion-Rate enorm. Das Investment macht sich absolut bezahlt.", name: "Michelle Drechsler", role: "Senior Consultant", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop" }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isYearly, setIsYearly] = useState(true);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-slate-900 selection:bg-rose-500/30">
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>
      </svg>
      <Header />
      <WaitlistModal />
      <SocialProofWidget />
      
      <main className="flex-grow overflow-hidden relative">
        {/* Subtle dot matrix background for SaaS feel */}
        <div className="absolute inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-16 pb-24 lg:pt-32 lg:pb-40 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="flex-1 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-500 to-purple-600"></span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Premium Web-Leasing Agentur
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl lg:text-7xl font-sans font-bold tracking-tight text-slate-900 leading-[1.1] mb-6"
              >
                Du hast eine Website. 
                <span className="block mt-2"><AnimatedHeroText /></span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed"
              >
                Schluss mit langsamen Baukasten-Seiten und überteuerten Rechnungen von Agenturen. Miete eine professionelle, moderne Website, die nachweislich Kunden gewinnt – Wartung und Support sind bereits inklusive.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <Link 
                  href="#warteliste"
                  className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-slate-800 transition-all duration-200 flex items-center justify-center gap-2 group shadow-md shadow-slate-900/10"
                >
                  Auf die Warteliste
                  <span className="bg-rose-500 text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ml-1">-15% für early birds</span>
                </Link>
                <Link 
                  href="#preise"
                  className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-lg font-semibold text-base hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 flex items-center justify-center"
                >
                  Preise ansehen
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500"
              >
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-400" />
                  <span>Monatlich kündbar</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-400" />
                  <span>0€ Setup-Kosten</span>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 w-full relative"
            >
              <div className="aspect-[4/3] w-full bg-slate-50 rounded-2xl border border-slate-200 shadow-xl overflow-hidden relative">
                <div className="absolute top-0 inset-x-0 h-10 border-b border-slate-200 bg-white flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/20"></div>
                  <div className="ml-4 h-5 w-48 bg-slate-100 rounded-md"></div>
                </div>
                <div className="p-8 pt-16 h-full flex flex-col gap-6">
                  <div className="flex gap-6">
                    <div className="w-1/3 h-32 bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col justify-between">
                      <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center">
                        <Activity className="w-4 h-4 text-rose-500" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">+700%</div>
                        <div className="text-xs text-slate-500">Conversion</div>
                      </div>
                    </div>
                    <div className="w-2/3 h-32 bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col gap-3">
                      <div className="h-4 w-1/4 bg-slate-100 rounded"></div>
                      <div className="h-2 w-full bg-slate-50 rounded"></div>
                      <div className="h-2 w-full bg-slate-50 rounded"></div>
                      <div className="h-2 w-3/4 bg-slate-50 rounded"></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-rose-500/5 to-purple-600/5 rounded-xl border border-slate-100 shadow-sm p-6 flex flex-col justify-end">
                    <div className="w-full h-1/2 flex items-end gap-2">
                      {[40, 60, 45, 80, 55, 90, 75, 100].map((height, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-purple-600/40 to-rose-500/40 rounded-t-sm" style={{ height: `${height}%` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-rose-500 to-purple-600 blur-[80px] opacity-30 -z-10"></div>
            </motion.div>

          </div>
        </section>

        {/* --- TRUST SECTION --- */}
        <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 text-center mb-8">
            <h6 className="text-[11px] md:text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase">
              Die erste Wahl für über 150+ ambitionierte Unternehmen
            </h6>
          </div>
          <InfiniteLogoTicker />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        </section>

        {/* --- PROBLEM AGITATION SECTION --- */}
        <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden" id="probleme">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 30 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }} 
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-slate-900 tracking-tight mb-6">
                Warum deine aktuelle Website heimlich Geld verbrennt.
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Du verlierst jeden Tag potenzielle Kunden an die Konkurrenz, ohne es überhaupt zu bemerken. Das sind die drei größten Wachstums-Bremsen.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Ghost className="w-6 h-6 text-indigo-600" />,
                  iconBg: "bg-indigo-50 border-indigo-100",
                  title: 'Das teure Geisterschloss',
                  desc: 'Deine Website sieht vielleicht nett aus, aber generiert null echte Anfragen. Jeder Tag ohne Traffic ist verschwendetes Potenzial und treibt Interessenten direkt zu deinen Mitbewerbern.',
                },
                {
                  icon: <Hourglass className="w-6 h-6 text-rose-500" />,
                  iconBg: "bg-rose-50 border-rose-100",
                  title: 'Die Baukasten-Hölle',
                  desc: 'Ewig lange Ladezeiten, ständige Updates und ein System, das bei jeder Änderung zerschießt. Weißt du, dass 53% deiner Besucher sofort abspringen, wenn die Seite länger als 3 Sekunden lädt?',
                },
                {
                  icon: <Wallet className="w-6 h-6 text-amber-600" />,
                  iconBg: "bg-amber-50 border-amber-100",
                  title: 'Die Agentur-Geiselhaft',
                  desc: 'Du hast 5.000€+ vorab gezahlt und bist jetzt abhängig. Die Agentur ist schwer erreichbar, deine Seite veraltet langsam und für jede winzige Textänderung darfst du wieder extra zahlen.',
                }
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }} 
                  className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center border ${card.iconBg} group-hover:scale-110 transition-transform duration-300 relative`}>
                    {card.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{card.title}</h4>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* --- THE SOLUTION / METHOD --- */}
        <section className="py-24 lg:py-32 bg-white relative border-t border-slate-200">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div variants={fadeInUp} className="order-2 lg:order-1 relative w-full aspect-square md:aspect-auto md:h-[600px] bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex items-center justify-center p-6 md:p-12 shadow-inner">
                <div className="relative z-10 bg-white rounded-xl p-8 shadow-sm border border-slate-200 w-full max-w-md">
                  <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
                    <h5 className="font-semibold text-slate-900 text-lg">Ergebnisse</h5>
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between mb-2">
                         <span className="text-sm font-medium text-slate-500">Mtl. Besucher</span>
                         <span className="text-sm font-semibold text-slate-900">+45%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-900 w-[78%] rounded-full"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                         <span className="text-sm font-medium text-slate-500">Conversion Rate</span>
                         <span className="text-sm font-semibold text-slate-900">+120%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-900 w-[55%] rounded-full"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                         <span className="text-sm font-medium text-slate-500">Qualifizierte Leads</span>
                         <span className="text-sm font-semibold text-slate-900">42 diesen Monat</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-900 w-[85%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="order-1 lg:order-2">
                <h3 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight mb-6">
                  Mieten statt teuer kaufen.
                </h3>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  Vergiss hohe Einmalzahlungen. Wir haben den Markt umgekrempelt: Bei uns bekommst du eine moderne, hochwertige Website im bequemen Abo. Wir kümmern uns um die komplizierte Technik und halten alles am Laufen.
                </p>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <Search className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">1. Gemeinsamer Plan</h4>
                      <p className="text-slate-600">Wir analysieren exakt, wonach deine Kunden suchen und strukturieren die Seite entsprechend.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <Gem className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">2. Hochwertiges Design</h4>
                      <p className="text-slate-600">Individuelles, conversion-optimiertes Design. Blitzschnell und perfekt für alle Endgeräte.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <ShieldCheck className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">3. Mieten & entspannen</h4>
                      <p className="text-slate-600">Sicherheit, Hosting und Updates laufen vollautomatisch im Hintergrund ohne dein Zutun.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* --- STATISTICS / ROI SECTION --- */}
        <section className="py-24 lg:py-32 bg-slate-900 relative border-t border-slate-800 text-white overflow-hidden">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              <motion.div variants={fadeInUp}>
                <h3 className="text-3xl md:text-4xl font-sans font-bold tracking-tight mb-6">
                  Eine Webseite, die sich selbst bezahlt macht.
                </h3>
                <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                  Viele Unternehmer sehen eine Website als Kostenblock. Wir sehen sie als deinen härtesten Mitarbeiter. 
                  Durch psychologisch optimiertes Design, rasante Ladezeiten und klare Conversion-Pfade steigen deine Anfragen drastisch an.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-bold text-slate-200 text-3xl mb-1"><AnimatedCounter to={65} prefix="-" suffix="%" /></h5>
                    <p className="text-slate-400 text-sm">Absprungrate sinkt</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-200 text-3xl mb-1"><AnimatedCounter to={120} prefix="+" suffix="%" /></h5>
                    <p className="text-slate-400 text-sm">Interaktionsrate</p>
                  </div>
                  <div className="sm:col-span-2">
                    <h5 className="font-bold text-white text-4xl mb-2"><AnimatedCounter to={700} prefix="Bis zu +" suffix="%" /> Leads</h5>
                    <p className="text-slate-400">Mehr messbare Kundenanfragen aus dem selben Traffic.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative h-[400px] w-full rounded-xl bg-slate-800 border border-slate-700 p-6 md:p-8 flex flex-col shadow-2xl">
                <div className="flex justify-between items-center mb-8 border-b border-slate-700 pb-6">
                  <div>
                    <h4 className="text-lg font-bold text-white">Conversion-Gate</h4>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Alt</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-500 to-purple-500"></div>
                      <span className="text-xs font-semibold text-white uppercase tracking-wider">Neu</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full relative">
                  <ConversionChart />
                </div>
              </motion.div>
              
            </div>
          </motion.div>
        </section>

        {/* --- HOW IT FEELS (BENEFITS BENTO) --- */}
        <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 mb-6">
                Wir machen die Technik.<br className="hidden md:block"/>
                Du dominierst den Markt.
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Vergiss frustrierende Baukästen und unzuverlässige Freelancer. Du erhältst ein hochkonvertierendes System, das Tag und Nacht für dich arbeitet.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Item 1: Design */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                  <MonitorSmartphone className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">Premium Custom Design</h4>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Wir kreieren maßgeschneiderte Erlebnisse statt 08/15-Vorlagen. Hochwertig, modern und exakt auf deine Zielgruppe zugeschnitten. Dein Auftritt strahlt sofortige Autorität aus.
                </p>
              </div>

              {/* Item 2: Speed */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-amber-200 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50/50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">Lichtgeschwindigkeit</h4>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Jede Millisekunde zählt. Unsere Architektur garantiert blitzschnelle Ladezeiten – Google liebt das, und deine Nutzer noch mehr.
                </p>
              </div>

              {/* Item 3: Security & Flatrate */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">Sorglos-Flatrate (DSGVO)</h4>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Lehn dich zurück. Inklusive Domain, E-Mail, rechtssicherem Cookie-Banner und SSL. Updates und Backups laufen unsichtbar im Hintergrund.
                </p>
              </div>

              {/* Item 4: Conversion & SEO */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-emerald-200 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">Psychologie & Lokales SEO</h4>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Kein blindes Raten. Jedes Element ist strategisch auf Neukundengewinnung optimiert. Dank modernsten SEO-Standards wirst du in deiner Region optimal auf Google gefunden.
                </p>
              </div>

              {/* Item 5: Portal */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-purple-200 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50/50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  <LayoutDashboard className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">Exklusives Kundenportal</h4>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Behalte die volle Kontrolle. In deinem Dashboard verwaltest du Rechnungen, forderst mit einem Klick Änderungen an und überblickst deinen Traffic.
                </p>
              </div>

              {/* Item 6: Ansprechpartner */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-rose-200 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50/50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-6 group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">Dein Tech-Partner</h4>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Keine anonymen Support-Tickets oder Hotlines. Du bekommst einen direkten, persönlichen Ansprechpartner, der dein Projekt in- und auswendig kennt.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* --- COMPARISON --- */}
        <ComparisonSection />

        {/* --- TESTIMONIALS --- */}
        <section className="py-24 lg:py-32 bg-white border-t border-slate-200 overflow-hidden" id="referenzen">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
              <h3 className="text-4xl md:text-5xl font-sans font-bold text-slate-900 tracking-tight mb-6">
                Kunden, die uns<br/>vertrauen.
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed">
                Echte Ergebnisse von echten Unternehmen. Erfahre, wie unsere Partner mit dem richtigen Web‑Layout exponentiell gewachsen sind.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="relative max-w-5xl mx-auto">
              <div className="relative overflow-hidden px-4 md:px-16 py-8 h-auto min-h-[400px] md:min-h-[340px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonialIndex}
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95, x: -20 }}
                    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    className="w-full flex items-center justify-center"
                  >
                    <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 w-full flex flex-col md:flex-row gap-8 md:gap-12 items-center relative group shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-500">
                      
                      {/* Decorative quote mark */}
                      <div className="absolute top-8 left-8 text-8xl text-indigo-50 font-serif leading-none select-none -z-0">
                        &quot;
                      </div>

                      <div className="flex-shrink-0 text-center md:text-left flex flex-col items-center md:items-start z-10 w-full md:w-1/3">
                        <div className="relative mb-6">
                          <Image 
                            src={testimonialsData[currentTestimonialIndex].img} 
                            alt={testimonialsData[currentTestimonialIndex].name} 
                            width={112}
                            height={112}
                            className="w-28 h-28 rounded-full object-cover ring-4 ring-white shadow-md z-10 relative" 
                          />
                          <div className="absolute inset-0 rounded-full bg-indigo-500 blur-xl opacity-20 -z-10 transform scale-110"></div>
                        </div>
                        <div className="font-bold text-2xl text-slate-900 mb-1">{testimonialsData[currentTestimonialIndex].name}</div>
                        <div className="text-sm text-indigo-600 font-semibold mb-4 uppercase tracking-wider">{testimonialsData[currentTestimonialIndex].role}</div>
                        <div className="flex items-center gap-1">
                          {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-sm" />)}
                        </div>
                      </div>

                      <div className="flex-1 relative z-10 text-center md:text-left">
                        <p className="text-slate-700 text-xl md:text-2xl leading-relaxed md:leading-normal font-medium">
                          {testimonialsData[currentTestimonialIndex].quote}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-4 md:px-16 mt-8">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-50 hover:shadow-md hover:border-slate-300 transition-all group"
                    aria-label="Vorherige Referenz"
                  >
                    <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-50 hover:shadow-md hover:border-slate-300 transition-all group"
                    aria-label="Nächste Referenz"
                  >
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
                
                <div className="flex gap-2">
                  {testimonialsData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTestimonialIndex(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${currentTestimonialIndex === idx ? 'bg-slate-900 w-8' : 'bg-slate-200 w-2.5 hover:bg-slate-400'}`}
                      aria-label={`Gehe zu Referenz ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* --- HOW IT WORKS --- */}
        <HowItWorksSection />

        {/* --- PRICING --- */}
        <section id="preise" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden border-t border-slate-200">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-slate-900 tracking-tight mb-6">
                Ein System, das sich selbst bezahlt macht.
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Keine versteckten Gebühren. Keine bösen Überraschungen. Wähle das Setup, das dir den maximalen Hebel für dein aktuelles Wachstum gibt.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex justify-center mb-16 relative z-20">
              <div className="bg-white p-1 rounded-lg inline-flex items-center shadow-sm border border-slate-200">
                <button 
                  onClick={() => setIsYearly(false)}
                  className={`px-8 py-3 rounded-md font-semibold text-sm transition-all duration-200 ${!isYearly ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Monatlich kündbar
                </button>
                <button 
                  onClick={() => setIsYearly(true)}
                  className={`px-8 py-3 rounded-md font-semibold text-sm transition-all duration-200 flex items-center gap-2 ${isYearly ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Jährlich
                  <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider transition-colors ${isYearly ? 'bg-white/20 text-white' : 'bg-rose-100 text-rose-700'}`}>
                    -15%
                  </span>
                </button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
              
              {/* Start Plan */}
              <motion.div 
                className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col relative"
              >
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Start</h4>
                <p className="text-slate-600 mb-8 min-h-[48px]">Für lokale Betriebe, die modern auftreten wollen.</p>
                
                <div className="mb-8">
                  <div className="flex items-end gap-1 mb-2">
                    {isYearly && <span className="text-lg font-medium text-slate-400 line-through mb-1">359€</span>}
                    <span className="text-4xl font-bold text-slate-900 tracking-tight">{isYearly ? '249€' : '359€'}</span>
                    <span className="text-slate-600 font-medium pb-1">/ mo</span>
                  </div>
                  {isYearly ? (
                    <div className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded inline-block">0€ Setup-Gebühr</div>
                  ) : (
                    <div className="text-sm text-slate-500">+ Einmalige Setup-Gebühr</div>
                  )}
                </div>
                
                <Link href="#warteliste" className="w-full py-3 mb-8 rounded-lg font-semibold text-slate-900 bg-white border border-slate-300 hover:bg-slate-50 transition-colors text-center">
                  Plan wählen
                </Link>

                <div className="h-px bg-slate-100 w-full mb-8"></div>
                
                <ul className="space-y-4 flex-1">
                  {[
                    "1 Landingpage + bis zu 3 Unterseiten",
                    "1 klarer CTA (Kontakt/Buchung)",
                    "Responsive Design & Basic SEO",
                    "Premium Hosting & SSL-Zertifikat",
                    "Wartung & Sicherheits-Updates",
                    "Bis zu 10 inhaltliche Änderungen / Monat"
                  ].map((f,i)=>(
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Growth Plan */}
              <motion.div 
                className="bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-xl transition-shadow duration-300 flex flex-col relative text-white md:-mt-4 md:mb-4"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-rose-500 to-purple-600 rounded-t-xl"></div>
                
                <h4 className="text-2xl font-bold mb-2">Growth</h4>
                <p className="text-slate-400 mb-8 min-h-[48px]">Für Unternehmen, die Skalierung und mehr Sichtbarkeit wollen.</p>
                
                <div className="mb-8">
                  <div className="flex items-end gap-1 mb-2">
                    {isYearly && <span className="text-lg font-medium text-slate-500 line-through mb-1">549€</span>}
                    <span className="text-4xl font-bold tracking-tight">{isYearly ? '449€' : '549€'}</span>
                    <span className="text-slate-400 font-medium pb-1">/ mo</span>
                  </div>
                  {isYearly ? (
                    <div className="text-sm font-semibold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-1 rounded inline-block">0€ Setup-Gebühr</div>
                  ) : (
                    <div className="text-sm text-slate-400">+ Einmalige Setup-Gebühr</div>
                  )}
                </div>
                
                <Link href="#warteliste" className="w-full py-3 mb-8 rounded-lg font-semibold text-white bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 transition-colors text-center">
                  Beliebteste Wahl
                </Link>

                <div className="h-px bg-slate-800 w-full mb-8"></div>
                
                <ul className="space-y-4 flex-1">
                  {[
                    "Bis zu 8 Unterseiten",
                    "Erweiterte SEO-Optimierung",
                    "Google Analytics & Cookie-Banner",
                    "Bis zu 25 inhaltliche Änderungen / Monat",
                    "Vorrangiger Support (SLA)",
                    "Alles aus dem Start-Plan"
                  ].map((f,i)=>(
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Custom Plan */}
              <motion.div 
                className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col relative"
              >
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Custom</h4>
                <p className="text-slate-600 mb-8 min-h-[48px]">Für sehr spezifische Logik, Portale oder große E-Commerce Projekte.</p>
                
                <div className="mb-8">
                  <div className="flex items-end gap-1 h-11 mb-2">
                    <span className="text-3xl font-bold text-slate-900 tracking-tight">Individuell</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded inline-block">Nach Scoping</div>
                </div>
                
                <Link href="#warteliste" className="w-full py-3 mb-8 rounded-lg font-semibold text-slate-900 bg-white border border-slate-300 hover:bg-slate-50 transition-colors text-center">
                  Kontakt aufnehmen
                </Link>

                <div className="h-px bg-slate-100 w-full mb-8"></div>
                
                <ul className="space-y-4 flex-1">
                  {[
                    "Maßgeschneiderte Web-Applikation",
                    "API/CRM-Integrationen",
                    "Benutzer-Logins & Dashboards",
                    "Unbegrenzte Seiten",
                    "Eigener Tech-Lead & Consulting"
                  ].map((f,i)=>(
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

            </motion.div>
            
            <motion.div variants={fadeInUp} className="mt-12 text-center max-w-3xl mx-auto">
              <p className="text-sm text-slate-500 flex flex-col md:flex-row items-center justify-center gap-2 text-left">
                <AlertCircle className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Alle Preise zzgl. MwSt. Die Live-Schaltung der Webseite erfolgt nach finaler Abnahme aller Inhalte.</span>
              </p>
            </motion.div>

          </motion.div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="py-24 bg-white relative">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-sans text-slate-900 tracking-tight mb-4">Noch Fragen?</h2>
              <p className="text-lg text-slate-600">Wir haben die wichtigsten Antworten hier zusammengefasst.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="space-y-3">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 bg-white`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-slate-50"
                  >
                    <span className={`font-semibold text-lg pr-8 text-slate-900`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-rose-500' : 'text-slate-400'}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
            
            <motion.div variants={fadeInUp} className="mt-12 text-center">
              <Link href="/faq" className="inline-flex items-center gap-2 border-b-2 border-slate-900 text-slate-900 font-bold hover:text-rose-600 hover:border-rose-600 pb-1 transition-colors">
                Weitere Fragen ansehen <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* --- FINAL CTA SECTION --- */}
        <section className="py-24 bg-slate-50 relative px-4 border-t border-slate-200">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-slate-900 rounded-2xl p-12 md:p-16 text-center shadow-lg flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6">Bist du bereit für deinen neuen Auftritt?</h2>
              <p className="text-lg text-slate-300 mb-10 max-w-2xl text-center leading-relaxed">
                Lass uns unverbindlich sprechen. Wir klären alle offenen Fragen und prüfen gemeinsam, ob unser Leasingmodell zu deinem Geschäft passt.
              </p>
              <Link 
                href="#warteliste"
                className="bg-white text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-slate-100 transition-colors inline-flex items-center gap-3"
              >
                <span>Auf die Warteliste eintragen</span>
                <span className="bg-rose-100 text-rose-700 text-xs font-bold px-2.5 py-1 rounded-full">-15% sichern</span>
              </Link>
            </div>
          </motion.div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
