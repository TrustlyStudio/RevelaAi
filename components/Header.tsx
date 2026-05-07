'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function Header() {
  const [timeLeft, setTimeLeft] = useState({ hours: 16, minutes: 24, seconds: 42 });

  useEffect(() => {
    const timer = setInterval(() => {
      // Calculate time based on a daily reset cycle
      const now = new Date();
      // Let's say it resets every 24 hours at midnight UTC
      const tomorrow = new Date(now);
      tomorrow.setUTCHours(24, 0, 0, 0);
      
      const diff = tomorrow.getTime() - now.getTime();
      
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / 1000 / 60) % 60);
      const s = Math.floor((diff / 1000) % 60);
      
      setTimeLeft({
        // Add a fake offset to make it look like an artificial 16-18h timer if we want,
        // but real end-of-day is fine. Actually the prompt says "nur noch 16 stunden...".
        // A daily midnight resetting timer works flawlessly.
        hours: h,
        minutes: m,
        seconds: s
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-slate-950 text-white overflow-hidden text-sm border-b border-rose-500/30">
        <div className="relative flex items-center justify-center p-2.5">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-purple-600/20 animate-pulse"></div>
          
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 md:gap-4 font-medium text-center">
            <span className="bg-rose-500 text-white px-2 py-0.5 rounded text-xs font-bold tracking-wider uppercase shadow-sm">Aktion</span>
            <span>Sichere dir <strong>15% Rabatt</strong> auf dein Jahresleasing!</span>
            <span className="flex items-center gap-1.5 font-mono bg-white/10 px-2 py-0.5 rounded">
               <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
               <span className="w-5 text-center">{timeLeft.hours.toString().padStart(2, '0')}</span><span className="text-gray-400">:</span>
               <span className="w-5 text-center">{timeLeft.minutes.toString().padStart(2, '0')}</span><span className="text-gray-400">:</span>
               <span className="w-5 text-center">{timeLeft.seconds.toString().padStart(2, '0')}</span>
            </span>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <header className="fixed top-[41px] md:top-[41px] left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 group">
                <img src="/Revela_Logo_Minimal_Lockup.png" alt="Revela Logo" className="h-12 w-auto group-hover:scale-105 transition-transform object-contain" />
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-10">
              <Link href="#vorteile" className="text-brand-dark-blue text-sm hover:text-brand-magenta transition-colors font-medium">Vorteile</Link>
              <Link href="#methode" className="text-brand-dark-blue text-sm hover:text-brand-magenta transition-colors font-medium">Die Methode</Link>
              <Link href="#preise" className="text-brand-dark-blue text-sm hover:text-brand-magenta transition-colors font-medium">Preise</Link>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Link 
                href="#kontakt" 
                className="px-5 py-2.5 rounded-full border border-gray-200 text-brand-dark-blue font-medium hover:text-brand-magenta hover:border-brand-magenta/30 hover:shadow-md hover:shadow-brand-magenta/10 hover:-translate-y-0.5 transition-all duration-300 text-sm"
              >
                Login
              </Link>
              <Link 
                href="#warteliste" 
                className="relative overflow-hidden gradient-bg px-5 py-2.5 rounded-full text-white font-medium shadow-md shadow-brand-purple/20 hover:shadow-xl hover:shadow-brand-magenta/40 hover:-translate-y-0.5 transition-all duration-300 text-sm group"
              >
                <span className="relative z-10">Warteliste</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </Link>
            </div>
            
            {/* Mobile menu space */}
            <div className="md:hidden flex items-center">
              <button className="text-brand-dark-blue focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
