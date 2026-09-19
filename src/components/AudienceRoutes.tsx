import { useTranslations } from 'next-intl';

const ICONS = ['👨‍👩‍👧', '📷', '♿'];

export default function AudienceRoutes() {
  const t = useTranslations('audience');
  const plans = t.raw('plans') as Array<{
    name: string;
    duration: string;
    pace: string;
    tagline: string;
    steps: string[];
    tips: string[];
  }>;

  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {plans.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{ICONS[i % ICONS.length]}</span>
                <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {p.name}
                </h3>
              </div>
              <div className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>
                {t('durationLabel')} {p.duration} · {t('paceLabel')} {p.pace}
              </div>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                {p.tagline}
              </p>
              <ol className="list-decimal list-inside space-y-1 text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                {p.steps.map((s, j) => (
                  <li key={j}>{s}</li>
                ))}
              </ol>
              <div className="mt-auto rounded-lg p-3" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--accent)' }}>
                <div className="text-xs font-semibold mb-1" style={{ color: 'var(--accent)' }}>
                  {t('tipsTitle')}
                </div>
                <ul className="text-xs space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  {p.tips.map((s, j) => (
                    <li key={j}>· {s}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
