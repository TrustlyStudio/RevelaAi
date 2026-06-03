import { Metadata } from 'next';
import HomePage from './HomePage';

export const metadata: Metadata = {
  title: 'Website mieten ab 129€/Monat | VANICY WebLeasing Reutlingen',
  description: 'Professionelle Website zum festen Monatspreis - kein Vorabpreis, kein Risiko. Custom Design, Hosting, SEO & Support inklusive. Jetzt 1 Monat kostenlos testen. VANICY - Reutlingen.',
  alternates: {
    canonical: 'https://vanicy.de/',
  },
  openGraph: {
    title: 'Website mieten ab 129€/Monat | VANICY WebLeasing Reutlingen',
    description: 'Professionelle Website zum festen Monatspreis - kein Vorabpreis, kein Risiko. Custom Design, Hosting, SEO & Support inklusive. Jetzt 1 Monat kostenlos testen. VANICY - Reutlingen.',
    type: 'website',
    siteName: 'VANICY',
    locale: 'de_DE',
    url: 'https://vanicy.de/',
    images: [{
      url: 'https://vanicy.de/og-image.png',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://vanicy.de/#business",
        "name": "VANICY",
        "alternateName": "VANICY WebLeasing",
        "description": "Premium WebLeasing Agentur - professionelle Websites zum festen Monatspreis für kleine und mittelständische Unternehmen.",
        "url": "https://vanicy.de",
        "telephone": "+4915567424365",
        "email": "support@vanicy.de",
        "foundingDate": "2024",
        "priceRange": "€€",
        "currenciesAccepted": "EUR",
        "paymentAccepted": "Kreditkarte, SEPA-Lastschrift",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Reutlingen",
          "addressRegion": "Baden-Württemberg",
          "addressCountry": "DE"
        },
        "areaServed": [
          { "@type": "City", "name": "Reutlingen" },
          { "@type": "City", "name": "Tübingen" },
          { "@type": "City", "name": "Stuttgart" },
          { "@type": "City", "name": "Landshut" },
          { "@type": "Country", "name": "Deutschland" }
        ],
        "knowsAbout": ["Webdesign", "WebLeasing", "SEO", "Hosting"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "WebLeasing Pakete",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Essential (12 Monate)",
              "description": "3 Unterseiten, 1 Formular, 10 Änderungen/Monat",
              "price": "149.00",
              "priceCurrency": "EUR",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "billingDuration": 12,
                "billingIncrement": 1,
                "unitCode": "MON"
              }
            },
            {
              "@type": "Offer",
              "name": "Essential (24 Monate)",
              "description": "3 Unterseiten, 1 Formular, 10 Änderungen/Monat",
              "price": "129.00",
              "priceCurrency": "EUR",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "billingDuration": 24,
                "billingIncrement": 1,
                "unitCode": "MON"
              }
            },
            {
              "@type": "Offer",
              "name": "Business (12 Monate)",
              "description": "6 Unterseiten, 2 Formulare, 25 Änderungen/Monat",
              "price": "229.00",
              "priceCurrency": "EUR"
            },
            {
              "@type": "Offer",
              "name": "Business (24 Monate)",
              "description": "6 Unterseiten, 2 Formulare, 25 Änderungen/Monat",
              "price": "189.00",
              "priceCurrency": "EUR"
            },
            {
              "@type": "Offer",
              "name": "Pro (12 Monate)",
              "description": "9 Unterseiten, 5 Formulare, 50 Änderungen/Monat",
              "price": "449.00",
              "priceCurrency": "EUR"
            },
            {
              "@type": "Offer",
              "name": "Pro (24 Monate)",
              "description": "9 Unterseiten, 5 Formulare, 50 Änderungen/Monat",
              "price": "399.00",
              "priceCurrency": "EUR"
            }
          ]
        },
        "sameAs": [
          "https://www.instagram.com/vanicy.de"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://vanicy.de/#website",
        "url": "https://vanicy.de",
        "name": "VANICY",
        "description": "Premium WebLeasing - Hochwertige Websites zum festen Monatspreis",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://vanicy.de/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Was kostet eine Website bei VANICY?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "VANICY bietet Website-Leasing ab 129€ pro Monat an (Essential-Plan, 24 Monate Laufzeit). Der 12-Monats-Plan startet bei 149€/Monat. Business-Pläne ab 189€, Pro ab 399€ monatlich - alles inklusive Hosting, SSL, Design und Support."
            }
          },
          {
            "@type": "Question",
            "name": "Wie lange ist die Mindestlaufzeit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Es gibt 12-Monats- und 24-Monats-Laufzeiten. Du kannst zunächst 1 vollen Monat kostenlos testen ohne Risiko und ohne Einrichtungsgebühr."
            }
          },
          {
            "@type": "Question",
            "name": "Was ist WebLeasing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "WebLeasing bedeutet: Statt einmalig 5.000-15.000€ für eine Website zu zahlen, mietest du sie zum festen Monatspreis. Design, Entwicklung, Hosting, Updates und Support sind vollständig enthalten."
            }
          },
          {
            "@type": "Question",
            "name": "Arbeitet VANICY auch mit Unternehmen außerhalb von Reutlingen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja. VANICY betreut Unternehmen deutschlandweit - mit Schwerpunkt in Reutlingen, Tübingen, Stuttgart sowie Landshut und ganz Bayern. Alle Leistungen werden remote erbracht."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  );
}
