import { Metadata } from 'next';
import PreisePage from './PreisePage';

export const metadata: Metadata = {
  title: 'WebLeasing Pakete & Preise ab 129€ | VANICY Reutlingen',
  description: 'Essential ab 129€ (24 Mon.) oder 149€ (12 Mon.), Business ab 189€, Pro ab 399€ pro Monat. Alle Pakete inkl. Hosting, SSL, SEO & Änderungen. 0€ Einrichtungsgebühr.',
  alternates: {
    canonical: 'https://vanicy.de/preise',
  },
  openGraph: {
    title: 'WebLeasing Pakete & Preise ab 129€ | VANICY Reutlingen',
    description: 'Essential ab 129€ (24 Mon.) oder 149€ (12 Mon.), Business ab 189€, Pro ab 399€ pro Monat. Alle Pakete inkl. Hosting, SSL, SEO & Änderungen. 0€ Einrichtungsgebühr.',
    type: 'website',
    siteName: 'VANICY',
    locale: 'de_DE',
    url: 'https://vanicy.de/preise',
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
  return <PreisePage />;
}
