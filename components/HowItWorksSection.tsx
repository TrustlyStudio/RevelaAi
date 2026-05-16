'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ClipboardList, Code2, Eye, Rocket } from 'lucide-react';

const steps = [
  {
    number: "1",
    title: "Onboarding",
    desc: "Du füllst unser kurzes Onboarding-Formular im Dashboard aus – Zielgruppe, Wünsche, Inhalte. Das war's. Kein Anruf, keine langen Meetings. Alles digital, alles auf deinem Tempo.",
    icon: <ClipboardList className="w-5 h-5 text-rose-400" />,
    badge: "Tag 1",
    pill: "100% online"
  },
  {
    number: "2",
    title: "Design & Entwicklung",
    desc: "Wir designen und entwickeln deine Website von Grund auf. Individuell, blitzschnell und auf Conversions ausgelegt. Du kannst den Fortschritt jederzeit in deinem Dashboard einsehen.",
    icon: <Code2 className="w-5 h-5 text-purple-400" />,
    badge: "Woche 1–2",
    pill: null
  },
  {
    number: "3",
    title: "Vorschau & Feedback",
    desc: "Du erhältst einen Link zu deiner fertigen Website auf einer Vorschau-Domain – direkt in deinem Dashboard. Teile uns dein Feedback über das Portal mit. Wir überarbeiten so lange, bis du 100% zufrieden bist.",
    icon: <Eye className="w-5 h-5 text-rose-400" />,
    badge: "Woche 2–3",
    pill: "Unbegrenzte Feedbackrunden"
  },
  {
    number: "4",
    title: "Launch & Autopilot",
    desc: "Deine Website geht live. Ab jetzt läuft alles automatisch: Hosting, Sicherheit, Updates. Änderungswünsche stellst du mit einem Klick im Dashboard – wir setzen sie um.",
    icon: <Rocket className="w-5 h-5 text-purple-400" />,
    badge: "Woche 3–4",
    pill: "Bis zu 25 Änderungen / Monat"
  }
];

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export function HowItWorksSection() {
  return (
    <section className="py-24 lg:py-32 relative bg-[#1a1f3a] text-white overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400">
              Der Vanicy Prozess
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tight text-white">
            Von 0 auf Live – in unter 4 Wochen.
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Alles läuft über unser Dashboard. Kein Telefonat nötig – es sei denn, du willst eines.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6"
        >
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="relative flex flex-row lg:flex-col items-start lg:items-center h-full"
            >
              {/* Connectors */}
              {idx !== steps.length - 1 && (
                <>
                  {/* Desktop connector */}
                  <div className="hidden lg:block absolute top-[31px] left-[50%] w-[calc(100%+1.5rem)] h-[2px] bg-gradient-to-r from-rose-500 to-purple-600 shadow-[0_0_8px_rgba(244,63,94,0.5)] z-0"></div>
                  {/* Mobile connector */}
                  <div className="block lg:hidden absolute top-[64px] left-[31px] w-[2px] h-[calc(100%+2.5rem-64px)] bg-gradient-to-b from-rose-500 to-purple-600 shadow-[0_0_8px_rgba(244,63,94,0.5)] z-0 transition-all"></div>
                </>
              )}

              {/* Node Circle */}
              <div className="w-16 h-16 shrink-0 rounded-full bg-[#1a1f3a] z-10 p-1 relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-rose-500 to-purple-600 rounded-full opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-full h-full bg-[#1a1f3a] border border-white/20 rounded-full flex items-center justify-center shadow-inner overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                   <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-br from-rose-400 to-purple-400">
                     0{step.number}
                   </span>
                </div>
              </div>

              {/* Content Card */}
              <div className="ml-6 lg:ml-0 mt-0 lg:mt-8 flex-1 w-full flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 lg:p-6 shadow-xl hover:bg-white/[0.07] hover:border-white/20 transition-colors duration-300 group/card">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-inner group-hover/card:scale-110 group-hover/card:bg-white/10 transition-all duration-300">
                    <div className="group-hover/card:brightness-125 transition-all duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] md:text-xs font-semibold text-white/70 tracking-wide uppercase whitespace-nowrap">
                    {step.badge}
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                
                <p className="text-sm text-white/60 leading-relaxed mb-6 flex-1">
                  {step.desc}
                </p>

                {step.pill && (
                  <div className="mt-auto">
                    <div className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-r from-rose-500/10 to-purple-600/10 border border-rose-500/20 text-xs font-bold text-rose-300">
                      {step.pill}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

