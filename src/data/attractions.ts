import entries from './attractions.json';
import type { TopicContent, TopicFaq } from './topics';

type Copy = { name: string; description: string; tip: string };
type Guide = { history: string; walk: string[]; photography: string; faq: TopicFaq[] };
export type AttractionImage = { src: string; source: string; author: string; license: string; caption?: Record<'en' | 'sl', string> };
type Attraction = {
  slug: string;
  address: string;
  operator: string;
  area: string;
  source?: string;
  en: Copy;
  sl: Copy;
  photo?: AttractionImage;
  gallery?: AttractionImage[];
  guide?: Record<'en' | 'sl', Guide>;
  rating?: { score: number; count: number; source: string };
};

const attractions: Attraction[] = entries;
export const newAttractions = attractions.filter(({ en }) => en.description);
export const existingAttractions = attractions.filter(({ en }) => !en.description);
export const newAttractionSlugs = newAttractions.map(({ slug }) => slug);

const bySlug = new Map(attractions.map((entry) => [entry.slug, entry]));
export const getAttraction = (slug: string) => bySlug.get(slug);
export const isAttractionLocale = (locale: string): locale is 'sl' | 'en' => locale === 'sl' || locale === 'en';

const routes: Record<string, [string, string]> = {
  market: ['The streets around the Central Market are pedestrianised. Walk from Prešeren Square via the Triple Bridge and Stritarjeva ulica.', 'Od Prešernovega trga pojdite čez Tromostovje po Stritarjevi ulici. Ulice okoli tržnice so namenjene pešcem.'],
  south: ['Cross the Triple Bridge and follow the river upstream through the pedestrian old town. For Trnovo, continue along Breg and Krakovski nasip.', 'Prečkajte Tromostovje in sledite Ljubljanici proti toku skozi staro mestno jedro. Za Trnovo nadaljujte po Bregu in Krakovskem nasipu.'],
  square: ['Start at Prešeren Square in the pedestrian centre. From the railway station, walk south via Miklošičeva cesta.', 'Začnite na Prešernovem trgu v območju za pešce. Z železniške postaje pridite po Miklošičevi cesti.'],
  east: ['From Prešeren Square, follow Petkovškovo nabrežje or Trubarjeva cesta east. From Ljubljana railway station, head south toward Trubarjeva cesta.', 'S Prešernovega trga pojdite vzhodno po Petkovškovem nabrežju ali Trubarjevi cesti. Z železniške postaje pojdite južno proti Trubarjevi cesti.'],
  west: ['From Prešeren Square, take Čopova ulica to Slovenska cesta. Continue west toward Tivoli via Cankarjeva cesta, or turn toward Republic Square for the civic district.', 'S Prešernovega trga pojdite po Čopovi ulici do Slovenske ceste. Za Tivoli nadaljujte po Cankarjevi cesti, za upravno četrt pa zavijte proti Trgu republike.'],
  zoo: ['Check Ljubljana’s LPP bus planner for the stop closest to the entrance on Večna pot.', 'V načrtovalniku LPP poiščite postajališče pri vhodu na Večni poti.'],
  castle: ['Walk up from Gornji trg, or take the castle funicular from Krekov trg. Check the castle site for operating hours.', 'Povzpnite se z Gornjega trga ali se na Krekovem trgu vkrcajte na grajsko vzpenjačo. Urnik preverite pri Ljubljanskem gradu.'],
};

export function attractionDetails(place: Attraction, locale: string) {
  const sl = locale === 'sl';
  const { operator } = place;
  const managers: Record<string, string> = {
    public: sl ? 'Mestna občina Ljubljana (javni prostor)' : 'City of Ljubljana (public space)',
    collective: sl ? 'Organizatorji posameznih prizorišč AKC Metelkova mesto' : 'Independent venue organisers at AKC Metelkova mesto',
    church: sl ? 'Pristojna župnija' : 'Local Roman Catholic parish',
    private: sl ? 'Zasebna stavba; dostop določa upravljavec prostora' : 'Private building; access depends on the venue operator',
    'preseren-monument': sl ? 'Mestna občina Ljubljana' : 'City of Ljubljana',
    'franciscan-church': sl ? 'Frančiškanski samostan Ljubljana' : 'Franciscan monastery of Ljubljana',
    'central-market': 'Ljubljanska parkirišča in tržnice',
    'ljubljana-cathedral': sl ? 'Stolna župnija sv. Nikolaja' : 'Cathedral parish of St Nicholas',
    'plecnik-house': sl ? 'Muzej in galerije mesta Ljubljane' : 'Museum and Galleries of Ljubljana',
    'tivoli-mansion': sl ? 'Mednarodni grafični likovni center' : 'International Centre of Graphic Arts',
    'gruber-palace': sl ? 'Arhiv Republike Slovenije' : 'Archives of the Republic of Slovenia',
    'krizanke': 'Festival Ljubljana',
    'cekin-mansion': sl ? 'Muzej novejše in sodobne zgodovine Slovenije' : 'National Museum of Contemporary History of Slovenia',
    'st-james-church': sl ? 'Župnija Ljubljana – Sv. Jakob' : 'Ljubljana St James Parish',
    'st-peters-church': sl ? 'Župnija Ljubljana – Sv. Peter' : 'Ljubljana St Peter Parish',
    'st-florian-church': sl ? 'Župnija Ljubljana – Sv. Jakob' : 'Ljubljana St James Parish',
    'trnovo-church': sl ? 'Župnija Ljubljana – Trnovo' : 'Ljubljana Trnovo Parish',
    'ursuline-church': sl ? 'Uršulinski samostan Ljubljana' : 'Ursuline monastery in Ljubljana',
    'ljubljana-castle': sl ? 'Javni zavod Ljubljanski grad' : 'Ljubljana Castle public institute',
    'urbanc-house': 'Galerija Emporium',
    'botanical-garden': sl ? 'Univerza v Ljubljani' : 'University of Ljubljana',
    'ljubljana-zoo': 'Živalski vrt Ljubljana',
    'ljubljana-town-hall': sl ? 'Mestna občina Ljubljana' : 'City of Ljubljana',
    'neboticnik': sl ? 'Dostop na teraso ureja Kavarna Nebotičnik' : 'Nebotičnik Café manages access to the terrace',
    'zois-mansion': sl ? 'Zois Apartments upravlja nastanitev v stavbi' : 'Zois Apartments operates the accommodation within the building',
    'cankar-hall': sl ? 'Javni zavod Cankarjev dom' : 'Cankarjev dom Cultural and Congress Centre',
    'ljubljana-opera': 'SNG Opera in balet Ljubljana',
    'republic-square': sl ? 'Javna ploščad Mestne občine Ljubljana. Sosednje stavbe imajo svoje upravljavce.' : 'City of Ljubljana public square. Adjacent buildings have their own operators.',
  };
  const isSquareSite = place.address.startsWith('Prešernov trg');
  const destination = `${place.sl.name}, ${place.address}, Ljubljana, Slovenia`;
  const travelMode = place.area === 'zoo' ? 'transit' : 'walking';
  return {
    manager: managers[place.slug] ?? managers[operator] ?? place.sl.name,
    source: place.source ?? (operator.startsWith('https://')
      ? operator
      : 'https://www.visitljubljana.com/en/visitors/sights-and-activities/'),
    transport: routes[isSquareSite ? 'square' : place.area][sl ? 1 : 0],
    map: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination)}`,
    directions: `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent('Prešernov trg, Ljubljana, Slovenia')}&destination=${encodeURIComponent(destination)}&travelmode=${travelMode}`,
    travelMode,
    access: operator === 'public' && place.slug !== 'ljubljana-town-hall'
      ? (sl ? 'Javni zunanji prostor' : 'Public outdoor space')
      : (sl ? 'Pred odhodom preverite urnik in pogoje dostopa.' : 'Check opening hours and admission before visiting.'),
  };
}

export function attractionTopic(slug: string, locale: string): TopicContent | null {
  const place = getAttraction(slug);
  if (!place?.guide || !isAttractionLocale(locale)) return null;
  const copy = place[locale];
  const guide = place.guide[locale];
  const sl = locale === 'sl';
  return {
    slug,
    title: `${copy.name} | Ljubljana · Prešernov trg`,
    description: copy.description,
    h1: copy.name,
    intro: copy.description,
    facts: [],
    sections: [
      { id: 'visit', title: sl ? 'Nasvet za obisk' : 'Visiting tips', paragraphs: [copy.tip] },
      { id: 'walking-route', title: sl ? 'Predlagana pot' : 'Suggested route', steps: guide.walk },
      { id: 'photo-spots', title: sl ? 'Kje fotografirati' : 'Photography spots', paragraphs: [guide.photography] },
    ],
    faq: guide.faq,
    related: newAttractions.filter((other) => other.slug !== slug && other.area === place.area).slice(0, 3).map((other) => other.slug),
    updated: sl ? 'Uredniški pregled: 23. november 2026' : 'Editorial review: 23 November 2026',
  };
}
