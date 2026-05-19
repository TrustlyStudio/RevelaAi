import { Metadata } from 'next';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Auftragsverarbeitungsvertrag (AVV)',
  description: 'Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO von VANICY.',
  keywords: ['AVV', 'Auftragsverarbeitung', 'Datenschutz', 'DSGVO', 'Vanicy AVV', 'B2B AVV'],
  openGraph: {
    title: 'AVV | Vanicy',
    description: 'Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO von VANICY.',
    url: 'https://vanicy.de/avv',
  },
  alternates: {
    canonical: 'https://vanicy.de/avv',
  },
};

export default function AVV() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900 leading-relaxed">
      <Header />
      <main className="flex-grow pt-32 pb-20 max-w-4xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600 uppercase tracking-tight">
          Auftragsverarbeitungsvertrag (AVV)
        </h1>
        <p className="text-slate-600 font-medium mb-2">gemäß Art. 28 DSGVO</p>
        <p className="text-slate-500 font-medium mb-10">Stand: 19. Mai 2026</p>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 mb-10">
          <p className="font-bold text-slate-900 mb-4">zwischen</p>
          <p className="mb-2"><strong>Gurev & Schwabauer GbR, handelnd als VANICY</strong></p>
          <p className="mb-1">Rennweg 57, 84034 Landshut</p>
          <p className="mb-6 text-sm text-slate-500">(nachfolgend: Auftragnehmer)</p>

          <p className="font-bold text-slate-900 mb-4">und</p>
          <p className="mb-1"><strong>dem jeweiligen Kunden gemäß Leistungsvertrag</strong></p>
          <p className="text-sm text-slate-500">(nachfolgend: Auftraggeber)</p>
        </div>
        
        <div className="space-y-10 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 1</span>
              Gegenstand und Dauer
            </h2>
            <div className="space-y-3">
              <p>(1) Der Auftragnehmer erbringt für den Auftraggeber Leistungen im Bereich WebLeasing (Erstellung, Betrieb und Pflege von Websites) gemäß dem zwischen den Parteien geschlossenen Leistungsvertrag (nachfolgend: „Hauptvertrag“).</p>
              <p>(2) Im Rahmen dieser Leistungserbringung verarbeitet der Auftragnehmer personenbezogene Daten im Auftrag und nach Weisung des Auftraggebers. Dieser AVV regelt die Rechte und Pflichten der Parteien im Hinblick auf diese Auftragsverarbeitung.</p>
              <p>(3) Dieser AVV gilt für die Dauer des Hauptvertrags.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 2</span>
              Art und Zweck der Datenverarbeitung
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-100 p-4 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-2">Art der Daten:</h3>
                <p>Name, E-Mail-Adresse, Telefonnummer, Nachrichteninhalte sowie IP-Adressen der Websitebesucher des Auftraggebers; ggf. weitere vom Auftraggeber angegebene Datenfelder in Kontaktformularen.</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-2">Kategorien betroffener Personen:</h3>
                <p>Websitebesucher und Kontaktanfragesteller des Auftraggebers; potenzielle und bestehende Kunden des Auftraggebers.</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-2">Zweck der Verarbeitung:</h3>
                <p>Bereitstellung, Betrieb und technische Pflege der Website des Auftraggebers; Entgegennahme und Weiterleitung von Kontaktanfragen über eingebundene Formulare; technische Protokollierung (Serverlogfiles) zur Sicherstellung des ordnungsgemäßen Betriebs.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 3</span>
              Weisungsrecht des Auftraggebers
            </h2>
            <div className="space-y-3">
              <p>(1) Der Auftragnehmer verarbeitet personenbezogene Daten ausschließlich im Rahmen der Weisungen des Auftraggebers. Der Hauptvertrag samt Leistungsbeschreibung gilt als initiale Weisung.</p>
              <p>(2) Weisungen werden grundsätzlich schriftlich (E-Mail genügt) erteilt. Mündliche Weisungen sind unverzüglich schriftlich zu bestätigen.</p>
              <p>(3) Ist der Auftragnehmer der Auffassung, dass eine Weisung gegen die DSGVO oder andere Datenschutzvorschriften verstößt, hat er den Auftraggeber unverzüglich zu informieren.</p>
            </div>
          </section>

          <section className="bg-white p-6 rounded-2xl border-l-4 border-rose-500 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 4</span>
              Technische und organisatorische Maßnahmen (TOMs)
            </h2>
            <div className="space-y-3">
              <p>Der Auftragnehmer trifft geeignete technische und organisatorische Maßnahmen zum Schutz der personenbezogenen Daten gemäß Art. 32 DSGVO. Dies umfasst insbesondere:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Verschlüsselte Datenübertragung (TLS/HTTPS) für alle Verbindungen</li>
                <li>Zugangsbeschränkungen und rollenbasierte Berechtigungen</li>
                <li>Regelmäßige Sicherheitsupdates der eingesetzten Systeme</li>
                <li>Einsatz geprüfter und vertraglich gebundener Unterauftragnehmer</li>
                <li>Hosting auf Servern innerhalb der EU</li>
              </ul>
              <p className="mt-4 text-sm text-slate-500">Der aktuelle Stand der TOMs ist auf Anfrage beim Auftragnehmer erhältlich.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 5</span>
              Unterauftragnehmer
            </h2>
            <div className="space-y-4">
              <p>(1) Der Auftragnehmer ist berechtigt, für die Leistungserbringung folgende Unterauftragnehmer einzusetzen:</p>
              
              <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-sm text-left text-slate-700">
                  <thead className="text-xs text-slate-900 uppercase bg-slate-100 border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3">Unterauftragnehmer</th>
                      <th className="px-4 py-3">Zweck</th>
                      <th className="px-4 py-3">Sitz</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-4 py-3 font-semibold">HOSTINGER operations, UAB / Hostinger International Ltd.</td>
                      <td className="px-4 py-3">Webhosting der Kundenwebsite</td>
                      <td className="px-4 py-3">Litauen / Zypern (EU)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Formspree, Inc.</td>
                      <td className="px-4 py-3">Kontaktformular-Weiterleitung</td>
                      <td className="px-4 py-3">USA (EU-US DPF)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Neon, Inc.</td>
                      <td className="px-4 py-3">Datenbankhosting</td>
                      <td className="px-4 py-3">USA (Daten in Frankfurt/EU)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>(2) Der Auftragnehmer informiert den Auftraggeber über beabsichtigte Änderungen in Bezug auf neue oder den Austausch von Unterauftragnehmern. Der Auftraggeber hat das Recht, berechtigte Einwände gegen die Änderung zu erheben.</p>
              <p>(3) Der Auftragnehmer stellt vertraglich sicher, dass die Unterauftragnehmer gleichwertige Datenschutzverpflichtungen einhalten.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 6</span>
              Pflichten des Auftragnehmers
            </h2>
            <div className="space-y-3">
              <p>Der Auftragnehmer verpflichtet sich insbesondere:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Personenbezogene Daten ausschließlich auf Weisung des Auftraggebers zu verarbeiten.</li>
                <li>Die mit der Verarbeitung befassten Personen zur Vertraulichkeit zu verpflichten.</li>
                <li>Den Auftraggeber unverzüglich zu informieren, wenn ihm eine Weisung als rechtswidrig erscheint.</li>
                <li>Alle erforderlichen Informationen zur Verfügung zu stellen, um die Einhaltung der Pflichten aus Art. 28 DSGVO nachzuweisen.</li>
                <li>Überprüfungen, die vom Auftraggeber oder von diesem beauftragten Prüfern durchgeführt werden, zu ermöglichen und dazu beizutragen (mit angemessener Vorankündigung von mindestens 14 Tagen).</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 7</span>
              Verletzung des Schutzes personenbezogener Daten
            </h2>
            <p>Der Auftragnehmer unterrichtet den Auftraggeber unverzüglich (ohne schuldhaftes Zögern, spätestens innerhalb von 48 Stunden nach Bekanntwerden) über Verletzungen des Schutzes personenbezogener Daten (Datenpannen), um dem Auftraggeber die Erfüllung seiner Meldepflichten nach Art. 33, 34 DSGVO zu ermöglichen. Die Meldung erfolgt per E-Mail an die im Hauptvertrag angegebene Adresse des Auftraggebers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 8</span>
              Rechte der betroffenen Personen
            </h2>
            <p>Soweit betroffene Personen ihre Rechte nach der DSGVO (Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch) gegenüber dem Auftragnehmer geltend machen, leitet dieser die Anfrage unverzüglich an den Auftraggeber weiter, da dieser der datenschutzrechtlich Verantwortliche ist.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 9</span>
              Löschung und Rückgabe
            </h2>
            <div className="space-y-3">
              <p>(1) Nach Beendigung des Hauptvertrags löscht der Auftragnehmer alle personenbezogenen Daten, die im Rahmen dieses AVV verarbeitet wurden, oder gibt sie — auf Wunsch des Auftraggebers — zurück, sofern nicht gesetzliche Aufbewahrungspflichten einer Löschung entgegenstehen.</p>
              <p>(2) Die Löschung wird auf Anfrage schriftlich bestätigt.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 10</span>
              Haftung
            </h2>
            <p>Die Haftung der Parteien richtet sich nach den Bestimmungen des Hauptvertrags sowie den gesetzlichen Regelungen der DSGVO. Jede Partei haftet für Verstöße gegen diesen AVV, die ihr zurechenbar sind.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 11</span>
              Inkrafttreten
            </h2>
            <p>Dieser AVV tritt durch Akzeptanz der Allgemeinen Geschäftsbedingungen von VANICY (vanicy.de/agb) in Kraft und ist integraler Bestandteil des Hauptvertrags.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
