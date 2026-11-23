import records from './attraction-visit.json';

type Localized = [en: string, sl: string];
type VisitCopy = {
  tagline: string;
  highlight: string;
  note: string;
  tip?: string;
  discovery?: string;
  hours?: string;
  admission?: string;
  walk?: string[];
  photography?: string;
};
type VisitRecord = {
  kind: string;
  minutes: string;
  en: VisitCopy;
  sl: VisitCopy;
  hoursUrl?: string;
  ticketsUrl?: string;
};

const profiles: Record<string, VisitRecord> = records;
const kindLabels: Record<string, Localized> = {
  bridge: ['Bridge', 'Most'],
  civic: ['Civic building', 'Mestna upravna stavba'],
  monument: ['Public monument', 'Javni spomenik'],
  park: ['Public park', 'Javni park'],
  museum: ['Museum or gallery', 'Muzej ali galerija'],
  arts: ['Independent arts centre', 'Neodvisno kulturno središče'],
  venue: ['Performance venue', 'Prizorišče prireditev'],
  church: ['Church', 'Cerkev'],
  tower: ['Historic tower and café terrace', 'Zgodovinska stolpnica in terasa kavarne'],
  garden: ['University botanical garden', 'Univerzitetni botanični vrt'],
  archive: ['Historic palace and archive', 'Zgodovinska palača in arhiv'],
  house: ['Historic house exterior', 'Zunanjost zgodovinske hiše'],
  square: ['Public square', 'Javni trg'],
  zoo: ['Zoo', 'Živalski vrt'],
  shop: ['Historic commercial building', 'Zgodovinska trgovska stavba'],
  market: ['Indoor and outdoor market', 'Pokrita tržnica in stojnice na prostem'],
  castle: ['Historic castle', 'Zgodovinski grad'],
};

const publicHours: Localized = ['Outdoor public access. Event or maintenance closures can apply.', 'Javni zunanji prostor. Možne so začasne zapore zaradi prireditev ali vzdrževanja.'];
const freeAccess: Localized = ['No ticket for the outdoor landmark.', 'Za ogled zunanje znamenitosti ne potrebujete vstopnice.'];
const accessByKind: Record<string, { hours: Localized; admission: Localized }> = {
  civic: {
    hours: ['View the façade from Mestni trg. Courtyard, exhibitions and tours follow the city’s programme.', 'Pročelje je vidno z Mestnega trga. Dvorišče, razstave in ogledi sledijo mestnemu programu.'],
    admission: ['The façade is free to see. Check the listing for any guided visit or exhibition.', 'Ogled pročelja je brezplačen. Za vodeni ogled ali razstavo preverite objavo.'],
  },
  arts: {
    hours: ['Courtyards and independent venues have different access arrangements. Use the organiser’s schedule after dark.', 'Dvorišča in neodvisna prizorišča imajo ločene pogoje dostopa. Za večerni obisk preverite urnik organizatorja.'],
    admission: ['Event admission is set by each venue. An outdoor visit does not include entry to performances.', 'Vstopnino za prireditev določi posamezno prizorišče. Zunanji ogled ne vključuje predstav.'],
  },
  venue: {
    hours: ['Street-level exterior viewing is possible throughout the day. Doors, box office and interior access follow the event listing.', 'Zunanjost je vidna z ulice čez dan. Vhod, blagajna in dostop v notranjost sledijo objavi dogodka.'],
    admission: ['Free to see from the street. Performances and special visits use event-specific tickets.', 'Ogled z ulice je brezplačen. Za predstave in posebne oglede veljajo vstopnice posameznega dogodka.'],
  },
  church: {
    hours: ['Ask the parish about sightseeing hours. Mass and other services take priority.', 'Čas ogledov preverite pri župniji. Bogoslužje ima prednost pred turističnim ogledom.'],
    admission: ['Free to view from public space. Ask the parish about interior visits or guided access.', 'Ogled z javne površine je brezplačen. Za notranjost ali voden ogled vprašajte župnijo.'],
  },
  tower: {
    hours: ['The street frontage is always visible. Terrace and lift access follow the café’s published hours.', 'Pročelje je vidno z ulice. Dostop na teraso in do dvigala sledi objavljenemu urniku kavarne.'],
    admission: ['Street-level viewing is free. Check the café’s terms and menu before planning a terrace stop.', 'Ogled z ulice je brezplačen. Pred obiskom terase preverite pogoje in ponudbo kavarne.'],
  },
  archive: {
    hours: ['The exterior is visible from the street. Research visits follow the archive reading-room schedule.', 'Zunanjost je vidna z ulice. Obisk za raziskovanje sledi urniku arhivske čitalnice.'],
    admission: ['The exterior is free to view. Consult the archive for registration and any research service charges.', 'Zunanji ogled je brezplačen. Za prijavo in morebitno plačilo storitev se obrnite na arhiv.'],
  },
  house: {
    hours: ['The frontage can be seen from the public pavement. Plan this as an exterior stop.', 'Pročelje je vidno z javnega pločnika. Načrtujte zunanji ogled.'],
    admission: ['Free to see from the street.', 'Ogled z ulice je brezplačen.'],
  },
  shop: {
    hours: ['View the frontage from the square. For the interior, follow the department store’s trading hours.', 'Pročelje si oglejte s trga. Za notranjost velja odpiralni čas veleblagovnice.'],
    admission: ['No ticket for viewing the façade. Inside is a working shop.', 'Ogled pročelja je brezplačen. V notranjosti deluje trgovina.'],
  },
};

export function attractionVisit(slug: string, sl: boolean) {
  const record = profiles[slug];
  const index = sl ? 1 : 0;
  const copy = record[sl ? 'sl' : 'en'];
  const defaults = accessByKind[record.kind];
  return {
    ...copy,
    kind: kindLabels[record.kind][index],
    duration: `${record.minutes} min`,
    hours: copy.hours ?? (defaults?.hours ?? publicHours)[index],
    admission: copy.admission ?? (defaults?.admission ?? freeAccess)[index],
    hoursUrl: record.hoursUrl,
    ticketsUrl: record.ticketsUrl,
  };
}

const stays: Record<string, Localized> = {
  market: ['Stay near the pedestrian old town for an early start at the market and river crossings. If arriving with luggage, ask the hotel where vehicles can stop outside the pedestrian zone.', 'Za zgodnji obisk tržnice in mostov izberite nastanitev ob starem mestu. Če pridete s prtljago, vprašajte nastanitev, kje je izstop iz vozila ob območju za pešce.'],
  square: ['The streets north of Prešeren Square put both the station and old town within reach. Ask for an inward-facing room if evening square activity matters to you.', 'Ulice severno od Prešernovega trga so blizu postaje in starega mesta. Za mirnejši večer vprašajte za sobo, obrnjeno stran od trga.'],
  south: ['Choose Breg or Trnovo if you plan to follow the river upstream on foot. Ask about doorstep access if arriving by car.', 'Za sprehode proti toku izberite Breg ali Trnovo. Če pridete z avtom, preverite dostop do nastanitve.'],
  west: ['The streets around Slovenska cesta and Cankarjeva work well for combining Tivoli with the museum and theatre district on foot.', 'Okolica Slovenske ceste in Cankarjeve je praktična za peš obisk Tivolija, muzejev in gledališč.'],
  east: ['Stay near the railway station or Tabor for this part of town. If you book close to a performance venue, check whether there is an evening event.', 'Za ta del mesta izberite okolico železniške postaje ali Tabor. Če rezervirate ob prizorišču, preverite večerni program.'],
  zoo: ['For a zoo-focused visit, choose a place with a straightforward connection to the ZOO bus stop or with parking suited to your plans. The old town also works as a base if you allow time for transit.', 'Za obisk živalskega vrta izberite nastanitev z dobro povezavo do postajališča ZOO ali ustreznim parkiranjem. Iz starega mesta načrtujte še čas za prevoz.'],
  castle: ['A room near the old town or Krekov trg makes the lower funicular station easy to reach. Check pedestrian access and slopes if bringing heavy luggage.', 'Iz starega mesta ali okolice Krekovega trga je spodnja postaja vzpenjače blizu. Pri težji prtljagi preverite dostop in naklone.'],
};

export function suggestedStay(area: string, sl: boolean) {
  return stays[area][sl ? 1 : 0];
}
