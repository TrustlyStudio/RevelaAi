'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Check, X, Minus, AlertTriangle, Clock, ArrowRight, Plus } from 'lucide-react';
import { useState } from 'react';

const comparisonData = [
  {
    feature: "Initiale Kosten",
    builder: { text: "Sehr gering", icon: <Check className="w-5 h-5 text-emerald-500" />, type: "good" },
    agency: { text: "Sehr hoch (5.000€ - 15.000€+)", icon: <X className="w-5 h-5 text-rose-500" />, type: "bad" },
    vanicy: { text: "Keine (Im Leasing inklusive)", icon: <Check className="w-5 h-5 text-emerald-500" />, type: "good" },
    details: {
      title: "Keine hohen Vorabkosten",
      text: "Normalerweise verlangen Agenturen hohe Einmalzahlungen. Beim VANICY Leasing verteilen wir die Kosten über die Laufzeit, sodass dir mehr Liquidität für Marketing und Wachstum bleibt.",
      stats: "Du sparst dir 5.000€ bis 15.000€ initiale Investition."
    },
    Visual: () => (
      <div className="w-full h-40 md:h-48 bg-slate-50 border border-slate-200 rounded-2xl mb-8 flex items-end justify-around pt-12 pb-4 px-4 md:px-6 gap-4">
         <div className="flex flex-col items-center w-full gap-2">
           <motion.div initial={{ height: 0 }} animate={{ height: 30 }} transition={{ duration: 1 }} className="w-full max-w-[80px] bg-slate-300 rounded-t-lg"></motion.div>
           <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Baukasten</span>
         </div>
         <div className="flex flex-col items-center w-full gap-2">
           <motion.div initial={{ height: 0 }} animate={{ height: 90 }} transition={{ duration: 1, delay: 0.2 }} className="w-full max-w-[80px] bg-rose-400 rounded-t-lg relative">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-rose-500 font-bold whitespace-nowrap text-xs md:text-sm">~ 10.000 €</span>
           </motion.div>
           <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Agentur</span>
         </div>
         <div className="flex flex-col items-center w-full gap-2">
           <motion.div initial={{ height: 0 }} animate={{ height: 8 }} transition={{ duration: 1, delay: 0.4 }} className="w-full max-w-[80px] bg-indigo-500 rounded-t-lg relative">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-indigo-600 font-bold whitespace-nowrap text-xs md:text-sm">0 €</span>
           </motion.div>
           <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">VANICY</span>
         </div>
      </div>
    )
  },
  {
    feature: "Dein Zeitaufwand",
    builder: { text: "Wochenlange Einarbeitung", icon: <Clock className="w-5 h-5 text-rose-500" />, type: "bad" },
    agency: { text: "Wenige Meeting-Stunden", icon: <Check className="w-5 h-5 text-emerald-500" />, type: "good" },
    vanicy: { text: "Minimal (Wir übernehmen alles)", icon: <Check className="w-5 h-5 text-emerald-500" />, type: "good" },
    details: {
      title: "Du kümmerst dich ums Geschäft",
      text: "Ein Baukasten kostet sich zahllose Nerven und Stunden. Bei klassischen Agenturen hast du teils lange Abstimmungen. Mit uns verläuft das Setup größtenteils asynchron und reibungslos über dein persönliches Dashboard.",
      stats: "Vollständige Befreiung vom IT-Management."
    },
    Visual: () => (
      <div className="w-full h-40 md:h-48 bg-slate-50 border border-slate-200 rounded-2xl mb-8 flex justify-around items-center p-4 md:p-6 gap-4">
         <div className="flex flex-col items-center w-full gap-4">
           <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-slate-200 border-t-rose-400 flex items-center justify-center">
             <Clock className="w-5 h-5 md:w-6 md:h-6 text-rose-400" />
           </motion.div>
           <div className="text-center">
             <div className="font-bold text-slate-700">Wochen</div>
             <span className="text-xs text-slate-500 uppercase tracking-wider">Baukasten</span>
           </div>
         </div>
         <div className="flex flex-col items-center w-full gap-4">
           <motion.div animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-slate-200 border-t-amber-400 flex items-center justify-center">
             <Clock className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
           </motion.div>
           <div className="text-center">
             <div className="font-bold text-slate-700">Tage</div>
             <span className="text-xs text-slate-500 uppercase tracking-wider">Agentur</span>
           </div>
         </div>
         <div className="flex flex-col items-center w-full gap-4">
           <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-indigo-200 bg-indigo-50 flex items-center justify-center">
             <Check className="w-5 h-5 md:w-6 md:h-6 text-indigo-500" />
           </div>
           <div className="text-center">
             <div className="font-bold text-indigo-600">Minimal</div>
             <span className="text-xs text-indigo-400 uppercase tracking-wider">VANICY</span>
           </div>
         </div>
      </div>
    )
  },
  {
    feature: "Design & Individualität",
    builder: { text: "Standard-Templates & Limits", icon: <AlertTriangle className="w-5 h-5 text-amber-500" />, type: "warn" },
    agency: { text: "Maßgeschneidert & Premium", icon: <Check className="w-5 h-5 text-emerald-500" />, type: "good" },
    vanicy: { text: "Maßgeschneidert & Premium", icon: <Check className="w-5 h-5 text-emerald-500" />, type: "good" },
    details: {
      title: "Premium Design ohne Limits",
      text: "Baukästen schränken designtechnisch massiv ein. Wir entwickeln maßgeschneidert von Hand - mit modernsten Technologien (Next.js, Tailwind), exakt wie eine teure Premium-Agentur, aber zum Bruchteil des Risikos.",
      stats: "0% Limitierungen durch Standard-Templates."
    },
    Visual: () => null // Optional, maybe we don't need visuals for ALL, but it's fine
  },
  {
    feature: "Ladezeiten (Pagespeed)",
    builder: { text: "Oft sehr langsam (aufgebläht)", icon: <X className="w-5 h-5 text-rose-500" />, type: "bad" },
    agency: { text: "Abhängig von der Umsetzung", icon: <Minus className="w-5 h-5 text-amber-500" />, type: "warn" },
    vanicy: { text: "Lichtgeschwindigkeit (100/100)", icon: <Check className="w-5 h-5 text-emerald-500" />, type: "good" },
    details: {
      title: "Performance auf Enterprise-Niveau",
      text: "Lange Ladezeiten killen jede Conversion. Durch unseren Headless-/Next.js-Ansatz gepaart mit globalen CDNs liefert deine Website in Millisekunden aus - weltweit. Baukästen und WordPress stoßen hier schnell an ihre Grenzen.",
      stats: "Durchschnittliche Ladezeiten unter 0.5 Sekunden."
    },
    Visual: () => (
      <div className="w-full h-40 md:h-48 bg-slate-900 border border-slate-800 rounded-2xl mb-8 flex flex-col justify-center p-6 gap-4">
         <div className="w-full">
           <div className="flex justify-between text-xs font-bold mb-2">
             <span className="text-slate-500">Baukasten</span>
             <span className="text-rose-400">Langsam (4-6s)</span>
           </div>
           <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
             <motion.div initial={{ width: 0 }} animate={{ width: "30%" }} transition={{ duration: 4 }} className="h-full bg-rose-500"></motion.div>
           </div>
         </div>
         <div className="w-full">
           <div className="flex justify-between text-xs font-bold mb-2">
             <span className="text-slate-500">Agentur</span>
             <span className="text-amber-400">Mittel (2-3s)</span>
           </div>
           <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
             <motion.div initial={{ width: 0 }} animate={{ width: "60%" }} transition={{ duration: 2 }} className="h-full bg-amber-400"></motion.div>
           </div>
         </div>
         <div className="w-full">
           <div className="flex justify-between text-xs font-bold mb-2">
             <span className="text-indigo-400">VANICY Leasing</span>
             <span className="text-emerald-400">Instant (0.1s - 0.5s)</span>
           </div>
           <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
             <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.2 }} className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></motion.div>
           </div>
         </div>
      </div>
    )
  },
  {
    feature: "Wartung & Updates",
    builder: { text: "Mühsam selbst durchzuführen", icon: <X className="w-5 h-5 text-rose-500" />, type: "bad" },
    agency: { text: "Kostenpflichtiger Wartungsvertrag", icon: <AlertTriangle className="w-5 h-5 text-amber-500" />, type: "warn" },
    vanicy: { text: "Vollautomatisch 100% Inklusive", icon: <Check className="w-5 h-5 text-emerald-500" />, type: "good" },
    details: {
      title: "Sicherheit & Updates auf Autopilot",
      text: "Plugins updaten, Backups machen, Sicherheitslücken schließen? Alles Vergangenheit. Wir kümmern uns im Hintergrund vollautomatisch um alle technischen Aspekte, sodass dein System immer auf dem neuesten Stand ist.",
      stats: "Nie wieder gehackte Websites oder defekte Plugins."
    },
    Visual: () => null
  },
  {
    feature: "Änderungen an der Website",
    builder: { text: "Zeitfressend & im Alleingang", icon: <Clock className="w-5 h-5 text-rose-500" />, type: "bad" },
    agency: { text: "Nach festem Stundensatz teuer", icon: <X className="w-5 h-5 text-rose-500" />, type: "bad" },
    vanicy: { text: "Kostenfrei per Klick im Portal", icon: <Check className="w-5 h-5 text-emerald-500" />, type: "good" },
    details: {
      title: "Änderungen einfach delegieren",
      text: "In unseren Plänen sind monatliche, kostenfreie Änderungen bereits enthalten. Neues Teammitglied? Neue Leistung? Einfach im Dashboard einreichen - wir setzen es innerhalb kürzester Zeit für dich um.",
      stats: "Keine unerwarteten Rechnungen mehr für kleine Änderungen."
    },
    Visual: () => null
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export function ComparisonSection() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-white relative border-t border-slate-200" id="vorteile">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-sans font-bold text-slate-900 tracking-tight mb-6">
            Der unfaire Vorteil.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-slate-600 leading-relaxed">
            Warum du mit einem Web-Leasing bei VANICY das Beste aus beiden Welten kombinierst: Premium-Qualität ohne das Premium-Risiko.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="relative max-w-5xl mx-auto"
        >
          {/* Mobile view: Stacked cards */}
          <div className="lg:hidden space-y-8 max-w-2xl mx-auto">
            {['builder', 'agency', 'vanicy'].map((colKey, index) => (
              <div 
                key={colKey} 
                className={`rounded-2xl border ${colKey === 'vanicy' ? 'border-slate-800 bg-slate-900 text-white shadow-xl' : 'border-slate-200 bg-slate-50 text-slate-900'} p-6 relative overflow-hidden`}
              >
                {colKey === 'vanicy' && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-2xl rounded-full -z-0"></div>
                )}
                
                <h3 className={`text-2xl font-bold mb-6 text-center ${colKey === 'vanicy' ? 'text-white' : 'text-slate-900'}`}>
                  {colKey === 'builder' && 'DIY Baukasten'}
                  {colKey === 'agency' && 'Traditionelle Agentur'}
                  {colKey === 'vanicy' && 'VANICY Leasing'}
                </h3>
                
                <div className="space-y-6 relative z-10">
                  {comparisonData.map((row, i) => (
                    <div key={i} onClick={() => setSelectedFeature(i)} className="flex flex-col gap-2 cursor-pointer group/row hover:bg-black/5 p-2 -mx-2 rounded-lg transition-colors">
                      <span className={`text-sm font-semibold uppercase tracking-wider flex items-center justify-between ${colKey === 'vanicy' ? 'text-slate-400 group-hover/row:text-white' : 'text-slate-500 group-hover/row:text-slate-900'}`}>
                        {row.feature}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover/row:opacity-100 transition-opacity" />
                      </span>
                      <div className="flex items-center gap-3">
                         <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${colKey === 'vanicy' && (row as any)[colKey].type === 'good' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white shadow-sm border border-slate-100'}`}>
                           {(row as any)[colKey].icon}
                         </div>
                         <span className="font-medium">
                           {(row as any)[colKey].text}
                         </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop view: Table */}
          <div className="hidden lg:block w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-4 border-b border-slate-200 bg-slate-50">
              <div className="p-6 lg:p-8 flex items-end">
                <span className="text-sm font-bold tracking-widest text-slate-400 uppercase">Kriterium</span>
              </div>
              <div className="p-6 lg:p-8 text-center border-l border-slate-200">
                <h3 className="text-xl font-bold text-slate-900">DIY Baukasten</h3>
                <p className="text-sm text-slate-500 mt-2">Wix, Jimdo, etc.</p>
              </div>
              <div className="p-6 lg:p-8 text-center border-l border-slate-200">
                <h3 className="text-xl font-bold text-slate-900">Traditionelle Agentur</h3>
                <p className="text-sm text-slate-500 mt-2">Klassisches Projekt</p>
              </div>
              <div className="p-6 lg:p-8 text-center border-l border-slate-900 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 -z-0"></div>
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-rose-400 to-indigo-500 blur-2xl opacity-50 rounded-full"></div>
                <h3 className="text-xl font-bold relative z-10">VANICY Leasing</h3>
                <p className="text-sm text-slate-400 mt-2 relative z-10">Unser All-in-One Ansatz</p>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {comparisonData.map((row, i) => (
                <div key={i} onClick={() => setSelectedFeature(i)} className="grid grid-cols-4 group hover:bg-slate-50 cursor-pointer relative transition-all duration-300">
                  <div className="p-6 lg:p-8 flex items-center transform transition-transform group-hover:translate-x-1">
                    <span className="font-semibold text-slate-900 flex items-center gap-2">
                      {row.feature}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-indigo-500 transition-opacity" />
                    </span>
                  </div>
                  
                  {/* Builder */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-6 lg:p-8 border-l border-slate-100 flex flex-col items-center justify-center text-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center">
                      {row.builder.icon}
                    </div>
                    <span className={`text-sm font-medium ${row.builder.type === 'bad' ? 'text-slate-600' : 'text-slate-900'}`}>{row.builder.text}</span>
                  </motion.div>

                  {/* Agency */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-6 lg:p-8 border-l border-slate-100 flex flex-col items-center justify-center text-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center">
                      {row.agency.icon}
                    </div>
                    <span className={`text-sm font-medium ${row.agency.type === 'bad' ? 'text-slate-600' : 'text-slate-900'}`}>{row.agency.text}</span>
                  </motion.div>

                  {/* VANICY */}
                  <motion.div 
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    className="p-6 lg:p-8 border-l border-slate-900 bg-slate-900 relative flex flex-col items-center justify-center text-center gap-3 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      {row.vanicy.icon}
                    </div>
                    <span className="text-sm font-semibold text-white relative z-10">{row.vanicy.text}</span>
                  </motion.div>
                </div>
              ))}
            </div>
            
            {/* CTA row at bottom of VANICY column */}
            <div className="grid grid-cols-4 bg-slate-50 border-t border-slate-200">
              <div className="col-span-3"></div>
              <div className="p-6 text-center border-l border-slate-900 bg-slate-900">
                <a href="#preise" className="inline-block bg-white text-slate-900 font-bold py-3 px-6 rounded-xl hover:bg-slate-100:bg-slate-800 transition-colors text-sm whitespace-nowrap shadow-md">
                  Pläne vergleichen
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedFeature !== null && (
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
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors z-[210] bg-white/50 backdrop-blur-sm shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 md:p-8 pt-10 border-b border-slate-100 flex items-center gap-4 bg-white relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-indigo-50 border border-indigo-100 text-indigo-600 shrink-0">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-sans text-slate-900 tracking-tight">{comparisonData[selectedFeature].feature}</h3>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto">
                {(() => {
                   const VisualComponent = comparisonData[selectedFeature].Visual;
                   return VisualComponent ? <VisualComponent /> : null;
                })()}
                <h4 className="text-xl font-bold text-slate-900 mb-4">{comparisonData[selectedFeature].details.title}</h4>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  {comparisonData[selectedFeature].details.text}
                </p>
                
                <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <Plus className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Dein VANICY-Vorteil:</h4>
                      <p className="text-indigo-900 text-sm md:text-base font-medium">
                        {comparisonData[selectedFeature].details.stats}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-center flex flex-col items-center justify-center gap-2">
                     {comparisonData[selectedFeature].builder.icon}
                     <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Baukasten</span>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-center flex flex-col items-center justify-center gap-2">
                     {comparisonData[selectedFeature].agency.icon}
                     <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Agentur</span>
                  </div>
                  <div className="p-4 rounded-xl border border-indigo-200 bg-indigo-50 text-center flex flex-col items-center justify-center gap-2 shadow-sm">
                     {comparisonData[selectedFeature].vanicy.icon}
                     <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">VANICY</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-end gap-4">
                  <button onClick={() => setSelectedFeature(null)} className="w-full sm:w-auto px-6 py-3 bg-white text-slate-600 rounded-xl font-bold hover:bg-slate-50 border border-slate-200 transition-colors">
                    Schließen
                  </button>
                  <a href="#preise" onClick={() => setSelectedFeature(null)} className="w-full sm:w-auto text-center px-6 py-3 bg-slate-900 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    Pläne ansehen
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
