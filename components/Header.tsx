'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Instagram, Linkedin, User } from 'lucide-react';

export function Header() {
  const [timeLeft, setTimeLeft] = useState({ hours: 16, minutes: 24, seconds: 42 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { href: '/#vorteile', label: 'Vorteile' },
    { href: '/#process', label: 'Der Prozess' },
    { href: '/case-studies', label: 'Referenzen' },
    { href: '/preise', label: 'Preise' }
  ];

  return (
    <div className="sticky top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Banner */}
      <div className="bg-slate-950 text-white overflow-hidden text-sm border-b border-rose-500/30 relative z-[60]">
        <div className="relative flex items-center justify-center p-2.5">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-purple-600/20 animate-pulse"></div>
          
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 md:gap-4 font-medium text-center">
            <span className="bg-rose-500 text-white px-2 py-0.5 rounded text-xs font-bold tracking-wider uppercase shadow-sm">Aktion</span>
            <span>Teste VANICY <strong>1 vollen Monat kostenlos + 0€ Setup!</strong> Ohne Risiko.</span>
            <span className="flex items-center gap-1.5 font-mono bg-white/10 px-2 py-0.5 rounded">
               <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
               <span className="w-5 text-center">{timeLeft.hours.toString().padStart(2, '0')}</span><span className="text-gray-400">:</span>
               <span className="w-5 text-center">{timeLeft.minutes.toString().padStart(2, '0')}</span><span className="text-gray-400">:</span>
               <span className="w-5 text-center">{timeLeft.seconds.toString().padStart(2, '0')}</span>
            </span>
            <button 
              onClick={() => {
                navigator.clipboard.writeText("0TWTQSLL");
                alert("Aktionscode 0TWTQSLL kopiert!");
              }}
              className="ml-2 flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3 py-0.5 rounded text-xs font-bold transition-colors cursor-pointer"
            >
              <span className="text-emerald-400">Code:</span> <span className="font-mono tracking-widest">0TWTQSLL</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <header className={`transition-all duration-300 relative z-50 ${isScrolled ? 'bg-white shadow-md border-transparent' : 'bg-white/95 backdrop-blur-md border-b border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 group" onClick={closeMobileMenu}>
                <Image src="/VANICY_Logo_Wide_Cropped.png" alt="VANICY Logo" width={160} height={48} className="h-8 md:h-10 w-auto group-hover:scale-105 transition-transform object-contain" />
              </Link>
            </div>
            
            <nav aria-label="Main Navigation" className="hidden lg:flex space-x-8 xl:space-x-10">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-brand-dark-blue text-sm hover:text-brand-magenta transition-colors font-medium">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-2 xl:gap-4">
              <div className="flex items-center gap-2 xl:gap-3 mr-1 xl:mr-2 border-r border-gray-200 pr-3 xl:pr-5">
                <a href="https://www.instagram.com/vanicy.de/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-slate-400 hover:bg-rose-50 hover:text-brand-magenta hover:scale-110 active:scale-95 transition-all" aria-label="Instagram">
                  <Instagram className="w-4 h-4 xl:w-5 xl:h-5" />
                </a>
                <a href="https://www.linkedin.com/company/revela-ai" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-slate-400 hover:bg-rose-50 hover:text-brand-magenta hover:scale-110 active:scale-95 transition-all" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4 xl:w-5 xl:h-5" />
                </a>
              </div>
              
              <Link 
                href="https://dashboard.vanicy.de/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-full text-slate-600 font-medium hover:text-slate-900 hover:bg-slate-100 active:scale-95 transition-all duration-300 text-sm group"
              >
                <div className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-white flex items-center justify-center border border-transparent group-hover:border-slate-200 shadow-sm transition-all">
                  <User className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-900" />
                </div>
                <span className="hidden xl:block">Kunden-Login</span>
                <span className="xl:hidden">Login</span>
              </Link>
              
              <Link 
                href="/#analyse" 
                className="relative overflow-hidden flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-purple-600 px-4 xl:px-6 py-2.5 rounded-full text-white font-bold shadow-lg shadow-rose-500/25 hover:shadow-xl hover:shadow-rose-500/40 hover:-translate-y-0.5 hover:scale-105 active:scale-95 transition-all duration-300 text-sm group"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <span>Unverbindliche Beratung</span>
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/40 transition-colors">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </span>
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                </span>
              </Link>
            </div>
            
            {/* Mobile menu trigger */}
            <div className="lg:hidden flex items-center">
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
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl lg:hidden overflow-y-auto overscroll-none"
          >
            <div className="flex flex-col min-h-[100dvh] pt-[104px] pb-8 px-4">
              <div className="flex-1 flex flex-col mt-4">
                <div className="flex flex-col gap-6">
                  <div className="space-y-4">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-4">Navigation</p>
                    <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      <Link 
                        href={link.href} 
                        onClick={closeMobileMenu}
                        className="flex items-center justify-between p-4 rounded-xl text-lg font-bold text-slate-800 hover:bg-slate-50 hover:text-brand-magenta transition-all group"
                      >
                        {link.label}
                        <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-brand-magenta group-hover:translate-x-1 transition-all" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </div>

            <div className="flex justify-center items-center gap-6 mt-8">
               <a href="https://www.instagram.com/vanicy.de/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 rounded-full text-slate-400 hover:bg-rose-50 hover:text-brand-magenta transition-colors shadow-sm border border-gray-100" aria-label="Instagram">
                 <Instagram className="w-6 h-6" />
               </a>
               <a href="https://www.linkedin.com/company/revela-ai" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 rounded-full text-slate-400 hover:bg-rose-50 hover:text-brand-magenta transition-colors shadow-sm border border-gray-100" aria-label="LinkedIn">
                 <Linkedin className="w-6 h-6" />
               </a>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 space-y-4"
            >
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <p className="text-sm text-gray-500 mb-4 text-center font-medium">Bereit für mehr Anfragen?</p>
                <Link 
                  href="/#analyse" 
                  onClick={closeMobileMenu}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-rose-500 to-purple-600 shadow-lg shadow-rose-500/25 hover:shadow-xl active:scale-95 transition-all text-lg"
                >
                  Unverbindlich beraten lassen
                </Link>
                <Link 
                  href="https://dashboard.vanicy.de/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="w-full flex items-center justify-center py-4 mt-3 rounded-xl font-bold text-slate-800 bg-white border border-gray-200 shadow-sm active:scale-95 transition-all text-lg"
                >
                  Kunden-Login
                </Link>
              </div>
            </motion.div>
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
