'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Command, Hexagon, Triangle, Leaf, Zap, Cloud, Coffee, Shield } from 'lucide-react';

const logos = [
  { icon: <Command className="w-8 h-8 text-rose-500" />, name: "NEXUS", className: "font-serif tracking-tighter" },
  { icon: <Hexagon className="w-8 h-8 text-blue-600 fill-blue-600/20" />, name: "Lumina", className: "uppercase font-mono tracking-widest text-xl" },
  { icon: <Triangle className="w-8 h-8 text-emerald-500 fill-emerald-500/20" />, name: "TechCore", className: "tracking-tight" },
  { icon: <Leaf className="w-8 h-8 text-green-600" />, name: "EcoRise", className: "italic font-serif" },
  { icon: <Zap className="w-8 h-8 text-amber-500 fill-amber-500/20" />, name: "AeroDynamics", className: "tracking-wide font-medium" },
  { icon: <Cloud className="w-8 h-8 text-sky-500 fill-sky-500/20" />, name: "CloudScale", className: "font-black" },
  { icon: <Coffee className="w-8 h-8 text-orange-800" />, name: "BrewOps", className: "tracking-wider font-light" },
  { icon: <Shield className="w-8 h-8 text-indigo-600 fill-indigo-600/20" />, name: "DefendTech", className: "uppercase font-bold tracking-tight" },
];

export function InfiniteLogoTicker() {
  return (
    <div className="relative flex overflow-x-hidden group">
      {/* 
        We use two identical sets of logos animating from 0 to -100%.
        This creates a seamless loop.
      */}
      <motion.div
        className="py-12 flex items-center gap-16 md:gap-32 w-max px-8 md:px-16"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Render the logos twice inside the same flex container to ensure smooth loop */}
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 text-2xl font-bold text-slate-800 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default shrink-0`}
          >
            {logo.icon}
            <span className={logo.className}>{logo.name}</span>
          </div>
        ))}
      </motion.div>
      
      {/* 
        Optional: Add faded edges if you want the "fade in/out" effect on the sides 
        of the scroll area. It makes it look more polished.
      */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent"></div>
    </div>
  );
}
