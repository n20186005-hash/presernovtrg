import { useTranslations } from 'next-intl';

const ICONS = ['🌊', '🌡️', '🦅', '🏛️'];

export default function ScienceNotes() {
  const t = useTranslations('science');
  const cards = t.raw('cards') as Array<{ name: string; desc: string }>;

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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl p-6"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{ICONS[i % ICONS.length]}</span>
                <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {c.name}
                </h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-6 rounded-xl p-5"
          style={{ background: 'var(--bg-secondary)', border: '1px solid var(--accent)' }}
        >
          <h3 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>
            {t('responsibilityTitle')}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {t('responsibility')}
          </p>
        </div>
      </div>
    </section>
  );
}
