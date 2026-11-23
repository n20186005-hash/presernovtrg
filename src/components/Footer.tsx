import { useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;

  return (
    <footer
      className="px-4 py-7 text-sm leading-relaxed sm:px-6"
      style={{ background: 'var(--bg-tertiary)', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)' }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-x-8 gap-y-5 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0 space-y-2">
          <p>{t('rights')}</p>
          <p>{t('disclaimer')}</p>
        </div>
        <nav
          aria-label={t('siteLinks')}
          className="flex flex-wrap gap-x-6 gap-y-2 md:shrink-0 md:justify-end"
          style={{ color: 'var(--text-secondary)' }}
        >
          <a href={`${prefix}/privacy-policy`} className="hover:underline">{t('privacy')}</a>
          <a href={`${prefix}/terms-of-service`} className="hover:underline">{t('terms')}</a>
          <a href={`${prefix}/cookie-settings`} className="hover:underline">{t('cookies')}</a>
        </nav>
      </div>
    </footer>
  );
}
