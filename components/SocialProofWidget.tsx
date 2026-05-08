'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X } from 'lucide-react';

export function SocialProofWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(14);
  const [hasDismissed, setHasDismissed] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeElapsed(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setHasScrolled(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (timeElapsed && hasScrolled && !hasDismissed) {
      setIsVisible(true);
    }
  }, [timeElapsed, hasScrolled, hasDismissed]);

  useEffect(() => {
    if (hasDismissed) return;

    const incrementTimer = setInterval(() => {
      if (Math.random() > 0.5) {
        setCount((c) => c + 1);
      }
    }, 25000);

    return () => {
      clearInterval(incrementTimer);
    };
  }, [hasDismissed]);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    setHasDismissed(true);
  };

  const handleClick = () => {
    window.location.hash = "warteliste";
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, y: 20, x: -20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 max-w-[calc(100vw-32px)] sm:max-w-sm"
        >
          <div 
            onClick={handleClick}
            className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 pr-10 border border-rose-100 flex items-start gap-4 relative group hover:bg-white hover:shadow-[0_8px_40px_rgb(225,29,72,0.15)] hover:border-rose-200 transition-all cursor-pointer"
          >
            <button 
              onClick={handleClose}
              className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-800 hover:bg-gray-100 transition-colors z-10"
              aria-label="Schließen"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-purple-600 flex items-center justify-center shrink-0 shadow-inner relative">
              <Sparkles className="w-5 h-5 text-white" />
              <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }} 
                transition={{ duration: 2, repeat: Infinity }} 
                className="absolute -inset-1 bg-rose-500/30 rounded-full -z-10"
              />
            </div>
            
            <div>
              <p className="text-sm font-semibold text-slate-800 leading-snug">
                Heute haben sich schon <motion.span key={count} initial={{ scale: 1.5, color: '#f43f5e' }} animate={{ scale: 1, color: '#0f172a' }} className="inline-block font-black text-rose-600">{count} Unternehmen</motion.span> eingetragen!
              </p>
              <p className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600 mt-1.5 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                Sichere dir auch deinen Platz &rarr;
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
