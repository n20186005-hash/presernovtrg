import Image from 'next/image';
import { attractionDetails, getAttraction, type AttractionImage } from '@/data/attractions';
import { attractionVisit, suggestedStay } from '@/data/attraction-visit';
import type { ReactNode } from 'react';
import type { Locale } from '@/i18n/routing';

export function AttractionPhoto({ photo, name, sl, hero = false }: {
  photo: AttractionImage;
  name: string;
  sl: boolean;
  hero?: boolean;
}) {
  const caption = photo.caption?.[sl ? 'sl' : 'en'];
  return (
    <figure>
      <Image
        src={photo.src}
        alt={caption ?? name}
        width={960}
        height={600}
        unoptimized
        className={hero ? "w-full aspect-[4/3] rounded-xl object-cover" : "w-full max-h-[32rem] rounded-xl object-contain"}
        loading={hero ? 'eager' : 'lazy'}
        style={{ background: 'var(--bg-tertiary)' }}
      />
      {photo.source && (
        <figcaption className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>
          {caption && <span className="block mb-1">{caption}</span>}
          <a href={photo.source} className="underline">{photo.author} · Wikimedia Commons</a>
          {' · '}
          {photo.license === 'PD' ? (sl ? 'Javna domena' : 'Public domain') : (
            <a href={photo.license} className="underline">
              {photo.license.includes('/zero/') ? 'CC0 1.0' : `CC ${photo.license.split('/').slice(4).join(' ').toUpperCase()}`}
            </a>
          )}
        </figcaption>
      )}
    </figure>
  );
}

type Place = NonNullable<ReturnType<typeof getAttraction>>;

const linkStyle = { color: 'var(--accent)' };
const panelStyle = { background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' };

function VisitSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-20">
      <h2 id={`${id}-heading`} className="font-display mb-4 text-2xl font-semibold sm:text-3xl">{title}</h2>
      <div className="space-y-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{children}</div>
    </section>
  );
}

export function AttractionRating({ rating, sl }: { rating: Place['rating']; sl: boolean }) {
  if (!rating) return null;
  const numbers = new Intl.NumberFormat(sl ? 'sl-SI' : 'en-GB');
  return (
    <>
      <strong>{numbers.format(rating.score)} / 5</strong>
      {' · '}{numbers.format(rating.count)} {sl ? 'ocen v Googlu' : 'Google reviews'}
    </>
  );
}

export default function AttractionDetails({ place, locale, intro }: { place: Place; locale: Locale; intro: string }) {
  const sl = locale === 'sl';
  const language = sl ? 'sl' : 'en';
  const visit = attractionVisit(place.slug, sl);
  const { manager, source, transport, map, directions, travelMode } = attractionDetails(place, locale);
  const guide = place.guide?.[language];
  const walk = guide?.walk ?? visit.walk ?? [];
  const rating = place.rating;
  const lodgingArea = place.address.startsWith('Prešernov trg') ? 'square' : place.area;
  const enOrSl = (en: string, translated: string) => sl ? translated : en;
  const title = place[language].name;
  const facts = [
    [enOrSl('Local name', 'Krajevno ime'), place.sl.name],
    [enOrSl('Attraction type', 'Vrsta znamenitosti'), visit.kind],
    [enOrSl('Address', 'Naslov'), `${place.address}, Ljubljana, ${enOrSl('Slovenia', 'Slovenija')}`],
    [enOrSl('Management', 'Upravljanje'), manager],
    [enOrSl('Suggested visit time', 'Priporočeni čas obiska'), visit.duration],
    [enOrSl('Opening hours', 'Odpiralni čas'), visit.hours],
    [enOrSl('Entry', 'Vstop'), visit.admission],
  ];

  return (
    <>
      <VisitSection id="discover-intro" title={enOrSl(`Discover ${title}`, `Raziščite · ${title}`)}>
        <p>{intro}</p>
      </VisitSection>

      <VisitSection id="visit" title={enOrSl('Visiting tips', 'Nasveti za obisk')}>
        <p>{place[language].tip || visit.tip}</p>
        <p>{enOrSl('Suggested time on site', 'Priporočeni čas na lokaciji')} · {visit.duration}</p>
      </VisitSection>

      <VisitSection id="highlights" title={enOrSl('Highlights', 'Posebnosti')}>
        <p>{visit.highlight}</p>
        <a href="#photo-spots" className="underline" style={linkStyle}>{enOrSl('Where to see and photograph it', 'Razgledi in fotografske točke')}</a>
      </VisitSection>

      <VisitSection id="about-attraction" title={enOrSl(`About ${title}`, `O znamenitosti · ${title}`)}>
        <div className="rounded-xl p-5" style={panelStyle}>
          <strong>{enOrSl('Site management', 'Upravljanje')}</strong>
          <p className="mt-1">{manager}</p>
          <a href={source} className="mt-2 inline-block underline" style={linkStyle}>{enOrSl('Site information', 'Informacije o lokaciji')}</a>
        </div>
      </VisitSection>

      <VisitSection id="visitor-info" title={enOrSl('Basic information', 'Osnovni podatki')}>
        <div className="overflow-x-auto rounded-xl" style={panelStyle}>
          <table className="w-full text-left">
            <tbody>
              {facts.map(([label, text]) => (
                <tr key={label}>
                  <th scope="row" className="w-[36%] px-4 py-3 align-top font-semibold" style={{ borderBottom: '1px solid var(--border-color)' }}>{label}</th>
                  <td className="px-4 py-3" style={{ borderBottom: '1px solid var(--border-color)' }}>{text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </VisitSection>

      <VisitSection id="opening-hours" title={enOrSl('Opening hours', 'Odpiralni čas')}>
        <p>{visit.hours}</p>
        <a href={visit.hoursUrl ?? source} className="underline" style={linkStyle}>{enOrSl('Operator or visitor information', 'Informacije upravljavca ali za obiskovalce')}</a>
      </VisitSection>

      <VisitSection id="ticket-prices" title={enOrSl('Tickets and admission', 'Vstopnice in vstopnina')}>
        <p>{visit.admission}</p>
        {visit.hoursUrl && (
          <a href={visit.ticketsUrl ?? visit.hoursUrl} className="underline" style={linkStyle}>{enOrSl('Check admission details', 'Preverite vstopnino in pogoje')}</a>
        )}
      </VisitSection>

      <VisitSection id="getting-there" title={enOrSl('Transport options', 'Možnosti prevoza')}>
        <p>{transport}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <a href={directions} className="underline" style={linkStyle}>
            {travelMode === 'walking'
              ? enOrSl('Walk from Prešeren Square', 'Peš s Prešernovega trga')
              : enOrSl('Transit from Prešeren Square', 'Z avtobusom s Prešernovega trga')}
          </a>
          <a href="https://www.lpp.si/" className="underline" style={linkStyle}>{enOrSl('LPP city buses', 'Mestni avtobusi LPP')}</a>
        </div>
      </VisitSection>

      <VisitSection id="history-and-culture" title={enOrSl('History, architecture and what to see', 'Zgodovina, arhitektura in zanimivosti')}>
        <p>{guide?.history ?? visit.discovery}</p>
        {!guide && <a href="#more-about-attraction" className="underline" style={linkStyle}>{enOrSl('Read the in-depth guide', 'Preberite podrobnejši vodnik')}</a>}
      </VisitSection>

      <VisitSection id="walking-route" title={enOrSl('Suggested visit route', 'Predlagana pot ogleda')}>
        <ol className="list-decimal space-y-3 pl-6">
          {walk.map((step) => <li key={step} className="pl-1">{step}</li>)}
        </ol>
      </VisitSection>

      <VisitSection id="visitor-notes" title={enOrSl('Visitor notes', 'Napotki za obiskovalce')}>
        <p>{visit.note}</p>
      </VisitSection>

      <VisitSection id="photo-spots" title={enOrSl('Photography spots', 'Kje fotografirati')}>
        <p>{guide?.photography ?? visit.photography}</p>
        {!!place.gallery?.length && (
          <div className="grid gap-4 sm:grid-cols-2">
            {place.gallery.map((image) => <AttractionPhoto key={image.src} photo={image} name={title} sl={sl} />)}
          </div>
        )}
      </VisitSection>

      <VisitSection id="where-to-stay" title={enOrSl('Where to stay nearby', 'Kje prenočiti v bližini')}>
        <p>{suggestedStay(lodgingArea, sl)}</p>
        <a href="/en/where-to-stay" hrefLang="en" className="underline" style={linkStyle}>
          {enOrSl('Prešeren Square accommodation guide', 'Vodnik po nastanitvah ob Prešernovem trgu (EN)')}
        </a>
      </VisitSection>

      <VisitSection id="visitor-reviews" title={enOrSl('Visitor ratings and reviews', 'Ocene obiskovalcev')}>
        {rating && (
          <p>
            <AttractionRating rating={rating} sl={sl} />
            {' · '}<a href={rating.source} className="underline" style={linkStyle}>Evendo</a>
            {' · '}{enOrSl('retrieved 23 November 2026', 'prebrano 23. novembra 2026')}
          </p>
        )}
        <p>{enOrSl('Find the current score, review count and comments on the listing for this location.', 'Trenutno oceno, število ocen in komentarje poiščite v zapisu za to lokacijo.')}</p>
        <a href={map} className="underline" style={linkStyle}>{enOrSl('Read reviews on Google Maps', 'Ocene na Google Zemljevidih')}</a>
      </VisitSection>

      <VisitSection id="location-guide" title={enOrSl('Address and map', 'Naslov in zemljevid')}>
        <p>{place.address}, Ljubljana</p>
        <a href={map} className="underline" style={linkStyle}>Google Maps · {place.sl.name}</a>
      </VisitSection>
    </>
  );
}
