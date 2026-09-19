import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import {
  BASE_URL,
  HTML_LANG,
  OG_LOCALES,
  localeAlternates,
  routing,
} from '@/i18n/routing';
import {
  HERO_IMAGE,
  type FaqMessages,
  type MetaMessages,
  buildBreadcrumbLd,
  buildFaqLd,
  buildTouristAttractionLd,
} from '@/lib/structuredData';
import PageSections from '@/components/PageSections';
import type { Metadata } from 'next';

const DEFAULT_LOCALE = routing.defaultLocale;

export async function generateMetadata(): Promise<Metadata> {
  const messages = (await import(`@/messages/${DEFAULT_LOCALE}.json`)).default;
  const meta: MetaMessages = messages.meta;

  return {
    metadataBase: new URL(BASE_URL),
    title: meta.title,
    description: meta.description,
    applicationName: 'Prešernov trg',
    alternates: localeAlternates(DEFAULT_LOCALE, '/'),
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: localeAlternates(DEFAULT_LOCALE, '/').canonical,
      siteName: 'Prešernov trg',
      locale: OG_LOCALES[DEFAULT_LOCALE],
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

export default async function RootPage() {
  setRequestLocale(DEFAULT_LOCALE);
  const messages = (await import(`@/messages/${DEFAULT_LOCALE}.json`)).default;

  const meta = messages.meta as MetaMessages;
  const faq = messages.faq as FaqMessages;

  const attractionLd = buildTouristAttractionLd(DEFAULT_LOCALE, meta);
  const breadcrumbLd = buildBreadcrumbLd(DEFAULT_LOCALE, 'Prešernov trg');
  const faqLd = buildFaqLd(faq);

  return (
    <html lang={HTML_LANG[DEFAULT_LOCALE]} suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
          crossOrigin="anonymous"
        />
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXX" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(attractionLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
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
        <NextIntlClientProvider locale={DEFAULT_LOCALE} messages={messages}>
          <PageSections />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
