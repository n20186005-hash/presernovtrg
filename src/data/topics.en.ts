import type { TopicContent, TopicSlug } from './topics';

export const EN_TOPICS: Record<TopicSlug, TopicContent> = {
  history: {
    slug: 'history',
    title: 'Prešeren Square History: From Medieval Gate to Ljubljana Centre',
    description:
      'How Prešernov trg became Prešeren Square: the medieval town gate, the 1895 earthquake rebuild, the 1905 Prešeren monument, Ravnikar\u2019s 1987\u201388 redesign and the car-free square of today.',
    h1: 'The History of Prešeren Square (Prešernov trg)',
    intro:
      'Prešeren Square looks like a single design, but it is a palimpsest: a medieval crossing, a baroque church, a Secession rebuild after an earthquake, a national monument, and a late-20th-century pedestrian redesign. This page walks through the layers in order, so you can read the square as a timeline rather than just a photo stop.',
    facts: [
      { label: 'First form', value: 'A crossing by the medieval town gate, south of the old-town core' },
      { label: '1646\u20131660', value: 'Franciscan Church of the Annunciation built, closing the square to the south' },
      { label: '1895', value: 'Earthquake destroys much of the area; rebuilt in Secession (Art Nouveau) style' },
      { label: '1905', value: 'Bronze monument to France Pre\u0161eren by Ivan Zajec unveiled in the centre' },
      { label: '1987\u20131988', value: 'Architect Edvard Ravnikar reshapes the square into its circular form' },
      { label: '2007', value: 'Renovation completed; the square becomes fully pedestrian' },
    ],
    sections: [
      {
        id: 'gate',
        title: 'A crossing at the town gate',
        paragraphs: [
          'Before it was a square, the site was a road junction. The medieval town lay to the north; this spot sat just outside the gate, where the route along the Ljubljanica met the road leading north. Junctions like this one became squares almost automatically \u2014 carts waited, traders stopped, and buildings clustered along the edges.',
          'That original function still shapes the place. The square is not a closed garden square: it is a widened crossing, with streets entering from several directions and the bridge axis running straight through it.',
        ],
      },
      {
        id: 'church',
        title: 'The pink church closes the southern side (1646\u20131660)',
        paragraphs: [
          'The Franciscan Church of the Annunciation, built between 1646 and 1660, gave the junction its first architectural anchor. Its early-baroque fa\u00e7ade closes the southern edge of the square, and for two centuries the pink wall was the backdrop of every event held here.',
          'The church is still an active monastery church \u2014 which is why the square\u2019s soundscape mixes tourists, traffic-free strollers and church bells.',
        ],
      },
      {
        id: 'earthquake',
        title: 'The 1895 earthquake and the Secession rebuild',
        paragraphs: [
          'The Easter earthquake of 1895 destroyed or damaged much of Ljubljana, including buildings around this junction. The rebuilding decade gave the square the architectural face most visitors photograph today: Vienna Secession and Art Nouveau fa\u00e7ades with curved lines, floral ornament and tall windows.',
          'When you look at the north and east sides of the square, you are largely looking at post-1895 construction. That is why the square reads as \u201cfin de si\u00e8cle Central Europe\u201d rather than medieval.',
        ],
      },
      {
        id: 'monument',
        title: '1905: the poet takes the centre',
        paragraphs: [
          'In 1905 the bronze statue of France Pre\u0161eren, by sculptor Ivan Zajec, was unveiled at the centre of the square. Placing the national poet in the middle of the city\u2019s main junction was a deliberate statement about language, nation and culture \u2014 and it renamed the square in practice, if not yet officially.',
          'The monument turned the square from a thoroughfare into a stage. Gatherings, demonstrations, celebrations and markets all orient themselves around the statue to this day. See the dedicated page on the monument and the story of Julija.',
        ],
      },
      {
        id: 'ravnikar',
        title: '1987\u20131988: Ravnikar\u2019s round square',
        paragraphs: [
          'By the late 20th century the junction had become a funnel of traffic. Architect Edvard Ravnikar reshaped it into the circular, pedestrian-oriented space you see now, with radial paving patterns drawing the eye to the monument at the centre.',
          'The 1987\u201388 design is the reason the square feels like a room rather than a street: buildings form the walls, the paving forms the floor, and the monument sits exactly where a table would.',
        ],
      },
      {
        id: 'today',
        title: 'Car-free and protected',
        paragraphs: [
          'After further renovation, the square was closed to traffic in 2007. It has been a cultural monument of national importance since 1991, which restricts what can be changed on or around it.',
          'Today the square hosts the city\u2019s defining public moments \u2014 the Christmas market and lights, Pre\u0161eren Day on 8 February, concerts and gatherings \u2014 while remaining, for everyone else, simply the place where Ljubljana meets.',
        ],
      },
    ],
    faq: [
      {
        question: 'When was Pre\u0161eren Square built?',
        answer:
          'There is no single date. The junction existed in medieval times, the church dates from 1646\u20131660, most surrounding buildings were rebuilt after 1895, and the present circular layout was designed in 1987\u20131988.',
      },
      {
        question: 'Why is it called Pre\u0161eren Square?',
        answer:
          'It is named after France Pre\u0161eren (1800\u20131849), Slovenia\u2019s national poet. His 1905 monument stands at the centre, and locals still refer to meeting \u201cpod spomenikom\u201d \u2014 under the monument.',
      },
      {
        question: 'What happened in the 1895 earthquake?',
        answer:
          'The earthquake damaged much of Ljubljana. The square\u2019s surroundings were rebuilt in the Secession (Art Nouveau) style, which is why the architecture around the square looks so different from the medieval old town a few streets away.',
      },
      {
        question: 'Who designed the current square?',
        answer:
          'Edvard Ravnikar, in 1987\u20131988, who gave it the circular, pedestrian layout with radial paving. The square has been fully car-free since 2007.',
      },
      {
        question: 'Is the whole square a protected monument?',
        answer:
          'The square has been declared a cultural monument of national importance since 1991, so the layout, monument and surrounding fa\u00e7ades are protected.',
      },
    ],
    related: ['preseren-monument', 'france-preseren', 'architecture', 'map'],
    updated:
      'Sources: Visit Ljubljana (Pre\u0161ernov trg and monument pages), City of Ljubljana heritage information. Facts checked October 2026.',
  },

  'preseren-monument': {
    slug: 'preseren-monument',
    title: 'Pre\u0161eren Monument: The Poet, the Muse & Ljubljana\u2019s Meeting Point',
    description:
      'What the 1905 Pre\u0161eren monument shows, who made it, the legend of Julija, and where to stand to read the statue and the square behind it.',
    h1: 'The Pre\u0161eren Monument at Pre\u0161eren Square',
    intro:
      'Almost every photograph of Ljubljana passes through this statue, and almost every local meeting starts under it. This page explains what you are actually looking at \u2014 the figures, the symbols, the story behind the muse\u2019s gaze \u2014 and where to stand to see it properly.',
    facts: [
      { label: 'Unveiled', value: '1905, at the centre of the square' },
      { label: 'Sculptor', value: 'Ivan Zajec' },
      { label: 'Material', value: 'Bronze on a stone pedestal' },
      { label: 'Subject', value: 'France Pre\u0161eren, national poet, with a muse above him' },
      { label: 'Access', value: 'Outdoors, free, visible at any hour' },
      { label: 'Local name', value: 'Meeting \u201cpod spomenikom\u201d \u2014 under the monument' },
    ],
    sections: [
      {
        id: 'figures',
        title: 'What the statue shows',
        paragraphs: [
          'The monument shows France Pre\u0161eren standing with a book, and above him a winged muse holding a laurel branch \u2014 poetry, fame and inspiration. The composition is deliberately asymmetric: the poet looks out over the square, while the muse rises behind him, which is why the statue reads differently from every angle.',
          'Zajec\u2019s bronze was placed at the exact centre of Ravnikar\u2019s later redesign, so the radial paving of the square converges on the pedestal like a target.',
        ],
      },
      {
        id: 'julija',
        title: 'The legend of Julija',
        paragraphs: [
          'Local lore says the muse does not look at the poet: she gazes towards the window of Julija Primic, the woman Pre\u0161eren loved, whose family home once stood near the square. Whether or not Zajec intended the allusion, the story explains why the statue feels like a love story as much as a national monument.',
          'Pre\u0161eren\u2019s unfulfilled love for Julija inspired some of his best-known poems, including the waltz that later became the Slovenian national anthem.',
        ],
      },
      {
        id: 'poet',
        title: 'Why the poet matters',
        paragraphs: [
          'France Pre\u0161eren (1800\u20131849) wrote in Slovenian at a time when the language had little high-culture status. His poetry fixed the literary language, and his Zdravljica (\u201cA Toast\u201d) provided the words of the national anthem. Putting him in the middle of the capital\u2019s main square was a statement about what the city stood for.',
          'That is also why 8 February, Pre\u0161eren Day, is a cultural holiday in Slovenia and why the square is its focal point.',
        ],
      },
      {
        id: 'viewing',
        title: 'Where to stand to read the monument',
        paragraphs: [
          'From the Triple Bridge end you get the classic frontal view: statue, church fa\u00e7ade behind it, square in the foreground. From the north-east corner you see the poet against the Secession fa\u00e7ades. Up close, walk a slow circle \u2014 the book, the laurel and the drapery only resolve at close range.',
          'Early morning and the blue hour after sunset are the two times the bronze reads best; midday sun flattens it.',
        ],
      },
    ],
    faq: [
      {
        question: 'Who made the Pre\u0161eren monument?',
        answer: 'The bronze statue was sculpted by Ivan Zajec and unveiled in 1905.',
      },
      {
        question: 'Who is the figure above the poet?',
        answer:
          'A muse holding a laurel branch, symbolising poetry. Local tradition links her gaze to the window of Julija, Pre\u0161eren\u2019s unrequited love.',
      },
      {
        question: 'Can you visit the monument at night?',
        answer:
          'Yes. It stands outdoors in a public square that never closes, and it is lit after dark \u2014 one of the reasons the evening walk is popular.',
      },
      {
        question: 'Is the monument free to see?',
        answer: 'Yes. It is in a public square with no ticket and no opening hours.',
      },
      {
        question: 'Why do locals say \u201cpod spomenikom\u201d?',
        answer:
          'It means \u201cunder the monument\u201d and is the standard meeting point in Ljubljana \u2014 the square\u2019s statue is the city\u2019s default rendezvous.',
      },
    ],
    related: ['history', 'france-preseren', 'map', 'photography', 'one-hour-walk'],
    updated:
      'Sources: Visit Ljubljana (Pre\u0161eren monument), standard references on Ivan Zajec. The Julija story is told as local legend. Checked October 2026.',
  },

  map: {
    slug: 'map',
    title: 'Pre\u0161eren Square Map: Entrances, Streets & Meeting Points',
    description:
      'Orientation for Pre\u0161ernov trg: the four ways in, which streets lead where, the easiest meeting points, and the mistakes visitors make with Ljubljana\u2019s squares.',
    h1: 'Pre\u0161eren Square: Map, Entrances & Meeting Points',
    intro:
      'The square is small, round and surrounded by lookalike streets \u2014 which is exactly why people get lost within 100 metres of it. This page gives you the mental map: what lies on each side, which streets lead where, and where to stand when you are waiting for someone.',
    facts: [
      { label: 'Address', value: 'Pre\u0161ernov trg 1, 1000 Ljubljana' },
      { label: 'Coordinates', value: '46.0515 N, 14.5061 E' },
      { label: 'Google Maps Plus Code', value: '3G24+HC Ljubljana, Slovenia' },
      { label: 'West exit', value: 'Triple Bridge (Tromostovje) across the Ljubljanica' },
      { label: 'North exit', value: 'Old-town lanes towards Mestni trg and the Town Hall' },
      { label: 'South side', value: 'Riverside promenade along the Ljubljanica' },
      { label: 'North-east exit', value: 'Slovenska cesta towards the bus & train station' },
    ],
    sections: [
      {
        id: 'sides',
        title: 'What lies on each side',
        paragraphs: [
          'The square is bounded by its landmarks: the Triple Bridge leaves from the west, the pink Franciscan Church closes the south, Secession fa\u00e7ades line the north and east, and the Pre\u0161eren monument stands at the centre. Once you fix those four facts, the square stops being a maze.',
          'The river runs just south of the church. From the square you can drop to the riverside promenade in under a minute, which is the fastest way to reach the market and the Dragon Bridge on foot.',
        ],
      },
      {
        id: 'entries',
        title: 'The four ways in',
        bullets: [
          'From the west \u2014 over the Triple Bridge from Republic Square (Trg republike) and the left bank.',
          'From the north \u2014 through the pedestrian lanes of the old town, about 4\u20136 minutes from Mestni trg and the Town Hall.',
          'From the south-east \u2014 up from the riverside promenade, which connects to the market and the Dragon Bridge.',
          'From the north-east \u2014 along Slovenska cesta from the bus and train station, about a 10-minute walk.',
        ],
      },
      {
        id: 'meeting',
        title: 'Easy meeting points',
        paragraphs: [
          'The default is \u201cpod spomenikom\u201d \u2014 under the Pre\u0161eren monument. It is visible from every entrance, impossible to miss, and what locals will suggest.',
          'Backups that also work: the steps of the pink church on the south side, the middle span of the Triple Bridge, or any of the caf\u00e9 terraces on the north side. If you arrange a meeting point with a group, name the landmark, not the street \u2014 street names around the square change every block.',
        ],
      },
      {
        id: 'mistakes',
        title: 'Orientation mistakes to avoid',
        bullets: [
          'Pre\u0161eren Square is not Congress Square (Kongresni trg): that one sits further north-west by the castle and the university, about a 6\u20138 minute walk away.',
          'The castle is not \u201cjust behind\u201d the square \u2014 it is a 15\u201320 minute uphill walk through the old town.',
          'The market is not on the square \u2014 it is about 8\u201310 minutes away along the river.',
          'Cars cannot reach the square; if your driver says \u201cI\u2019ll drop you at Pre\u0161eren Square\u201d, they mean the pedestrian edge, a 1\u20132 minute walk in.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do I find Pre\u0161eren Square from the bus station?',
        answer:
          'Leave the station and follow Slovenska cesta south-west for about 700 m \u2014 roughly a 10-minute walk. The square opens up in front of you; the Triple Bridge is straight ahead.',
      },
      {
        question: 'Is Pre\u0161eren Square the same as Congress Square?',
        answer:
          'No. Congress Square (Kongresni trg) lies north-west of the old town near the castle. The two are a 6\u20138 minute walk apart and look quite different \u2014 keep the names straight when booking or meeting.',
      },
      {
        question: 'Where do locals meet at Pre\u0161eren Square?',
        answer:
          'Under the Pre\u0161eren monument \u2014 \u201cpod spomenikom\u201d. It is the standard rendezvous point in Ljubljana.',
      },
      {
        question: 'Can I drive to the square?',
        answer:
          'No. The square and the surrounding old town are a pedestrian zone. Park at an edge-of-centre garage and walk in, or ask a taxi to drop you at the pedestrian edge.',
      },
      {
        question: 'What is the closest river access from the square?',
        answer:
          'The riverside promenade starts a minute south of the church. From there, the market is an easy 8\u201310 minute walk along the water.',
      },
    ],
    related: ['station-to-square', 'one-hour-walk', 'triple-bridge', 'congress-square'],
    updated: 'Sources: Visit Ljubljana, OpenStreetMap geometry. Distances checked October 2026.',
  },

  'triple-bridge': {
    slug: 'triple-bridge',
    title: 'Triple Bridge (Tromostovje): Ple\u010dnik\u2019s Ljubljana Landmark',
    description:
      'How to recognise the three spans of Tromostovje, what Jo\u017ee Ple\u010dnik designed in 1931\u20131932, and how the bridge connects Pre\u0161eren Square with the old town.',
    h1: 'The Triple Bridge (Tromostovje)',
    intro:
      'The Triple Bridge is the first thing most visitors notice when they reach the square \u2014 and the thing they most often photograph wrongly. Three spans, one silhouette, one architect: here is how to read it.',
    facts: [
      { label: 'Architect', value: 'Jo\u017ee Ple\u010dnik' },
      { label: 'Built', value: '1931\u20131932, replacing an older crossing' },
      { label: 'Spans', value: 'Three: a wider central bridge flanked by two narrower ones' },
      { label: 'Connects', value: 'Pre\u0161eren Square (right bank) with Republic Square side (left bank)' },
      { label: 'Access', value: 'Pedestrian only, free, open at all hours' },
    ],
    sections: [
      {
        id: 'silhouette',
        title: 'Three bridges, one silhouette',
        paragraphs: [
          'The trick to recognising Tromostovje is to stop seeing \u201cone bridge\u201d. There is a central, wider span that carried the main flow, and two slimmer side bridges added as pedestrian routes. From the square, the three openings line up into a single rhythmic fa\u00e7ade of balustrades, pillars and lamps.',
          'That triple rhythm is why the bridge looks wider than it is: you are seeing three crossings stacked side by side, all pointing at the monument behind you.',
        ],
      },
      {
        id: 'plecnik',
        title: 'Ple\u010dnik\u2019s design',
        paragraphs: [
          'Jo\u017ee Ple\u010dnik shaped much of interwar Ljubljana, and the Triple Bridge is his most photographed move. He rebuilt the crossing in stone in 1931\u20131932, adding the side spans, stone balustrades and the tall lamp standards that make the bridge read as a square in miniature rather than a piece of infrastructure.',
          'The balustrades are wide enough to lean on \u2014 and they are the classic place to watch the river and the square at the same time.',
        ],
      },
      {
        id: 'connection',
        title: 'How it connects to the square',
        paragraphs: [
          'The bridge is the square\u2019s western gate. Everything that arrives from Republic Square, the university side and the funicular to the castle passes across those three spans before entering the square. In practice, the bridge is where the square begins.',
          'Because it is the main axis, it is also the natural start of any walking route that leaves the square \u2014 see the one-hour walk for a route that uses it.',
        ],
      },
      {
        id: 'views',
        title: 'Best views of and from the bridge',
        bullets: [
          'From the square, centred on the middle span, with the church on the right.',
          'From the bridge looking back: the monument framed by the side bridges.',
          'From river level on the promenade: all three spans with the square rising behind.',
          'At night: the lamps reflect in the Ljubljanica \u2014 the strongest long-exposure frame in the centre.',
        ],
      },
    ],
    faq: [
      {
        question: 'Why is it called the Triple Bridge?',
        answer:
          'Because three parallel spans cross the river side by side \u2014 a wider central bridge and two narrower side bridges \u2014 forming one continuous crossing.',
      },
      {
        question: 'Who designed Tromostovje?',
        answer:
          'Jo\u017ee Ple\u010dnik rebuilt it in stone in 1931\u20131932, on the site of an older bridge, adding the side spans and its distinctive balustrades.',
      },
      {
        question: 'Can cars use the Triple Bridge?',
        answer:
          'No. It is a pedestrian crossing, like the square it serves.',
      },
      {
        question: 'Where does the bridge lead?',
        answer:
          'West across the Ljubljanica towards Republic Square (Trg republike) and the old-town streets beyond; east into Pre\u0161eren Square.',
      },
      {
        question: 'Is the Triple Bridge free?',
        answer: 'Yes \u2014 it is a public bridge in a pedestrian zone, open at all hours.',
      },
    ],
    related: ['map', 'one-hour-walk', 'river-bridges-walk', 'evening-walk'],
    updated: 'Sources: Visit Ljubljana, Ljubljana tourism material on Ple\u010dnik. Checked October 2026.',
  },

  'franciscan-church': {
    slug: 'franciscan-church',
    title: 'Franciscan Church of the Annunciation: Visiting Ljubljana\u2019s Pink Church',
    description:
      'The pink church on Pre\u0161eren Square: what to see on the fa\u00e7ade and inside, whether entry is free, mass times, and how to visit respectfully.',
    h1: 'The Franciscan Church of the Annunciation',
    intro:
      'The pink church is the square\u2019s southern wall and its most photographed building. It is also a working monastery church \u2014 which shapes when you can go in, what you can do inside, and how to behave. Here is what to know before you step out of the sun.',
    facts: [
      { label: 'Built', value: '1646\u20131660, early Baroque' },
      { label: 'Position', value: 'Closes the southern side of Pre\u0161eren Square' },
      { label: 'Entry', value: 'Free; donations welcome' },
      { label: 'Opening', value: 'Generally open to visitors during the day; mass times and closures posted on site' },
      { label: 'Status', value: 'Active Franciscan monastery church' },
    ],
    sections: [
      {
        id: 'exterior',
        title: 'Reading the fa\u00e7ade',
        paragraphs: [
          'The church was built between 1646 and 1660 and gives the square its warm pink colour. Look up: the fa\u00e7ade is organised in two tiers with a triangular gable, and the bell tower rises beside it. The pink plaster is not decoration \u2014 it is the original surface, restored over the centuries.',
          'From the square, the fa\u00e7ade is the backdrop of the monument; from the river promenade, you see the church\u2019s flank and the tower against the sky, which is the better architectural view.',
        ],
      },
      {
        id: 'inside',
        title: 'Inside the church',
        paragraphs: [
          'The interior is baroque: a single wide nave, side chapels, ornate altars and frescoed surfaces. Entry is free and donations are welcome. It is a church in use, not a museum \u2014 you may find a service in progress, and then it is better to wait or come back later.',
          'Mass times and any closures are posted at the entrance; there is no single timetable that fits every day of the year, which is why this guide does not print one.',
        ],
      },
      {
        id: 'etiquette',
        title: 'Visiting etiquette',
        bullets: [
          'Dress as you would for any church service \u2014 shoulders and knees covered is the safe default.',
          'Keep quiet; the space is small and echoes carry.',
          'Photography: ask before photographing people, and never during a service.',
          'Do not enter the monastery areas that are closed to visitors \u2014 follow the signs.',
        ],
      },
      {
        id: 'combine',
        title: 'Combine it with',
        paragraphs: [
          'The church is one point on the square, not a separate trip: pair it with the Pre\u0161eren monument directly opposite and the Triple Bridge a minute away. If you have an hour, the one-hour walk threads all three together with the market.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is the Franciscan Church free to enter?',
        answer:
          'Yes. Entry to the church is free and donations are welcome. The square itself is, of course, free and open around the clock.',
      },
      {
        question: 'What are the opening hours?',
        answer:
          'The church is generally open to visitors during the day, but hours vary with services and church events. Mass times and notices are posted at the entrance \u2014 check there rather than relying on a single printed timetable.',
      },
      {
        question: 'Why is the church pink?',
        answer:
          'The pink colour comes from its plastered fa\u00e7ade. It was built in 1646\u20131660 in the early Baroque style and is one of the most recognisable buildings in Ljubljana.',
      },
      {
        question: 'Can I attend mass as a visitor?',
        answer:
          'Yes, visitors are welcome at services. Services are usually in Slovenian; arrive a few minutes early and sit towards the back.',
      },
      {
        question: 'Is the church accessible?',
        answer:
          'The square and church front are step-free. The interior has a threshold at the entrance; if step-free access matters, ask at the door \u2014 the friars are used to the question.',
      },
    ],
    related: ['map', 'preseren-monument', 'one-hour-walk', 'rainy-day'],
    updated: 'Sources: Visit Ljubljana (Franciscan Church), on-site notices. Checked October 2026.',
  },

  'station-to-square': {
    slug: 'station-to-square',
    title: 'Ljubljana Station to Pre\u0161eren Square: The 10-Minute Walk',
    description:
      'Step-by-step walking directions from Ljubljana\u2019s train and bus station to Pre\u0161eren Square: distance, time, luggage notes, and the bus alternative.',
    h1: 'From the Station to Pre\u0161eren Square',
    intro:
      'Ljubljana\u2019s train and bus stations sit side by side, and Pre\u0161eren Square is a straight, flat 10-minute walk away. This page gives the turn-by-turn route, what changes when you have luggage, and when a bus or taxi makes more sense.',
    facts: [
      { label: 'Distance', value: 'About 700 m' },
      { label: 'Walking time', value: 'About 10 minutes at a normal pace' },
      { label: 'Surface', value: 'Paved, flat, step-free the whole way' },
      { label: 'Main street', value: 'Slovenska cesta' },
      { label: 'Cost', value: 'Free \u2014 walking beats the bus fare at this distance' },
    ],
    sections: [
      {
        id: 'route',
        title: 'The route, step by step',
        bullets: [
          'Leave the bus station (or train station) onto the main approach and find Slovenska cesta heading south-west.',
          'Follow Slovenska cesta straight; it passes shops, banks and the edge of the pedestrian zone.',
          'Continue as the street narrows into the old town \u2014 keep going towards the river.',
          'The square opens in front of you: the Triple Bridge straight ahead, the pink church to your right, the monument in the middle.',
        ],
      },
      {
        id: 'luggage',
        title: 'With luggage',
        paragraphs: [
          'The route is flat and step-free, so wheeling a suitcase is realistic \u2014 but the last stretch is pedestrian paving with the usual cobbles and a few level changes at shop entrances. Allow 15 minutes rather than 10 if you are pulling a case.',
          'If you are staying near the station, remember you will repeat this walk several times. Many visitors with heavy bags take a taxi for the first arrival and walk afterwards.',
        ],
      },
      {
        id: 'alternatives',
        title: 'Bus and taxi alternatives',
        paragraphs: [
          'Several city-bus lines run between the station area and stops within a few minutes\u2019 walk of the square; with a single fare at \u20ac1.50 on Urbana it is cheap but rarely faster than walking at this distance.',
          'A taxi from the station rank to the pedestrian edge of the square is a short metered ride \u2014 worth it with luggage, late at night, or in bad weather. Ask for \u201cPre\u0161ernov trg\u201d or the Triple Bridge.',
        ],
      },
      {
        id: 'arriving-late',
        title: 'Arriving late or early',
        paragraphs: [
          'The square is public and lit, so late arrivals are not a problem in themselves. What changes at night is the walk from the station: Slovenska cesta stays busy, but if you arrive after midnight with luggage, a taxi is the simpler choice.',
        ],
      },
    ],
    faq: [
      {
        question: 'How far is Pre\u0161eren Square from the station?',
        answer: 'About 700 metres \u2014 roughly a 10-minute walk along Slovenska cesta.',
      },
      {
        question: 'Is the walk wheelchair accessible?',
        answer:
          'Yes. It is paved, flat and step-free for essentially the whole distance, which makes it one of the easiest approaches to the square.',
      },
      {
        question: 'Can I take a bus instead?',
        answer:
          'Yes, several lines stop near the square, but at 700 metres walking is usually faster than waiting for a bus.',
      },
      {
        question: 'How much is a taxi from the station?',
        answer:
          'It is a short metered ride to the pedestrian edge of the old town; agree on the meter and ask for Pre\u0161eren Square or the Triple Bridge.',
      },
      {
        question: 'Does the walk work at night?',
        answer:
          'Yes \u2014 the streets are lit and the square is public. With luggage late at night, a taxi is more comfortable.',
      },
    ],
    related: ['map', 'bus-urbana', 'airport-to-square', 'accessibility'],
    updated: 'Sources: OpenStreetMap geometry, Visit Ljubljana. Distances and times checked October 2026.',
  },

  'airport-to-square': {
    slug: 'airport-to-square',
    title: 'Ljubljana Airport to Pre\u0161eren Square: Bus, Shuttle & Taxi',
    description:
      'Getting from Ljubljana Jo\u017ee Pu\u010dnik Airport to Pre\u0161eren Square: the airport bus, shared shuttles, taxis, prices and the last walk into the pedestrian zone.',
    h1: 'From the Airport to Pre\u0161eren Square',
    intro:
      'The airport sits about 26 km north of the city. There is no train, so the choice is bus, shared shuttle or taxi \u2014 and every option ends with the same short walk into the pedestrian centre. Here is how the options compare.',
    facts: [
      { label: 'Distance', value: 'About 26 km' },
      { label: 'By bus', value: 'About 30\u201340 minutes; roughly \u20ac4\u20135 with an Urbana transfer fare' },
      { label: 'By taxi', value: 'Metered, typically 30\u201340 minutes; the priciest but most direct option' },
      { label: 'Last leg', value: 'Every option ends with an 8\u201310 minute walk, or a drop at the pedestrian edge' },
      { label: 'Luggage', value: 'Taxi or shuttle is easier with cases; the bus has limited luggage space' },
    ],
    sections: [
      {
        id: 'bus',
        title: 'Public bus',
        paragraphs: [
          'The airport is served by city buses operated by LPP. The ride to the city takes about 30\u201340 minutes depending on the stop; from the city-centre stop it is a further 8\u201310 minute walk to the square. Fares follow the city system \u2014 with an Urbana card a single ride is \u20ac1.50 including transfers within 90 minutes.',
          'Line numbers and timetables change with the season, so check the current LPP timetable before you fly. If your flight lands late, confirm there is still a bus after you clear arrivals.',
        ],
      },
      {
        id: 'shuttle',
        title: 'Shared shuttle & pre-booked transfer',
        paragraphs: [
          'Shared airport shuttles and pre-booked transfers run between the terminal and central drop-off points. They cost more than the bus but less than a private taxi, and they handle luggage properly. Book ahead if you arrive outside the busiest hours.',
          'A shuttle drops you at or near the pedestrian edge of the centre, from which the square is a 1\u20132 minute walk \u2014 confirm the exact drop-off point when booking.',
        ],
      },
      {
        id: 'taxi',
        title: 'Taxi & ride-hailing',
        paragraphs: [
          'Taxis wait outside arrivals and apps work normally. The ride is metered; ask the driver for \u201cPre\u0161ernov trg\u201d or the Triple Bridge and they will take you to the closest point cars may reach. From there it is a minute on foot.',
          'With luggage, a group, or a late arrival, this is the least stressful option \u2014 budget for it rather than being surprised.',
        ],
      },
      {
        id: 'night',
        title: 'Late-night and early-morning arrivals',
        paragraphs: [
          'The airport runs a limited schedule at night. If you land after the last bus, plan a taxi or a pre-booked transfer in advance; do not assume a bus will still be running when you clear arrivals.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is there a train from the airport to the city?',
        answer: 'No. The options are bus, shared shuttle, or taxi.',
      },
      {
        question: 'How much is the bus from the airport?',
        answer:
          'Airport bus fares sit above the standard city fare \u2014 roughly \u20ac4\u20135. Check the current LPP price list before travelling.',
      },
      {
        question: 'How long does it take to reach Pre\u0161eren Square?',
        answer:
          'About 30\u201340 minutes by bus or taxi, plus the final 8\u201310 minute walk (or 1\u20132 minutes if you are dropped at the pedestrian edge).',
      },
      {
        question: 'Can a taxi drive to the square itself?',
        answer:
          'No \u2014 the square is in a pedestrian zone. Taxis stop at the nearest drivable point, a 1\u20132 minute walk away.',
      },
      {
        question: 'What if I arrive after midnight?',
        answer:
          'Buses may have stopped. Arrange a taxi or pre-booked transfer before you fly rather than relying on the last connection.',
      },
    ],
    related: ['bus-urbana', 'station-to-square', 'map', 'where-to-stay'],
    updated:
      'Sources: LPP (fares and timetables), airport transfer operators. Fares reflect the price list effective 1 September 2026; checked October 2026.',
  },

  'bus-urbana': {
    slug: 'bus-urbana',
    title: 'Bus to Pre\u0161eren Square & Using the Urbana Card',
    description:
      'Ljubljana city buses to Pre\u0161eren Square: the \u20ac1.50 Urbana single fare with 90-minute transfers, where buses stop, and how validation works.',
    h1: 'City Buses & the Urbana Card',
    intro:
      'Ljubljana\u2019s buses are run by LPP and paid for mostly through the Urbana stored-value card. This page covers the current fare, where buses stop near the square, and the small habits that keep you out of trouble with inspectors.',
    facts: [
      { label: 'Single fare', value: '\u20ac1.50 with Urbana, including transfers within 90 minutes' },
      { label: 'Price list', value: 'Effective 1 September 2026 (LPP)' },
      { label: 'Cash', value: 'Costs more than Urbana \u2014 compare the LPP price list' },
      { label: 'Validation', value: 'Required on boarding; inspectors are active' },
      { label: 'Tram', value: 'None \u2014 Ljubljana has no tram service today' },
    ],
    sections: [
      {
        id: 'fare',
        title: 'What a ride costs',
        paragraphs: [
          'Since 1 September 2026 the Urbana single fare is \u20ac1.50, and that fare includes transfers for 90 minutes \u2014 so a bus plus a second bus inside the window costs the same as one ride. Paying in cash on board costs more, which is why visitors who ride more than once should buy an Urbana card.',
          'Day passes and multi-ride options exist; the right choice depends on how many rides you plan. Check the LPP price list for the current menu.',
        ],
      },
      {
        id: 'stops',
        title: 'Where buses stop near the square',
        paragraphs: [
          'The square itself is pedestrian, so no bus stops on it. Several lines stop within 2\u20135 minutes\u2019 walk, along Slovenska cesta and the streets at the edge of the pedestrian zone. For any given destination, check the LPP route map for the closest stop rather than assuming a line passes the square.',
          'If you are heading to the castle, note that buses do not climb to it either \u2014 the practical options are the funicular from near the market or the walk up through the old town.',
        ],
      },
      {
        id: 'etiquette',
        title: 'Using the system smoothly',
        bullets: [
          'Buy or top up an Urbana card at a newsagent or the LPP sales point before your first ride.',
          'Validate on boarding \u2014 every time, including after a transfer.',
          'Press the stop button in good time; drivers stop only on request.',
          'Keep your ticket until you leave the bus; inspectors check at the door.',
        ],
      },
      {
        id: 'when-not',
        title: 'When the bus is not worth it',
        paragraphs: [
          'The old town is compact: most sights around the square are 2\u201315 minutes apart on foot. Buses make sense for the airport run, the edge districts and bad weather \u2014 not for hopping between two old-town stops.',
        ],
      },
    ],
    faq: [
      {
        question: 'How much is a single bus ticket in Ljubljana?',
        answer:
          'With an Urbana card a single ride is \u20ac1.50 and includes transfers for 90 minutes (price list effective 1 September 2026). Cash fares are higher.',
      },
      {
        question: 'Do I need exact change on the bus?',
        answer:
          'Avoid relying on cash at all \u2014 it costs more and drivers cannot always give change. Use an Urbana card.',
      },
      {
        question: 'Is there a tram in Ljubljana?',
        answer: 'No. The city operates buses only; older guides that mention a tram are out of date.',
      },
      {
        question: 'Which bus stops at Pre\u0161eren Square?',
        answer:
          'None \u2014 the square is a pedestrian zone. Nearby stops on Slovenska cesta and the edge of the centre are 2\u20135 minutes away; check the LPP route map for your line.',
      },
      {
        question: 'Do I have to validate the ticket?',
        answer: 'Yes. Validate on boarding, including after a transfer; inspectors are active and fines apply.',
      },
    ],
    related: ['station-to-square', 'airport-to-square', 'parking', 'map'],
    updated: 'Sources: LPP price list effective 1 September 2026. Checked October 2026.',
  },

  parking: {
    slug: 'parking',
    title: 'Parking Near Pre\u0161eren Square: Garages & Walk-In Routes',
    description:
      'Where to park near Pre\u0161eren Square: the car-free core, garages within walking distance, driving approaches, and what to check before you enter a garage.',
    h1: 'Parking Near Pre\u0161eren Square',
    intro:
      'You cannot park at Pre\u0161eren Square \u2014 it is the centre of a pedestrian zone. What you can do is leave the car at an edge-of-centre garage and walk in. This page covers where those garages are, how long the walk takes, and what to check before you drive in.',
    facts: [
      { label: 'At the square', value: 'No parking \u2014 fully pedestrian' },
      { label: 'Garages', value: 'Paid, at the edge of the pedestrian zone' },
      { label: 'Typical walk-in', value: '5\u201310 minutes from the nearest garages' },
      { label: 'Payment', value: 'Card or cash per garage; prices and time limits vary' },
      { label: 'Check', value: 'Vehicle height limits and opening hours before entering' },
    ],
    sections: [
      {
        id: 'core',
        title: 'Why the core is closed to cars',
        paragraphs: [
          'The square and the surrounding old town are a pedestrian zone enforced by access restrictions. Driving into the core means barriers, cameras and fines \u2014 and no parking at the destination anyway. Plan to park outside and walk.',
          'That also means navigation apps will route you to the nearest garage, not to the square itself. Trust the garage, not the pin.',
        ],
      },
      {
        id: 'garages',
        title: 'Garages within walking distance',
        paragraphs: [
          'Paid garages sit at the edges of the centre \u2014 the Congress Square direction to the north-west and the streets towards the station to the north-east are the usual choices. From either, the walk to the square runs about 5\u201310 minutes through the pedestrian zone.',
          'Exact names, prices, height limits and opening hours change with operators and seasons; check the garage signage and the city\u2019s parking information before you commit, especially if you drive a van or have a roof box.',
        ],
      },
      {
        id: 'approach',
        title: 'Driving approach',
        bullets: [
          'Approach on the ring roads and follow signs for the city centre garages (centre / garange / parkiranje).',
          'Do not follow signs to the old town itself \u2014 they lead into restricted streets.',
          'If your garage is full, continue to the next edge location rather than circling the core.',
          'Note your garage level and row before you leave \u2014 the walk back at night is not the time to search.',
        ],
      },
      {
        id: 'tips',
        title: 'Practical tips',
        bullets: [
          'Height limits: check the sign at the entrance; older garages in the centre are low.',
          'Opening hours: some close overnight \u2014 relevant if you return late from dinner.',
          'EV charging exists in several city garages; availability varies.',
          'A day of walking makes parking the biggest single cost of a car-based visit \u2014 consider the bus if you are staying centrally.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I park at Pre\u0161eren Square?',
        answer:
          'No. The square and the surrounding old town are a pedestrian zone with no public parking.',
      },
      {
        question: 'Where should I park instead?',
        answer:
          'Use a paid garage at the edge of the pedestrian zone \u2014 the Congress Square direction or the streets towards the station are the usual options, each about 5\u201310 minutes\u2019 walk from the square.',
      },
      {
        question: 'How much does parking cost?',
        answer:
          'Prices vary by garage and operator, with daily caps common. Check the rates displayed at the entrance or the city\u2019s parking information.',
      },
      {
        question: 'Are there height limits?',
        answer:
          'Yes, and they matter in the centre. Check the limit sign before entering, especially with a van, roof box or bike rack.',
      },
      {
        question: 'Is there park-and-ride?',
        answer:
          'Park-and-ride options exist at the city edge combined with bus services; they make sense if you are only passing through the centre.',
      },
    ],
    related: ['map', 'bus-urbana', 'accessibility', 'one-hour-walk'],
    updated: 'Sources: City of Ljubljana parking information, garage operators. Checked October 2026.',
  },

  accessibility: {
    slug: 'accessibility',
    title: 'Pre\u0161eren Square: Wheelchair & Mobility Access Guide',
    description:
      'Step-free routes to and around Pre\u0161eren Square for wheelchair users and visitors with limited mobility: surfaces, ramps, accessible toilets and what to avoid.',
    h1: 'Wheelchair & Mobility Access at Pre\u0161eren Square',
    intro:
      'The square itself is one of the easiest places in Ljubljana to reach on wheels \u2014 flat, open and step-free. The difficulty is not the square; it is the cobbled, hilly old town around it. This page separates the two so you can plan around the hard parts.',
    facts: [
      { label: 'The square', value: 'Flat, step-free, granite paving \u2014 wheelchair and buggy friendly' },
      { label: 'From the station', value: 'Step-free, about 700 m along Slovenska cesta' },
      { label: 'Riverside', value: 'Level promenade along the Ljubljanica' },
      { label: 'Old town lanes', value: 'Cobbled, some steep \u2014 plan alternate routes' },
      { label: 'Castle', value: 'Uphill \u2014 not a step-free destination on foot' },
    ],
    sections: [
      {
        id: 'square',
        title: 'The square itself',
        paragraphs: [
          'The circular square is level and step-free, with wide paved areas and benches with backrests along the edges. The monument, church front and caf\u00e9 terraces can all be reached without stairs. The main caveat is surface: granite paving with joints can rumble a wheelchair, and cobbles appear where the side streets meet the square.',
          'The Triple Bridge spans are wide and essentially level, though the stone surface is firm; take the central span if you want the simplest line.',
        ],
      },
      {
        id: 'getting-there',
        title: 'Getting there accessibly',
        paragraphs: [
          'From the bus and train station the walk is flat and step-free along Slovenska cesta \u2014 the best approach if you arrive by intercity transport. From the airport, a taxi or pre-booked transfer that drops at the pedestrian edge avoids the bus steps and luggage racks.',
          'Taxis can reach the edge of the pedestrian zone but not the square itself; ask for the closest drop point to the Triple Bridge.',
        ],
      },
      {
        id: 'nearby',
        title: 'Nearby sights: easy and harder',
        bullets: [
          'Easy: the riverside promenade towards the market \u2014 level and wide.',
          'Easy: Republic Square (Trg republike) across the Triple Bridge \u2014 short and flat.',
          'Harder: the old-town lanes towards the castle \u2014 cobbles and gradients.',
          'Harder: the castle itself \u2014 a uphill walk; the funicular is an option but check its current accessibility before relying on it.',
        ],
      },
      {
        id: 'facilities',
        title: 'Facilities and help',
        paragraphs: [
          'Ljubljana\u2019s public toilets are free, and accessible toilets exist in the pedestrian centre and at transport hubs \u2014 locations and hours are posted on site. Cafés around the square mostly have level access; doorways in older buildings can be narrow.',
          'If you need assistance with public transport, LPP runs accessibility services for passengers with reduced mobility \u2014 arrange help in advance rather than on the day.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Pre\u0161eren Square wheelchair accessible?',
        answer:
          'Yes. The square is flat and step-free, with wide paved areas and benches. The main challenge is cobbled side streets, not the square itself.',
      },
      {
        question: 'Can wheelchair users cross the Triple Bridge?',
        answer:
          'The spans are wide and essentially level with firm stone surfaces; the central span is the simplest line.',
      },
      {
        question: 'Are there accessible toilets near the square?',
        answer:
          'Yes \u2014 Ljubljana\u2019s public toilets are free and accessible facilities exist in the pedestrian centre and at transport hubs; locations and hours are posted on site.',
      },
      {
        question: 'Is Ljubljana Castle accessible?',
        answer:
          'It sits above the city and is reached by a uphill walk; check the current status of the funicular and castle accessibility arrangements before planning around it.',
      },
      {
        question: 'Does LPP offer assistance?',
        answer:
          'LPP provides accessibility support for passengers with reduced mobility \u2014 contact them in advance to arrange help.',
      },
    ],
    related: ['map', 'station-to-square', 'public-toilets', 'family-walk'],
    updated: 'Sources: Visit Ljubljana (essentials and accessibility), LPP accessibility information. Checked October 2026.',
  },

  'one-hour-walk': {
    slug: 'one-hour-walk',
    title: 'One Hour in Ljubljana: Walking Route from Pre\u0161eren Square',
    description:
      'A compact one-hour walking route from Pre\u0161eren Square: the Triple Bridge, Republic Square, the river, the market and the old town \u2014 with timings and what to skip.',
    h1: 'One-Hour Walking Route from Pre\u0161eren Square',
    intro:
      'If you have a single hour, this is the route that shows you Ljubljana\u2019s greatest hits without rushing: the square, Ple\u010dnik\u2019s bridge, the river, the market and a lap of the old town. Everything is free, flat and within 800 metres of the start.',
    facts: [
      { label: 'Duration', value: 'About 60 minutes at a strolling pace' },
      { label: 'Distance', value: 'Roughly 2\u20132.5 km, flat' },
      { label: 'Cost', value: 'Free \u2014 all sights on this route are outdoors' },
      { label: 'Best time', value: 'Morning for light and few crowds; evening for atmosphere' },
      { label: 'Surface', value: 'Paved and cobbled \u2014 flat shoes' },
    ],
    sections: [
      {
        id: 'plan',
        title: 'The route at a glance',
        table: {
          columns: ['Stop', 'Minutes', 'What you do'],
          rows: [
            ['Pre\u0161eren Square & monument', '10', 'Circle the statue, read the church fa\u00e7ade'],
            ['Triple Bridge (Tromostovje)', '5', 'Cross to the middle span and look back'],
            ['Republic Square (Trg republike)', '5', 'Quick loop past the university-side buildings'],
            ['Riverside promenade', '10', 'Walk along the Ljubljanica towards the market'],
            ['Central Market', '15', 'Walk the open-air stalls under the colonnade'],
            ['Old-town lanes back north', '10', 'Return via the lanes to Mestni trg'],
            ['Pre\u0161eren Square', '5', 'Finish at the monument or a caf\u00e9 terrace'],
          ],
        },
      },
      {
        id: 'stops',
        title: 'Stop by stop',
        paragraphs: [
          'Start at the monument: walk a full circle so you see the poet, the muse and the church behind them. Cross the Triple Bridge slowly \u2014 the view back to the square is the classic frame. On the far side, Republic Square opens up; a short loop is enough.',
          'Drop to the river and follow the promenade towards the market. The market is worth a slow 15 minutes even if you buy nothing \u2014 the colonnade, the open stalls and the river traffic are the point. Then cut back north through the old-town lanes, which deposit you a few streets from the square.',
        ],
      },
      {
        id: 'skip',
        title: 'What to skip if you are short on time',
        bullets: [
          'Skip Republic Square if you are behind \u2014 the bridge view already gives you its essence.',
          'Shorten the market to a single pass along the colonnade.',
          'Skip the old-town lanes and return along the river instead \u2014 same distance, easier walking.',
        ],
      },
      {
        id: 'extend',
        title: 'If you have longer',
        paragraphs: [
          'Add the castle (15\u201320 minutes uphill plus visiting time), a museum, or the Tivoli parks to the east. The half-day and full-day itineraries build this same route out into longer plans.',
        ],
      },
    ],
    faq: [
      {
        question: 'How long does the walk take?',
        answer: 'About 60 minutes at a relaxed pace, covering roughly 2\u20132.5 km.',
      },
      {
        question: 'Is the route free?',
        answer: 'Yes \u2014 every stop is outdoors in public space, with no tickets.',
      },
      {
        question: 'Is it good with children?',
        answer:
          'Yes. It is flat, short and full of small discoveries \u2014 bridges, boats, market stalls. The family route adds rest points and toilets.',
      },
      {
        question: 'When is the best time to walk it?',
        answer:
          'Morning for soft light and fewer people; late afternoon into the evening for atmosphere and lit fa\u00e7ades.',
      },
      {
        question: 'Do I need to book anything?',
        answer: 'No. The route is self-guided and every stop is public.',
      },
    ],
    related: ['map', 'half-day-itinerary', 'one-day-itinerary', 'triple-bridge'],
    updated: 'Sources: Visit Ljubljana, OpenStreetMap. Distances and times are estimates, checked October 2026.',
  },

  'christmas-market': {
    slug: 'christmas-market',
    title: 'Ljubljana Christmas Market at Pre\u0161eren Square (2026\u20132027)',
    description:
      'Dates, layout and visiting strategy for the Ljubljana Christmas market around Pre\u0161eren Square: 27 November 2026 to 3 January 2027, stalls, food and crowd timing.',
    h1: 'Ljubljana Christmas Market at Pre\u0161eren Square',
    intro:
      'In December the square turns into the heart of Ljubljana\u2019s festive season. This page covers the confirmed 2026\u20132027 dates, how the stalls are laid out, and how to time your visit so you actually enjoy it.',
    facts: [
      { label: 'Season dates', value: '27 November 2026 \u2013 3 January 2027' },
      { label: 'Switch-on', value: '27 November 2026, 17:00\u201317:30 at the square' },
      { label: 'Entry', value: 'Free \u2014 it is a public square' },
      { label: 'Layout', value: 'Stalls around the square and along the riverfront' },
      { label: 'Verify', value: 'Exact stall map and daily hours follow the official programme' },
    ],
    sections: [
      {
        id: 'dates',
        title: 'Dates and daily pattern',
        paragraphs: [
          'The 2026\u20132027 season runs from 27 November 2026 to 3 January 2027. Daily opening hours vary by stall and by day of the week, and the busiest period is the first two weekends after the switch-on.',
          'Some stalls close on specific holidays \u2014 if you are travelling on 24, 25 or 31 December or 1 January, check the official programme before you plan around the market.',
        ],
      },
      {
        id: 'layout',
        title: 'Where the stalls are',
        paragraphs: [
          'The market spreads around Pre\u0161eren Square itself and continues towards the riverfront, so the route through it follows the square\u2019s circular shape. The monument stays visible in the middle, which makes the square easy to navigate even when it is packed.',
          'Treat the market as a loop rather than a destination: enter from the Triple Bridge side, circle the square, continue along the river, and exit towards the old-town lanes.',
        ],
      },
      {
        id: 'food',
        title: 'What to expect',
        paragraphs: [
          'Expect the usual festive mix: hot drinks, baked goods, Slovenian dishes, sweets and gift stalls. Prices are market prices, not restaurant prices, and most stalls take cards \u2014 but carry some cash for the smallest ones.',
          'This guide names categories rather than stalls: we are not a commercial directory, and stall line-ups change every year.',
        ],
      },
      {
        id: 'timing',
        title: 'Crowd strategy',
        bullets: [
          'Weekday mornings and early afternoons are calm; the first weekend after switch-on is the peak.',
          'The hour after dark is the busiest \u2014 and also the prettiest. Choose deliberately.',
          'If you want photos of the square without crowds, come before 10:00 or after 21:00.',
          'Warm layers matter: the square is open and the river breeze is cold.',
        ],
      },
      {
        id: 'combine',
        title: 'Combine with the lights route',
        paragraphs: [
          'The market pairs naturally with the evening lights walk: do the stalls at dusk, then follow the lit route along the river and old town. The lights page has the timing and the switch-on details.',
        ],
      },
    ],
    faq: [
      {
        question: 'When is the Ljubljana Christmas market in 2026?',
        answer: 'The season runs from 27 November 2026 to 3 January 2027.',
      },
      {
        question: 'Where is the market?',
        answer:
          'It spreads around Pre\u0161eren Square and along the riverfront; the exact stall map is published with the official programme each year.',
      },
      {
        question: 'Is the Christmas market free?',
        answer: 'Yes \u2014 entry is free; you only pay for what you eat or buy.',
      },
      {
        question: 'When are the lights switched on?',
        answer:
          'The switch-on at Pre\u0161eren Square is planned for 27 November 2026, 17:00\u201317:30 local time.',
      },
      {
        question: 'When is it least crowded?',
        answer:
          'Weekday mornings and early afternoons, and the first or last hour of the day. The first weekend after the switch-on is the peak.',
      },
    ],
    related: ['christmas-lights', 'evening-walk', 'rainy-day', 'food-and-cafes'],
    updated:
      'Sources: Visit Ljubljana (Festive December programme) for the 2026\u20132027 dates and switch-on time. Checked October 2026; re-verify daily hours closer to the season.',
  },

  'christmas-lights': {
    slug: 'christmas-lights',
    title: 'Ljubljana Christmas Lights: Switch-On & Evening Walk (2026)',
    description:
      'The Pre\u0161eren Square lights switch-on on 27 November 2026 at 17:00, plus a 60\u201375 minute evening lights route along the river and through the old town.',
    h1: 'Christmas Lights in Ljubljana: Switch-On & Evening Route',
    intro:
      'Ljubljana does December with light rather than noise. The moment that starts it is the switch-on at Pre\u0161eren Square; after that, the city becomes a walking route of lit bridges, fa\u00e7ades and trees. This page covers the ceremony and a route that shows the lights at their best.',
    facts: [
      { label: 'Switch-on', value: '27 November 2026, 17:00\u201317:30, Pre\u0161eren Square' },
      { label: 'Season', value: 'Lights run through the festive season into early January' },
      { label: 'Cost', value: 'Free \u2014 public spaces' },
      { label: 'Route length', value: 'About 60\u201375 minutes at a strolling pace' },
      { label: 'Bring', value: 'Warm layers \u2014 the square is open to the river breeze' },
    ],
    sections: [
      {
        id: 'switch-on',
        title: 'The switch-on moment',
        paragraphs: [
          'The lights at Pre\u0161eren Square are switched on on 27 November 2026 between 17:00 and 17:30 local time. The square fills up well before the countdown, so arrive 20\u201330 minutes early if you want a clear view of the monument and the church fa\u00e7ade.',
          'The ceremony is short. The real event is the first ten minutes afterwards, when the whole square lights up and everyone photographs it at once.',
        ],
      },
      {
        id: 'route',
        title: 'A 60\u201375 minute lights route',
        bullets: [
          'Start at Pre\u0161eren Square after dark \u2014 monument, church fa\u00e7ade and the lit caf\u00e9 terraces.',
          'Cross the Triple Bridge: the lamps reflect in the Ljubljanica \u2014 the best night frame of the centre.',
          'Follow the riverside promenade towards the market, where stall lighting continues the theme.',
          'Loop back through the old-town lanes \u2014 fa\u00e7ade lighting and shop windows.',
          'Finish back at the square for a second look, now that you know the route.',
        ],
      },
      {
        id: 'photos',
        title: 'Photographing the lights',
        bullets: [
          'Blue hour \u2014 just after sunset \u2014 balances sky and lights better than full darkness.',
          'Use the bridge balustrade as a tripod rest for the river reflections.',
          'The monument lit against the church is the classic frame; wait for a gap in the crowd.',
          'Phones handle this scene well; a tripod is better but often impractical in the crowd.',
        ],
      },
      {
        id: 'getting-home',
        title: 'Getting home late',
        paragraphs: [
          'The centre stays lively on December evenings. When you finish, the walk back to a hotel is short if you are staying centrally; if you are heading out of the centre, check the last bus times before you set out \u2014 evening frequencies drop outside the core.',
        ],
      },
    ],
    faq: [
      {
        question: 'When are the Ljubljana Christmas lights switched on?',
        answer:
          'At Pre\u0161eren Square on 27 November 2026, between 17:00 and 17:30 local time.',
      },
      {
        question: 'How long do the lights stay up?',
        answer:
          'Through the festive season into early January; the Christmas market season runs to 3 January 2027.',
      },
      {
        question: 'What is the best time to see them?',
        answer:
          'Blue hour just after sunset, when the sky still holds colour and the lights have come on.',
      },
      {
        question: 'Is there a charge for the lights route?',
        answer: 'No \u2014 the route runs through public streets and squares.',
      },
      {
        question: 'Can I combine the lights with the Christmas market?',
        answer:
          'Yes \u2014 do the market stalls at dusk, then follow the lights route; the two overlap around the square and the river.',
      },
    ],
    related: ['christmas-market', 'evening-walk', 'one-hour-walk', 'new-years-eve'],
    updated:
      'Sources: Visit Ljubljana (Festive December programme) for the 2026 switch-on time. Checked October 2026; re-verify the programme closer to the date.',
  },

  'where-to-stay': {
    slug: 'where-to-stay',
    title: 'Where to Stay Near Pre\u0161eren Square: Area Guide',
    description:
      'Compare the areas around Pre\u0161eren Square for a stay: the pedestrian core and riverfront, the old-town lanes, and the station direction \u2014 with luggage and noise trade-offs.',
    h1: 'Where to Stay Near Pre\u0161eren Square',
    intro:
      'Ljubljana is small, so almost any central hotel puts you within walking distance of the square. The real choice is between atmosphere and practicality: the pedestrian core is charming and loud-adjacent, the station direction is cheap and easy with luggage. Here is how the areas compare.',
    facts: [
      { label: 'Pedestrian core & riverfront', value: 'Walking distance to everything; quietest nights away from the main streets' },
      { label: 'Old-town lanes', value: 'Most atmospheric; cobbles and stairs challenge luggage' },
      { label: 'Station direction', value: 'About 10 minutes\u2019 walk; easiest with bags; more budget options' },
      { label: 'Season pricing', value: 'December and summer weekends are the peaks \u2014 book early' },
      { label: 'This guide', value: 'Compares areas, not individual properties' },
    ],
    sections: [
      {
        id: 'areas',
        title: 'Three areas compared',
        table: {
          columns: ['Area', 'Walk to square', 'Best for', 'Watch out for'],
          rows: [
            ['Pedestrian core & riverfront', '2\u20135 min', 'First-time visitors, evening walks', 'Prices; event nights are louder'],
            ['Old-town lanes', '3\u20138 min', 'Atmosphere, photographers', 'Cobbles and stairs with luggage'],
            ['Station direction', 'About 10 min', 'Early trains, budget, easy arrivals', 'Less atmosphere; repeat the walk'],
          ],
        },
      },
      {
        id: 'luggage',
        title: 'Luggage and late arrivals',
        paragraphs: [
          'If you arrive by train or intercity bus, staying on the station side removes the luggage problem entirely \u2014 the walk to the square is flat and you can drop bags before exploring. If you arrive by plane at night, the same logic applies.',
          'In the old-town lanes, cobbles and occasional steps make wheels miserable. Ask the property how far the nearest drivable drop-off is before booking a room deep in the lanes.',
        ],
      },
      {
        id: 'noise',
        title: 'Noise and nightlife',
        paragraphs: [
          'The square itself is lively but not a nightlife strip; the louder streets are a few blocks away. Rooms facing inner courtyards sleep better than rooms facing main streets, and in December the market season adds evening activity around the square.',
          'If you sleep light, ask for a courtyard-facing room \u2014 in older buildings this makes a bigger difference than the star rating.',
        ],
      },
      {
        id: 'booking',
        title: 'Booking timing',
        bullets: [
          'December (market season) and summer weekends fill first \u2014 book months ahead.',
          'Weekday rates outside peak periods are noticeably lower.',
          'Apartments are common and useful for families; check whether the building has a lift.',
          'Cancellation terms vary; direct bookings sometimes beat platforms on older properties.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is it better to stay near Pre\u0161eren Square or the station?',
        answer:
          'For a first short visit, near the square \u2014 you will walk past it constantly. For early trains, luggage or budget, the station direction is about 10 minutes away and easier.',
      },
      {
        question: 'Is the square noisy at night?',
        answer:
          'The square stays lively into the evening, especially in December, but the loudest streets are a few blocks away. Courtyard-facing rooms sleep best.',
      },
      {
        question: 'Are old-town hotels hard to reach with luggage?',
        answer:
          'They can be \u2014 cobbles and steps are common. Check how far the nearest car-accessible drop-off is before booking.',
      },
      {
        question: 'When should I book for the Christmas market?',
        answer:
          'As early as possible: the market season (27 November 2026 \u2013 3 January 2027) is one of the two peak periods of the year.',
      },
      {
        question: 'Does this site recommend specific hotels?',
        answer:
          'No. This is an independent, non-profit guide; we compare areas and practical trade-offs rather than list properties.',
      },
    ],
    related: ['station-to-square', 'one-hour-walk', 'christmas-market', 'map'],
    updated: 'General area guidance; no property recommendations. Checked October 2026.',
  },

  'france-preseren': {
    slug: 'france-preseren',
    title: 'France Prešeren: Who He Was & Why Ljubljana’s Square Bears His Name',
    description:
      'France Prešeren (1800–1849), Slovenia’s national poet, and the story of how a lyric poet came to anchor the city’s main square and its national identity.',
    h1: 'Who Was France Prešeren?',
    intro:
      'You stand on a square named after a man who never held power and who died before the square took his name. France Prešeren is to Slovenia what Dante is to Italy or Mickiewicz to Poland: the poet who gave a small language its modern literary voice. This page explains who he was, what he wrote, and why his bronze figure sits at the centre of Ljubljana.',
    facts: [
      { label: 'Born', value: '3 December 1800, Vrba (Upper Carniola)' },
      { label: 'Died', value: '8 February 1849, Kranj' },
      { label: 'Key work', value: 'Zdravljica (The Toast), 1844' },
      { label: 'National anthem', value: 'The 7th stanza of Zdravljica' },
      { label: 'Monument', value: 'Bronze statue unveiled on the square in 1905' },
      { label: 'Prešeren Day', value: '8 February — Slovenia’s cultural holiday' },
    ],
    sections: [
      {
        id: 'life',
        title: 'A poet, not a general',
        paragraphs: [
          'France Prešeren (1800–1849) trained as a lawyer but is remembered as Slovenia’s greatest poet. Writing in Slovenian at a time when German dominated public life, he proved the language could carry the highest lyric form — the sonnet.',
          'His life was personally unhappy: limited recognition in his lifetime, political disappointment, and an unrequited love for Julija Primic that he turned into some of his finest verse. That love story is literally built into the square — see the monument page for the statues of Prešeren and Julija.',
        ],
      },
      {
        id: 'work',
        title: 'What he wrote',
        bullets: [
          'Zdravljica (The Toast, 1844) — a cycle of drinking poems whose seventh stanza, wishing well to all peoples, became the Slovenian national anthem in 1989.',
          'Sonetni venec (A Wreath of Sonnets) — a technically dazzling sequence with an acrostic hidden in the first letters of each sonnet.',
          'Krst pri Savici (Baptism at the Savica) — an epic poem that became a cornerstone of Slovenian literature.',
        ],
      },
      {
        id: 'why-square',
        title: 'Why the square carries his name',
        paragraphs: [
          'In 1905 a bronze monument to Prešeren was placed at the centre of the city’s main junction. Placing the national poet there was a deliberate cultural and political statement: this was to be the heart of Slovenian Ljubljana.',
          'The square was only formally named Prešernov trg later, but in practice Ljubljana had already centred itself on the poet. Locals still say they will meet “pod spomenikom” — under the monument.',
        ],
      },
    ],
    faq: [
      {
        question: 'Who was France Prešeren?',
        answer:
          'France Prešeren (1800–1849) was a Slovenian poet whose work, especially the poem Zdravljica, helped define modern Slovenian literary language and national identity. The seventh stanza of Zdravljica is the Slovenian national anthem.',
      },
      {
        question: 'Why is there a Prešeren monument on the square?',
        answer:
          'The bronze statue by Ivan Zajec was unveiled in 1905 to honour the national poet at the centre of the city. It effectively made the square the cultural heart of Ljubljana.',
      },
      {
        question: 'When is Prešeren Day?',
        answer:
          '8 February, the date of Prešeren’s death in 1849. It is Slovenia’s national cultural holiday; the square is the focal point of the day’s ceremonies.',
      },
      {
        question: 'Why does the monument face away from the square?',
        answer:
          'The poet gazes south-west toward the river and the方向 of Julija Primic’s family home, while a side relief shows Julija. The arrangement turns a private unrequited love into public symbolism.',
      },
    ],
    related: ['history', 'preseren-monument', 'map'],
    updated:
      'Sources: Visit Ljubljana (Prešeren pages), Slovenian Ministry of Culture. Facts checked October 2026.',
  },

  architecture: {
    slug: 'architecture',
    title: 'Buildings Around Prešeren Square: A Facade-by-Facade Guide',
    description:
      'Read the square like an architect: the pink Franciscan church, the Secession ring rebuilt after 1895, Urbanc House, Hauptman House and Plečnik’s Triple Bridge.',
    h1: 'The Buildings Around Prešeren Square',
    intro:
      'The square is a short course in Ljubljana’s architecture. One side is 17th-century baroque; most of the rest is Vienna Secession built after the 1895 earthquake; and the bridge axis was reworked by Jože Plečnik in the 1930s. This page names each building and tells you what to look for.',
    facts: [
      { label: 'Franciscan Church', value: '1646–1660, early baroque, the square’s oldest anchor' },
      { label: 'Urbanc House', value: '1903, Vienna Secession corner building' },
      { label: 'Hauptman House', value: '1873, Neo-Renaissance, Wolfova corner' },
      { label: 'North & east sides', value: 'Rebuilt in Secession style after 1895' },
      { label: 'Triple Bridge', value: 'Jože Plečnik, 1929–1932' },
      { label: 'Monument', value: 'Bronze by Ivan Zajec, 1905' },
    ],
    sections: [
      {
        id: 'church',
        title: 'The pink church closes the south',
        paragraphs: [
          'The Franciscan Church of the Annunciation (1646–1660) is the square’s oldest and most dominant building. Its unusual pink (really a faded terracotta-and-lime) baroque façade makes it the easiest landmark to find from anywhere nearby.',
          'Step inside and you leave the square’s noise entirely — a working monastery church, which is why church bells still mix with the tourist chatter outside.',
        ],
      },
      {
        id: 'secession',
        title: 'The Secession ring',
        paragraphs: [
          'Look at the north and east sides of the square and you are looking at post-1895 construction. After the Easter 1895 earthquake, the damaged buildings were rebuilt in the Vienna Secession style: curved lines, floral ornament, tall windows and rounded corners.',
          'This is why the square reads as “fin de siècle Central Europe” rather than medieval — almost everything you photograph here, except the church, is less than 130 years old.',
        ],
      },
      {
        id: 'urbanc',
        title: 'Urbanc House (the corner gem)',
        paragraphs: [
          'On the corner with Čopova Street, Urbanc House (1903) is the square’s richest Secession façade, with allegorical statues and a famous café at street level. It is the best single example of how Ljubljana absorbed Viennese modern style.',
        ],
      },
      {
        id: 'hauptman',
        title: 'Hauptman House',
        paragraphs: [
          'The Neo-Renaissance building on the Wolfova corner (1873) predates the earthquake rebuild and shows the earlier historicist taste — heavier, more symmetrical, less floral than its Secession neighbours. Compare the two styles side by side across the square.',
        ],
      },
      {
        id: 'bridge',
        title: 'The bridge axis is architecture too',
        paragraphs: [
          'The Triple Bridge is not just a crossing: Plečnik turned a single bridge into three, with low balustrades and lamps, so the square flows onto the left bank. Read it together with the square — they are one composition.',
        ],
      },
    ],
    faq: [
      {
        question: 'Why is the Franciscan church pink?',
        answer:
          'The façade is painted in a terracotta-and-lime baroque scheme that has faded to the pink tone visitors notice today. It dates from the church’s 1646–1660 construction.',
      },
      {
        question: 'What architectural style surrounds the square?',
        answer:
          'Most buildings are Vienna Secession (Art Nouveau) rebuilt after the 1895 earthquake, with the 17th-century baroque Franciscan church as the oldest element and Plečnik’s 1930s Triple Bridge as the modern axis.',
      },
      {
        question: 'Who was Jože Plečnik?',
        answer:
          'Jože Plečnik (1872–1957) was the Slovenian architect who shaped much of modern Ljubljana, including the Triple Bridge, the market colonnades and the cathedral’s bronze doors. His work is visible within a few minutes of the square.',
      },
    ],
    related: ['history', '1895-earthquake', 'preseren-monument', 'art-nouveau-walk'],
    updated:
      'Sources: Visit Ljubljana heritage pages, City of Ljubljana. Facts checked October 2026.',
  },

  'art-nouveau-walk': {
    slug: 'art-nouveau-walk',
    title: 'Ljubljana Art Nouveau Walk from Prešeren Square',
    description:
      'A walking route from Prešeren Square along Miklošičeva cesta to see Ljubljana’s Secession façades, with what to look for on each building.',
    h1: 'An Art Nouveau (Secession) Walk from Prešeren Square',
    intro:
      'Ljubljana is one of the easiest places in Europe to see a whole district rebuilt in a single modern style. The 1895 earthquake wiped out the old centre and the rebuild came in the Vienna Secession manner — what most people call Art Nouveau. This walk starts at the square and follows the city’s grandest Secession street.',
    facts: [
      { label: 'Style here', value: 'Vienna Secession (local Art Nouveau)' },
      { label: 'Trigger', value: 'The 1895 earthquake and the rebuilding decade' },
      { label: 'Route length', value: 'About 1.2 km one way to the station district' },
      { label: 'Time', value: '45–70 minutes with stops' },
      { label: 'Key street', value: 'Miklošičeva cesta' },
      { label: 'Architects', value: 'Maks Fabiani, Ciril Metod Koch, Jože Plečnik' },
    ],
    sections: [
      {
        id: 'why',
        title: 'Why Ljubljana is a Secession city',
        paragraphs: [
          'After the 14 April 1895 earthquake, Ljubljana rebuilt fast and modern. The new façades used the Secession vocabulary coming out of Vienna: geometric ornament, stylised flowers,female figures and rounded corner towers.',
          'Because the rebuilding was concentrated in a few years, entire streets share the look — which is what makes this walk coherent rather than scattered.',
        ],
      },
      {
        id: 'route',
        title: 'The route',
        bullets: [
          'Start on Prešeren Square: Urbanc House (1903) on the Čopova corner is your first Secession gem.',
          'Walk up Wolfova, then onto Miklošičeva cesta — the main seam of Secession façades.',
          'Continue past the railway-station district, where several landmark buildings line the avenue.',
          'Return the same way, or loop back via the river for variety.',
        ],
      },
      {
        id: 'look',
        title: 'What to look for',
        bullets: [
          'Corner towers and round oriel windows — Secession architects loved the street corner.',
          'Stylised female figures and floral reliefs above the ground floor.',
          'Geometric friezes and medallions rather than old-style statues.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the difference between Art Nouveau and Secession here?',
        answer:
          'They are the same movement; “Secession” is the Viennese name. In Ljubljana the style is called Secession, but it is the Central European branch of Art Nouveau.',
      },
      {
        question: 'How long is the walk?',
        answer:
          'About 1.2 km one way to the station district, roughly 45–70 minutes with stops to read the façades. It is flat and paved throughout.',
      },
      {
        question: 'Where does the walk start?',
        answer:
          'On Prešeren Square itself — Urbanc House on the Čopova corner is the first Secession building — then along Wolfova and Miklošičeva cesta.',
      },
    ],
    related: ['architecture', '1895-earthquake', 'hauptman-house', 'urbanc-house'],
    updated:
      'Sources: Visit Ljubljana architecture guide, City heritage register. Facts checked October 2026.',
  },

  '1895-earthquake': {
    slug: '1895-earthquake',
    title: 'The 1895 Ljubljana Earthquake & How It Reshaped Prešeren Square',
    description:
      'On 14 April 1895 an earthquake hit Ljubljana on Easter Sunday; the Secession rebuild that followed gave Prešeren Square its modern face.',
    h1: 'The 1895 Earthquake That Made the Square',
    intro:
      'If you want to understand why Prešeren Square looks the way it does, the key date is not 1905 (the monument) but 1895 (the earthquake). The quake damaged much of Ljubljana and the rapid rebuild in the modern Secession style is the reason the square reads as fin-de-siècle Europe rather than medieval town.',
    facts: [
      { label: 'Date', value: 'Easter Sunday, 14 April 1895' },
      { label: 'Magnitude', value: 'About 6.1; felt across the region' },
      { label: 'Epicentre', value: 'Near Janče, east of the city' },
      { label: 'Result', value: 'Widespread damage, then rapid rebuild' },
      { label: 'Style of rebuild', value: 'Vienna Secession (Art Nouveau)' },
      { label: 'Key architects', value: 'Maks Fabiani, Ciril Metod Koch' },
    ],
    sections: [
      {
        id: 'quake',
        title: 'The morning of 14 April',
        paragraphs: [
          'The earthquake struck on Easter Sunday morning in 1895 and damaged or destroyed a large part of Ljubljana, including buildings around what is now Prešeren Square. Because it happened on a holiday morning, casualties were lower than they might have been.',
          'The shock pushed the city into a forced modernisation: instead of patching old structures, Ljubljana rebuilt in the contemporary style.',
        ],
      },
      {
        id: 'rebuild',
        title: 'A decade of Secession building',
        paragraphs: [
          'Through the late 1890s and early 1900s the centre was rebuilt in the Vienna Secession manner. Architects such as Maks Fabiani and Ciril Metod Koch shaped the new façades you see on the square’s north and east sides.',
          'This is why, standing on the square, you are surrounded by curved ornament and tall windows that post-date the earthquake by only a few years — while the pink Franciscan church, built in the 1600s, survived it.',
        ],
      },
      {
        id: 'legacy',
        title: 'The legacy you can still read',
        bullets: [
          'The square’s north and east buildings are post-1895 Secession work.',
          'The contrast with the baroque church makes the timeline visible at a glance.',
          'The rebuild set the stage for Plečnik’s later 20th-century redesign of the bridge and riverfront.',
        ],
      },
    ],
    faq: [
      {
        question: 'When was the Ljubljana earthquake?',
        answer:
          '14 April 1895, on Easter Sunday morning. It caused widespread damage and triggered the city’s rapid modern rebuild.',
      },
      {
        question: 'How strong was it?',
        answer:
          'Estimated around magnitude 6.1, with the epicentre near Janče east of the city. It was strong enough to damage much of the historic centre.',
      },
      {
        question: 'Why does the square look Art Nouveau?',
        answer:
          'Because the buildings damaged in 1895 were rebuilt in the Vienna Secession (Art Nouveau) style during the following decade. The style you photograph is mostly post-earthquake.',
      },
      {
        question: 'What survived the earthquake?',
        answer:
          'The 17th-century Franciscan Church of the Annunciation survived and still closes the south side of the square, making it the oldest visible element there.',
      },
    ],
    related: ['history', 'architecture', 'art-nouveau-walk'],
    updated:
      'Sources: Slovenian Academy of Sciences historical records, Visit Ljubljana. Facts checked October 2026.',
  },

  photography: {
    slug: 'photography',
    title: 'Prešeren Square Photo Spots: Where to Point the Camera',
    description:
      'The best angles for Prešeren Square: from the Triple Bridge, the riverbank reflection, the monument close-up, and the blue-hour lights.',
    h1: 'Prešeren Square: Where to Photograph It',
    intro:
      'The square is small and busy, which makes a good composition harder than it looks. The trick is to shoot from the edges — the bridges and the riverbank — rather than standing in the middle. This page lists the vantage points that actually work.',
    facts: [
      { label: 'Best wide shot', value: 'From the far span of the Triple Bridge, looking back' },
      { label: 'Best reflection', value: 'The riverbank just south of the church at calm water' },
      { label: 'Best detail', value: 'The monument’s relief of Julija, and the church façade' },
      { label: 'Best light', value: 'Blue hour, and the Christmas lights season' },
      { label: 'Avoid', value: 'Overhead tram cables and midday flat light' },
      { label: 'Tripods', value: 'Allowed on the pedestrian square; watch foot traffic' },
    ],
    sections: [
      {
        id: 'bridge',
        title: 'From the Triple Bridge',
        paragraphs: [
          'Walk onto the left-bank span of the Triple Bridge and look back. You get the whole square, the monument centred, and the pink church behind — the classic postcard frame, and it works at almost any hour.',
          'Step to the side span for a tighter composition that includes the bridge balustrade in the foreground, which adds depth.',
        ],
      },
      {
        id: 'river',
        title: 'From the riverbank',
        paragraphs: [
          'Drop to the promenade just south of the church. On a calm day the square and the church façade reflect in the Ljubljanica — the best mirror shot in the centre, and usually less crowded than the square itself.',
        ],
      },
      {
        id: 'blue',
        title: 'Blue hour and lights',
        paragraphs: [
          'The square faces roughly south, so the warm light at sunset hits the church façade. Stay for blue hour when the lamps come on; in December the Christmas lights turn the whole space into a long-exposure subject.',
          'For the lights route and timings, see the dedicated Christmas lights page.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where is the best view of Prešeren Square?',
        answer:
          'From the far span of the Triple Bridge looking back at the square, with the monument centred and the Franciscan church behind. It is the classic frame and works most of the day.',
      },
      {
        question: 'When is the best light?',
        answer:
          'Late afternoon into blue hour, when the church façade catches warm light and the square lamps come on. December’s Christmas lights are a bonus season.',
      },
      {
        question: 'Can I use a tripod?',
        answer:
          'Yes, on the pedestrian square, but keep it clear of the main walking lines and be considerate during busy evenings.',
      },
    ],
    related: ['map', 'christmas-lights', 'one-hour-walk', 'evening-walk'],
    updated: 'Practical photography guidance; locations verified October 2026.',
  },

  'hauptman-house': {
    slug: 'hauptman-house',
    title: 'Hauptman House (Hauptmanova hiša): Facade & History',
    description:
      'Hauptman House on the Wolfova corner of Prešeren Square: a Neo-Renaissance façade from 1873 and what to look for up close.',
    h1: 'Hauptman House on Prešeren Square',
    intro:
      'On the north-west corner of the square, where Wolfova Street meets the square, stands Hauptman House — a Neo-Renaissance building that predates the 1895 earthquake rebuild and shows the earlier historicist taste next to its Secession neighbours. It is an easy, free thing to read up close.',
    facts: [
      { label: 'Built', value: '1873' },
      { label: 'Style', value: 'Neo-Renaissance (historicist)' },
      { label: 'Architect', value: 'Ferdinand Schulz' },
      { label: 'Corner', value: 'Wolfova ulica and Prešernov trg' },
      { label: 'Built for', value: 'Merchant Adolf Hauptman' },
      { label: 'Viewing', value: 'Exterior only; ground floor is in commercial use' },
    ],
    sections: [
      {
        id: 'building',
        title: 'An older layer of the square',
        paragraphs: [
          'Hauptman House (1873) is one of the few square-side buildings that survived the 1895 earthquake and was not rebuilt in the Secession style. That makes it a useful contrast: heavier, more symmetrical, and less floral than the façades around it.',
        ],
      },
      {
        id: 'facade',
        title: 'What to look for',
        bullets: [
          'A balanced Neo-Renaissance front with ordered windows and restrained ornament.',
          'The corner position means you can read it from two streets at once.',
          'Compare it deliberately with Urbanc House opposite, built 30 years later in full Secession.',
        ],
      },
      {
        id: 'view',
        title: 'How to view it',
        paragraphs: [
          'Stand on the square and look north-west; the building forms the corner where Wolfova begins. No ticket is needed — it is a working ground-floor space, so enjoy the façade from the pavement.',
        ],
      },
    ],
    faq: [
      {
        question: 'Who designed Hauptman House?',
        answer:
          'It was designed by architect Ferdinand Schulz and built in 1873 for the merchant Adolf Hauptman.',
      },
      {
        question: 'What style is it?',
        answer:
          'Neo-Renaissance (historicist), which makes it visibly older in feel than the Secession buildings rebuilt after 1895 that surround the square.',
      },
      {
        question: 'Can you go inside?',
        answer:
          'The ground floor is in commercial use, so visitors view the façade from the square and Wolfova Street. There is no separate ticket or museum.',
      },
    ],
    related: ['architecture', 'urbanc-house', 'art-nouveau-walk'],
    updated: 'Sources: City of Ljubljana heritage register. Facts checked October 2026.',
  },

  'urbanc-house': {
    slug: 'urbanc-house',
    title: 'Urbanc House (Urbancova hiša): Secession Corner Gem',
    description:
      'Urbanc House on the Čopova corner of Prešeren Square: a 1903 Vienna Secession façade with allegorical statues and a famous street-level café.',
    h1: 'Urbanc House on Prešeren Square',
    intro:
      'The corner building where the square meets Čopova Street is Urbanc House, built in 1903 in the Vienna Secession style. Its richly ornamented façade is the single best example of Ljubljana’s modern rebuild, and its ground-floor café has been a meeting point for over a century.',
    facts: [
      { label: 'Built', value: '1903' },
      { label: 'Style', value: 'Vienna Secession (Art Nouveau)' },
      { label: 'Corner', value: 'Prešernov trg and Čopova ulica' },
      { label: 'Note', value: 'Allegorical statues on the façade' },
      { label: 'Café', value: 'Historic street-level café at the corner' },
      { label: 'Viewing', value: 'Exterior; café open to visitors' },
    ],
    sections: [
      {
        id: 'history',
        title: 'A showcase of the new style',
        paragraphs: [
          'Urbanc House (1903) was built as a grand commercial and residential corner block at the moment Ljubljana was embracing Secession design. Its façade is more elaborate than its neighbours, which is exactly why it is the building photographers single out.',
        ],
      },
      {
        id: 'facade',
        title: 'What to look for',
        bullets: [
          'Allegorical statues and friezes characteristic of Secession ornament.',
          'A strong corner tower emphasis — typical of how the style treats street corners.',
          'Original shopfront lines at ground level that still read as turn-of-the-century.',
        ],
      },
      {
        id: 'cafe',
        title: 'The café at the corner',
        paragraphs: [
          'The ground-floor café has been a landmark meeting spot for generations. It is a natural place to pause on a square-walking loop and read the façade from a sidewalk table.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is Urbanc House?',
        answer:
          'A 1903 Vienna Secession corner building on Prešernov trg at Čopova Street, known for its ornate façade and historic street-level café.',
      },
      {
        question: 'Why is it important?',
        answer:
          'It is the richest Secession façade on the square and a clear example of the post-1895 modern rebuild that defines central Ljubljana’s look.',
      },
      {
        question: 'Can I go inside?',
        answer:
          'The café at the corner is open to the public; the upper floors are not a visitor attraction, so enjoy the façade from the square and a coffee at the café.',
      },
    ],
    related: ['architecture', 'hauptman-house', 'art-nouveau-walk'],
    updated: 'Sources: City of Ljubljana heritage register. Facts checked October 2026.',
  },

  'dragon-bridge': {
    slug: 'dragon-bridge',
    title: 'Prešeren Square to Dragon Bridge: Riverside Walk',
    description:
      'A flat riverside walk from Prešeren Square to Ljubljana’s Dragon Bridge, with the route, the bridge’s history and the dragon statues.',
    h1: 'From Prešeren Square to the Dragon Bridge',
    intro:
      'The Dragon Bridge (Zmajski most) is one of Ljubljana’s most photographed sights, and it is an easy walk from Prešeren Square along the river. This page gives the walking route and tells you why the dragons are there.',
    facts: [
      { label: 'Walk time', value: 'About 10–15 minutes at a stroll' },
      { label: 'Direction', value: 'South-east, along the Ljubljanica' },
      { label: 'Bridge built', value: '1901 (opened as the Jubilee Bridge)' },
      { label: 'Famous for', value: 'Four dragon statues at the corners' },
      { label: 'Surface', value: 'Flat, paved, step-free' },
      { label: 'Continue to', value: 'Central Market, old town, the castle funicular' },
    ],
    sections: [
      {
        id: 'route',
        title: 'The walking route',
        bullets: [
          'From the square, cross the Triple Bridge to the left bank.',
          'Turn south-east along the riverside promenade (nabrežje).',
          'Stay on the water side; the Dragon Bridge appears after a few minutes.',
          'The route is flat and obvious — you are following the river.',
        ],
      },
      {
        id: 'bridge',
        title: 'The bridge itself',
        paragraphs: [
          'The Dragon Bridge was completed in 1901 to mark the 40th jubilee of Emperor Franz Joseph, which is why it was first called the Jubilee Bridge. It is one of the city’s finest examples of early reinforced-concrete engineering dressed in Secession ornament.',
          'The four dragon statues at the corners have become the symbol of Ljubljana. Local lore says the dragons wag their tails when a virgin crosses — a story told to every visiting child.',
        ],
      },
      {
        id: 'beyond',
        title: 'What to do after',
        paragraphs: [
          'Past the bridge you reach the open-air Central Market and, a little further, the old town. It pairs naturally with the market walk and the river-bridges loop.',
        ],
      },
    ],
    faq: [
      {
        question: 'How far is the Dragon Bridge from Prešeren Square?',
        answer:
          'About 10–15 minutes on foot along the riverside, following the Ljubljanica south-east. The route is flat and signposted by the water.',
      },
      {
        question: 'Why are there dragons?',
        answer:
          'The dragon became Ljubljana’s heraldic symbol in legend (the city was said to be guarded by a dragon), and the 1901 bridge placed four dragon statues at its corners. They are now the city’s best-known image.',
      },
      {
        question: 'Is the walk step-free?',
        answer:
          'Yes. From the square across the Triple Bridge and along the promenade to the Dragon Bridge is flat, paved and step-free.',
      },
    ],
    related: ['central-market', 'river-bridges-walk', 'map'],
    updated: 'Sources: Visit Ljubljana, City heritage register. Route checked October 2026.',
  },

  'central-market': {
    slug: 'central-market',
    title: 'Prešeren Square to Ljubljana Central Market',
    description:
      'Walk from Prešeren Square to Ljubljana’s open-air Central Market: the riverside route, the two squares, what to buy and the opening hours.',
    h1: 'From Prešeren Square to the Central Market',
    intro:
      'Ljubljana’s Central Market (Osrednja tržnica) is a working market under Plečnik’s colonnades, a few minutes from the square along the river. This page covers the walk and practical visiting tips.',
    facts: [
      { label: 'Walk time', value: 'About 8–10 minutes along the river' },
      { label: 'Direction', value: 'South-east, then follow the colonnades' },
      { label: 'Designer', value: 'Jože Plečnik, colonnades 1930s–40s' },
      { label: 'Open', value: 'Generally Monday–Saturday (closed Sunday)' },
      { label: 'Two squares', value: 'Vodnikov trg and Pogačarjev trg' },
      { label: 'Best time', value: 'Morning, for produce and fewer crowds' },
    ],
    sections: [
      {
        id: 'route',
        title: 'The walking route',
        bullets: [
          'Cross the Triple Bridge and turn south-east along the promenade.',
          'The Plečnik colonnades begin just past the Dragon Bridge and run along the water.',
          'Vodnikov trg is the first market square; Pogačarjev trg follows with the covered market hall.',
        ],
      },
      {
        id: 'squares',
        title: 'What you’ll find',
        bullets: [
          'Fresh fruit, vegetables, dairy and bakery stalls on the open squares.',
          'A covered market hall (open weekdays and Saturday mornings) for meat, fish and dried goods.',
          'Seasonal stalls — Christmas, honey, and regional specialities at different times of year.',
        ],
      },
      {
        id: 'tips',
        title: 'Visiting tips',
        paragraphs: [
          'Go in the morning for the fullest selection and the liveliest atmosphere. Most stalls close by early afternoon and the market is closed on Sunday, so plan a weekday or Saturday visit.',
          'It pairs well with a walk onward to the old town or the cathedral.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do I walk from Prešeren Square to the market?',
        answer:
          'Cross the Triple Bridge, follow the riverside promenade south-east, and the Plečnik colonnades and market squares begin just past the Dragon Bridge — about 8–10 minutes in total.',
      },
      {
        question: 'What are the market opening hours?',
        answer:
          'The open-air market generally runs Monday to Saturday and is closed on Sunday. The covered hall is busiest on weekday and Saturday mornings; confirm the current schedule locally as times can shift by season.',
      },
      {
        question: 'Is it worth visiting?',
        answer:
          'Yes, if you enjoy food markets and local produce. It is a working market, not a tourist show, and it is one of the most pleasant riverside walks from the square.',
      },
    ],
    related: ['dragon-bridge', 'one-hour-walk', 'food-and-cafes', 'map'],
    updated: 'Sources: Visit Ljubljana, Ljubljana Market. Hours checked October 2026.',
  },

  'ljubljana-cathedral': {
    slug: 'ljubljana-cathedral',
    title: 'Prešeren Square to Ljubljana Cathedral (St. Nicholas)',
    description:
      'Walk from Prešeren Square to Ljubljana Cathedral: the old-town route, the baroque church, the green dome and Plečnik’s bronze doors.',
    h1: 'From Prešeren Square to Ljubljana Cathedral',
    intro:
      'St. Nicholas’ Cathedral (Ljubljanska stolnica) is the city’s main church, a short walk north through the old town from Prešeren Square. This page covers the route and what to look for.',
    facts: [
      { label: 'Walk time', value: 'About 8–10 minutes via Mestni trg' },
      { label: 'Direction', value: 'North into the old town, then west' },
      { label: 'Style', value: 'Baroque, built 1701–1706' },
      { label: 'Known for', value: 'Green dome, twin towers, bronze doors' },
      { label: 'Doors', value: 'Bronze by Jože Plečnik' },
      { label: 'Square', value: 'Cyril and Methodius Square (Cyril-Methodian)' },
    ],
    sections: [
      {
        id: 'route',
        title: 'The walking route',
        bullets: [
          'From the square, head north through the old-town lanes to Mestni trg (Town Square).',
          'Continue past the Town Hall and Robba Fountain.',
          'Turn west; the cathedral dome rises ahead in Cyril and Methodius Square.',
        ],
      },
      {
        id: 'church',
        title: 'What to see',
        bullets: [
          'The green dome and twin towers are visible from several streets as you approach.',
          'Plečnik’s bronze doors (the “Ljubljana” and “Slovenia” doors) are the modern masterpiece at the west entrance.',
          'The baroque interior holds frescoes and the bishop’s seat.',
        ],
      },
      {
        id: 'tips',
        title: 'Visiting tips',
        paragraphs: [
          'The cathedral is an active place of worship, so dress modestly and keep quiet during services. Entry to the nave is usually free; there may be a small charge to climb the tower or join a guided tour — check on site.',
        ],
      },
    ],
    faq: [
      {
        question: 'How far is the cathedral from Prešeren Square?',
        answer:
          'About 8–10 minutes on foot through the old town: north to Mestni trg, past the Town Hall, then west to Cyril and Methodius Square.',
      },
      {
        question: 'Why are the doors famous?',
        answer:
          'The west entrance has bronze doors designed by Jože Plečnik, regarded as a highlight of 20th-century Slovenian sacred art.',
      },
      {
        question: 'Can I go inside?',
        answer:
          'Yes; the nave is normally open to visitors outside service times. There may be a small fee for the tower or a guided tour — confirm locally.',
      },
    ],
    related: ['mestni-trg', 'congress-square', 'map'],
    updated: 'Sources: Visit Ljubljana, Archdiocese of Ljubljana. Facts checked October 2026.',
  },

  'mestni-trg': {
    slug: 'mestni-trg',
    title: 'Mestni trg & Town Hall: Old-Town Loop from Prešeren Square',
    description:
      'A short old-town walk from Prešeren Square to Mestni trg (Town Square): the Town Hall, Robba Fountain and a loop back to the river.',
    h1: 'Mestni trg & the Town Hall Loop',
    intro:
      'Mestni trg — Town Square — is the old-town square just north of Prešeren Square, home to the Town Hall and the Robba Fountain. It is the easiest first step into Ljubljana’s medieval core and makes a natural short loop.',
    facts: [
      { label: 'Walk time', value: 'About 4–6 minutes from the square' },
      { label: 'Direction', value: 'North through the old-town lanes' },
      { label: 'Key sight', value: 'Ljubljana Town Hall (Magistrat)' },
      { label: 'Fountain', value: 'Robba Fountain (Fontana treh rek)' },
      { label: 'Loop back', value: 'West to the cathedral or south to the river' },
      { label: 'Surface', value: 'Cobbled; mostly flat with short slopes' },
    ],
    sections: [
      {
        id: 'route',
        title: 'The short walk',
        bullets: [
          'Leave the square north into the pedestrian lanes.',
          'Mestni trg opens after a few minutes, with the Town Hall on the right.',
          'The Robba Fountain stands in the middle of the square.',
        ],
      },
      {
        id: 'hall',
        title: 'The Town Hall',
        paragraphs: [
          'Ljubljana Town Hall (Magistrat) is a reconstructed baroque building that still houses the city administration. The courtyard and occasional exhibitions are open to visitors, and it anchors the square’s civic character.',
        ],
      },
      {
        id: 'fountain',
        title: 'Robba Fountain',
        paragraphs: [
          'The Robba Fountain (Fountain of the Three Rivers) is the square’s centrepiece, an 18th-century baroque work personifying the three Carniolan rivers. The original is in a museum; what stands here is a high-quality copy.',
        ],
      },
      {
        id: 'loop',
        title: 'Completing the loop',
        bullets: [
          'Continue west to the cathedral, or turn south back toward the river and Prešeren Square.',
          'The whole loop is under 20 minutes at a stroll and connects three squares.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do I get from Prešeren Square to Mestni trg?',
        answer:
          'Walk north through the old-town pedestrian lanes for about 4–6 minutes; Mestni trg opens with the Town Hall on your right and the Robba Fountain in the middle.',
      },
      {
        question: 'What is the Town Hall?',
        answer:
          'Ljubljana Town Hall (Magistrat) is the baroque civic building on Mestni trg, still used by the city administration, with a visitor courtyard and occasional exhibitions.',
      },
      {
        question: 'Is the walk step-free?',
        answer:
          'Largely flat, but the old town is cobbled with short slopes and the occasional step at building entrances. Wheelchair users should allow a little extra time.',
      },
    ],
    related: ['ljubljana-cathedral', 'congress-square', 'one-hour-walk'],
    updated: 'Sources: Visit Ljubljana, City of Ljubljana. Facts checked October 2026.',
  },

  'congress-square': {
    slug: 'congress-square',
    title: 'Prešeren Square vs Congress Square: How to Tell Them Apart',
    description:
      'Congress Square (Kongresni trg) is a different square southwest of the old town. Learn how it differs from Prešeren Square and how to walk between them.',
    h1: 'Prešeren Square vs Congress Square',
    intro:
      'Visitors often confuse Prešeren Square with Congress Square (Kongresni trg). They are distinct places a few minutes apart, with different shapes, buildings and roles. This page helps you tell them apart and choose which to visit.',
    facts: [
      { label: 'Congress Square', value: 'Kongresni trg, southwest of the old town' },
      { label: 'Distance', value: 'About 6–8 minutes’ walk apart' },
      { label: 'Shape', value: 'A long rectangular square (Zvezda park at its centre)' },
      { label: 'Key buildings', value: 'University of Ljubljana, Philharmonic, Seminary' },
      { label: 'Role', value: 'Ceremonial and university square' },
      { label: 'Near', value: 'CASTLE funicular base, the park and museums' },
    ],
    sections: [
      {
        id: 'locations',
        title: 'Where each one is',
        paragraphs: [
          'Prešeren Square sits at the west gate of the old town, where the Triple Bridge crosses the Ljubljanica. Congress Square lies southwest, beyond the old town, backing onto the university quarter and the base of the castle funicular.',
        ],
      },
      {
        id: 'characters',
        title: 'How they differ',
        bullets: [
          'Prešeren Square is round, busy and tourist-centred, anchored by the poet’s monument and the pink church.',
          'Congress Square is a long, green rectangular square used for university and state ceremonies, framed by the University and the Philharmonic.',
          'Congress Square is quieter and more institutional; Prešeren Square is the social heart.',
        ],
      },
      {
        id: 'between',
        title: 'Walking between them',
        paragraphs: [
          'From Prešeren Square, walk southwest through or around the old town (via Wolfova or the university side) to reach Congress Square in about 6–8 minutes. Congress Square is also the convenient starting point for the castle funicular.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are Prešeren Square and Congress Square the same?',
        answer:
          'No. They are separate squares about 6–8 minutes apart. Prešeren Square is the round, tourist-centred square by the Triple Bridge; Congress Square is the long, green university square to the southwest.',
      },
      {
        question: 'Which one should I visit?',
        answer:
          'Both. Prešeren Square is the must-see heart of the city; Congress Square is worth it for the university architecture, the park and as the base for the castle funicular.',
      },
      {
        question: 'How do I walk from one to the other?',
        answer:
          'About 6–8 minutes on foot, heading southwest from Prešeren Square through or around the old town toward the university quarter.',
      },
    ],
    related: ['mestni-trg', 'ljubljana-castle', 'one-hour-walk'],
    updated: 'Sources: Visit Ljubljana, City of Ljubljana. Facts checked October 2026.',
  },

  'ljubljana-castle': {
    slug: 'ljubljana-castle',
    title: 'Prešeren Square to Ljubljana Castle: Walk or Funicular',
    description:
      'Get from Prešeren Square to Ljubljana Castle: the uphill old-town walk versus the funicular from Krek Square, plus what is at the top.',
    h1: 'From Prešeren Square to Ljubljana Castle',
    intro:
      'Ljubljana Castle (Ljubljanski grad) sits on a hill above the old town, visible from Prešeren Square. You can walk up through the lanes or take the funicular from Krek Square near the market. This page compares the options.',
    facts: [
      { label: 'Walk up', value: 'About 15–20 minutes uphill through the old town' },
      { label: 'Funicular', value: 'From Krek Square (Krekov trg), near the market' },
      { label: 'Hill', value: 'Castle Hill (Grajski grič)' },
      { label: 'Origins', value: 'Medieval core; later expansions' },
      { label: 'At the top', value: 'Outlook tower, exhibitions, viewpoints' },
      { label: 'Tickets', value: 'Funicular and exhibitions ticketed — check official prices' },
    ],
    sections: [
      {
        id: 'walk',
        title: 'The walking route',
        bullets: [
          'From the square, go north into the old town toward Mestni trg.',
          'Follow the signed lanes uphill (via Gornji trg and the castle path).',
          'The path is paved but steep in sections; allow 15–20 minutes.',
        ],
      },
      {
        id: 'funicular',
        title: 'The funicular option',
        paragraphs: [
          'The funicular departs from Krek Square (Krekov trg), a short walk past the Central Market. It spares the climb and is the easier choice with luggage, children or limited mobility. Buy tickets at the base station.',
        ],
      },
      {
        id: 'top',
        title: 'What is at the top',
        bullets: [
          'The outlook tower for a 360° view over the city and the square far below.',
          'Exhibitions on the castle’s history and temporary shows.',
          'Open courtyards, a café and occasional events.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do I get from Prešeren Square to the castle?',
        answer:
          'Either walk uphill through the old town (about 15–20 minutes, steep in places) or take the funicular from Krek Square near the Central Market, which is easier with bags or limited mobility.',
      },
      {
        question: 'Is the funicular worth it?',
        answer:
          'If you want to avoid the climb, yes. It runs from Krek Square and delivers you to the castle courtyard directly. Tickets are sold at the base.',
      },
      {
        question: 'Do I need a ticket for the castle?',
        answer:
          'The grounds and some viewpoints are accessible, but the tower and exhibitions are ticketed. Check the official castle site for current prices and combined funicular tickets.',
      },
    ],
    related: ['central-market', 'congress-square', 'accessibility'],
    updated: 'Sources: Ljubljana Castle (grad), Visit Ljubljana. Facts checked October 2026.',
  },

  'river-bridges-walk': {
    slug: 'river-bridges-walk',
    title: 'Ljubljana River Bridges Walk from Prešeren Square',
    description:
      'A loop along the Ljubljanica taking in the Triple Bridge, Dragon Bridge, Butchers’ Bridge, Cobblers’ Bridge and more, with what to photograph on each.',
    h1: 'The Ljubljana River Bridges Walk',
    intro:
      'The Ljubljanica is crossed by a cluster of distinctive bridges, several designed or reworked by Jože Plečnik. Starting at Prešeren Square, this loop links them into one easy riverside walk.',
    facts: [
      { label: 'Loop length', value: 'About 1.5–2 km, flat' },
      { label: 'Time', value: '45–70 minutes with stops' },
      { label: 'Bridges', value: 'Triple, Dragon, Butchers’, Cobblers’, Hradecky, Čevljarski' },
      { label: 'Designer', value: 'Several by Jože Plečnik' },
      { label: 'Best light', value: 'Late afternoon and blue hour' },
      { label: 'Surface', value: 'Flat, paved promenades' },
    ],
    sections: [
      {
        id: 'loop',
        title: 'The loop',
        bullets: [
          'Start on the Triple Bridge at Prešeren Square.',
          'South-east to the Dragon Bridge, then continue to Butchers’ Bridge (Mesarski most).',
          'Cross back and follow the other bank past Cobblers’ Bridge (Šuštarjev most) toward the old town.',
          'Optionally extend to the Hradecky Bridge and Čevljarski most for the full set.',
        ],
      },
      {
        id: 'bridges',
        title: 'Bridge by bridge',
        bullets: [
          'Triple Bridge — Plečnik turned one bridge into three with low balustrades and lamps.',
          'Dragon Bridge — 1901, four dragon statues, the city’s emblem.',
          'Butchers’ Bridge — glass walkway with sculptures, a modern addition.',
          'Cobblers’ Bridge — a broad, low Plečnik crossing lined with lamps.',
        ],
      },
      {
        id: 'photo',
        title: 'What to photograph',
        paragraphs: [
          'Each bridge frames the river and the old-town façades differently. Late afternoon light on the water and blue hour with the lamps on are the best windows; the Dragon Bridge dragons and the Triple Bridge symmetry are the signature shots.',
        ],
      },
    ],
    faq: [
      {
        question: 'How long is the river bridges walk?',
        answer:
          'About 1.5–2 km as a flat loop, roughly 45–70 minutes with stops to read each bridge.',
      },
      {
        question: 'Which bridges are on the route?',
        answer:
          'The Triple Bridge, Dragon Bridge, Butchers’ Bridge, Cobblers’ Bridge, and optionally the Hradecky and Čevljarski bridges for the full set.',
      },
      {
        question: 'Is it step-free?',
        answer:
          'Yes — the promenades and bridge decks are flat and paved, making it an easy step-free loop.',
      },
    ],
    related: ['dragon-bridge', 'triple-bridge', 'one-hour-walk', 'evening-walk'],
    updated: 'Sources: Visit Ljubljana, City heritage register. Route checked October 2026.',
  },

  'pedestrian-zone-arrival': {
    slug: 'pedestrian-zone-arrival',
    title: 'Arriving at Prešeren Square by Car, Taxi & with Luggage',
    description:
      'Where vehicles can and cannot go: the pedestrian-zone boundary, the nearest taxi drop-off, and the flat route in with luggage.',
    h1: 'Arriving at Prešeren Square with Bags',
    intro:
      'The square and the old town around it are a pedestrian zone, so cars and taxis cannot pull up at the monument. This page explains the boundary and the easiest way in with luggage, strollers or a wheelchair.',
    facts: [
      { label: 'Zone', value: 'Square + old-town core are car-free' },
      { label: 'Taxi drop-off', value: 'At the pedestrian edge, 1–2 min walk in' },
      { label: 'From station', value: 'Flat walk along Slovenska cesta, ~10 min' },
      { label: 'Parking', value: 'Edge-of-centre garages, then walk in' },
      { label: 'Luggage', value: 'Wheels fine to the square edge; cobbles beyond' },
      { label: 'Official info', value: 'City of Ljubljana traffic rules' },
    ],
    sections: [
      {
        id: 'boundary',
        title: 'The car-free boundary',
        paragraphs: [
          'The pedestrian zone covers the square and the medieval core. Vehicles are kept to the outer ring of streets, so a driver who says “I’ll drop you at Prešeren Square” means the pedestrian edge — a short, flat walk from there.',
          'This is why the square stays calm: no through-traffic, only delivery windows and emergency access at set times.',
        ],
      },
      {
        id: 'taxi',
        title: 'Taxi and rideshare drop-off',
        bullets: [
          'Ask to be dropped at the edge of the pedestrian zone (e.g. along Slovenska cesta or the riverfront road).',
          'From there it is a flat 1–2 minute walk to the monument.',
          'If you are being picked up, agree the same edge point to avoid a fine for entering the zone.',
        ],
      },
      {
        id: 'luggage',
        title: 'With luggage or a wheelchair',
        paragraphs: [
          'The route from the bus and train station is flat and paved along Slovenska cesta — the easiest arrival with wheels. Cobbles and occasional steps begin once you are inside the old-town lanes, so keep to the main approaches.',
          'For parking, use a garage on the edge of the centre and walk in; see the dedicated parking page for specific garages and walking routes.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can a taxi drop me at the square?',
        answer:
          'At the pedestrian edge, about 1–2 minutes’ walk from the monument. The inner square itself is car-free, so drivers stop at the zone boundary.',
      },
      {
        question: 'Can I drive to Prešeren Square?',
        answer:
          'No — it is a pedestrian zone. Park at an edge-of-centre garage and walk in, or have a taxi drop you at the boundary.',
      },
      {
        question: 'Is the walk from the station easy with luggage?',
        answer:
          'Yes. It is flat and paved along Slovenska cesta for about 10 minutes to the square; cobbles start only inside the old town.',
      },
    ],
    related: ['parking', 'accessibility', 'station-to-square', 'map'],
    updated: 'Sources: City of Ljubljana traffic rules, Visit Ljubljana. Checked October 2026.',
  },

  'public-toilets': {
    slug: 'public-toilets',
    title: 'Public Toilets Near Prešeren Square (Free)',
    description:
      'Where to find free public toilets near Prešeren Square, with locations, opening hours and accessibility notes.',
    h1: 'Public Toilets Near Prešeren Square',
    intro:
      'Ljubljana’s public toilets are free to use — a point worth knowing, because older guides sometimes describe them as coin- or card-operated. This page lists the convenient options near the square and along the river.',
    facts: [
      { label: 'Cost', value: 'Free (City of Ljubljana public toilets)' },
      { label: 'Nearest', value: 'Along the riverfront, a short walk from the square' },
      { label: 'Hours', value: 'Daytime; some run later in season' },
      { label: 'Accessibility', value: 'Step-free access at main locations' },
      { label: 'Also', value: 'Cafés and the market hall have facilities' },
      { label: 'Source', value: 'Visit Ljubljana essential info' },
    ],
    sections: [
      {
        id: 'locations',
        title: 'Where to find them',
        bullets: [
          'Public toilets along the Ljubljanica riverfront, a few minutes’ walk south of the square.',
          'Additional city public toilets in the wider centre, signed along main pedestrian routes.',
          'Cafés, the Central Market hall and major museums offer facilities for customers.',
        ],
      },
      {
        id: 'practical',
        title: 'Practical notes',
        paragraphs: [
          'Because the toilets are free, you do not need coins or a card — just follow the signs to the nearest riverfront facility when you are by the square.',
          'Accessibility: the main public toilets have step-free access. During winter or late hours, confirm the current opening times locally, as seasonal schedules vary.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are public toilets in Ljubljana free?',
        answer:
          'Yes. The City of Ljubljana public toilets are free to use; you do not need coins or a card.',
      },
      {
        question: 'Where is the nearest toilet to Prešeren Square?',
        answer:
          'The riverfront public toilets a few minutes’ walk south of the square are the most convenient; more are signed along the pedestrian routes in the centre.',
      },
      {
        question: 'Are they accessible?',
        answer:
          'The main public toilets have step-free access. Hours can vary by season, so check locally for late or winter opening.',
      },
    ],
    related: ['map', 'accessibility', 'drinking-water', 'central-market'],
    updated: 'Sources: Visit Ljubljana essential info, City of Ljubljana. Checked October 2026.',
  },

  'drinking-water': {
    slug: 'drinking-water',
    title: 'Drinking Water Near Prešeren Square',
    description:
      'Where to refill your bottle near Prešeren Square: public water points, the summer refill network and a quick hydration loop.',
    h1: 'Drinking Water Around the Square',
    intro:
      'Ljubljana’s tap water is safe to drink, and the city adds public water points in the centre, especially in summer. This page shows where to refill near the square so you can walk light.',
    facts: [
      { label: 'Tap water', value: 'Safe to drink city-wide' },
      { label: 'Water points', value: 'Public fountains/refill points in the centre' },
      { label: 'Season', value: 'Refill network expands in summer' },
      { label: 'Near square', value: 'Along the riverfront and main squares' },
      { label: 'Bring', value: 'A reusable bottle' },
      { label: 'Cost', value: 'Free' },
    ],
    sections: [
      {
        id: 'points',
        title: 'Where to refill',
        bullets: [
          'Public water points on or near the main squares and the riverfront promenade.',
          'A broader refill network is active in summer across the pedestrian centre.',
          'Cafés will usually refill a bottle on request if you are a customer.',
        ],
      },
      {
        id: 'loop',
        title: 'A quick hydration loop',
        paragraphs: [
          'From the square, drop to the riverfront where water points sit along the promenade, then loop back via the market. It is a flat, shaded option on a hot day and pairs with the public-toilets page for a comfortable walk.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I drink the tap water in Ljubljana?',
        answer:
          'Yes. Ljubljana tap water is safe to drink, and the city provides public water points, with more in summer.',
      },
      {
        question: 'Where do I refill near the square?',
        answer:
          'Public water points along the riverfront promenade and on the main squares; the refill network is widest in summer.',
      },
    ],
    related: ['public-toilets', 'map', 'one-hour-walk', 'summer'],
    updated: 'Sources: Visit Ljubljana, City of Ljubljana. Checked October 2026.',
  },

  'half-day-itinerary': {
    slug: 'half-day-itinerary',
    title: 'Ljubljana Half-Day Itinerary from Prešeren Square',
    description:
      'A 4–5 hour plan from Prešeren Square: the square, the Central Market, the old town, the cathedral and lunch, with timing and order.',
    h1: 'A Half-Day in Ljubljana from the Square',
    intro:
      'If you have half a day, start at Prešeren Square and build outward. This plan balances the square, the river, the market and the old town with a relaxed lunch — different from the one-hour dash or the full day.',
    facts: [
      { label: 'Time', value: 'About 4–5 hours' },
      { label: 'Pace', value: 'Relaxed, with a sit-down lunch' },
      { label: 'Covers', value: 'Square, market, old town, cathedral' },
      { label: 'Best start', value: 'Late morning, for the market' },
      { label: 'Walking', value: 'Flat along the river; some cobbles' },
      { label: 'Pairs with', value: 'Where to eat near the square' },
    ],
    sections: [
      {
        id: 'order',
        title: 'The order',
        bullets: [
          'Start on Prešeren Square: the monument, the church façade, the Triple Bridge.',
          'Cross to the river and follow it to the Central Market (best late morning).',
          'Walk north through the old town to Mestni trg and the cathedral.',
          'Lunch in the old town or by the river, then a slow return via the bridges.',
        ],
      },
      {
        id: 'timing',
        title: 'Loose timing',
        paragraphs: [
          'Give the square and bridge 30–40 minutes, the market 30–45, the old-town loop to the cathedral 60–90, and lunch 60–90. That leaves margin for a coffee and photos without rushing.',
          'This plan is deliberately lighter than the one-day version: no castle climb, no museum interiors unless you choose them.',
        ],
      },
    ],
    faq: [
      {
        question: 'What can I see in half a day in Ljubljana?',
        answer:
          'Prešeren Square, the Triple Bridge, the Central Market, the old town to Mestni trg and the cathedral, plus a relaxed lunch — about 4–5 hours at an easy pace.',
      },
      {
        question: 'Should I add the castle?',
        answer:
          'Not on a half-day unless you skip the market or lunch. The castle is better saved for the one-day plan.',
      },
    ],
    related: ['one-hour-walk', 'one-day-itinerary', 'central-market', 'food-and-cafes'],
    updated: 'Planning guidance; times are suggestions. Checked October 2026.',
  },

  'one-day-itinerary': {
    slug: 'one-day-itinerary',
    title: 'One Day in Ljubljana: Itinerary from Prešeren Square',
    description:
      'A full-day plan from Prešeren Square: morning square and market, midday old town and lunch, afternoon castle or museum, evening riverside.',
    h1: 'One Day in Ljubljana from the Square',
    intro:
      'With a full day you can do the square properly and still reach the castle, the old town and the river by evening. This plan sequences the sights so you walk downhill and into the light, not against it.',
    facts: [
      { label: 'Time', value: 'A full day, ~8 hours with breaks' },
      { label: 'Highlights', value: 'Square, market, old town, castle, river' },
      { label: 'Lunch', value: 'Old town or riverfront' },
      { label: 'Afternoon', value: 'Castle or a museum, your choice' },
      { label: 'Evening', value: 'Riverside walk and lights' },
      { label: 'Pace', value: 'Steady but not rushed' },
    ],
    sections: [
      {
        id: 'morning',
        title: 'Morning: square and market',
        bullets: [
          'Prešeren Square at opening light: monument, church, Triple Bridge.',
          'Riverside to the Central Market for produce and atmosphere.',
          'Old-town lanes north to Mestni trg and the cathedral.',
        ],
      },
      {
        id: 'midday',
        title: 'Midday: lunch and old town',
        paragraphs: [
          'Lunch in the old town or by the river, then continue to the Town Hall and Robba Fountain. Keep the early afternoon free for a choice: the castle (funicular up, view down) or a museum interior.',
        ],
      },
      {
        id: 'evening',
        title: 'Evening: river and lights',
        bullets: [
          'Return along the river as the lamps come on.',
          'A final loop of the bridges for blue-hour photos.',
          'Dinner near the square or in the old town.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I see Ljubljana in one day?',
        answer:
          'Yes. Start at Prešeren Square, add the market, old town and cathedral, choose the castle or a museum in the afternoon, and finish with a riverside evening — about 8 hours with breaks.',
      },
      {
        question: 'Castle or museum?',
        answer:
          'If it is your first visit and the weather is clear, the castle view is hard to beat. On a wet day, pick a museum interior instead.',
      },
    ],
    related: ['half-day-itinerary', 'ljubljana-castle', 'evening-walk', 'food-and-cafes'],
    updated: 'Planning guidance; times are suggestions. Checked October 2026.',
  },

  'free-sights': {
    slug: 'free-sights',
    title: 'Free Things to Do Near Prešeren Square',
    description:
      'What is free around Prešeren Square: the square and bridges, church-exterior views, the market atmosphere, and where paid entries begin.',
    h1: 'Free Sights Around Prešeren Square',
    intro:
      'Much of Ljubljana’s centre is free to enjoy from the outside. This page separates the free, walk-up experiences from the attractions that charge, so you can plan a low-cost day.',
    facts: [
      { label: 'Free', value: 'Square, bridges, riverfront, old-town lanes' },
      { label: 'Free view', value: 'Church façade, monument, market atmosphere' },
      { label: 'Paid', value: 'Castle tower, some museum interiors' },
      { label: 'Church inside', value: 'Free to enter (donations welcome)' },
      { label: 'Low cost', value: 'Walking is the main activity' },
      { label: 'Tip', value: 'Save paid entries for a rainy afternoon' },
    ],
    sections: [
      {
        id: 'free',
        title: 'What costs nothing',
        bullets: [
          'Prešeren Square, the Triple Bridge and the riverside promenade.',
          'Walking the old-town lanes, Mestni trg and the cathedral square.',
          'Looking at (not entering) the Franciscan church and the market stalls.',
        ],
      },
      {
        id: 'paid',
        title: 'Where money starts',
        paragraphs: [
          'The castle tower and certain museum interiors charge admission; the Franciscan church is free to enter (donations welcome). If you want one paid highlight, the castle view is the usual pick — see the castle page for ticketing notes.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Prešeren Square free?',
        answer:
          'Yes, the square and the surrounding pedestrian centre are free, open 24 hours and never ticketed.',
      },
      {
        question: 'What is worth paying for?',
        answer:
          'The castle tower for the view and selected museum interiors. Most everything else — bridges, squares, the river — is free to enjoy.',
      },
    ],
    related: ['one-hour-walk', 'ljubljana-castle', 'franciscan-church', 'map'],
    updated: 'Guidance; ticket prices change — check official sites. Checked October 2026.',
  },

  'rainy-day': {
    slug: 'rainy-day',
    title: 'Ljubljana Rainy Day Plan from Prešeren Square',
    description:
      'Indoor alternatives near Prešeren Square: covered transfers, museums and galleries, and how to keep a wet day pleasant.',
    h1: 'A Rainy Day Around Prešeren Square',
    intro:
      'Ljubljana is still good in the rain if you plan for cover. This page pairs indoor stops with short, covered transfers so a wet day stays comfortable — and it pairs with the free-sights and castle pages for a full plan.',
    facts: [
      { label: 'Strategy', value: 'Chain indoor stops with short covered walks' },
      { label: 'Indoors', value: 'Museums, galleries, the market hall, cafés' },
      { label: 'Covered', value: 'Central Market hall for a dry browse' },
      { label: 'Umbrellas', value: 'Riverside is more exposed than the lanes' },
      { label: 'Avoid', value: 'Long open-square waits in a downpour' },
      { label: 'Pair with', value: 'Castle interior, museums, food stops' },
    ],
    sections: [
      {
        id: 'plan',
        title: 'The rainy-day plan',
        bullets: [
          'Start under cover at the Central Market hall rather than the open square.',
          'Move between museums and galleries in the old town via the lanes, not the open riverfront.',
          'Use cafés as planned dry breaks between stops.',
        ],
      },
      {
        id: 'tips',
        title: 'Practical tips',
        paragraphs: [
          'The old-town lanes are more sheltered than the open square and the exposed riverside promenade. Save the bridges and the square for a break in the weather, and keep museum interiors for the heaviest rain.',
          'Check individual opening hours locally — some smaller museums close on Mondays.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Ljubljana worth visiting in the rain?',
        answer:
          'Yes, with a cover-aware plan: the market hall, museums, galleries and cafés keep you dry, and the old-town lanes are more sheltered than the open square and river.',
      },
      {
        question: 'What should I avoid on a wet day?',
        answer:
          'Long waits on the open square and the exposed riverside promenade. Chain indoor stops with short lane transfers instead.',
      },
    ],
    related: ['free-sights', 'ljubljana-castle', 'food-and-cafes', 'central-market'],
    updated: 'Guidance; opening hours vary — check locally. Checked October 2026.',
  },

  'family-walk': {
    slug: 'family-walk',
    title: 'Prešeren Square with Kids: A Family Walk',
    description:
      'A short, pushchair-friendly walk from Prešeren Square: flat segments, toilets, a café stop and simple observation tasks for children.',
    h1: 'A Family Walk from Prešeren Square',
    intro:
      'Ljubljana is an easy city with children: flat by the river, full of bridges to count and pigeons to spot. This plan keeps segments short, builds in a toilet and café stop, and gives kids something to look for.',
    facts: [
      { label: 'Length', value: 'About 1 hour, with breaks' },
      { label: 'Surface', value: 'Flat along the river; cobbles in lanes' },
      { label: 'Pushchairs', value: 'Fine on the promenade; harder in old town' },
      { label: 'Toilets', value: 'Riverfront public toilets (free)' },
      { label: 'Tasks', value: 'Count bridges, find the dragons, spot the poet' },
      { label: 'Cafés', value: 'Riverside terraces for a rest' },
    ],
    sections: [
      {
        id: 'route',
        title: 'The route',
        bullets: [
          'Start on the square: find the poet’s monument and the pink church.',
          'Cross the Triple Bridge and turn along the river — flat and pushchair-friendly.',
          'Continue to the Dragon Bridge to count the dragons (the highlight for most children).',
        ],
      },
      {
        id: 'tips',
        title: 'Tips for parents',
        paragraphs: [
          'Keep to the riverfront for the smoothest ride with a pushchair; the old-town cobbles are harder. Use the free riverside public toilets, and plan a café terrace stop so the walk stays fun rather than a march.',
          'Give children a small task — count the bridges, spot the dragon, find the statue facing the river — to turn the walk into a game.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Ljubljana good with young children?',
        answer:
          'Yes. The riverfront is flat and pushchair-friendly, the dragons on the Dragon Bridge are a hit, and the square is car-free and safe to roam.',
      },
      {
        question: 'Where are toilets with kids?',
        answer:
          'The free public toilets along the riverfront are the most convenient; cafés and the market hall also have facilities.',
      },
    ],
    related: ['one-hour-walk', 'dragon-bridge', 'public-toilets', 'drinking-water'],
    updated: 'Guidance for families; facilities checked October 2026.',
  },

  'evening-walk': {
    slug: 'evening-walk',
    title: 'Prešeren Square at Night: Evening Walk & Photos',
    description:
      'An after-dark loop from Prešeren Square: lit bridges, riverside reflections and the best photo order as the lamps come on.',
    h1: 'An Evening Walk from Prešeren Square',
    intro:
      'Ljubljana is a night city — the lamps along the river and the lit façades make the centre glow. This walk starts at blue hour and follows the light, ending back at the square.',
    facts: [
      { label: 'Start', value: 'Blue hour on the square' },
      { label: 'Loop', value: 'Square → Triple Bridge → river → Dragon Bridge → back' },
      { label: 'Light', value: 'Lamps on; façades and bridges lit' },
      { label: 'Best photos', value: 'Triple Bridge symmetry, river reflections' },
      { label: 'Time', value: 'About 45–60 minutes' },
      { label: 'Safe', value: 'Central, well-lit, pedestrian' },
    ],
    sections: [
      {
        id: 'route',
        title: 'The evening loop',
        bullets: [
          'Begin on the square as the lamps come on; the monument and church glow.',
          'Cross the Triple Bridge and follow the lit promenade southeast.',
          'Reach the Dragon Bridge, then return along the other bank for reflections.',
        ],
      },
      {
        id: 'photo',
        title: 'Photo order',
        paragraphs: [
          'Shoot the square first (blue hour), then the Triple Bridge from the far span for symmetry, and finally the river reflections on the way back. The lit bridges are the signature night shots.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is the centre safe at night?',
        answer:
          'The area around the square and the river is central, well-lit and pedestrian — comfortable for an evening walk.',
      },
      {
        question: 'When is the best light?',
        answer:
          'Blue hour, as the street lamps come on, with the bridges and façades lit. The reflections on the calm river are the bonus.',
      },
    ],
    related: ['photography', 'river-bridges-walk', 'one-hour-walk', 'christmas-lights'],
    updated: 'Guidance; lighting timings vary by season. Checked October 2026.',
  },

  'new-years-eve': {
    slug: 'new-years-eve',
    title: 'New Year’s Eve Near Prešeren Square, Ljubljana',
    description:
      'What happens around Prešeren Square on New Year’s Eve: the main celebrations, the concert square and practical tips for getting back.',
    h1: 'New Year’s Eve Near Prešeren Square',
    intro:
      'Ljubljana marks New Year with public concerts and fireworks around the city centre, and Prešeren Square is one of the focal points. This page covers what to expect and how to get back safely — confirm the official programme close to the date.',
    facts: [
      { label: 'When', value: '31 December, evening into midnight' },
      { label: 'Where', value: 'City-centre squares, including Prešeren Square' },
      { label: 'Typical', value: 'Open-air concerts and midnight fireworks' },
      { label: 'Crowds', value: 'Busy; arrive early for space' },
      { label: 'Transport', value: 'Check holiday night services' },
      { label: 'Source', value: 'Visit Ljubljana / City of Ljubljana events' },
    ],
    sections: [
      {
        id: 'what',
        title: 'What happens',
        paragraphs: [
          'The city centre hosts open-air concerts and midnight fireworks for New Year. Prešeren Square and nearby squares are common gathering points, with the river as a backdrop. The exact programme changes each year, so check the official Visit Ljubljana listings close to 31 December.',
        ],
      },
      {
        id: 'tips',
        title: 'Practical tips',
        bullets: [
          'Arrive early to find a spot; the centre gets crowded before midnight.',
          'Dress for cold — the square is open to the river wind.',
          'Plan your return: night public transport is limited on holidays, so know your taxi or walking route in advance.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is there a New Year’s Eve event at Prešeren Square?',
        answer:
          'Ljubljana holds public New Year concerts and fireworks in the centre, with the squares around Prešeren Square among the focal points. Confirm the year’s programme on Visit Ljubljana close to the date.',
      },
      {
        question: 'How do I get back afterwards?',
        answer:
          'Holiday night transport is limited, so plan a taxi or a known walking route before you go, and dress warmly for the walk.',
      },
    ],
    related: ['christmas-market', 'christmas-lights', 'evening-walk', 'map'],
    updated: 'Event details change yearly — confirm via Visit Ljubljana. Checked October 2026.',
  },

  'preseren-day': {
    slug: 'preseren-day',
    title: 'Prešeren Day (8 February) at Prešeren Square',
    description:
      'What Prešeren Day is, why the square is its focal point on 8 February, and how to take part — with the confirmed programme checked near the date.',
    h1: 'Prešeren Day at Prešeren Square',
    intro:
      'Prešeren Day (Prešernov dan), 8 February, is Slovenia’s national cultural holiday, marked at the poet’s monument on Prešeren Square. This page explains the day and what to expect — confirm the current year’s programme locally.',
    facts: [
      { label: 'Date', value: '8 February each year' },
      { label: 'Honours', value: 'France Prešeren (died 8 February 1849)' },
      { label: 'Focal point', value: 'The monument on Prešeren Square' },
      { label: 'Typical', value: 'Laying of wreaths, cultural events' },
      { label: 'Status', value: 'National cultural holiday' },
      { label: 'Source', value: 'Visit Ljubljana / national cultural bodies' },
    ],
    sections: [
      {
        id: 'meaning',
        title: 'Why 8 February',
        paragraphs: [
          'The holiday marks the death of France Prešeren on 8 February 1849. It honours Slovenian culture and is observed at the poet’s monument on Prešeren Square, where wreaths are traditionally laid.',
        ],
      },
      {
        id: 'attend',
        title: 'How to take part',
        bullets: [
          'Visit the square on the morning of 8 February for the monument ceremonies.',
          'Expect cultural events and a quieter, civic atmosphere than New Year.',
          'Confirm the exact schedule on Visit Ljubljana or national cultural listings close to the date.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is Prešeren Day?',
        answer:
          'Prešeren Day (8 February) is Slovenia’s national cultural holiday, honouring the poet France Prešeren. It is marked at his monument on Prešeren Square.',
      },
      {
        question: 'Can visitors join?',
        answer:
          'Yes. The square is public; the morning ceremonies at the monument are open to watch. Check the current year’s programme locally.',
      },
    ],
    related: ['france-preseren', 'preseren-monument', 'history', 'map'],
    updated: 'Cultural-holiday info; confirm yearly programme via Visit Ljubljana. Checked October 2026.',
  },

  'food-and-cafes': {
    slug: 'food-and-cafes',
    title: 'Where to Eat & Drink Near Prešeren Square',
    description:
      'Eating and coffee around Prešeren Square by area, type and budget: the riverside terraces, the old-town lanes and the station direction.',
    h1: 'Eating & Coffee Near Prešeren Square',
    intro:
      'You are never far from a café or a meal around the square. This page compares the areas by atmosphere and budget so you can pick without wandering — it points to districts, not individual businesses.',
    facts: [
      { label: 'Riverside', value: 'Terraces with a view; mid-range' },
      { label: 'Old-town lanes', value: 'Atmospheric; widest choice' },
      { label: 'Square edge', value: 'Quick coffee and sweets' },
      { label: 'Station direction', value: 'More budget options' },
      { label: 'Diet', value: 'Vegetarian and international widely available' },
      { label: 'Note', value: 'This guide compares areas, not venues' },
    ],
    sections: [
      {
        id: 'areas',
        title: 'By area',
        bullets: [
          'Riverside terraces — sit by the water; pleasant but pricier per seat.',
          'Old-town lanes — the deepest choice, from bakeries to sit-down restaurants.',
          'Square-edge cafés — fastest coffee and a pastry between sights.',
        ],
      },
      {
        id: 'tips',
        title: 'Choosing',
        paragraphs: [
          'For a view, take the riverside; for variety and value, walk into the old-town lanes a few minutes north. If you are on a tight budget or arriving by train, the station direction has simpler, cheaper options.',
          'Vegetarian, vegan and international food is common in the centre; look for the day’s specials rather than the menu tourist traps right on the square.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where should I eat near Prešeren Square?',
        answer:
          'Riverside terraces for the view, the old-town lanes north of the square for the widest choice and better value, and the station direction for budget options.',
      },
      {
        question: 'Are there vegetarian options?',
        answer:
          'Yes — vegetarian and international food is widely available in the centre; the old-town lanes have the most variety.',
      },
    ],
    related: ['where-to-stay', 'one-day-itinerary', 'central-market', 'evening-walk'],
    updated: 'Area guidance, not venue endorsements. Checked October 2026.',
  },
};
