import { Metadata } from 'next';
import FAQPage from './FAQPage';

export const metadata: Metadata = {
  title: 'FAQ & Wissen | Häufig gestellte Fragen',
  description: 'Alle Antworten zum Thema Webseitenleasing, Hosting, Verträgen und Ablauf. Erfahren Sie, warum Vanicy die beste Wahl für Ihre Website ist.',
  keywords: ['FAQ', 'Häufig gestellte Fragen', 'Website Leasing Ablauf', 'Website mieten Fragen', 'Vanicy Support'],
  openGraph: {
    title: 'FAQ | Vanicy Webseitenleasing',
    description: 'Alle Antworten zum Thema Webseitenleasing, Hosting, Verträgen und Ablauf.',
    url: 'https://vanicy.de/faq',
  },
  alternates: {
    canonical: 'https://vanicy.de/faq',
  },
};

export default function Page() {
  return <FAQPage />;
}
