import { Metadata } from 'next';
import HomePage from './HomePage';

export const metadata: Metadata = {
  title: 'Webseitenleasing für B2B & B2C',
  description: 'Mieten Sie eine hochkonvertierende, KI-optimierte Website bei Vanicy. Webseitenleasing ab 199€/Monat inkl. Hosting, Wartung und Updates.',
  keywords: ['Webseitenleasing', 'Website mieten', 'Homepage mieten', 'Vanicy', 'Conversion Optimierung', 'Webdesign Agentur'],
  openGraph: {
    title: 'Vanicy Webseitenleasing | Conversion-starke Websites mieten',
    description: 'Mieten Sie eine hochkonvertierende, KI-optimierte Website bei Vanicy. Webseitenleasing ab 199€/Monat inkl. Hosting, Wartung und Updates.',
    url: 'https://vanicy.de/',
  },
  alternates: {
    canonical: 'https://vanicy.de/',
  },
};

export default function Page() {
  return <HomePage />;
}
