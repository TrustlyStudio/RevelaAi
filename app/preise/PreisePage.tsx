'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PromoCodeModal } from '@/components/PromoCodeModal';
import { Minus, Plus, ChevronDown, ChevronRight } from 'lucide-react';

const comparisonFeatures = [
  {
    category: "Basis & Struktur",
    items: [
      { name: "Anzahl Unterseiten", essential: "Bis zu 3", business: "Bis zu 6", pro: "Bis zu 9" },
      { name: "Kontaktformulare", essential: "1 Formular", business: "Bis zu 2", pro: "Bis zu 5 + Logik" },
      { name: "VANICY Dashboard", essential: "Inklusive", business: "Inklusive", pro: "Inklusive" },
      { name: "Eigenes Content Management", essential: "Nicht enthalten", business: "Nicht enthalten", pro: "Inklusive" },
      { name: "Blog / News Sektion", essential: "Nicht enthalten", business: "Standard", pro: "Erweitert (Kategorien)" },
    ]
  },
  {
    category: "Design & Conversion",
    items: [
      { name: "Premium Custom Webdesign", essential: "Inklusive", business: "Inklusive", pro: "Inklusive" },
      { name: "Mobile First & Responsive", essential: "Inklusive", business: "Inklusive", pro: "Inklusive" },
      { name: "Conversion Rate Optimierung", essential: "Basis", business: "Erweitert", pro: "Premium" },
      { name: "Call-to-Action (CTA) Fokus", essential: "Standard", business: "Datengetrieben", pro: "A/B Testing Konzipiert" },
      { name: "Micro-Animations & Hover", essential: "Basis", business: "Erweitert", pro: "Premium" },
    ]
  },
  {
    category: "Technologie & Performance",
    items: [
      { name: "Premium High-Speed Hosting", essential: "Inklusive", business: "Inklusive", pro: "Inklusive" },
      { name: "SSL-Zertifikat & Verschlüsselung", essential: "Inklusive", business: "Inklusive", pro: "Inklusive" },
      { name: "Globales CDN für max. Speed", essential: "Inklusive", business: "Inklusive", pro: "Inklusive" },
      { name: "Barrierefreiheit", essential: "Basis", business: "Erweitert", pro: "WCAG 2.1 Level AA" },
      { name: "Security & Firewall", essential: "Inklusive", business: "Inklusive", pro: "Inklusive" },
    ]
  },
  {
    category: "SEO & Sichtbarkeit",
    items: [
      { name: "Technisches SEO-Setup", essential: "Basis", business: "Erweitert", pro: "Pro" },
      { name: "Onpage SEO", essential: "Basis (Titles)", business: "Keyword-optimiert", pro: "Maximum / Siloing" },
      { name: "Google Business Integration", essential: "Nicht enthalten", business: "Inklusive", pro: "Inklusive" },
      { name: "Google Analytics & Tracking", essential: "Nicht enthalten", business: "Nicht enthalten", pro: "Basic Setup" },
      { name: "Pagespeed Optimierung", essential: "Gut", business: "Sehr Gut", pro: "Premium (>90 Score)" },
    ]
  },
  {
    category: "Service & Betreuung",
    items: [
      { name: "Inhaltsänderungen / Monat", essential: "Bis zu 10", business: "Bis zu 25", pro: "Bis zu 50" },
      { name: "Support-Level", essential: "Standard Support", business: "Prio Support", pro: "Prio + Telefon Support" },
      { name: "Premium Onboarding Call", essential: "Inklusive", business: "Inklusive", pro: "Inklusive" },
      { name: "Regelmäßiges Reporting", essential: "Nicht enthalten", business: "Nicht enthalten", pro: "Monatlicher Report" },
    ]
  },
  {
    category: "Rechtliches & Compliance",
    items: [
      { name: "DSGVO-konformes Setup", essential: "Inklusive", business: "Inklusive", pro: "Inklusive" },
      { name: "Cookie-Consent-Banner", essential: "Basis-Banner", business: "Consent-Management", pro: "Consent-Management" },
      { name: "Impressum & Datenschutz", essential: "Basis-Generator", business: "Partner-Rechtstexte", pro: "Integrierte Lösung" },
    ]
  }
];

const addOnsEinmalig = [
  { name: "Domain & E-Mail-Umzug", desc: "Wir ziehen deine bestehende Domain und Postfächer sicher um." },
  { name: "Zusätzliche Unterseite", desc: "Erweitere deine Website flexibel über das Paketlimit hinaus." },
  { name: "Mehrsprachigkeit", desc: "Zusätzliche Sprachen für deine internationalen Kunden." },
  { name: "Foto- & Branding-Support", desc: "Vermittlung und Koordination von Top-Fotografen." },
];

const addOnsMonatlich = [
  { name: "Extra Änderungs-Paket", desc: "Z.B. +10 zusätzliche Content-Änderungen pro Monat." },
  { name: "Local SEO Pack", desc: "NAP-Konsistenz, Standort-Seite & Schema LocalBusiness." },
  { name: "AI-Chatbot Betrieb", desc: "Dein digitaler Assistent für FAQs & smarte Lead-Generierung." },
  { name: "Content-Paket", desc: "Monatlich eine neue, SEO-optimierte Service- oder Ratgeber-Seite." },
];

const getTooltipText = (val: string) => {
  if (val.includes('Basis')) return "Umfasst grundlegende Best-Practices als solides Fundament.";
  if (val.includes('Standard')) return "Bewährte Umsetzung, die für die meisten Standard-Anwendungsfälle passt.";
  if (val.includes('Erweitert')) return "Erweiterte Maßnahmen inklusive tieferer Optimierungen für bessere Performance.";
  if (val.includes('Premium')) return "Maximaler Aufwand: State-of-the-Art Umsetzung mit höchstem Detailgrad.";
  return null;
};

const FeatureValue = ({ value, isBusiness, className = "font-semibold text-sm", isMobile = false }: { value: string, isBusiness?: boolean, className?: string, isMobile?: boolean }) => {
  if (value === 'Nicht enthalten') {
    return <Minus className={`w-5 h-5 text-slate-300 ${isMobile ? 'ml-auto' : 'mx-auto'}`} />;
  }

  const tooltip = getTooltipText(value);
  const colorClass = isBusiness ? "text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600 font-bold" : "";

  if (!tooltip) {
    return <span className={`${className} ${colorClass}`}>{value}</span>;
  }

  return (
    <div className={`relative group/tooltip inline-block cursor-help z-10 ${isMobile ? 'w-auto' : 'w-full text-center lg:w-auto'}`}>
      <span className={`${className} ${colorClass} border-b border-dotted border-slate-400/60 pb-0.5`}>{value}</span>
      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 p-2.5 bg-slate-900 text-white text-xs font-medium leading-relaxed rounded-lg shadow-xl opacity-0 pointer-events-none group-hover/tooltip:opacity-100 transition-all duration-200 z-50 text-center scale-95 group-hover/tooltip:scale-100 origin-bottom">
        {tooltip}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
      </div>
    </div>
  );
};

export default function PreisePage() {
  const [term, setTerm] = useState<12 | 24>(24);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState('');

  const handleCheckoutClick = (url: string) => {
    setCheckoutUrl(url);
    setIsPromoModalOpen(true);
  };

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

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-rose-500/30">
      <Header />
      <PromoCodeModal 
        isOpen={isPromoModalOpen} 
        onClose={() => setIsPromoModalOpen(false)} 
        checkoutUrl={checkoutUrl} 
      />

      <main className="flex-grow pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h1 className="text-5xl md:text-6xl font-sans font-bold tracking-tight mb-6">
              Transparente Preise. <br className="hidden md:block"/>
              Garantiertes Wachstum.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Vergleiche unsere Tarife und sichere dir jetzt deine Premium-Website, mit der du online wächst.
            </p>

            <div className="flex justify-center mb-12 w-full px-4 mt-8">
              <div className="w-full max-w-3xl">
                <div className="relative rounded-2xl bg-slate-900 border border-slate-800/80 overflow-hidden shadow-2xl shadow-slate-900/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full transition-opacity opacity-50 group-hover:opacity-100 pointer-events-none"></div>
                  
                  <div className="relative z-10 text-center sm:text-left flex-1">
                    <div className="inline-flex items-center justify-center sm:justify-start gap-3 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-md border border-emerald-400/20">Limitiertes Angebot</span>
                      <span className="text-slate-400 text-sm font-medium">Regulär: <span className="line-through decoration-slate-500 decoration-2">299€ Setup</span></span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2.5">
                       Keine Einrichtungsgebühr für Erstkunden.
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Entscheide dich jetzt und starte ohne Initialkosten. Klicke bei deinem Wunsch-Paket auf <strong className="text-slate-200 font-semibold">Wählen</strong>, um deinen exklusiven Aktionscode zu erhalten.
                    </p>
                  </div>
                  
                  <div className="relative z-10 shrink-0 w-full sm:w-auto flex flex-col items-center justify-center pt-4 sm:pt-0 border-t sm:border-t-0 sm:border-l border-slate-700/50 sm:pl-8">
                    <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 drop-shadow-sm mb-1 leading-none tracking-tighter">
                      0€
                    </div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Setup-Kosten</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-16 relative z-20">
            <div className="bg-slate-100/80 p-1.5 rounded-xl inline-flex items-center border border-slate-200/60">
              <button 
                onClick={() => setTerm(12)}
                className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-200 ${term === 12 ? 'bg-white shadow-sm border border-slate-200/50 text-slate-900' : 'text-slate-500 hover:text-slate-800'}`}
              >
                12 Monate
              </button>
              <button 
                onClick={() => setTerm(24)}
                className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-200 flex items-center gap-2 ${term === 24 ? 'bg-white shadow-sm border border-rose-100/50 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600' : 'text-slate-500 hover:text-slate-800'}`}
              >
                24 <span className={term === 24 ? 'text-purple-600' : ''}>Monate</span>
                <span className={`px-2 py-0.5 rounded-md text-[10px] uppercase font-black tracking-widest transition-colors shadow-sm ${term === 24 ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                  Empfehlung
                </span>
              </button>
            </div>
          </div>

          <div className="hidden lg:block bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden relative">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr>
                    <th className="w-[20%] p-6 xl:p-8 bg-slate-50 border-b border-slate-200">
                      <span className="sr-only">Features</span>
                    </th>
                    <th className="w-[26%] p-6 xl:p-8 border-b border-slate-200 bg-white text-center hover:bg-slate-50/80 transition-colors duration-300 group">
                      <div className="flex flex-col items-center justify-center gap-2 mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                        <div className="text-2xl font-bold text-slate-900">Essential</div>
                      </div>
                      <div className="flex justify-center items-end gap-1 mb-2 transition-transform duration-300 group-hover:scale-105">
                        <span className="text-3xl font-bold text-slate-900">{pricing[term].essential.price}€</span>
                        <span className="text-slate-600 font-medium pb-1">/ mo</span>
                      </div>
                      <div className="h-6 flex items-center justify-center mb-2">
                        {term > 12 && (
                          <div className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                            Du sparst insgesamt {getSavings('essential')}€
                          </div>
                        )}
                      </div>
                      <div className="mt-4 flex flex-col gap-2 transition-transform duration-300 group-hover:translate-y-1">
                        <button onClick={() => handleCheckoutClick(pricing[term].essential.trialLink)} className="inline-block w-full py-2 rounded-lg font-bold text-white bg-green-500 hover:bg-green-600 hover:shadow-sm transition-all text-sm">1 Monat kostenlos testen</button>
                        <button onClick={() => handleCheckoutClick(pricing[term].essential.directLink)} className="inline-block w-full py-2 mb-2 rounded-lg font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 hover:shadow-sm transition-all text-sm">Direkt kaufen</button>
                      </div>
                    </th>
                    <th className="w-[26%] p-6 xl:p-8 border-b-2 border-rose-200 relative bg-white text-center shadow-lg shadow-rose-500/10 border-x border-rose-100/50 z-10 hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-300 group">
                      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-rose-500 to-purple-600"></div>
                      <div className="flex flex-col items-center justify-center gap-2 mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                        <span className="bg-gradient-to-r from-rose-500 to-purple-600 text-white font-semibold px-3 py-1 rounded-full text-[10px] tracking-widest uppercase mb-1 shadow-sm">
                          Am beliebtesten
                        </span>
                        <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">Business</div>
                      </div>
                      <div className="flex justify-center items-end gap-1 mb-2 transition-transform duration-300 group-hover:scale-110">
                        <span className="text-3xl font-black text-slate-900">{pricing[term].business.price}€</span>
                        <span className="text-slate-500 font-medium pb-1">/ mo</span>
                      </div>
                      <div className="h-6 flex items-center justify-center mb-2">
                        {term > 12 && (
                          <div className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded border border-rose-100">
                            Du sparst {getSavings('business')}€
                          </div>
                        )}
                      </div>
                      <div className="mt-4 flex flex-col gap-2 transition-transform duration-300 group-hover:translate-y-1">
                        <button onClick={() => handleCheckoutClick(pricing[term].business.trialLink)} className="inline-block w-full py-2 rounded-lg font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg transition-all shadow-md shadow-green-500/20 active:scale-95 text-sm">1 Monat kostenlos testen</button>
                        <button onClick={() => handleCheckoutClick(pricing[term].business.directLink)} className="inline-block w-full py-2 mb-2 rounded-lg font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 hover:shadow-sm transition-all text-sm">Direkt kaufen</button>
                      </div>
                    </th>
                    <th className="w-[26%] p-6 xl:p-8 border-b border-slate-200 bg-white text-center border-r border-slate-200 hover:bg-slate-50/80 transition-colors duration-300 group">
                      <div className="flex flex-col items-center justify-center gap-2 mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                        <div className="text-2xl font-bold text-slate-900">Pro</div>
                      </div>
                      <div className="flex justify-center items-end gap-1 mb-2 transition-transform duration-300 group-hover:scale-105">
                        <span className="text-3xl font-bold text-slate-900">{pricing[term].pro.price}€</span>
                        <span className="text-slate-600 font-medium pb-1">/ mo</span>
                      </div>
                      <div className="h-6 flex items-center justify-center mb-2">
                        {term > 12 && (
                          <div className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                            Du sparst insgesamt {getSavings('pro')}€
                          </div>
                        )}
                      </div>
                      <div className="mt-4 flex flex-col gap-2 transition-transform duration-300 group-hover:translate-y-1">
                        <button onClick={() => handleCheckoutClick(pricing[term].pro.link)} className="inline-block w-full py-2 rounded-lg font-semibold text-white bg-slate-900 hover:bg-slate-800 hover:shadow-sm transition-all text-sm">Direkt kaufen</button>
                        <Link href="/#analyse" className="inline-block w-full py-2 mb-2 rounded-lg font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 hover:shadow-sm transition-all text-sm text-center">Kostenlos beraten lassen</Link>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonFeatures.map((category, catIdx) => (
                    <React.Fragment key={catIdx}>
                      <tr>
                        <td colSpan={4} className="bg-slate-50 py-4 px-8 text-sm font-semibold text-slate-900 uppercase tracking-wider">
                          {category.category}
                        </td>
                      </tr>
                      {category.items.map((item, itemIdx) => (
                        <tr key={itemIdx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-4 px-8 text-slate-600 font-medium whitespace-nowrap">
                            {item.name}
                          </td>
                          <td className="py-4 px-6 text-center text-slate-700">
                            <FeatureValue value={item.essential} />
                          </td>
                          <td className="py-4 px-6 text-center bg-rose-50/50 border-x border-rose-100/50">
                            <FeatureValue value={item.business} isBusiness />
                          </td>
                          <td className="py-4 px-6 text-center text-slate-700 border-r border-slate-100">
                            <FeatureValue value={item.pro} />
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-8 bg-slate-50 border-t border-slate-200 text-center">
              <p className="text-sm text-slate-600 leading-relaxed max-w-4xl mx-auto">
                <strong>B2B-Webleasing mit monatlicher Abrechnung.</strong> Die Mindestlaufzeit ergibt sich aus der gewählten Laufzeitoption ({term} Monate). Kündigungsfrist: 1 Monat zum Laufzeitende. Erfolgt keine fristgerechte Kündigung, verlängert sich der Vertrag automatisch um die jeweils gewählte Laufzeit. Alle Preise netto zzgl. gesetzlicher MwSt.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl p-8 shadow-lg text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-left">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                <span className="bg-white/10 text-rose-300 text-xs px-2.5 py-1 rounded-md uppercase tracking-widest font-bold">Enterprise</span>
                Voll-Individuell
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Dein Projekt sprengt den Rahmen obiger Pakete? Du brauchst voll-individuelle Architekturen, spezielle API-Anbindungen, eigene Funnels oder eine Web-App? Kein Problem.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-400 font-medium">
                <span className="flex items-center gap-1.5"><Plus className="w-4 h-4 text-emerald-400" /> Unlimitierte Seiten & Logik</span>
                <span className="flex items-center gap-1.5"><Plus className="w-4 h-4 text-emerald-400" /> A/B Testing Konzipiert</span>
                <span className="flex items-center gap-1.5"><Plus className="w-4 h-4 text-emerald-400" /> Dedizierter Tech-Lead</span>
              </div>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <a href="mailto:hello@vanicy.de" className="inline-block w-full md:w-auto text-center py-4 px-8 rounded-xl font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow-xl">
                Jetzt anfragen
              </a>
            </div>
          </div>

          <div className="lg:hidden flex flex-col gap-8 max-w-2xl mx-auto">
            {['essential', 'business', 'pro'].map((planKey) => {
              const isBusiness = planKey === 'business';
              const plan = planKey as 'essential' | 'business' | 'pro';
              const planName = plan.charAt(0).toUpperCase() + plan.slice(1);
              
              return (
                <div key={plan} className={`rounded-xl p-6 sm:p-8 shadow-sm border ${isBusiness ? 'bg-white border-2 border-rose-200 shadow-rose-500/10 text-slate-800 z-20 hover:shadow-2xl hover:shadow-rose-500/20 hover:-translate-y-2' : 'bg-white border-slate-200 hover:shadow-xl hover:-translate-y-1 relative z-10'} flex flex-col transition-all duration-300 hover:scale-[1.02] group`}>
                  {isBusiness && <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-rose-500 to-purple-600"></div>}
                  
                  <div className="text-center mb-6">
                    {isBusiness && (
                      <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-1">
                        <span className="bg-gradient-to-r from-rose-500 to-purple-600 text-white font-semibold px-3 py-1 rounded-full text-[10px] tracking-widest uppercase mb-1 shadow-sm">Am beliebtesten</span>
                      </div>
                    )}
                    <div className={`text-2xl font-black mb-2 transition-transform duration-300 group-hover:scale-105 ${isBusiness ? 'text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600' : 'text-slate-900'}`}>{planName}</div>
                    <div className="flex justify-center items-end gap-1 mb-1 transition-transform duration-300 group-hover:scale-105">
                      <span className={`text-4xl font-black ${isBusiness ? 'text-slate-900' : 'text-slate-900'}`}>{pricing[term][plan].price}€</span>
                      <span className={`font-medium pb-1 ${isBusiness ? 'text-slate-500' : 'text-slate-500'}`}>/ mo</span>
                    </div>
                    {term > 12 && (
                      <div className="mt-2 mb-4">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded border ${isBusiness ? 'text-rose-600 bg-rose-50 border-rose-100' : 'text-emerald-600 bg-emerald-50 border-emerald-100'}`}>
                          Du sparst insgesamt {getSavings(plan)}€
                        </span>
                      </div>
                    )}
                    
                    <div className="mt-6 flex flex-col gap-3">
                      {plan !== 'pro' ? (
                        <>
                          <button onClick={() => handleCheckoutClick(pricing[term][plan].trialLink!)} className={`block w-full py-3 rounded-lg font-bold transition-all shadow-sm active:scale-95 ${
                            isBusiness 
                              ? 'text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-green-500/20' 
                              : 'text-white bg-green-500 hover:bg-green-600'
                          }`}>1 Monat kostenlos testen</button>
                          
                          <button onClick={() => handleCheckoutClick(pricing[term][plan].directLink!)} className="block w-full py-3 rounded-lg font-semibold transition-all text-slate-700 bg-white border border-slate-300 hover:bg-slate-50">Direkt kaufen</button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => handleCheckoutClick(pricing[term].pro.link!)} className="block w-full py-3 rounded-lg font-bold transition-all shadow-sm active:scale-95 text-white bg-slate-900 border border-slate-900 hover:bg-slate-800 hover:border-slate-800">Direkt kaufen</button>
                          
                          <Link href="/#analyse" className="block w-full py-3 rounded-lg font-semibold transition-all text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 text-center">Kostenlos beraten lassen</Link>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-6 flex-grow">
                    {comparisonFeatures.map((cat, i) => (
                      <div key={i}>
                        <div className={`text-sm font-bold uppercase tracking-wider mb-3 ${isBusiness ? 'text-rose-500' : 'text-slate-400'}`}>{cat.category}</div>
                        <ul className="space-y-3">
                          {cat.items.map((item, j) => {
                            const val = item[plan];
                            return (
                              <li key={j} className={`flex flex-col text-sm py-2 border-b pb-3 gap-1 ${isBusiness ? 'border-rose-100' : 'border-slate-100'}`}>
                                <span className={isBusiness ? 'text-slate-500 font-medium' : 'text-slate-600'}>{item.name}</span>
                                <div className="flex justify-end">
                                  <FeatureValue value={val} isBusiness={isBusiness} isMobile className={!isBusiness ? "font-bold text-slate-900" : ""} />
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
            
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl text-center shadow-sm">
              <p className="text-sm text-slate-500 leading-relaxed text-left">
                <strong>B2B-Webleasing mit monatlicher Abrechnung.</strong> Die Mindestlaufzeit beträgt {term} Monate. Kündigungsfrist: 1 Monat zum Laufzeitende. Automatische Verlängerung um {term} Monate. Alle Preise netto zzgl. gesetzlicher MwSt.
              </p>
            </div>
          </div>

          <div className="mt-32">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-slate-900">Erweitere dein Paket nach Bedarf</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">Einmalige Add-ons</h3>
                <ul className="space-y-6">
                  {addOnsEinmalig.map((addon, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="mt-1 bg-slate-100 rounded-full p-2 h-8 w-8 flex items-center justify-center shrink-0">
                        <Plus className="w-4 h-4 text-slate-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{addon.name}</h4>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">{addon.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">Monatliche Add-ons</h3>
                <ul className="space-y-6">
                  {addOnsMonatlich.map((addon, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="mt-1 bg-rose-50 rounded-full p-2 h-8 w-8 flex items-center justify-center shrink-0">
                        <Plus className="w-4 h-4 text-rose-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{addon.name}</h4>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">{addon.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-32 max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-slate-900 mb-4">Häufig gestellte Fragen</h2>
            </div>
            <div className="space-y-3">
              {[
                { q: "Was ist mit der einmaligen Setup-Gebühr?", a: "Regulär beträgt die Setup-Gebühr einmalig 299€. Darin enthalten sind das Onboarding, die Setup-Strategie, Domain- & E-Mail-Einrichtung (DNS etc.) sowie der Zugang zum VANICY Dashboard. Aktuell hast du jedoch die Chance auf einen Aktionscode an der Kasse, der diese Gebühr auf 0€ reduziert!" },
                { q: "Gibt es versteckte Kosten beim monatlichen Paket?", a: "Nein, überhaupt nicht. Die monatliche Rate deckt Domain, Hosting, professionelle E-Mails, SSL-Zertifikate, DSGVO-Tools (wie ein Premium Cookie-Banner), regelmäßige Software- und Sicherheits-Updates sowie ein definiertes Kontingent an inhaltlichen Änderungen ab. Alles inklusive." },
                { q: "Was passiert nach Ende der Mindestlaufzeit?", a: "Der Vertrag verlängert sich automatisch um die gleiche, ursprünglich gewählte Laufzeit, wenn er nicht mit einer Frist von 1 Monat zum Laufzeitende gekündigt wird." },
                { q: "Gehört die Website nach der Kündigung mir?", a: "Mit unserem Web-Leasing-Modell abonnierst du eine Komplettbetreuung als Service. Die Seite liegt in unserer Infrastruktur. Wenn du kündigst, kannst du natürlich deine Domain und Inhalte mitnehmen. Der Code geht gegen eine Einmalablöse an dich über, falls das gewünscht ist." },
                { q: "Wie schnell werden inhaltliche Änderungen umgesetzt?", a: "Wir wissen, dass im Business oft Schnelligkeit zählt. Normale inhaltliche Änderungen (Textanpassungen, neue Bilder, Team-Updates) werden in der Regel innerhalb von 48 Stunden umgesetzt. In den Business- und Pro-Paketen profitierst du von priorisiertem Support!" }
              ].map((faq, i) => (
                <div key={i} className={`border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 bg-white`}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-slate-50">
                    <span className={`font-semibold text-lg pr-8 text-slate-900`}>{faq.q}</span>
                    <div className={`flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-rose-500' : 'text-slate-400'}`}>
                       <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="p-6 pt-0 text-slate-600 leading-relaxed">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/faq" className="inline-flex items-center gap-2 border-b-2 border-slate-900 text-slate-900 font-bold hover:text-rose-600 hover:border-rose-600 pb-1 transition-colors">
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

