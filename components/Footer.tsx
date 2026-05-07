import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="h-auto md:h-16 py-6 md:py-0 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-widest text-[#6B7280] border-t border-gray-100">
      <span className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Revela Web & Marketing Agency. Alle Rechte vorbehalten.</span>
      <div className="flex gap-6 uppercase">
        <Link href="#" className="hover:text-brand-dark-blue transition-colors">Impressum</Link>
        <Link href="#" className="hover:text-brand-dark-blue transition-colors">Datenschutz</Link>
        <Link href="#" className="hover:text-brand-dark-blue transition-colors">AGB</Link>
      </div>
    </footer>
  );
}
