import { Metadata } from 'next';
import FAQPage from './FAQPage';

export const metadata: Metadata = {
  title: 'FAQ – Häufig gestellte Fragen',
  description: 'Antworten zu Laufzeiten, Inklusivleistungen, Setup-Gebühr und mehr rund um das B2B-Webseitenleasing von Vanicy. Perfekt informiert ins neue Web-Projekt starten.',
  keywords: ['FAQ', 'Häufig gestellte Fragen', 'Website Leasing Ablauf', 'Website mieten Fragen', 'Vanicy Support', 'Webdesign Hilfe', 'Webseitenleasing kündigen', 'Setup Gebühr'],
  openGraph: {
    title: 'FAQ – Häufig gestellte Fragen | Vanicy Webseitenleasing',
    description: 'Antworten zu Laufzeiten, Inklusivleistungen, Setup-Gebühr und mehr rund um das B2B-Webseitenleasing von Vanicy. Perfekt informiert ins neue Web-Projekt starten.',
    url: 'https://vanicy.de/faq',
  },
  alternates: {
    canonical: 'https://vanicy.de/faq',
  },
};

export default function Page() {
  return <FAQPage />;
}
