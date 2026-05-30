import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/', '/impressum', '/datenschutz', '/agb', '/avv'],
    },
    sitemap: 'https://vanicy.de/sitemap.xml',
  };
}
