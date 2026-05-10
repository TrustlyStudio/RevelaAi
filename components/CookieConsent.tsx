'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X, ShieldCheck } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (type: 'all' | 'necessary') => {
    localStorage.setItem('cookie-consent', type);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 z-[200] max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center text-rose-500">
              <Cookie className="w-6 h-6" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                Wir schätzen deine Privatsphäre
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
                Wir verwenden Cookies, um deine Erfahrung auf unserer Website zu verbessern, den Traffic zu analysieren und personalisierte Inhalte bereitzustellen. Durch Klicken auf "Alle akzeptieren" stimmst du der Verwendung ALLER Cookies zu.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={() => handleConsent('necessary')}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors whitespace-nowrap"
              >
                Nur notwendige
              </button>
              <button
                onClick={() => handleConsent('all')}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-md transition-all whitespace-nowrap flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                Alle akzeptieren
              </button>
            </div>

            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
