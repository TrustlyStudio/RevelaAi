'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WaitlistModal } from '@/components/WaitlistModal';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const faqCategories = [
  {
    title: "Das Produkt & Modell",
    faqs: [
      {
        q: "Was ist Website Leasing überhaupt?",
        a: "Website Leasing bedeutet: Du zahlst eine monatliche Pauschale und bekommst dafür eine fertige, professionelle Website inklusive allem was dazugehört - Design, Hosting, Pflege, Support und Änderungen. Kein Einmalinvestment, kein Eigenverantwortung für Technik. Ähnlich wie beim Auto-Leasing nutzt du etwas Professionelles ohne es kaufen zu müssen."
      },
      {
        q: "Was unterscheidet VANICY von einer klassischen Webagentur?",
        a: "Eine klassische Agentur verlangt 5.000 € - 20.000 € einmalig - und danach bist du auf dich allein gestellt. VANICY baut deine Website, pflegt sie laufend, kümmert sich um Hosting und Support und bleibt dein Partner. Du zahlst monatlich und hast immer jemanden der sich kümmert."
      },
      {
        q: "Was unterscheidet VANICY von Baukästen wie Wix oder Jimdo?",
        a: "Bei Wix oder Jimdo baust du selbst - du brauchst Zeit, Wissen und trotzdem sieht das Ergebnis oft nach Baukasten aus. Bei VANICY baust du gar nichts selbst. Wir liefern ein professionelles Ergebnis das nach echtem Design aussieht - und du musst dich um nichts kümmern."
      },
      {
        q: "Für wen ist VANICY geeignet?",
        a: "Für inhabergeführte Unternehmen in Deutschland die eine professionelle Website brauchen aber keine Zeit, kein technisches Wissen und kein großes Budget für eine Agentur haben. Handwerker, Taxiunternehmen, Dienstleister, Coaches, Therapeuten, lokale Händler, Gastronomie, Kanzleien - kurz: jeder der Kunden über seine Website gewinnen möchte."
      },
      {
        q: "Ist VANICY auch für größere Unternehmen geeignet?",
        a: "Ja. Neben unseren Standardpaketen (Essential, Business, Pro) gibt es ein Enterprise-Paket für Unternehmen mit komplexeren Anforderungen - zum Beispiel E-Commerce, Login-Bereiche, dynamische Seiten oder Web-App-Funktionen. Sprich uns einfach an."
      }
    ]
  },
  {
    title: "Preise & Verträge",
    faqs: [
      {
        q: "Was kosten die verschiedenen Pakete?",
        a: `• Essential (ab 149 €/Monat):* Bis zu 3 Unterseiten, 1 klarer Call-to-Action, Basis-Support. Perfekt für den lokalen Einstieg.
• Business (ab 229 €/Monat):* Mehr Unterseiten, Blog-/News-Bereich, höhere Ticket-Priorität.
• Pro (ab 449 €/Monat):* Express-Support bei dringenden Tickets, erweiterte Funktionen.
• Enterprise: Maßgeschneiderte Individuallösungen auf Anfrage.

*Alle Preise verstehen sich als Nettopreise zzgl. der gesetzlichen MwSt. Alle Tarife beinhalten bereits das Premium-Hosting, die Domain-Verwaltung sowie die Erstellung von Impressum und DSGVO-konformer Datenschutzerklärung.`
      },
      {
        q: "Gibt es eine Setup-Gebühr?",
        a: "Nein. Kein Setup-Preis, kein Einmalinvestment. Du zahlst ausschließlich die monatliche Rate."
      },
      {
        q: "Was ist der Unterschied zwischen 12 und 24 Monaten Laufzeit?",
        a: "Bei einer Laufzeit von 24 Monaten sicherst du dir unseren günstigsten Monatspreis. Da eine professionelle Website ohnehin eine langfristige Investition in dein Unternehmen ist - und sein sollte -, ist die 24-Monats-Option wirtschaftlich die klügste Wahl für maximale Budgetsicherheit und planbare Betriebsausgaben."
      },
      {
        q: "Wann wird abgerechnet?",
        a: "Die Abrechnung startet ab dem Tag deines Kaufs. Der erste Monat ist kostenlos."
      },
      {
        q: "Gibt es versteckte Kosten?",
        a: "Nein. Domain, Hosting, SSL-Zertifikat, rechtssicheres Impressum und Datenschutz, regelmäßige Sicherheitswartung und Support sind komplett inklusive. Zusätzliche Kosten entstehen nur bei individuellen Sonderwünschen, die über deinen gebuchten Plan hinausgehen (z. B. extra Unterseiten oder spezielle Software-Schnittstellen)."
      },
      {
        q: "Kann ich meinen Plan upgraden?",
        a: "Ja, jederzeit. Du kannst von Essential auf Business oder Pro wechseln - der neue Plan gilt ab dem nächsten Abrechnungszeitraum."
      }
    ]
  },
  {
    title: "Der Prozess",
    faqs: [
      {
        q: "Wie läuft der Start ab?",
        a: "Nach deinem Kauf erhältst du Zugang zum Kundenportal und ein Onboarding-Formular. Dort gibst du alle Informationen ein: deine Firma, Leistungen, Design-Wünsche, Inhalte und rechtliche Angaben. Sobald das Formular vollständig ausgefüllt ist, starten wir mit dem Bau."
      },
      {
        q: "Wie lange habe ich Zeit das Onboarding auszufüllen?",
        a: "Du hast 7 Tage Zeit das Onboarding-Formular vollständig auszufüllen. Erst danach starten wir mit dem Bau. So stellen wir sicher dass dein Projekt planbar und termingerecht fertig wird."
      },
      {
        q: "Wie viele Feedback-Runden sind inklusive?",
        a: "Zwei Feedback-Runden sind in jedem Paket inklusive. Das bedeutet: du siehst die fertige Website in einer Vorschau, gibst uns dein Feedback, wir setzen es um - zweimal. Danach ist die Website live."
      },
      {
        q: "Was passiert nach dem Go-Live?",
        a: "Nach dem Go-Live läuft deine Website vollständig betreut. Änderungen beantragst du über das Kundenportal-Ticketsystem. Wir kümmern uns um Wartung, Sicherheitsupdates und halten Impressum sowie Datenschutz aktuell."
      },
      {
        q: "Kann ich vor Go-Live noch größere Änderungen verlangen?",
        a: "Innerhalb der zwei inkludierten Feedback-Runden ja. Strukturelle Umbauten oder komplett neue Konzepte nach Baubeginn werden als separates Angebot behandelt."
      }
    ]
  },
  {
    title: "Technisches",
    faqs: [
      {
        q: "Welches Hosting nutzt VANICY?",
        a: "Wir hosten deine Website auf unserer eigenen Infrastruktur bei Hostinger - professionell, schnell und sicher. Du musst dich um nichts kümmern."
      },
      {
        q: "Was ist mit meiner bestehenden Domain?",
        a: "Wenn du bereits eine Domain hast, übernehmen wir die Verwaltung und verlinken sie mit deiner neuen Website. Wenn du noch keine Domain hast, bekommen wir auch das für dich geregelt."
      },
      {
        q: "Ist die Website mobiloptimiert?",
        a: "Ja, selbstverständlich. Alle VANICY-Websites sind responsive und für alle Endgeräte optimiert - Smartphone, Tablet, Desktop."
      },
      {
        q: "Wie schnell lädt meine Website?",
        a: "Schnelle Ladezeiten sind Teil unseres Standards. Wir optimieren jede Website für Performance und folgen den Google-Richtlinien für Page Speed."
      },
      {
        q: "Kümmert ihr euch um Impressum und Datenschutz?",
        a: "Ja. Impressum und Datenschutzerklärung werden von uns erstellt und aktuell gehalten. Das ist im Paket inklusive. Du musst kein Anwalt sein und kein Geld für rechtliche Texte ausgeben."
      },
      {
        q: "Was passiert bei Sicherheitsproblemen oder Ausfällen?",
        a: "Wir überwachen die Infrastruktur laufend. Bei technischen Problemen reagieren wir - du musst nichts tun. Das ist der Kern des Leasing-Modells: wir tragen die technische Verantwortung."
      }
    ]
  },
  {
    title: "Änderungen & Support",
    faqs: [
      {
        q: "Wie beantrage ich Änderungen an meiner Website?",
        a: "Ausschließlich über das Ticketsystem im Kundenportal. Kein WhatsApp, keine E-Mail, kein Anruf nötig. Du öffnest ein Ticket, beschreibst die Änderung - wir setzen sie um."
      },
      {
        q: "Was gilt als eine Änderung?",
        a: "Eine Änderung ist eine spezifische, abgegrenzte Anpassung: ein Text an einer Stelle, ein Bild austauschen, eine Angabe aktualisieren (Öffnungszeiten, Telefonnummer, Preis) oder einen Link korrigieren."
      },
      {
        q: "Was ist keine Änderung?",
        a: "Neue Unterseiten, neue Sektionen, Designänderungen (Layout, Farben, Schriften), neue Formulare oder neue Funktionen sind keine Änderungen im Sinne des Pakets. Diese werden als separates Angebot behandelt."
      },
      {
        q: "Wie schnell werden Änderungen umgesetzt?",
        a: "Essential: innerhalb von 5 Werktagen. Business: innerhalb von 3 Werktagen. Pro: innerhalb von 1 Werktag."
      },
      {
        q: "Wie viele Änderungen sind pro Monat inklusive?",
        a: "Das hängt von deinem Paket ab. Nicht genutzte Änderungen verfallen monatlich und werden nicht übertragen."
      },
      {
        q: "Kann ich VANICY auch für größere Updates beauftragen?",
        a: "Ja. Wenn du zum Beispiel eine neue Seite brauchst oder ein Design-Refresh möchtest, können wir das als Zusatzleistung anbieten. Sprich uns einfach über das Portal an."
      }
    ]
  },
  {
    title: "Kündigung & Eigentumsrecht",
    faqs: [
      {
        q: "Wem gehört die Website?",
        a: "Das Design und die technische Infrastruktur der Webseite werden von VANICY bereitgestellt und gepflegt (wie beim Fahrzeugleasing). Deine eigenen Inhalte wie Texte, Fotos, Logos und Kundendaten gehören rechtlich zu 100 % dir und werden auf Wunsch jederzeit für dich exportiert."
      },
      {
        q: "Was passiert, wenn ich kündige?",
        a: "Nach Ablauf deiner Mindestlaufzeit kannst du flexibel kündigen. Wir schalten die Seite dann zum Vertragsende ab. Selbstverständlich überlassen wir dir deine Texte und Bilder als strukturierten Daten-Export, sodass du nichts verlierst."
      },
      {
        q: "Kann ich die Website nach Kündigung kaufen?",
        a: "Ja, absolut! Wir glauben an faire Partnerschaften. Wenn du die Webseite nach der Laufzeit komplett übernehmen und auf eigenen Servern weiterbetreiben möchtest, bieten wir dir ein faires Übernahme-Angebot an. Sprich uns einfach darauf an."
      },
      {
        q: "Was passiert, wenn VANICY aufhört zu existieren?",
        a: "Obwohl dieser Fall extrem unwahrscheinlich ist, bist du vollkommen abgesichert: Sollte VANICY jemals den Betrieb einstellen, garantieren wir dir vertraglich die schlüsselfertige Übergabe aller Webseiten-Dateien (Quellcode, Datenbanken und Inhalte). Du kannst die Seite dann sofort und ohne Unterbrechung bei jedem beliebigen anderen Anbieter weiterhosten."
      },
      {
        q: "Kann ich nach der Mindestlaufzeit monatlich kündigen?",
        a: "Ja. Nach Ablauf der gewählten Mindestlaufzeit (12 oder 24 Monate) kannst du monatlich mit entsprechender Frist kündigen."
      }
    ]
  },
  {
    title: "Vertrauen & Sicherheit",
    faqs: [
      {
        q: "Ist VANICY ein deutsches Unternehmen?",
        a: "Ja. VANICY ist in Deutschland ansässig und alle Verträge unterliegen deutschem Recht."
      },
      {
        q: "Wie lange gibt es VANICY schon?",
        a: "VANICY ist das Website-Leasing-Produkt des Teams hinter Step V Studio, das bereits mehrere Jahre Erfahrung im Bereich Webdesign und digitales Marketing hat."
      },
      {
        q: "Gibt es Referenzen, die ich mir ansehen kann?",
        a: "Ja. Auf unserer Website findest du eine Auswahl an Projekten die wir umgesetzt haben. Schau dir gerne an was wir für Lemuria Bay und andere Kunden gebaut haben."
      },
      {
        q: "Kann ich VANICY vor dem Kauf testen?",
        a: "Ja - dein erster Monat ist kostenlos. Du siehst deine fertige Website live bevor du entscheidest ob du bleibst."
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
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${activeCategory === idx ? 'bg-slate-900 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900:text-white'}`}
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
                      className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none hover:bg-slate-50:bg-slate-800"
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
                          <div className="p-6 sm:p-8 pt-0 text-slate-600 text-lg leading-relaxed whitespace-pre-line">
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
              href="/#analyse"
              className="inline-flex items-center justify-center gap-3 bg-slate-900 px-8 py-4 rounded-xl font-semibold text-white hover:bg-slate-800 hover:shadow-md transition-all duration-200"
            >
              Unverbindlich beraten lassen
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
