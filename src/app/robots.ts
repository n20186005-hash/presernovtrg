import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/i18n/routing';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}

export const dynamic = 'force-static';
