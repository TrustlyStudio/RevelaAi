import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, ArrowRight, X, TicketPercent } from 'lucide-react';

interface PromoCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutUrl: string;
}

export function PromoCodeModal({ isOpen, onClose, checkoutUrl }: PromoCodeModalProps) {
  const [copied, setCopied] = useState(false);
  const promoCode = '0TWTQSLL';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promoCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <React.Fragment>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 transition-opacity"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white rounded-2xl shadow-2xl z-50 overflow-hidden border border-slate-200"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 border border-emerald-200 shadow-inner">
                <TicketPercent className="w-6 h-6 text-emerald-600" />
              </div>
              
              <h2 className="text-2xl font-bold font-sans text-slate-900 mb-2">
                Sichere dir 0€ Setup-Gebühr!
              </h2>
              
              <p className="text-slate-600 mb-8 leading-relaxed">
                Jetzt statt regulär 299€ mit <span className="font-semibold text-slate-900">0€ Setup-Gebühr</span> starten. Diese Aktion ist streng limitiert und läuft bald ab.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8 text-center relative overflow-hidden group">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Dein Aktionscode</div>
                <div className="font-mono text-3xl font-black tracking-widest text-slate-900 mb-4 select-all">
                  {promoCode}
                </div>
                
                <button
                  onClick={handleCopy}
                  className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                    copied 
                      ? 'bg-emerald-500 text-white border border-emerald-600' 
                      : 'bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 hover:border-slate-400'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5" />
                      Code kopiert!
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      Code kopieren
                    </>
                  )}
                </button>
              </div>

              <div className="text-sm border-t border-slate-100 pt-6 mb-8">
                <p className="text-slate-500">
                  <strong className="text-slate-700">So funktioniert&apos;s:</strong><br />
                  Füge deinen kopierten Code im nächsten Schritt (Stripe Checkout) in das Feld <span className="font-semibold">&quot;Aktionscode hinzufügen&quot;</span> ein. Die 299€ werden dann sofort abgezogen!
                </p>
              </div>

              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full py-4 rounded-xl flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-purple-600 text-white font-bold hover:from-rose-600 hover:to-purple-700 transition-all shadow-md active:scale-95"
              >
                Weiter zum Checkout
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
}
