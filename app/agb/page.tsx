import { Metadata } from 'next';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  title: 'Allgemeine Geschäftsbedingungen (AGB)',
  description: 'Allgemeine Geschäftsbedingungen (AGB) von VANICY (Gurev & Schwabauer GbR).',
  keywords: ['AGB', 'Geschäftsbedingungen', 'Rechtliches', 'Vanicy AGB', 'Webseitenleasing Konditionen'],
  openGraph: {
    title: 'AGB | Vanicy',
    description: 'Allgemeine Geschäftsbedingungen (AGB) von VANICY (Gurev & Schwabauer GbR).',
    url: 'https://vanicy.de/agb',
  },
  alternates: {
    canonical: 'https://vanicy.de/agb',
  },
};

export default function AGB() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900 leading-relaxed overflow-x-hidden break-words">
      <Header />
      <main className="flex-grow w-full pt-24 md:pt-32 pb-16 md:pb-20 max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600 uppercase tracking-tight">Allgemeine Geschäfts&shy;bedingungen (AGB)</h1>
        <p className="text-slate-500 font-medium mb-8">Stand: 19. Mai 2026</p>
        
        <div className="space-y-8 md:space-y-10 text-slate-700">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 1</span>
              Vertragspartner und Geltungsbereich
            </h2>
            <div className="space-y-3">
              <p>(1) Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der <strong>Gurev & Schwabauer GbR – handelnd unter dem Namen VANICY – Rennweg 57, 84034 Landshut</strong> (nachfolgend „VANICY“) und dem Auftraggeber über die Nutzung der WebLeasing-Dienste.</p>
              <p>(2) Diese AGB gelten ausschließlich im geschäftlichen Verkehr (B2B). Vertragspartner sind ausschließlich Unternehmer im Sinne des § 14 BGB. Ein Vertragsschluss mit Verbrauchern im Sinne des § 13 BGB ist ausgeschlossen.</p>
              <p>(3) Entgegenstehende oder abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, VANICY stimmt ihrer Geltung ausdrücklich schriftlich zu.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 2</span>
              Vertragsgegenstand – das WebLeasing-Modell
            </h2>
            <div className="space-y-3">
              <p>(1) VANICY bietet ein Leasing-Modell für professionelle Websites an. Im Rahmen dieses Modells erstellt VANICY eine individuelle Website für den Auftraggeber, stellt diese für die Dauer des Vertrages gegen monatliche Vergütung bereit und betreibt sie.</p>
              <p>(2) Das WebLeasing umfasst je nach gewähltem Paket: Konzeption, Webdesign und Entwicklung, Hosting auf EU-Servern, SSL-Zertifikat, Content Delivery Network (CDN), SEO-Grundeinrichtung, monatliche Inhaltsänderungen sowie Support. Die genauen Leistungen richten sich nach der zum Zeitpunkt des Vertragsschlusses geltenden Leistungsbeschreibung auf vanicy.de/preise.</p>
              <p>(3) Das WebLeasing ist kein Werkvertrag zur dauerhaften Eigentumsübertragung einer Website. Die erstellte Website verbleibt im Eigentum von VANICY und wird dem Auftraggeber zur ausschließlichen Nutzung für die Dauer des Vertrages überlassen.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 3</span>
              Vertragsschluss
            </h2>
            <div className="space-y-3">
              <p>(1) Der Vertrag kommt durch die Registrierung im VANICY-Kundenportal, die Auswahl eines Pakets sowie die ausdrückliche Bestätigung dieser AGB durch Setzen eines Häkchens oder durch Unterzeichnung eines individuellen Angebots zustande.</p>
              <p>(2) VANICY behält sich vor, einen Vertragsabschluss ohne Angabe von Gründen abzulehnen.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 4</span>
              Testphase
            </h2>
            <div className="space-y-3">
              <p>(1) VANICY kann dem Auftraggeber nach Maßgabe des gewählten Pakets eine kostenlose Testphase von bis zu 30 Tagen gewähren.</p>
              <p>(2) Die Testphase endet automatisch, und der Vertrag geht in ein kostenpflichtiges Abonnement über, sofern der Auftraggeber nicht vorher kündigt. Eine Kündigung während der Testphase bewirkt die sofortige Beendigung ohne weitere Kosten.</p>
              <p>(3) Ein Rechtsanspruch auf eine Testphase besteht nicht.</p>
            </div>
          </section>

          <section className="bg-white p-6 rounded-2xl border-l-4 border-rose-500 shadow-sm">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 5</span>
              Onboarding-Phase und Abnahme
            </h2>
            <div className="space-y-3">
              <p>(1) Die Erstellung der Website erfordert die aktive Mitwirkung des Auftraggebers im Rahmen der Onboarding-Phase. Der Auftraggeber ist verpflichtet, VANICY alle für die Erstellung der Website erforderlichen Inhalte (z. B. Texte, Logos, Bilder, Zugangsdaten) rechtzeitig in digitaler Form zur Verfügung zu stellen.</p>
              <p>(2) Die Pflicht zur Zahlung des vereinbarten Preises beginnt mit dem Zustandekommen des Vertrages bzw. nach Ablauf einer vereinbarten Testphase. Verzögert sich die Fertigstellung, weil der Auftraggeber Materialien, Zuarbeiten oder Freigaben nicht liefert, bleibt die Zahlungspflicht unberührt.</p>
              <p>(3) Nach der Erstellung der Website wird der Auftraggeber zur Abnahme aufgefordert. Die Website gilt als erfolgreich abgenommen, wenn der Auftraggeber nicht innerhalb von <strong>14 Tagen</strong> nach Bereitstellung schriftlich oder per E-Mail konkrete, erhebliche Mängel rügt. Unwesentliche Mängel berechtigen nicht zur Verweigerung der Abnahme.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 6</span>
              Vergütung, Zahlung und SEPA
            </h2>
            <div className="space-y-3">
              <p>(1) Alle Preise verstehen sich als Nettopreise zzgl. der jeweils geltenden gesetzlichen Umsatzsteuer.</p>
              <p>(2) Die Abrechnung erfolgt monatlich im Voraus über den Zahlungsdienstleister Stripe. Die erste Zahlung wird bei Vertragsschluss bzw. nach Ablauf einer Testphase fällig.</p>
              <p>(3) Bei Zahlung mittels SEPA-Lastschrift ermächtigt der Auftraggeber VANICY, fällige Zahlungen einzuziehen. Die Frist für die Vorankündigung (Pre-Notification) des Einzugsdatums wird auf <strong>1 Tag</strong> verkürzt. Kosten für vom Auftraggeber zu vertretende Rücklastschriften trägt der Auftraggeber.</p>
              <p>(4) Bei Zahlungsverzug ist VANICY berechtigt, die Leistungen (inklusive der Website) bis zur vollständigen Zahlung zu unterbrechen sowie Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz zu verlangen. Befindet sich der Auftraggeber nach einer 7-Tages-Frist weiterhin im Zahlungsverzug, kann die Website temporär gesperrt werden.</p>
              <p>(5) Preisänderungen / Erhöhungen basierend auf gestiegenen Infrastrukturkosten (max. 10% pro Jahr) werden dem Auftraggeber mindestens 6 Wochen vor Inkrafttreten per E-Mail angekündigt. Widerspricht der Auftraggeber nicht innerhalb von 2 Wochen, gilt die Änderung als akzeptiert.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 7</span>
              Laufzeit und Kündigung
            </h2>
            <div className="space-y-3">
              <p>(1) Der Vertrag wird für die bei Vertragsschluss vereinbarte Mindestlaufzeit (12 oder 24 Monate) geschlossen.</p>
              <div className="bg-slate-100 p-4 rounded-lg font-semibold text-slate-900 border-l-4 border-slate-400">
                ⚠️ WICHTIGER HINWEIS: AUTOMATISCHE VERTRAGSVERLÄNGERUNG<br/><br/>
                Der Vertrag verlängert sich nach Ablauf der Mindestlaufzeit automatisch um jeweils 12 weitere Monate, sofern er nicht rechtzeitig gekündigt wird.
              </div>
              <p>(2) Die Kündigungsfrist beträgt:<br/>
                - Bei einer Mindestlaufzeit von 12 Monaten: 1 Monat vor Ablauf der Laufzeit<br/>
                - Bei einer Mindestlaufzeit von 24 Monaten: 3 Monate vor Ablauf der Laufzeit
              </p>
              <p>(3) Kündigungen sind im Kundenportal (dashboard.vanicy.de) oder per E-Mail an support@vanicy.de möglich.</p>
              <p>(4) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund liegt insbesondere vor, wenn der Auftraggeber mit mehr als zwei Monatsbeiträgen in Verzug ist.</p>
              <p>(5) Nach Vertragsende wird die Website deaktiviert. Die Inhalte werden nach einer Übergangsfrist von 30 Tagen gelöscht.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 8</span>
              Leistungsänderungen und Upgrades
            </h2>
            <div className="space-y-3">
              <p>(1) VANICY ist berechtigt, Leistungen technisch weiterzuentwickeln und anzupassen, solange die vereinbarte Grundleistung nicht wesentlich beeinträchtigt wird.</p>
              <p>(2) Der Auftraggeber kann jederzeit ein Upgrade auf ein höherwertiges Paket vornehmen. Ein Downgrade auf ein niedrigerwertiges Paket ist zum Ende der Mindestlaufzeit möglich.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 9</span>
              Nutzungsrechte, Eigentum und Buyout-Option
            </h2>
            <div className="space-y-3">
              <p>(1) VANICY räumt dem Auftraggeber für die Dauer des Vertrages ein einfaches, nicht übertragbares Nutzungsrecht an der erstellten Website ein.</p>
              <p>(2) Das Eigentum am Quellcode, technischen Aufbau und Design verbleibt bei VANICY. Von Auftraggeber bereitgestellte Inhalte (Texte, Bilder, Logos) verbleiben in seinem Eigentum und können nach Vertragsende per Export bereitgestellt werden.</p>
              <p>(3) <strong>Buyout-Option:</strong> Der Auftraggeber kann einen Buyout beantragen, um das Design und den Quellcode nach Vertragsbeendigung zu übernehmen. Ein Rechtsanspruch auf Gewährung des Buyouts besteht jedoch nicht. Ein Buyout ist grundsätzlich erst ab einer absolvierten Vertragslaufzeit von einem Jahr möglich. Im Falle einer Einigung beträgt die einmalige Ablösesumme das <strong>12-fache der monatlichen Netto-Miete</strong> des jeweils gewählten Pakets.</p>
              <p>(4) VANICY ist berechtigt, die realisierte Website als Referenz zu verwenden, sofern der Auftraggeber nicht ausdrücklich widerspricht.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 10</span>
              Verantwortlichkeit für Inhalte und Freistellung
            </h2>
            <div className="space-y-3">
              <p>(1) Der Auftraggeber ist verantwortlich dafür, dass die von ihm bereitgestellten Inhalte keine Rechte Dritter verletzen. Er stellt VANICY von sämtlichen Ansprüchen Dritter frei, die aus einer solchen Rechtsverletzung entstehen.</p>
              <p>(2) Der Auftraggeber ist für die Rechtmäßigkeit seines Webauftritts selbst verantwortlich, insbesondere hinsichtlich Impressum und Datenschutzerklärung, sofern hierfür keine ausdrücklichen Leistungen von VANICY vereinbart wurden.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 11</span>
              Verfügbarkeit und Support
            </h2>
            <div className="space-y-3">
              <p>(1) VANICY strebt eine Verfügbarkeit der gehosteten Websites von 99% im Jahresmittel an. Ausgenommen sind geplante Wartungsfenster sowie Ausfälle durch Drittanbieter oder höhere Gewalt.</p>
              <p>(2) Die angestrebten Reaktionszeiten für Support je Paket verhalten sich wie folgt:<br/>
              - Essential: innerhalb von 2 Werktagen<br/>
              - Business: innerhalb von 1 Werktag (Prioritäts-Support)<br/>
              - Pro: innerhalb von 1 Werktag + telefonischer Support</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 12</span>
              Datenschutz
            </h2>
            <div className="space-y-3">
              <p>(1) VANICY verarbeitet personenbezogene Daten ausschließlich zur Vertragserfüllung und gemäß DSGVO/BDSG.</p>
              <p>(2) Soweit VANICY Daten von Endnutzern der Website des Auftraggebers verarbeitet, schließen die Parteien auf Anfrage einen Auftragsverarbeitungsvertrag (AVV) gem. Art. 28 DSGVO ab.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 13</span>
              Haftung
            </h2>
            <div className="space-y-3">
              <p>(1) VANICY haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für vorsätzlich oder grob fahrlässig verursachte Schäden.</p>
              <p>(2) Bei leichter Fahrlässigkeit haftet VANICY nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) und auf den typischerweise vorhersehbaren Schaden begrenzt. Die Haftung ist je Schadensfall auf den 12-fachen Monatsbeitrag des betroffenen Vertrages begrenzt.</p>
              <p>(3) Eine weitergehende Haftung (Mittelbare Schäden, Folgeschäden, entgangener Gewinn) ist ausgeschlossen.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 14</span>
              Auftragsverarbeitung
            </h2>
            <div className="space-y-3">
              <p>Soweit VANICY im Rahmen der Leistungserbringung personenbezogene Daten von Websitebesuchern des Auftraggebers verarbeitet, erfolgt dies auf Grundlage eines Auftragsverarbeitungsvertrags (AVV) gemäß Art. 28 DSGVO. Der AVV ist unter vanicy.de/avv abrufbar und wird durch Akzeptanz dieser AGB als vereinbart angesehen.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-100 text-rose-600 text-sm font-bold">§ 15</span>
              Schlussbestimmungen
            </h2>
            <div className="space-y-3">
              <p>(1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.</p>
              <p>(2) Ausschließlicher Gerichtsstand ist das Amtsgericht Landshut / Landgericht Landshut.</p>
              <p>(3) Sollten einzelne Bestimmungen unwirksam sein, berührt dies die Wirksamkeit der übrigen Bestimmungen nicht.</p>
              <p>(4) Änderungen oder Ergänzungen dieses Vertrages bedürfen der Textform (E-Mail genügt).</p>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
