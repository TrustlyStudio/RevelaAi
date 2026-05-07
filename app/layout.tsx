import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Revela Web & Marketing Agency',
  description: 'Individuell programmierte, KI-optimierte Websites zur Miete ab 199€/Monat. Maximal conversion-fokussiert mit der Revela-Methode.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="de" className={`scroll-smooth ${inter.variable}`}>
      <body suppressHydrationWarning className="min-h-screen bg-brand-off-white font-sans text-brand-dark-blue">{children}</body>
    </html>
  );
}
