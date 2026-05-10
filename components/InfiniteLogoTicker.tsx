'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Command, Hexagon, Zap, Shield, Asterisk, Target, Triangle } from 'lucide-react';

const logos = [
  { icon: <Command className="w-5 h-5 md:w-6 md:h-6" />, name: "NEXUS", className: "font-serif tracking-tighter text-xl md:text-2xl" },
  { icon: <Hexagon className="w-5 h-5 md:w-6 md:h-6" />, name: "LUMINA", className: "uppercase font-sans font-black tracking-widest text-lg md:text-xl" },
  { icon: <Asterisk className="w-5 h-5 md:w-6 md:h-6" />, name: "TechCore", className: "font-mono tracking-tight lowercase text-xl md:text-2xl" },
  { icon: <Triangle className="w-5 h-5 md:w-6 md:h-6" />, name: "EcoRise", className: "italic font-serif font-medium text-xl md:text-2xl" },
  { icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />, name: "AeroDynamics", className: "font-sans font-semibold tracking-wide uppercase text-lg md:text-xl" },
  { icon: <Target className="w-5 h-5 md:w-6 md:h-6" />, name: "CloudScale", className: "font-sans font-bold tracking-tighter text-xl md:text-2xl" },
  { icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6" />, name: "BrewOps", className: "font-mono tracking-widest uppercase text-lg md:text-xl" },
  { icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />, name: "DefendTech", className: "font-serif font-black tracking-tight text-xl md:text-2xl" },
];

export function InfiniteLogoTicker() {
  return (
    <div className="relative flex overflow-x-hidden group">
      <motion.div
        className="py-12 flex items-center gap-16 md:gap-32 w-max px-8 md:px-16"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          duration: 70,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-500 cursor-default shrink-0 opacity-70 hover:opacity-100 px-4`}
          >
            {logo.icon}
            <span className={logo.className}>{logo.name}</span>
          </div>
        ))}
      </motion.div>
      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent"></div>
    </div>
  );
}
