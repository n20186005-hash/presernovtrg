import { useTranslations } from 'next-intl';

export default function ItineraryPlanner() {
  const t = useTranslations('itineraries');
  const plans = t.raw('plans') as Array<{
    name: string;
    overview: string;
    steps: string[];
  }>;

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="space-y-6">
          {plans.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl p-6"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <div className="flex items-baseline justify-between mb-2 flex-wrap gap-2">
                <h3 className="font-display text-2xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {p.name}
                </h3>
              </div>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                {p.overview}
              </p>
              <ol className="relative border-l-2 pl-6 space-y-4" style={{ borderColor: 'var(--accent)' }}>
                {p.steps.map((s, j) => (
                  <li key={j} className="relative">
                    <span
                      className="absolute -left-[31px] top-1 w-4 h-4 rounded-full"
                      style={{ background: 'var(--accent)' }}
                    />
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {s}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
