'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const phrases = [
  "niemand meldet sich?",
  "sie sieht veraltet aus?",
  "sie bringt keine Aufträge?",
  "sie ist viel zu teuer?",
  "die Technik nervt nur?"
];

export function AnimatedHeroText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % phrases.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-grid [grid-template-areas:'content'] align-bottom overflow-hidden">
      <AnimatePresence>
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="[grid-area:content] pb-2 block leading-[1.1]"
        >
          <span className="text-slate-800 dark:text-slate-100 mr-2 md:mr-4">Aber</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-600">
            {phrases[index]}
          </span>
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
