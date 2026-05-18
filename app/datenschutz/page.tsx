import { Metadata } from 'next';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Vanicy Webseitenleasing. Informationen zu DSGVO, Cookies, Auftragsverarbeitung und Datensicherheit.',
  keywords: ['Datenschutz', 'Datenschutzerklärung', 'Privacy Policy', 'DSGVO', 'Vanicy Datenschutz', 'B2B Webseitenleasing Datenschutz'],
  openGraph: {
    title: 'Datenschutzerklärung | Vanicy',
    description: 'Datenschutzerklärung von Vanicy Webseitenleasing. Informationen zu DSGVO, Cookies, Auftragsverarbeitung und Datensicherheit.',
    url: 'https://vanicy.de/datenschutz',
  },
  alternates: {
    canonical: 'https://vanicy.de/datenschutz',
  },
};

export default function Datenschutz() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900 leading-relaxed">
      <Header />
      <main className="flex-grow pt-32 pb-20 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">Datenschutzerklärung</h1>
        
        <div className="space-y-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Name und Anschrift des Verantwortlichen</h2>
            <p className="mb-4">
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze der Mitgliedstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
            </p>
            <p className="font-bold text-slate-900">
              Gurev & Schwabauer GbR<br />
              Rennweg 57<br />
              84034 Landshut<br />
              Deutschland
            </p>
            <p className="mt-4">
              <strong>Vertreten durch die Gesellschafter:</strong><br />
              Nicole Schwabauer & Vasilii Gurev
            </p>
            <p className="mt-4">
              <strong>Kontakt:</strong><br />
              E-Mail: <a href="mailto:hello@vanicy.de" className="text-rose-600 hover:underline">hello@vanicy.de</a><br />
              Support-E-Mail: <a href="mailto:support@vanicy.de" className="text-rose-600 hover:underline">support@vanicy.de</a><br />
              Telefon / WhatsApp Business: 015567 424365
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Allgemeine Hinweise zur Datenverarbeitung</h2>
            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten werden vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung behandelt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Erhebung und Verarbeitung personenbezogener Daten</h2>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">a) Beim Besuch der Website</h3>
            <p className="mb-4">
              Beim Aufruf unserer Website erheben wir automatisch folgende Protokolldaten:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>aufgerufene Seite/Datei</li>
              <li>User-Agent (Browsertyp und Browserversion sowie verwendetes Betriebssystem)</li>
              <li>Referrer URL</li>
            </ul>
            <p className="mb-4">
              Diese Daten dienen der Sicherstellung eines störungsfreien Betriebs und werden nicht zur Identifizierung von Personen verwendet. Die Protokolldaten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind – im Falle der Erfassung von Daten zur Bereitstellung der Website ist dies der Fall, wenn die jeweilige Sitzung beendet ist. Im Falle der Speicherung der Daten in Logfiles werden diese nach spätestens 30 Tagen gelöscht. Eine darüber hinausgehende Speicherung ist möglich; in diesem Fall werden die IP-Adressen der Nutzer jedoch gelöscht oder verfremdet, sodass eine Zuordnung des aufrufenden Clients nicht mehr möglich ist.
            </p>
            <p>
              <strong>Rechtsgrundlage:</strong> Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Stabilität und Sicherheit der Website).
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3 text-rose-500">b) Kontaktaufnahme</h3>
            <p className="mb-4">
              Wenn Sie uns kontaktieren, z. B. per E-Mail, Telefon oder durch Teilnahme Ihrerseits an einem Meet von uns, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zum Zwecke der Bearbeitung Ihrer Anfrage gespeichert. 
            </p>
            <p className="mb-4">
              <strong>Rechtsgrundlage & Löschung:</strong> Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertrag oder vorvertragliche Maßnahmen) und gelöscht, sobald die Notwendigkeit zur Verarbeitung der Daten entfallen ist, z. B. da innerhalb von 3 Monaten kein Vertragsverhältnis zustande gekommen ist.
            </p>
            <p>
              <strong>Hinweis zu Drittanbietern:</strong> Sollten Sie uns über einen dritten Dienst kontaktieren, z. B. über WhatsApp, LinkedIn, etc., verarbeitet dieser ebenso Ihre Daten, worüber dieser Dienst in seinen Datenschutzinformationen informiert. Wir haben auf diese Verarbeitungen des Dienstes keinen Einfluss und nutzen die von Ihnen erhaltenen Daten ausschließlich zur Kommunikation.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3 text-rose-500">Empfänger von Daten</h3>
            <p>
              Für den Betrieb und die Pflege unserer Website sowie E-Mail bedienen wir uns technischer Dienstleister (Hoster), die als unsere Auftragsverarbeiter handeln. Alle Dienstleister sind vertraglich verpflichtet, Ihre Daten vertraulich zu behandeln.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Ihre Rechte</h2>
            <p className="mb-4">Sie haben jederzeit das Recht:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>gemäß Art. 15 DSGVO Auskunft über Ihre gespeicherten Daten zu erhalten,</li>
              <li>gemäß Art. 16 DSGVO Berichtigung unrichtiger Daten zu verlangen,</li>
              <li>gemäß Art. 17 DSGVO die Löschung Ihrer Daten zu verlangen,</li>
              <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung zu verlangen,</li>
              <li>gemäß Art. 20 DSGVO Datenübertragbarkeit zu verlangen,</li>
              <li>gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung einzulegen,</li>
              <li>sich gemäß Art. 77 DSGVO bei der zuständigen Aufsichtsbehörde, dem Bayerischen Landesamt für Datenschutzaufsicht, oder der in Ihrem jeweiligen Aufenthaltsland zuständigen Aufsichtsbehörde, zu beschweren.</li>
            </ul>
            <p>
              Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte unter <a href="mailto:support@vanicy.de" className="text-rose-600 hover:underline">support@vanicy.de</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
