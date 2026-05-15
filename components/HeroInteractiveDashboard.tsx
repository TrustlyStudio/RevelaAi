'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Activity, TrendingUp, Users, Target, MousePointer2, Zap } from 'lucide-react';

export function HeroInteractiveDashboard() {
  const [conversionRate, setConversionRate] = useState(1.2);
  const [traffic, setTraffic] = useState(5000);
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Background blur and floating element parallax transformations
  const bgY = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Constants for Vanicy's impact
  const VANICY_MULTIPLIER = 3.5; 
  const projectedLeads = Math.round((traffic * (conversionRate / 100)) * VANICY_MULTIPLIER);
  const currentLeads = Math.round(traffic * (conversionRate / 100));
  const lift = projectedLeads - currentLeads;

  const formatNumber = (num: number) => {
    if (!mounted) return num.toString();
    return num.toLocaleString('de-DE'); // Use a consistent locale or wait for mount
  };

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex-1 w-full relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3.5] md:aspect-[4/3] w-full bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden relative group">
        
        {/* Browser Header */}
        <div className="absolute top-0 inset-x-0 h-10 border-b border-slate-200 bg-slate-50/50 backdrop-blur-sm flex items-center px-4 gap-2 z-20">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/30"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/30"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/30"></div>
          </div>
          <div className="ml-4 px-2 py-0.5 bg-white rounded-md text-[9px] font-mono text-slate-400 border border-slate-100 w-32 md:w-48 truncate">
            conversion-optimizer.vanicy.app
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 md:p-8 pt-14 md:pt-20 h-full flex flex-col gap-4 md:gap-6 relative">
          
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xs md:text-sm font-bold text-slate-900 flex items-center gap-2">
                <Target className="w-3.5 h-3.5 md:w-4 h-4 text-rose-500" />
                Revenue Potential
              </h3>
              <p className="text-[9px] md:text-[10px] text-slate-500">Interaktive Conversion-Vorschau</p>
            </div>
            <div className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[9px] md:text-[10px] font-bold rounded-full border border-emerald-100">
              Live Simulation
            </div>
          </div>

          {/* Interactive Controls */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="space-y-2 md:space-y-3 bg-slate-50 p-3 md:p-4 rounded-xl md:rounded-2xl border border-slate-100">
              <div className="flex justify-between items-center">
                <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Users className="w-3 h-3" /> Traffic
                </label>
                <span suppressHydrationWarning className="text-[10px] md:text-xs font-mono font-bold text-slate-900">{formatNumber(traffic)}</span>
              </div>
              <input 
                type="range" 
                min="500" 
                max="20000" 
                step="500"
                value={traffic}
                onChange={(e) => setTraffic(parseInt(e.target.value))}
                className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
            </div>
            
            <div className="space-y-2 md:space-y-3 bg-slate-50 p-3 md:p-4 rounded-xl md:rounded-2xl border border-slate-100">
              <div className="flex justify-between items-center">
                <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Activity className="w-3 h-3" /> Aktuelle CV
                </label>
                <span className="text-[10px] md:text-xs font-mono font-bold text-slate-900">{conversionRate}%</span>
              </div>
              <input 
                type="range" 
                min="0.1" 
                max="5" 
                step="0.1"
                value={conversionRate}
                onChange={(e) => setConversionRate(parseFloat(e.target.value))}
                className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
            </div>
          </div>

          {/* Visualization / Results */}
          <div className="flex-1 flex gap-3 md:gap-4 mt-1 md:mt-2">
            
            {/* Main Result Card */}
            <div className="flex-1 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col justify-between relative overflow-hidden group/card shadow-lg">
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-rose-500/10 rounded-full blur-2xl md:blur-3xl -mr-12 md:-mr-16 -mt-12 md:-mt-16 transition-opacity duration-500 group-hover/card:opacity-100 opacity-50"></div>
              
              <div>
                <span className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1 block">Mit Vanicy Optimization</span>
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={projectedLeads}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-sans font-black text-white tracking-tighter"
                  >
                    {projectedLeads} <span className="text-lg text-rose-400">Leads</span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center gap-2 mt-3 md:mt-4">
                <div className="flex-1 h-2 md:h-3 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(projectedLeads / (traffic * 0.15)) * 100}%` }}
                    className="h-full bg-gradient-to-r from-rose-500 to-purple-600 shadow-[0_0_15px_rgba(244,63,94,0.5)]"
                  />
                </div>
                <span className="text-[9px] md:text-[10px] font-bold text-rose-400">+{VANICY_MULTIPLIER}x</span>
              </div>
            </div>

            {/* Comparison Column */}
            <div className="w-1/3 flex flex-col gap-3 md:gap-4">
              <div className="flex-1 bg-slate-50 rounded-xl md:rounded-2xl p-3 md:p-4 border border-slate-100 flex flex-col justify-center gap-1 md:gap-2">
                <span className="text-[7px] md:text-[8px] font-bold text-slate-500 uppercase">Vorher</span>
                <div className="text-lg md:text-xl font-bold text-slate-900">{currentLeads}</div>
                <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: '30%' }}
                    className="h-full bg-slate-400"
                  />
                </div>
              </div>
              <div className="flex-1 bg-rose-50 rounded-xl md:rounded-2xl p-3 md:p-4 border border-rose-100 flex flex-col justify-center gap-0.5 md:gap-1 group/lift">
                <TrendingUp className="w-3.5 h-3.5 md:w-4 h-4 text-rose-500 mb-0.5 md:mb-1 group-hover/lift:scale-110 transition-transform" />
                <span className="text-[7px] md:text-[8px] font-bold text-rose-500 uppercase tracking-wider">Lift</span>
                <div className="text-lg md:text-xl font-black text-rose-600">+{lift}</div>
              </div>
            </div>
          </div>

          {/* Bottom Callout */}
          <div className="flex items-center gap-2 md:gap-3 p-3 bg-indigo-50 rounded-lg md:rounded-xl border border-indigo-100">
             <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white flex shrink-0 items-center justify-center shadow-sm">
                <Zap className="w-3.5 h-3.5 md:w-4 h-4 text-indigo-600 fill-indigo-600/20" />
             </div>
             <p className="text-[9px] md:text-[10px] text-indigo-900 leading-tight">
               <span className="font-bold">Prognose:</span> Vanicy nutzt <span className="font-bold">Next.js 15 & KI-Edge</span> Rendering für sub-50ms Ladezeiten.
             </p>
          </div>

        </div>

        {/* Dynamic Glow effects on hover */}
        <div className={`absolute inset-0 bg-gradient-to-tr from-rose-500/5 to-purple-600/5 pointer-events-none transition-opacity duration-1000 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>

      {/* Decorative Floating Element */}
      <motion.div 
        style={{ y: floatingY }}
        className="absolute -top-6 -right-6 z-30 hidden lg:flex pointer-events-none"
      >
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
          className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xl flex items-center gap-3 pointer-events-auto"
        >
          <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
            <MousePointer2 className="w-5 h-5 text-emerald-500" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">Conversion Rate</div>
            <div className="text-xl font-bold text-slate-900">{(conversionRate * VANICY_MULTIPLIER).toFixed(1)}% <span className="text-xs text-emerald-500 tracking-normal">▲</span></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Subtle parallax background glow */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute -bottom-20 -left-20 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-rose-500/20 to-purple-600/20 blur-[100px] pointer-events-none -z-10"
      />
    </motion.div>
  );
}
