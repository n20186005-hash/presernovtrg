import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
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
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const baseUrl = 'https://presernovtrg.com';

  const slUrl = `${baseUrl}/`;
  const zhUrl = `${baseUrl}/zh`;
  const enUrl = `${baseUrl}/en`;
  const selfUrl = locale === 'sl' ? slUrl : locale === 'zh' ? zhUrl : enUrl;
  const heroImage = `${baseUrl}/gallery/images%20(1).jpg`;

  return {
    title: messages.meta.title,
    description: messages.meta.description,
    alternates: {
      canonical: selfUrl,
      languages: {
        'sl': slUrl,
        'zh': zhUrl,
        'en': enUrl,
        'x-default': slUrl,
      },
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: selfUrl,
      siteName: 'Prešernov trg',
      locale: locale === 'sl' ? 'sl_SI' : locale === 'zh' ? 'zh_CN' : 'en_US',
      type: 'website',
      images: [
        {
          url: heroImage,
          width: 1200,
          height: 675,
          alt: locale === 'sl'
            ? 'Prešernov trg v Ljubljani, Slovenija'
            : locale === 'en'
              ? 'Prešernov trg in Ljubljana, Slovenia'
              : '斯洛文尼亚卢布尔雅那普列舍伦广场',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.meta.title,
      description: messages.meta.description,
      images: [heroImage],
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

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const baseUrl = 'https://presernovtrg.com';
  const heroImage = `${baseUrl}/gallery/images%20(1).jpg`;
  const mapsShareUrl = 'https://maps.app.goo.gl/p9nzsuxxzisR1vNF9';
  const govtTourismUrl = 'https://www.visitljubljana.com/';

  const attractionName = locale === 'sl' ? 'Prešernov trg' : locale === 'en' ? 'Prešernov trg' : '普列舍伦广场 Prešernov trg';
  const attractionShort = 'Prešernov trg';
  const cityName = locale === 'sl' ? 'Ljubljana' : locale === 'en' ? 'Ljubljana' : '卢布尔雅那 Ljubljana';
  const stateProvince = 'Ljubljana';
  const countryName = locale === 'sl' ? 'Slovenija' : locale === 'en' ? 'Slovenia' : '斯洛文尼亚';

  const touristAttractionLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${baseUrl}/#attraction`,
    name: attractionName,
    alternateName: [attractionShort, `${cityName} ${attractionName}`],
    description: locale === 'sl'
      ? `Celovit vodnik za obisk ${attractionName} v mestu ${cityName}, ${stateProvince}, ${countryName}.`
      : locale === 'en'
        ? `Comprehensive visitor guide to ${attractionName} in ${cityName}, ${stateProvince}, ${countryName}.`
        : `斯洛文尼亚卢布尔雅那${attractionName}综合游览指南。`,
    url: baseUrl,
    image: [heroImage],
    isAccessibleForFree: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Prešernov trg 1',
      addressLocality: 'Ljubljana',
      addressRegion: 'Ljubljana',
      postalCode: '1000',
      addressCountry: 'SI',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 46.0514711,
      longitude: 14.5060726,
    },
    hasMap: mapsShareUrl,
    sameAs: [mapsShareUrl, govtTourismUrl],
  };

  const faqPageLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: locale === 'sl'
          ? `Kje se nahaja ${attractionName}?`
          : locale === 'en'
            ? `Where is ${attractionName} located?`
            : `${attractionName}位于哪里？`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'sl'
            ? `${attractionName} se nahaja v Ljubljani v Sloveniji na naslovu Prešernov trg 1, 1000 Ljubljana.`
            : locale === 'en'
              ? `${attractionName} is located in Ljubljana, Ljubljana, Slovenia, at Prešernov trg 1, 1000 Ljubljana.`
              : `${attractionName}位于斯洛文尼亚卢布尔雅那，地址为 Prešernov trg 1, 1000 Ljubljana。`,
        },
      },
      {
        '@type': 'Question',
        name: locale === 'sl'
          ? `Ali je obisk ${attractionShort} brezplačen?`
          : locale === 'en'
            ? `Is ${attractionShort} free to visit?`
            : `${attractionShort}游览是否免费？`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'sl'
            ? `Da, ${attractionName} je javni prostor in je vse leto odprt brez vstopnine, 24 ur na dan.`
            : locale === 'en'
              ? `Yes, ${attractionName} is a public space and is free to visit year-round, 24 hours a day.`
              : `是的，${attractionName}是公共空间，全年全天24小时免费开放。`,
        },
      },
      {
        '@type': 'Question',
        name: locale === 'sl'
          ? `Katere glavne znamenitosti so v bližini ${attractionShort}?`
          : locale === 'en'
            ? `What are the main attractions near ${attractionShort}?`
            : `${attractionShort}周边有哪些主要景点？`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'sl'
            ? `Med bližnjimi znamenitostmi so Tromostovje, Ljubljanski grad, Frančiškanska cerkev Marijinega oznanjenja in osrednja ljubljanska tržnica.`
            : locale === 'en'
              ? `Nearby landmarks include the Triple Bridge (Tromostovje), Ljubljana Castle (Ljubljanski grad), the Franciscan Church of the Annunciation, and the Ljubljana Central Market.`
              : `周边地标包括三重桥 (Tromostovje)、卢布尔雅那城堡 (Ljubljanski grad)、方济各会天使报喜教堂以及卢布尔雅那中央市场。`,
        },
      },
    ],
  };

  return (
    <html lang={locale === 'sl' ? 'sl' : locale === 'zh' ? 'zh-CN' : 'en'} suppressHydrationWarning>
      <head>
        <link rel="canonical" href={locale === 'sl' ? `${baseUrl}/` : locale === 'zh' ? `${baseUrl}/zh` : `${baseUrl}/en`} />
        <meta property="og:image" content={heroImage} />
        <meta property="og:image:alt" content={locale === 'sl' ? `${attractionName} v ${cityName}` : locale === 'en' ? `${attractionName} in ${cityName}` : `${attractionName} ${cityName}`} />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossOrigin="anonymous" />
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXX" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageLd) }}
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
