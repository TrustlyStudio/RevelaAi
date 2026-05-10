'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WaitlistModal } from '@/components/WaitlistModal';
import { CheckCircle2, Minus, ShieldCheck, Plus, Sparkles, ChevronDown, ChevronRight } from 'lucide-react';

const comparisonFeatures = [
  {
    category: "Seiten & Inhalt",
    items: [
      { name: "Website-Umfang", start: "Landingpage + 3 Unterseiten", growth: "Landingpage + 8 Unterseiten", custom: "Unlimitiert" },
      { name: "Primärer CTA", start: "Buchung / Kontakt", growth: "Konversionsfokus", custom: "Custom Funnels" },
      { name: "Texte inklusive", start: "Deutsch (Onboarding)", growth: "Deutsch (Onboarding)", custom: "Mehrsprachig möglich" },
      { name: "Bildmaterial", start: "Kunde liefert, wir optimieren", growth: "Kunde liefert, wir optimieren", custom: "Individuell" },
      { name: "Cookie Banner", start: "Basic", growth: "Erweitert (Consent)", custom: "Custom Setup" },
      { name: "Barrierefreiheit", start: "Basic", growth: "Erweitert", custom: "Premium" },
    ]
  },
  {
    category: "Design & Technik",
    items: [
      { name: "Premium Custom Design", start: true, growth: true, custom: "Vollständig individuell" },
      { name: "Mobile-First / Responsive", start: true, growth: true, custom: true },
      { name: "Hosting, SSL & Updates", start: true, growth: true, custom: "Dedizierte SLAs" },
      { name: "Performance-Basics", start: true, growth: true, custom: "Premium" },
      { name: "Integrationen (Shop, CRM)", start: false, growth: false, custom: "Individuell" },
    ]
  },
  {
    category: "SEO & Tracking",
    items: [
      { name: "Basis-SEO (H-Tags, Meta, Alt)", start: true, growth: true, custom: true },
      { name: "Indexierbarkeit & Sitemap", start: true, growth: true, custom: true },
      { name: "Erweiterte SEO (Keyword-Mapping)", start: false, growth: true, custom: true },
      { name: "Interne Verlinkung", start: false, growth: "Basis", custom: "Erweitert" },
      { name: "Tracking-Setup", start: false, growth: "Analytics (GA4/Plausible)", custom: "Custom Dashboards" },
    ]
  },
  {
    category: "Änderungen & Support",
    items: [
      { name: "Inhalts-Änderungen pro Monat", start: "Bis zu 10", growth: "Bis zu 25", custom: "Individuell" },
      { name: "Support-Kanal", start: "E-Mail", growth: "Priorisiert", custom: "Tech-Lead" },
      { name: "Release-Prozess", start: "Gebündelt", growth: "Gebündelt", custom: "Custom Sprints" },
      { name: "Lieferzeit (bis Preview)", start: "7 Tage", growth: "7 Tage", custom: "Nach Scoping" },
    ]
  }
];

const addOnsEinmalig = [
  { name: "Domain & E-Mail-Umzug", desc: "Wir ziehen deine bestehende Domain und Postfächer sicher um." },
  { name: "Zusätzliche Unterseite", desc: "Erweitere deine Website flexibel über das Paketlimit hinaus." },
  { name: "Mehrsprachigkeit", desc: "Zusätzliche Sprachen für deine internationalen Kunden." },
  { name: "Tracking/Consent Paket", desc: "DSGVO-konformes Komplett-Setup, falls nicht im Paket." },
  { name: "Foto- & Branding-Support", desc: "Vermittlung und Koordination von Top-Fotografen." },
];

const addOnsMonatlich = [
  { name: "Extra Änderungs-Paket", desc: "Z.B. +10 zusätzliche Content-Änderungen pro Monat." },
  { name: "Local SEO Pack", desc: "NAP-Konsistenz, Standort-Seite & Schema LocalBusiness." },
  { name: "AI-Chatbot Betrieb", desc: "Dein digitaler Assistent für FAQs & smarte Lead-Generierung." },
  { name: "Content-Paket", desc: "Monatlich eine neue, SEO-optimierte Service- oder Ratgeber-Seite." },
];

export default function PreisePage() {
  const [isYearly, setIsYearly] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-white selection:bg-rose-500/30">
      <Header />
      <WaitlistModal />

      <main className="flex-grow pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-sans font-bold tracking-tight mb-6">
              Transparente Preise. <br className="hidden md:block"/>
              Garantiertes Wachstum.
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Vergleiche unsere Tarife im Detail und finde das Modell, das am besten zu deinen Zielen passt. Keine versteckten Kosten, kein Technikstress. Inklusive DSGVO-Konformität und Hosting.
            </p>
          </div>

          {/* Toggle */}
          <div className="flex justify-center mb-16 relative z-20">
            <div className="bg-white dark:bg-slate-900 p-1 rounded-lg inline-flex items-center shadow-sm dark:shadow-none border border-slate-200 dark:border-slate-700">
              <button 
                onClick={() => setIsYearly(false)}
                className={`px-8 py-3 rounded-md font-semibold text-sm transition-all duration-200 ${!isYearly ? 'bg-slate-900 text-white shadow-sm dark:shadow-none' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
              >
                Monatlich
              </button>
              <button 
                onClick={() => setIsYearly(true)}
                className={`px-8 py-3 rounded-md font-semibold text-sm transition-all duration-200 flex items-center gap-2 ${isYearly ? 'bg-slate-900 text-white shadow-sm dark:shadow-none' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
              >
                Jährlich
                <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider transition-colors ${isYearly ? 'bg-white/20 text-white' : 'bg-green-100 text-green-700'}`}>
                  -15%
                </span>
              </button>
            </div>
          </div>

          {/* Table Container (Desktop) */}
          <div className="hidden lg:block bg-white dark:bg-slate-900 rounded-2xl shadow-sm dark:shadow-none border border-slate-200 dark:border-slate-700 overflow-hidden relative">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr>
                    <th className="w-[25%] p-6 xl:p-8 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-700">
                      <span className="sr-only">Features</span>
                    </th>
                    <th className="w-[25%] p-6 xl:p-8 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-center">
                      <div className="flex flex-col items-center justify-center gap-2 mb-2">
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">Start</div>
                        <div className="h-6 flex items-center justify-center">
                        {isYearly && (
                          <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded inline-block">
                            0€ Setup-Gebühr
                          </span>
                        )}
                        </div>
                      </div>
                      <div className="flex justify-center items-end gap-1 mb-2">
                        {isYearly && <span className="text-lg font-medium text-slate-400 line-through mb-1">359€</span>}
                        <span className="text-3xl font-bold text-slate-900 dark:text-white">{isYearly ? '249€' : '359€'}</span>
                        <span className="text-slate-600 dark:text-slate-300 font-medium pb-1">/ mo</span>
                      </div>
                      <div className="h-6 flex items-center justify-center mb-2">
                      {!isYearly && (
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          + Einmalige Setup-Gebühr
                        </div>
                      )}
                      </div>
                      <div className="mt-4">
                        <a href="#warteliste" className="inline-block w-full py-3 mb-2 rounded-lg font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Wählen</a>
                      </div>
                    </th>
                    <th className="w-[25%] p-6 xl:p-8 border-b border-slate-800 relative bg-slate-900 text-white text-center shadow-lg border-x border-slate-900">
                      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-rose-500 to-purple-600"></div>
                      <div className="flex flex-col items-center justify-center gap-2 mb-2">
                        <span className="bg-rose-500 text-white font-semibold px-3 py-1 rounded-full text-xs tracking-wider uppercase mb-1">
                          Empfehlung
                        </span>
                        <div className="text-2xl font-bold text-white">Growth</div>
                        <div className="h-6 flex items-center justify-center">
                        {isYearly && (
                          <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded inline-block">
                            0€ Setup-Gebühr
                          </span>
                        )}
                        </div>
                      </div>
                      <div className="flex justify-center items-end gap-1 mb-2">
                        {isYearly && <span className="text-lg font-medium text-slate-400 line-through mb-1">549€</span>}
                        <span className="text-3xl font-bold text-white">{isYearly ? '449€' : '549€'}</span>
                        <span className="text-slate-400 font-medium pb-1">/ mo</span>
                      </div>
                      <div className="h-6 flex items-center justify-center mb-2">
                      {!isYearly && (
                        <div className="text-sm text-slate-400">
                          + Einmalige Setup-Gebühr
                        </div>
                      )}
                      </div>
                      <div className="mt-4">
                        <a href="#warteliste" className="inline-block w-full py-3 mb-2 rounded-lg font-semibold text-white bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 transition-colors">Wählen</a>
                      </div>
                    </th>
                    <th className="w-[25%] p-6 xl:p-8 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-center">
                      <div className="flex flex-col items-center justify-center gap-2 mb-2">
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">Custom</div>
                        <div className="h-6 flex items-center justify-center"></div>
                      </div>
                      <div className="flex justify-center items-end gap-1 mb-2">
                        <span className="text-3xl font-bold text-slate-900 dark:text-white">Individuell</span>
                        <span className="text-transparent font-medium pb-1 select-none">/ mo</span>
                      </div>
                      <div className="h-6 flex items-center justify-center mb-2">
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          Nach Scoping
                        </div>
                      </div>
                      <div className="mt-4">
                        <a href="#warteliste" className="inline-block w-full py-3 mb-2 rounded-lg font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Anfragen</a>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonFeatures.map((category, catIdx) => (
                    <React.Fragment key={catIdx}>
                      <tr>
                        <td colSpan={4} className="bg-slate-50 dark:bg-slate-950 py-4 px-8 text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                          {category.category}
                        </td>
                      </tr>
                      {category.items.map((item, itemIdx) => (
                        <tr key={itemIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                          <td className="py-4 px-8 text-slate-600 dark:text-slate-300 font-medium">
                            {item.name}
                          </td>
                          <td className="py-4 px-8 text-center text-slate-700">
                            {typeof item.start === 'boolean' ? (
                              item.start ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <Minus className="w-5 h-5 text-slate-300 mx-auto" />
                            ) : (
                              <span className="font-semibold">{item.start}</span>
                            )}
                          </td>
                          <td className="py-4 px-8 text-center bg-slate-900 text-white border-x border-slate-800">
                            {typeof item.growth === 'boolean' ? (
                              item.growth ? (
                                <CheckCircle2 className="w-5 h-5 text-rose-400 mx-auto" />
                              ) : <Minus className="w-5 h-5 text-slate-700 mx-auto" />
                            ) : (
                              <span className="font-semibold text-rose-400">{item.growth}</span>
                            )}
                          </td>
                          <td className="py-4 px-8 text-center text-slate-700">
                            {typeof item.custom === 'boolean' ? (
                              item.custom ? <CheckCircle2 className="w-5 h-5 text-slate-900 dark:text-white mx-auto" /> : <Minus className="w-5 h-5 text-slate-300 mx-auto" />
                            ) : (
                              <span className="font-semibold text-slate-900 dark:text-white">{item.custom}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-8 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-700 text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400 flex flex-col md:flex-row items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer. DSGVO-Konformität inkludiert.</span>
              </p>
            </div>
          </div>

          {/* Mobile Pricing Cards (Mobile & Tablet) */}
          <div className="lg:hidden flex flex-col gap-6">
            {/* Start Package */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 shadow-sm dark:shadow-none border border-slate-200 dark:border-slate-700 flex flex-col">
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Start</div>
                {isYearly && (
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded inline-block mb-2">
                    0€ Setup-Gebühr
                  </span>
                )}
                <div className="flex justify-center items-end gap-1 mb-1">
                  {isYearly && <span className="text-lg font-medium text-slate-400 line-through mb-1">359€</span>}
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">{isYearly ? '249€' : '359€'}</span>
                  <span className="text-slate-600 dark:text-slate-300 font-medium pb-1">/ mo</span>
                </div>
                {!isYearly && (
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                    + Einmalige Setup-Gebühr
                  </div>
                )}
                <a href="#warteliste" className="mt-6 block w-full py-3 rounded-lg font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Wählen</a>
              </div>
              
              <div className="mt-4 space-y-6 flex-grow">
                {comparisonFeatures.map((cat, i) => (
                  <div key={i}>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">{cat.category}</h4>
                    <ul className="space-y-3">
                      {cat.items.map((item, j) => (
                        <li key={j} className="flex flex-col sm:flex-row sm:items-center justify-between text-sm py-2 border-b border-slate-50 pb-3 gap-1">
                          <span className="text-slate-600 dark:text-slate-300">{item.name}</span>
                          <span className="font-semibold text-slate-900 dark:text-white text-right">
                            {typeof item.start === 'boolean' ? (
                              item.start ? 'Inklusive' : 'Nicht enthalten'
                            ) : item.start}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth Package */}
            <div className="bg-slate-900 rounded-xl p-6 sm:p-8 shadow-lg border border-slate-800 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-rose-500 to-purple-600"></div>
              
              <div className="text-center mb-6 mt-2">
                <div className="flex justify-center mb-4">
                  <span className="bg-rose-500 text-white font-semibold px-3 py-1 rounded-full text-xs tracking-wider uppercase mb-1">
                    Empfehlung
                  </span>
                </div>
                <div className="text-2xl font-bold text-white mb-2">Growth</div>
                {isYearly && (
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded inline-block mb-3">
                    0€ Setup-Gebühr
                  </span>
                )}
                <div className="flex justify-center items-end gap-1 mb-1">
                  {isYearly && <span className="text-lg font-medium text-slate-400 line-through mb-1">549€</span>}
                  <span className="text-4xl font-bold text-white">{isYearly ? '449€' : '549€'}</span>
                  <span className="text-slate-400 font-medium pb-1">/ mo</span>
                </div>
                {!isYearly && (
                  <div className="text-sm text-slate-400 mt-2">
                    + Einmalige Setup-Gebühr
                  </div>
                )}
                <a href="#warteliste" className="mt-6 block w-full py-3 mb-2 rounded-lg font-semibold text-white bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 transition-colors">Wählen</a>
              </div>

              <div className="mt-4 space-y-6 flex-grow">
                {comparisonFeatures.map((cat, i) => (
                  <div key={i}>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-rose-400 mb-3">{cat.category}</h4>
                    <ul className="space-y-3">
                      {cat.items.map((item, j) => (
                        <li key={j} className="flex flex-col sm:flex-row sm:items-center justify-between text-sm py-2 border-b border-slate-800 pb-3 gap-1">
                          <span className="text-slate-400">{item.name}</span>
                          <span className="font-semibold text-white text-right">
                            {typeof item.growth === 'boolean' ? (
                              item.growth ? 'Inklusive' : 'Nicht enthalten'
                            ) : item.growth}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Package */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 shadow-sm dark:shadow-none border border-slate-200 dark:border-slate-700 flex flex-col relative overflow-hidden">
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Custom</div>
                <div className="h-6"></div> {/* Spacer for alignment */}
                <div className="flex justify-center items-end gap-1 mb-1 mt-2">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">Individuell</span>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  Nach Scoping
                </div>
                <a href="#warteliste" className="mt-8 block w-full py-3 mb-2 rounded-lg font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Anfragen</a>
              </div>

              <div className="mt-4 space-y-6 flex-grow">
                {comparisonFeatures.map((cat, i) => (
                  <div key={i}>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">{cat.category}</h4>
                    <ul className="space-y-3">
                      {cat.items.map((item, j) => (
                        <li key={j} className="flex flex-col sm:flex-row sm:items-center justify-between text-sm py-2 border-b border-slate-50 pb-3 gap-1">
                          <span className="text-slate-600 dark:text-slate-300">{item.name}</span>
                          <span className="font-semibold text-slate-900 dark:text-white text-right">
                            {typeof item.custom === 'boolean' ? (
                              item.custom ? 'Vollständig individuell' : 'Speziell'
                            ) : item.custom}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl text-center shadow-sm dark:shadow-none">
              <p className="text-sm text-slate-500 dark:text-slate-400 flex flex-col items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="leading-relaxed">Alle Preise zzgl. MwSt. Inklusive DSGVO-Konformität.</span>
              </p>
            </div>
          </div>

          {/* Add-ons Section */}
          <div className="mt-32">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-slate-900 dark:text-white">Erweitere dein Paket nach Bedarf</h2>
              <p className="text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">Bade nicht in Features, die du nicht brauchst. Buche gezielt das dazu, was deinem Business das nächste Level gibt.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Einmalige Add-ons */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-10 shadow-sm dark:shadow-none border border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                  Einmalige Add-ons
                </h3>
                <ul className="space-y-6">
                  {addOnsEinmalig.map((addon, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="mt-1 bg-slate-100 dark:bg-slate-800 rounded-full p-2 h-8 w-8 flex items-center justify-center shrink-0">
                        <Plus className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">{addon.name}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">{addon.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Monatliche Add-ons */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-10 shadow-sm dark:shadow-none border border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                  Monatliche Add-ons
                </h3>
                <ul className="space-y-6">
                  {addOnsMonatlich.map((addon, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="mt-1 bg-rose-50 rounded-full p-2 h-8 w-8 flex items-center justify-center shrink-0">
                        <Plus className="w-4 h-4 text-rose-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">{addon.name}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">{addon.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-32 max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-slate-900 dark:text-white mb-4">Häufig gestellte Fragen</h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg">Alles, was du über unser Web-Leasing Modell wissen musst.</p>
            </div>
            
            <div className="space-y-3">
              {[
                { q: "Was ist in der einmaligen Setup-Gebühr enthalten?", a: "Die Setup-Gebühr deckt die gesamte Initiale Konzeption, das strategische Copywriting, das Custom Design und die Programmierung deiner Onepager Landingpage oder Website ab. Wir arbeiten so lange, bis du zu 100% zufrieden bist." },
                { q: "Gibt es versteckte Kosten beim monatlichen Paket?", a: "Nein, überhaupt nicht. Die monatliche Rate deckt Domain, Hosting, professionelle E-Mails, SSL-Zertifikate, DSGVO-Tools (wie ein Premium Cookie-Banner), regelmäßige Software- und Sicherheits-Updates sowie ein definiertes Kontingent an inhaltlichen Änderungen ab. Alles inklusive." },
                { q: "Was passiert nach den 12 Monaten Mindestlaufzeit?", a: "Nach Ablauf des ersten Jahres ist der Vertrag flexibel auf monatlicher Basis kündbar. Du bist niemals langfristig gebunden und bleibst flexibel." },
                { q: "Gehört die Website nach der Kündigung mir?", a: "Mit unserem Web-Leasing-Modell abonnierst du eine Komplettbetreuung als Service. Die Seite liegt in unserer Infrastruktur. Wenn du kündigst, kannst du natürlich deine Domain und Inhalte mitnehmen. Der Code geht gegen eine Einmalablöse an dich über, falls das gewünscht ist." },
                { q: "Wie schnell werden inhaltliche Änderungen umgesetzt?", a: "Wir wissen, dass im Business oft Schnelligkeit zählt. Normale inhaltliche Änderungen (Textanpassungen, neue Bilder, Team-Updates) werden in der Regel innerhalb von 48 Stunden umgesetzt. Im Growth-Paket sogar priorisiert." }
              ].map((faq, i) => (
                <div 
                  key={i} 
                  className={`border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden transition-all duration-200 bg-white dark:bg-slate-900`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    <span className={`font-semibold text-lg pr-8 text-slate-900 dark:text-white`}>
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
                        <div className="p-6 pt-0 text-slate-600 dark:text-slate-300 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/faq" className="inline-flex items-center gap-2 border-b-2 border-slate-900 text-slate-900 dark:text-white font-bold hover:text-rose-600 hover:border-rose-600 pb-1 transition-colors">
                Weitere Fragen ansehen <ChevronRight className="w-4 h-4 mt-0.5" />
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
