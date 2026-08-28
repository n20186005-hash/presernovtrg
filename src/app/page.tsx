import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import BasicInfo from '@/components/BasicInfo';
import HoursSection from '@/components/HoursSection';
import TicketsSection from '@/components/TicketsSection';
import TransportSection from '@/components/TransportSection';
import InfoSection from '@/components/InfoSection';
import RouteSection from '@/components/RouteSection';
import PhotoSpotsSection from '@/components/PhotoSpotsSection';
import HotelsSection from '@/components/HotelsSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import FAQSection from '@/components/FAQSection';
import MapEmbed from '@/components/MapEmbed';
import Footer from '@/components/Footer';

const DEFAULT_LOCALE = 'sl' as const;
const baseUrl = 'https://presernovtrg.com';
const heroImage = `${baseUrl}/gallery/images%20(1).jpg`;
const mapsShareUrl = 'https://maps.app.goo.gl/p9nzsuxxzisR1vNF9';
const govtTourismUrl = 'https://www.visitljubljana.com/';

export async function generateMetadata(): Promise<Metadata> {
  const messages = (await import(`@/messages/${DEFAULT_LOCALE}.json`)).default;

  const slUrl = `${baseUrl}/`;
  const zhUrl = `${baseUrl}/zh`;
  const enUrl = `${baseUrl}/en`;
  const selfUrl = slUrl;

  return {
    title: messages.meta.title,
    description: messages.meta.description,
    alternates: {
      canonical: selfUrl,
      languages: {
        sl: slUrl,
        zh: zhUrl,
        en: enUrl,
        'x-default': slUrl,
      },
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: selfUrl,
      siteName: 'Prešernov trg',
      locale: 'sl_SI',
      type: 'website',
      images: [
        {
          url: heroImage,
          width: 1200,
          height: 675,
          alt: 'Prešernov trg v Ljubljani, Slovenija',
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

export default async function RootPage() {
  setRequestLocale(DEFAULT_LOCALE);
  const messages = (await import(`@/messages/${DEFAULT_LOCALE}.json`)).default;

  const attractionName = 'Prešernov trg';
  const attractionShort = 'Prešernov trg';
  const cityName = 'Ljubljana';
  const stateProvince = 'Ljubljana';
  const countryName = 'Slovenija';

  const touristAttractionLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${baseUrl}/#attraction`,
    name: attractionName,
    alternateName: [attractionShort, `${cityName} ${attractionName}`],
    description: `Celovit vodnik za obisk ${attractionName} v mestu ${cityName}, ${stateProvince}, ${countryName}.`,
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
        name: `Kje se nahaja ${attractionName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${attractionName} se nahaja v Ljubljani v Sloveniji na naslovu Prešernov trg 1, 1000 Ljubljana.`,
        },
      },
      {
        '@type': 'Question',
        name: `Ali je obisk ${attractionShort} brezplačen?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Da, ${attractionName} je javni prostor in je vse leto odprt brez vstopnine, 24 ur na dan.`,
        },
      },
      {
        '@type': 'Question',
        name: `Katere glavne znamenitosti so v bližini ${attractionShort}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Med bližnjimi znamenitostmi so Tromostovje, Ljubljanski grad, Frančiškanska cerkev Marijinega oznanjenja in osrednja ljubljanska tržnica.`,
        },
      },
    ],
  };

  return (
    <html lang="sl" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={`${baseUrl}/`} />
        <meta property="og:image" content={heroImage} />
        <meta property="og:image:alt" content={`${attractionName} v ${cityName}`} />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
          crossOrigin="anonymous"
        />
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
        <NextIntlClientProvider locale={DEFAULT_LOCALE} messages={messages}>
          <Header />
          <main>
            <Hero />
            <Intro />
            <BasicInfo />
            <HoursSection />
            <TicketsSection />
            <TransportSection />
            <InfoSection />
            <RouteSection />
            <PhotoSpotsSection />
            <HotelsSection />
            <Gallery />
            <Reviews />
            <FAQSection />
            <MapEmbed />
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
