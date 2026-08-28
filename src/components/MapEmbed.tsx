import { useTranslations } from 'next-intl';

export default function MapEmbed() {
  const t = useTranslations('mapSection');
  const mapsEmbedSrc = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4925.037064311772!2d14.5060726!3d46.0514711!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47652d624c8985a3%3A0xdb1db0e48487df78!2z5pmu5YiX6IiN5LuB5bm_5Zy6!5e1!3m2!1szh-CN!2s!4v1787887652030!5m2!1szh-CN!2s';

  return (
    <section id="map" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        {/* Map */}
        <div
          className="map-container relative rounded-xl overflow-hidden"
          style={{ border: '1px solid var(--map-border)' }}
        >
          {/*
            NOTE: Google Maps attribution is hidden via CSS (.gm-style-cc, .gmnoprint).
            This is for visual cleanliness only. Google's Terms of Service apply.
          */}
          <iframe
            src={mapsEmbedSrc}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Google Maps - Prešernov trg (Ljubljana, Slovenia)"
          />
        </div>

        {/* Open in Google Maps */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://maps.app.goo.gl/p9nzsuxxzisR1vNF9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-colors"
            style={{ background: 'var(--accent)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {t('openMaps')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        {/* Official Tourism Authority Outbound Links */}
        <div className="mt-10 p-6 rounded-xl border border-dashed" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-tertiary)' }}>
          <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>
            {t('officialLinkText')}
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="https://www.visitljubljana.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium hover:underline"
              style={{ color: 'var(--accent)' }}
            >
              {t('officialLinkLabel')}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
