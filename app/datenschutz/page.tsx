import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von VANICY Webseitenleasing. Informationen zu DSGVO, Cookies, Auftragsverarbeitung und Datensicherheit.",
  keywords: [
    "Datenschutz",
    "Datenschutzerklärung",
    "Privacy Policy",
    "DSGVO",
    "VANICY Datenschutz",
    "B2B Webseitenleasing Datenschutz",
  ],
  openGraph: {
    title: "Datenschutzerklärung | VANICY",
    description:
      "Datenschutzerklärung von VANICY Webseitenleasing. Informationen zu DSGVO, Cookies, Auftragsverarbeitung und Datensicherheit.",
    url: "https://vanicy.de/datenschutz",
  },
  alternates: {
    canonical: "https://vanicy.de/datenschutz",
  },
};

export default function Datenschutz() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900 leading-relaxed overflow-x-hidden break-words">
      <Header />
      <main className="flex-grow w-full pt-24 md:pt-32 pb-16 md:pb-20 max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">
          Datenschutz&shy;erklärung
        </h1>
        <p className="text-slate-500 font-medium mb-10">Stand: 19. Mai 2026</p>

        <div className="space-y-8 md:space-y-10 text-slate-700">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              1. Datenschutz auf einen Blick
            </h2>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Allgemeine Hinweise
            </h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Ausführliche
              Informationen zum Thema Datenschutz entnehmen Sie unserer unter
              diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Datenerfassung auf dieser Website
            </h3>
            <p className="mb-2">
              <strong>
                Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
              </strong>
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
              „Hinweis zur verantwortlichen Stelle“ in dieser
              Datenschutzerklärung entnehmen.
            </p>
            <p className="mb-2">
              <strong>Wie erfassen wir Ihre Daten?</strong>
              <br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
              ein Kontaktformular eingeben. Andere Daten werden automatisch oder
              nach Ihrer Einwilligung beim Besuch der Website durch unsere
              IT-Systeme erfasst. Das sind vor allem technische Daten (z. B.
              Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese
              Website betreten.
            </p>
            <p className="mb-2">
              <strong>Wofür nutzen wir Ihre Daten?</strong>
              <br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gewährleisten. Andere Daten können
              zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über
              die Website Verträge geschlossen oder angebahnt werden können,
              werden die übermittelten Daten auch für Vertragsangebote,
              Bestellungen oder sonstige Auftragsanfragen verarbeitet.
            </p>
            <p className="mb-4">
              <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
              <br />
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie
              eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie
              diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem
              haben Sie das Recht, unter bestimmten Umständen die Einschränkung
              der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
              Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Thema
              Datenschutz können Sie sich jederzeit an uns wenden.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Analyse-Tools und Tools von Drittanbietern
            </h3>
            <p className="mb-4">
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
              ausgewertet werden. Das geschieht vor allem mit sogenannten
              Analyseprogrammen. Detaillierte Informationen zu diesen
              Analyseprogrammen finden Sie in der folgenden
              Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              2. Hosting
            </h2>
            <p className="mb-4">
              Diese Website wird extern gehostet. Die personenbezogenen Daten,
              die auf dieser Website erfasst werden, werden auf den Servern des
              Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
              Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
              Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über
              eine Website generiert werden, handeln.
            </p>
            <p className="mb-4">
              Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung
              gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs.
              1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und
              effizienten Bereitstellung unseres Online-Angebots durch einen
              professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine
              entsprechende Einwilligung abgefragt wurde, erfolgt die
              Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
              DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit
              widerrufbar.
            </p>

            <p className="mb-4">Wir setzen folgenden Hoster ein:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <p className="font-bold text-slate-900">Betrieb & Operation:</p>
                <p>
                  HOSTINGER operations, UAB
                  <br />
                  Švitrigailos str. 34
                  <br />
                  Vilnius 03230, Litauen
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <p className="font-bold text-slate-900">
                  Hauptsitz & Internationaler Support:
                </p>
                <p>
                  Hostinger International, Ltd.
                  <br />
                  61 Lordou Vironos Street
                  <br />
                  6023 Larnaca, Zypern
                </p>
              </div>
            </div>

            <p className="mb-4">
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur
              Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt
              es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag,
              der gewährleistet, dass dieser die personenbezogenen Daten unserer
              Websitebesucher nur nach unseren Weisungen und unter Einhaltung
              der DSGVO verarbeitet.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Datenschutz
            </h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn
              Sie diese Website benutzen, werden verschiedene personenbezogene
              Daten erhoben. Die vorliegende Datenschutzerklärung erläutert,
              welche Daten wir erheben und wofür wir sie nutzen. Wir weisen
              darauf hin, dass die Datenübertragung im Internet
              Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten
              vor dem Zugriff durch Dritte ist nicht möglich.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <div className="mb-4">
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
              </p>
              <p className="font-bold text-slate-900 mt-2">
                Gurev & Schwabauer GbR
                <br />
                handelnd als VANICY
                <br />
                Rennweg 57
                <br />
                84034 Landshut
              </p>
              <p className="mt-2">
                Telefon: 015567 424365
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:support@vanicy.de"
                  className="text-rose-600 hover:underline"
                >
                  support@vanicy.de
                </a>
              </p>
            </div>
            <p className="mb-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person,
              die allein oder gemeinsam mit anderen über die Zwecke und Mittel
              der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Speicherdauer
            </h3>
            <p className="mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere
              Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
              Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
              Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
              gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für
              die Speicherung haben (z. B. steuer- oder handelsrechtliche
              Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung
              nach Fortfall dieser Gründe.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Allgemeine Hinweise zu den Rechtsgrundlagen
            </h3>
            <p className="mb-4">
              Sofern Sie in die Datenverarbeitung eingewilligt haben,
              verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von
              Art. 6 Abs. 1 lit. a DSGVO. Im Falle einer ausdrücklichen
              Einwilligung in die Übertragung personenbezogener Daten in
              Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage
              von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von
              Cookies oder in den Zugriff auf Informationen in Ihr Endgerät
              eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf
              Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit
              widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur
              Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten
              wir Ihre Daten auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Des
              Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung
              einer rechtlichen Verpflichtung erforderlich sind, auf Grundlage
              von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner
              auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1
              lit. f DSGVO erfolgen.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Hinweis zur Datenweitergabe in Drittstaaten
            </h3>
            <p className="mb-4">
              Wir verwenden unter anderem Tools von Unternehmen mit Sitz in
              datenschutzrechtlich nicht sicheren Drittstaaten sowie US-Tools,
              deren Anbieter nicht nach dem EU-US-Data Privacy Framework (DPF)
              zertifiziert sind. Wenn diese Tools aktiv sind, können Ihre
              personenbezogenen Daten in diese Staaten übertragen und dort
              verarbeitet werden. Wir weisen darauf hin, dass in
              datenschutzrechtlich unsicheren Drittstaaten kein mit der EU
              vergleichbares Datenschutzniveau garantiert werden kann. Wir
              weisen darauf hin, dass die USA als sicherer Drittstaat
              grundsätzlich ein mit der EU vergleichbares Datenschutzniveau
              aufweisen, sofern der Empfänger eine Zertifizierung nach dem EU-US
              Data Privacy Framework (DPF) besitzt oder über geeignete
              zusätzliche Garantien (SCCs) verfügt.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Empfänger von personenbezogenen Daten
            </h3>
            <p className="mb-4">
              Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit
              verschiedenen externen Stellen zusammen. Dabei ist teilweise auch
              eine Übermittlung von personenbezogenen Daten an diese externen
              Stellen erforderlich. Wir geben personenbezogene Daten nur dann an
              externe Stellen weiter, wenn dies im Rahmen einer
              Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu
              verpflichtet sind, wenn wir ein berechtigtes Interesse nach Art. 6
              Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine
              sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz
              von Auftragsverarbeitern geben wir personenbezogene Daten unserer
              Kunden nur auf Grundlage eines gültigen Vertrags über
              Auftragsverarbeitung weiter.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p className="mb-4">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
              Einwilligung möglich. Sie können eine bereits erteilte
              Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum
              Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
              unberührt.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500 uppercase text-sm">
              WIDERSPRUCHSRECHT GEGEN DIE DATENERHEBUNG IN BESONDEREN FÄLLEN
              SOWIE GEGEN DIREKTWERBUNG (ART. 21 DSGVO)
            </h3>
            <div className="bg-slate-100 p-4 rounded-lg mb-4 text-xs font-bold uppercase leading-relaxed text-slate-800">
              <p className="mb-4">
                WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT.
                E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS
                GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN
                DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH
                EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN
                GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN
                EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
                DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR
                IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN,
                ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE
                VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND
                FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER
                GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN
                (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
              </p>
              <p>
                WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM
                DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT
                WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER
                PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
                EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT
                SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
                WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND
                NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH
                NACH ART. 21 ABS. 2 DSGVO).
              </p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h3>
            <p className="mb-4">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
              Beschwerderecht bei einer Aufsichtsbehörde zu. Die für uns
              zuständige Aufsichtsbehörde ist:
            </p>
            <p className="font-bold text-slate-900 mb-4">
              Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)
              <br />
              Promenade 18, 91522 Ansbach
              <br />
              Telefon: +49 (0) 981 180093-0
              <br />
              E-Mail:{" "}
              <a
                href="mailto:poststelle@lda.bayern.de"
                className="text-rose-600 hover:underline"
              >
                poststelle@lda.bayern.de
              </a>
              <br />
              <a
                href="https://www.lda.bayern.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://www.lda.bayern.de
              </a>
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Recht auf Datenübertragbarkeit
            </h3>
            <p className="mb-4">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
              Einwilligung oder in Erfüllung eines Vertrags automatisiert
              verarbeiten, an sich oder an einen Dritten in einem gängigen,
              maschinenlesbaren Format aushändigen zu lassen.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Auskunft, Berichtigung und Löschung
            </h3>
            <p className="mb-4">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
              jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung sowie ggf. ein Recht
              auf Berichtigung oder Löschung dieser Daten. Hierzu können Sie
              sich jederzeit an uns wenden.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Recht auf Einschränkung der Verarbeitung
            </h3>
            <p className="mb-4">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen. Hierzu können Sie sich
              jederzeit an uns wenden. Das Recht auf Einschränkung der
              Verarbeitung besteht in folgenden Fällen: wenn Sie die Richtigkeit
              Ihrer gespeicherten Daten bestreiten; wenn die Verarbeitung
              unrechtmäßig geschah; wenn wir die Daten nicht mehr benötigen, Sie
              sie jedoch zur Geltendmachung von Rechtsansprüchen benötigen; wenn
              Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              SSL- bzw. TLS-Verschlüsselung
            </h3>
            <p className="mb-4">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers von „http://“ auf
              „https://“ wechselt und an dem Schloss-Symbol in Ihrer
              Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert
              ist, können die Daten, die Sie an uns übermitteln, nicht von
              Dritten mitgelesen werden.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Widerspruch gegen Werbe-E-Mails
            </h3>
            <p className="mb-4">
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
              Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
              Werbung und Informationsmaterialien wird hiermit widersprochen.
              Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
              Schritte im Falle der unverlangten Zusendung von
              Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              4. Datenerfassung auf dieser Website
            </h2>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Cookies
            </h3>
            <p className="mb-4">
              Unsere Website verwendet Cookies sowie den browsereigenen{" "}
              <strong>localStorage</strong>, um Einwilligungsentscheidungen
              sitzungsübergreifend zu speichern. Cookies sind kleine
              Datenpakete, die auf Ihrem Endgerät gespeichert werden. Cookies
              können von uns (First-Party-Cookies) oder von Drittunternehmen
              stammen (Third-Party-Cookies). Technisch notwendige Cookies werden
              auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Für
              Analytics- und Marketing-Cookies wird Ihre Einwilligung nach Art.
              6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG eingeholt; die
              Einwilligung ist jederzeit widerrufbar (Cookie-Einstellungen im
              Footer der Website).
            </p>

            <div className="overflow-x-auto mb-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm text-left text-slate-700">
                <thead className="text-xs text-slate-900 uppercase bg-slate-100 border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3">Cookie / Storage-Key</th>
                    <th className="px-4 py-3">Anbieter</th>
                    <th className="px-4 py-3">Zweck</th>
                    <th className="px-4 py-3">Kategorie</th>
                    <th className="px-4 py-3">Speicherdauer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">
                      vanicy_cookie_consent
                    </td>
                    <td className="px-4 py-3">Eigener Server</td>
                    <td className="px-4 py-3">
                      Speichert Einwilligungsentscheidung
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded">
                        Notwendig
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs">Persistent</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">
                      vanicy_lead_popup
                    </td>
                    <td className="px-4 py-3">Eigener Server</td>
                    <td className="px-4 py-3">
                      Verhindert wiederholtes Einblenden des Lead-Popups
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded">
                        Notwendig
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs">Persistent</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">
                      next-auth.session-token
                    </td>
                    <td className="px-4 py-3">Eigener Server</td>
                    <td className="px-4 py-3">
                      Authentifizierungssession im Kundenportal
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded">
                        Notwendig
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs">30 Tage</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">
                      next-auth.csrf-token
                    </td>
                    <td className="px-4 py-3">Eigener Server</td>
                    <td className="px-4 py-3">CSRF-Schutz bei Anmeldung</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded">
                        Notwendig
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs">Sitzung</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">_ga</td>
                    <td className="px-4 py-3">Google Analytics</td>
                    <td className="px-4 py-3">
                      Unterscheidet Website-Besucher
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                        Analytics
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs">2 Jahre</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">
                      _ga_[MESS-ID]
                    </td>
                    <td className="px-4 py-3">Google Analytics</td>
                    <td className="px-4 py-3">Session-Status (GA4)</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                        Analytics
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs">2 Jahre</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">_gid</td>
                    <td className="px-4 py-3">Google Analytics</td>
                    <td className="px-4 py-3">
                      Unterscheidet Besucher innerhalb 24 h
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                        Analytics
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs">24 Stunden</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">_gcl_au</td>
                    <td className="px-4 py-3">Google Ads</td>
                    <td className="px-4 py-3">Conversion-Informationen</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                        Marketing
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs">90 Tage</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">_fbp</td>
                    <td className="px-4 py-3">Meta Pixel</td>
                    <td className="px-4 py-3">
                      Browser-Identifikation für Facebook
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                        Marketing
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs">3 Monate</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">_fbc</td>
                    <td className="px-4 py-3">Meta Pixel</td>
                    <td className="px-4 py-3">
                      Click-ID aus Facebook-Anzeigen
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                        Marketing
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs">3 Monate</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">_ttp</td>
                    <td className="px-4 py-3">TikTok Pixel</td>
                    <td className="px-4 py-3">
                      Nutzerverhalten für TikTok Ads
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                        Marketing
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs">13 Monate</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">BizoID</td>
                    <td className="px-4 py-3">LinkedIn Insight Tag</td>
                    <td className="px-4 py-3">
                      Identifiziert LinkedIn-Mitglieder
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                        Marketing
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs">6 Monate</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">li_fat_id</td>
                    <td className="px-4 py-3">LinkedIn Insight Tag</td>
                    <td className="px-4 py-3">
                      Cross-Site-Tracking für LinkedIn Ads
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                        Marketing
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs">30 Tage</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">hubspotutk</td>
                    <td className="px-4 py-3">HubSpot</td>
                    <td className="px-4 py-3">
                      Websitebesucher-Tracking im CRM
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                        Analytics
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs">13 Monate</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">__hstc</td>
                    <td className="px-4 py-3">HubSpot</td>
                    <td className="px-4 py-3">Haupttracking-Cookie</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                        Analytics
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs">13 Monate</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">__hssc</td>
                    <td className="px-4 py-3">HubSpot</td>
                    <td className="px-4 py-3">Session-Tracking</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                        Analytics
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs">30 Minuten</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">__hssrc</td>
                    <td className="px-4 py-3">HubSpot</td>
                    <td className="px-4 py-3">Erkennt neue Browser-Sessions</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                        Analytics
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs">Sitzung</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Server-Log-Dateien
            </h3>
            <p className="mb-4">
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind: Browsertyp und
              -version, verwendetes Betriebssystem, Referrer URL, Hostname des
              zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse. Eine
              Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
              vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Kontaktformular (Formspree)
            </h3>
            <p className="mb-4">
              Auf unserer Website sind Kontaktformulare eingebunden, die über
              den Dienst <strong>Formspree</strong> der Formspree, Inc., 2711
              Centerville Road, Suite 400, Wilmington, DE 19808, USA, betrieben
              werden. Bei Nutzung des Kontaktformulars werden folgende Daten
              verarbeitet: Name, E-Mail-Adresse, Telefonnummer (sofern
              angegeben), Unternehmensname (sofern angegeben), Nachrichteninhalt
              sowie IP-Adresse und Zeitstempel. Formspree übermittelt Ihre
              Formulardaten verschlüsselt an unsere E-Mail-Adresse. Formspree
              ist nach dem EU-U.S. Data Privacy Framework zertifiziert. Wir
              haben mit Formspree einen AVV abgeschlossen. Weitere
              Informationen:{" "}
              <a
                href="https://formspree.io/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://formspree.io/legal/privacy-policy/
              </a>
            </p>
            <p className="mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO sowie
              Art. 6 Abs. 1 lit. b DSGVO.
            </p>
            <p className="mb-4">
              Im Rahmen unserer WebLeasing-Dienstleistung binden wir Formspree
              auch in die von uns betreuten Kundenwebsites ein. In diesem Fall
              ist der jeweilige Auftraggeber datenschutzrechtlich
              Verantwortlicher; wir handeln als Auftragsverarbeiter gem. Art. 28
              DSGVO.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Anfrage per E-Mail oder Telefon
            </h3>
            <p className="mb-4">
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre
              Anfrage inklusive aller daraus hervorgehenden personenbezogenen
              Daten zum Zwecke der Bearbeitung bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
              <br />
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO bzw.
              Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Registrierung und Kundenportal (VANICY Dashboard)
            </h3>
            <p className="mb-4">
              Zur Nutzung unseres Kundenportals ist die Erstellung eines
              Benutzerkontos erforderlich. Dabei werden erhoben: Vor- und
              Nachname, E-Mail-Adresse, Unternehmensname und -adresse,
              Telefonnummer sowie Zeitstempel der Registrierung und der
              AGB-Akzeptanz (Nachweis der Einwilligung gem. Art. 7 Abs. 1
              DSGVO). Nach Registrierung werden außerdem verarbeitet:
              Vertragsdaten (Paket, Laufzeit, Zahlungsstatus),
              Änderungsanfragen, Support-Kommunikation, Projektdaten sowie
              IP-Adresse bei Anmeldung (30 Tage, Sicherheitszwecke).
            </p>
            <p className="mb-4">
              Die Anmeldung erfolgt über <strong>Auth.js (NextAuth)</strong>,
              eine Open-Source-Bibliothek auf unserem eigenen Server.
              Sitzungstoken werden als httpOnly-Cookies gesetzt.
            </p>
            <p className="mb-4">
              Alle Kundendaten werden in einer PostgreSQL-Datenbank der{" "}
              <strong>Neon, Inc.</strong>, 2261 Market Street #4990, San
              Francisco, CA 94114, USA gespeichert. Die Datenspeicherung erfolgt
              ausschließlich auf Servern in der EU (
              <strong>Region: eu-central-1, Frankfurt am Main</strong>). Wir
              haben mit Neon einen AVV gem. Art. 28 DSGVO abgeschlossen.
              Datenschutzerklärung:{" "}
              <a
                href="https://neon.tech/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://neon.tech/privacy-policy
              </a>
            </p>
            <p className="mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
              (Vertragserfüllung). Speicherdauer: Dauer der Vertragsbeziehung
              zuzüglich gesetzlicher Aufbewahrungsfristen (bis 10 Jahre).
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Zahlungsabwicklung (Stripe)
            </h3>
            <p className="mb-4">
              Die Abwicklung von Zahlungen erfolgt über{" "}
              <strong>Stripe Payments Europe, Limited</strong>, 1 Grand Canal
              Street Lower, Grand Canal Dock, Dublin D02 H210, Irland.
              Zahlungsdaten werden ausschließlich von Stripe erfasst und
              verarbeitet — wir selbst speichern zu keinem Zeitpunkt
              vollständige Zahlungsmittelinformationen. Von Stripe erhalten wir
              lediglich: Stripe-Kunden-ID, Subscription-ID, Zahlungsstatus,
              Datum, Betrag und die letzten vier Ziffern der Zahlungsmethode.
              Die Übertragung erfolgt ausschließlich verschlüsselt via
              HTTPS/TLS. Wir haben mit Stripe einen AVV abgeschlossen.
              Datenschutzerklärung:{" "}
              <a
                href="https://stripe.com/de/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://stripe.com/de/privacy
              </a>
            </p>
            <p className="mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              E-Mail-Versand (Resend)
            </h3>
            <p className="mb-4">
              Für den Versand transaktionaler E-Mails (Vertragsbestätigungen,
              Rechnungen, Systembenachrichtigungen, Kündigungsbestätigungen)
              nutzen wir <strong>Resend</strong> der Resend Inc., 2261 Market
              Street #5039, San Francisco, CA 94114, USA. Die Übertragung in die
              USA erfolgt auf Grundlage von Standardvertragsklauseln (SCCs) gem.
              Art. 46 Abs. 2 lit. c DSGVO. Wir haben mit Resend einen AVV
              abgeschlossen. Datenschutzerklärung:{" "}
              <a
                href="https://resend.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://resend.com/legal/privacy-policy
              </a>
            </p>
            <p className="mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              5. Soziale Medien
            </h2>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Instagram
            </h3>
            <p className="mb-4">
              Auf dieser Website sind Funktionen des Dienstes Instagram
              eingebunden. Diese Funktionen werden angeboten durch die Meta
              Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5,
              Irland. Wenn das Social-Media-Element aktiv ist, wird eine direkte
              Verbindung zwischen Ihrem Endgerät und dem Instagram-Server
              hergestellt. Wenn Sie in Ihrem Instagram-Account eingeloggt sind,
              können Sie durch Anklicken des Instagram-Buttons die Inhalte
              dieser Website mit Ihrem Instagram-Profil verlinken.
            </p>
            <p className="mb-4">
              Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer
              Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
              TDDDG. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mb-4">
              Soweit mit Hilfe des hier beschriebenen Tools personenbezogene
              Daten auf unserer Website erfasst und an Facebook bzw. Instagram
              weitergeleitet werden, sind wir und die Meta Platforms Ireland
              Limited gemeinsam für diese Datenverarbeitung verantwortlich (Art.
              26 DSGVO). Die gemeinsame Verantwortlichkeit beschränkt sich dabei
              ausschließlich auf die Erfassung der Daten und deren Weitergabe an
              Facebook bzw. Instagram. Den Wortlaut der Vereinbarung finden Sie
              unter:{" "}
              <a
                href="https://www.facebook.com/legal/controller_addendum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://www.facebook.com/legal/controller_addendum
              </a>
            </p>
            <p className="mb-4">
              Die Datenübertragung in die USA wird auf die
              Standardvertragsklauseln der EU-Kommission gestützt. Details:{" "}
              <a
                href="https://www.facebook.com/legal/EU_data_transfer_addendum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://www.facebook.com/legal/EU_data_transfer_addendum
              </a>{" "}
              und{" "}
              <a
                href="https://privacycenter.instagram.com/policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://privacycenter.instagram.com/policy/
              </a>
            </p>
            <p className="mb-4">
              Das Unternehmen verfügt über eine Zertifizierung nach dem EU-US
              Data Privacy Framework (DPF):{" "}
              <a
                href="https://www.dataprivacyframework.gov/participant/4452"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://www.dataprivacyframework.gov/participant/4452
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              6. Analyse-Tools
            </h2>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Google Tag Manager
            </h3>
            <p className="mb-4">
              Diese Website verwendet den <strong>Google Tag Manager</strong>{" "}
              der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
              Irland. Der Google Tag Manager ist ein Verwaltungstool zur
              Einbindung von Tracking- und Statistik-Tools auf unserer Website.
              Der Tag Manager selbst erstellt keine Nutzerprofile und speichert
              keine Cookies, erfasst jedoch Ihre IP-Adresse. Für alle über den
              Tag Manager geladenen Drittdienste gilt die im jeweiligen
              Abschnitt genannte Einwilligungsgrundlage. Google ist nach dem
              EU-US DPF zertifiziert. Weitere Informationen:{" "}
              <a
                href="https://marketingplatform.google.com/about/analytics/tag-manager/use-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://marketingplatform.google.com/about/analytics/tag-manager/use-policy/
              </a>
            </p>
            <p className="mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO; für
              einwilligungspflichtige Tools: Art. 6 Abs. 1 lit. a DSGVO; § 25
              Abs. 1 TDDDG.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Google Analytics 4
            </h3>
            <p className="mb-4">
              Diese Website nutzt <strong>Google Analytics 4 (GA4)</strong> der
              Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
              Irland. Google Analytics erfasst u. a. Seitenaufrufe,
              Verweildauer, Geräteinformationen und Herkunft der Nutzer.{" "}
              <strong>IP-Anonymisierung:</strong> In GA4 werden IP-Adressen
              standardmäßig vor der Speicherung anonymisiert. Wir haben mit
              Google einen AVV abgeschlossen. Die Datenübertragung in die USA
              wird auf SCCs gestützt:{" "}
              <a
                href="https://privacy.google.com/businesses/controllerterms/mccs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://privacy.google.com/businesses/controllerterms/mccs/
              </a>
            </p>
            <p className="mb-4">
              <strong>Widerspruch:</strong> Browser-Plugin:{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://tools.google.com/dlpage/gaoptout?hl=de
              </a>
            </p>
            <p className="mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO; § 25
              Abs. 1 TDDDG (Einwilligung über Cookie-Banner). Einwilligung
              jederzeit widerrufbar.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              7. Online-Werbung
            </h2>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Google Ads und Conversion-Tracking
            </h3>
            <p className="mb-4">
              Diese Website nutzt <strong>Google Ads</strong> sowie{" "}
              <strong>Google Conversion-Tracking</strong> der Google Ireland
              Limited, Gordon House, Barrow Street, Dublin 4, Irland. Wenn Sie
              auf eine von Google geschaltete Anzeige klicken, wird ein
              Conversion-Cookie gesetzt (Gültigkeit: 30 Tage), das es uns
              ermöglicht zu erkennen, ob ein Nutzer über unsere Anzeige auf die
              Website gelangt ist und eine bestimmte Aktion ausgeführt hat. Die
              dabei erhobenen Informationen sind für uns anonym — sie dienen
              ausschließlich der Conversion-Statistik. Google ist nach dem EU-US
              DPF zertifiziert. Deaktivierung personalisierter Anzeigen:{" "}
              <a
                href="https://www.google.de/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://www.google.de/settings/ads
              </a>
            </p>
            <p className="mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO; § 25
              Abs. 1 TDDDG (Einwilligung).
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Google Ads Remarketing
            </h3>
            <p className="mb-4">
              Über <strong>Google Ads Remarketing</strong> können wir Nutzern,
              die unsere Website besucht haben, auf anderen Google-Plattformen
              gezielte Werbung ausspielen. Dabei werden interessenbasierte
              Profile auf Basis von Cookies erstellt, die auch
              geräteübergreifend verknüpft werden können. Widerspruch:{" "}
              <a
                href="https://adssettings.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://adssettings.google.com/
              </a>
            </p>
            <p className="mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO; § 25
              Abs. 1 TDDDG (Einwilligung).
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Google AdSense
            </h3>
            <p className="mb-4">
              Auf dieser Website werden Werbeanzeigen über{" "}
              <strong>Google AdSense</strong> der Google Ireland Limited
              eingebunden. Google AdSense setzt Cookies und verwendet Web
              Beacons zur Messung der Wirksamkeit von Werbeanzeigen.
              Informationen zu personalisierter Werbung:{" "}
              <a
                href="https://policies.google.com/technologies/ads?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://policies.google.com/technologies/ads?hl=de
              </a>
            </p>
            <p className="mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO; § 25
              Abs. 1 TDDDG (Einwilligung).
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Meta Pixel (ehemals Facebook Pixel)
            </h3>
            <p className="mb-4">
              Diese Website nutzt das <strong>Meta Pixel</strong> der Meta
              Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland.
              Das Meta Pixel ermöglicht es, das Verhalten von Websitebesuchern
              nach dem Klick auf eine Facebook- oder Instagram-Werbeanzeige
              nachzuverfolgen und die Wirksamkeit von Werbeanzeigen zu messen.
              Die erhobenen Daten sind für uns als Seitenbetreiber anonym; Meta
              kann sie jedoch mit dem Facebook-Nutzerprofil des Besuchers
              verknüpfen. Wir und Meta Platforms Ireland Limited sind für diese
              Verarbeitung gemeinsam verantwortlich (Art. 26 DSGVO). Die
              Datenübertragung in die USA erfolgt auf Grundlage von SCCs:{" "}
              <a
                href="https://www.facebook.com/legal/EU_data_transfer_addendum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://www.facebook.com/legal/EU_data_transfer_addendum
              </a>
              . Widerspruch:{" "}
              <a
                href="https://www.facebook.com/settings?tab=ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://www.facebook.com/settings?tab=ads
              </a>
            </p>
            <p className="mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO; § 25
              Abs. 1 TDDDG (Einwilligung).
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Meta Conversion API
            </h3>
            <p className="mb-4">
              Wir nutzen die <strong>Meta Conversion API (CAPI)</strong> der
              Meta Platforms Ireland Limited. Die Conversion API ermöglicht die
              serverseitige Übermittlung von Conversion-Ereignissen direkt von
              unserem Server an Meta, ohne Browser-Cookies. Dabei können
              gehashte (SHA-256) E-Mail-Adressen, Telefonnummern, IP-Adressen
              sowie Informationen über durchgeführte Aktionen übermittelt
              werden.
            </p>
            <p className="mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO
              (Einwilligung). Widerruf jederzeit möglich.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Meta Custom Audiences
            </h3>
            <p className="mb-4">
              Wir nutzen <strong>Meta Custom Audiences</strong>, um auf Basis
              von Kundenmerkmalen oder Websitebesuchern personalisierte
              Zielgruppen auf Meta-Plattformen zu erstellen. Dabei werden
              Merkmale (z. B. gehashte E-Mail-Adressen) mit Meta abgeglichen.
              Weitere Informationen:{" "}
              <a
                href="https://de-de.facebook.com/privacy/explanation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://de-de.facebook.com/privacy/explanation
              </a>
            </p>
            <p className="mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO
              (Einwilligung).
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              TikTok Pixel
            </h3>
            <p className="mb-4">
              Diese Website verwendet das <strong>TikTok Pixel</strong> der
              TikTok Technology Limited, 10 Earlsfort Terrace, Dublin, D02 T380,
              Irland. Das TikTok Pixel erfasst Nutzeraktionen auf unserer
              Website (z. B. Seitenaufrufe, Formularabschlüsse) und übermittelt
              diese an TikTok zur Ausspielung personalisierter Anzeigen und
              Conversion-Messung. Die Datenübertragung in die USA erfolgt auf
              Grundlage von SCCs. Datenschutzerklärung:{" "}
              <a
                href="https://www.tiktok.com/legal/privacy-policy?lang=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://www.tiktok.com/legal/privacy-policy?lang=de
              </a>
            </p>
            <p className="mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO; § 25
              Abs. 1 TDDDG (Einwilligung).
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              LinkedIn Insight Tag und LinkedIn-Elemente
            </h3>
            <p className="mb-4">
              Diese Website nutzt den <strong>LinkedIn Insight Tag</strong>{" "}
              sowie eingebundene LinkedIn-Elemente der LinkedIn Ireland
              Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2, Irland.
              Der Insight Tag setzt ein Cookie und erfasst Daten über
              Websitebesuche (URL, IP-Adresse, Geräteeigenschaften,
              Zeitstempel). Cookie-IDs werden innerhalb von 7 Tagen
              anonymisiert; anonymisierte Daten werden nach 90 Tagen gelöscht.
              LinkedIn bietet uns aggregierte, anonyme Berichte sowie
              Retargeting-Möglichkeiten.
            </p>
            <p className="mb-4">
              Wenn Sie bei LinkedIn eingeloggt sind, kann LinkedIn Ihren Besuch
              Ihrem Profil zuordnen. Widerspruch:{" "}
              <a
                href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
              </a>
            </p>
            <p className="mb-4">
              Die Datenübertragung in die USA erfolgt auf Grundlage von SCCs und
              dem EU-US DPF:{" "}
              <a
                href="https://www.linkedin.com/legal/l/eu-sccs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://www.linkedin.com/legal/l/eu-sccs
              </a>
            </p>
            <p className="mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO; § 25
              Abs. 1 TDDDG (Einwilligung).
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              8. CRM und Kundenverwaltung
            </h2>
            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              HubSpot
            </h3>
            <p className="mb-4">
              Wir nutzen <strong>HubSpot</strong> für unser
              Customer-Relationship-Management. Anbieter: HubSpot Ireland
              Limited, 1 Sir John Rogerson&apos;s Quay, Dublin 2, Irland. In
              HubSpot werden Interessenten- und Kundendaten verwaltet: Name,
              E-Mail-Adresse, Telefonnummer, Unternehmensname,
              Kommunikationsverlauf und Vertragsdetails. HubSpot speichert Daten
              auf Servern in der EU (Irland). Wir haben mit HubSpot einen AVV
              abgeschlossen. HubSpot ist nach dem EU-US DPF zertifiziert.
              Datenschutzerklärung:{" "}
              <a
                href="https://legal.hubspot.com/de/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://legal.hubspot.com/de/privacy-policy
              </a>
            </p>
            <p className="mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO sowie
              Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              9. Kommunikation und Konferenzen
            </h2>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              WhatsApp Business
            </h3>
            <p className="mb-4">
              Für die Kommunikation mit Kunden und Interessenten nutzen wir{" "}
              <strong>WhatsApp Business</strong> der Meta Platforms Ireland
              Limited, 4 Grand Canal Square, Dublin 2, Irland.
              Nachrichteninhalte werden Ende-zu-Ende-verschlüsselt übertragen.
              Metadaten (Telefonnummern, Zeitstempel) werden auf Meta-Servern
              verarbeitet. Wir empfehlen, für die Übermittlung sensibler Daten
              alternative Kanäle zu nutzen. Datenschutzerklärung:{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy-eea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://www.whatsapp.com/legal/privacy-policy-eea
              </a>
            </p>
            <p className="mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO sowie
              Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Google Meet und Google Calendar
            </h3>
            <p className="mb-4">
              Für Online-Meetings und Terminkoordination verwenden wir{" "}
              <strong>Google Meet</strong> und <strong>Google Calendar</strong>{" "}
              der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
              Irland. Bei Teilnahme an einem Google-Meet-Termin werden
              verarbeitet: Name, E-Mail-Adresse, IP-Adresse, Kamera- und
              Tonaufnahme (sofern aktiviert), Chatnachrichten sowie Metadaten
              (Datum, Uhrzeit, Dauer). Google ist nach dem EU-US DPF
              zertifiziert. Datenschutzerklärung:{" "}
              <a
                href="https://policies.google.com/privacy?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://policies.google.com/privacy?hl=de
              </a>
            </p>
            <p className="mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
              (Vertragserfüllung) sowie Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              10. Plugins und Tools
            </h2>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Google Fonts
            </h3>
            <p className="mb-4">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
              so genannte Google Fonts, die von Google bereitgestellt werden.
              Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in
              seinen Browser-Cache. Zu diesem Zweck muss der von Ihnen
              verwendete Browser Verbindung zu den Servern von Google aufnehmen.
              Hierdurch erlangt Google Kenntnis darüber, dass über Ihre
              IP-Adresse diese Website aufgerufen wurde. Sofern eine
              entsprechende Einwilligung abgefragt wurde, erfolgt die
              Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
              DSGVO und § 25 Abs. 1 TDDDG. Google verfügt über eine
              Zertifizierung nach dem EU-US DPF. Weitere Informationen:{" "}
              <a
                href="https://developers.google.com/fonts/faq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://developers.google.com/fonts/faq
              </a>{" "}
              sowie{" "}
              <a
                href="https://policies.google.com/privacy?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://policies.google.com/privacy?hl=de
              </a>
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Font Awesome
            </h3>
            <p className="mb-4">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
              und Symbolen Font Awesome. Anbieter ist die Fonticons, Inc., 6
              Porter Road Apartment 3R, Cambridge, Massachusetts, USA. Beim
              Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in seinen
              Browser-Cache. Zu diesem Zweck muss der von Ihnen verwendete
              Browser Verbindung zu den Servern von Font Awesome aufnehmen. Die
              Nutzung von Font Awesome erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO. Sofern eine entsprechende Einwilligung abgefragt
              wurde, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1
              lit. a DSGVO und § 25 Abs. 1 TDDDG. Weitere Informationen:{" "}
              <a
                href="https://fontawesome.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://fontawesome.com/privacy
              </a>
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4 rounded-r-lg">
              <p className="font-bold text-amber-800">⚠️ Hinweis:</p>
              <p className="text-amber-700 text-sm mt-1">
                Font Awesome (Fonticons, Inc.) ist derzeit nicht nach dem EU-US
                Data Privacy Framework zertifiziert. Die Datenübertragung in die
                USA erfolgt mangels geeigneter Garantien auf Grundlage Ihrer
                ausdrücklichen Einwilligung gem. Art. 49 Abs. 1 lit. a DSGVO.
              </p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Google Maps
            </h3>
            <p className="mb-4">
              Diese Seite nutzt den Kartendienst <strong>Google Maps</strong>{" "}
              der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
              Irland. Zur Nutzung der Funktionen von Google Maps ist es
              notwendig, Ihre IP-Adresse zu speichern. Diese Informationen
              werden in der Regel an einen Server von Google in den USA
              übertragen. Die Nutzung von Google Maps erfolgt im Interesse einer
              ansprechenden Darstellung unserer Online-Angebote (Art. 6 Abs. 1
              lit. f DSGVO). Sofern eine Einwilligung abgefragt wurde, erfolgt
              die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und
              § 25 Abs. 1 TDDDG. Die Datenübertragung in die USA wird auf SCCs
              gestützt:{" "}
              <a
                href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://privacy.google.com/businesses/gdprcontrollerterms/sccs/
              </a>
              . Datenschutzerklärung Google:{" "}
              <a
                href="https://policies.google.com/privacy?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://policies.google.com/privacy?hl=de
              </a>
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Google reCAPTCHA
            </h3>
            <p className="mb-4">
              Wir nutzen <strong>Google reCAPTCHA</strong> der Google Ireland
              Limited, Gordon House, Barrow Street, Dublin 4, Irland. Mit
              reCAPTCHA wird überprüft, ob die Dateneingabe auf dieser Website
              durch einen Menschen oder durch ein automatisiertes Programm
              erfolgt. Hierzu analysiert reCAPTCHA das Verhalten des
              Websitebesuchers anhand verschiedener Merkmale (z. B. IP-Adresse,
              Verweildauer, Mausbewegungen). Die Analysen laufen vollständig im
              Hintergrund. Die bei der Analyse erfassten Daten werden an Google
              weitergeleitet. Google agiert in diesem Zusammenhang als
              Auftragsverarbeiter gem. Art. 28 DSGVO. Sofern eine Einwilligung
              abgefragt wurde, erfolgt die Verarbeitung auf Grundlage von Art. 6
              Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG; andernfalls auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              an SPAM-Schutz).
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              11. Einsatz von Künstlicher Intelligenz
            </h2>
            <p className="mb-4">
              Zur Optimierung unserer Dienstleistungen und zur internen
              Arbeitsunterstützung setzen wir KI-basierte Dienste ein:
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Claude (Anthropic)
            </h3>
            <p className="mb-4">
              Wir nutzen <strong>Claude</strong>, ein KI-Sprachmodell der
              Anthropic, PBC, 548 Market St PMB 90375, San Francisco, CA 94114,
              USA. Claude wird eingesetzt zur Unterstützung bei der Beantwortung
              von Kundenanfragen und zur internen Textverarbeitung. Dabei können
              Inhalte (ohne direkte Identifikatoren) an die Anthropic-API
              übermittelt werden. Die Übertragung in die USA erfolgt auf
              Grundlage von SCCs gem. Art. 46 Abs. 2 lit. c DSGVO.
              Datenschutzerklärung:{" "}
              <a
                href="https://www.anthropic.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://www.anthropic.com/privacy
              </a>
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Google Gemini / Google AI Studio
            </h3>
            <p className="mb-4">
              Wir nutzen <strong>Google Gemini</strong> (über Google AI Studio)
              der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
              Irland, für interne Aufgaben wie Textgenerierung und
              Prozessoptimierung. Google ist nach dem EU-US DPF zertifiziert.
              Datenschutzerklärung:{" "}
              <a
                href="https://policies.google.com/privacy?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://policies.google.com/privacy?hl=de
              </a>
            </p>

            <p className="mb-4">
              <strong>Für beide KI-Systeme gilt:</strong> Es werden keine
              vollautomatisierten Entscheidungen im Sinne von Art. 22 DSGVO
              getroffen. Alle KI-Prozesse unterliegen menschlicher Aufsicht.
              Personenbezogene Daten werden vor der Übermittlung an KI-Dienste
              soweit möglich anonymisiert oder pseudonymisiert.
            </p>
            <p className="mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an effizienter Leistungserbringung).
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              12. Eigene Dienste
            </h2>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Google Drive
            </h3>
            <p className="mb-4">
              Wir haben <strong>Google Drive</strong> der Google Ireland
              Limited, Gordon House, Barrow Street, Dublin 4, Irland auf dieser
              Website eingebunden. Google Drive ermöglicht es uns, einen
              Uploadbereich auf unserer Website einzubinden. Wenn Sie unsere
              Website betreten, wird eine Verbindung zu Google Drive aufgebaut.
              Die Verwendung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO. Sofern eine entsprechende Einwilligung abgefragt wurde,
              erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a
              DSGVO. Google verfügt über eine DPF-Zertifizierung. Wir haben mit
              Google einen AVV abgeschlossen.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 text-rose-500">
              Bewerberdaten
            </h3>
            <p className="mb-4">
              Wir bieten die Möglichkeit, sich bei uns per E-Mail oder über ein
              Bewerberformular zu bewerben. Im Bewerbungsverfahren erheben wir:
              Name, E-Mail-Adresse, Telefonnummer, Lebenslauf, Zeugnisse,
              Anschreiben sowie sonstige freiwillig übermittelte Informationen.
            </p>
            <p className="mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO i. V.
              m. § 26 BDSG.
            </p>
            <p className="mb-4">
              Wird kein Anstellungsvertrag geschlossen, werden
              Bewerbungsunterlagen <strong>spätestens 2 Monate</strong> nach der
              Absage gelöscht, sofern keine berechtigten Interessen (z. B.
              Beweispflichten nach dem AGG) entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              13. Auftragsverarbeitung
            </h2>
            <p className="mb-4">
              Wir haben Auftragsverarbeitungsverträge (AVV) gem. Art. 28 DSGVO
              mit folgenden Dienstleistern abgeschlossen:
            </p>

            <div className="overflow-x-auto mb-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm text-left text-slate-700">
                <thead className="text-xs text-slate-900 uppercase bg-slate-100 border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3">Dienstleister</th>
                    <th className="px-4 py-3">Zweck</th>
                    <th className="px-4 py-3">Sitz</th>
                    <th className="px-4 py-3">Übertragungsgrundlage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">
                      HOSTINGER operations, UAB / Hostinger International Ltd.
                    </td>
                    <td className="px-4 py-3">Webhosting</td>
                    <td className="px-4 py-3">Litauen / Zypern (EU)</td>
                    <td className="px-4 py-3">
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded">
                        Innerhalb EU
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">
                      Neon, Inc.
                    </td>
                    <td className="px-4 py-3">Datenbankhosting</td>
                    <td className="px-4 py-3">USA (Daten: Frankfurt/EU)</td>
                    <td className="px-4 py-3">
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded">
                        Verarbeitung in EU
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">
                      Stripe Payments Europe Ltd.
                    </td>
                    <td className="px-4 py-3">Zahlungsabwicklung</td>
                    <td className="px-4 py-3">Irland (EU)</td>
                    <td className="px-4 py-3">
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded">
                        Innerhalb EU
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">
                      Resend, Inc.
                    </td>
                    <td className="px-4 py-3">
                      Transaktionaler E-Mail-Versand
                    </td>
                    <td className="px-4 py-3">USA</td>
                    <td className="px-4 py-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                        SCCs
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">
                      Formspree, Inc.
                    </td>
                    <td className="px-4 py-3">Kontaktformulare</td>
                    <td className="px-4 py-3">USA</td>
                    <td className="px-4 py-3">
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                        EU-US DPF
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">
                      Google Ireland Limited
                    </td>
                    <td className="px-4 py-3">
                      Analytics, GTM, Ads, Maps, Fonts, Meet, Calendar, Drive,
                      Gemini
                    </td>
                    <td className="px-4 py-3">Irland (EU)</td>
                    <td className="px-4 py-3">
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                        EU-US DPF / SCCs
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">
                      Meta Platforms Ireland Ltd.
                    </td>
                    <td className="px-4 py-3">
                      Pixel, Conversion API, Custom Audiences, WhatsApp,
                      Instagram
                    </td>
                    <td className="px-4 py-3">Irland (EU)</td>
                    <td className="px-4 py-3">
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                        EU-US DPF / SCCs
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">
                      TikTok Technology Ltd.
                    </td>
                    <td className="px-4 py-3">TikTok Pixel</td>
                    <td className="px-4 py-3">Irland (EU)</td>
                    <td className="px-4 py-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                        SCCs
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">
                      LinkedIn Ireland Unlimited Co.
                    </td>
                    <td className="px-4 py-3">
                      Insight Tag, LinkedIn-Elemente
                    </td>
                    <td className="px-4 py-3">Irland (EU)</td>
                    <td className="px-4 py-3">
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                        EU-US DPF / SCCs
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">
                      HubSpot Ireland Limited
                    </td>
                    <td className="px-4 py-3">CRM</td>
                    <td className="px-4 py-3">Irland (EU)</td>
                    <td className="px-4 py-3">
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                        EU-US DPF
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">
                      Anthropic, PBC
                    </td>
                    <td className="px-4 py-3">KI-Textverarbeitung (Claude)</td>
                    <td className="px-4 py-3">USA</td>
                    <td className="px-4 py-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                        SCCs
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">
                      Fonticons, Inc.
                    </td>
                    <td className="px-4 py-3">Font Awesome</td>
                    <td className="px-4 py-3">USA</td>
                    <td className="px-4 py-3">
                      <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-1 rounded">
                        Einwilligung (Art. 49)
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              14. Aktualität und Änderungen
            </h2>
            <p className="mb-4">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand{" "}
              <strong>Mai 2026</strong>. Durch die Weiterentwicklung unserer
              Website oder aufgrund geänderter gesetzlicher Vorgaben kann es
              notwendig werden, diese Datenschutzerklärung zu aktualisieren. Die
              jeweils aktuelle Version ist stets abrufbar unter:{" "}
              <a
                href="https://vanicy.de/datenschutz"
                className="text-rose-600 hover:underline font-bold"
              >
                https://vanicy.de/datenschutz
              </a>
            </p>
            <p className="italic text-sm text-slate-500 mt-8">
              Quelle der Grundstruktur: eRecht24 (https://www.e-recht24.de),
              ergänzt und angepasst durch VANICY.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
