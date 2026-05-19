'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Rocket, ArrowRight, CalendarHeart, Target, TrendingUp, AlertCircle, ArrowUpRight, Check } from 'lucide-react';
import Link from 'next/link';

export function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // 1. Check local storage for max 2 times per day
    const checkAvailability = () => {
      const today = new Date().toISOString().split('T')[0];
      const localData = localStorage.getItem('vanicy_lead_popup');
      let popupCount = 0;
      let lastDate = '';

      if (localData) {
        const parsed = JSON.parse(localData);
        popupCount = parsed.count || 0;
        lastDate = parsed.date || '';

        // Reset if it's a new day
        if (lastDate !== today) {
          popupCount = 0;
        }
      }

      // Check session storage for "already shown in this session"
      const sessionShown = sessionStorage.getItem('vanicy_lead_popup_session');

      return popupCount < 1 && !sessionShown;
    };

    if (!checkAvailability()) return;

    // 2. Track scroll and time
    const handleScroll = () => {
      if (window.scrollY > 1500) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 3. Trigger after conditions met
    let timer: NodeJS.Timeout;
    if (hasScrolled) {
      // Once scrolled past 1500px, wait 20 seconds before showing
      timer = setTimeout(() => {
        if (checkAvailability()) {
          setIsOpen(true);
          
          // Update storages
          const today = new Date().toISOString().split('T')[0];
          const localData = localStorage.getItem('vanicy_lead_popup');
          let popupCount = 0;
          if (localData) {
            const parsed = JSON.parse(localData);
            if (parsed.date === today) popupCount = parsed.count;
          }
          
          localStorage.setItem('vanicy_lead_popup', JSON.stringify({
            date: today,
            count: popupCount + 1
          }));
          sessionStorage.setItem('vanicy_lead_popup_session', 'true');
        }
      }, 8000);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [hasScrolled]);

  return (
    <AnimatePresence>
      {isOpen && (
        <React.Fragment>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[150] transition-opacity"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-2xl bg-white rounded-3xl shadow-2xl z-[200] overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]"
          >
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500"></div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors z-[210] bg-white/50 backdrop-blur-sm"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-5 h-full overflow-hidden">
              {/* Left Side: Visuals & Facts */}
              <div className="hidden md:flex flex-col bg-slate-900 col-span-2 p-8 text-white relative items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-slate-900"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay opacity-20"></div>
                
                <div className="relative z-10 w-full">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-[0_0_30px_rgba(99,102,241,0.3)] mx-auto">
                    <Target className="w-8 h-8 text-indigo-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-sans text-center mb-6">Wachstum vs. Stagnation</h3>
                  
                  {/* Fake Animated Chart */}
                  <div className="w-full flex items-end justify-center h-40 gap-3 border-b border-slate-700 pb-2 mb-6 relative">
                     {/* Baukasten/Old Website line */}
                     <motion.div initial={{ height: "40%" }} className="w-12 bg-slate-800 rounded-t-lg relative group">
                        <div className="absolute -top-7 inset-x-0 text-center text-xs text-slate-500 font-medium">Bisher</div>
                     </motion.div>
                     
                     <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <motion.path 
                           initial={{ pathLength: 0 }} 
                           animate={{ pathLength: 1 }} 
                           transition={{ duration: 1.5, ease: "easeOut" }}
                           d="M 20 120 Q 50 120 70 80 T 130 40 T 170 20" 
                           fill="transparent" 
                           stroke="#818cf8" 
                           strokeWidth="3" 
                           strokeDasharray="6 4"
                        />
                     </svg>
                     
                     {/* VANICY Line */}
                     <motion.div 
                        initial={{ height: "40%" }} 
                        animate={{ height: "90%" }} 
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-12 bg-indigo-500 rounded-t-lg relative shadow-[0_0_20px_rgba(99,102,241,0.5)] z-10"
                     >
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.5 }}
                          className="absolute -top-9 -right-8 bg-white text-slate-900 text-xs font-bold px-2 py-1 rounded-md shadow-lg flex items-center gap-1 whitespace-nowrap"
                        >
                          <TrendingUp className="w-3 h-3 text-rose-500" /> +340%
                        </motion.div>
                     </motion.div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3 items-start">
                       <Check className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                       <p className="text-sm text-slate-300">Konsequent mehr qualifizierte Anfragen durch Psychologie.</p>
                    </div>
                    <div className="flex gap-3 items-start">
                       <Check className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                       <p className="text-sm text-slate-300">Messbar höhere Sichtbarkeit durch 100/100 Pagespeed.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="md:col-span-3 p-6 md:p-10 relative overflow-y-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 text-rose-600 font-bold text-sm mb-6 border border-rose-100">
                  <AlertCircle className="w-4 h-4" /> Deine Mitbewerber schlafen nicht.
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold font-sans text-slate-900 mb-4 tracking-tight leading-tight">
                  Warum noch länger Umsatz verschenken?
                </h2>
                
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  Jeder Tag mit einer veralteten, langsamen Website ist ein Tag, an dem begeisterte, kaufwillige Besucher den Tab schließen. Mache jetzt den ersten Schritt, bevor deine Konkurrenz den Markt übernimmt.
                </p>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100/50 rounded-2xl p-6 mb-8 relative overflow-hidden group hover:border-indigo-200 transition-colors">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-white/40 blur-3xl opacity-50 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-12 h-12 bg-white shadow-md border border-slate-100 rounded-full flex items-center justify-center shrink-0 text-indigo-600 group-hover:scale-110 transition-transform">
                       <CalendarHeart className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Unverbindliche Potenzialanalyse</h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        Lass uns in 15 Minuten gemeinsam herausfinden, wie viel ungenutztes Potenzial in deinem aktuellen Webauftritt steckt. 100% kostenlos.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Link
                    href="/#analyse"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-4 px-6 rounded-xl flex items-center justify-between gap-2 bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
                  >
                    <span>Kostenlos Analyse anfordern</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <Link
                    href="/#preise"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-4 px-6 rounded-xl flex items-center justify-center gap-2 bg-white text-slate-700 font-bold border border-slate-200 hover:bg-slate-50 transition-all group"
                  >
                    1 Monat kostenlos testen
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <p className="text-center text-xs text-slate-400 font-medium mt-6">
                  Wir nehmen in diesem Monat nur noch eine begrenzte Anzahl an neuen Projekten an, um die Qualität hochzuhalten.
                </p>
              </div>
            </div>
          </motion.div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
}
