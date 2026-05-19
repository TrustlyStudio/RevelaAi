import { Metadata } from 'next';
import FAQPage from './FAQPage';

export const metadata: Metadata = {
  title: 'Häufige Fragen zu WebLeasing | VANICY',
  description: 'Alles was du über Website-Miete wissen musst: Laufzeit, Kündigung, Inhalte, Support und mehr. Jetzt informieren.',
  alternates: {
    canonical: 'https://vanicy.de/faq',
  },
  openGraph: {
    title: 'Häufige Fragen zu WebLeasing | VANICY',
    description: 'Alles was du über Website-Miete wissen musst: Laufzeit, Kündigung, Inhalte, Support und mehr. Jetzt informieren.',
    type: 'website',
    siteName: 'VANICY',
    locale: 'de_DE',
    url: 'https://vanicy.de/faq',
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
  return <FAQPage />;
}
