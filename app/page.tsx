import { Metadata } from 'next';
import HomePage from './HomePage';

export const metadata: Metadata = {
  title: 'Premium B2B-Webseitenleasing',
  description: 'Miete eine hochkonvertierende, professionelle Website bei Vanicy. Innovatives Webseitenleasing ab 209€/Monat inkl. schnellem Hosting, Wartung und ständigen Updates.',
  keywords: ['Webseitenleasing', 'Website mieten', 'Homepage mieten', 'Vanicy', 'B2B Webseitenleasing', 'Webdesign Agentur', 'B2B Webdesign', 'Website Abo'],
  openGraph: {
    title: 'Vanicy Webseitenleasing | Conversion-starke Websites mieten',
    description: 'Miete eine hochkonvertierende, professionelle Website bei Vanicy. Innovatives Webseitenleasing ab 209€/Monat inkl. schnellem Hosting, Wartung und ständigen Updates.',
    url: 'https://vanicy.de/',
  },
  alternates: {
    canonical: 'https://vanicy.de/',
  },
};

export default function Page() {
  return <HomePage />;
}
