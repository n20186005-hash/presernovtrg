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
  type FaqMessages,
  type MetaMessages,
  buildBreadcrumbLd,
  buildFaqLd,
  buildTouristAttractionLd,
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

function localizedNodeName(locale: Locale) {
  if (locale === 'de') return 'Prešeren-Platz (Prešernov trg)';
  if (locale === 'es') return 'Plaza Prešeren (Prešernov trg)';
  if (locale === 'it') return 'Piazza Prešeren (Prešernov trg)';
  if (locale === 'zh') return '普列舍伦广场 Prešernov trg';
  return 'Prešernov trg';
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

  const meta = (messages as unknown as { meta: MetaMessages }).meta;
  const faq = (messages as unknown as { faq: FaqMessages }).faq;

  const attractionLd = buildTouristAttractionLd(currentLocale, meta);
  const breadcrumbLd = buildBreadcrumbLd(currentLocale, localizedNodeName(currentLocale));
  const faqLd = buildFaqLd(faq);

  return (
    <html lang={HTML_LANG[currentLocale]} suppressHydrationWarning>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossOrigin="anonymous" />
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
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
