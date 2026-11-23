import type { Locale } from '@/i18n/routing';
import { buildBreadcrumbLd, buildFaqLd, buildTouristAttractionLd, type FaqMessages, type MetaMessages } from '@/lib/structuredData';
import { getMessages, setRequestLocale } from 'next-intl/server';
import PageSections from '@/components/PageSections';

function localizedNodeName(locale: Locale) {
  if (locale === 'de') return 'Prešeren-Platz (Prešernov trg)';
  if (locale === 'es') return 'Plaza Prešeren (Prešernov trg)';
  if (locale === 'it') return 'Piazza Prešeren (Prešernov trg)';
  if (locale === 'zh') return '普列舍伦广场 Prešernov trg';
  return 'Prešernov trg';
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const current = locale as Locale;
  const { meta, faq } = await getMessages() as unknown as { meta: MetaMessages; faq: FaqMessages };
  const structuredData = [
    buildTouristAttractionLd(current, meta),
    buildBreadcrumbLd(current, localizedNodeName(current)),
    buildFaqLd(faq),
  ];

  return (
    <>
      {structuredData.map((entry) => (
        <script key={entry['@type']} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }} />
      ))}
      <PageSections />
    </>
  );
}
