'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, animate } from 'motion/react';
import { ArrowDown, AlertTriangle, TrendingUp, Users } from 'lucide-react';

function AnimatedNumber({ value }: { value: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    
    const currentVal = parseInt(node.textContent?.replace(/\./g, '') || "0", 10);
    
    const controls = animate(currentVal, value, {
      duration: 0.6,
      ease: "easeOut",
      onUpdate: (latest) => {
        node.textContent = Math.round(latest).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }
    });
    
    return controls.stop;
  }, [value]);

  return <span ref={nodeRef}>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>;
}

export function HeroInteractiveDashboard() {
  const [visitors, setVisitors] = useState(3000);

  const withoutVanicy = Math.round(visitors * 0.012);
  const withVanicy = Math.round(visitors * 0.038);
  const uplift = withVanicy - withoutVanicy;
  const yearly = uplift * 12;

  const percentage = ((visitors - 500) / (20000 - 500)) * 100;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex-1 w-full relative group"
    >
      <div className="bg-[#0f1428] rounded-3xl border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden relative">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Column: Controls */}
          <div className="w-full lg:w-[55%] p-6 md:p-8 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 relative z-10">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-400 mb-3 block">
              Interaktive Vorschau
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Wie viel verschenkst du gerade?
            </h3>
            <p className="text-sm text-white/60 mb-8 leading-relaxed">
              Verschiebe den Regler und sieh, wie viele Anfragen dir mit einer nicht-optimierten Website durch die Finger gleiten.
            </p>

            {/* Slider Config */}
            <div className="mb-8">
              <div className="flex justify-between items-end mb-3">
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/60 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> Monatliche Website-Besucher
                </label>
                <span className="text-base font-mono font-bold text-white">
                  {visitors.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </span>
              </div>
              <div className="relative py-2">
                <style dangerouslySetInnerHTML={{__html: `
                  @keyframes thumbGlow {
                    0%, 100% { box-shadow: 0 0 10px rgba(244,63,94,0.6); }
                    50% { box-shadow: 0 0 15px rgba(244,63,94,1), 0 0 0 6px rgba(244,63,94,0.2); }
                  }
                  .animate-thumb::-webkit-slider-thumb {
                    animation: thumbGlow 2s infinite ease-in-out;
                  }
                  .animate-thumb::-moz-range-thumb {
                    animation: thumbGlow 2s infinite ease-in-out;
                  }
                `}} />
                <input 
                  type="range" 
                  min="500" 
                  max="20000" 
                  step="100"
                  value={visitors}
                  onChange={(e) => setVisitors(parseInt(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #f43f5e, #9333ea ${percentage}%, rgba(255,255,255,0.1) ${percentage}%)`
                  }}
                  className="animate-thumb w-full h-1.5 rounded-lg appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-none"
                />
              </div>
            </div>

            {/* Stat Pills */}
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-rose-500/10 border border-rose-500/20">
                 <span className="text-xs font-medium text-rose-200/80">Aktuelle Conversion:</span>
                 <span className="text-xs font-bold text-rose-400">~1.2%</span>
              </div>
              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                 <span className="text-xs font-medium text-emerald-200/80">Mit VANICY Optimierung:</span>
                 <span className="text-xs font-bold text-emerald-400">~3.8%</span>
              </div>
            </div>

            <p className="text-[10px] text-white/30 tracking-wide mt-auto pt-2 border-t border-white/5">
              Basierend auf ∅ Ergebnissen unserer Kundenprojekte
            </p>
          </div>

          {/* Right Column: Visualization */}
          <div className="w-full lg:w-[45%] p-6 md:p-8 bg-white/5 backdrop-blur-md relative z-10 flex flex-col justify-center">
            
            {/* Top Card: Ohne Vanicy */}
            <div className="bg-rose-950/30 border border-rose-900/50 rounded-2xl p-5 mb-4 relative overflow-hidden shrink-0">
               <div className="absolute -top-4 -right-4 p-3 opacity-10">
                 <AlertTriangle className="w-24 h-24 text-rose-500" />
               </div>
               <div className="relative z-10">
                 <span className="text-[10px] font-bold text-rose-400/80 uppercase tracking-widest mb-1 block">Ohne VANICY</span>
                 <div className="flex items-baseline gap-2">
                   <span className="text-3xl md:text-4xl font-black text-rose-100/90 tracking-tighter">
                     <AnimatedNumber value={withoutVanicy} />
                   </span>
                   <span className="text-xs font-medium text-rose-200/60 uppercase tracking-wider">Anfragen / Monat</span>
                 </div>
                 <p className="text-xs text-rose-300/50 mt-1">Bei 1.2% Conversion</p>
               </div>
            </div>

            {/* VS Badge */}
            <div className="relative flex justify-center -my-7 z-20 shrink-0">
               <div className="bg-[#0f1428] border border-white/10 w-9 h-9 rounded-full flex items-center justify-center shadow-xl">
                 <ArrowDown className="w-4 h-4 text-white/40" />
               </div>
            </div>

            {/* Bottom Card: Mit Vanicy */}
            <div className="bg-gradient-to-br from-rose-500/10 to-purple-600/10 border border-rose-400/20 rounded-2xl p-5 mt-4 relative overflow-hidden group/card transition-all duration-300 hover:border-purple-400/30 shrink-0">
               {/* Hover Glow */}
               <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 to-purple-600/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl"></div>
               
               <div className="relative z-10">
                 <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest mb-1 block">Mit VANICY</span>
                 <div className="flex items-baseline gap-2">
                   <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400 tracking-tighter drop-shadow-lg">
                     <AnimatedNumber value={withVanicy} />
                   </span>
                   <span className="text-xs font-medium text-purple-200/60 uppercase tracking-wider pt-1">Anfragen / Monat</span>
                 </div>
                 <p className="text-xs text-purple-300/50 mt-1">Bei ∅ 3.8% Conversion</p>
               </div>
            </div>

            {/* Uplift Badges */}
            <div className="mt-6 text-center flex flex-col items-center gap-3 shrink-0">
               <motion.div 
                 animate={{ scale: [1, 1.05, 1] }} 
                 transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                 className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-3 py-1.5 rounded-full text-xs font-bold"
               >
                 <TrendingUp className="w-3.5 h-3.5" />
                 +<AnimatedNumber value={uplift} /> Anfragen mehr
               </motion.div>
               
               <span className="text-[10px] md:text-[11px] text-white/50 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                 Das entspricht <strong className="text-white/90">~<AnimatedNumber value={yearly} /></strong> mehr Kundenanfragen pro Jahr
               </span>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}
