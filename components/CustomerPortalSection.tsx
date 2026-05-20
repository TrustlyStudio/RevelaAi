'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Check, ArrowRight, LayoutDashboard, FolderKanban, FileText, FileSignature, LifeBuoy, User } from 'lucide-react';

export function CustomerPortalSection() {
  return (
    <section className="py-20 lg:py-32 relative text-white overflow-hidden bg-[#0a0f1e]">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column (55% on lg) */}
          <div className="w-full lg:w-[55%] flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-rose-500/20 to-purple-600/20 border border-white/10 mb-6 group">
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400">
                  Nur bei VANICY
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tight text-white">
                Volle Kontrolle. Jederzeit.
              </h2>
              
              <p className="text-base md:text-lg text-white/60 mb-8 max-w-xl leading-relaxed">
                Dein persönliches Dashboard zeigt dir alles auf einen Blick – Projektstatus, Rechnungen, Verträge und direkter Support. Keine E-Mail-Flut, kein Rätselraten.
              </p>

              <div className="space-y-6 mb-10 w-full max-w-xl">
                {[
                  {
                    title: "Projekt-Tracking in Echtzeit",
                    desc: "Verfolge jeden Entwicklungsschritt live mit – von der Konzeption über das responsive Design bis zum finalen Go-Live. 100% transparent und termingenau."
                  },
                  {
                    title: "Änderungswünsche per Mausklick",
                    desc: "Neues Teammitglied, geänderte Leistungen oder Bildwechsel? Reiche Anpassungen spielend leicht im Dashboard ein. Wir setzen sie blitzschnell und fehlerfrei für dich um."
                  },
                  {
                    title: "Zentrales Dokumenten-Center",
                    desc: "Lade Angebote, Verträge und rechtssichere Rechnungen mit einem Klick herunter. Perfekt sortiert und sofort bereit für deine digitale Buchhaltung."
                  },
                  {
                    title: "Integrierter IT-Express-Support",
                    desc: "Keine Warteschlangen, kein Stress. Erstelle Support-Tickets direkt im Portal. Unsere Experten kümmern sich sofort um eine rasche und proaktive Lösung."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-rose-500/20 flex shrink-0 items-center justify-center mt-1 border border-rose-500/30">
                      <Check className="w-3.5 h-3.5 text-rose-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base md:text-lg mb-1">{item.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                href="/#analyse"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 to-purple-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-rose-500/25 hover:shadow-xl hover:shadow-rose-500/40 hover:-translate-y-1 transition-all group"
              >
                Jetzt beraten lassen 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column (45% on lg) - Browser Mockup */}
          <div className="w-full lg:w-[45%] relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              animate={{ y: [0, -10, 0] }}
              style={{ transition: 'all 5s ease-in-out' }}
              // Quick and simple CSS animation implementation
              className="relative w-full z-10 animate-[float_6s_ease-in-out_infinite]"
            >
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes float {
                  0% { transform: translateY(0px); }
                  50% { transform: translateY(-15px); }
                  100% { transform: translateY(0px); }
                }
              `}} />
              {/* Glow under mockup */}
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/30 to-purple-600/30 blur-2xl transform scale-95 opacity-50"></div>
              
              {/* Browser Chrome Container */}
              <div className="bg-[#1e293b] rounded-2xl border border-white/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7)] flex flex-col overflow-hidden relative z-10 aspect-[3/2] md:aspect-[4/3] w-full max-w-[600px] mx-auto xl:scale-105 origin-left">
                
                {/* Browser Top Bar */}
                <div className="h-10 bg-[#0f172a] border-b border-white/5 flex items-center px-4 gap-4 shrink-0">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                  </div>
                  <div className="bg-white/5 rounded-md px-3 py-1 flex-1 mx-4 max-w-[240px] flex items-center justify-center">
                    <span className="text-[10px] text-white/40 font-mono tracking-wider">dashboard.vanicy.de</span>
                  </div>
                </div>

                {/* Dashboard Flex Container */}
                <div className="flex flex-1 overflow-hidden bg-[#f8fafc]">
                  {/* Sidebar */}
                  <div className="w-1/4 max-w-[140px] bg-[#1a1f3a] text-white/50 border-r border-[#1a1f3a] p-3 flex flex-col gap-1 hidden sm:flex shrink-0">
                    <div className="text-xs font-black text-white tracking-widest uppercase mb-4 px-2 pt-1">
                      VANICY
                    </div>
                    {/* Nav Items */}
                    <div className="flex items-center gap-2 bg-rose-500/10 text-rose-300 rounded-md px-2 py-1.5 mb-0.5">
                      <LayoutDashboard className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold">Dashboard</span>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-white/5 text-white/70 rounded-md px-2 py-1.5 mb-0.5 transition-colors">
                      <FolderKanban className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-medium">Projekte</span>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-white/5 text-white/70 rounded-md px-2 py-1.5 mb-0.5 transition-colors">
                      <FileText className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-medium">Rechnungen</span>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-white/5 text-white/70 rounded-md px-2 py-1.5 mb-0.5 transition-colors">
                      <FileSignature className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-medium">Verträge</span>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-white/5 text-white/70 rounded-md px-2 py-1.5 mb-0.5 transition-colors">
                      <LifeBuoy className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-medium">Support</span>
                    </div>
                    <div className="mt-auto flex items-center gap-2 hover:bg-white/5 text-white/50 rounded-md px-2 py-1.5 transition-colors">
                      <User className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-medium">Mein Profil</span>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-white/5 text-white/30 rounded-md px-2 py-1.5 transition-colors">
                      <span className="text-[10px] font-medium">Logout</span>
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 p-3 sm:p-5 flex flex-col overflow-hidden">
                    <h3 className="text-sm sm:text-base font-bold text-slate-800 mb-4 tracking-tight">Guten Morgen, Max!</h3>
                    
                    {/* Stat Cards */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <div className="bg-white rounded-lg p-2 sm:p-3 border border-slate-200 shadow-sm flex flex-col justify-between">
                        <span className="text-[8px] sm:text-[9px] text-slate-500 font-semibold uppercase tracking-wider mb-1">Projektstatus</span>
                        <div className="inline-flex items-center gap-1.5 w-max">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          <span className="text-[10px] sm:text-xs font-bold text-emerald-600">Live</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-2 sm:p-3 border border-slate-200 shadow-sm flex flex-col justify-between">
                        <span className="text-[8px] sm:text-[9px] text-slate-500 font-semibold uppercase tracking-wider mb-1">Rechnungen</span>
                        <span className="text-xs sm:text-sm font-bold text-slate-800">0 offen</span>
                      </div>
                      <div className="bg-white rounded-lg p-2 sm:p-3 border border-slate-200 shadow-sm flex flex-col justify-between">
                        <span className="text-[8px] sm:text-[9px] text-slate-500 font-semibold uppercase tracking-wider mb-1">Support</span>
                        <span className="text-[10px] sm:text-xs font-bold text-slate-400">Kein Ticket</span>
                      </div>
                    </div>

                    {/* Progress Stepper */}
                    <div className="bg-white rounded-xl p-3 sm:p-5 border border-slate-200 shadow-sm flex-1">
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4 block">Aktuelles Projekt</span>
                      
                      <div className="flex items-center justify-between relative mt-4">
                        <div className="absolute top-[9px] left-2 right-2 h-[2px] bg-slate-100 z-0"></div>
                        <div className="absolute top-[9px] left-2 right-2 h-[2px] bg-gradient-to-r from-emerald-400 to-rose-400 w-full z-0"></div>
                        
                        {/* Steps */}
                        <div className="flex flex-col items-center gap-1.5 relative z-10">
                          <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="text-[8px] sm:text-[9px] font-bold text-emerald-600">Prüfung</span>
                        </div>
                        
                        <div className="flex flex-col items-center gap-1.5 relative z-10">
                          <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="text-[8px] sm:text-[9px] font-bold text-emerald-600">Umsetzung</span>
                        </div>

                        <div className="flex flex-col items-center gap-1.5 relative z-10">
                          <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="text-[8px] sm:text-[9px] font-bold text-emerald-600">Feedback</span>
                        </div>

                        <div className="flex flex-col items-center gap-1.5 relative z-10">
                          <div className="w-5 h-5 rounded-full bg-white border-2 border-rose-500 flex items-center justify-center shadow-lg shadow-rose-500/20">
                            <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                          </div>
                          <span className="text-[8px] sm:text-[9px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">Live</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
