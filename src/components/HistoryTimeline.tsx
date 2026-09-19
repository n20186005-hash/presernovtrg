import { useTranslations } from 'next-intl';

export default function HistoryTimeline() {
  const t = useTranslations('historyTimeline');
  const events = t.raw('events') as Array<{ year: string; title: string; desc: string }>;
  const legends = t.raw('legends') as Array<{ title: string; desc: string }>;

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
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

        <h3 className="font-display text-2xl font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>
          {t('timelineTitle')}
        </h3>
        <ol className="relative border-l-2 ml-2 mb-12" style={{ borderColor: 'var(--accent)' }}>
          {events.map((e, i) => (
            <li key={i} className="mb-6 ml-6">
              <span
                className="absolute -left-[9px] w-4 h-4 rounded-full mt-1.5"
                style={{ background: 'var(--accent)' }}
              />
              <div className="flex items-baseline gap-3 flex-wrap">
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: 'var(--accent)', color: 'white' }}
                >
                  {e.year}
                </span>
                <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {e.title}
                </h4>
              </div>
              <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                {e.desc}
              </p>
            </li>
          ))}
        </ol>

        <h3 className="font-display text-2xl font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>
          {t('legendsTitle')}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {legends.map((l, i) => (
            <div
              key={i}
              className="rounded-xl p-5"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {l.title}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {l.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
