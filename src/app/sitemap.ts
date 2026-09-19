import type { MetadataRoute } from 'next';
import {
  HREFLANG_TAGS,
  STATIC_PATHS,
  X_DEFAULT_LOCALE,
  localeUrl,
  routing,
} from '@/i18n/routing';

const LAST_UPDATED = new Date('2026-09-19');

export default function sitemap(): MetadataRoute.Sitemap {
  return STATIC_PATHS.map((path) => {
    const languages: Record<string, string> = {};

    for (const locale of routing.locales) {
      languages[HREFLANG_TAGS[locale]] = localeUrl(locale, path);
    }
    languages['x-default'] = localeUrl(X_DEFAULT_LOCALE, path);

    return {
      url: localeUrl(routing.defaultLocale, path),
      lastModified: LAST_UPDATED,
      changeFrequency: path === '/' ? 'weekly' : 'yearly',
      priority: path === '/' ? 1 : 0.3,
      alternates: { languages },
    };
  });
}

export const dynamic = 'force-static';
