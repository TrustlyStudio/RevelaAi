'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Gauge, Zap, Search, Accessibility, MonitorSmartphone } from 'lucide-react';

export function PageSpeedSection() {
  return (
    <section className="py-20 lg:py-32 relative bg-white overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column - Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-6 group">
                <Gauge className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Google PageSpeed Integration
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tight text-slate-900 leading-tight">
                Dein kostenloser Google Lighthouse Test — direkt im Dashboard.
              </h2>
              
              <p className="text-base md:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                Behalte die Qualität deiner Website im Blick. Performance, SEO, Barrierefreiheit und Core Web Vitals auf einen Blick — automatisiert und in Echtzeit gemessen.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Zap, title: "Performance & Core Web Vitals" },
                  { icon: Search, title: "SEO-Ranking-Faktoren" },
                  { icon: Accessibility, title: "Barrierefreiheit (Accessibility)" },
                  { icon: MonitorSmartphone, title: "Best Practices für Desktop & Mobile" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="font-semibold text-slate-800">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 to-teal-500/20 blur-2xl transform scale-95 opacity-50 rounded-[40px]"></div>
              
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden relative z-10 p-6 sm:p-10 text-center">
                 <div className="flex justify-center mb-8">
                     {/* Score Circles Row */}
                     <div className="flex gap-4 sm:gap-8 overflow-hidden py-2">
                        {/* Circle 1 */}
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                           <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                              <path className="text-slate-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                              <path className="text-emerald-500" strokeDasharray="98, 100" strokeWidth="3" stroke="currentColor" fill="none" strokeLinecap="round" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                           </svg>
                           <div className="absolute inset-0 flex items-center justify-center flex-col">
                              <span className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tighter hover:scale-105 transition-transform cursor-default">98</span>
                           </div>
                           <span className="absolute -bottom-6 text-[10px] sm:text-xs font-bold text-slate-500 uppercase">Performance</span>
                        </div>
                        {/* Circle 2 */}
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                           <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                              <path className="text-slate-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                              <path className="text-emerald-500" strokeDasharray="100, 100" strokeWidth="3" stroke="currentColor" fill="none" strokeLinecap="round" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                           </svg>
                           <div className="absolute inset-0 flex items-center justify-center flex-col">
                              <span className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tighter hover:scale-105 transition-transform cursor-default">100</span>
                           </div>
                           <span className="absolute -bottom-6 text-[10px] sm:text-xs font-bold text-slate-500 uppercase">Accessibility</span>
                        </div>
                        {/* Circle 3 */}
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center hidden sm:flex">
                           <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                              <path className="text-slate-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                              <path className="text-emerald-500" strokeDasharray="100, 100" strokeWidth="3" stroke="currentColor" fill="none" strokeLinecap="round" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                           </svg>
                           <div className="absolute inset-0 flex items-center justify-center flex-col">
                              <span className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tighter hover:scale-105 transition-transform cursor-default">100</span>
                           </div>
                           <span className="absolute -bottom-6 text-[10px] sm:text-xs font-bold text-slate-500 uppercase">Best Practices</span>
                        </div>
                     </div>
                 </div>

                 <div className="bg-slate-50 rounded-xl p-4 text-left border border-slate-100 mt-12">
                    <h4 className="font-bold text-slate-800 text-sm mb-3">Lighthouse Report Summary</h4>
                    <div className="space-y-2">
                       <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-500">First Contentful Paint</span>
                          <span className="text-emerald-600 font-bold border-emerald-200 border px-2 py-0.5 rounded bg-emerald-50">0.8 s</span>
                       </div>
                       <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-500">Speed Index</span>
                          <span className="text-emerald-600 font-bold border-emerald-200 border px-2 py-0.5 rounded bg-emerald-50">1.2 s</span>
                       </div>
                       <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-500">Largest Contentful Paint</span>
                          <span className="text-emerald-600 font-bold border-emerald-200 border px-2 py-0.5 rounded bg-emerald-50">1.4 s</span>
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
