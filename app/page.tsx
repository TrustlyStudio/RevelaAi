import { Metadata } from 'next';
import HomePage from './HomePage';

export const metadata: Metadata = {
  title: 'Webseitenleasing für B2B & B2C',
  description: 'Mieten Sie eine hochkonvertierende, KI-optimierte Website bei Revela. Webseitenleasing ab 199€/Monat inkl. Hosting, Wartung und Updates.',
  keywords: ['Webseitenleasing', 'Website mieten', 'Homepage mieten', 'Revela', 'Conversion Optimierung', 'Webdesign Agentur'],
  openGraph: {
    title: 'Revela Webseitenleasing | Conversion-starke Websites mieten',
    description: 'Mieten Sie eine hochkonvertierende, KI-optimierte Website bei Revela. Webseitenleasing ab 199€/Monat inkl. Hosting, Wartung und Updates.',
    url: 'https://revela-ai.de/',
  },
  alternates: {
    canonical: 'https://revela-ai.de/',
  },
};

export default function Page() {
  return <HomePage />;
}
