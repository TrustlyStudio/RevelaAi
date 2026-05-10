'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, TrendingUp, Users, Target, MousePointer2, Zap } from 'lucide-react';

export function HeroInteractiveDashboard() {
  const [conversionRate, setConversionRate] = useState(1.2);
  const [traffic, setTraffic] = useState(5000);
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Constants for Revela's impact
  const REVELA_MULTIPLIER = 3.5; 
  const projectedLeads = Math.round((traffic * (conversionRate / 100)) * REVELA_MULTIPLIER);
  const currentLeads = Math.round(traffic * (conversionRate / 100));
  const lift = projectedLeads - currentLeads;

  const formatNumber = (num: number) => {
    if (!mounted) return num.toString();
    return num.toLocaleString('de-DE'); // Use a consistent locale or wait for mount
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex-1 w-full relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3.5] md:aspect-[4/3] w-full bg-white dark:bg-[#0B0F19] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden relative group">
        
        {/* Browser Header */}
        <div className="absolute top-0 inset-x-0 h-12 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0B0F19]/50 backdrop-blur-sm flex items-center px-6 gap-2 z-20">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/30"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/30"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/30"></div>
          </div>
          <div className="ml-6 px-3 py-1 bg-white dark:bg-slate-800 rounded-md text-[10px] font-mono text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-slate-700 w-48 truncate">
            conversion-optimizer.revela.app
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 md:p-8 pt-20 h-full flex flex-col gap-6 relative">
          
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Target className="w-4 h-4 text-rose-500" />
                Revenue Potential
              </h3>
              <p className="text-[10px] text-slate-500 dark:text-slate-200">Interaktive Conversion-Vorschau</p>
            </div>
            <div className="px-3 py-1 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded-full border border-emerald-100 dark:border-emerald-500/20">
              Live Simulation
            </div>
          </div>

          {/* Interactive Controls */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-200 flex items-center gap-1.5">
                  <Users className="w-3 h-3" /> Traffic
                </label>
                <span suppressHydrationWarning className="text-xs font-mono font-bold text-slate-900 dark:text-white">{formatNumber(traffic)}</span>
              </div>
              <input 
                type="range" 
                min="500" 
                max="20000" 
                step="500"
                value={traffic}
                onChange={(e) => setTraffic(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
            </div>
            
            <div className="space-y-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-200 flex items-center gap-1.5">
                  <Activity className="w-3 h-3" /> Aktuelle CV
                </label>
                <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">{conversionRate}%</span>
              </div>
              <input 
                type="range" 
                min="0.1" 
                max="5" 
                step="0.1"
                value={conversionRate}
                onChange={(e) => setConversionRate(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
            </div>
          </div>

          {/* Visualization / Results */}
          <div className="flex-1 flex gap-4 mt-2">
            
            {/* Main Result Card */}
            <div className="flex-1 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-950 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group/card shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity duration-500 group-hover/card:opacity-100 opacity-50"></div>
              
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1 block">Mit Revela Optimization</span>
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={projectedLeads}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-sans font-black text-white tracking-tighter"
                  >
                    {projectedLeads} <span className="text-xl text-rose-400">Leads</span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <div className="flex-1 h-3 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(projectedLeads / (traffic * 0.15)) * 100}%` }}
                    className="h-full bg-gradient-to-r from-rose-500 to-purple-600 shadow-[0_0_15px_rgba(244,63,94,0.5)]"
                  />
                </div>
                <span className="text-[10px] font-bold text-rose-400">+{REVELA_MULTIPLIER}x</span>
              </div>
            </div>

            {/* Comparison Column */}
            <div className="w-1/3 flex flex-col gap-4">
              <div className="flex-1 bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700 flex flex-col justify-center gap-2">
                <span className="text-[8px] font-bold text-slate-500 dark:text-slate-200 uppercase">Vorher</span>
                <div className="text-xl font-bold text-slate-900 dark:text-white">{currentLeads}</div>
                <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: '30%' }}
                    className="h-full bg-slate-400 dark:bg-slate-500"
                  />
                </div>
              </div>
              <div className="flex-1 bg-rose-50 dark:bg-rose-500/10 rounded-2xl p-4 border border-rose-100 dark:border-rose-500/20 flex flex-col justify-center gap-1 group/lift">
                <TrendingUp className="w-4 h-4 text-rose-500 mb-1 group-hover/lift:scale-110 transition-transform" />
                <span className="text-[8px] font-bold text-rose-500 uppercase tracking-wider">Lift</span>
                <div className="text-xl font-black text-rose-600 dark:text-rose-400">+{lift}</div>
              </div>
            </div>
          </div>

          {/* Bottom Callout */}
          <div className="flex items-center gap-3 p-3 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl border border-indigo-100 dark:border-indigo-500/20">
             <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                <Zap className="w-4 h-4 text-indigo-600 dark:text-indigo-400 fill-indigo-600/20" />
             </div>
             <p className="text-[10px] text-indigo-900 dark:text-indigo-200 leading-tight">
               <span className="font-bold">Prognose:</span> Revela nutzt <span className="font-bold">Next.js 15 & KI-Edge</span> Rendering für sub-50ms Ladezeiten.
             </p>
          </div>

        </div>

        {/* Dynamic Glow effects on hover */}
        <div className={`absolute inset-0 bg-gradient-to-tr from-rose-500/5 to-purple-600/5 pointer-events-none transition-opacity duration-1000 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>

      {/* Decorative Floating Element */}
      <motion.div 
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 shadow-xl z-30 hidden lg:flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
          <MousePointer2 className="w-5 h-5 text-emerald-500" />
        </div>
        <div>
          <div className="text-[10px] font-bold text-slate-500 dark:text-slate-200 tracking-wider uppercase">Conversion Rate</div>
          <div className="text-xl font-bold text-slate-900 dark:text-white">{(conversionRate * REVELA_MULTIPLIER).toFixed(1)}% <span className="text-xs text-emerald-500 tracking-normal">▲</span></div>
        </div>
      </motion.div>

      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gradient-to-br from-rose-500/20 to-purple-600/20 blur-[100px] -z-10"></div>
    </motion.div>
  );
}
