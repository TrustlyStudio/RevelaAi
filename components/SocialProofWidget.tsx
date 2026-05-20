'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const notifications = [
  { name: 'Sarah M.', location: 'München', action: 'hat soeben ein Erstgespräch gebucht.' },
  { name: 'Thomas K.', location: 'Berlin', action: 'hat sich unverbindlich beraten lassen.' },
  { name: 'Michael B.', location: 'Hamburg', action: 'hat sich den Business-Plan gesichert.' },
  { name: 'Julia W.', location: 'Frankfurt', action: 'hat soeben ein Erstgespräch gebucht.' },
  { name: 'Andreas S.', location: 'Wien', action: 'hat den Essential-Plan gestartet.' },
];

export function SocialProofWidget() {
  const [status, setStatus] = useState<'initial' | 'visible' | 'waiting'>('initial');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    if (hasDismissed) return;

    let timer: NodeJS.Timeout;

    if (status === 'initial') {
      // Wait 25 seconds before showing the first notification
      timer = setTimeout(() => {
        setStatus('visible');
      }, 25000);
    } else if (status === 'visible') {
      // Show for 6 seconds, then switch to waiting
      timer = setTimeout(() => {
        setStatus('waiting');
      }, 6000);
    } else if (status === 'waiting') {
      // Wait 45 seconds, then show next
      timer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setStatus('visible');
      }, 45000);
    }

    return () => clearTimeout(timer);
  }, [status, hasDismissed]);

  const isVisible = status === 'visible';

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHasDismissed(true);
    setStatus('waiting');
  };

  const notification = notifications[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && !hasDismissed && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95, y: 20, x: -20 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="fixed bottom-6 left-6 z-50 max-w-[calc(100vw-48px)] sm:max-w-xs"
        >
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 pr-8 border border-slate-200 flex items-start gap-3 relative cursor-default">
            <button 
              onClick={handleClose}
              className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-800:text-slate-100 hover:bg-slate-100:bg-slate-800 transition-colors z-10"
              aria-label="Schließen"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100 relative mt-0.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            </div>
            
            <div className="pt-0.5">
              <p className="text-sm font-semibold text-slate-800 leading-tight">
                {notification.name} <span className="text-slate-400 font-normal">aus {notification.location}</span>
              </p>
              <p className="text-xs text-slate-600 mt-1 leading-snug">
                {notification.action}
              </p>
              <span className="text-[10px] text-slate-400 font-medium block mt-1.5 uppercase tracking-wider">
                Vor 1 Minute
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
