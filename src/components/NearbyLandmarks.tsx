'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function NearbyLandmarks() {
  const t = useTranslations('nearby');
  const messages = useMessages() as any;
  const landmarks = (messages?.nearby?.items || []) as Array<{
    name: string;
    walk: string;
    desc: string;
  }>;

  return (
    <section id="landmarks" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {landmarks.map((item, index) => (
            <article
              key={index}
              className="rounded-xl p-6"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold"
                style={{ background: 'var(--accent)', color: 'white' }}
              >
                {index + 1}
              </div>
              <h3 className="font-display text-xl font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                {item.name}
              </h3>
              <p className="text-xs font-medium mb-3" style={{ color: 'var(--accent)' }}>
                {item.walk}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
