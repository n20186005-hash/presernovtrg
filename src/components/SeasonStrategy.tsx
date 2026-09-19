import { useTranslations } from 'next-intl';

type Row = {
  season: string;
  temp: string;
  precip: string;
  crowds: string;
  highlight: string;
  pack: string;
};

export default function SeasonStrategy() {
  const t = useTranslations('seasons');
  const cols = t.raw('columns') as Record<string, string>;
  const rows = t.raw('rows') as Row[];
  const keys: Array<keyof Row> = ['season', 'temp', 'precip', 'crowds', 'highlight', 'pack'];

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-3" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm min-w-[760px]">
            <thead>
              <tr style={{ background: 'var(--bg-tertiary)' }}>
                {keys.map((k) => (
                  <th
                    key={k}
                    className="text-left font-semibold p-3"
                    style={{ color: 'var(--text-primary)', borderBottom: '2px solid var(--border-color)' }}
                  >
                    {cols[k]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} style={{ background: i % 2 ? 'var(--bg-tertiary)' : 'var(--bg-secondary)' }}>
                  {keys.map((k) => (
                    <td
                      key={k}
                      className="p-3 align-top"
                      style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-color)' }}
                    >
                      {k === 'season' ? (
                        <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                          {r[k]}
                        </span>
                      ) : (
                        r[k]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
