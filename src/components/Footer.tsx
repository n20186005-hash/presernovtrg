import { useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;

  return (
    <>
      <nav
        aria-label={t('siteLinks')}
        className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-4 py-5 text-sm"
        style={{ color: 'var(--text-secondary)' }}
      >
        <a href={`${prefix}/privacy-policy`} className="hover:underline">{t('privacy')}</a>
        <a href={`${prefix}/terms-of-service`} className="hover:underline">{t('terms')}</a>
        <a href={`${prefix}/cookie-settings`} className="hover:underline">{t('cookies')}</a>
      </nav>
      <footer
        className="space-y-2 px-4 py-7 text-center text-sm leading-relaxed"
        style={{ background: 'var(--bg-tertiary)', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)' }}
      >
        <p>{t('rights')}</p>
        <p>{t('disclaimer')}</p>
      </footer>
    </>
  );
}
