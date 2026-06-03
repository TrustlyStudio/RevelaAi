import { Metadata } from 'next';
import CaseStudiesPage from './CaseStudiesPage';

export const metadata: Metadata = {
  title: 'Referenzen & Kundenprojekte | VANICY WebLeasing',
  description: 'Echte Ergebnisse für echte Unternehmen. Sieh wie VANICY professionelle Websites mit messbaren Erfolgen umsetzt - mehr Anfragen, mehr Sichtbarkeit.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://vanicy.de/case-studies',
  },
  openGraph: {
    title: 'Referenzen & Kundenprojekte | VANICY WebLeasing',
    description: 'Echte Ergebnisse für echte Unternehmen. Sieh wie VANICY professionelle Websites mit messbaren Erfolgen umsetzt - mehr Anfragen, mehr Sichtbarkeit.',
    type: 'website',
    siteName: 'VANICY',
    locale: 'de_DE',
    url: 'https://vanicy.de/case-studies',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "VANICY Referenzprojekte",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Lemuria Bay (Event Management & Marketing Agency)",
        "url": "https://vanicy.de/case-studies"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "NGFT (Aviation Technology)",
        "url": "https://vanicy.de/case-studies"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "WN-X (Persönliche Künstler Webseite)",
        "url": "https://vanicy.de/case-studies"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudiesPage />
    </>
  );
}
