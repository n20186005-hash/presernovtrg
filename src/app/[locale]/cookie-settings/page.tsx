import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import CookieSettingsClient from './CookieSettingsClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://presernovtrg.com';
  const slUrl = `${baseUrl}/cookie-settings`;
  const enUrl = `${baseUrl}/en/cookie-settings`;
  const zhUrl = `${baseUrl}/zh/cookie-settings`;
  const selfUrl = locale === 'sl' ? slUrl : locale === 'en' ? enUrl : zhUrl;

  return {
    alternates: {
      canonical: selfUrl,
      languages: {
        'sl': slUrl,
        'en': enUrl,
        'zh': zhUrl,
        'x-default': slUrl,
      },
    },
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
