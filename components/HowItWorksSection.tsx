'use client';

import { motion } from 'motion/react';
import { PhoneCall, PaintBucket, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <PhoneCall className="w-6 h-6 text-indigo-600" />,
    iconBg: "bg-indigo-50 border-indigo-100",
    number: "01",
    title: "Kick-off & Strategie",
    desc: "In einem unverbindlichen Gespräch analysieren wir deine Ziele. Sagt dir alles zu, konzipieren wir die strategische Ausrichtung und sammeln alle benötigten Informationen."
  },
  {
    icon: <PaintBucket className="w-6 h-6 text-rose-500" />,
    iconBg: "bg-rose-50 border-rose-100",
    number: "02",
    title: "Design & Entwicklung",
    desc: "Zurücklehnen! Wir designen und programmieren deine maßgeschneiderte High-End Website von Grund auf – meistens sind wir innerhalb von 2 bis 4 Wochen fertig."
  },
  {
    icon: <Rocket className="w-6 h-6 text-emerald-600" />,
    iconBg: "bg-emerald-50 border-emerald-100",
    number: "03",
    title: "Launch & Autopilot",
    desc: "Deine Website geht online und generiert live Resultate. Du erhältst Zugang zum Portal, wo du jederzeit mit einem Klick kleine Text- oder Bildänderungen anfordern kannst."
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
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent -z-10 hidden lg:block" />
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-slate-900 tracking-tight mb-6">
            In 3 Schritten zu deinem<br />digitalen Vorsprung.
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Keine zeitraubenden Workshops. Keine komplexen Aufgaben für dich. Wir haben unseren Prozess so optimiert, dass du dich auf dein Kerngeschäft konzentrieren kannst.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-px border-t border-dashed border-slate-300 z-0"></div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className={`w-24 h-24 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-8 relative group-hover:scale-105 transition-transform duration-300`}>
                <div className={`w-16 h-16 rounded-xl ${step.iconBg} border flex items-center justify-center`}>
                  {step.icon}
                </div>
                {/* Decorative Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed max-w-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
