import { useTranslations } from 'next-intl';

export default function UniversityContext() {
  const t = useTranslations('universityContext');
  return (
    <section className="section-padding" id="university-context">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>{t('title')}</h2>
        <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{t('church')}</p>
        <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{t('buildings')}</p>
        <p className="leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{t('credit')}</p>
        <ul className="space-y-2" style={{ color: 'var(--accent)' }}>
          <li><a href="https://doi.org/10.4312/9789612974107">{t('book')} ↗</a></li>
          <li><a href="https://www.eheritage.si/apl/real.aspx?id=1978">{t('churchRecord')} ↗</a></li>
          <li><a href="https://www.eheritage.si/apl/real.aspx?id=397">{t('urbanc')} ↗</a></li>
          <li><a href="https://www.eheritage.si/apl/real.aspx?id=398">{t('bridge')} ↗</a></li>
        </ul>
      </div>
    </section>
  );
}
