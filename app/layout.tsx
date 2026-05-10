import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

import { ThemeProvider } from '@/components/ThemeProvider';
import { CookieConsent } from '@/components/CookieConsent';

export const metadata: Metadata = {
  title: 'Revela Web & Marketing Agency',
  description: 'Individuell programmierte, KI-optimierte Websites zur Miete ab 199€/Monat. Maximal conversion-fokussiert mit der Revela-Methode.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="de" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen bg-brand-off-white font-sans text-brand-dark-blue dark:bg-[#0B0F19] dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
