'use client';

import React from 'react';
import Image from 'next/image';
import { Check, Shield, Zap } from 'lucide-react';

export function HeroInteractiveDashboard() {
  return (
    <div className="flex-1 w-full relative flex items-center justify-center lg:justify-end xl:pl-10 mt-12 sm:mt-14 lg:mt-0 perspective-container">
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-container {
          perspective: 1000px;
        }
        .macbook-wrapper {
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          position: relative;
        }
        @media (min-width: 768px) {
          .macbook-wrapper {
            transform: rotateY(-18deg) rotateX(4deg) rotateZ(-1deg) scale(1.1);
            filter: drop-shadow(30px 25px 40px rgba(74,21,112,0.20)) drop-shadow(0px 10px 20px rgba(0,0,0,0.12));
          }
          .macbook-wrapper:hover {
            transform: rotateY(-14deg) rotateX(3deg) rotateZ(-0.5deg) scale(1.12);
          }
        }
        @media (min-width: 1280px) {
           .macbook-wrapper {
              transform: rotateY(-18deg) rotateX(4deg) rotateZ(-1deg) scale(1.25) translateX(20px);
           }
           .macbook-wrapper:hover {
              transform: rotateY(-14deg) rotateX(3deg) rotateZ(-0.5deg) scale(1.28) translateX(20px);
           }
        }
        .macbook-image {
          width: 100%;
          height: auto;
          display: block;
        }
        .floating-card {
          position: absolute;
          background: white;
          border-radius: 14px;
          box-shadow: 0 8px 32px rgba(74,21,112,0.13), 0 2px 8px rgba(0,0,0,0.06);
          z-index: 10;
        }
        .floating-pill {
          position: absolute;
          background: white;
          border-radius: 100px;
          padding: 7px 14px;
          box-shadow: 0 8px 32px rgba(74,21,112,0.13), 0 2px 8px rgba(0,0,0,0.06);
          z-index: 10;
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float1 { animation: float1 4s ease-in-out infinite; }
        .animate-float2 { animation: float2 5s ease-in-out infinite 0.8s; }
        .animate-float3 { animation: float3 4.5s ease-in-out infinite 1.5s; }
        
        @media (max-width: 767px) {
          .macbook-wrapper {
            transform: scale(1.15) !important;
            filter: none !important;
          }
          .floating-card, .floating-pill {
            display: none !important;
          }
        }
      `}} />

      <div className="macbook-wrapper w-full max-w-[950px]">
        <Image 
          src="/website-example.webp" 
          alt="MacBook Mockup mit Praxis-Website" 
          width={1200} 
          height={800} 
          quality={100}
          priority
          className="macbook-image"
        />

        {/* Card 1: Top Right */}
        <div className="floating-card animate-float1 w-[210px] p-4" style={{ top: '5%', right: '-8%' }}>
          <div className="text-[10px] text-slate-500 mb-1">Mein Web-Projekt</div>
          <div className="flex justify-between items-start mb-3">
            <div className="text-[14px] font-bold text-slate-900 leading-tight">Taxi Berlin</div>
            <div className="flex items-center gap-1 bg-[#EDFAF3] text-[#1A7F4B] px-2 py-0.5 rounded-full text-[11px] font-medium border border-[#bbf7d0]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1A7F4B]"></div>
              Live ✓
            </div>
          </div>
          <div className="flex justify-between text-[11px] mb-1">
            <span className="text-slate-500">Plan:</span>
            <span className="text-slate-900 font-medium">Full-Service</span>
          </div>
          <div className="flex justify-between text-[11px] mb-3">
            <span className="text-slate-500">Performance:</span>
            <span className="text-emerald-600 font-bold flex items-center gap-0.5"><Zap className="w-3 h-3"/> 99/100</span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="h-full w-[99%] bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"></div>
          </div>
        </div>

        {/* Card 2: Bottom Left */}
        <div className="floating-card animate-float2 w-[180px] p-4 flex gap-3 items-center" style={{ bottom: '12%', left: '-12%' }}>
          <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
             <Shield className="w-5 h-5 text-indigo-500" />
          </div>
          <div>
             <div className="text-[12px] font-bold text-slate-900 leading-tight mb-0.5">
               All-Inclusive
             </div>
             <div className="text-[10px] text-slate-500 leading-snug font-medium">
               Hosting, Updates & Support integriert
             </div>
          </div>
        </div>

        {/* Card 3: Top Left Pill */}
        <div className="floating-pill animate-float3 flex items-center gap-2 pr-4" style={{ top: '15%', left: '-6%' }}>
          <div className="w-[24px] h-[24px] rounded-full bg-gradient-to-r from-[#D4187A] to-[#9C27B0] flex items-center justify-center shrink-0 shadow-sm border border-white/20">
            <Check className="w-[12px] h-[12px] text-white" strokeWidth={3} />
          </div>
          <div className="text-[13px] font-bold text-slate-800">
            0€ Setup-Gebühr
          </div>
        </div>

      </div>
    </div>
  );
}
