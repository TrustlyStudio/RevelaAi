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
    template: '%s | VANICY - Webseitenleasing & Digitales Wachstum',
    default: 'VANICY | Premium B2B-Webseitenleasing & Performance Webdesign',
  },
  description: 'Live in 7 Tagen – Design, Hosting, Support inklusive. Professionelles Webseitenleasing mit Top-SEO und Premium-Hosting ab 129€/Monat.',
  keywords: [
    'Webseitenleasing', 'Website mieten', 'Webdesign Agentur', 'Homepage mieten', 
    'Conversion Optimierung', 'Landingpage erstellen', 'VANICY', 'B2B Websites', 'Performance Webdesign'
  ],
  openGraph: {
    title: 'VANICY | Exklusives Webseitenleasing & Performance Webdesign',
    description: 'Live in 7 Tagen – Design, Hosting, Support inklusive. Professionelles Webseitenleasing mit Top-SEO und Premium-Hosting ab 129€/Monat.',
    type: 'website',
    locale: 'de_DE',
    siteName: 'VANICY',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VANICY | Webseitenleasing',
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
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VANICY",
    "url": "https://vanicy.de",
    "logo": "https://vanicy.de/icon.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49-155-674-24365",
      "contactType": "customer service",
      "email": "support@vanicy.de",
      "areaServed": "DE",
      "availableLanguage": "German"
    },
    "sameAs": [
      "https://www.instagram.com/vanicy.de/",
      "https://www.linkedin.com/company/vanicy-de"
    ]
  };

  return (
    <html lang="de" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="geo.region" content="DE-BY" />
        <meta name="geo.placename" content="Landshut" />
        <meta name="geo.position" content="48.54419;12.14685" />
        <meta name="ICBM" content="48.54419, 12.14685" />
        <link rel="alternate" hrefLang="de" href="https://vanicy.de" />
        {/* Privacy-friendly analytics by Plausible */}
        <script async src="https://plausible.io/js/pa-yaIKDsNb1st7nuBOXbAmN.js"></script>
        <script dangerouslySetInnerHTML={{ __html: `
  window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
  plausible.init()
` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
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
