'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'motion/react';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  suffix = '',
  prefix = ''
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(from);
  
  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          setDisplayValue(Math.round(value));
        }
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration]);
  
  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
