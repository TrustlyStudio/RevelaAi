'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Target, Heart, Shield, Zap, Linkedin, TrendingUp, Code2, MessageCircle, Sparkles, Activity, Star, Rocket, Users } from 'lucide-react';

const team = [
  {
    name: "Vasilii",
    role: "CEO, Co-Founder",
    image: "/VasiBild.png",
    description: "Visionär und Stratege. Vasilii leitet die Expansion von VANICY und stellt sicher, dass unsere Produkte maximale Wertschöpfung für Kunden bieten.",
    linkedin: "https://www.linkedin.com/",
    stats: [
      { label: "Business Growth", value: "300", suffix: "%", icon: TrendingUp },
      { label: "Successful Launches", value: "150", suffix: "+", icon: Rocket }
    ]
  },
  {
    name: "Nicole",
    role: "CTO, Co-Founder",
    image: "/NicoleBild.png",
    description: "Der technische Kopf. Nicole verantwortet die Architektur und Performance unserer Plattform, damit jede VANICY-Website blitzschnell und einwandfrei läuft.",
    linkedin: "https://www.linkedin.com/",
    stats: [
      { label: "Perf. Score", value: "100", suffix: "/100", icon: Activity },
      { label: "Lines of Code", value: "500k", suffix: "+", icon: Code2 }
    ]
  },
  {
    name: "Kaway",
    role: "Social Media Manager",
    image: "/Kaway.png",
    description: "Kommunikationsexperte. Kaway verbindet uns mit unserer Community und sorgt dafür, dass die Stimme von VANICY online gehört und geliebt wird.",
    linkedin: "https://www.linkedin.com/",
    stats: [
      { label: "Community Reach", value: "2", suffix: "M+", icon: Users },
      { label: "Engagement", value: "4.8", suffix: "%", icon: MessageCircle }
    ]
  },
  {
    name: "Lisa",
    role: "Creative Advisor",
    image: "/Lisa.png",
    description: "Design-Instanz. Lisa sorgt für den kreativen Funken und stellt sicher, dass jedes Projekt den höchsten ästhetischen Ansprüchen von VANICY gerecht wird.",
    linkedin: "https://www.linkedin.com/",
    stats: [
      { label: "Design Concepts", value: "50", suffix: "+", icon: Sparkles },
      { label: "Aesthetic Score", value: "99", suffix: "/100", icon: Star }
    ]
  }
];

const values = [
  {
    icon: Target,
    title: "Höchste Qualität",
    text: "Wir geben uns niemals mit dem Durchschnitt zufrieden. Jede unserer Seiten ist ein digitales Premium-Produkt."
  },
  {
    icon: Shield,
    title: "Verlässlichkeit",
    text: "Du kannst auf uns zählen. Wir kümmern uns um die Technik, damit du dich zu 100% auf dein Geschäft fokussieren kannst."
  },
  {
    icon: Heart,
    title: "Menschliche Nähe",
    text: "Auch im digitalen Zeitalter steht der Mensch im Mittelpunkt. Wir begegnen unseren Kunden partnerschaftlich und transparent."
  },
  {
    icon: Zap,
    title: "Fortschritt & Agilität",
    text: "Stillstand bedeutet Rückschritt. Wir nutzen modernste Technologien, um dir immer einen Schritt voraus zu sein."
  }
];

export default function UeberUnsPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <main className="w-full bg-slate-50 relative overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-rose-100/50 to-transparent blur-[100px] pointer-events-none"></div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/60 shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            <span className="text-sm font-bold tracking-widest text-slate-700 uppercase">Wer wir sind</span>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.05] mb-8">
              Wir transformieren das <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500">
                digitale Handwerk.
              </span>
            </h1>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
               Unsere Vision ist es, jedem Unternehmen eine erstklassige, hochmoderne digitale Präsenz zu ermöglichen - stressfrei, fair und auf Autopilot. Gutes Design und exzellente Technik sollten kein Privileg sein, sondern der Standard.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* --- TEAM SECTION (EDITORIAL LAYOUT) --- */}
      <section className="w-full bg-white py-32 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-100/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-24 md:mb-32"
          >
            <span className="text-rose-500 font-bold tracking-widest uppercase text-sm mb-4 block">Die Macher</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-8">
              Kreative Köpfe.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">Digitale Perfektion.</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Vier Experten, die ihre Leidenschaft für Design, Technologie und Strategie bündeln. 
              Wir erschaffen digitale Erlebnisse, die nicht nur beeindrucken, sondern auch Ergebnisse liefern.
            </p>
          </motion.div>

          <div className="flex flex-col gap-24 lg:gap-32">
            {team.map((member, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={member.name} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                  
                  {/* Image Side */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 relative group"
                  >
                    {/* Decorative Background Blob */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-rose-200 to-purple-200 rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                    
                    <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl border-[6px] border-white z-10">
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        fill 
                        className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-700"></div>
                    </div>
                  </motion.div>

                  {/* Text Side */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="w-full lg:w-1/2 flex flex-col justify-center relative"
                  >
                    {/* Big faint background text */}
                    <div 
                      className={`absolute top-1/2 ${isEven ? '-left-20' : '-right-20'} -translate-y-1/2 text-[120px] lg:text-[180px] font-black text-slate-50 opacity-80 pointer-events-none select-none z-0 whitespace-nowrap overflow-hidden`}
                      aria-hidden="true"
                    >
                      {member.name.toUpperCase()}
                    </div>

                    <div className="relative z-10">
                      <div className="flex flex-wrap items-center gap-6 mb-6">
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">{member.name}</h3>
                        {member.linkedin && (
                          <a 
                            href={member.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300" 
                            aria-label={`LinkedIn Profil von ${member.name}`}
                          >
                            <Linkedin className="w-5 h-5 fill-current" />
                          </a>
                        )}
                      </div>
                      
                      <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-50 to-purple-50 border border-rose-100 text-rose-600 font-bold tracking-wide uppercase text-sm mb-8 shadow-sm">
                        {member.role}
                      </div>
                      
                      <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-10">
                        {member.description}
                      </p>

                      {/* Interactive KPI Cards */}
                      <div className="grid grid-cols-2 gap-4">
                        {member.stats.map((stat, i) => (
                          <motion.div 
                            key={i}
                            whileHover={{ y: -5, scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
                            className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all group cursor-default"
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="p-2 rounded-lg bg-rose-50 text-rose-500 group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                                <stat.icon className="w-5 h-5" />
                              </div>
                              <span className="text-sm font-semibold text-slate-500">{stat.label}</span>
                            </div>
                            <div className="flex items-baseline gap-1">
                              <span className="text-3xl font-black text-slate-900 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-rose-500 group-hover:to-purple-600 transition-all duration-500">{stat.value}</span>
                              <span className="text-lg font-bold text-slate-400">{stat.suffix}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Unsere Grundpfeiler</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Das Fundament unserer Arbeit. Nach diesen Prinzipien entwickeln und gestalten wir jeden Tag die Websites von morgen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 lg:p-10 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 group flex flex-col md:flex-row gap-6"
            >
              <div className="w-16 h-16 shrink-0 bg-gradient-to-br from-rose-50 to-purple-50 rounded-2xl flex items-center justify-center border border-rose-100 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-out">
                <value.icon className="w-8 h-8 text-rose-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-rose-600 transition-colors">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed text-base">{value.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
