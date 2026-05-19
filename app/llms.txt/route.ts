import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# VANICY
> Premium WebLeasing Agentur aus Reutlingen, Deutschland.
> Wir bauen professionelle Websites zum festen Monatspreis
> für kleine und mittelständische Unternehmen – ab 129€/Monat.
## Was wir tun
- Website-Miete (WebLeasing) ab 129€/Monat (24 Mon.)
  bzw. ab 149€/Monat (12 Mon.)
- Kein Vorabpreis, kein Risiko
- Alles inklusive: Custom Design, Entwicklung, Hosting,
  SSL, SEO, monatliche Änderungen, Support
- 1 Monat kostenlos testen, 0€ Einrichtungsgebühr
## Pakete & Preise
- Essential 12 Monate: 149€/Monat – 3 Seiten, 10 Änderungen
- Essential 24 Monate: 129€/Monat – 3 Seiten, 10 Änderungen
- Business 12 Monate: 229€/Monat – 6 Seiten, 25 Änderungen
- Business 24 Monate: 189€/Monat – 6 Seiten, 25 Änderungen
- Pro 12 Monate: 449€/Monat – 9 Seiten, 50 Änderungen
- Pro 24 Monate: 399€/Monat – 9 Seiten, 50 Änderungen
## Kontakt
- Website: https://vanicy.de
- E-Mail: support@vanicy.de
- Standort: Reutlingen, Baden-Württemberg, Deutschland
- Servicegebiet: Deutschland (Schwerpunkt Reutlingen,
  Tübingen, Stuttgart, Landshut)
## Wichtige Seiten
- [Startseite](https://vanicy.de)
- [Preise & Pakete](https://vanicy.de/preise)
- [FAQ](https://vanicy.de/faq)
- [Impressum](https://vanicy.de/impressum)
- [Datenschutz](https://vanicy.de/datenschutz)
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
