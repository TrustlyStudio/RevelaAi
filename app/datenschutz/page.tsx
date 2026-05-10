import { Metadata } from 'next';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung für Revela Webseitenleasing. Informationen zu Cookies, Analytics und Datenerfassung auf unserer Website.',
  keywords: ['Datenschutz', 'Privacy Policy', 'DSGVO', 'Revela'],
  openGraph: {
    title: 'Datenschutzerklärung | Revela',
    description: 'Datenschutzerklärung für Revela Webseitenleasing.',
    url: 'https://revela-ai.de/datenschutz',
  },
  alternates: {
    canonical: 'https://revela-ai.de/datenschutz',
  },
};

export default function Datenschutz() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-slate-900 leading-relaxed">
      <Header />
      <main className="flex-grow pt-32 pb-20 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-black mb-8">Datenschutzerklärung</h1>
        <div className="space-y-6 text-gray-700">
          <p>
            Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
          </p>
          <p className="font-bold">
            Revela<br />
            Musterstraße 1<br />
            12345 Musterstadt
          </p>

          <h2 className="text-2xl font-bold mt-8">Erfassung allgemeiner Informationen beim Besuch unserer Website</h2>
          <p>
            Wenn Sie auf unsere Website zugreifen, werden automatisch mittels eines Cookies Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und ähnliches.
          </p>

          <h2 className="text-2xl font-bold mt-8">Kontaktmöglichkeit</h2>
          <p>
            Treten Sie bzgl. Fragen jeglicher Art per E-Mail oder Kontaktformular mit uns in Kontakt, erteilen Sie uns zum Zwecke der Kontaktaufnahme Ihre freiwillige Einwilligung. Hierfür ist die Angabe einer validen E-Mail-Adresse erforderlich.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
