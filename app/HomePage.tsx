'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WaitlistModal } from '@/components/WaitlistModal';
import { AnimatedHeroText } from '@/components/AnimatedHeroText';
import { SocialProofWidget } from '@/components/SocialProofWidget';
import { InfiniteLogoTicker } from '@/components/InfiniteLogoTicker';
import dynamic from 'next/dynamic';
import { ComparisonSection } from '@/components/ComparisonSection';
import { PromoCodeModal } from '@/components/PromoCodeModal';
import { LeadPopup } from '@/components/LeadPopup';

const ConversionChart = dynamic(() => import('@/components/ConversionChart').then(mod => mod.ConversionChart), { ssr: false });

import { HowItWorksSection } from '@/components/HowItWorksSection';
import { CustomerPortalSection } from '@/components/CustomerPortalSection';
import { PageSpeedSection } from '@/components/PageSpeedSection';
import { CustomerProjects } from '@/components/CustomerProjects';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { HeroInteractiveDashboard } from '@/components/HeroInteractiveDashboard';
import { 
  ArrowRight, 
  CheckCircle2, 
  Target,
  Zap, 
  ShieldCheck, 
  Search,
  Star,
  ChevronDown,
  AlertCircle,
  MonitorSmartphone,
  LayoutDashboard,
  MessageSquare,
  Gem,
  Command,
  Hexagon,
  Triangle,
  Ghost,
  Wallet,
  Hourglass,
  ChevronRight,
  ChevronLeft,
  X,
  BarChart3
} from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: "Was kostet das genau - und was ist inklusive?",
    answer: "Die Pakete starten ab 149 € im Monat (Essential). Darin enthalten sind: professionelles Website-Design, Hosting, Domain-Verwaltung, SSL-Zertifikat, Impressum und Datenschutz, laufende Wartung sowie Änderungsanfragen über unser Kundenportal. Es gibt keine Setup-Gebühr und kein Einmalinvestment. Du zahlst monatlich - das war's."
  },
  {
    question: "Wie lange dauert es bis meine Website live ist?",
    answer: "Nach vollständigem Ausfüllen des Onboarding-Formulars bauen wir deine Website in 2-3 Werktagen. Inklusive Feedback-Runden und finaler Freigabe ist deine Website in der Regel nach maximal 7 Tagen live."
  },
  {
    question: "Gehört mir die Website - oder nicht?",
    answer: "Die Website gehört dir nicht im klassischen Sinne - du least sie, ähnlich wie ein Geschäftsauto. Du nutzt sie vollständig und professionell so lange du Kunde bist. Das ist der Grund warum kein großes Einmalinvestment fällig ist. Wenn du kündigst, wird die Website offline gestellt. Deine Inhalte und Texte gehören dir natürlich jederzeit."
  },
  {
    question: "Kann ich jederzeit kündigen?",
    answer: "Du wählst beim Start eine Mindestlaufzeit von 12 oder 24 Monaten. Danach ist monatlich kündbar. Je länger die gewählte Laufzeit, desto günstiger der monatliche Preis. Eine Kündigung vor Ablauf der Mindestlaufzeit ist nicht möglich."
  },
  {
    question: "Ich bin nicht technikaffin - funktioniert das trotzdem für mich?",
    answer: "Genau dafür wurde VANICY gebaut. Du musst nichts über Websites, Hosting oder Technik wissen. Du füllst unser Onboarding-Formular aus - wir bauen alles. Änderungen beantragst du einfach über unser Kundenportal. Kein E-Mail-Chaos, kein Technikstress."
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
  { quote: "Die Seite war durchgehend online und wir mussten uns um absolut nichts kümmern. Wenn man bedenkt dass solche individuellen Websites bei anderen Agenturen locker mehrere tausend Euro kosten und dann oft nur halb so gut umgesetzt werden, ist das Angebot hier einfach unschlagbar. Ich kann VANICY jedem Unternehmen uneingeschränkt empfehlen. Großartige und professionelle Arbeit!", name: "Willi Hecht", role: "CEO Lemuria Bay", img: "/WilliBild.jpeg" },
  { quote: "Seit wir VANICY nutzen, haben wir deutlich mehr qualifizierte Anfragen in unserem Postfach. Das Leasingmodell ist für uns perfekt - keine riesigen Vorabkosten und man muss sich um nichts kümmern.", name: "Sven Krause", role: "Geschäftsführer, Krause Heiztechnik", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop" }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [term, setTerm] = useState<12 | 24>(24);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState('');

  const problems = [
    {
      icon: <Ghost className="w-6 h-6 text-indigo-600" />,
      iconBg: "bg-indigo-50 border-indigo-100",
      title: 'Das teure Geisterschloss',
      desc: 'Deine Website sieht vielleicht nett aus, aber generiert null echte Anfragen. Jeder Tag ohne Traffic ist verschwendetes Potenzial und treibt Interessenten direkt zu deinen Mitbewerbern.',
      fullText: "Viele Designer bauen hübsche digitale Broschüren, verstehen aber nichts von Verkaufspsychologie oder Conversion-Optimierung. Das Ergebnis: Eine Website, die zwar toll aussieht, aber keine Besucher in Kunden verwandelt. Du verlierst jeden Tag bares Geld an Mitbewerber, die vielleicht eine schlechtere Leistung, aber eine besser konvertierende Website haben.",
      stats: "96% der Website-Besucher sind noch nicht bereit zu kaufen. Ohne klare Funnel und Lead-Magnets verlierst du sie für immer.",
      Visual: () => (
        <div className="w-full h-48 md:h-56 bg-slate-50 rounded-2xl flex items-center justify-center relative overflow-hidden border border-slate-200 p-6 mb-8">
          <div className="w-full h-full flex items-end justify-center gap-2 md:gap-6 pb-2">
            <div className="flex flex-col items-center">
              <motion.div initial={{ height: 0 }} animate={{ height: 120 }} transition={{ duration: 1 }} className="w-16 md:w-24 bg-slate-300 rounded-t-lg relative">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="absolute inset-0 flex items-center justify-center text-slate-600 font-bold text-xs md:text-sm">100%</motion.div>
              </motion.div>
              <span className="text-[10px] md:text-xs font-bold text-slate-500 mt-2 block whitespace-nowrap">1000 Besucher</span>
            </div>
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="flex pb-10">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-slate-300" />
            </motion.div>
            <div className="flex flex-col items-center">
              <motion.div initial={{ height: 0 }} animate={{ height: 115 }} transition={{ duration: 1, delay: 1 }} className="w-16 md:w-24 bg-rose-400 rounded-t-lg relative">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs md:text-sm">96%</motion.div>
              </motion.div>
              <span className="text-[10px] md:text-xs font-bold text-slate-500 mt-2 block whitespace-nowrap">Abbruch</span>
            </div>
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2 }} className="flex pb-10">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-slate-300" />
            </motion.div>
            <div className="flex flex-col items-center">
              <motion.div initial={{ height: 0 }} animate={{ height: 10 }} transition={{ duration: 1, delay: 2 }} className="w-16 md:w-24 bg-indigo-500 rounded-t-lg relative mt-auto">
                <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }} className="absolute -top-6 left-1/2 -translate-x-1/2 text-indigo-600 font-bold text-xs md:text-sm whitespace-nowrap">4%</motion.div>
              </motion.div>
              <span className="text-[10px] md:text-xs font-bold text-indigo-600 mt-2 block whitespace-nowrap">Anfragen</span>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <Hourglass className="w-6 h-6 text-rose-500" />,
      iconBg: "bg-rose-50 border-rose-100",
      title: 'Die Baukasten-Hölle',
      desc: 'Ewig lange Ladezeiten, ständige Updates und ein System, das bei jeder Änderung zerschießt. Weißt du, dass 53% deiner Besucher sofort abspringen, wenn die Seite länger als 3 Sekunden lädt?',
      fullText: "Wix, Squarespace oder günstiges WordPress-Hosting: Am Anfang sparen sie Geld, später fressen sie deine gesamte Zeit. Wenn du selbst Plugins updaten musst, Ladezeiten im roten Bereich liegen und mobile Layouts zerschossen sind, leiden deine Google-Rankings und deine Conversions massiv. Ein CEO sollte keine Plugins aktualisieren.",
      stats: "Mit jeder Sekunde längerer Ladezeit sinkt die Conversion-Rate um bis zu 20%.",
      Visual: () => (
        <div className="w-full h-48 md:h-56 bg-slate-900 rounded-2xl flex items-center justify-center relative overflow-hidden border border-slate-800 p-6 mb-8">
          <div className="absolute inset-0 flex items-center justify-center mix-blend-screen opacity-20">
             <div className="w-[200%] h-[200%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50"></div>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 rounded-full border-4 border-slate-700 border-t-rose-500 border-r-rose-500 mb-6 flex items-center justify-center"
            >
              <Hourglass className="w-8 h-8 text-rose-500" />
            </motion.div>
            <div className="flex items-center gap-4 text-white font-mono flex-col">
               <span className="text-slate-400 text-sm">Ladezeit (Sekunden)</span>
               <div className="flex gap-2 text-2xl font-black">
                 <motion.span initial={{ opacity: 1, color: "#fff" }} animate={{ opacity: 0.5, color: "#f43f5e" }} transition={{ duration: 0.5, delay: 1 }}>0.5</motion.span>
                 <span className="text-slate-600">-</span>
                 <motion.span initial={{ opacity: 1, color: "#fff" }} animate={{ opacity: 0.5, color: "#f43f5e" }} transition={{ duration: 0.5, delay: 2 }}>1.2</motion.span>
                 <span className="text-slate-600">-</span>
                 <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1.2, color: "#f43f5e" }} transition={{ duration: 0.5, delay: 3 }}>4.8s!</motion.span>
               </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <Wallet className="w-6 h-6 text-amber-600" />,
      iconBg: "bg-amber-50 border-amber-100",
      title: 'Die Agentur-Geiselhaft',
      desc: 'Du hast 5.000€+ vorab gezahlt und bist jetzt abhängig. Die Agentur ist schwer erreichbar, deine Seite veraltet langsam und für jede winzige Textänderung darfst du wieder extra zahlen.',
      fullText: "Der Klassiker: Du zahlst eine horrende Summe für die Erstellung, aber nach dem Live-Gang endet die Betreuung. Deine Website veraltet, neue Kampagnen lassen sich nur schwer integrieren, und für jede kleine Textänderung oder Erweiterung flattern Rechnungen ins Haus. Du bist gefangen in einem starren System ohne Flexibilität für schnelles Wachstum.",
      stats: "Traditionelle Agenturprojekte sind im Schnitt nach 18 Monaten technisch veraltet.",
      Visual: () => (
        <div className="w-full h-48 md:h-56 bg-amber-50 rounded-2xl flex items-center justify-center relative overflow-hidden border border-amber-100 p-6 mb-8 group">
          <div className="relative flex gap-8 items-center w-full max-w-sm">
            <motion.div 
               className="bg-white p-4 rounded-xl shadow-md border border-slate-200 flex-1 relative"
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.5 }}
            >
              <div className="w-full h-2 bg-slate-100 rounded-full mb-3 hidden md:block"></div>
              <div className="w-3/4 h-2 bg-slate-100 rounded-full mb-4 hidden md:block"></div>
              <div className="w-full flex justify-between items-center text-xs text-slate-400 font-mono border-t border-slate-100 pt-2">
                <span>RECHNUNG</span>
                <span className="text-rose-500 font-bold">+180€ / Std</span>
              </div>
            </motion.div>
            
            <motion.div 
               className="bg-white p-4 rounded-xl shadow-lg border border-slate-200 flex-1 relative -ml-16 mt-8 z-10"
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="w-full h-2 bg-slate-100 rounded-full mb-3 hidden md:block"></div>
              <div className="w-1/2 h-2 bg-amber-100 rounded-full mb-4 hidden md:block"></div>
              <div className="w-full flex justify-between items-center text-xs text-slate-400 font-mono border-t border-slate-100 pt-2">
                <span>WARTUNG</span>
                <span className="text-rose-500 font-bold">+450€ / Mo</span>
              </div>
            </motion.div>
            
            <motion.div 
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white rounded-xl shadow-2xl p-4 font-mono z-20"
               initial={{ scale: 0.5, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ type: "spring", delay: 1 }}
            >
              <div className="text-xs text-slate-400 mb-1">Total sunk cost:</div>
              <div className="text-xl md:text-3xl font-black text-rose-400">12.450 €</div>
            </motion.div>
          </div>
        </div>
      )
    }
  ];

  const handleCheckoutClick = (url: string) => {
    setCheckoutUrl(url);
    setIsPromoModalOpen(true);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentTestimonialIndex((prev) => (prev + 1) % testimonialsData.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const pricing = {
    12: {
      essential: { price: 149, trialLink: "https://buy.stripe.com/00w6oA51u8cm2U0bNV77O0b", directLink: "https://buy.stripe.com/eVq9AM1PigIScuAcRZ77O0h" },
      business: { price: 229, trialLink: "https://buy.stripe.com/9B65kw1PigIS2U0bNV77O0d", directLink: "https://buy.stripe.com/14A5kw2Tmboy3Y49FN77O0j" },
      pro: { price: 449, link: "https://buy.stripe.com/cNidR2gKcfEOams19h77O0f" }
    },
    24: {
      essential: { price: 129, trialLink: "https://buy.stripe.com/eVqcMY79C3W6cuA4lt77O0c", directLink: "https://buy.stripe.com/00w3co8dG2S266cbNV77O0i" },
      business: { price: 189, trialLink: "https://buy.stripe.com/00w4gs8dG8cmeCIdW377O0e", directLink: "https://buy.stripe.com/9B628keC4boy66c6tB77O0k" },
      pro: { price: 399, link: "https://buy.stripe.com/8x2bIUeC4fEO8ekbNV77O0g" }
    }
  };

  const getSavings = (plan: 'essential' | 'business' | 'pro') => {
    const price12 = pricing[12][plan].price;
    const currentPrice = pricing[term][plan].price;
    const monthlySavings = price12 - currentPrice;
    return monthlySavings * term;
  };

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y1 = useTransform(smoothProgress, [0, 1], [0, -200]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, -400]);
  const rotate1 = useTransform(smoothProgress, [0, 1], [0, 45]);
  const scale1 = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.2, 1]);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-gray-50 font-sans text-slate-900 selection:bg-rose-500/30">
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
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 z-[100] origin-left"
        style={{ scaleX: smoothProgress }}
      />
      
      <main className="flex-grow overflow-hidden relative">
        <PromoCodeModal 
          isOpen={isPromoModalOpen} 
          onClose={() => setIsPromoModalOpen(false)} 
          checkoutUrl={checkoutUrl} 
        />
        <LeadPopup />
        {/* Subtle dot matrix background for SaaS feel */}
        <div className="absolute inset-0 z-[-1] bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Parallax Background Elements */}
        <motion.div style={{ y: y1, rotate: rotate1, scale: scale1 }} className="absolute top-[10%] right-[5%] w-[40rem] h-[40rem] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none z-0 hidden" />
        <motion.div style={{ y: y2, scale: scale1 }} className="absolute top-[40%] left-[-10%] w-[50rem] h-[50rem] bg-rose-500/5 rounded-full blur-[150px] pointer-events-none z-0 hidden" />
        <motion.div style={{ y: y1 }} className="absolute bottom-[20%] right-[-10%] w-[45rem] h-[45rem] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none z-0 hidden" />
        
        {/* Decorative Floating Elements */}
        <motion.div style={{ y: y1, rotate: 12 }} className="absolute top-[15%] left-[5%] opacity-[0.03] pointer-events-none z-0">
          <Hexagon size={120} className="text-slate-900" />
        </motion.div>
        <motion.div style={{ y: y2, rotate: -15 }} className="absolute top-[45%] right-[8%] opacity-[0.03] pointer-events-none z-0">
          <Triangle size={160} className="text-slate-900" />
        </motion.div>
        <motion.div style={{ y: y1, rotate: 45 }} className="absolute top-[75%] left-[10%] opacity-[0.03] pointer-events-none z-0">
          <Command size={100} className="text-slate-900" />
        </motion.div>
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-12 pb-20 md:pt-20 lg:pt-32 lg:pb-40 bg-white overflow-hidden">
          <style dangerouslySetInnerHTML={{__html: `
            .vhb {
              position: absolute;
              inset: 0;
              pointer-events: none;
              z-index: 0;
              overflow: hidden;
            }

            /* Dot-Grid - sehr subtil */
            .vhb-grid {
              position: absolute;
              inset: 0;
              background-image: radial-gradient(
                circle,
                rgba(74,21,112,0.12) 1px,
                transparent 1px
              );
              background-size: 28px 28px;
            }

            /* Gradient Zone oben rechts - Violet */
            .vhb-zone-tr {
              position: absolute;
              top: -100px;
              right: -100px;
              width: 480px;
              height: 480px;
              background: radial-gradient(ellipse at center,
                rgba(123,47,190,0.25) 0%,
                rgba(74,21,112,0.12) 45%,
                transparent 70%);
              border-radius: 50%;
              will-change: transform;
              animation: vhbDrift1 20s ease-in-out infinite;
            }

            /* Gradient Zone unten links - Pink */
            .vhb-zone-bl {
              position: absolute;
              bottom: -80px;
              left: -60px;
              width: 360px;
              height: 360px;
              background: radial-gradient(ellipse at center,
                rgba(212,24,122,0.22) 0%,
                rgba(212,24,122,0.10) 50%,
                transparent 72%);
              border-radius: 50%;
              will-change: transform;
              animation: vhbDrift2 25s ease-in-out infinite 4s;
            }

            /* Dünner Arc oben rechts */
            .vhb-arc {
              position: absolute;
              top: -180px;
              right: -180px;
              width: 560px;
              height: 560px;
              border-radius: 50%;
              border: 1px solid rgba(123,47,190,0.18);
            }

            /* Animationen - kaum wahrnehmbar, rein atmosphärisch */
            @keyframes vhbDrift1 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              40%       { transform: translate(-12px, 8px) scale(1.03); }
              70%       { transform: translate(8px, -6px) scale(0.98); }
            }

            @keyframes vhbDrift2 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              50%       { transform: translate(10px, -8px) scale(1.04); }
            }

            /* Bewegung aus bei reduzierter Motion */
            @media (prefers-reduced-motion: reduce) {
              .vhb-zone-tr,
              .vhb-zone-bl { animation: none; }
            }

            /* Sicherstellen dass Hero-Content 
               über dem Hintergrund liegt */
            .vhb ~ * {
              position: relative;
              z-index: 1;
            }
          `}} />
          <div className="vhb" aria-hidden="true">
            <div className="vhb-grid"></div>
            <div className="vhb-zone vhb-zone-tr"></div>
            <div className="vhb-zone vhb-zone-bl"></div>
            <div className="vhb-arc"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-500 to-purple-600"></span>
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Premium Web-Leasing Agentur
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-slate-900 leading-[1.05] mb-6"
              >
                Hochwertige Websites.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600 block mt-1 pb-1">Zum festen Monatspreis.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
              >
                <span className="font-bold text-slate-900 block mb-2">Live in 7 Tagen.</span>
                Keine teuren Einmalzahlungen. Wir designen, entwickeln und hosten deine neue Website - alles inklusive im bequemen Abo ab 129 €/Monat.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start"
              >
                <motion.div
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="w-full sm:w-auto rounded-full"
                >
                  <Link 
                    href="#preise"
                    className="w-full sm:w-auto h-14 bg-gradient-to-r from-rose-500 to-purple-600 p-1.5 pr-6 pl-6 rounded-full font-bold text-base hover:shadow-rose-500/30 transition-all text-white flex items-center justify-center gap-4 active:scale-95 shadow-lg shadow-rose-500/20"
                  >
                    <span className="whitespace-nowrap">Jetzt kostenlos starten →</span>
                  </Link>
                </motion.div>
                <Link 
                  href="#analyse"
                  className="w-full sm:w-auto h-14 bg-white text-slate-800 border border-slate-200 px-8 rounded-full font-bold text-sm sm:text-base hover:text-slate-900 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center active:scale-95 shadow-sm"
                >
                  Beratung buchen
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5"
              >
                {/* Google Rating */}
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <div className="flex space-x-0.5 text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-[13px] font-semibold text-slate-700 ml-1">4.9/5</span>
                </div>
                
                <div className="hidden sm:block w-px h-5 bg-slate-200"></div>
                
                <div className="flex flex-wrap justify-center items-center gap-4 text-[13px] text-slate-600 font-medium tracking-tight">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Ohne Bindung</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Full-Service inkl.</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <HeroInteractiveDashboard />

          </div>
        </section>

        {/* --- TRUST SECTION --- */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="py-8 md:py-12 bg-slate-50 border-y border-slate-200 overflow-hidden relative"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 text-center mb-0 md:mb-4">
            <h2 className="text-[11px] md:text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase">
              Unternehmen, die auf VANICY vertrauen
            </h2>
          </div>
          <InfiniteLogoTicker />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        </motion.section>

        {/* --- WAS IST WEBSITE LEASING --- */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden" id="was-ist-leasing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex flex-col mb-6"
                >
                  <span className="text-rose-500 font-bold uppercase tracking-wider text-sm mb-2">Das Konzept</span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-slate-900 tracking-tight">
                    Was ist Website Leasing?
                  </h2>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed"
                >
                  Gute, individuell designte Websites kosten als einmalige Investition schnell zwischen <strong>5.000 € und 15.000 €</strong>. Für viele Unternehmen ist das eine hohe finanzielle Belastung.
                  <br/><br/>
                  Beim <strong>Website Leasing</strong> von VANICY übernehmen wir die gesamte Entwicklung deiner High-End Homepage auf unsere Kappe. Anstatt tausende Euros im Voraus zu bezahlen, zahlst du lediglich eine planbare, <strong>niedrige monatliche Rate</strong>. Alles inklusive.
                </motion.p>
                
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="space-y-4 text-slate-700"
                >
                  {[
                    "Komplett individuelle Erstellung (Wir nutzen keinen Baukasten)",
                    "Sicheres Hosting, Wartung & Updates bereits inklusive",
                    "Regelmäßige inhaltliche Änderungen einfach auf Zuruf",
                    "Keine versteckten Setup-Fees oder Einmalkosten"
                  ].map((item, idx) => (
                    <motion.li key={idx} variants={fadeInUp} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="font-medium text-base md:text-lg">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              
              <div className="flex-1 w-full max-w-lg lg:max-w-none mx-auto lg:mx-0">
                 <motion.div
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6 }}
                   className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden"
                 >
                    {/* Decorative reflection */}
                    <div className="absolute top-0 right-0 p-3 opacity-20 pointer-events-none">
                      <Zap className="w-24 h-24 text-rose-500" />
                    </div>

                    <div className="flex flex-col gap-10 relative z-10">
                       <div className="opacity-60">
                         <span className="text-slate-500 font-bold block mb-1">Traditionelle Agentur</span>
                         <h3 className="text-2xl font-bold text-slate-900 line-through mb-2">~ 12.000 € Setup</h3>
                         <p className="text-slate-500 text-sm">Hohes Risiko, veraltete Technik nach 2 Jahren, teurer Stundensatz für kleinste Änderungen.</p>
                       </div>
                       
                       <div className="w-full h-px bg-slate-200 relative">
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-slate-200 text-slate-400 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">vs</div>
                       </div>
                       
                       <div>
                         <span className="text-rose-500 font-bold block mb-1">VANICY Leasing</span>
                         <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 transform -rotate-1 origin-left">
                           <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-600">
                             ab 129 € / Monat
                           </span>
                         </h3>
                         <p className="text-slate-700 font-medium leading-relaxed">Null Setup-Kosten. Immer auf dem neuesten technischen Stand. Hosting, Updates & inhaltliche Änderungen komplett inklusive.</p>
                       </div>
                    </div>
                 </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* --- PROBLEM AGITATION SECTION --- */}
        <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden" id="probleme">
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
                      className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
                    >
                      <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-900 tracking-tight mb-6">
                        Warum deine aktuelle Website heimlich Geld verbrennt.
                      </h2>
                      <p className="text-base md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Du verlierst jeden Tag potenzielle Kunden an die Konkurrenz, ohne es überhaupt zu bemerken. Das sind die drei größten Wachstums-Bremsen.
                      </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {problems.map((card, i) => (
                        <motion.div 
                          key={i}
                          onClick={() => setSelectedProblem(i)}
                          variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                          }} 
                          className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300 group cursor-pointer"
                        >
                          <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center border ${card.iconBg} group-hover:scale-110 transition-transform duration-300 relative`}>
                            {card.icon}
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{card.title}</h3>
                          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                            {card.desc}
                          </p>
                          <div className="mt-6 flex items-center gap-2 text-sm font-bold text-indigo-600 group-hover:text-rose-500 transition-colors">
                            Mehr erfahren <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <AnimatePresence>
                    {selectedProblem !== null && (
                      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 px-4 sm:px-6">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
                        />
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: 30 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: 20 }}
                          transition={{ type: "spring", damping: 30, stiffness: 400 }}
                          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-slate-200"
                          style={{ zIndex: 101 }}
                        >
                          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 z-50"></div>
                          
                          <button 
                            onClick={() => setSelectedProblem(null)}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors z-[210] bg-white/50 backdrop-blur-sm shadow-sm"
                          >
                            <X className="w-5 h-5" />
                          </button>

                          <div className="p-6 md:p-8 pt-10 border-b border-slate-100 flex items-center gap-4 bg-white relative z-10">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${problems[selectedProblem].iconBg}`}>
                              {problems[selectedProblem].icon}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold font-sans text-slate-900 tracking-tight">{problems[selectedProblem].title}</h3>
                          </div>
                          
                          <div className="p-6 md:p-8 overflow-y-auto">
                            {(() => {
                               const VisualComponent = problems[selectedProblem].Visual;
                               return VisualComponent ? <VisualComponent /> : null;
                            })()}
                            <p className="text-lg text-slate-700 leading-relaxed mb-8">
                              {problems[selectedProblem].fullText}
                            </p>
                            
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-8">
                              <div className="flex items-start gap-4">
                                <AlertCircle className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                                <div>
                                  <h4 className="font-bold text-slate-900 mb-2">Die bittere Realität:</h4>
                                  <p className="text-slate-600 text-sm md:text-base">
                                    {problems[selectedProblem].stats}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 items-center">
                              <Link href="/#process" onClick={() => setSelectedProblem(null)} className="w-full sm:w-auto text-center px-6 py-3 bg-slate-900 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                                Wie wir das lösen
                              </Link>
                              <button onClick={() => setSelectedProblem(null)} className="w-full sm:w-auto px-6 py-3 bg-white text-slate-600 rounded-xl font-bold hover:bg-slate-50 transition-colors">
                                Schließen
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </section>

        {/* --- THE SOLUTION / METHOD / PROCESS --- */}
        <section id="process" className="py-20 lg:py-32 bg-white relative border-t border-slate-200">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div variants={fadeInUp} className="order-2 lg:order-1 relative w-full aspect-square md:aspect-auto md:h-[600px] bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex items-center justify-center p-6 md:p-12 shadow-inner">
                <div className="relative z-10 bg-white rounded-xl p-6 md:p-8 shadow-sm border border-slate-200 w-full max-w-md">
                  <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
                    <div className="font-semibold text-slate-900 text-lg">Ergebnisse</div>
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
                  Messbare Ergebnisse <br className="hidden md:block"/> statt leerer Versprechen.
                </h3>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  Deine Website ist nicht nur eine digitale Visitenkarte, sondern dein bester Vertriebsmitarbeiter. Wir fokussieren uns darauf, deine Besucher in qualifizierte Leads zu verwandeln.
                </p>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <Target className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">Conversion-Optimiert</h4>
                      <p className="text-slate-600">Kein Raten mehr. Jedes Element deiner neuen Website ist darauf ausgelegt, Handlungen der Nutzer auszulösen.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <Zap className="w-6 h-6 text-rose-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">Pfeilschnelle Ladezeiten</h4>
                      <p className="text-slate-600">Wir bauen hochperformante Websites, die in Millisekunden laden - für bessere Google-Rankings und minimale Absprungraten.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <BarChart3 className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">Tracking inklusive</h4>
                      <p className="text-slate-600">Behalte in deinem Dashboard jederzeit den Überblick über deinen Traffic und die Performance deiner Seite.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* --- STATISTICS / ROI SECTION --- */}
        <section className="py-20 lg:py-32 bg-slate-900 relative border-t border-slate-800 text-white overflow-hidden">
          {/* Parallax background glow for dark section */}
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-rose-500/5 to-transparent pointer-events-none" 
          />
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              
              <motion.div variants={fadeInUp} className="text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-sans font-bold tracking-tight mb-6">
                  Eine Webseite, die sich selbst bezahlt macht.
                </h3>
                <p className="text-base md:text-lg text-slate-400 mb-10 leading-relaxed">
                  Viele Unternehmer sehen eine Website als reinen Kostenblock. Wir sehen sie als deinen härtesten Mitarbeiter. 
                  Durch psychologisch optimiertes Design, rasante Ladezeiten und klare Conversion-Pfade steigen deine Anfragen drastisch an.
                </p>
                <div className="grid grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <div className="font-bold text-slate-200 text-2xl md:text-3xl mb-1"><AnimatedCounter to={65} prefix="-" suffix="%" /></div>
                    <p className="text-slate-400 text-xs md:text-sm">Absprungrate sinkt</p>
                  </div>
                  <div>
                    <div className="font-bold text-slate-200 text-2xl md:text-3xl mb-1"><AnimatedCounter to={120} prefix="+" suffix="%" /></div>
                    <p className="text-slate-400 text-xs md:text-sm">Interaktionsrate</p>
                  </div>
                  <div className="col-span-2">
                    <div className="font-bold text-white text-3xl md:text-4xl mb-2"><AnimatedCounter to={700} prefix="Bis zu +" suffix="%" /> Leads</div>
                    <p className="text-slate-400 text-sm">Mehr messbare Kundenanfragen aus dem selben Traffic.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative h-[300px] md:h-[400px] w-full rounded-xl bg-slate-800 border border-slate-700 p-6 md:p-8 flex flex-col shadow-2xl">
                <div className="flex justify-between items-center mb-6 md:mb-8 border-b border-slate-700 pb-4 md:pb-6">
                  <div>
                    <h4 className="text-sm md:text-lg font-bold text-white">Conversion-Gate</h4>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Alt</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-500 to-purple-500"></div>
                      <span className="text-[10px] font-semibold text-white uppercase tracking-wider">Neu</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full relative min-w-0 min-h-0 -mx-2 md:mx-0">
                  <div className="absolute inset-0">
                    <ConversionChart />
                  </div>
                </div>
              </motion.div>
              
            </div>
          </motion.div>
        </section>

        {/* --- CUSTOMER PROJECTS --- */}
        <CustomerProjects />

        {/* --- HOW IT FEELS (BENEFITS BENTO) --- */}
        <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 mb-6">
                Wir machen die Technik.<br className="hidden md:block"/>
                Du dominierst den Markt.
              </h2>
              <p className="text-base md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Vergiss frustrierende Baukästen und unzuverlässige Freelancer. Du erhältst ein hochkonvertierendes System, das Tag und Nacht für dich arbeitet.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Item 1: Design */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                  <MonitorSmartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Premium Custom Design</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Wir kreieren maßgeschneiderte Erlebnisse statt 08/15-Vorlagen. Hochwertig, modern und exakt auf deine Zielgruppe zugeschnitten. Dein Auftritt strahlt sofortige Autorität aus.
                </p>
              </motion.div>

              {/* Item 2: Speed */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50/50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Lichtgeschwindigkeit</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Jede Millisekunde zählt. Unsere Architektur garantiert blitzschnelle Ladezeiten - Google liebt das, und deine Nutzer noch mehr.
                </p>
              </motion.div>

              {/* Item 3: Security & Flatrate */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Sorglos-Flatrate (DSGVO)</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Lehn dich zurück. Inklusive Domain, E-Mail, rechtssicherem Cookie-Banner und SSL. Updates und Backups laufen unsichtbar im Hintergrund.
                </p>
              </motion.div>

              {/* Item 4: Conversion & SEO */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Psychologie & Lokales SEO</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Kein blindes Raten. Jedes Element ist strategisch auf Neukundengewinnung optimiert. Dank modernsten SEO-Standards wirst du in deiner Region optimal auf Google gefunden.
                </p>
              </motion.div>

              {/* Item 5: Portal */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50/50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  <LayoutDashboard className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Exklusives Kundenportal</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Behalte die volle Kontrolle. In deinem Dashboard verwaltest du Rechnungen, forderst mit einem Klick Änderungen an und überblickst deinen Traffic.
                </p>
              </motion.div>

              {/* Item 6: Ansprechpartner */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50/50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-6 group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Blitzschneller Support</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Keine tagelangen Wartezeiten oder anonymen Hotlines. Du genießt erstklassigen, fachkompetenten IT-Support, der in Rekordzeit direkt auf deine Fragen und Wünsche reagiert.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* --- COMPARISON --- */}
        <ComparisonSection />

        {/* --- TESTIMONIALS --- */}
        <section className="py-20 lg:py-32 bg-white border-t border-slate-200 overflow-hidden" id="referenzen">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
              <h3 className="text-3xl md:text-5xl font-sans font-bold text-slate-900 tracking-tight mb-6">
                Kunden, die uns<br/>vertrauen.
              </h3>
              <p className="text-base md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Echte Ergebnisse von echten Unternehmen. Erfahre, wie unsere Partner mit dem richtigen Web‑Layout exponentiell gewachsen sind.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp} 
              className="relative max-w-5xl mx-auto"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="relative overflow-hidden px-4 md:px-16 py-8 h-auto min-h-[500px] sm:min-h-[400px] md:min-h-[350px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonialIndex}
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95, x: -20 }}
                    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    className="w-full flex items-center justify-center h-full"
                  >
                    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-12 w-full max-w-5xl min-h-[500px] sm:min-h-[400px] md:min-h-[350px] lg:min-h-[320px] flex flex-col md:flex-row gap-8 md:gap-12 items-center relative group shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-500">
                      
                      {/* Decorative quote mark */}
                      <div className="absolute top-4 left-4 md:top-8 md:left-8 text-7xl md:text-8xl text-indigo-50 font-serif leading-none select-none -z-0">
                        &quot;
                      </div>

                      <div className="flex-shrink-0 text-center md:text-left flex flex-col items-center md:items-start z-10 w-full md:w-1/3">
                        <div className="relative mb-4 md:mb-6">
                          <Image 
                            src={testimonialsData[currentTestimonialIndex].img} 
                            alt={`Portrait von ${testimonialsData[currentTestimonialIndex].name}, einem zufriedenen Kunden`} 
                            width={112}
                            height={112}
                            loading="lazy"
                            decoding="async"
                            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover ring-4 ring-white shadow-md z-10 relative" 
                          />
                          <div className="absolute inset-0 rounded-full bg-indigo-500 blur-xl opacity-20 -z-10 transform scale-110"></div>
                        </div>
                        <div className="font-bold text-xl md:text-2xl text-slate-900 mb-1">{testimonialsData[currentTestimonialIndex].name}</div>
                        <div className="text-xs md:text-sm text-indigo-600 font-semibold mb-4 uppercase tracking-wider">{testimonialsData[currentTestimonialIndex].role}</div>
                        <div className="flex items-center gap-1">
                          {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400 drop-shadow-sm" />)}
                        </div>
                      </div>

                      <div className="flex-1 relative z-10 text-center md:text-left h-full flex items-center">
                        <p className={`text-slate-700 leading-relaxed md:leading-normal font-medium transition-all ${testimonialsData[currentTestimonialIndex].quote.length > 250 ? 'text-base md:text-lg lg:text-xl' : 'text-lg md:text-2xl lg:text-3xl'}`}>
                          {testimonialsData[currentTestimonialIndex].quote}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-4 md:px-16 mt-4">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={prevTestimonial}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 hover:shadow-lg hover:border-slate-300 active:scale-95 transition-all group shadow-sm relative overflow-hidden"
                    aria-label="Vorherige Referenz"
                  >
                    <span className="absolute inset-0 bg-slate-100 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 group-hover:-translate-x-1 transition-transform relative z-10" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 hover:shadow-lg hover:border-slate-300 active:scale-95 transition-all group shadow-sm relative overflow-hidden"
                    aria-label="Nächste Referenz"
                  >
                    <span className="absolute inset-0 bg-slate-100 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <ChevronRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-1 transition-transform relative z-10" />
                  </button>
                </div>
                
                <div className="flex gap-3">
                  {testimonialsData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTestimonialIndex(idx)}
                      className={`h-2.5 md:h-3 rounded-full transition-all duration-300 ${currentTestimonialIndex === idx ? 'bg-indigo-600 w-10 md:w-12 scale-110' : 'bg-slate-300 w-2.5 md:w-3 hover:bg-slate-400 hover:scale-110'}`}
                      aria-label={`Gehe zu Referenz ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="text-center mt-12 md:mt-16 pb-8">
            <Link 
              href="/case-studies"
              className="inline-flex items-center gap-3 bg-white border border-slate-200 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group"
            >
              Zu den ausführlichen Case Studies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-rose-500" />
            </Link>
          </div>
        </section>

        {/* --- HOW IT WORKS --- */}
        <HowItWorksSection />
        
        {/* --- CUSTOMER PORTAL --- */}
        <CustomerPortalSection />

        {/* --- PAGESPEED / ANALYTICS --- */}
        <PageSpeedSection />

        {/* --- PRICING --- */}
        <section id="preise" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden border-t border-slate-200">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-900 tracking-tight mb-6">
                Ein System, das sich selbst bezahlt macht.
              </h2>
              <p className="text-base md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-4">
                Keine versteckten Gebühren. Keine bösen Überraschungen. Wähle das Setup, das dir den maximalen Hebel für dein aktuelles Wachstum gibt.
              </p>
              <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 font-semibold px-4 py-2 rounded-full text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                </span>
                Start: 2-3 Tage nach vollständigem Onboarding.
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex justify-center mb-12 w-full px-4">
              <div className="w-full max-w-3xl">
                <div className="relative rounded-2xl bg-slate-900 border border-slate-800/80 overflow-hidden shadow-2xl shadow-slate-900/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full transition-opacity opacity-50 group-hover:opacity-100 pointer-events-none"></div>
                  
                  <div className="relative z-10 text-center sm:text-left flex-1">
                    <div className="inline-flex items-center justify-center sm:justify-start gap-3 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-md border border-emerald-400/20">Kein Risiko</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2.5">
                       1 Monat komplett kostenlos testen.
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Wähle dein Paket und starte den kostenlosen Test. Nach deinem Start erhältst du Zugang zum Kundenportal: Fülle das Onboarding innerhalb von 7 Tagen in Ruhe aus - danach beginnen wir sofort mit dem Bau deiner Website. Du entscheidest erst danach, ob du bleibst.
                    </p>
                  </div>
                  
                  <div className="relative z-10 shrink-0 w-full sm:w-auto flex flex-col items-center justify-center pt-4 sm:pt-0 border-t sm:border-t-0 sm:border-l border-slate-700/50 sm:pl-8">
                    <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 drop-shadow-sm mb-1 leading-none tracking-tighter">
                      100%
                    </div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Kostenloser Test</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex justify-center mb-16 relative z-20">
              <div className="bg-slate-100/80 p-1.5 rounded-xl inline-flex items-center border border-slate-200/60 transition-all duration-300">
                <button 
                  onClick={() => setTerm(12)}
                  className={`px-4 sm:px-6 py-2 md:py-2.5 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 ${term === 12 ? 'bg-white shadow-sm border border-slate-200/50 text-slate-900' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  12 Monate
                </button>
                <button 
                  onClick={() => setTerm(24)}
                  className={`px-4 sm:px-6 py-2 md:py-2.5 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center gap-2 ${term === 24 ? 'bg-white shadow-sm border border-rose-100/50 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  24 <span className={term === 24 ? 'text-purple-600' : ''}>Monate</span>
                  <span className={`px-1.5 py-0.5 rounded-md text-[9px] md:text-[10px] uppercase font-black tracking-widest transition-colors shadow-sm ${term === 24 ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                    Empfehlung
                  </span>
                </button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
              
              {/* Essential Plan */}
              <motion.div 
                className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 flex flex-col relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none"></div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 transition-transform duration-300 group-hover:translate-x-1">Essential</h3>
                <p className="text-slate-600 mb-8 min-h-[48px] text-sm md:text-base">Für lokale Betriebe und Gründer, die hochprofessionell starten wollen.</p>
                
                <div className="mb-8 transition-transform duration-300 group-hover:scale-105 origin-left">
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">{pricing[term].essential.price}€</span>
                    <span className="text-slate-600 font-medium pb-1 md:text-base text-sm">/ mo</span>
                  </div>
                  {term > 12 ? (
                    <div className="text-xs md:text-sm font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded inline-block shadow-sm">Du sparst {getSavings('essential')}€</div>
                  ) : (
                    <div className="text-xs md:text-sm text-slate-500 h-6"></div>
                  )}
                </div>
                
                <div className="flex flex-col gap-3 mb-8 transition-transform duration-300 group-hover:-translate-y-1">
                  <button onClick={() => handleCheckoutClick(pricing[term].essential.trialLink)} className="w-full py-3 rounded-lg font-bold text-white bg-green-500 hover:bg-green-600 transition-all text-center text-sm md:text-base border border-transparent">
                    1 Monat kostenlos testen
                  </button>
                  <button onClick={() => handleCheckoutClick(pricing[term].essential.directLink)} className="w-full py-3 rounded-lg font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 hover:shadow-sm transition-all text-center text-sm md:text-base">
                    Direkt kaufen
                  </button>
                  <p className="text-center text-xs font-semibold text-emerald-600">Nur kurze Zeit: 0€ Setup-Gebühr sichern.</p>
                  <Link href="/preise" className="text-center text-xs text-slate-400 hover:text-slate-600 transition-colors mt-1">
                    Alle Details vergleichen
                  </Link>
                </div>

                <div className="h-px bg-slate-100 w-full mb-8"></div>
                
                <ul className="space-y-4 flex-1">
                  {[
                    "Bis zu 3 Unterseiten",
                    "1 Formular",
                    "VANICY Kunden-Dashboard",
                    "Basis-Besucherstatistiken (Besucher, Seitenaufrufe, Absprungrate)",
                    "Basis SEO-Optimierung",
                    "Basic Cookie-Banner",
                    "Bis zu 10 inhaltliche Änderungen / Monat",
                    "Standard Support"
                  ].map((f,i)=>(
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-slate-400 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-xs md:text-sm leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Business Plan */}
              <motion.div 
                className="bg-white rounded-xl p-6 md:p-8 border-2 border-rose-200 shadow-xl shadow-rose-500/10 hover:shadow-2xl hover:shadow-rose-500/20 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 flex flex-col relative md:-mt-4 md:mb-4 z-10 group"
              >
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-rose-500 to-purple-600 rounded-t-xl transition-all duration-300 group-hover:h-2"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-rose-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none"></div>
                
                <div className="flex mb-3 transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="bg-gradient-to-r from-rose-500 to-purple-600 text-white font-semibold px-3 py-1 rounded-full text-[10px] md:text-xs tracking-widest uppercase mb-1 shadow-sm">
                    Am beliebtesten
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600 transition-transform duration-300 group-hover:translate-x-1">Business</h3>
                <p className="text-slate-600 mb-8 min-h-[48px] text-sm md:text-base relative z-10">Für etablierte Unternehmen, die Anfragen skalieren möchten.</p>
                
                <div className="mb-8 transition-transform duration-300 group-hover:scale-110 origin-left">
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">{pricing[term].business.price}€</span>
                    <span className="text-slate-500 font-medium pb-1 md:text-base text-sm">/ mo</span>
                  </div>
                  {term > 12 ? (
                    <div className="text-xs md:text-sm font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded inline-block border border-rose-100 shadow-sm">Du sparst {getSavings('business')}€</div>
                  ) : (
                    <div className="text-xs md:text-sm text-slate-400 h-6"></div>
                  )}
                </div>
                
                <div className="flex flex-col gap-3 mb-8 transition-transform duration-300 group-hover:-translate-y-1">
                  <button onClick={() => handleCheckoutClick(pricing[term].business.trialLink)} className="w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all text-center text-sm md:text-base shadow-md shadow-green-500/20 active:scale-95 hover:shadow-lg hover:shadow-green-500/30">
                    1 Monat kostenlos testen
                  </button>
                  <button onClick={() => handleCheckoutClick(pricing[term].business.directLink)} className="w-full py-3 rounded-lg font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 hover:shadow-sm transition-all text-center text-sm md:text-base">
                    Direkt kaufen
                  </button>
                  <p className="text-center text-xs font-semibold text-emerald-600">Nur kurze Zeit: 0€ Setup-Gebühr sichern.</p>
                  <Link href="/preise" className="text-center text-xs text-slate-400 hover:text-slate-600 transition-colors mt-1">
                    Alle Details vergleichen
                  </Link>
                </div>

                <div className="h-px bg-slate-100 w-full mb-8"></div>
                
                <ul className="space-y-4 flex-1">
                  {[
                    "Bis zu 6 Unterseiten",
                    "Bis zu 2 Formulare",
                    "Erweiterte SEO-Optimierung",
                    "Consent-Management (Cookies)",
                    "Besucherstatistiken (30 Tage / 7 Tage / Heute / 12 Monate)",
                    "Besucher-Verlauf (interaktiver Chart)",
                    "Traffic-Quellen & Browser-Auswertung",
                    "Länder-Übersicht mit Weltkarte",
                    "Top Seiten Analyse",
                    "Bis zu 25 inhaltliche Änderungen / Monat",
                    "Prio Support",
                    "Alles aus dem Essential-Plan"
                  ].map((f,i)=>(
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-rose-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-xs md:text-sm leading-relaxed font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Pro Plan */}
              <motion.div 
                className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 flex flex-col relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none"></div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 transition-transform duration-300 group-hover:translate-x-1">Pro</h3>
                <p className="text-slate-600 mb-8 min-h-[48px] text-sm md:text-base">Für Performance-Fokus, Recruiting & umfassende Markenpräsenz.</p>
                
                <div className="mb-8 transition-transform duration-300 group-hover:scale-105 origin-left">
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">{pricing[term].pro.price}€</span>
                    <span className="text-slate-600 font-medium pb-1 md:text-base text-sm">/ mo</span>
                  </div>
                  {term > 12 ? (
                    <div className="text-xs md:text-sm font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded inline-block shadow-sm">Du sparst {getSavings('pro')}€</div>
                  ) : (
                    <div className="text-xs md:text-sm text-slate-500 h-6"></div>
                  )}
                </div>
                
                <div className="flex flex-col gap-3 mb-8 transition-transform duration-300 group-hover:-translate-y-1">
                  <button onClick={() => handleCheckoutClick(pricing[term].pro.link)} className="w-full py-3 rounded-lg font-bold text-white bg-slate-900 border border-slate-900 hover:bg-slate-800 hover:border-slate-800 transition-all text-center text-sm md:text-base">
                    Direkt kaufen
                  </button>
                  <a href="#analyse" className="w-full py-3 rounded-lg font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 hover:shadow-sm transition-all text-center text-sm md:text-base">
                    Jetzt kostenlos beraten lassen
                  </a>
                  <p className="text-center text-xs font-semibold text-emerald-600">Nur kurze Zeit: 0€ Setup-Gebühr sichern.</p>
                  <Link href="/preise" className="text-center text-xs text-slate-400 hover:text-slate-600 transition-colors mt-1">
                    Alle Details vergleichen
                  </Link>
                </div>

                <div className="h-px bg-slate-100 w-full mb-8"></div>
                
                <ul className="space-y-4 flex-1">
                  {[
                    "Bis zu 9 Unterseiten",
                    "Bis zu 5 Formulare + Logik",
                    "Eigenes Content Management",
                    "Pro (erweitert) SEO-Optimierung",
                    "Vollständige Analyse-Suite inkl. Geräte-Tracking",
                    "Regionen & Städte-Auswertung",
                    "Google PageSpeed Analyse (3× täglich)",
                    "Core Web Vitals (LCP, FCP, CLS, TBT)",
                    "Verbesserungspotenzial-Report (Lighthouse)",
                    "Bis zu 50 inhaltliche Änderungen / Monat",
                    "Prio + Telefon Support",
                    "Alles aus dem Business-Plan"
                  ].map((f,i)=>(
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-slate-400 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-xs md:text-sm leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

            </motion.div>
            
            <motion.div variants={fadeInUp} className="mt-12 text-center max-w-3xl mx-auto">
              <p className="text-xs md:text-sm text-slate-500 flex flex-col md:flex-row items-center justify-center gap-2 text-center">
                <AlertCircle className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Alle Preise zzgl. MwSt. Die Live-Schaltung der Webseite erfolgt nach finaler Abnahme aller Inhalte.</span>
              </p>
            </motion.div>

          </motion.div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="py-20 lg:py-32 bg-white relative">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-bold font-sans text-slate-900 tracking-tight mb-4">Noch Fragen?</h2>
              <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">Wir haben die wichtigsten Antworten hier zusammengefasst.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="space-y-3">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 bg-white`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 md:p-6 text-left focus:outline-none hover:bg-slate-50"
                  >
                    <span className={`font-semibold text-base md:text-lg pr-4 text-slate-900`}>
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
                        <div className="p-4 md:p-6 pt-0 text-slate-600 text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
            
            <motion.div variants={fadeInUp} className="mt-12 text-center">
              <Link href="/faq" className="inline-flex items-center gap-2 border-b-2 border-slate-900 text-slate-900 font-bold hover:text-rose-600 hover:border-rose-600 pb-1 transition-colors text-sm md:text-base">
                Weitere Fragen ansehen <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* --- FINAL CTA SECTION --- */}
        <section className="py-20 lg:py-32 bg-slate-50 relative px-4 border-t border-slate-200">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-slate-900 rounded-2xl p-8 md:p-16 text-center shadow-lg flex flex-col items-center">
              <h2 className="text-2xl md:text-5xl font-sans font-bold text-white mb-6">Bist du bereit für deinen neuen Auftritt?</h2>
              <p className="text-base md:text-lg text-slate-300 mb-10 max-w-2xl text-center leading-relaxed">
                Lass uns unverbindlich sprechen. Wir klären alle offenen Fragen und prüfen gemeinsam, ob unser Leasingmodell zu deinem Geschäft passt.
              </p>
              <Link 
                href="#analyse"
                className="bg-white p-1.5 pr-6 shadow-xl shadow-white/5 rounded-full font-bold hover:bg-slate-50 transition-all inline-flex items-center gap-4 text-sm md:text-base group active:scale-95"
              >
                <span className="bg-gradient-to-r from-rose-500 to-purple-600 text-white text-[10px] md:text-xs uppercase font-black tracking-widest px-3 py-2 rounded-full shadow-sm whitespace-nowrap">
                  Gespräch
                </span>
                <span className="text-slate-900 whitespace-nowrap pr-2">Jetzt unverbindlich beraten lassen</span>
              </Link>
            </div>
          </motion.div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
