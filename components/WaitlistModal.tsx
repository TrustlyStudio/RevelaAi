'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export function WaitlistModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    ziel: '',
    website: '',
    unternehmen: '',
    name: '',
    email: '',
    noEmail: false,
    datenschutz: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#warteliste' || window.location.hash.includes('warteliste')) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const closeModal = () => {
    window.location.hash = '';
    setIsOpen(false);
    setTimeout(() => {
      setStep(0);
      setIsSuccess(false);
      setFormData({
        ziel: '',
        website: '',
        unternehmen: '',
        name: '',
        email: '',
        noEmail: false,
        datenschutz: false
      });
    }, 300);
  };

  const handleNext = () => setStep(s => s + 1);
  const handlePrev = () => setStep(s => Math.max(0, s - 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.datenschutz) {
      alert("Bitte stimme den Datenschutzbestimmungen zu.");
      return;
    }
    
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xdabllpv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          email: formData.noEmail ? "Keine geschäftliche E-Mail vorhanden" : formData.email,
          _subject: `Neue Wartelisten-Anmeldung: ${formData.unternehmen || formData.name}`
        })
      });
      
      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Es gab ein Problem beim Senden deiner Anfrage. Bitte versuche es noch einmal.");
      }
    } catch (error) {
      alert("Ein Fehler ist aufgetreten.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                  <span className="font-black text-lg text-white">R</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 leading-tight">Revela Warteliste</h3>
                  <p className="text-xs text-gray-500 font-medium">Unverbindlich & Kostenlos</p>
                </div>
              </div>
              <button 
                onClick={closeModal}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors"
                type="button"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Bar */}
            {!isSuccess && step > 0 && (
              <div className="w-full h-1.5 bg-gray-100">
                <div 
                  className="h-full bg-gradient-to-r from-rose-500 to-purple-600 transition-all duration-300 ease-out"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6 sm:p-10 overflow-y-auto">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-4">Du bist auf der Liste!</h3>
                    <p className="text-gray-500 text-lg mb-8">
                      Wir haben deine Daten erhalten und melden uns in Kürze bei dir mit den nächsten Schritten.
                    </p>
                    <button 
                      onClick={closeModal}
                      className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold w-full sm:w-auto"
                      type="button"
                    >
                      Zurück zur Startseite
                    </button>
                  </motion.div>
                ) : step === 0 ? (
                  <motion.div 
                    key="step0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="text-center py-6"
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-xs font-bold tracking-wider mb-6">
                      <Zap className="w-3.5 h-3.5" /> Streng limitiert
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                      Sichere dir <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">15% Rabatt</span> und den perfekten Start!
                    </h3>
                    <p className="text-gray-500 text-lg mb-10">
                      Trage dich jetzt auf unsere Warteliste ein. Finde in wenigen Klicks heraus, wie wir dein Geschäft mit einer überzeugenden Web-Präsenz skalieren.
                    </p>
                    <button 
                      onClick={handleNext}
                      className="w-full py-5 bg-gradient-to-r from-rose-500 to-purple-600 shadow-xl shadow-rose-500/20 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all flex justify-center items-center gap-2"
                      type="button"
                    >
                      Jetzt kostenlos eintragen <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="text-xs text-gray-400 mt-6 flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" /> 100% unverbindlich, deine Daten sind sicher.
                    </p>
                  </motion.div>
                ) : step === 1 ? (
                  <motion.form 
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="w-full"
                    onSubmit={(e) => { e.preventDefault(); if(formData.ziel) handleNext(); }}
                  >
                    <div className="mb-2 text-sm font-bold text-rose-500 uppercase tracking-widest">Schritt 1 von 4</div>
                    <h3 className="text-2xl font-black text-slate-900 mb-8">Was ist dein aktuelles Hauptziel?</h3>
                    
                    <div className="space-y-3">
                      {['Mehr Kunden gewinnen', 'Modernes, hochwertigeres Auftreten', 'Bessere Sichtbarkeit bei Google', 'Anderes Ziel'].map((goal) => (
                        <label 
                          key={goal}
                          className={`flex items-center p-5 border rounded-2xl cursor-pointer transition-all ${formData.ziel === goal ? 'border-rose-500 bg-rose-50/50 shadow-sm' : 'border-gray-200 hover:border-rose-300 hover:bg-gray-50'}`}
                        >
                          <input 
                            type="radio" 
                            name="ziel" 
                            className="w-5 h-5 text-rose-500 rounded border-gray-300 focus:ring-rose-500"
                            checked={formData.ziel === goal}
                            onChange={() => {
                              setFormData({...formData, ziel: goal});
                              setTimeout(handleNext, 300);
                            }}
                          />
                          <span className="ml-4 font-semibold text-slate-700">{goal}</span>
                        </label>
                      ))}
                    </div>
                  </motion.form>
                ) : step === 2 ? (
                  <motion.form 
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="w-full"
                    onSubmit={(e) => { e.preventDefault(); if(formData.website) handleNext(); }}
                  >
                    <div className="flex justify-between items-center mb-2">
                       <button type="button" onClick={handlePrev} className="text-sm font-bold text-gray-400 hover:text-slate-900 transition-colors">Zurück</button>
                       <div className="text-sm font-bold text-rose-500 uppercase tracking-widest">Schritt 2 von 4</div>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-8">Hast du bereits eine Website?</h3>
                    
                    <div className="space-y-3">
                      {['Ja, aber sie muss erneuert werden', 'Ja, ich brauche nur Wartung/Support', 'Nein, ich starte komplett neu', 'Noch in Planung'].map((opt) => (
                        <label 
                          key={opt}
                          className={`flex items-center p-5 border rounded-2xl cursor-pointer transition-all ${formData.website === opt ? 'border-purple-600 bg-purple-50/50 shadow-sm' : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'}`}
                        >
                          <input 
                            type="radio" 
                            name="website" 
                            className="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-600"
                            checked={formData.website === opt}
                            onChange={() => {
                              setFormData({...formData, website: opt});
                              setTimeout(handleNext, 300);
                            }}
                          />
                          <span className="ml-4 font-semibold text-slate-700">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </motion.form>
                ) : step === 3 ? (
                  <motion.form 
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="w-full"
                    onSubmit={(e) => { e.preventDefault(); if(formData.unternehmen) handleNext(); }}
                  >
                    <div className="flex justify-between items-center mb-2">
                       <button type="button" onClick={handlePrev} className="text-sm font-bold text-gray-400 hover:text-slate-900 transition-colors">Zurück</button>
                       <div className="text-sm font-bold text-rose-500 uppercase tracking-widest">Schritt 3 von 4</div>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-8">Wie heißt dein Unternehmen oder Projekt?</h3>
                    
                    <div className="mb-8">
                       <input 
                         type="text" 
                         required
                         placeholder="z.B. Alpha Consult GmbH"
                         className="w-full p-4 md:p-5 border-2 border-gray-200 rounded-2xl text-lg focus:outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 font-medium transition-all"
                         value={formData.unternehmen}
                         onChange={(e) => setFormData({...formData, unternehmen: e.target.value})}
                         autoFocus
                       />
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={!formData.unternehmen.trim()}
                      className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Weiter
                    </button>
                  </motion.form>
                ) : (
                  <motion.form 
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="w-full"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex justify-between items-center mb-4">
                       <button type="button" onClick={handlePrev} className="text-sm font-bold text-gray-400 hover:text-slate-900 transition-colors">Zurück</button>
                       <div className="text-sm font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-1">Fast geschafft! <Zap className="w-3.5 h-3.5" /></div>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-8">Wohin dürfen wir die Infos schicken?</h3>
                    
                    <div className="space-y-5 mb-8">
                       <div>
                         <label className="block text-sm font-bold text-slate-700 mb-2">Vor- & Nachname</label>
                         <input 
                           type="text" 
                           required
                           className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 font-medium transition-all"
                           value={formData.name}
                           onChange={(e) => setFormData({...formData, name: e.target.value})}
                         />
                       </div>
                       
                       <div>
                         <label className="block text-sm font-bold text-slate-700 mb-2">Geschäftliche E-Mail</label>
                         <input 
                           type="email" 
                           required={!formData.noEmail}
                           disabled={formData.noEmail}
                           className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 font-medium transition-all disabled:bg-gray-100 disabled:opacity-60"
                           value={formData.email}
                           onChange={(e) => setFormData({...formData, email: e.target.value})}
                         />
                         <div className="mt-3">
                            <label className="flex items-center gap-3 cursor-pointer group">
                               <div className="relative flex items-center justify-center w-5 h-5">
                                 <input 
                                   type="checkbox" 
                                   className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded cursor-pointer checked:bg-rose-500 checked:border-rose-500 transition-colors"
                                   checked={formData.noEmail}
                                   onChange={(e) => {
                                     setFormData({...formData, noEmail: e.target.checked, email: e.target.checked ? '' : formData.email});
                                   }}
                                 />
                                 <CheckCircle2 className="w-3.5 h-3.5 text-white absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={4} />
                               </div>
                               <span className="text-sm font-medium text-gray-500 group-hover:text-slate-900 transition-colors">Ich habe noch keine geschäftliche E-Mail</span>
                            </label>
                         </div>
                       </div>

                       <div className="pt-4 border-t border-gray-100">
                          <label className="flex items-start gap-3 cursor-pointer group">
                               <div className="relative flex items-center justify-center w-5 h-5 mt-0.5 shrink-0">
                                 <input 
                                   type="checkbox" 
                                   required
                                   className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded cursor-pointer checked:bg-slate-900 checked:border-slate-900 transition-colors"
                                   checked={formData.datenschutz}
                                   onChange={(e) => setFormData({...formData, datenschutz: e.target.checked})}
                                 />
                                 <CheckCircle2 className="w-3.5 h-3.5 text-white absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={4} />
                               </div>
                               <span className="text-xs font-medium text-gray-500 leading-relaxed">
                                 Ich stimme zu, dass meine Angaben aus dem Formular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. Die Daten werden nach abgeschlossener Bearbeitung Ihrer Anfrage gelöscht. Detaillierte Informationen zum Umgang mit Nutzerdaten finden Sie in unserer <Link href="/datenschutz" target="_blank" className="text-rose-500 hover:underline">Datenschutzerklärung</Link>.
                               </span>
                          </label>
                       </div>
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={isSubmitting || !formData.name || (!formData.email && !formData.noEmail) || !formData.datenschutz}
                      className="w-full py-4 bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-xl shadow-rose-500/20 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none transition-all flex justify-center items-center gap-2"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      ) : (
                        "Auf Warteliste setzen"
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
