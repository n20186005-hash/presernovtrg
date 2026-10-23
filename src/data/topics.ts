import {
  HREFLANG_TAGS,
  X_DEFAULT_LOCALE,
  localeUrl,
  routing,
  type Locale,
} from '@/i18n/routing';

export type TopicFact = { label: string; value: string };

export type TopicSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { columns: string[]; rows: string[][] };
};

export type TopicFaq = { question: string; answer: string };

export type TopicContent = {
  slug: string;
  /** <title> — keyword-led, includes Prešeren Square + Ljubljana where natural. */
  title: string;
  /** meta description. */
  description: string;
  h1: string;
  intro: string;
  facts: TopicFact[];
  sections: TopicSection[];
  faq: TopicFaq[];
  /** Slugs of related topic pages (internal links). */
  related: string[];
  /** Source / verification note shown at the bottom of the page. */
  updated: string;
};

/**
 * Topic slugs in publication order. Slugs are identical in every language; a
 * locale only publishes the pages it has content for (see CONTENT below).
 * Batch 1 (2026-10): history … where-to-stay.
 * Batch 2 (2026-10): france-preseren … river-bridges-walk.
 * Batch 3 (planned): pedestrian-zone-arrival … food-and-cafes.
 */
export const TOPIC_SLUGS = [
  'history',
  'preseren-monument',
  'map',
  'triple-bridge',
  'franciscan-church',
  'station-to-square',
  'airport-to-square',
  'bus-urbana',
  'parking',
  'accessibility',
  'one-hour-walk',
  'christmas-market',
  'christmas-lights',
  'where-to-stay',
  'france-preseren',
  'architecture',
  'art-nouveau-walk',
  '1895-earthquake',
  'photography',
  'hauptman-house',
  'urbanc-house',
  'dragon-bridge',
  'central-market',
  'ljubljana-cathedral',
  'mestni-trg',
  'congress-square',
  'ljubljana-castle',
  'river-bridges-walk',
  'pedestrian-zone-arrival',
  'public-toilets',
  'drinking-water',
  'half-day-itinerary',
  'one-day-itinerary',
  'free-sights',
  'rainy-day',
  'family-walk',
  'evening-walk',
  'new-years-eve',
  'preseren-day',
  'food-and-cafes',
] as const;

export type TopicSlug = (typeof TOPIC_SLUGS)[number];

import { EN_TOPICS } from './topics.en';
import { SL_TOPICS } from './topics.sl';

const CONTENT: Partial<Record<TopicSlug, Partial<Record<Locale, TopicContent>>>> = {
  history: { en: EN_TOPICS.history, sl: SL_TOPICS.history },
  'preseren-monument': { en: EN_TOPICS['preseren-monument'], sl: SL_TOPICS['preseren-monument'] },
  map: { en: EN_TOPICS.map, sl: SL_TOPICS.map },
  'triple-bridge': { en: EN_TOPICS['triple-bridge'] },
  'franciscan-church': { en: EN_TOPICS['franciscan-church'] },
  'station-to-square': { en: EN_TOPICS['station-to-square'], sl: SL_TOPICS['station-to-square'] },
  'airport-to-square': { en: EN_TOPICS['airport-to-square'] },
  'bus-urbana': { en: EN_TOPICS['bus-urbana'] },
  parking: { en: EN_TOPICS.parking },
  accessibility: { en: EN_TOPICS.accessibility },
  'one-hour-walk': { en: EN_TOPICS['one-hour-walk'] },
  'christmas-market': { en: EN_TOPICS['christmas-market'], sl: SL_TOPICS['christmas-market'] },
  'christmas-lights': { en: EN_TOPICS['christmas-lights'], sl: SL_TOPICS['christmas-lights'] },
  'where-to-stay': { en: EN_TOPICS['where-to-stay'] },
  'france-preseren': { en: EN_TOPICS['france-preseren'], sl: SL_TOPICS['france-preseren'] },
  architecture: { en: EN_TOPICS.architecture, sl: SL_TOPICS.architecture },
  'art-nouveau-walk': { en: EN_TOPICS['art-nouveau-walk'] },
  '1895-earthquake': { en: EN_TOPICS['1895-earthquake'], sl: SL_TOPICS['1895-earthquake'] },
  photography: { en: EN_TOPICS.photography },
  'hauptman-house': { en: EN_TOPICS['hauptman-house'] },
  'urbanc-house': { en: EN_TOPICS['urbanc-house'] },
  'dragon-bridge': { en: EN_TOPICS['dragon-bridge'], sl: SL_TOPICS['dragon-bridge'] },
  'central-market': { en: EN_TOPICS['central-market'], sl: SL_TOPICS['central-market'] },
  'ljubljana-cathedral': { en: EN_TOPICS['ljubljana-cathedral'], sl: SL_TOPICS['ljubljana-cathedral'] },
  'mestni-trg': { en: EN_TOPICS['mestni-trg'], sl: SL_TOPICS['mestni-trg'] },
  'congress-square': { en: EN_TOPICS['congress-square'], sl: SL_TOPICS['congress-square'] },
  'ljubljana-castle': { en: EN_TOPICS['ljubljana-castle'], sl: SL_TOPICS['ljubljana-castle'] },
  'river-bridges-walk': { en: EN_TOPICS['river-bridges-walk'], sl: SL_TOPICS['river-bridges-walk'] },
  'pedestrian-zone-arrival': { en: EN_TOPICS['pedestrian-zone-arrival'], sl: SL_TOPICS['pedestrian-zone-arrival'] },
  'public-toilets': { en: EN_TOPICS['public-toilets'], sl: SL_TOPICS['public-toilets'] },
  'drinking-water': { en: EN_TOPICS['drinking-water'], sl: SL_TOPICS['drinking-water'] },
  'half-day-itinerary': { en: EN_TOPICS['half-day-itinerary'], sl: SL_TOPICS['half-day-itinerary'] },
  'one-day-itinerary': { en: EN_TOPICS['one-day-itinerary'], sl: SL_TOPICS['one-day-itinerary'] },
  'free-sights': { en: EN_TOPICS['free-sights'], sl: SL_TOPICS['free-sights'] },
  'rainy-day': { en: EN_TOPICS['rainy-day'] },
  'family-walk': { en: EN_TOPICS['family-walk'] },
  'evening-walk': { en: EN_TOPICS['evening-walk'], sl: SL_TOPICS['evening-walk'] },
  'new-years-eve': { en: EN_TOPICS['new-years-eve'], sl: SL_TOPICS['new-years-eve'] },
  'preseren-day': { en: EN_TOPICS['preseren-day'], sl: SL_TOPICS['preseren-day'] },
  'food-and-cafes': { en: EN_TOPICS['food-and-cafes'], sl: SL_TOPICS['food-and-cafes'] },
};

/** Content for one topic in one locale, or null when that version does not exist. */
export function getTopic(slug: string, locale: string): TopicContent | null {
  const byLocale = CONTENT[slug as TopicSlug];
  if (!byLocale) return null;
  return (byLocale as Partial<Record<string, TopicContent>>)[locale] ?? null;
}

/** Locales in which a given topic page exists (English first, then Slovenian). */
export function topicLocales(slug: string): Locale[] {
  const byLocale = CONTENT[slug as TopicSlug];
  if (!byLocale) return [];
  const order: Locale[] = ['en', 'sl', 'de', 'es', 'it', 'zh'];
  return order.filter((locale) => (byLocale as Partial<Record<string, TopicContent>>)[locale]);
}

/** Slugs available for a locale (for the homepage interlink grid). */
export function topicSlugsForLocale(locale: string): TopicSlug[] {
  return TOPIC_SLUGS.filter((slug) => getTopic(slug, locale) !== null);
}

/**
 * Canonical + hreflang for a topic page. Only locales that actually publish
 * the topic are listed, so a half-translated page never points at a 404;
 * x-default falls back to English when it exists.
 */
export function topicAlternates(slug: string, locale: Locale) {
  const locales = topicLocales(slug);
  const languages: Record<string, string> = {};
  for (const item of locales) {
    languages[HREFLANG_TAGS[item]] = localeUrl(item, slug);
  }
  if (locales.includes(X_DEFAULT_LOCALE)) {
    languages['x-default'] = localeUrl(X_DEFAULT_LOCALE, slug);
  } else if (locales.length > 0) {
    languages['x-default'] = localeUrl(locales[0], slug);
  }
  return { canonical: localeUrl(locale, slug), languages };
}
