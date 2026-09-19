import { useTranslations } from 'next-intl';

const ICONS = ['✈️', '🚆', '🚌', '🚕', '🚗', '🚲'];

export default function TransportGuide() {
  const t = useTranslations('transportGuide');
  const modes = t.raw('modes') as Array<{
    mode: string;
    time: string;
    cost: string;
    steps: string[];
    tip: string;
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
        <p className="mb-3" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>
        <p className="mb-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
          {t('intro')}
        </p>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {modes.map((m, i) => (
            <div
              key={i}
              className="rounded-xl p-5"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-xl"
                  style={{ background: 'var(--accent)', color: 'white' }}
                >
                  {ICONS[i % ICONS.length]}
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {m.mode}
                  </h3>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {t('timeLabel')} {m.time} · {t('costLabel')} {m.cost}
                  </div>
                </div>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
                {m.steps.map((s, j) => (
                  <li key={j}>{s}</li>
                ))}
              </ol>
              <p className="mt-3 text-sm" style={{ color: 'var(--accent)' }}>
                {m.tip}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
