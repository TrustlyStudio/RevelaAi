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
    websiteUrl: '',
    unternehmen: '',
    name: '',
    email: '',
    telefon: '',
    noEmail: false,
    datenschutz: false,
    gotcha: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateUrl = (url: string) => {
    if (!url) return true;
    try {
      new URL(url.startsWith('http') ? url : `https://${url}`);
      return true;
    } catch {
      return false;
    }
  };

  const validateEmail = (email: string) => {
    if (!email) return true;
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return re.test(email);
  };

  const validateTelefon = (telefon: string) => {
    if (!telefon) return true;
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(telefon);
  };
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#analyse' || window.location.hash.includes('analyse')) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    
    checkHash();
    window.addEventListener('hashchange', checkHash);
    
    const handleGlobalClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest('a');
      if (link && link.href.includes('#analyse')) {
        setIsOpen(true);
      }
    };
    document.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('hashchange', checkHash);
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  const closeModal = () => {
    // Remove the hash from the URL without reloading the page
    history.replaceState(null, '', window.location.pathname + window.location.search);
    setIsOpen(false);
    setTimeout(() => {
      setStep(0);
      setIsSuccess(false);
      setErrors({});
      setFormData({
        ziel: '',
        website: '',
        websiteUrl: '',
        unternehmen: '',
        name: '',
        email: '',
        telefon: '',
        noEmail: false,
        datenschutz: false,
        gotcha: ''
      });
    }, 300);
  };

  const handleNext = () => setStep(s => s + 1);
  const handlePrev = () => setStep(s => Math.max(0, s - 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.gotcha) {
      setIsSuccess(true);
      return;
    }

    if (!formData.datenschutz) {
      alert("Bitte stimme den Datenschutzbestimmungen zu.");
      return;
    }
    
    setIsSubmitting(true);
    try {
      const { gotcha, ...submitData } = formData;
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...submitData,
          email: submitData.noEmail ? "Keine geschäftliche E-Mail vorhanden" : submitData.email,
          _subject: `Neue Analyse-Anfrage: ${submitData.unternehmen || submitData.name}`
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
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                  <span className="font-black text-lg text-white">R</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 leading-tight">Kostenlose Website-Analyse</h3>
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
                    <h3 className="text-3xl font-black text-slate-900 mb-4">Anfrage erfolgreich!</h3>
                    <p className="text-gray-500 text-lg mb-8">
                      Vielen Dank für dein Interesse an einer kostenlosen Analyse. Wir prüfen deine Daten und melden uns sehr bald bei dir mit den Ergebnissen und nächsten Schritten.
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
                      Sichere dir deine <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">kostenlose Website-Analyse & Beratung!</span>
                    </h3>
                    <p className="text-gray-500 text-lg mb-10">
                      Trage dich jetzt für eine kostenlose Analyse ein. Wir prüfen deine aktuelle Präsenz auf Performance, SEO, Barrierefreiheit und decken auf, wo du gerade Kunden verlierst.
                    </p>
                    <button 
                      onClick={handleNext}
                      className="w-full py-5 bg-gradient-to-r from-rose-500 to-purple-600 shadow-xl shadow-rose-500/20 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all flex justify-center items-center gap-2"
                    >
                      Jetzt Analyse anfordern <ArrowRight className="w-5 h-5" />
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
                       <button type="button" onClick={handlePrev} className="text-sm font-bold text-gray-400 hover:text-slate-900:text-white transition-colors">Zurück</button>
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
                              if (!opt.startsWith('Ja')) {
                                setTimeout(handleNext, 300);
                              }
                            }}
                          />
                          <span className="ml-4 font-semibold text-slate-700">{opt}</span>
                        </label>
                      ))}
                    </div>

                    <AnimatePresence>
                      {formData.website.startsWith('Ja') && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          className="overflow-hidden"
                        >
                          <label className="block text-sm font-bold text-slate-700 mb-2">Wie lautet der Link zur Website? (optional)</label>
                          <input 
                            type="url" 
                            className={`w-full p-4 border-2 rounded-xl focus:outline-none focus:ring-4 font-medium transition-all ${
                              errors.websiteUrl 
                                ? 'border-red-300 focus:border-red-500 focus:ring-red-500/10 bg-red-50/50' 
                                : 'border-gray-200 focus:border-rose-500 focus:ring-rose-500/10'
                            }`}
                            value={formData.websiteUrl}
                            onChange={(e) => {
                              const val = e.target.value;
                              setFormData({...formData, websiteUrl: val});
                              if (val && !validateUrl(val)) {
                                setErrors(prev => ({...prev, websiteUrl: 'Bitte gib eine gültige URL ein.'}));
                              } else {
                                setErrors(prev => ({...prev, websiteUrl: ''}));
                              }
                            }}
                            placeholder="z.B. https://meineseite.de"
                          />
                          {errors.websiteUrl && (
                            <p className="mt-2 text-sm font-semibold text-red-500">{errors.websiteUrl}</p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <AnimatePresence>
                      {formData.website.startsWith('Ja') && (
                          <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            type="submit"
                            disabled={!!errors.websiteUrl}
                            className="w-full py-4 mt-6 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                          >
                            Weiter
                          </motion.button>
                      )}
                    </AnimatePresence>
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
                       <button type="button" onClick={handlePrev} className="text-sm font-bold text-gray-400 hover:text-slate-900:text-white transition-colors">Zurück</button>
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
                       <button type="button" onClick={handlePrev} className="text-sm font-bold text-gray-400 hover:text-slate-900:text-white transition-colors">Zurück</button>
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
                           className={`w-full p-4 border-2 rounded-xl focus:outline-none focus:ring-4 font-medium transition-all disabled:bg-gray-100 disabled:opacity-60 ${
                             errors.email && !formData.noEmail 
                               ? 'border-red-300 focus:border-red-500 focus:ring-red-500/10 bg-red-50/50' 
                               : 'border-gray-200 focus:border-rose-500 focus:ring-rose-500/10'
                           }`}
                           value={formData.email}
                           onChange={(e) => {
                             const val = e.target.value;
                             setFormData({...formData, email: val});
                             if (val && !validateEmail(val)) {
                               setErrors(prev => ({...prev, email: 'Bitte gib eine gültige E-Mail-Adresse ein.'}));
                             } else {
                               setErrors(prev => ({...prev, email: ''}));
                             }
                           }}
                           placeholder="name@unternehmen.de"
                         />
                         {errors.email && !formData.noEmail && (
                           <p className="mt-2 text-sm font-semibold text-red-500">{errors.email}</p>
                         )}
                         <div className="mt-3">
                            <label className="flex items-center gap-3 cursor-pointer group">
                               <div className="relative flex items-center justify-center w-5 h-5">
                                 <input 
                                   type="checkbox" 
                                   className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded cursor-pointer checked:bg-rose-500 checked:border-rose-500 transition-colors"
                                   checked={formData.noEmail}
                                   onChange={(e) => {
                                     setFormData({...formData, noEmail: e.target.checked, email: e.target.checked ? '' : formData.email});
                                     if (e.target.checked) {
                                       setErrors(prev => ({...prev, email: ''}));
                                     } else {
                                       // Revalidate telefon if noEmail goes false? No, telefon isn't required if noEmail is false, but if it has a value we keep its error.
                                     }
                                   }}
                                 />
                                 <CheckCircle2 className="w-3.5 h-3.5 text-white absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={4} />
                               </div>
                               <span className="text-sm font-medium text-gray-500 group-hover:text-slate-900:text-white transition-colors">Ich habe noch keine geschäftliche E-Mail</span>
                            </label>
                         </div>

                         <AnimatePresence>
                           {formData.noEmail && (
                             <motion.div 
                               initial={{ opacity: 0, height: 0, marginTop: 0 }}
                               animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                               exit={{ opacity: 0, height: 0, marginTop: 0 }}
                               className="overflow-hidden"
                             >
                               <label className="block text-sm font-bold text-slate-700 mb-2">Telefonnummer</label>
                               <input 
                                 type="tel" 
                                 required={formData.noEmail}
                                 className={`w-full p-4 border-2 rounded-xl focus:outline-none focus:ring-4 font-medium transition-all ${
                                   errors.telefon 
                                     ? 'border-red-300 focus:border-red-500 focus:ring-red-500/10 bg-red-50/50' 
                                     : 'border-gray-200 focus:border-rose-500 focus:ring-rose-500/10'
                                 }`}
                                 value={formData.telefon}
                                 onChange={(e) => {
                                   const val = e.target.value;
                                   setFormData({...formData, telefon: val});
                                   if (val && !validateTelefon(val)) {
                                     setErrors(prev => ({...prev, telefon: 'Bitte gib eine gültige Telefonnummer ein.'}));
                                   } else {
                                     setErrors(prev => ({...prev, telefon: ''}));
                                   }
                                 }}
                                 placeholder="z.B. +49 123 456789"
                               />
                               {errors.telefon && (
                                 <p className="mt-2 text-sm font-semibold text-red-500">{errors.telefon}</p>
                               )}
                             </motion.div>
                           )}
                         </AnimatePresence>
                       </div>

                        <div className="pt-4 border-t border-gray-100">
                          {/* Honeypot field for bot protection */}
                          <input 
                            type="text" 
                            name="_gotcha" 
                            className="hidden" 
                            tabIndex={-1} 
                            autoComplete="off" 
                            value={formData.gotcha}
                            onChange={(e) => setFormData({...formData, gotcha: e.target.value})}
                          />
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
                      disabled={isSubmitting || !formData.name || (!formData.email && (!formData.noEmail || !formData.telefon)) || !formData.datenschutz || !!(errors.email && !formData.noEmail) || !!errors.telefon}
                      className="w-full py-4 bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-xl shadow-rose-500/20 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none transition-all flex justify-center items-center gap-2"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      ) : (
                        "Kostenlose Analyse anfordern"
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
