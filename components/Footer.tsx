import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CookieSettingsButton } from './CookieSettingsButton';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <Image src="/VANICY_Logo_Wide_Cropped.png" alt="Vanicy Logo" width={160} height={48} className="h-8 md:h-10 w-auto brightness-0 invert group-hover:scale-105 transition-transform object-contain" />
            </Link>
            <p className="text-sm font-medium leading-relaxed text-slate-500 max-w-xs">
              Premium Web-Leasing für Unternehmen, die bereit sind, in ihrer Branche die Führung zu übernehmen.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Lösungen</h4>
            <nav aria-label="Footer Navigation Lösungen">
              <ul className="space-y-4 text-sm font-medium">
                <li><Link href="#methode" className="hover:text-white transition-colors block">Unsere Methode</Link></li>
                <li><Link href="/case-studies" className="hover:text-white transition-colors block">Case Studies</Link></li>
                <li><Link href="#preise" className="hover:text-white transition-colors block">Preise & Pläne</Link></li>
                <li><Link href="#analyse" className="hover:text-white transition-colors block">Unverbindliche Beratung</Link></li>
              </ul>
            </nav>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Unternehmen</h4>
            <nav aria-label="Footer Navigation Unternehmen">
              <ul className="space-y-4 text-sm font-medium">
                <li><Link href="/ueber-uns" className="hover:text-white transition-colors block">Über uns</Link></li>
                <li><Link href="/karriere" className="hover:text-white transition-colors block">Karriere</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors block">Blog</Link></li>
                <li><Link href="/kontakt" className="hover:text-white transition-colors block">Kontakt</Link></li>
              </ul>
            </nav>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Kontakt</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <span className="block text-slate-500">Email</span>
                <a href="mailto:hello@vanicy.de" className="hover:text-white transition-colors text-slate-300">hello@vanicy.de</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-semibold tracking-wider text-slate-600">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span>&copy; {new Date().getFullYear()} Vanicy Web & Marketing Agency. Alle Rechte vorbehalten.</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/vanicy.de/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/revela-ai" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>

          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-slate-300 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-slate-300 transition-colors">Datenschutz</Link>
            <Link href="/agb" className="hover:text-slate-300 transition-colors">AGB</Link>
            <CookieSettingsButton />
          </div>
        </div>

      </div>
    </footer>
  );
}
