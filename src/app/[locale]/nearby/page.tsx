import LanguageToggle from '@/components/LanguageToggle';
import { nearbyLabels } from '@/data/nearby-labels';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { existingAttractions, isAttractionLocale, newAttractions } from '@/data/attractions';
import { BASE_URL, localeAlternates, localeUrl, routing, type Locale } from '@/i18n/routing';
import { getTopic } from '@/data/topics';
import Footer from '@/components/Footer';

type Params = { params: Promise<{ locale: string }> };

const copy: Record<Locale, { intro: string; language: string }> = {
  sl: { intro: 'Od Prešernovega trga nadaljujte do mostov, muzejev, cerkva in parkov v Ljubljani.', language: '' },
  en: { intro: 'Continue from Prešeren Square to Ljubljana’s bridges, museums, churches and parks.', language: '' },
  de: { intro: 'Vom Prešeren-Platz zu Ljubljanas Brücken, Museen, Kirchen und Parks.', language: 'Die einzelnen Reiseführer sind auf Englisch verfügbar.' },
  es: { intro: 'Desde la plaza Prešeren, descubre los puentes, museos, iglesias y parques de Liubliana.', language: 'Las guías de cada lugar están disponibles en inglés.' },
  it: { intro: 'Da piazza Prešeren, scopri i ponti, i musei, le chiese e i parchi di Lubiana.', language: 'Le schede delle singole attrazioni sono disponibili in inglese.' },
  zh: { intro: '从普列舍伦广场出发，探索卢布尔雅那的桥梁、博物馆、教堂和公园。', language: '景点详情提供英文版。' },
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  const current = locale as Locale;
  return {
    title: nearbyLabels[current],
    description: copy[current].intro,
    alternates: localeAlternates(current, '/nearby'),
    openGraph: { title: nearbyLabels[current], description: copy[current].intro, url: localeUrl(current, '/nearby') },
  };
}

export default async function NearbyPage({ params }: Params) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  const current = locale as Locale;
  setRequestLocale(current);
  const guideLocale = isAttractionLocale(current) ? current : 'en';
  const prefix = current === routing.defaultLocale ? '' : `/${current}`;
  const guides = [...newAttractions, ...existingAttractions].map((place) => {
    const language = getTopic(place.slug, guideLocale) ? guideLocale : 'en';
    return { place, language };
  });

  return (
    <>
      <main>
        <header className="px-4 py-14 sm:px-6" style={{ background: 'var(--bg-secondary)' }}>
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center justify-between gap-4">
              <a href={`${prefix}/`} className="underline" style={{ color: 'var(--accent)' }}>Prešernov trg</a>
              <LanguageToggle />
            </div>
            <h1 className="font-display mt-4 mb-3 text-3xl sm:text-5xl font-semibold">{nearbyLabels[current]}</h1>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>{copy[current].intro}</p>
            {copy[current].language && <p className="mt-2" style={{ color: 'var(--text-muted)' }}>{copy[current].language}</p>}
          </div>
        </header>
        <div className="section-padding">
          <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map(({ place, language }) => (
              <li key={place.slug}>
                <a href={localeUrl(language, place.slug).slice(BASE_URL.length)} hrefLang={language} className="block h-full rounded-xl p-5 transition-shadow hover:shadow-md" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
                  <h2 lang={language} className="font-display text-xl font-semibold">{place[language].name}</h2>
                  <p className="mt-2" style={{ color: 'var(--text-muted)' }}>{place.address}{language !== current && current === 'sl' && ' · EN'}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
