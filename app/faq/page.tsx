import { Metadata } from 'next';
import FAQPage from './FAQPage';

export const metadata: Metadata = {
  title: 'FAQ & Wissen | Häufig gestellte Fragen',
  description: 'Alle Antworten zum Thema Webseitenleasing, Hosting, Verträgen und Ablauf. Erfahren Sie, warum Revela die beste Wahl für Ihre Website ist.',
  keywords: ['FAQ', 'Häufig gestellte Fragen', 'Website Leasing Ablauf', 'Website mieten Fragen', 'Revela Support'],
  openGraph: {
    title: 'FAQ | Revela Webseitenleasing',
    description: 'Alle Antworten zum Thema Webseitenleasing, Hosting, Verträgen und Ablauf.',
    url: 'https://revela-ai.de/faq',
  },
  alternates: {
    canonical: 'https://revela-ai.de/faq',
  },
};

export default function Page() {
  return <FAQPage />;
}
