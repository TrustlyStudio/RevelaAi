import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
});

import { CookieBanner } from '@/components/CookieBanner';
import { CookieScripts } from '@/components/CookieScripts';

import { ThirdPartyScripts } from '@/components/Scripts';

export const metadata: Metadata = {
  metadataBase: new URL('https://vanicy.de'),
  title: {
    template: '%s | Vanicy - Webseitenleasing & Digitales Wachstum',
    default: 'Vanicy | Premium B2B-Webseitenleasing & Performance Webdesign',
  },
  description: 'Steigere deine Sichtbarkeit und Conversion-Rate mit Vanicy. Professionelles Webseitenleasing mit Top-SEO und Premium-Hosting ab 209€/Monat – ohne hohes Startkapital.',
  keywords: [
    'Webseitenleasing', 'Website mieten', 'Webdesign Agentur', 'Homepage mieten', 
    'Conversion Optimierung', 'Landingpage erstellen', 'Vanicy', 'B2B Websites', 'Performance Webdesign'
  ],
  openGraph: {
    title: 'Vanicy | Exklusives Webseitenleasing & Performance Webdesign',
    description: 'Steigere deine Sichtbarkeit und Conversion-Rate mit Vanicy. Professionelles Webseitenleasing mit Top-SEO und Premium-Hosting ab 209€/Monat.',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Vanicy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vanicy | Webseitenleasing',
    description: 'Conversion-starke Websites zur Miete ab 209€/Monat.',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="geo.region" content="DE-BW" />
        <meta name="geo.placename" content="Reutlingen" />
        <meta name="geo.position" content="48.4921;9.2041" />
        <meta name="ICBM" content="48.4921, 9.2041" />
        <link rel="alternate" hrefLang="de" href="https://vanicy.de" />
      </head>
      <body className="min-h-screen bg-brand-off-white font-sans text-brand-dark-blue transition-colors duration-300">
        <CookieScripts />
        <ThirdPartyScripts />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
