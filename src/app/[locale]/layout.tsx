import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import {
  BASE_URL,
  HTML_LANG,
  OG_LOCALES,
  type Locale,
  localeAlternates,
  routing,
} from '@/i18n/routing';
import {
  HERO_IMAGE,
  type MetaMessages,
} from '@/lib/structuredData';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = (
    routing.locales.includes(locale as Locale) ? locale : routing.defaultLocale
  ) as Locale;
  const messages = (await import(`@/messages/${safeLocale}.json`)).default;
  const meta: MetaMessages = messages.meta;

  return {
    metadataBase: new URL(BASE_URL),
    title: meta.title,
    description: meta.description,
    applicationName: 'Prešernov trg',
    alternates: localeAlternates(safeLocale, '/'),
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: localeAlternates(safeLocale, '/').canonical,
      siteName: 'Prešernov trg',
      locale: OG_LOCALES[safeLocale],
      type: 'website',
      images: [
        {
          url: HERO_IMAGE,
          width: 1200,
          height: 675,
          alt: meta.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [HERO_IMAGE],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  setRequestLocale(currentLocale);
  const messages = await getMessages();

  return (
    <html lang={HTML_LANG[currentLocale]} suppressHydrationWarning>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossOrigin="anonymous" />
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
