import { setRequestLocale } from 'next-intl/server';
import { type Locale, localeAlternates, routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import CookieSettingsClient from './CookieSettingsClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = (routing.locales.includes(locale as Locale) ? locale : routing.defaultLocale) as Locale;
  const messages = (await import(`@/messages/${safeLocale}.json`)).default;

  return {
    title: `${messages.cookieSettings.title} | Prešernov trg`,
    alternates: localeAlternates(safeLocale, '/cookie-settings'),
  };
}

export default async function CookiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookieSettingsClient />;
}
