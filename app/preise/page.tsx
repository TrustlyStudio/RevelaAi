import { Metadata } from 'next';
import PreisePage from './PreisePage';

export const metadata: Metadata = {
  title: 'Preise & Tarife | Webseitenleasing',
  description: 'Transparente Preise für Ihr Webseitenleasing. Entdecken Sie unsere Flatrate-Tarife für Startups, KMUs und Großunternehmen ab 199€ mtl.',
  keywords: ['Preise', 'Tarife', 'Website Kosten', 'Webseitenleasing Preise', 'Homepage mieten Kosten'],
  openGraph: {
    title: 'Preise & Tarife | Revela Webseitenleasing',
    description: 'Transparente Preise für Ihr Webseitenleasing. Entdecken Sie unsere Flatrate-Tarife für Startups, KMUs und Großunternehmen ab 199€ mtl.',
    url: 'https://revela-ai.de/preise',
  },
  alternates: {
    canonical: 'https://revela-ai.de/preise',
  },
};

export default function Page() {
  return <PreisePage />;
}
