'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, X, Check, Cookie } from 'lucide-react';

export const COOKIE_CONSENT_KEY = 'vanicy_cookie_consent';

export type ConsentSettings = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const defaultConsent: ConsentSettings = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function hasConsent(category: keyof ConsentSettings): boolean {
  if (typeof window === 'undefined') return category === 'necessary';
  try {
    const data = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!data) return category === 'necessary';
    const consent = JSON.parse(data) as ConsentSettings;
    return !!consent[category];
  } catch (e) {
    return category === 'necessary';
  }
}

export function openCookieSettings() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('openCookieSettings'));
  }
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [tempConsent, setTempConsent] = useState<ConsentSettings>(defaultConsent);

  const clearCookies = React.useCallback((consent: ConsentSettings) => {
     const cookies = document.cookie.split("; ");
     for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        
        const isGa = name.startsWith('_ga') || name.startsWith('_gid') || name.startsWith('gat');
        const isFbp = name.startsWith('_fbp');
        
        if ((!consent.analytics && isGa) || (!consent.marketing && isFbp)) {
           document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
           document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=" + window.location.hostname;
        }
     }
  }, []);

  const handleSave = React.useCallback((newConsent: ConsentSettings) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newConsent));
    setShowBanner(false);
    setShowModal(false);
    window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: newConsent }));
    
    if (!newConsent.analytics || !newConsent.marketing) {
       clearCookies(newConsent);
    }
  }, [clearCookies]);

  useEffect(() => {
    setTimeout(() => {
      const data = localStorage.getItem(COOKIE_CONSENT_KEY);
      const prefersOptOut = 
        navigator.doNotTrack === "1" || 
        (window as any).doNotTrack === "1" || 
        (navigator as any).globalPrivacyControl;

      if (!data) {
        if (prefersOptOut) {
          handleSave(defaultConsent); // fallbacks to necessary only
        } else {
          setShowBanner(true);
        }
      } else {
        setTempConsent(JSON.parse(data));
      }
    }, 0);
    
    const onOpenSettings = () => {
      const currentData = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (currentData) setTempConsent(JSON.parse(currentData));
      else setTempConsent(defaultConsent);
      setShowModal(true);
    };
    
    window.addEventListener('openCookieSettings', onOpenSettings);
    return () => window.removeEventListener('openCookieSettings', onOpenSettings);
  }, [handleSave]);

  const acceptAll = () => handleSave({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () => handleSave(defaultConsent);

  return (
    <>
      <AnimatePresence>
        {showBanner && !showModal && (
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 150, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:w-96 z-[999]"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 overflow-hidden relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-rose-500 to-indigo-600"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <Cookie className="w-5 h-5 text-slate-700" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Wir nutzen Cookies</h3>
              </div>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Wir verwenden Cookies, um unsere Website sicherer zu machen, Inhalte zu personalisieren und den Traffic zu analysieren.
              </p>
              
              <div className="flex flex-col gap-2">
                <button onClick={acceptAll} className="w-full bg-slate-900 text-white font-bold py-2.5 rounded-xl hover:bg-slate-800 transition-colors text-sm">
                  Alle akzeptieren
                </button>
                <div className="flex gap-2">
                  <button onClick={rejectAll} className="w-full bg-white text-slate-700 font-semibold py-2.5 rounded-xl hover:bg-slate-50 border border-slate-300 transition-colors text-sm">
                    Nur Notwendige
                  </button>
                  <button onClick={() => setShowModal(true)} className="w-[48px] bg-white text-slate-700 flex items-center justify-center rounded-xl hover:bg-slate-50 border border-slate-300 transition-colors shrink-0" aria-label="Einstellungen">
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[1000] flex items-center justify-center p-4"
              onClick={() => {
                if(!localStorage.getItem(COOKIE_CONSENT_KEY)) return;
                setShowModal(false);
                if (!localStorage.getItem(COOKIE_CONSENT_KEY)) setShowBanner(true);
              }}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]"
              >
                <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                  <div className="flex items-center gap-3">
                    <Settings className="w-5 h-5 text-slate-700" />
                    <h2 className="text-xl font-bold text-slate-900">Cookie-Einstellungen</h2>
                  </div>
                  {localStorage.getItem(COOKIE_CONSENT_KEY) && (
                     <button onClick={() => setShowModal(false)} className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-200 rounded-full transition-colors">
                       <X className="w-5 h-5" />
                     </button>
                  )}
                </div>
                
                <div className="p-6 overflow-y-auto">
                  <p className="text-sm text-slate-600 mb-6">
                    Wähle aus, welche Cookies du zulassen möchtest. Notwendige Cookies können nicht deaktiviert werden, da sie für den Betrieb der Seite essentiell sind.
                  </p>
                  
                  <div className="space-y-4">
                    {/* Necessary */}
                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 opacity-80">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-slate-900">Notwendig</h4>
                          <span className="text-[10px] font-bold tracking-wider uppercase text-slate-500 bg-slate-200 px-2 py-0.5 rounded">Immer aktiv</span>
                        </div>
                        <div className="w-12 h-6 bg-emerald-500 rounded-full flex items-center p-1 justify-end">
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Diese Cookies sind für die Grundfunktionen der Website erforderlich (z.B. Sicherheit, Cookie-Präferenzen speichern).
                      </p>
                    </div>

                    {/* Analytics */}
                    <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
                      <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={() => setTempConsent(p => ({...p, analytics: !p.analytics}))}>
                        <h4 className="font-bold text-slate-900">Analytics</h4>
                        <div className={`w-12 h-6 rounded-full flex items-center p-1 transition-colors ${tempConsent.analytics ? 'bg-emerald-500 justify-end' : 'bg-slate-300 justify-start'}`}>
                          <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Wir nutzen Tools wie Google Analytics, um anonymisierte Daten über das Nutzerverhalten zu sammeln und die Website zu verbessern.
                      </p>
                    </div>

                    {/* Marketing */}
                    <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
                      <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={() => setTempConsent(p => ({...p, marketing: !p.marketing}))}>
                        <h4 className="font-bold text-slate-900">Marketing</h4>
                        <div className={`w-12 h-6 rounded-full flex items-center p-1 transition-colors ${tempConsent.marketing ? 'bg-emerald-500 justify-end' : 'bg-slate-300 justify-start'}`}>
                          <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Cookies für Marketing-Zwecke (z.B. Meta Pixel) helfen uns, relevantere Werbeanzeigen für dich auszuspielen.
                      </p>
                    </div>

                  </div>
                </div>

                <div className="p-6 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={acceptAll} 
                    className="flex-1 bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm"
                  >
                    Alle akzeptieren
                  </button>
                  <button 
                    onClick={() => handleSave(tempConsent)} 
                    className="flex-1 bg-white text-slate-700 font-bold py-3 rounded-xl border border-slate-300 hover:bg-slate-100 transition-colors text-sm"
                  >
                    Auswahl speichern
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
