import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    schema_version: "v1",
    name: "Revela",
    description: "Revela bietet professionelles Webseitenleasing für B2B und B2C. KI-optimierte, conversion-starke Websites zur Miete ab 199€/Monat inkl. Wartung und Hosting.",
    url: "https://revela-ai.de"
  };

  return NextResponse.json(data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
