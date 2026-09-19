import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['sl', 'en', 'de', 'es', 'it', 'zh'],
  defaultLocale: 'sl',
  localePrefix: {
    mode: 'as-needed',
  },
  pathnames: {
    '/': '/',
    '/privacy-policy': '/privacy-policy',
    '/terms-of-service': '/terms-of-service',
    '/cookie-settings': '/cookie-settings',
  },
});

export type Locale = (typeof routing.locales)[number];

/** Order used by the language switcher in the UI. */
export const UI_ORDERED_LOCALES = ['sl', 'en', 'de', 'es', 'it', 'zh'] as const;

/**
 * Canonical origin — always the non-www host. Every canonical URL, hreflang
 * entry, sitemap URL and structured-data URL is generated from this value so
 * that https://presernovtrg.com and https://www.presernovtrg.com can never
 * drift apart again. `www` is additionally 301-redirected to this host in
 * `next.config.ts`.
 */
export const BASE_URL = 'https://presernovtrg.com';

/**
 * `x-default` fallback for international visitors: English is the version that
 * serves the widest non-local audience (see Search Console country data).
 */
export const X_DEFAULT_LOCALE: Locale = 'en';

/** hreflang tag for every locale, e.g. en → en, zh → zh-Hans. */
export const HREFLANG_TAGS: Record<Locale, string> = {
  sl: 'sl',
  en: 'en',
  de: 'de',
  es: 'es',
  it: 'it',
  zh: 'zh-Hans',
};

/** Open Graph locale for every language. */
export const OG_LOCALES: Record<Locale, string> = {
  sl: 'sl_SI',
  en: 'en_US',
  de: 'de_DE',
  es: 'es_ES',
  it: 'it_IT',
  zh: 'zh_CN',
};

/** `<html lang>` value for every language. */
export const HTML_LANG: Record<Locale, string> = {
  sl: 'sl',
  en: 'en',
  de: 'de',
  es: 'es',
  it: 'it',
  zh: 'zh-CN',
};

/** Builds a canonical, non-www absolute URL for a locale + path. */
export function localeUrl(locale: Locale, path = '/'): string {
  const suffix = path === '/' ? '' : `/${path.replace(/^\//, '')}`;

  if (locale === routing.defaultLocale) {
    return suffix ? `${BASE_URL}${suffix}` : `${BASE_URL}/`;
  }

  return `${BASE_URL}/${locale}${suffix}`;
}

/** Canonical + full hreflang map for the Metadata API. */
export function localeAlternates(locale: Locale, path = '/') {
  const languages: Record<string, string> = {};

  for (const item of routing.locales) {
    languages[HREFLANG_TAGS[item]] = localeUrl(item, path);
  }
  languages['x-default'] = localeUrl(X_DEFAULT_LOCALE, path);

  return {
    canonical: localeUrl(locale, path),
    languages,
  };
}

/** All static routes that exist for every locale. */
export const STATIC_PATHS = [
  '/',
  '/privacy-policy',
  '/terms-of-service',
  '/cookie-settings',
] as const;
