'use client';

import { useTranslations, useLocale } from 'next-intl';
import { topicSlugsForLocale } from '@/data/topics';
import { getTopic } from '@/data/topics';
import { routing } from '@/i18n/routing';

/**
 * Homepage hub: links from the overview page into the in-depth topic guides
 * that exist in the current language. Keeps the homepage as an entry point
 * instead of a single long page.
 */
export default function TopicLinks() {
  const t = useTranslations('topicLinks');
  const locale = useLocale();
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;
  const slugs = topicSlugsForLocale(locale);

  if (slugs.length === 0) return null;

  return (
    <section id="guides" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-10 max-w-2xl" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {slugs.map((slug) => {
            const topic = getTopic(slug, locale);
            if (!topic) return null;
            return (
              <a
                key={slug}
                href={`${prefix}/${slug}`}
                className="rounded-xl p-5 flex flex-col transition-shadow hover:shadow-md"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
              >
                <h3 className="font-display font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {topic.h1}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {topic.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
