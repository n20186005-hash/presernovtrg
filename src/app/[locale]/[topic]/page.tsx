import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { BASE_URL, type Locale, routing } from '@/i18n/routing';
import { TOPIC_SLUGS, getTopic, topicAlternates } from '@/data/topics';
import TopicPage from '@/components/TopicPage';
import type { Metadata } from 'next';

type TopicParams = { locale: string; topic: string };

function isTopicSlug(value: string): value is (typeof TOPIC_SLUGS)[number] {
  return (TOPIC_SLUGS as readonly string[]).includes(value);
}

function safeLocaleOf(locale: string): Locale {
  return (routing.locales.includes(locale as Locale) ? locale : routing.defaultLocale) as Locale;
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    TOPIC_SLUGS.filter((slug) => getTopic(slug, locale) !== null).map((slug) => ({
      locale,
      topic: slug,
    }))
  );
}

export async function generateMetadata({ params }: { params: Promise<TopicParams> }): Promise<Metadata> {
  const { locale, topic } = await params;
  const safeLocale = safeLocaleOf(locale);
  const content = isTopicSlug(topic) ? getTopic(topic, safeLocale) : null;

  if (!content) {
    return { title: 'Prešernov trg', robots: { index: false, follow: false } };
  }

  const alternates = topicAlternates(topic, safeLocale);

  return {
    metadataBase: new URL(BASE_URL),
    title: content.title,
    description: content.description,
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: alternates.canonical,
      siteName: 'Prešernov trg',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
    },
  };
}

export default async function TopicRoute({ params }: { params: Promise<TopicParams> }) {
  const { locale, topic } = await params;
  const safeLocale = safeLocaleOf(locale);

  if (!isTopicSlug(topic)) {
    notFound();
  }

  const content = getTopic(topic, safeLocale);
  if (!content) {
    notFound();
  }

  setRequestLocale(safeLocale);

  const canonical = topicAlternates(topic, safeLocale).canonical;
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Prešernov trg', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: content.h1, item: canonical },
    ],
  };
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
  const webPageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: content.title,
    description: content.description,
    url: canonical,
    isPartOf: { '@id': `${BASE_URL}/#attraction` },
    about: { '@id': `${BASE_URL}/#attraction` },
    inLanguage: safeLocale === 'zh' ? 'zh-Hans' : safeLocale,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }}
      />
      <TopicPage slug={topic} locale={safeLocale} />
    </>
  );
}
