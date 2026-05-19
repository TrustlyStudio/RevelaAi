import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    schema_version: "v1",
    name: "VANICY",
    description: "VANICY bietet professionelles B2B-Webseitenleasing. KI-optimierte, conversion-starke Websites zur Miete ab 209€/Monat (Essential, Business, Pro) inkl. Wartung, Hosting und Änderungen.",
    url: "https://vanicy.de"
  };

  return NextResponse.json(data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
