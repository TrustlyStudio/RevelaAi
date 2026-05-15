import { NextResponse } from 'next/server';

export async function GET() {
  const content = `Business Name: Vanicy - Webseitenleasing
What we do: Wir bieten hochkonvertierende, KI-optimierte Websites zur Miete an. Keine hohen Einmalkosten, stattdessen eine monatliche Flatrate inklusive Hosting, Wartung, Updates und Support.
Who we serve: Startups, KMUs, lokale Betriebe und B2B-Unternehmen, die mehr Neukundenanfragen über das Internet generieren möchten, ohne sich um die technische Umsetzung kümmern zu müssen.

Pages:
- / (Home): Die Startseite mit Erklärungen zu unserem Webseitenleasing-Modell, Vorteilen und Referenzen.
- /preise: Transparente Übersicht unserer Tarife und Add-ons für das Webseitenleasing.
- /faq: Häufig gestellte Fragen zu unserem Service, zur Technik und zum Ablauf.
- /datenschutz: Unsere Datenschutzerklärung.

Contact Information:
Email: hello@vanicy.de
Website: https://vanicy.de
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
