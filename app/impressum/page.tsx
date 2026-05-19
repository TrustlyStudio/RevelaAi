import { Metadata } from 'next';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  title: 'Impressum',
  description: 'Impressum von VANICY - Gurev & Schwabauer GbR. Rechtliche Hinweise und Angaben gemäß § 5 DDG.',
  keywords: ['Impressum', 'Rechtliches', 'Gurev & Schwabauer GbR', 'VANICY Impressum', 'B2B Webseitenleasing'],
  openGraph: {
    title: 'Impressum | VANICY',
    description: 'Impressum von VANICY - Gurev & Schwabauer GbR. Rechtliche Hinweise und Angaben gemäß § 5 DDG.',
    url: 'https://vanicy.de/impressum',
  },
  alternates: {
    canonical: 'https://vanicy.de/impressum',
  },
};

export default function Impressum() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900 leading-relaxed overflow-x-hidden break-words">
      <Header />
      <main className="flex-grow w-full pt-24 md:pt-32 pb-16 md:pb-20 max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">Impressum</h1>
        
        <div className="space-y-6 md:space-y-8 text-slate-700">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Angaben gemäß § 5 DDG</h2>
            <p>
              Gurev & Schwabauer GbR<br />
              Rennweg 57<br />
              84034 Landshut
            </p>
          </section>

          <section>
            <p className="font-bold text-slate-900">Vertreten durch die Gesellschafter:</p>
            <p>
              Nicole Schwabauer<br />
              Vasilii Gurev
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Kontakt</h2>
            <p>
              E-Mail: <a href="mailto:hello@vanicy.de" className="text-rose-600 hover:underline">hello@vanicy.de</a><br />
              Support-E-Mail: <a href="mailto:support@vanicy.de" className="text-rose-600 hover:underline">support@vanicy.de</a><br />
              Telefon / WhatsApp Business: 015567 424365
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz (UStG):<br />
              <span className="font-semibold">DE459819864</span>
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              Nicole Schwabauer & Vasilii Gurev<br />
              Rennweg 57<br />
              84034 Landshut
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Social-Media-Präsenzen</h2>
            <p className="mb-2">Dieses Impressum gilt ebenso für unsere Präsenzen auf den folgenden Social-Media-Plattformen:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Instagram:</strong> <a href="https://www.instagram.com/vanicy.de/" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline">https://www.instagram.com/vanicy.de/</a></li>
              <li><strong>WhatsApp (Business):</strong> 015567 424365</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Gerichtsstand</h2>
            <p>
              Sofern es sich bei den Vertragspartnern um Kaufleute, juristische Personen des öffentlichen Rechts oder öffentlich-rechtliche Sondervermögen handelt, ist der Gerichtsstand:<br />
              <strong>Amtsgericht Landshut</strong>
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Links auf unseren Websites (Haftung für Links)</h2>
            <div className="space-y-4">
              <p>Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
              <p>Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Urheberrecht</h2>
            <div className="space-y-4">
              <p>Unsere erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
              <p>Soweit die Inhalte auf dieser Seite nicht von uns erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">EU-Streitbeilegung</h2>
            <div className="space-y-4">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: {' '}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline">https://ec.europa.eu/consumers/odr/</a><br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p className="italic bg-slate-100 p-4 rounded-lg border-l-4 border-slate-300">
                Hinweis: Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen, da sich unser Angebot primär an B2B-Kunden richtet.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
