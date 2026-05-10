'use client';

import { motion } from 'motion/react';
import { Check, X, Minus, AlertTriangle, Clock } from 'lucide-react';

const comparisonData = [
  {
    feature: "Initiale Kosten",
    builder: { text: "Sehr gering", icon: <Check className="w-5 h-5 text-emerald-500" />, type: "good" },
    agency: { text: "Sehr hoch (5.000€ - 15.000€+)", icon: <X className="w-5 h-5 text-rose-500" />, type: "bad" },
    revela: { text: "Keine (Im Leasing inklusive)", icon: <Check className="w-5 h-5 text-emerald-500" />, type: "good" }
  },
  {
    feature: "Dein Zeitaufwand",
    builder: { text: "Wochenlange Einarbeitung", icon: <Clock className="w-5 h-5 text-rose-500" />, type: "bad" },
    agency: { text: "Wenige Meeting-Stunden", icon: <Check className="w-5 h-5 text-emerald-500" />, type: "good" },
    revela: { text: "Minimal (Wir übernehmen alles)", icon: <Check className="w-5 h-5 text-emerald-500" />, type: "good" }
  },
  {
    feature: "Design & Individualität",
    builder: { text: "Standard-Templates & Limits", icon: <AlertTriangle className="w-5 h-5 text-amber-500" />, type: "warn" },
    agency: { text: "Maßgeschneidert & Premium", icon: <Check className="w-5 h-5 text-emerald-500" />, type: "good" },
    revela: { text: "Maßgeschneidert & Premium", icon: <Check className="w-5 h-5 text-emerald-500" />, type: "good" }
  },
  {
    feature: "Ladezeiten (Pagespeed)",
    builder: { text: "Oft sehr langsam (aufgebläht)", icon: <X className="w-5 h-5 text-rose-500" />, type: "bad" },
    agency: { text: "Abhängig von der Umsetzung", icon: <Minus className="w-5 h-5 text-amber-500" />, type: "warn" },
    revela: { text: "Lichtgeschwindigkeit (100/100)", icon: <Check className="w-5 h-5 text-emerald-500" />, type: "good" }
  },
  {
    feature: "Wartung & Updates",
    builder: { text: "Mühsam selbst durchzuführen", icon: <X className="w-5 h-5 text-rose-500" />, type: "bad" },
    agency: { text: "Kostenpflichtiger Wartungsvertrag", icon: <AlertTriangle className="w-5 h-5 text-amber-500" />, type: "warn" },
    revela: { text: "Vollautomatisch 100% Inklusive", icon: <Check className="w-5 h-5 text-emerald-500" />, type: "good" }
  },
  {
    feature: "Änderungen an der Website",
    builder: { text: "Zeitfressend & im Alleingang", icon: <Clock className="w-5 h-5 text-rose-500" />, type: "bad" },
    agency: { text: "Nach festem Stundensatz teuer", icon: <X className="w-5 h-5 text-rose-500" />, type: "bad" },
    revela: { text: "Kostenfrei per Klick im Portal", icon: <Check className="w-5 h-5 text-emerald-500" />, type: "good" }
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export function ComparisonSection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative border-t border-slate-200">
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
            Warum du mit einem Web-Leasing bei Revela das Beste aus beiden Welten kombinierst: Premium-Qualität ohne das Premium-Risiko.
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
          <div className="md:hidden space-y-8">
            {['builder', 'agency', 'revela'].map((colKey, index) => (
              <div 
                key={colKey} 
                className={`rounded-2xl border ${colKey === 'revela' ? 'border-slate-800 bg-slate-900 text-white shadow-xl' : 'border-slate-200 bg-slate-50 text-slate-900'} p-6 relative overflow-hidden`}
              >
                {colKey === 'revela' && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-2xl rounded-full -z-0"></div>
                )}
                
                <h3 className={`text-2xl font-bold mb-6 text-center ${colKey === 'revela' ? 'text-white' : 'text-slate-900'}`}>
                  {colKey === 'builder' && 'DIY Baukasten'}
                  {colKey === 'agency' && 'Traditionelle Agentur'}
                  {colKey === 'revela' && 'Revela Leasing'}
                </h3>
                
                <div className="space-y-6 relative z-10">
                  {comparisonData.map((row, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <span className={`text-sm font-semibold uppercase tracking-wider ${colKey === 'revela' ? 'text-slate-400' : 'text-slate-500'}`}>
                        {row.feature}
                      </span>
                      <div className="flex items-center gap-3">
                         <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${colKey === 'revela' && (row as any)[colKey].type === 'good' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white shadow-sm border border-slate-100'}`}>
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
          <div className="hidden md:block w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
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
                <h3 className="text-xl font-bold relative z-10">Revela Leasing</h3>
                <p className="text-sm text-slate-400 mt-2 relative z-10">Unser All-in-One Ansatz</p>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {comparisonData.map((row, i) => (
                <div key={i} className="grid grid-cols-4 group hover:bg-slate-50:bg-slate-800 transition-all duration-300">
                  <div className="p-6 lg:p-8 flex items-center transform transition-transform group-hover:translate-x-1">
                    <span className="font-semibold text-slate-900">{row.feature}</span>
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

                  {/* Revela */}
                  <motion.div 
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    className="p-6 lg:p-8 border-l border-slate-900 bg-slate-900 relative flex flex-col items-center justify-center text-center gap-3 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      {row.revela.icon}
                    </div>
                    <span className="text-sm font-semibold text-white relative z-10">{row.revela.text}</span>
                  </motion.div>
                </div>
              ))}
            </div>
            
            {/* CTA row at bottom of Revela column */}
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
    </section>
  );
}
