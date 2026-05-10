'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WaitlistModal } from '@/components/WaitlistModal';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import Link from 'next/link';

const faqCategories = [
  {
    title: "Allgemein",
    faqs: [
      {
        q: "Was ist Web-Leasing genau?",
        a: "Beim Web-Leasing zahlst du nicht einmalig zehntausende Euro für eine neue Website, sondern abonnierst deine Website als Full-Service zur monatlichen Fixrate. In dieser Rate sind Domain, Hosting, professionelles E-Mail-Postfach, Premium-Design, Programmierung und monatliche Wartung inkludiert."
      },
      {
        q: "Gibt es versteckte Kosten?",
        a: "Nein, überhaupt nicht. Die monatliche Rate ist eine Sorglos-Flatrate, die alles abdeckt: Domain, Hosting, SSL, DSGVO-Tools (wie ein rechtssicheres Cookie-Banner), Software-Updates und ein Kontingent an inhaltlichen Änderungen. Lediglich zu Beginn fällt je nach Paket eine Einmalige Setup-Gebühr an (außer beim jährlichen Growth-Paket, dort erlassen wir sie dir)."
      },
      {
        q: "Gehört die Website nach der Kündigung mir?",
        a: "Mit unserem Web-Leasing-Modell abonnierst du eine Komplettbetreuung als Service. Die Seite liegt in unserer Infrastruktur. Wenn du kündigst, geht die Website offline - du kannst natürlich deine Domain und Inhalte mitnehmen. Code und das Design können gegen eine Einmalablöse komplett transferiert werden."
      }
    ]
  },
  {
    title: "Technik & Portal",
    faqs: [
      {
        q: "Wo wird meine Website gehostet?",
        a: "Wir nutzen Enterprise-Grade Hosting-Lösungen in Europa (DSGVO-konform). Deine Website profitiert von einem globalen CDN, sodass sie von überall blitzschnell lädt."
      },
      {
        q: "Wie funktioniert das Exklusive Kundenportal?",
        a: "Jeder unserer Kunden erhält Zugang zu einem persönlichen Dashboard. Dort kannst du mit einem Klick Inhaltsänderungen anfordern, Rechnungen herunterladen und die wichtigsten Metriken (wie Besucherzahlen) deiner Website einsehen – ganz ohne Technik-Know-how."
      },
      {
        q: "Kümmern Sie sich um Updates und Backups?",
        a: "Ja, vollautomatisch. Im monatlichen Preis sind tägliche Backups, Sicherheits-Checks, Updates von CMS und Plugins sowie Ladezeiten-Monitoring enthalten."
      }
    ]
  },
  {
    title: "Design & Änderungen",
    faqs: [
      {
        q: "Wie lange dauert es bis meine Website online ist?",
        a: "Nach unserem Kick-Off-Gespräch und Erhalt aller Materialien (Texte, Bilder) benötigen wir im Schnitt 2-4 Wochen bis die Seite live gehen kann, meist sogar schneller (14 Tage)."
      },
      {
        q: "Wie laufen inhaltliche Änderungen ab?",
        a: "Du nutzt einfach dein Kundenportal oder schickst uns eine E-Mail mit den gewünschten Änderungen (neuer Text, neues Teambild, etc.). Normale Änderungen werden in der Regel innerhalb von 48 Stunden umgesetzt."
      },
      {
        q: "Kann ich die Inhalte auch selbst ändern?",
        a: "Unser Modell basiert darauf, dass wir dir die Arbeit komplett abnehmen - 'Done for you'. Du sparst Zeit und Nerven, da du dich in kein komplexes CMS einarbeiten musst. Du gibst uns Bescheid, und wir erledigen den Rest."
      }
    ]
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-500/30">
      <Header />
      <WaitlistModal />

      <main className="flex-grow pt-24 md:pt-32 pb-24 overflow-hidden relative">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-6">
              Häufig gestellte Fragen
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Alles was du über unsere Website-Flatrate und die Zusammenarbeit wissen musst.
            </p>
          </div>

          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {faqCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveCategory(idx);
                  setOpenFaq(null);
                }}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${activeCategory === idx ? 'bg-slate-900 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'}`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <div className="space-y-4 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {faqCategories[activeCategory].faqs.map((faq, i) => (
                  <div 
                    key={i} 
                    className={`border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 bg-white`}
                  >
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none hover:bg-slate-50"
                    >
                      <span className={`font-semibold text-lg pr-8 text-slate-900`}>
                        {faq.q}
                      </span>
                      <div className={`flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-rose-500' : 'text-slate-400'}`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {openFaq === i && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 sm:p-8 pt-0 text-slate-600 text-lg leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-24 text-center bg-white border border-slate-200 rounded-3xl p-10 md:p-14 shadow-sm relative overflow-hidden">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-slate-900">
              Nicht die passende Antwort dabei?
            </h3>
            <p className="text-slate-600 text-lg mb-8 max-w-lg mx-auto">
              Lass uns einfach persönlich miteinander sprechen. Wir klären all deine Fragen in einem kurzen, unverbindlichen Termin.
            </p>
            <Link 
              href="#warteliste"
              className="inline-flex items-center justify-center gap-3 bg-slate-900 px-8 py-4 rounded-xl font-semibold text-white hover:bg-slate-800 hover:shadow-md transition-all duration-200"
            >
              Experten-Gespräch buchen
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
