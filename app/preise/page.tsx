import { Metadata } from 'next';
import PreisePage from './PreisePage';

export const metadata: Metadata = {
  title: 'Preise & Pakete',
  description: 'Transparente Preise für dein Premium Webseitenleasing bei Vanicy. Vergleiche unsere All-Inclusive-Tarife Essential, Business und Pro. Jetzt ab 209€ mtl. starten.',
  keywords: ['Vanicy Preise', 'Webseitenleasing Tarife', 'Website Kosten', 'Homepage mieten', 'Webdesign Agentur Preise', 'B2B Webleasing Kosten', 'Website monatlich zahlen', 'Essential Business Pro Pakete'],
  openGraph: {
    title: 'Preise & Pakete | Vanicy Webseitenleasing',
    description: 'Transparente Preise für dein Premium Webseitenleasing bei Vanicy. Vergleiche unsere All-Inclusive-Tarife Essential, Business und Pro. Jetzt ab 209€ mtl. starten.',
    url: 'https://vanicy.de/preise',
  },
  alternates: {
    canonical: 'https://vanicy.de/preise',
  },
};

export default function Page() {
  return <PreisePage />;
}
