import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    schema_version: "v1",
    name: "Vanicy",
    description: "Vanicy bietet professionelles Webseitenleasing für B2B und B2C. KI-optimierte, conversion-starke Websites zur Miete ab 199€/Monat inkl. Wartung und Hosting.",
    url: "https://vanicy.de"
  };

  return NextResponse.json(data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
