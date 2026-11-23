import { EDITORIAL_INTERVIEW, PRESS_COVERAGE } from '@/data/topics.press';
import type { MetadataRoute } from 'next';
import {
  HREFLANG_TAGS,
  STATIC_PATHS,
  X_DEFAULT_LOCALE,
  localeUrl,
  routing,
} from '@/i18n/routing';
import { getAttraction } from '@/data/attractions';
import { TOPIC_SLUGS, topicLocales } from '@/data/topics';

const LAST_UPDATED = new Date('2026-10-23');
const NEARBY_UPDATED = new Date('2026-11-23');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_PATHS.flatMap((path) => {
    const languages: Record<string, string> = {};

    for (const locale of routing.locales) {
      languages[HREFLANG_TAGS[locale]] = localeUrl(locale, path);
    }
    languages['x-default'] = localeUrl(X_DEFAULT_LOCALE, path);

    const locales = path === '/nearby' ? routing.locales : [routing.defaultLocale];
    return locales.map((locale) => ({
      url: localeUrl(locale, path),
      lastModified: path === '/nearby' ? NEARBY_UPDATED : LAST_UPDATED,
      changeFrequency: path === '/' ? ('weekly' as const) : ('yearly' as const),
      priority: path === '/' ? 1 : 0.3,
      alternates: { languages },
    }));
  });

  const topicEntries = TOPIC_SLUGS.flatMap((slug) => {
    const locales = topicLocales(slug);
    if (locales.length === 0) return [];

    const languages: Record<string, string> = {};
    for (const locale of locales) {
      languages[HREFLANG_TAGS[locale]] = localeUrl(locale, slug);
    }
    languages['x-default'] = locales.includes(X_DEFAULT_LOCALE)
      ? localeUrl(X_DEFAULT_LOCALE, slug)
      : localeUrl(locales[0], slug);

    // One entry per published language version, each with its own canonical.
    return locales.map((locale) => ({
      url: localeUrl(locale, slug),
      lastModified: getAttraction(slug) || slug === PRESS_COVERAGE || slug === EDITORIAL_INTERVIEW ? NEARBY_UPDATED : LAST_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: { languages },
    }));
  });

  return [...staticEntries, ...topicEntries];
}

export const dynamic = 'force-static';
