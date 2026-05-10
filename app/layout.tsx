import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://revela-ai.de'),
  title: {
    template: '%s | Revela',
    default: 'Revela | Webseitenleasing',
  },
  description: 'Professionelles Webseitenleasing von Revela. KI-optimierte, conversion-starke Websites zur Miete ab 199€/Monat. Steigern Sie Ihren Umsatz ohne hohes Startkapital.',
  keywords: [
    'Webseitenleasing', 'Website mieten', 'Webdesign Agentur', 'Homepage mieten', 
    'Conversion Optimierung', 'Landingpage erstellen', 'KI Website', 'Revela', 'B2B Websites'
  ],
  openGraph: {
    title: 'Revela | Webseitenleasing',
    description: 'KI-optimierte, conversion-starke Websites zur Miete ab 199€/Monat. Maximal conversion-fokussiert mit der Revela-Methode.',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Revela',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revela | Webseitenleasing',
    description: 'KI-optimierte, conversion-starke Websites zur Miete ab 199€/Monat.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Revela",
    "url": "https://revela-ai.de",
    "logo": "https://revela-ai.de/icon.png",
    "description": "Revela bietet professionelles Webseitenleasing für B2B und B2C Unternehmen. Wir erstellen conversion-starke, KI-optimierte Webseiten zur Miete.",
    "contactPoint": { 
      "@type": "ContactPoint", 
      "contactType": "customer service" 
    },
    "sameAs": [] // social media URLs placeholder
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Revela",
    "url": "https://revela-ai.de",
    "description": "Professionelles Webseitenleasing von Revela. KI-optimierte, conversion-starke Websites zur Miete ab 199€/Monat.",
    "inLanguage": "de-DE"
  };

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Revela",
    "description": "Professionelles Webseitenleasing und Webdesign-Agentur. Wir erstellen maßgeschneiderte Homepages für Ihren Erfolg.",
    "url": "https://revela-ai.de",
    "priceRange": "$$"
  };

  return (
    <html lang="de" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="alternate" hrefLang="de" href="https://revela-ai.de" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
      </head>
      <body className="min-h-screen bg-brand-off-white font-sans text-brand-dark-blue transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
