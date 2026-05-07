'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WaitlistModal } from '@/components/WaitlistModal';
import { 
  ArrowRight, 
  CheckCircle2, 
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
  Gem,
  Command,
  Hexagon,
  Triangle,
  Leaf
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

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isYearly, setIsYearly] = useState(true);

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
      
      <main className="flex-grow pt-24 lg:pt-32 overflow-hidden">
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-10 pb-20 lg:pt-20 lg:pb-32">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-rose-500/10 to-purple-600/10 rounded-full blur-[120px] -z-10 opacity-70"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8 hover:shadow-md transition-shadow"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-rose-500 to-purple-600"></span>
              </span>
              <span className="text-sm font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-600">
                Premium Web-Leasing Agentur
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] mb-8 max-w-5xl"
            >
              Du hast eine Website. Aber <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-600">niemand meldet sich?</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-2xl text-gray-500 font-medium mb-12 max-w-3xl leading-relaxed"
            >
              Schluss mit langsamen Baukasten-Seiten und überteuerten Rechnungen von Agenturen. Miete eine professionelle, moderne Website, die wirklich Kunden gewinnt – Wartung und Support sind schon dabei.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Link 
                href="#warteliste"
                className="w-full sm:w-auto relative overflow-hidden group bg-gradient-to-r from-rose-500 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-xl shadow-xl shadow-rose-500/25 hover:shadow-2xl hover:shadow-purple-600/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Auf Warteliste eintragen
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-14 flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm font-semibold text-gray-500"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Monatlich kündbar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Keine Setup-Kosten</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Individuelles Design</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- TRUST SECTION --- */}
        <section className="py-12 bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-8">Über 150+ ambitionierte Unternehmen vertrauen bereits auf uns</p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
               <div className="flex items-center gap-2 text-2xl font-black font-serif tracking-tighter text-slate-900 opacity-40 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 cursor-default">
                  <Command className="w-8 h-8 text-rose-500" />
                  <span>NEXUS</span>
               </div>
               <div className="flex items-center gap-2 text-xl font-bold tracking-widest uppercase font-mono text-slate-800 opacity-40 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 cursor-default">
                  <Hexagon className="w-8 h-8 text-blue-600 fill-blue-600/20" />
                  <span>Lumina</span>
               </div>
               <div className="flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-900 opacity-40 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 cursor-default">
                  <Triangle className="w-8 h-8 text-emerald-500 fill-emerald-500/20" />
                  <span>TechCore</span>
               </div>
               <div className="flex items-center gap-2 text-2xl italic font-serif text-slate-800 opacity-40 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 cursor-default">
                  <Leaf className="w-8 h-8 text-green-600" />
                  <span>EcoRise</span>
               </div>
            </div>
          </div>
        </section>

        {/* --- PROBLEM AGITATION SECTION --- */}
        <section className="py-24 bg-gray-50" id="probleme">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-sm font-bold tracking-wider text-rose-500 uppercase mb-4">Erkennst du dich hier wieder?</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">Warum die meisten Websites still <br className="hidden md:block"/>Geld verbrennen.</h3>
              <p className="text-xl text-gray-500 font-medium">Es ist Zeit für eine Lösung, die wirklich funktioniert und einfach ist.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp} className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-rose-500 mb-8 relative z-10 group-hover:scale-110 transition-transform">
                  <TrendingDown className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Die &quot;Schaufenster&quot;-Falle</h4>
                <p className="text-gray-500 leading-relaxed relative z-10 font-medium">
                  Deine Website sieht okay aus, aber niemand meldet sich darüber. Sie ist nur ein digitales Schaufenster, das keine neuen Kunden anlockt, weil die richtige Vorgehensweise fehlt.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-purple-600 mb-8 relative z-10 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Ladezeiten aus der Hölle</h4>
                <p className="text-gray-500 leading-relaxed relative z-10 font-medium">
                  Dein Baukasten-System (wie WordPress) ist anfällig für Fehler und lädt zu langsam. Wusstest du, dass Besucher sofort abspringen, wenn eine Seite länger als 3 Sekunden lädt?
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-slate-700 mb-8 relative z-10 group-hover:scale-110 transition-transform">
                  <AlertCircle className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Der Agentur-Schock</h4>
                <p className="text-gray-500 leading-relaxed relative z-10 font-medium">
                  Du zahlst Tausende von Euros für die Erstellung. Danach ist die Agentur schwer erreichbar, deine Seite veraltet langsam und jede kleine Änderung auf der Seite kostet wieder extra.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* --- THE SOLUTION / METHOD --- */}
        <section className="py-32 bg-white relative">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInUp}>
                <h2 className="text-sm font-bold tracking-wider text-rose-500 uppercase mb-4">So funktioniert es bei uns</h2>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-8">
                  Mieten statt teuer kaufen.
                </h3>
                <p className="text-lg text-gray-500 font-medium mb-10 leading-relaxed">
                  Vergiss hohe Einmalzahlungen. Wir haben den Markt umgekrempelt: Bei uns bekommst du eine moderne, hochwertige Website im bequemen Abo. Wir kümmern uns um die komplizierte Technik und halten alles am Laufen.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-rose-500/20">
                      <Search className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">1. Gemeinsamer Plan</h4>
                      <p className="text-gray-500 font-medium">Wir schauen uns ganz genau an, wonach deine Kunden im Internet suchen. So wissen wir, wie wir deine Webseite aufbauen müssen.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-rose-500/20">
                      <Gem className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">2. Hochwertiges Design</h4>
                      <p className="text-gray-500 font-medium">Dein Auftritt wird individuell für dich gestaltet. Wir sorgen für rasante Ladezeiten und ein Design, das auf dem PC und dem Handy toll aussieht.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-rose-500/20">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">3. Einfach mieten & entspannen</h4>
                      <p className="text-gray-500 font-medium">Das Wichtigste für dich: Wir bleiben an deiner Seite. Den Schutz vor Hackern, Wartungsarbeiten und Textanpassungen übernehmen wir komplett für dich.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="relative h-[600px] w-full rounded-[3rem] bg-gray-50 border border-gray-100 overflow-hidden flex items-center justify-center p-4 md:p-8">
                <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[80px]"></div>
                
                <div className="relative z-10 bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-100 w-full max-w-md transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="flex justify-between items-center mb-6 md:mb-8 pb-4 md:pb-6 border-b border-gray-100">
                    <h5 className="font-bold text-slate-900 text-lg md:text-xl">Ergebnisse für dein Geschäft</h5>
                    <span className="bg-emerald-50 text-emerald-600 text-xs font-bold px-3 py-1 rounded-full border border-emerald-100">Wachstum</span>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                         <span className="text-sm font-bold text-gray-500">Besucher der Webseite</span>
                         <span className="text-sm font-bold text-emerald-500">Stark gestiegen</span>
                      </div>
                      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 w-[78%] rounded-full"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                         <span className="text-sm font-bold text-gray-500">Kundenanfragen über das Netz</span>
                         <span className="text-sm font-bold text-rose-500">Deutlich mehr</span>
                      </div>
                      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-rose-400 to-rose-500 w-[45%] rounded-full"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                         <span className="text-sm font-bold text-gray-500">Bewertung der Ladezeit (Google)</span>
                         <span className="text-sm font-bold text-purple-600">Hervorragend</span>
                      </div>
                      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 w-[95%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500 font-bold mb-1">Neueste Anfrage</div>
                      <div className="text-sm font-bold text-slate-900">Herr Müller, Heute 10:15 Uhr</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 border border-emerald-100">
                       <CheckCircle2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* --- SHOWCASE / PORTFOLIO SECTION --- */}
        <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-sm font-bold tracking-wider text-rose-500 uppercase mb-4">Ausgewählte Projekte</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
                So könnte dein neuer Auftritt aussehen.
              </h3>
              <p className="text-xl text-gray-500 font-medium">
                Websites, die nicht nur atemberaubend aussehen, sondern auch psychologisch darauf optimiert sind, aus Besuchern echte Kunden zu machen.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-10 pb-12">
              {/* Project 1 */}
              <div className="group relative rounded-3xl overflow-hidden bg-gray-100 shadow-lg shadow-gray-200/50 block">
                <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90"></div>
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" alt="Projekt Beispiel" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <div className="flex gap-2 mb-3">
                      <span className="bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Immobilien</span>
                      <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">Lead-Gen</span>
                    </div>
                    <h4 className="text-2xl lg:text-3xl font-bold text-white mb-2">Alpha Makler</h4>
                    <p className="text-gray-300 font-medium text-sm sm:text-base w-full max-w-sm">Premium Online-Präsenz für exklusive Immobilien mit integriertem Bewertungs-Rechner.</p>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group relative rounded-3xl overflow-hidden bg-gray-100 shadow-lg shadow-gray-200/50 block md:translate-y-12">
                <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90"></div>
                  <img src="https://images.unsplash.com/photo-1547658719-da2b51159128?w=800&h=600&fit=crop" alt="Projekt Beispiel" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <div className="flex gap-2 mb-3">
                      <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">SaaS / Tech</span>
                      <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">B2B</span>
                    </div>
                    <h4 className="text-2xl lg:text-3xl font-bold text-white mb-2">CloudSync App</h4>
                    <p className="text-gray-300 font-medium text-sm sm:text-base w-full max-w-sm">Dunkel-gehaltenes, hochkonvertierendes Design für ein innovatives Tech-Startup.</p>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group relative rounded-3xl overflow-hidden bg-gray-100 shadow-lg shadow-gray-200/50 block">
                <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90"></div>
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" alt="Projekt Beispiel" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <div className="flex gap-2 mb-3">
                      <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Handwerk</span>
                      <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">Booking</span>
                    </div>
                    <h4 className="text-2xl lg:text-3xl font-bold text-white mb-2">Meisterbetrieb Müller</h4>
                    <p className="text-gray-300 font-medium text-sm sm:text-base w-full max-w-sm">Vertrauensweckende Experten-Seite mit automatischer Handwerker-Terminvereinbarung.</p>
                  </div>
                </div>
              </div>

              {/* Project 4 */}
              <div className="group relative rounded-3xl overflow-hidden bg-gray-100 shadow-lg shadow-gray-200/50 block md:translate-y-12">
                <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90"></div>
                  <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&h=600&fit=crop" alt="Projekt Beispiel" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <div className="flex gap-2 mb-3">
                      <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Beratung</span>
                      <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">Corporate</span>
                    </div>
                    <h4 className="text-2xl lg:text-3xl font-bold text-white mb-2">Finance Vision</h4>
                    <p className="text-gray-300 font-medium text-sm sm:text-base w-full max-w-sm">Ästhetisch cleane Beraterseite, die Autorität und Fachwissen direkt vermittelt.</p>
                  </div>
                </div>
              </div>

            </motion.div>
            
            <motion.div variants={fadeInUp} className="mt-16 md:mt-32 flex justify-center">
              <Link 
                href="#warteliste"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                Willst du auch so aussehen?
                <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* --- HOW IT FEELS (BENEFITS BENTO) --- */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Das &quot;Rundum-Sorglos&quot; Gefühl.</h2>
              <p className="text-xl text-gray-300 font-medium">Darum fühlen sich unsere Kunden bei uns endlich sicher und professionell betreut.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <MonitorSmartphone className="w-8 h-8"/>, title: "Modernes Design", desc: "Bei uns gibt es keine billigen Vorlagen. Dein Auftritt wirkt im Internet sofort hochwertig und einladend." },
                { icon: <Zap className="w-8 h-8"/>, title: "Sehr Schnell", desc: "Deine Seite ist immer sofort da. Das freut deine Besucher und sorgt für gute Bewertungen bei Google." },
                { icon: <Users className="w-8 h-8"/>, title: "Klarer Aufbau", desc: "Wir bauen die Seite so auf, dass interessierte Besucher sofort sehen, wie sie dich am besten kontaktieren." },
                { icon: <ShieldCheck className="w-8 h-8"/>, title: "Sicher & Stabil", desc: "Laufende Überprüfungen und technische Arbeiten im Hintergrund sorgen dafür, dass immer alles funktioniert." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-colors duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-rose-500/20 flex items-center justify-center text-rose-400 mb-6">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-300 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* --- TESTIMONIALS --- */}
        <section className="py-32 bg-gray-50" id="referenzen">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-sm font-bold tracking-wider text-rose-500 uppercase mb-4">Was andere sagen</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Kunden, die uns<br/>vertrauen.</h3>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
              {[
                { quote: "Seitdem Revela unsere Website betreut, haben wir deutlich mehr Anfragen über das Internet. Das Leasingmodell ist für uns ideal – keine riesigen Vorabkosten und alles läuft perfekt.", name: "Sven Krause", role: "Geschäftsführer", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop" },
                { quote: "Endlich ein Partner auf Augenhöhe. Wir müssen uns um nichts mehr kümmern und wissen, dass die Seite immer sicher ist. Wenn wir was ändern möchten, reicht eine einfache Mail.", name: "Laura Weber", role: "Inhaberin", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop" },
                { quote: "Unsere alte Homepage war so langsam, dass niemand dort geblieben ist. Die neue Seite ist blitzschnell da und unsere Kunden loben ständig das tolle Erscheinungsbild.", name: "Marc T.", role: "Selbstständiger Inhaber", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop" }
              ].map((test, i) => (
                <div key={i} className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative group">
                  <div className="absolute top-8 right-8 text-rose-500/10 group-hover:text-rose-500/20 transition-colors">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  </div>
                  <div className="flex items-center gap-1 mb-6">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-rose-500 text-rose-500" />)}
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-1 relative z-10">&quot;{test.quote}&quot;</p>
                  <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                    <img src={test.img} alt={test.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-rose-500/10" />
                    <div>
                      <div className="font-bold text-slate-900">{test.name}</div>
                      <div className="text-sm text-gray-500 font-medium">{test.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* --- PRICING --- */}
        <section id="preise" className="py-32 bg-white relative">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-5xl font-black text-slate-900 tracking-tight mb-6">Faire Preise für gute Arbeit.</h2>
              <p className="text-xl text-gray-500 font-medium">
                Versteckte Kosten gibt es bei uns nicht. Du behältst jederzeit die Kontrolle.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex justify-center mb-16 relative z-20">
              <div className="bg-gray-100 p-1.5 rounded-full inline-flex items-center shadow-inner">
                <button 
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${!isYearly ? 'bg-white text-slate-900 shadow-md' : 'text-gray-500 hover:text-slate-900'}`}
                >
                  Monatlich
                </button>
                <button 
                  onClick={() => setIsYearly(true)}
                  className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 ${isYearly ? 'bg-white text-slate-900 shadow-md' : 'text-gray-500 hover:text-slate-900'}`}
                >
                  Jährlich
                  <span className="-mr-4 bg-gradient-to-r from-rose-500 to-purple-600 text-white text-[10px] px-2 py-1 rounded-full uppercase tracking-wider shadow-sm animate-pulse">15% sparen</span>
                </button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
              
              {/* Starter */}
              <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Starter</h4>
                <p className="text-gray-500 mb-6 font-medium">Perfekt für Solo-Selbstständige und kleine Betriebe.</p>
                <div className="flex items-end gap-1 mb-2 h-12">
                  {isYearly && <span className="text-xl text-gray-400 line-through mr-2 font-bold opacity-75">199€</span>}
                  <span className="text-4xl font-black text-slate-900">{isYearly ? '169€' : '199€'}</span>
                  <span className="text-gray-500 font-medium mb-1">/mtl.</span>
                </div>
                {isYearly ? <div className="text-sm font-bold bg-emerald-50 text-emerald-600 px-3 py-1 rounded-md inline-block mb-8">0€ Setup-Kosten</div> : <div className="h-7 mb-8"></div>}
                
                <ul className="space-y-4 mb-8">
                  {["Ansprechende kleine Webseite", "Sieht auf dem Handy toll aus", "Hosting & Speicherplatz inklusive", "Technische Pflege durch uns", "Monatlich kündbar nach Probe"].map((f,i)=>(
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 stroke="url(#brand-gradient)" className="w-5 h-5 shrink-0 mt-0.5 text-transparent" />
                      <span className="text-gray-600 font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#warteliste" className="w-full py-4 rounded-xl font-bold text-slate-900 bg-gray-100 hover:bg-gray-200 transition-colors inline-block text-center">
                  Konditionen sichern
                </Link>
              </motion.div>

              {/* Professional */}
              <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-1 shadow-2xl relative transform lg:-translate-y-4 hover:-translate-y-6 transition-transform duration-500 z-10">
                {/* Gradient Border Trick */}
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-purple-600 to-rose-500 bg-[length:200%_auto] animate-border-glow rounded-3xl -z-10"></div>
                
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-rose-500 via-purple-600 to-rose-500 bg-[length:200%_auto] animate-border-glow text-white font-bold px-5 py-1.5 rounded-full text-sm shadow-md">Am beliebtesten</span>
                </div>
                
                <div className="bg-white rounded-[1.4rem] p-8 h-full shadow-inner flex flex-col">
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Professional</h4>
                  <p className="text-gray-500 mb-6 font-medium">Für Unternehmen, die neue Kunden über das Internet suchen.</p>
                  <div className="flex items-end gap-1 mb-2 h-12">
                    {isYearly && <span className="text-xl text-gray-400 line-through mr-2 font-bold opacity-75">399€</span>}
                    <span className="text-4xl font-black text-slate-900">{isYearly ? '339€' : '399€'}</span>
                    <span className="text-gray-500 font-medium mb-1">/mtl.</span>
                  </div>
                  {isYearly ? <div className="text-sm font-bold bg-emerald-50 text-emerald-600 px-3 py-1 rounded-md inline-block mb-8 self-start">0€ Setup-Kosten</div> : <div className="h-7 mb-8"></div>}
                  
                  <ul className="space-y-4 mb-8">
                    {["Mehrere ausführliche Unterseiten", "Bessere Sichtbarkeit bei Google", "Pflege deiner Texte & Bilder", "Besonders schnelle Ladezeiten", "Immer für dich da bei Fragen", "Einrichtung für Google Maps"].map((f,i)=>(
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 stroke="url(#brand-gradient)" className="w-5 h-5 shrink-0 mt-0.5 text-transparent" />
                        <span className="text-gray-600 font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="#warteliste" className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-rose-500 to-purple-600 shadow-lg shadow-rose-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all mt-auto inline-block text-center">
                    Konditionen sichern
                  </Link>
                </div>
              </motion.div>

              {/* Enterprise */}
              <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Individuell</h4>
                <p className="text-gray-500 mb-6 font-medium">Für ganz spezielle Anforderungen und große Auftritte.</p>
                <div className="flex items-end gap-1 mb-2 h-12 pt-2">
                  <span className="text-3xl font-black text-slate-900">Nach Absprache</span>
                </div>
                <div className="text-sm font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-md inline-block mb-8">Individuell gestaltbar</div>
                
                <ul className="space-y-4 mb-8">
                  {["So viele Seiten, wie du brauchst", "Eigener Online-Shop oder Portal", "Verknüpfung mit deiner Software", "Besonderer Sicherheits-Schutz", "Fester Ansprechpartner für dich"].map((f,i)=>(
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 stroke="url(#brand-gradient)" className="w-5 h-5 shrink-0 mt-0.5 text-transparent" />
                      <span className="text-gray-600 font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#warteliste" className="w-full py-4 rounded-xl font-bold text-slate-900 border border-gray-300 hover:bg-gray-50 transition-colors inline-block text-center">
                  Auf die Warteliste
                </Link>
              </motion.div>

            </motion.div>
          </motion.div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="py-24 bg-white border-t border-gray-100">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">Noch Fragen?</h2>
              <p className="text-lg text-gray-500 font-medium">Hier findest du die wichtigsten Antworten ganz unkompliziert erklärt.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'border-rose-500/30 bg-rose-50/50 shadow-sm' : 'border-gray-200 bg-white hover:border-rose-500/30'}`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className={`font-bold text-lg pr-8 transition-colors ${openFaq === index ? 'text-rose-500' : 'text-slate-900'}`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-rose-500' : 'text-gray-400'}`}>
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
                        <div className="p-6 pt-0 text-gray-600 font-medium leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* --- FINAL CTA SECTION --- */}
        <section className="py-32 bg-gray-50 relative px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-slate-900 rounded-[3rem] md:rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500 rounded-full mix-blend-screen blur-[120px] opacity-30 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen blur-[120px] opacity-30 pointer-events-none"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">Bist du bereit für den leichten Weg?</h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                  Lass uns einfach unverbindlich telefonieren. Wir klären alle deine offenen Fragen und schauen gemeinsam, ob unser Modell genau das Richtige für dich ist.
                </p>
                <Link 
                  href="#warteliste"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 to-purple-600 px-10 py-5 rounded-full font-bold text-white text-xl shadow-xl shadow-rose-500/30 hover:scale-105 transition-transform duration-300"
                >
                  <span className="relative z-10">Auf Warteliste eintragen</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
