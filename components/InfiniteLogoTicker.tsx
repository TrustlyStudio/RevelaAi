'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const logos = [
  { src: '/Jaz in the city logo.png', name: 'Jaz in the city' },
  { src: '/FIVO Logo.png', name: 'FIVO' },
  { src: '/LemuriaBay Logo.png', name: 'LemuriaBay' },
  { src: '/SCHWARZ Logo.png', name: 'SCHWARZ' },
  { src: '/SDV Studios Logo.png', name: 'SDV Studios' },
  { src: '/WN-X Logo.png', name: 'WN-X' },
  { src: '/ngftlogo.png', name: 'NGFT' },
  { src: '/NEUFELD logo.png', name: 'NEUFELD' },
  { src: '/Taxi Beate Logo.png', name: 'Taxi Beate' },
  { src: '/TeckTaxi Logo.png', name: 'TeckTaxi' },
  { src: '/Khan Taxi Logo.png', name: 'Khan Taxi' },
  { src: '/FEUXT logo.png', name: 'FEUXT' },
  { src: '/Step V Studio Logo.png', name: 'Step V Studio' },
];

export function InfiniteLogoTicker() {
  return (
    <div className="relative flex overflow-x-hidden group">
      <motion.div
        className="py-4 md:py-6 flex items-center gap-8 md:gap-14 w-max px-4 md:px-8"
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
            className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-500 cursor-default shrink-0 px-4 filter grayscale hover:grayscale-0"
          >
            <Image 
              src={logo.src} 
              alt={`${logo.name} Logo`} 
              width={140} 
              height={60} 
              className="object-contain h-8 md:h-12 w-auto pointer-events-none" 
            />
          </div>
        ))}
      </motion.div>
      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent"></div>
    </div>
  );
}
