'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
  { name: 'Lemuria Bay', url: 'lemuriabay.de', type: 'E-Commerce & Brand', image: '/LemuriaBay.png' },
  { name: 'NGFT', url: 'ngft.com', type: 'Technologie', image: '/NGFT.png' },
  { name: 'WN-X', url: 'wn-x.com', type: 'Industrie & B2B', image: '/WN-X.png' },
  { name: 'Tecktaxi', url: 'tecktaxi.de', type: 'Mobilität & Lokal', image: '/Tecktaxi.png' },
  { name: 'Taxi Beate', url: 'taxibeate.de', type: 'Mobilität & Lokal', image: '/Taxibeate.png' },
];

export function CustomerProjects() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight mb-4">
            Zuletzt gelaunchte Kundenprojekte.
          </h2>
          <p className="text-slate-600 text-lg mb-6">
            Ein Querschnitt unserer Arbeit. Wir bauen Systeme, die in jeder Branche als Premium-Plattform wahrgenommen werden.
          </p>
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-rose-600 font-bold hover:text-rose-700 transition-colors group">
            Zu den Case Studies im Detail <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        
        <div className="hidden md:flex gap-3">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-slate-900:text-white hover:bg-slate-50:bg-slate-800 hover:scale-105 active:scale-95 transition-all"
            aria-label="Zurück scrollen"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-slate-900:text-white hover:bg-slate-50:bg-slate-800 hover:scale-105 active:scale-95 transition-all"
            aria-label="Weiter scrollen"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="relative w-full max-w-[1920px] mx-auto group/slider">
        {/* Gradient fades for edges */}
        <div className="absolute inset-y-0 left-0 w-8 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-8 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div 
          ref={sliderRef}
          className="flex px-4 md:px-8 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="min-w-[85vw] md:min-w-[400px] lg:min-w-[480px] snap-center flex-shrink-0 cursor-default"
            >
              <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-[320px] md:h-[360px]">
                {/* Browser Header */}
                <div className="h-10 border-b border-slate-200 bg-white flex items-center px-4 gap-3 relative z-20">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-rose-500 transition-colors duration-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-amber-500 transition-colors duration-300 delay-75"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-emerald-500 transition-colors duration-300 delay-150"></div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-1/2 flex justify-center">
                    <div className="bg-slate-100 rounded-md text-[10px] text-slate-400 px-3 py-1 font-mono truncate w-full text-center group-hover:text-slate-600:text-slate-300 transition-colors duration-300">
                      {project.url}
                    </div>
                  </div>
                </div>
                {/* Browser Content */}
                <div className="flex-1 relative overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={`${project.name} Website Screenshot`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle lower gradient to ensure text readability */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300"></div>

                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end text-white z-10 transition-transform duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 text-slate-300 drop-shadow-md">{project.type}</div>
                    <h3 className="text-xl md:text-2xl font-bold truncate tracking-tight drop-shadow-lg">{project.name}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
