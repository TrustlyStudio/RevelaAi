import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import UeberUnsPage from "./UeberUnsPage";

export const metadata: Metadata = {
  title: "Über uns | Team, Vision & Werte | VANICY",
  description: "Lerne das Team hinter VANICY kennen: Vasilii, Nicole, Kaway und Lisa. Erfahre mehr über unsere Vision und Werte für Premium Web-Leasing.",
  alternates: {
    canonical: 'https://vanicy.de/ueber-uns',
  },
  openGraph: {
    title: 'Über uns | Team, Vision & Werte | VANICY',
    description: 'Lerne das Team hinter VANICY kennen. Erfahre mehr über unsere Vision und Werte für Premium Web-Leasing.',
    type: 'website',
    siteName: 'VANICY',
    locale: 'de_DE',
    url: 'https://vanicy.de/ueber-uns',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-rose-500/30">
      <Header />
      <UeberUnsPage />
      <Footer />
    </div>
  );
}
