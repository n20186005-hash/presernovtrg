import { getLocale } from 'next-intl/server';
import { isAttractionLocale } from '@/data/attractions';
import { nearbyLabels } from '@/data/nearby-labels';
import { BASE_URL, localeUrl, type Locale } from '@/i18n/routing';

const featureSlugs = ['butchers-bridge', 'ljubljana-town-hall', 'tivoli-park', 'national-gallery', 'plecnik-house', 'spica'] as const;

const labels: Record<Locale, { intro: string; all: string; names: string[] }> = {
  sl: {
    intro: 'S trga se sprehodite do mestnih mostov, galerij in parkov.',
    all: 'Vse znamenitosti v bližini',
    names: ['Mesarski most', 'Mestna hiša', 'Park Tivoli', 'Narodna galerija', 'Plečnikova hiša', 'Špica'],
  },
  en: {
    intro: 'Walk from Prešeren Square to Ljubljana’s bridges, galleries and parks.',
    all: 'See all nearby attractions',
    names: ['Butchers’ Bridge', 'Ljubljana Town Hall', 'Tivoli Park', 'National Gallery of Slovenia', 'Plečnik House', 'Špica Embankment'],
  },
  de: {
    intro: 'Vom Prešeren-Platz zu den Brücken, Galerien und Parks von Ljubljana.',
    all: 'Alle Sehenswürdigkeiten in der Nähe',
    names: ['Fleischerbrücke', 'Rathaus von Ljubljana', 'Tivoli-Park', 'Slowenische Nationalgalerie', 'Plečnik-Haus', 'Uferpark Špica'],
  },
  es: {
    intro: 'Sal de la plaza Prešeren hacia los puentes, las galerías y los parques de Liubliana.',
    all: 'Ver todos los lugares de interés cercanos',
    names: ['Puente de los Carniceros', 'Ayuntamiento de Liubliana', 'Parque Tivoli', 'Galería Nacional de Eslovenia', 'Casa de Plečnik', 'Paseo fluvial de Špica'],
  },
  it: {
    intro: 'Da piazza Prešeren raggiungi a piedi i ponti, le gallerie e i parchi di Lubiana.',
    all: 'Tutte le attrazioni nei dintorni',
    names: ['Ponte dei Macellai', 'Municipio di Lubiana', 'Parco Tivoli', 'Galleria nazionale della Slovenia', 'Casa di Plečnik', 'Lungofiume di Špica'],
  },
  zh: {
    intro: '从普列舍伦广场步行出发，探访卢布尔雅那的桥梁、画廊和公园。',
    all: '查看全部周边景点',
    names: ['屠夫桥', '卢布尔雅那市政厅', '蒂沃利公园', '斯洛文尼亚国家美术馆', '普列奇尼克故居', '什皮察河滨步道'],
  },
};

export default async function NearbyWalks() {
  const locale = await getLocale() as Locale;
  const guideLocale = isAttractionLocale(locale) ? locale : 'en';
  const copy = labels[locale];

  return (
    <section id="nearby-walks" className="section-padding" aria-labelledby="nearby-walks-heading" style={{ background: 'var(--bg-secondary)' }}>
      <div className="mx-auto max-w-5xl">
        <h2 id="nearby-walks-heading" className="font-display text-3xl font-semibold mb-3 sm:text-4xl">{nearbyLabels[locale]}</h2>
        <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>{copy.intro}</p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featureSlugs.map((slug, index) => (
            <li key={slug}>
              <a
                href={localeUrl(guideLocale, slug).slice(BASE_URL.length)}
                hrefLang={guideLocale}
                className="block h-full rounded-xl px-5 py-4 font-medium hover:underline"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
              >
                {copy.names[index]}
                {guideLocale !== locale && <span className="ml-2 text-sm" style={{ color: 'var(--text-muted)' }}>EN</span>}
              </a>
            </li>
          ))}
        </ul>
        <a href={localeUrl(locale, '/nearby').slice(BASE_URL.length)} className="mt-6 inline-block font-semibold underline" style={{ color: 'var(--accent)' }}>
          {copy.all}
        </a>
      </div>
    </section>
  );
}
