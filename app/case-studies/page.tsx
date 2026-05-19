'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, BarChart3, Clock, Rocket, Target, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
  {
    id: "lemuria-bay",
    client: "Lemuria Bay",
    industry: "Event Management & Marketing Agency",
    url: "lemuriabay.de",
    image: "/LemuriaBay.png",
    challenge: "Als wachsende Event & Marketing Agentur fehlte Lemuria Bay eine digitale Präsenz, die ihre Kreativität und Professionalität auf den ersten Blick kommuniziert. Die bisherige Website generierte kaum B2B-Leads und präsentierte vergangene Premium-Events nur unzureichend.",
    solution: "Wir entwickelten eine dynamische Web-Präsenz mit immersivem visuellen Storytelling. Durch gezielt platzierte Lead-Funnels und eine beeindruckende Case-Study Architektur konnten wir die Conversion von Besuchern zu Kunden drastisch steigern.",
    results: [
      { label: "B2B Lead-Anfragen", value: "+45%" },
      { label: "Engagement Rate", value: "+32%" },
      { label: "High-Ticket Anfragen", value: "+18%" }
    ],
    features: ["Immersive Portfolio Architektur", "B2B Lead-Gen Funnels", "High-End Micro-Animations", "Automatisierte Terminbuchung"]
  },
  {
    id: "ngft",
    client: "NGFT",
    industry: "Aviation Technology",
    url: "ngft.com",
    image: "/NGFT.png",
    challenge: "Hochkomplexe technologische Dienstleistungen im Aviation-Sektor mussten für Entscheidungsträger (B2B) greifbar und verständlich dargestellt werden. Die alte Website wirkte veraltet und strahlte keine Innovationskraft aus.",
    solution: "Entwicklung eines klaren, technischen und hochmodernen Designs. Komplexe Sachverhalte wurden durch interaktive Elemente und gezieltes Storytelling visuell aufbereitet und vereinfacht dargestellt.",
    results: [
      { label: "Lead-Qualität", value: "+60%" },
      { label: "Time-on-Site", value: "+120%" },
      { label: "Ladezeiten (Pagespeed)", value: "-75%" }
    ],
    features: ["B2B Lead-Gen Architektur", "Technisches SEO-Setup", "Interaktive Produkt-Demos", "Enterprise Hosting"]
  },
  {
    id: "wn-x",
    client: "WN-X",
    industry: "Persönliche Künstler Webseite",
    url: "wn-x.com",
    image: "/WN-X.png",
    challenge: "Als aufstrebender Künstler benötigte WN-X eine moderne digitale Galerie, die seine Werke eindrucksvoll inszeniert. Gleichzeitig fehlte ein professioneller Kanal für Sammler, um individuelle Auftragsarbeiten anzufragen.",
    solution: "Kreation einer minimalistischen, avantgardistischen Online-Galerie, die die Kunst ins absolute Zentrum rückt. Durch smoothe Scroll-Animationen und ein nahtlos integriertes Anfrage-System für Sammler entstand ein digitales Erlebnis der Extraklasse.",
    results: [
      { label: "Galerie-Anfragen", value: "+150%" },
      { label: "Direkte Verkäufe", value: "+40%" },
      { label: "Internationaler Traffic", value: "+85%" }
    ],
    features: ["Avantgardistisches Design", "Interaktive Galerie-Views", "Sammler-Anfrage System", "Performance Optimierung"]
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-rose-500/30">
      <Header />
      
      <main className="flex-grow overflow-hidden relative">
        {/* HERO SECTION */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-900 border-b border-slate-800 text-white relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent -z-10" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center mb-6">
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400">
                  Case Studies & Referenzen
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
                Einblick in unsere <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400">Erfolgsgeschichten.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                Echte Kunden, messbare Ergebnisse. Lerne im Detail kennen, wie wir durch messerscharfes Design und strategische Umsetzung das digitale Potenzial unserer Partner entfesselt haben.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CASE STUDIES LIST */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
            {caseStudies.map((study, idx) => (
              <motion.div 
                key={study.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Images / Mockup Side */}
                <motion.div variants={fadeInUp} className="w-full lg:w-1/2 relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/5 to-purple-600/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-500 -z-10"></div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden shadow-xl group flex flex-col h-[400px] md:h-[500px]">
                    <div className="h-10 border-b border-slate-200 bg-white flex items-center px-4 gap-3 relative z-20 shrink-0">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 w-1/2 flex justify-center">
                        <div className="bg-slate-100 rounded-md text-[10px] text-slate-400 px-3 py-1 font-mono truncate w-full text-center">
                          {study.url}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 relative overflow-hidden bg-slate-100">
                      {study.image ? (
                        <Image
                          src={study.image}
                          alt={`${study.client} Website Screenshot`}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-slate-300">Image placeholder</div>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div variants={fadeInUp} className="w-full lg:w-1/2 flex flex-col">
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-wider">
                        {study.industry}
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                      {study.client}
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-10">
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-5 h-5 text-rose-500" />
                        <h3 className="font-bold text-slate-900">Die Herausforderung</h3>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-2 mb-3">
                        <Rocket className="w-5 h-5 text-purple-600" />
                        <h3 className="font-bold text-slate-900">Unsere Lösung</h3>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-slate-400" /> Auszug der Ergebnisse
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-10">
                    {study.results.map((res, i) => (
                      <div key={i} className="flex-1 min-w-[140px] p-4 bg-white border border-slate-200 rounded-xl shadow-sm text-center">
                        <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-rose-500 to-purple-600 mb-1">
                          {res.value}
                        </div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Umgesetzte Features</h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {study.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA BOTTOM */}
        <section className="py-20 lg:py-32 bg-slate-50 relative px-4 border-t border-slate-200 mt-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none"></div>

            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight relative z-10">
              Bereit für deine eigene Erfolgsstory?
            </h2>
            <p className="text-slate-300 mb-10 max-w-2xl mx-auto md:text-lg relative z-10">
              Lass uns unverbindlich darüber sprechen, wie wir dein Geschäft digital aufs nächste Level heben. Kein nerviges Verkaufsgespräch – versprochen.
            </p>
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/#analyse"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                Jetzt beraten lassen 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
