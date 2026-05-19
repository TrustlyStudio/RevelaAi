import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vanicy.de';

  return [
    {
      url: baseUrl,
      lastModified: '2024-05-19',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/preise`,
      lastModified: '2024-05-19',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: '2024-05-19',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: '2024-05-19',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
