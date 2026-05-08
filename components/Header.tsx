'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

export function Header() {
  const [timeLeft, setTimeLeft] = useState({ hours: 16, minutes: 24, seconds: 42 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '#vorteile', label: 'Vorteile' },
    { href: '#methode', label: 'Die Methode' },
    { href: '#preise', label: 'Preise' },
  ];

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
      <header className="fixed top-[53px] md:top-[41px] left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 group" onClick={closeMobileMenu}>
                <img src="/Revela_Logo_Minimal_Lockup.png" alt="Revela Logo" className="h-10 md:h-12 w-auto group-hover:scale-105 transition-transform object-contain" />
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-10">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-brand-dark-blue text-sm hover:text-brand-magenta transition-colors font-medium">
                  {link.label}
                </Link>
              ))}
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
            
            {/* Mobile menu trigger */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMobileMenu}
                className="text-brand-dark-blue focus:outline-none p-2 -mr-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Menü umschalten"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Animated Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden pt-36 pb-6 px-6 flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-2">Navigation</p>
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.1 }}
                    >
                      <Link 
                        href={link.href} 
                        onClick={closeMobileMenu}
                        className="flex items-center justify-between p-4 rounded-2xl text-xl font-bold text-slate-800 hover:bg-gray-50 hover:text-brand-magenta transition-all group"
                      >
                        {link.label}
                        <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-brand-magenta group-hover:translate-x-1 transition-all" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 space-y-4"
            >
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <p className="text-sm text-gray-500 mb-4 text-center font-medium">Lass uns gemeinsam durchstarten</p>
                <Link 
                  href="#warteliste" 
                  onClick={closeMobileMenu}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-rose-500 to-purple-600 shadow-lg shadow-rose-500/25 hover:shadow-xl active:scale-95 transition-all text-lg"
                >
                  Auf die Warteliste
                </Link>
                <Link 
                  href="#kontakt" 
                  onClick={closeMobileMenu}
                  className="w-full flex items-center justify-center py-4 mt-3 rounded-xl font-bold text-slate-800 bg-white border border-gray-200 shadow-sm active:scale-95 transition-all text-lg"
                >
                  Login
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
