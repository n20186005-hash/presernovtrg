import { BASE_URL, type Locale, localeAlternates, routing } from '@/i18n/routing';

export const HERO_IMAGE = `${BASE_URL}/gallery/presernov-trg-ljubljana-panorama-view-1.jpg`;
export const MAPS_SHARE_URL = 'https://maps.app.goo.gl/p9nzsuxxzisR1vNF9';
export const TOURISM_URL = 'https://www.visitljubljana.com/';

export type MetaMessages = {
  title: string;
  description: string;
  ogImageAlt: string;
};

export type FaqMessages = {
  items: Array<{ question: string; answer: string }>;
};

/**
 * Single canonical host (no `www`) is used everywhere so that Search Console
 * stops treating https://presernovtrg.com and https://www.presernovtrg.com
 * as two competing copies of the same page.
 */
export function buildTouristAttractionLd(locale: Locale, meta: MetaMessages) {
  const canonical = localeAlternates(locale, '/').canonical;

  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${BASE_URL}/#attraction`,
    name: 'Prešernov trg',
    alternateName: [
      'Prešeren Square',
      'Prešernov trg Ljubljana',
      'Ljubljana Prešernov trg',
      'Prešeren-Platz',
      'Plaza Prešeren',
      'Piazza Prešeren',
      'Preserenplatz Ljubljana',
    ],
    description: meta.description,
    url: canonical,
    image: [HERO_IMAGE],
    isAccessibleForFree: true,
    publicAccess: true,
    slogan: meta.title,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Prešernov trg 1',
      addressLocality: 'Ljubljana',
      addressRegion: 'Ljubljana',
      postalCode: '1000',
      addressCountry: 'SI',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 46.0514711,
      longitude: 14.5060726,
    },
    hasMap: MAPS_SHARE_URL,
    sameAs: [
      MAPS_SHARE_URL,
      TOURISM_URL,
      'https://www.slovenia.info/en',
      'https://www.ljubljana.si/en/',
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      opens: '00:00',
      closes: '23:59',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
    },
    containedInPlace: {
      '@type': 'City',
      name: 'Ljubljana',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ljubljana',
        addressCountry: 'SI',
      },
    },
    touristType: ['Sightseeing', 'Culture', 'Photography'],
    availableLanguage: routing.locales.map((item) => (item === 'zh' ? 'zh-Hans' : item)),
  };
}

export function buildBreadcrumbLd(locale: Locale, nodeName: string) {
  const canonical = localeAlternates(locale, '/').canonical;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Slovenia', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Ljubljana', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 3, name: nodeName, item: canonical },
    ],
  };
}

export function buildFaqLd(faq: FaqMessages) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
