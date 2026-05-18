import { Metadata } from 'next';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen (AGB)',
  description: 'Allgemeine Geschäftsbedingungen der Gurev & Schwabauer GbR (Vanicy). Regelungen zu Website-Abonnements, Onboarding und Zahlungsbedingungen.',
  keywords: ['AGB', 'Geschäftsbedingungen', 'Rechtliches', 'Vanicy AGB', 'Webseitenleasing Konditionen'],
  openGraph: {
    title: 'AGB | Vanicy',
    description: 'Allgemeine Geschäftsbedingungen der Gurev & Schwabauer GbR (Vanicy).',
    url: 'https://vanicy.de/agb',
  },
  alternates: {
    canonical: 'https://vanicy.de/agb',
  },
};

export default function AGB() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900 leading-relaxed">
      <Header />
      <main className="flex-grow pt-32 pb-20 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600 uppercase tracking-tight">Allgemeine Geschäftsbedingungen (AGB)</h1>
        <p className="text-slate-500 font-medium mb-8">Stand: Mai 2026</p>
        
        <div className="space-y-10 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 1</span>
              Geltungsbereich und Vertragspartner
            </h2>
            <div className="space-y-3">
              <p>(1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB“) gelten für alle Verträge über Website-Abonnements, Marketing-Dienstleistungen und damit verbundene IT-Services, die zwischen der <strong>Gurev & Schwabauer GbR, Rennweg 57, 84034 Landshut</strong> (nachfolgend „Anbieter“) und ihren Kunden geschlossen werden.</p>
              <p>(2) Das Angebot des Anbieters richtet sich <strong>ausschließlich an Unternehmer</strong> im Sinne des § 14 BGB, juristische Personen des öffentlichen Rechts oder öffentlich-rechtliche Sondervermögen (B2B). Verträge mit Verbrauchern im Sinne des § 13 BGB werden nicht geschlossen.</p>
              <p>(3) Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden werden nicht Vertragsbestandteil, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 2</span>
              Vertragsgegenstand und Leistungsumfang
            </h2>
            <div className="space-y-3">
              <p>(1) Gegenstand des Vertrages ist die Bereitstellung, Erstellung und Betreuung von Websites im Abonnement-Modell sowie die Bereitstellung des dazugehörigen Kundenportals und Marketings-Services gem. der individuellen Produktbeschreibung zum Zeitpunkt der Buchung.</p>
              <p>(2) Der Anbieter erbringt seine Leistungen nach dem aktuellen Stand der Technik. Der Anbieter ist berechtigt, sich zur Erbringung der Leistungen qualifizierter Drittdienstleister (z. B. Hostinger, Stripe, Google Cloud) zu bedienen.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 3</span>
              Vertragsschluss, Laufzeit und Kündigung
            </h2>
            <div className="space-y-3">
              <p>(1) Der Vertragsschluss erfolgt durch die Online-Buchung eines Abonnement-Tarifs über die Website des Anbieters und der anschließenden Bestätigung per E-Mail oder durch Unterzeichnung eines individuellen Angebots.</p>
              <p>(2) Je nach gewähltem Tarif beträgt die Mindestvertragslaufzeit 12 oder 24 Monate. Die Zahlungsabwicklung erfolgt fortlaufend über den gewählten Abrechnungszeitraum.</p>
              <p>(3) Der Vertrag verlängert sich nach Ablauf der Mindestvertragslaufzeit automatisch um weitere 12 Monate, sofern er nicht von einer Partei mit einer Frist von 1 Monat zum Ende der jeweiligen Laufzeit gekündigt wird.</p>
              <p>(4) Die Kündigung kann in Textform (z. B. per E-Mail an <a href="mailto:hello@vanicy.de" className="text-rose-600 hover:underline">hello@vanicy.de</a>) oder, sofern im Kundenportal bereitgestellt, über die dortige Kündigungsfunktion erfolgen.</p>
              <p>(5) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.</p>
            </div>
          </section>

          <section className="bg-white p-6 rounded-2xl border-l-4 border-rose-500 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 4</span>
              Onboarding-Phase und Mitwirkung
            </h2>
            <div className="space-y-3">
              <p>(1) Die Erstellung der Website erfordert die aktive Mitwirkung des Kunden im Rahmen der Onboarding-Phase. Der Kunde ist verpflichtet, dem Anbieter alle für die Erstellung der Website erforderlichen Inhalte (z. B. Texte, Logos, Bilder, Zugangsdaten) rechtzeitig und in digitaler Form zur Verfügung zu stellen.</p>
              <p>(2) Die Pflicht zur Zahlung des vereinbarten Abonnement-Preises beginnt mit dem Zustandekommen des Vertrages bzw. der Bereitstellung des Kundenzugangs/Beginn der Onboarding-Phase. Verzögert sich die Fertigstellung oder der Livegang der Website, weil der Kunde im Onboarding erforderliche Materialien, Zuarbeiten oder Freigaben nicht liefert, bleibt die Verpflichtung zur fortlaufenden Zahlung des monatlichen Entgelts hiervon unberührt.</p>
              <p>(3) Nach Durchführung des gemeinsamen Briefing-Gesprächs und dem vollständigen Erhalt aller erforderlichen Materialien durch den Kunden benötigt der Anbieter im Schnitt 2 bis 4 Wochen (Regelfall ca. 14 Tage) bis zur Fertigstellung und Bereitstellung der Website.</p>
              <p>(4) Der Kunde willigt ein, dass alle im Rahmen des Onboardings übermittelten Informationen und Daten vom Anbieter zum Zwecke der Vertragserfüllung gespeichert und verarbeitet werden. Der Kunde sichert zu, dass er Inhaber aller erforderlichen Rechte an den bereitgestellten Inhalten ist.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 5</span>
              Zahlungsbedingungen und SEPA
            </h2>
            <div className="space-y-3">
              <p>(1) Alle Preise verstehen sich als Nettopreise zzgl. der jeweils geltenden gesetzlichen Umsatzsteuer.</p>
              <p>(2) Die Abrechnung erfolgt im Voraus über den Zahlungsdienstleister Stripe. Der Kunde ermächtigt den Anbieter, die anfallenden Gebühren über das bei Stripe hinterlegte Zahlungsmittel einzuziehen.</p>
              <p>(3) Bei Zahlung mittels SEPA-Basislastschrift oder SEPA-Firmenlastschrift ermächtigt der Kunde den Anbieter durch Erteilung eines entsprechenden SEPA-Mandats, fällige Zahlungen vom Konto des Kunden einzuziehen. Die Frist für die Vorankündigung (Pre-Notification) des Einzugsdatums und des Einzugsbetrages wird auf <strong>1 Tag</strong> verkürzt.</p>
              <p>(4) Schlägt ein Einzugsversuch fehl, wird der Kunde elektronisch gemahnt. Dem Kunden wird eine Frist von 7 Tagen zur Begleichung der offenen Forderung eingeräumt.</p>
              <p>(5) Befindet sich der Kunde nach Ablauf dieser Frist weiterhin im Zahlungsverzug, ist der Anbieter berechtigt, die Website des Kunden temporär abzuschalten (Sperrung). Die Zahlungspflicht bleibt hiervon unberührt.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 6</span>
              Abnahme (Automatische Abnahme)
            </h2>
            <div className="space-y-3">
              <p>(1) Nach Fertigstellung und Bereitstellung der Website wird der Anbieter den Kunden zur Abnahme auffordern.</p>
              <p>(2) Die Website gilt als erfolgreich abgenommen, wenn der Kunde nicht innerhalb von <strong>14 Tagen</strong> nach Bereitstellung schriftlich oder per E-Mail konkrete, erhebliche Mängel rügt. Unwesentliche Mängel berechtigen den Kunden nicht, die Abnahme zu verweigern.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 7</span>
              Urheberrechte und Buyout-Option
            </h2>
            <div className="space-y-3">
              <p>(1) Alle Rechte an den vom Anbieter erstellten Designs, dem Quellcode und Strukturen verbleiben beim Anbieter. Dem Kunden wird für die Dauer des Vertrages ein einfaches Nutzungsrecht eingeräumt.</p>
              <p>(2) Nach ordnungsgemäßer Beendigung des Vertrages gilt Folgendes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Eingebrachte Inhalte (Texte, eigene Bilder, Logos) sowie die Domain können vom Kunden mitgenommen werden.</li>
                <li>Der Quellcode und das spezifische Design verbleiben beim Anbieter.</li>
                <li><strong>Buyout-Option:</strong> Möchte der Kunde das Design und den Quellcode nach Vertragsbeendigung übernehmen, vereinbaren die Parteien eine einmalige Ablösesumme in Höhe von <strong>6 Netto-Monatsmieten</strong>.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 8</span>
              Preisanpassungsklausel
            </h2>
            <p>(1) Der Anbieter ist berechtigt, die monatlichen Gebühren bei Verträgen mit einer Laufzeit von mehr als 12 Monaten anzupassen, wenn nachweisbare Kostensteigerungen für die technische Infrastruktur (z. B. Preiserhöhungen durch Hostinger, Stripe oder AI-APIs) eintreten.</p>
            <p>(2) Eine Preiserhöhung darf maximal 10% pro Kalenderjahr betragen und muss 4 Wochen vorher angekündigt werden.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 9</span>
              Rechtliche Inhalte und Freistellung
            </h2>
            <p>(1) Der Kunde trägt die alleinige Verantwortung für die rechtliche Zulässigkeit der von ihm bereitgestellten Inhalte sowie für die Einhaltung der gesetzlichen Pflichten auf der fertigen Website.</p>
            <p>(2) Der Kunde stellt den Anbieter von allen Ansprüchen Dritter vollumfänglich frei, die auf rechtswidrigen Inhalten des Kunden oder einer Verletzung von Rechten Dritter beruhen.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 10</span>
              Haftung und Verfügbarkeit (SLA)
            </h2>
            <p>(1) Der Anbieter strebt eine Erreichbarkeit der gehosteten Websites von 99% im Jahresmittel an.</p>
            <p>(2) Der Anbieter haftet bei leichter Fahrlässigkeit nur bei Verletzung vertragswesentlicher Pflichten (Kardinalpflichten).</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 11</span>
              Schlussbestimmungen
            </h2>
            <p>(1) Es gilt das Recht der Bundesrepublik Deutschland.</p>
            <p>(2) Gerichtsstand für Kaufleute ist das <strong>Amtsgericht Landshut</strong>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
