import type { TopicContent, TopicSlug } from './topics';

export const SL_TOPICS: Partial<Record<TopicSlug, TopicContent>> = {
  history: {
    slug: 'history',
    title: 'Zgodovina Prešernovega trga: od mestnih vrat do središča Ljubljane',
    description:
      'Kako je iz križišča pri mestnih vratih postal Prešernov trg: potres 1895, secesijske stavbe, spomenik iz leta 1905, Ravnikarjeva prenova 1987–1988 in današnji peš trg.',
    h1: 'Zgodovina Prešernovega trga',
    intro:
      'Prešernov trg izgleda kot ena zasnova, je pa palimpsest: srednjeveško križišče, baročna cerkev, secesijska prenova po potresu, nacionalni spomenik in poznodvajsetaška peš cona. Ta stran predstavi plasti po vrsti, da trg berete kot časovnico in ne le kot foto točko.',
    facts: [
      { label: 'Prva oblika', value: 'Križišče pri srednjeveških mestnih vratih ob poti na sever' },
      { label: '1646–1660', value: 'Frančiškanska cerkev Marijinega oznanjenja zapre trg z južne strani' },
      { label: '1895', value: 'Potres uniči veliko dela okolice; nova gradnja v secesijskem slogu' },
      { label: '1905', value: 'Bronasti spomenik Franci Prešernu Ivana Zajca v središču trga' },
      { label: '1987–1988', value: 'Arhitekt Edvard Ravnikar trg preoblikuje v današnji krožni prostor' },
      { label: '2007', value: 'Prenova dokončana; trg postane popolnoma peš' },
    ],
    sections: [
      {
        id: 'vrata',
        title: 'Križišča pri mestnih vratih',
        paragraphs: [
          'Preden je bil trg, je bilo mesto cestno križišča. Srednjeveško mesto je ležalo severno, ta točka pa tik pred vrati, kjer se je pot ob Ljubljanici srečala s potjo na sever. Take križišča so skoraj sama postajala trgi — vozovi so čakali, trgovci so stavili, stavbe so se gostile ob robovih.',
          'Ta prvotna funkcija oblikuje kraj še danes. Trg ni zaprt vrtni trg: širše križišča, s katerim se ulice srečujejo z več smeri in os mostu teče skozenj.',
        ],
      },
      {
        id: 'cerkev',
        title: 'Rožnata cerkev zapre južno stran (1646–1660)',
        paragraphs: [
          'Frančiškanska cerkev Marijinega oznanjenja, zgrajena med 1646 in 1660, je križišču dala prvo arhitekturno sidro. Njen zgodnjerokokoša fasada zapira južni rob trga in je bila skozi stoletja ozadje vsakega dogodka na tem prostoru.',
          'Cerkev je še danes aktivna samostanska cerkev — zato se v zvočni sliki trga prepletajo turisti, peš hoja in cerkveni zvonovi.',
        ],
      },
      {
        id: 'potres',
        title: 'Potres 1895 in secesijska prenova',
        paragraphs: [
          'Velikonočni potres leta 1895 je uničil ali poškodoval velik del Ljubljane, tudi stavb okoli tega križišča. Desetletje prenove je trgu dalo obraz, ki ga danes največ obiskovalcev fotografira: dunajsko secesijo in art nouveau z zvitimi linijami, cvetličnim okrasjem in visokimi okni.',
          'Ko gledate severno in vzhodno stran trga, gledate v glavnem gradnjo po letu 1895. Zato trg bere kot "fin de siècle" srednjeevropsko mesto, ne kot srednjeveško jedro.',
        ],
      },
      {
        id: 'spomenik',
        title: '1905: pesnik zavzame sredino',
        paragraphs: [
          'Leta 1905 je bil v središču trga odkrit bronasti kip Franci Prešernu, dela kiparja Ivana Zajca. Postavitev narodnega pesnika na sredino glavnega mestnega križišča je bila namerna izjava o jeziku, narodni in kulturi — in trgu v praksi dala ime, še preden je bilo uradno.',
          'Spomenik je iz poti naredil oder. Zborovanja, slovesnosti, praznovanja in tržnice se do danes usmerjajo okoli kipa. Glejte posebno stran o spomeniku in zgodbi o Juliji.',
        ],
      },
      {
        id: 'ravnikar',
        title: '1987–1988: Ravnikarjev krog',
        paragraphs: [
          'Do poznega 20. stoletja je bilo križišča lijak prometa. Arhitekt Edvard Ravnikar ga je preoblikoval v krožni, peš usmerjen prostor, kakršnega poznamo danes, z radialno tlakovnico, ki vleče pogled k spomeniku v sredini.',
          'Zasnova 1987–1988 je razlog, da trg deluje kot soba in ne kot ulica: stavbe so stene, tlakovina je tla in spomenik stoji točno tam, kjer bi bil miza.',
        ],
      },
      {
        id: 'danes',
        title: 'Brez avtomobilov in pod varstvom',
        paragraphs: [
          'Po nadaljnji prenovi je bil trg leta 2007 zaprt za promet. Že od leta 1991 je spomenik kulturnega pomena za državo, kar omejuje, kaj se na njem in okoli njega sme spreminjati.',
          'Danes trg gosti mestne skupne trenutke — božično tržnico in luči, Prešernov dan 8. februarja, koncerte in zborovanja — hkrati pa za vse ostale ostaja preprosto kraj, kjer se Ljubljana srečuje.',
        ],
      },
    ],
    faq: [
      {
        question: 'Kdaj je bil Prešernov trg ustvarjen?',
        answer:
          'Enega datuma ni. Križišče je obstajalo v srednjem veku, cerkev je iz 1646–1660, večina okoliških stavb je po 1895, današnja krožna zasnova pa je iz leta 1987–1988.',
      },
      {
        question: 'Zakaj se imenuje Prešernov trg?',
        answer:
          'Po Franci Prešernu (1800–1849), narodnem pesniku. Njegov spomenik iz leta 1905 stoji v sredini, domačini pa še vedno pravijo, da se dobijo "pod spomenikom".',
      },
      {
        question: 'Kaj se je zgodilo s potresom 1895?',
        answer:
          'Potres je poškodoval velik del Ljubljane. Okolica trga je bila obnovljena v secesijskem slogu, zato arhitektura okoli trga izgleda drugače od srednjeveškega starega mesta nekaj ulic dlje.',
      },
      {
        question: 'Kdo je oblikoval današnji trg?',
        answer:
          'Edvard Ravnikar v letih 1987–1988, ki mu je dal krožno, peš postavitev z radialno tlakovino. Popolnoma brez prometa je od leta 2007.',
      },
      {
        question: 'Je ves trg zavarovan?',
        answer:
          'Trg je od leta 1991 spomenik kulturnega pomena za državo, zato so razporeditev, spomenik in okoliške fasade varovani.',
      },
    ],
    related: ['preseren-monument', 'france-preseren', 'architecture', 'map'],
    updated: 'Viri: Visit Ljubljana (Prešernov trg in spomenik), Mestna občina Ljubljana. Preverjeno oktober 2026.',
  },

  'preseren-monument': {
    slug: 'preseren-monument',
    title: 'Prešernov spomenik: pesnik, muza in ljubljansko zborno mesto',
    description:
      'Kaj prikazuje spomenik Franci Prešernu iz leta 1905, kdo ga je naredil, legenda o Juliji in kje stati, da ga pravilno preberete skupaj s trgom.',
    h1: 'Prešernov spomenik na Prešernovem trgu',
    intro:
      'Skoraj vsaka fotografija Ljubljane gre skozi ta kip in skoraj vsako domače srečanje se prične pod njim. Ta stran pojasni, kaj dejansko gledate — like, simbole, zgodbo za muze — in kje stati, da ga vidite prav.',
    facts: [
      { label: 'Odkrit', value: '1905, v središču trga' },
      { label: 'Kipar', value: 'Ivan Zajec' },
      { label: 'Material', value: 'Bron na kamnitem podstavku' },
      { label: 'Motiv', value: 'France Prešeren, narodni pesnik, z muzo nad njim' },
      { label: 'Dostop', value: 'Na prostem, brezplačen, viden ob vsaki uri' },
      { label: 'Domače ime', value: 'Srečanje "pod spomenikom"' },
    ],
    sections: [
      {
        id: 'like',
        title: 'Kaj kip prikazuje',
        paragraphs: [
          'Spomenik prikazuje Franci Prešernu, ki stoji s knjigo, nad njim pa krilato muzo z lovoriko — poezijo, slavo in navdih. Kompozicija je namerno asimetrična: pesnik gleda čez trg, muza pa se dviga za njim, zato kip iz vsakega kota bere drugače.',
          'Zajčev bron je bil kasneje postavljen točno v sredino Ravnikarjeve prenove, zato radialna tlakovina trga konvergira k podstavku kot tarča.',
        ],
      },
      {
        id: 'julija',
        title: 'Legenda o Juliji',
        paragraphs: [
          'Ljudska izročilo pravi, da muza ne gleda pesnika: njen pogled je usmerjen k oknu Julije Primič, ženske, ki jo je Prešeren ljubil in katere družinska hiša je nekoč stala blizu trga. Ne glede na to, ali je Zajec to nameraval, zgodba pojasni, zakaj kip deluje bolj kot ljubezenska zgodba kot kot nacionalni spomenik.',
          'Prešernova neizpolnjena ljubezen do Julije je navdihnila nekaj najbolj znanih pesmi, med njim valček, ki je postal državna himna.',
        ],
      },
      {
        id: 'pesnik',
        title: 'Zakaj je pesnik pomemben',
        paragraphs: [
          'France Prešeren (1800–1849) je pisal v slovenščini v času, ko ji je visoka kultura priznavala malo prostora. Njegova poezija je utrdila knjižni jezik, njegova Zdravljica pa je dala besede državne himne. Postavitev v sredino glavnega trga je bila izjava o tem, za kaj mesto stoji.',
          'Zato je tudi 8. februar, Prešernov dan, kulturni praznik v Sloveniji in trg njegov središčni prostor.',
        ],
      },
      {
        id: 'gledanje',
        title: 'Kje stati, da preberete spomenik',
        paragraphs: [
          'S strani Tromostovja dobite klasičen čelni pogled: kip, cerkvena fasada za njim, trg v ospredju. Iz severovzhodnega kota vidite pesnika proti secesijskim fasadam. Od blizu pojdite v počasnem krogu — knjiga, lovorika in draperije se razkrijejo le na bližini.',
          'Zgodaj zjutraj in modra ura po sončnem zahodu sta dva časa, ko bron najbolje bere; opoldansko sonce ga splošči.',
        ],
      },
    ],
    faq: [
      {
        question: 'Kdo je naredil Prešernov spomenik?',
        answer: 'Bronasti kip je kipar Ivan Zajec, odkrit leta 1905.',
      },
      {
        question: 'Kdo je figura nad pesnikom?',
        answer:
          'Muza z lovoriko, simbol poezije. Tradicija povezuje njen pogled z oknom Julije, Prešerenove neizpoljene ljubezni.',
      },
      {
        question: 'Ali je spomenik viden ponoči?',
        answer:
          'Da. Stoji na prostem na javnem trgu, ki ne zapira, in je po mraku osvetljen — eden od razlogov, zakaj je večerni sprehod priljubljen.',
      },
      {
        question: 'Ali je ogled spomenika brezplačen?',
        answer: 'Da. Je na javnem trgu brez vstopnine in brez odpiralnega časa.',
      },
      {
        question: 'Zakaj domačini pravijo "pod spomenikom"?',
        answer:
          'To je standardno zborno mesto v Ljubljani — kip na trgu je privzeto srečališče mesta.',
      },
    ],
    related: ['history', 'france-preseren', 'map', 'photography', 'one-hour-walk'],
    updated:
      'Viri: Visit Ljubljana (Prešernov spomenik), standardna literatura o Ivanu Zajcu. Zgodba o Juliji je podana kot lokalna legenda. Preverjeno oktober 2026.',
  },

  map: {
    slug: 'map',
    title: 'Zemljevid Prešernovega trga: vhodi, ulice in zborna mesta',
    description:
      'Orientacija na Prešernovem trgu: štirje vhodi, kam vodijo ulice, najlažja zborna mesta in napake, ki jih obiskovalci delajo med ljubljanskimi trgi.',
    h1: 'Prešernov trg: zemljevid, vhodi in zborna mesta',
    intro:
      'Trg je majhen, okrogel in obdan z ulicami, ki si med seboj podobajo — zato se ljudje zgubijo do 100 metrov od njega. Ta stran poda miselni zemljevid: kaj je na vsaki strani, kam vodijo ulice in kje stati, ko čakate koga.',
    facts: [
      { label: 'Naslov', value: 'Prešernov trg 1, 1000 Ljubljana' },
      { label: 'Koordinate', value: '46,0515 N, 14,5061 E' },
      { label: 'Koda Plus Code za Google zemljevide', value: '3G24+HC Ljubljana, Slovenija' },
      { label: 'Zahodni izhod', value: 'Tromostovje prek Ljubljanice' },
      { label: 'Severni izhod', value: 'Uličice starega mesta proti Mestnemu trgu in rotovžu' },
      { label: 'Južna stran', value: 'Nabrežje ob Ljubljanici' },
      { label: 'Severovzhodni izhod', value: 'Slovenska cesta proti avtobusni in železniški postaji' },
    ],
    sections: [
      {
        id: 'strani',
        title: 'Kaj je na vsaki strani',
        paragraphs: [
          'Trg omejujejo znamenitosti: Tromostovje odhaja proti zahodu, rožnata frančiškanska cerkev zapira jug, secesijske fasade obdajajo sever in vzhod, Prešernov spomenik pa stoji v sredini. Ko imaš te štiri dejstva, trg neha biti labirint.',
          'Reka teče tik južno od cerkve. S trga se lahko v manj kot minuti spustite na nabrežje, kar je najhitreja peš pot do tržnice in Zmajskega mostu.',
        ],
      },
      {
        id: 'vhodi',
        title: 'Štirje vhodi',
        bullets: [
          'Z zahoda — prek Tromostovja z Trga republike in levega brega.',
          'Z severa — skozi peš uličice starega mesta, 4–6 minut od Mestnega trga in rotovža.',
          'Z jugovzhoda — z nabrežja, ki vodi do tržnice in Zmajskega mostu.',
          'Z severovzhoda — po Slovenski cesti od avtobusne in železniške postaje, približno 10 minut hoda.',
        ],
      },
      {
        id: 'srecanja',
        title: 'Enostavna zborna mesta',
        paragraphs: [
          'Privzeto je "pod spomenikom" — pod Prešernovim spomenikom. Viden je z vsakega vhoda, nemogoče ga je zgrešiti in domačini bodo predlagali ravno njega.',
          'Rezervni načini, ki tudi delujejo: stopnice rožnate cerkve na južni strani, srednji lok Tromostovja ali katere od kavarnih teras na severni strani. Če dogovarjate zborno mesto, imenujte orientacijsko točko, ne ulico — imena ulic okoli trga se menjavajo vsak blok.',
        ],
      },
      {
        id: 'napake',
        title: 'Napak pri orientaciji, ki se jih izogibajte',
        bullets: [
          'Prešernov trg ni Kongresni trg: tisti je severozahodno ob gradu in univerzi, 6–8 minut hoda stran.',
          'Grad ni "takoj za" trgom — je 15–20 minut hoda v klanec skozi staro mesto.',
          'Tržnica ni na trgu — je 8–10 minut stran ob vodi.',
          'Avti ne morejo do trga; če voznik reče "peljem te na Prešernov trg", misli rob peše cone, 1–2 minuti hoda od nje.',
        ],
      },
    ],
    faq: [
      {
        question: 'Kako najdem Prešernov trg z avtobusne postaje?',
        answer:
          'Z postaje po Slovenski cesti proti jugozahodu približno 700 metrov — okoli 10 minut hoda. Trg se odpre pred vami, Tromostovje je naravnost naprej.',
      },
      {
        question: 'Je Prešernov trg isti kot Kongresni trg?',
        answer:
          'Ne. Kongresni trg leži severozahodno od starega mesta ob gradu. Med njima je 6–8 minut hoda; imena ločite že pri dogovarjanju.',
      },
      {
        question: 'Kje se domačini dobivajo na Prešernovem trgu?',
        answer: 'Pod Prešernovim spomenikom — "pod spomenikom", standardno zborno mesto v Ljubljani.',
      },
      {
        question: 'Ali lahko pridem s kolom do trga?',
        answer:
          'Ne. Trg in okolica sta peš cona. Parkirajte v garaži na robu središča in pridite peš, ali prosite taksi, da vas odpelje do roba peše cone.',
      },
      {
        question: 'Kje je najbližji dostop do reke s trga?',
        answer: 'Nabrežje se prične minuto južno od cerkve; od tam je tržnica 8–10 minut po vodi.',
      },
    ],
    related: ['station-to-square', 'one-hour-walk', 'triple-bridge', 'congress-square'],
    updated: 'Viri: Visit Ljubljana, geometrija OpenStreetMap. Oddaljenosti preverjene oktober 2026.',
  },

  'station-to-square': {
    slug: 'station-to-square',
    title: 'Z ljubljanske postaje na Prešernov trg: 10 minut hoda',
    description:
      'Hoja z železniške in avtobusne postaje na Prešernov trg po korakih: razdalja, čas, opombe za prtljago in avtobusna alternativa.',
    h1: 'S postaje na Prešernov trg',
    intro:
      'Ljubljanska železniška in avtobusna postajata sta druga ob drugi, Prešernov trg pa je ravna 10-minutna hoja stran. Ta stran poda pot po korakih, kaj se spremeni s prtljago in kdaj je avtobus ali taksi boljša izbira.',
    facts: [
      { label: 'Razdalja', value: 'Okoli 700 m' },
      { label: 'Čas hoda', value: 'Okoli 10 minut v običajnem tempu' },
      { label: 'Površina', value: 'Tlakovana, ravna, brez stopnic po celi poti' },
      { label: 'Glavna ulica', value: 'Slovenska cesta' },
      { label: 'Strošek', value: 'Brezplačno — na tej razdalji hoja premaga vozovnico' },
    ],
    sections: [
      {
        id: 'pot',
        title: 'Pot po korakih',
        bullets: [
          'Z avtobusne (ali železniške) postaje poiščite Slovensko cesto v smeri jugozahod.',
          'Po njej naravnost; mimo trgovin, bank in robu peše cone.',
          'Nadaljujte, ko se ulica zoži v staro mesto — nadaljujte proti reki.',
          'Trg se odpre pred vami: Tromostovje naravnost, rožnata cerkev desno, spomenik v sredini.',
        ],
      },
      {
        id: 'prtljaga',
        title: 'S prtljago',
        paragraphs: [
          'Pot je ravna in brez stopnic, zato je vleka kovčka realna — a zadnji del je peš tlakovina s kolobarji in občasnimi nivoji pri vhodih v trgovine. S kovčkom računajte 15, ne 10 minut.',
          'Če stanujete blizu postaje, boste to hojo ponovili večkrat. Mnogi obiskovalci s težkimi kovčki za prvi prihod vzamejo taksi, potem pa hodijo.',
        ],
      },
      {
        id: 'alternative',
        title: 'Avtobusna in taksijska alternativa',
        paragraphs: [
          'Več mestnih linij vozi med okolico postaje in postajališči v nekaj minutah hoda od trga; z eno vožnjo 1,50 € na Urbano je poceni, redko pa hitrejše od hoda na tej razdalji.',
          'Taksi s postajališča do roba peše cone trga je kratka vožnja po števcu — vredna s prtljago, pozno ponoči ali v slabem vremenu. Prosite za "Prešernov trg" ali Tromostovje.',
        ],
      },
      {
        id: 'pozno',
        title: 'Pozni ali zgodnji prihod',
        paragraphs: [
          'Trg je javen in osvetljen, zato pozni prihodi sami po sebi niso problem. Ponoči se spremeni hoja s postaje: Slovenska cesta ostaja obiskana, če pa pridete po polnoči s prtljago, je taksi preprostejša izbira.',
        ],
      },
    ],
    faq: [
      {
        question: 'Kako daleč je Prešernov trg od postaje?',
        answer: 'Okoli 700 metrov — približno 10 minut hoda po Slovenski cesti.',
      },
      {
        question: 'Je hoja dostopna za invalidski voziček?',
        answer: 'Da. Pot je tlakovana, ravna in skoraj povsod brez stopnic — eden najlažjih prihodov na trg.',
      },
      {
        question: 'Ali lahko vzamem avtobus?',
        answer: 'Da, več linij ustavi blizu trga, a na 700 metrih je hoja običajno hitrejša od čakanja.',
      },
      {
        question: 'Koliko stane taksi s postaje?',
        answer: 'Kratka vožnja po števcu do roba peše cone; dogovorite se za števec in recite "Prešernov trg" ali Tromostovje.',
      },
      {
        question: 'Ali hoja deluje ponoči?',
        answer: 'Da — ulice so osvetljene in trg je javen. S prtljago pozno ponoči je taksi udobnejši.',
      },
    ],
    related: ['map', 'bus-urbana', 'airport-to-square', 'accessibility'],
    updated: 'Viri: OpenStreetMap, Visit Ljubljana. Razdalje in časi preverjeni oktober 2026.',
  },

  'christmas-market': {
    slug: 'christmas-market',
    title: 'Božična tržnica na Prešernovem trgu (2026–2027)',
    description:
      'Datumi, razporeditev in strategija obiska božične tržnice okoli Prešernovega trga: 27. november 2026 do 3. januarja 2027, šotori, hrana in izbiranje časa.',
    h1: 'Božična tržnica na Prešernovem trgu',
    intro:
      'V decemberu trg postane srce ljubljanske praznične sezone. Ta stran podaja potrjene datume 2026–2027, kako so šotori razporejeni in kako izbrati čas obiska, da ga res uživate.',
    facts: [
      { label: 'Datumi sezone', value: '27. november 2026 – 3. januarja 2027' },
      { label: 'Prižig luči', value: '27. november 2026, 17.00–17.30 na trgu' },
      { label: 'Vstop', value: 'Brezplačen — javni trg' },
      { label: 'Razporeditev', value: 'Šotori okoli trga in ob nabrežju' },
      { label: 'Preverite', value: 'Točen načrt šotorov in ure sledijo uradnemu programu' },
    ],
    sections: [
      {
        id: 'datumi',
        title: 'Datumi in dnevni vzorec',
        paragraphs: [
          'Sezona 2026–2027 poteka od 27. novembra 2026 do 3. januarja 2027. Delovni časi šotorov se razlikujejo po dnevu, najbolj obiskana pa sta prvi vikendu po prižigu.',
          'Nekateri šotori so ob določenih praznikih zaprti — če potujete 24., 25., 31. december ali 1. januarja, pred načrtovanjem preverite uradni program.',
        ],
      },
      {
        id: 'razporeditev',
        title: 'Kje so šotori',
        paragraphs: [
          'Tržnica se razprostira okoli Prešernovega trga in nadaljuje proti nabrežju, zato pot skozi njo sledi krožni obliki trga. Spomenik ostaja viden v sredini, zaradi česar je trg enostaven za orientacijo tudi, ko je poln.',
          'Tržnico obravnavajte kot zanko, ne cilj: vstop s strani Tromostovja, krog okoli trga, nadaljevanje ob reki in izhod proti uličicam starega mesta.',
        ],
      },
      {
        id: 'hrana',
        title: 'Kaj pričakovati',
        paragraphs: [
          'Pričakujte običajno praznično mešanico: tople napitke, pekovske izdelke, slovenske jedi, sladice in darilne šotore. Cene so tržniške, ne gostinske, večina šotorov sprejema kartice — za najmanjše pa imejte pri sebi nekaj gotovine.',
          'Ta vodnik navaja kategorije, ne šotore: nismo komercialni imenik, zasedba šotorov se vsako leto spreminja.',
        ],
      },
      {
        id: 'gneca',
        title: 'Strategija gneče',
        bullets: [
          'Delovnostran dopoldne in zgodaj popoldne so mirni; vrh je prvi vikend po prižigu.',
          'Ura po mraku je najbolj obiskana — in najlepša. Izbirajte zavestno.',
          'Za fotografije trga brez ljudi pridite pred 10.00 ali po 21.00.',
          'Tople plasti so pomembne: trg je odprt in rečni veter je mrzel.',
        ],
      },
      {
        id: 'kombinacija',
        title: 'Kombinirajte s potjo luči',
        paragraphs: [
          'Tržnica se naravno povezuje z večerno potjo luči: šotori v mraku, nato osvetljena pot ob reki in skozi staro mesto. Čase in podrobnosti prižiga najdete na strani o lučeh.',
        ],
      },
    ],
    faq: [
      {
        question: 'Kdaj je božična tržnica v Ljubljani leta 2026?',
        answer: 'Sezona poteka od 27. novembra 2026 do 3. januarja 2027.',
      },
      {
        question: 'Kje je tržnica?',
        answer:
          'Razprostira se okoli Prešernovega trga in ob nabrežju; točen načrt šotorov objavlja uradni program vsako leto.',
      },
      {
        question: 'Je božična tržnica brezplačna?',
        answer: 'Da — vstop je brezplačen, plačate le, kar jeste ali kupite.',
      },
      {
        question: 'Kdaj prižgejo luči?',
        answer: 'Prižig luči na Prešernovem trgu je načrtovan za 27. november 2026 ob 17.00–17.30 po lokalnem času.',
      },
      {
        question: 'Kdaj je najmanj gneče?',
        answer:
          'Delovnostran dopoldne in zgodaj popoldne ter prva ali zadnja ura dneva. Vrh je prvi vikend po prižigu.',
      },
    ],
    related: ['christmas-lights', 'evening-walk', 'rainy-day', 'food-and-cafes'],
    updated:
      'Viri: Visit Ljubljana (program Festive December) za datume 2026–2027 in čas prižiga. Preverjeno oktober 2026; ure blizu sezone ponovno preverite.',
  },

  'christmas-lights': {
    slug: 'christmas-lights',
    title: 'Božične luči v Ljubljani: prižig in večerna pot (2026)',
    description:
      'Prižig luči na Prešernovem trgu 27. novembra 2026 ob 17.00 ter 60–75-minutna večerna pot luči ob reki in skozi staro mesto.',
    h1: 'Božične luči v Ljubljani: prižig in večerna pot',
    intro:
      'Ljubljana december doživlja s svetlobo, ne s hrupom. Trenutek, ki ga zažene, je prižig na Prešernovem trgu; potem mesto postane hoja po osvetljenih mostovih, fasadah in drevesih. Ta stran podaja ceremonijo in pot, ki luči pokaže najbolje.',
    facts: [
      { label: 'Prižig', value: '27. november 2026, 17.00–17.30, Prešernov trg' },
      { label: 'Sezona', value: 'Luči svetijo skozi praznično sezo v začetek januarja' },
      { label: 'Cena', value: 'Brezplačno — javni prostori' },
      { label: 'Dolžina poti', value: 'Okoli 60–75 minut v hoječem tempu' },
      { label: 'Prinesite', value: 'Tople plasti — trg je odprt rečnemu vetru' },
    ],
    sections: [
      {
        id: 'prizig',
        title: 'Trenutek prižiga',
        paragraphs: [
          'Luči na Prešernovem trgu prižgejo 27. novembra 2026 med 17.00 in 17.30 po lokalnem času. Trg se napolni že dlje pred odštevanjem, zato pridite 20–30 minut prej, če želite jasen pogled na spomenik in cerkveno fasado.',
          'Ceremonija je kratka. Pravi dogodek je prvih deset minut po njej, ko se ves trg zasveti in vsi hkrati fotografirajo.',
        ],
      },
      {
        id: 'pot',
        title: '60–75-minutna pot luči',
        bullets: [
          'Začetek na Prešernovem trgu po mraku — spomenik, fasada cerkve in osvetljene terase.',
          'Prek Tromostovja: svetilke se odsevajo v Ljubljanici — najboljši nočni okvir središča.',
          'Po nabrežju proti tržnici, kjer luči šotorov nadaljujejo temo.',
          'Vrnitev skozi uličice starega mesta — osvetlitev fasad in izložbe.',
          'Zaključek nazaj na trgu za drugi pogled, ko poznate pot.',
        ],
      },
      {
        id: 'fotografije',
        title: 'Fotografiranje luči',
        bullets: [
          'Modra ura — tik po sončnem zahodu — uravnoteži nebo in luči bolje kot polna tema.',
          'Ogrado mosta uporabite kot oporo za stativ za odseve v reki.',
          'Osvetljen spomenik proti cerkvi je klasičen okvir; počakajte na vrzel v gneči.',
          'Telefoni tovrstno sceno obvladajo; stativ je boljši, a v gneči pogosto nepraktičen.',
        ],
      },
      {
        id: 'domov',
        title: 'Pot domov pozno',
        paragraphs: [
          'Središče ostaja živo decemberjskimi večeri. Če stanujete centralno, je hoja nazaj kratka; če se odpravljate iz središča, pred odhodom preverite čase zadnjih avtobusov — frekvence zvečer zunaj jedra upadajo.',
        ],
      },
    ],
    faq: [
      {
        question: 'Kdaj prižgejo božične luči v Ljubljani?',
        answer: 'Na Prešernovem trgu 27. novembra 2026 med 17.00 in 17.30 po lokalnem času.',
      },
      {
        question: 'Kako dolgo luči svetijo?',
        answer:
          'Skozi praznično sezo v začetek januarja; sezona božične tržnice poteka do 3. januarja 2027.',
      },
      {
        question: 'Kdaj je najboljši čas za ogled luči?',
        answer:
          'Modra ura tik po sončnem zahodu, ko nebo še drži barvo in luči so že prižgane.',
      },
      {
        question: 'Ali je pot luči plačljiva?',
        answer: 'Ne — pot vodi po javnih ulicah in trgih.',
      },
      {
        question: 'Ali lahko luči kombiniram s tržnico?',
        answer:
          'Da — šotore obiščite v mraku, nato sledite poti luči; obe se prekrivata okoli trga in reke.',
      },
    ],
    related: ['christmas-market', 'evening-walk', 'one-hour-walk', 'new-years-eve'],
    updated:
      'Viri: Visit Ljubljana (program Festive December) za čas prižiga 2026. Preverjeno oktober 2026; program blizu datuma ponovno preverite.',
  },
  'france-preseren': {
    slug: 'france-preseren',
    title: 'France Prešeren: kdo je bil in zakaj nosi trg njegovo ime',
    description:
      'France Prešeren (1800–1849), slovenski narodni pesnik, in zgodba o tem, kako je lirski pesnik prišel v središče mesta in njegove narodne identitete.',
    h1: 'Kdo je bil France Prešeren?',
    intro:
      'Stojite na trgu, poimenovanem po človeku, ki ni imel oblasti in je umrl, preden je trg dobil njegovo ime. France Prešeren je za Slovenijo to, kar je Dante za Italijo ali Mickiewicz za Poljsko: pesnik, ki je majhnemu jeziku dal sodobni književni glas. Ta stran pojasnjuje, kdo je bil, kaj je napisal in zakaj njegov bronasti kip stoji sredi Ljubljane.',
    facts: [
      { label: 'Rojen', value: '3. december 1800, Vrba (Gorenjska)' },
      { label: 'Umrl', value: '8. februar 1849, Kranj' },
      { label: 'Ključno delo', value: 'Zdravljica, 1844' },
      { label: 'Državna himna', value: '7. kitica Zdravljice' },
      { label: 'Spomenik', value: 'Bronasti kip odkrit na trgu leta 1905' },
      { label: 'Prešernov dan', value: '8. februar — slovenski kulturni praznik' },
    ],
    sections: [
      {
        id: 'life',
        title: 'Pesnik, ne vojskovodja',
        paragraphs: [
          'France Prešeren (1800–1849) se je izšolal za pravnika, a se je uveljavil kot največji slovenski pesnik. Pišoč v slovenščini, ko je javni prostor vodil nemščina, je dokazal, da jezik zmore najvišjo lirsko obliko — sonet.',
          'Njegovo življenje je bilo osebno težavno: malo priznanja za življenja, politično razočaranje in neuslišana ljubezen do Julije Primic, ki jo je preoblikoval v svoje najlepše verze. Ta ljubezenska zgodba je dobesedno vzidana v trg — glejte stran o spomeniku.',
        ],
      },
      {
        id: 'work',
        title: 'Kaj je napisal',
        bullets: [
          'Zdravljica (1844) — cikel pijanskih pesmi, katerih sedma kitica, ki je želela dobro vsem narodom, je leta 1989 postala slovenska državna himna.',
          'Sonetni venec — tehnično briljanten niz sonetov s skritim akrostihom v začetnih črkah.',
          'Krst pri Savici — epska pesem, ki je postala temelj slovenske književnosti.',
        ],
      },
      {
        id: 'why-square',
        title: 'Zakaj trg nosi njegovo ime',
        paragraphs: [
          'Leta 1905 so na sredino glavnega križišča mesta postavili bronasti spomenik Prešernu. Pesnika v središče mesta je bila premišljena kulturna in politična izjava: to naj bo srce slovenske Ljubljane.',
          'Trg so poimenovali Prešernov trg šele kasneje, a Ljubljana se je v praksi že prej centrirala na pesnika. Domorodci še vedno rečejo, da se dobijo „pod spomenikom“.',
        ],
      },
    ],
    faq: [
      {
        question: 'Kdo je bil France Prešeren?',
        answer:
          'France Prešeren (1800–1849) je bil slovenski pesnik, katerega delo, zlasti pesem Zdravljica, je pomagalo oblikovati sodobni slovenski književni jezik in narodno identiteto. Sedma kitica Zdravljice je slovenska državna himna.',
      },
      {
        question: 'Zakaj je na trgu Prešernov spomenik?',
        answer:
          'Bronasti kip kiparja Ivana Zajca so odkrili leta 1905 v čast narodnemu pesniku sredi mesta. S tem je trg postal kulturno srce Ljubljane.',
      },
      {
        question: 'Kdaj je Prešernov dan?',
        answer:
          '8. februarja, na dan Prešernove smrti leta 1849. To je slovenski kulturni praznik; trg je središče dnevne slovesnosti.',
      },
    ],
    related: ['history', 'preseren-monument', 'map'],
    updated:
      'Viri: Visit Ljubljana (strani o Prešernu), Ministrstvo za kulturo RS. Preverjeno oktober 2026.',
  },

  architecture: {
    slug: 'architecture',
    title: 'Stavbe okoli Prešernovega trga: vodnik po fasadah',
    description:
      'Beri trg kot arhitekt: rožnata frančiškanska cerkev, secesijski obroč po letu 1895, Urbancova in Hauptmanova hiša ter Plečnikovo Tromostovje.',
    h1: 'Stavbe okoli Prešernovega trga',
    intro:
      'Trg je kratek tečaj ljubljanske arhitekture. Ena stran je baročna iz 17. stoletja; večina ostalega je dunajska secesija, zgrajena po potresu leta 1895; mostno os pa je v 30. letih 20. stoletja preoblikoval Jože Plečnik. Ta stran poimenuje vsako stavbo in pove, kaj iskati.',
    facts: [
      { label: 'Frančiškanska cerkev', value: '1646–1660, zgodnji barok, najstarejši opornik trga' },
      { label: 'Urbancova hiša', value: '1903, dunajska secesija, vogalna stavba' },
      { label: 'Hauptmanova hiša', value: '1873, neorenesansa, vogal Wolfove' },
      { label: 'Sever in vzhod', value: 'Obnovljeno v secesiji po letu 1895' },
      { label: 'Tromostovje', value: 'Jože Plečnik, 1929–1932' },
      { label: 'Spomenik', value: 'Bron izpod Ivana Zajca, 1905' },
    ],
    sections: [
      {
        id: 'church',
        title: 'Rožnata cerkev zapira jug',
        paragraphs: [
          'Frančiškanska cerkev Marijinega oznanjenja (1646–1660) je najstarejša in najbolj prevladujoča stavba na trgu. Njena nenavadna rožnata (pravzaprav bledo terakota in apnenec) baročna fasada je najlažja orientacijska točka v bližini.',
          'Stopite v notranjost in šum trga izgine — to je delujoč samostanska cerkev, zato se zvonovi mešajo s turističnim vrvežem zunaj.',
        ],
      },
      {
        id: 'secession',
        title: 'Secesijski obroč',
        paragraphs: [
          'Poglejte severne in vzhodne stranice trga in gledate gradnjo po letu 1895. Po velikonočnem potresu so poškodovane stavbe obnovili v dunajski secesiji: krivulje, cvetlični okras, visoka okna in zaokroženi vogali.',
          'Zato trg deluje kot „fin de siècle“ srednje Evrope, ne kot srednjeveško mesto — skoraj vse, kar fotografirate tukaj razen cerkve, je staro manj kot 130 let.',
        ],
      },
      {
        id: 'urbanc',
        title: 'Urbancova hiša (vogalni dragulj)',
        paragraphs: [
          'Na vogalu s Čopovo ulico je Urbancova hiša (1903) najbogatejša secesijska fasada na trgu, z alegoričnimi kipi in znamenito kavarno v pritličju. To je najboljši posamezni primer, kako je Ljubljana prevzela dunajsko moderno.',
        ],
      },
      {
        id: 'hauptman',
        title: 'Hauptmanova hiša',
        paragraphs: [
          'Neorenesančna stavba na vogalu Wolfove (1873) je starejša od potresne obnove in kaže prejšnji historicistični okus — težja, simetričnejša, manj cvetlična od secesijskih sosed. Primerjajte oba stila čez trg.',
        ],
      },
      {
        id: 'bridge',
        title: 'Mostna os je tudi arhitektura',
        paragraphs: [
          'Tromostovje ni le prehod: Plečnik je en most spremenil v tri z nizkimi balustradami in svetilkami, da trg preteče na levi breg. Beri ga skupaj s trgom — ena sta kompozicija.',
        ],
      },
    ],
    faq: [
      {
        question: 'Zakaj je frančiškanska cerkev rožnata?',
        answer:
          'Fasada je pobarvana v terakota-apnenec baročni vzorec, ki je postal rožnat ton, ki ga turisti opazijo danes. Izvira iz gradnje cerkve 1646–1660.',
      },
      {
        question: 'Kakšen slog obdaja trg?',
        answer:
          'Večina stavb je dunajska secesija (art nouveau), obnovljena po potresu leta 1895, z baročno frančiškansko cerkvijo kot najstarejšim elementom in Plečkovim Tromostovjem iz 30. let kot moderno osjo.',
      },
      {
        question: 'Kdo je bil Jože Plečnik?',
        answer:
          'Jože Plečnik (1872–1957) je bil slovenski arhitekt, ki je oblikoval velik del sodobne Ljubljane, med drugim Tromostovje, tržniške arkade in bronata vrata stolnice.',
      },
    ],
    related: ['history', '1895-earthquake', 'preseren-monument', 'art-nouveau-walk'],
    updated: 'Viri: Visit Ljubljana (dedovska stran), MOL. Preverjeno oktober 2026.',
  },

  '1895-earthquake': {
    slug: '1895-earthquake',
    title: 'Ljubljanski potres leta 1895 in kako je preoblikoval Prešernov trg',
    description:
      '14. aprila 1895 je Ljubljano zadel potres na velikonočno nedeljo; secesijska obnova, ki je sledila, je dala Prešernovemu trgu njegov sodobni obraz.',
    h1: 'Potres leta 1895, ki je ustvaril trg',
    intro:
      'Če želite razumeti, zakaj Prešernov trg izgleda tako, kot izgleda, ključni datum ni 1905 (spomenik), ampak 1895 (potres). Potres je poškodoval velik del Ljubljane, hitra obnova v sodobni secesiji pa je razlog, da trg deluje kot fin de siècle Evropa, ne srednjeveško mesto.',
    facts: [
      { label: 'Datum', value: 'Velikonočna nedelja, 14. april 1895' },
      { label: 'Magnituda', value: 'Okoli 6,1; čutili so ga po celi regiji' },
      { label: 'Žarišče', value: 'Bližina Janč, vzhodno od mesta' },
      { label: 'Rezultat', value: 'Obsežna škoda, nato hitra obnova' },
      { label: 'Slog obnove', value: 'Dunajska secesija (art nouveau)' },
      { label: 'Ključna arhitekta', value: 'Maks Fabiani, Ciril Metod Koch' },
    ],
    sections: [
      {
        id: 'quake',
        title: 'Jutro 14. aprila',
        paragraphs: [
          'Potres je prizadel Ljubljano na velikonočno nedeljo zjutraj leta 1895 in poškodoval ali uničil velik del mesta, vključno s stavbami okoli današnjega Prešernovega trga. Ker se je zgodil na praznično jutro, je bilo žrtev manj, kot bi lahko bilo.',
          'Šok je mesto prisilil v prisilno modernizacijo: namesto krpanja starih struktur se je Ljubljana obnovila v sodobnem slogu.',
        ],
      },
      {
        id: 'rebuild',
        title: 'Desetletje secesijske gradnje',
        paragraphs: [
          'V poznih 90. letih in zgodnjih 1900. je bilo središče obnovljeno v dunajski secesiji. Arhitekti, kot sta Maks Fabiani in Ciril Metod Koch, so oblikovali nove fasade, ki jih vidite na severni in vzhodni strani trga.',
          'Zato, ko stojite na trgu, vidite krivulje in visoka okna, ki za križišče segajo le nekaj let po potresu — medtem ko je rožnata frančiškanska cerkev iz 1600. let potres preživela.',
        ],
      },
      {
        id: 'legacy',
        title: 'Dediščina, ki jo še vidite',
        bullets: [
          'Severne in vzhodne stavbe trga so secesijska dela po letu 1895.',
          'Kontrast z baročno cerkvijo naredi časovnico vidno na prvi pogled.',
          'Obnova je pripravila teren za Plečkovo kasnejše preoblikovanje mostu in nabrežja.',
        ],
      },
    ],
    faq: [
      {
        question: 'Kdaj je bil ljubljanski potres?',
        answer:
          '14. aprila 1895, na velikonočno nedeljo zjutraj. Povzročil je obsežno škodo in sprožil hitro sodobno obnovo mesta.',
      },
      {
        question: 'Kako močan je bil?',
        answer:
          'Ocenjuje se na okoli 6,1, z žariščem blizu Janč vzhodno od mesta. Dovelj močan, da je poškodoval velik del zgodovinskega središča.',
      },
      {
        question: 'Zakaj trg izgleda art nouveau?',
        answer:
          'Ker so bile stavbe, poškodovane leta 1895, obnovljene v dunajski secesiji (art nouveau) v naslednjem desetletju. Slog, ki ga fotografirate, je večinoma po potresu.',
      },
    ],
    related: ['history', 'architecture', 'art-nouveau-walk'],
    updated: 'Viri: Slovenska akademija znanosti, Visit Ljubljana. Preverjeno oktober 2026.',
  },

  'dragon-bridge': {
    slug: 'dragon-bridge',
    title: 'Prešernov trg do Zmajskega mostu: sprehod ob reki',
    description:
      'Raven sprehod od Prešernovega trga do ljubljanskega Zmajskega mostu: pot, zgodovina mostu in zmajevi kipi.',
    h1: 'Od Prešernovega trga do Zmajskega mostu',
    intro:
      'Zmajski most (Zmajski most) je eden najbolj fotografiranih motivov Ljubljane in lahko se ga z lahkoto sprehodite od Prešernovega trga ob reki. Ta stran podaja pešpot in pojasnjuje, zakaj so tam zmaji.',
    facts: [
      { label: 'Hoja', value: 'Okoli 10–15 min počasne hoje' },
      { label: 'Smer', value: 'Jugovzhodno, ob Ljubljanici' },
      { label: 'Most zgrajen', value: '1901 (odprt kot Jubilejni most)' },
      { label: 'Znan po', value: 'Štirje zmajevi kipi na vogalih' },
      { label: 'Površina', value: 'Ravno, tlakovano, brez stopnic' },
      { label: 'Naprej do', value: 'Osrednja tržnica, staro mesto, vzpenjača na grad' },
    ],
    sections: [
      {
        id: 'route',
        title: 'Pešpot',
        bullets: [
          'Od trga prečkajte Tromostovje na levi breg.',
          'Zavijte jugovzhodno po nabrežju (nabrežje Ljubljanice).',
          'Ostanite ob vodi; Zmajski most se pojavi po nekaj minutah.',
          'Pot je ravna in očitna — sledite reki.',
        ],
      },
      {
        id: 'bridge',
        title: 'Sam most',
        paragraphs: [
          'Zmajski most je bil dokončan leta 1901 ob 40. obletnici vladanja cesarja Franca Jožefa, zato se je prvotno imenoval Jubilejni most. To je eden najlepših primerov zgodnjega armirano-betonskega inženirstva v secesijskem okrasju.',
          'Štirje zmajevi kipi na vogalih so postali simbol Ljubljane. Ljudsko izročilo pravi, da zmaji mahajo s repom, ko čez most prečka devica — zgodba, ki jo vsak otrok sliši.',
        ],
      },
      {
        id: 'beyond',
        title: 'Kaj početi naprej',
        paragraphs: [
          'Mimo mosta pridete do odprte Osrednje tržnice in malo naprej do starega mesta. Naravno se poveže s tržniškim sprehodom in zanko mostov.',
        ],
      },
    ],
    faq: [
      {
        question: 'Kako daleč je Zmajski most od Prešernovega trga?',
        answer:
          'Okoli 10–15 min hoje ob reki jugovzhodno, sledeč Ljubljanici. Pot je ravna in označena ob vodi.',
      },
      {
        question: 'Zakaj so tam zmaji?',
        answer:
          'Zmaj je v legendi postal heraldicni simbol Ljubljane (mesto naj bi varoval zmaj), most iz leta 1901 pa je postavil štiri zmajeve kipe na vogale. Danes so najbolj znana podoba mesta.',
      },
      {
        question: 'Je sprehod brez stopnic?',
        answer:
          'Da. Od trga čez Tromostovje in po nabrežju do Zmajskega mostu je ravno, tlakovano in brez stopnic.',
      },
    ],
    related: ['central-market', 'river-bridges-walk', 'map'],
    updated: 'Viri: Visit Ljubljana, MOL. Pot preverjena oktober 2026.',
  },

  'central-market': {
    slug: 'central-market',
    title: 'Prešernov trg do Osrednje tržnice',
    description:
      'Sprehod od Prešernovega trga do ljubljanske Osrednje tržnice: pot ob reki, dva trga, kaj kupiti in odpiralni čas.',
    h1: 'Od Prešernovega trga do Osrednje tržnice',
    intro:
      'Ljubljanska Osrednja tržnica (Osrednja tržnica) je delujoča tržnica pod Plečkovimi arkadami, nekaj minut od trga ob reki. Ta stran obsega sprehod in praktične nasvete za obisk.',
    facts: [
      { label: 'Hoja', value: 'Okoli 8–10 min ob reki' },
      { label: 'Smer', value: 'Jugovzhodno, nato sledite arkadam' },
      { label: 'Oblikovalec', value: 'Jože Plečnik, arkade 1930–40' },
      { label: 'Odprto', value: 'Pon–sob (nedelja zaprto)' },
      { label: 'Dva trga', value: 'Vodnikov trg in Pogačarjev trg' },
      { label: 'Najboljši čas', value: 'Zjutraj, za sadež in manj gneče' },
    ],
    sections: [
      {
        id: 'route',
        title: 'Pešpot',
        bullets: [
          'Prečkajte Tromostovje in zavijte jugovzhodno po nabrežju.',
          'Plečkove arkade se začnejo tik mimo Zmajskega mostu in tečejo ob vodi.',
          'Vodnikov trg je prvi tržni trg; Pogačarjev trg z zaprto tržnico sledi.',
        ],
      },
      {
        id: 'squares',
        title: 'Kaj boste našli',
        bullets: [
          'Sveže sadje, zelenjava, mlečni izdelki in pekarna na odprtih trgih.',
          'Zaprta tržnica (delovni dnevi in sobote zjutraj) za meso, ribe in žita.',
          'Sezonske stojnice — božič, med in regionalne posebnosti ob različnih časih.',
        ],
      },
      {
        id: 'tips',
        title: 'Nasveti za obisk',
        paragraphs: [
          'Pojdite zjutraj za najširšo ponudbo in najživahnejšo atmosfero. Večina stojnic zapre v zgodnjem popoldnevu, tržnica pa je zaprta v nedeljo, zato načrtujte obisk med tednom ali v soboto.',
          'Lepo se poveže z nadaljnjim sprehodom v staro mesto ali do stolnice.',
        ],
      },
    ],
    faq: [
      {
        question: 'Kako peš od Prešernovega trga do tržnice?',
        answer:
          'Prečkajte Tromostovje, sledite nabrežju jugovzhodno, Plečkove arkade in tržna trga se začnejo tik mimo Zmajskega mostu — skupaj okoli 8–10 min.',
      },
      {
        question: 'Kaj je odpiralni čas tržnice?',
        answer:
          'Odprta tržnica deluje pon–sob in je zaprta v nedeljo. Zaprta tržnica je najbolj živahna med tednom in v soboto zjutraj; trenutni urnik preverite lokalno, saj se lahko sezonsko spremeni.',
      },
      {
        question: 'Ali je vredno obiska?',
        answer:
          'Da, če vas zanimajo tržnice in lokalna hrana. To je delujoča tržnica, ne turistična predstava, in eden najprijetnejših sprehodov od trga.',
      },
    ],
    related: ['dragon-bridge', 'one-hour-walk', 'food-and-cafes', 'map'],
    updated: 'Viri: Visit Ljubljana, Ljubljanska tržnica. Čas preverjen oktober 2026.',
  },

  'ljubljana-cathedral': {
    slug: 'ljubljana-cathedral',
    title: 'Prešernov trg do ljubljanske stolnice (sv. Nikolaja)',
    description:
      'Sprehod od Prešernovega trga do ljubljanske stolnice: stara mestna pot, baročna cerkev, zelena kupola in Plečkova bronasta vrata.',
    h1: 'Od Prešernovega trga do ljubljanske stolnice',
    intro:
      'Stolnica sv. Nikolaja (Ljubljanska stolnica) je glavna cerkev mesta, kratek sprehod severno skozi staro mesto od Prešernovega trga. Ta stran obsega pot in kaj iskati.',
    facts: [
      { label: 'Hoja', value: 'Okoli 8–10 min preko Mestnega trga' },
      { label: 'Smer', value: 'Sever v staro mesto, nato zahod' },
      { label: 'Slog', value: 'Barok, zgrajen 1701–1706' },
      { label: 'Znana po', value: 'Zelena kupola, dvojni stolpi, bronasta vrata' },
      { label: 'Vrata', value: 'Bron izpod Jožeta Plečnika' },
      { label: 'Trg', value: 'Trg Cirila in Metoda' },
    ],
    sections: [
      {
        id: 'route',
        title: 'Pešpot',
        bullets: [
          'Od trga pojdite sever v staromestne ulice do Mestnega trga.',
          'Naprej mimo Magistrata in Robovega vodnjaka.',
          'Zavijte zahodno; kupola stolnice se dvigne na Trgu Cirila in Metoda.',
        ],
      },
      {
        id: 'church',
        title: 'Kaj videti',
        bullets: [
          'Zelena kupola in dvojni stolpi so vidna z več ulic, ko se približujete.',
          'Plečkova bronasta vrata (vrata „Ljubljana“ in „Slovenija“) so mojstrovina na zahodnem vhodu.',
          'Baročna notranjost ima freske in škofovski sedež.',
        ],
      },
      {
        id: 'tips',
        title: 'Nasveti za obisk',
        paragraphs: [
          'Stolnica je delujoč bogoslužni prostor, zato se primerno oblecite in ohranjajte tiho med mašami. Vstop v ladjo je običajno brezplačen; za vzpon na stolp ali vodeni ogled je morda majhna pristojbina — preverite na kraju.',
        ],
      },
    ],
    faq: [
      {
        question: 'Kako daleč je stolnica od Prešernovega trga?',
        answer:
          'Okoli 8–10 min hoje skozi staro mesto: sever do Mestnega trga, mimo Magistrata, nato zahod do Trga Cirila in Metoda.',
      },
      {
        question: 'Zakaj so vrata znana?',
        answer:
          'Zahodni vhod ima bronasta vrata, ki jih je zasnoval Jože Plečnik, in veljajo za vrhunec 20. stoletja slovenske sakralne umetnosti.',
      },
      {
        question: 'Ali lahko vstopim?',
        answer:
          'Da; ladja je običajno odprta za obiskovalce izven bogoslužja. Za stolp ali vodeni ogled je morda majhna pristojbina — preverite lokalno.',
      },
    ],
    related: ['mestni-trg', 'congress-square', 'map'],
    updated: 'Viri: Visit Ljubljana, Nadškofija Ljubljana. Preverjeno oktober 2026.',
  },

  'mestni-trg': {
    slug: 'mestni-trg',
    title: 'Mestni trg in Magistrat: krožna pot iz Prešernovega trga',
    description:
      'Kratek staromestni sprehod od Prešernovega trga do Mestnega trga: Magistrat, Robov vodnjak in krog nazaj k reki.',
    h1: 'Mestni trg in zanka Magistrata',
    intro:
      'Mestni trg je staromestni trg severno od Prešernovega trga, dom Magistrata in Robovega vodnjaka. To je najlažji prvi korak v srednjeveško jedro Ljubljane in naravna kratka zanka.',
    facts: [
      { label: 'Hoja', value: 'Okoli 4–6 min od trga' },
      { label: 'Smer', value: 'Sever skozi staromestne ulice' },
      { label: 'Glavna znamenitost', value: 'Ljubljanski Magistrat' },
      { label: 'Vodnjak', value: 'Robov vodnjak (Fontana treh rek)' },
      { label: 'Zanka nazaj', value: 'Zahod do stolnice ali jug do reke' },
      { label: 'Površina', value: 'Kockasto; večinoma ravno s kratkimi ključi' },
    ],
    sections: [
      {
        id: 'route',
        title: 'Kratek sprehod',
        bullets: [
          'Zapustite trg sever v peš ulice.',
          'Mestni trg se odpre po nekaj minutah, z Magistratom na desni.',
          'Robov vodnjak stoji sredi trga.',
        ],
      },
      {
        id: 'hall',
        title: 'Magistrat',
        paragraphs: [
          'Ljubljanski Magistrat je baročna obnovljena stavba, ki še vedno gosti mestno upravo. Dvorišče in občasne razstave so odprti za obiskovalce in dajejo trgu njegov meščanski značaj.',
        ],
      },
      {
        id: 'fountain',
        title: 'Robov vodnjak',
        paragraphs: [
          'Robov vodnjak (Fontana treh rek) je središče trga, baročno delo iz 18. stoletja, ki personificira tri kranjske reke. Izvirnik je v muzeju; kar stoji tukaj, je visokokakovosten prepis.',
        ],
      },
      {
        id: 'loop',
        title: 'Zaključek zanke',
        bullets: [
          'Nadaljujte zahodno do stolnice ali zavijte jug nazaj proti reki in Prešernovemu trgu.',
          'Celotna zanka je pod 20 min počasne hoje in povezuje tri trge.',
        ],
      },
    ],
    faq: [
      {
        question: 'Kako pridem od Prešernovega trga do Mestnega trga?',
        answer:
          'Pojdite sever skozi staromestne peš ulice za okoli 4–6 min; Mestni trg se odpre z Magistratom na desni in Robovim vodnjakom sredi.',
      },
      {
        question: 'Kaj je Magistrat?',
        answer:
          'Ljubljanski Magistrat je baročna meščanska stavba na Mestnem trgu, še vedno v uporabi mestne uprave, z obiskovalnim dvoriščem in občasnimi razstavami.',
      },
      {
        question: 'Je sprehod brez stopnic?',
        answer:
          'Večinoma raven, a staro mesto je kockasto s kratkimi ključi in občasnimi stopnicami pri vhodih v stavbe. Invalidski vozički naj računajo nekaj dodatnega časa.',
      },
    ],
    related: ['ljubljana-cathedral', 'congress-square', 'one-hour-walk'],
    updated: 'Viri: Visit Ljubljana, MOL. Preverjeno oktober 2026.',
  },

  'congress-square': {
    slug: 'congress-square',
    title: 'Prešernov trg proti Kongresnemu trgu: kako ju ločiti',
    description:
      'Kongresni trg je drug trg jugozahodno od starega mesta. Naučite se, kako se razlikujeta in kako peš med njima.',
    h1: 'Prešernov trg proti Kongresnemu trgu',
    intro:
      'Obiskovalci pogosto zamenjujejo Prešernov trg s Kongresnim trgom (Kongresni trg). To sta ločena trga nekaj minut narazen, z različnimi oblikami, stavbami in vlogami. Ta stran vam pomaga ju ločiti in izbrati, kateri obiskati.',
    facts: [
      { label: 'Kongresni trg', value: 'Jugozahodno od starega mesta' },
      { label: 'Razdalja', value: 'Okoli 6–8 min hoje' },
      { label: 'Oblika', value: 'Dolg pravokoten trg (park Zvezda sredi)' },
      { label: 'Ključne stavbe', value: 'Univerza v Ljubljani, Filharmonija, Semenišče' },
      { label: 'Vloga', value: 'Svečani in univerzitetni trg' },
      { label: 'Bližina', value: 'Izhodišče vzpenjače na grad' },
    ],
    sections: [
      {
        id: 'locations',
        title: 'Kje je kateri',
        paragraphs: [
          'Prešernov trg leži pri zahodni vratnici starega mesta, kjer Tromostovje prečka Ljubljanico. Kongresni trg leži jugozahodno, onkraj starega mesta, ob univerzitetnem okrožju in izhodišču vzpenjače na grad.',
        ],
      },
      {
        id: 'characters',
        title: 'Kako se razlikujeta',
        bullets: [
          'Prešernov trg je okrogel, živahen in turistično usmerjen, s pesnikovim spomenikom in rožnato cerkvijo.',
          'Kongresni trg je dolg, zelen pravokoten trg za univerzitetne in državne slovesnosti, obrobljen z Univerzo in Filharmonijo.',
          'Kongresni trg je tišji in bolj institucionalen; Prešernov trg je družbeno srce.',
        ],
      },
      {
        id: 'between',
        title: 'Hoja med njima',
        paragraphs: [
          'Od Prešernovega trga pojdite jugozahodno skozi ali mimo starega mesta (prek Wolfove ali univerzitetne strani) do Kongresnega trga v okoli 6–8 min. Kongresni trg je tudi ugodno izhodišče za vzpenjačo na grad.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ali sta Prešernov in Kongresni trg ista?',
        answer:
          'Ne. To sta ločena trga okoli 6–8 min narazen. Prešernov trg je okrogel, turistično usmerjen trg ob Tromostovju; Kongresni trg je dolg, zelen univerzitetni trg jugozahodno.',
      },
      {
        question: 'Kateri naj obiščem?',
        answer:
          'Oba. Prešernov trg je obvezen srce mesta; Kongresni trg velja za univerzitetno arhitekturo, park in kot izhodišče vzpenjače na grad.',
      },
      {
        question: 'Kako peš od enega do drugega?',
        answer:
          'Okoli 6–8 min hoje, jugozahodno od Prešernovega trga skozi ali mimo starega mesta proti univerzitetnemu okrožju.',
      },
    ],
    related: ['mestni-trg', 'ljubljana-castle', 'one-hour-walk'],
    updated: 'Viri: Visit Ljubljana, MOL. Preverjeno oktober 2026.',
  },

  'ljubljana-castle': {
    slug: 'ljubljana-castle',
    title: 'Prešernov trg do Ljubljanskega gradu: peš ali z vzpenjačo',
    description:
      'Do Ljubljanskega gradu od Prešernovega trga: vzpon skozi staro mesto ali vzpenjača s Krekovega trga, plus kaj je na vrhu.',
    h1: 'Od Prešernovega trga do Ljubljanskega gradu',
    intro:
      'Ljubljanski grad (Ljubljanski grad) stoji na hribu nad starim mestom, viden od Prešernovega trga. Na vrh lahko peš po ulicah ali z vzpenjačo s Krekovega trga pri tržnici. Ta stran primerja možnosti.',
    facts: [
      { label: 'Peš', value: 'Okoli 15–20 min vzpona skozi staro mesto' },
      { label: 'Vzpenjača', value: 'S Krekovega trga, blizu tržnice' },
      { label: 'Hrib', value: 'Grajski hrib' },
      { label: 'Izvor', value: 'Srednjeveško jedro; kasnejše razširitve' },
      { label: 'Na vrhu', value: 'Razgledni stolp, razstave, razgledi' },
      { label: 'Vstopnice', value: 'Vzpenjača in razstave plačljive — cene prireditelja' },
    ],
    sections: [
      {
        id: 'walk',
        title: 'Pešpot',
        bullets: [
          'Od trga pojdite sever v staro mesto proti Mestnemu trgu.',
          'Sledite označenim ulicam navzgor (prek Gornjega trga in grajske poti).',
          'Pot je tlakovana, a v ključih strma; računajte 15–20 min.',
        ],
      },
      {
        id: 'funicular',
        title: 'Možnost vzpenjače',
        paragraphs: [
          'Vzpenjača pelje s Krekovega trga, kratek sprehod mimo Osrednje tržnice. Prihrani vzpon in je lažja izbira s prtljago, otroki ali omejeno mobilnostjo. Vstopnice kupite na postaji.',
        ],
      },
      {
        id: 'top',
        title: 'Kaj je na vrhu',
        bullets: [
          'Razgledni stolp za 360° razgled nad mestom in trgom daleč spodaj.',
          'Razstave o zgodovini gradu in občasne prireditve.',
          'Odprta dvorišča, kavarna in občasni dogodki.',
        ],
      },
    ],
    faq: [
      {
        question: 'Kako pridem od Prešernovega trga do gradu?',
        answer:
          'Lahko peš navzgor skozi staro mesto (okoli 15–20 min, v ključih strmo) ali z vzpenjačo s Krekovega trga pri Osrednji tržnici, kar je lažje s prtljago ali omejeno mobilnostjo.',
      },
      {
        question: 'Ali se vzpenjača splača?',
        answer:
          'Če želite se izogniti vzponu, da. Pelje s Krekovega trga in vas pripelje naravnost na grajsko dvorišče. Vstopnice so na voljo na postaji.',
      },
      {
        question: 'Ali potrebujem vstopnico za grad?',
        answer:
          'DVorišče in nekateri razgledi so dostopni, a stolp in razstave so plačljivi. Trenutne cene in kombinirane vstopnice za vzpenjačo preverite na uradni strani gradu.',
      },
    ],
    related: ['central-market', 'congress-square', 'accessibility'],
    updated: 'Viri: Ljubljanski grad, Visit Ljubljana. Preverjeno oktober 2026.',
  },

  'river-bridges-walk': {
    slug: 'river-bridges-walk',
    title: 'Sprehod po ljubljanskih mostovih od Prešernovega trga',
    description:
      'Zanka ob Ljubljanici mimo Tromostovja, Zmajskega mostu, Mesarskega, Šuštarjevega in drugih, s tem, kaj fotografirati na vsakem.',
    h1: 'Sprehod po ljubljanskih mostovih',
    intro:
      'Ljubljanico prečka gruča prepoznavnih mostov, več jih je zasnoval ali preoblikoval Jože Plečnik. Z začetkom na Prešernovem trgu ta zanka poveže mostove v en enostaven sprehod ob reki.',
    facts: [
      { label: 'Dolžina zanke', value: 'Okoli 1,5–2 km, ravno' },
      { label: 'Čas', value: '45–70 min s postanki' },
      { label: 'Mostovi', value: 'Tromostovje, Zmajski, Mesarski, Šuštarjev, Hradeckega, Čevljarski' },
      { label: 'Oblikovalec', value: 'Več jih je zasnoval Jože Plečnik' },
      { label: 'Najboljša svetloba', value: 'Pozno popoldne in modra ura' },
      { label: 'Površina', value: 'Ravna, tlakovana nabrežja' },
    ],
    sections: [
      {
        id: 'loop',
        title: 'Zanka',
        bullets: [
          'Začnite na Tromostovju na Prešernovem trgu.',
          'Jugovzhodno do Zmajskega mostu, nato naprej do Mesarskega mostu.',
          'Prečkajte nazaj in sledite drugemu bregu mimo Šuštarjevega mostu proti staremu mestu.',
          'Po želji podaljšajte do Hradeckega mostu in Čevljarskega za celoten niz.',
        ],
      },
      {
        id: 'bridges',
        title: 'Most po mostu',
        bullets: [
          'Tromostovje — Plečnik je en most spremenil v tri z nizkimi balustradami in svetilkami.',
          'Zmajski most — 1901, štirje zmajevi kipi, simbol mesta.',
          'Mesarski most — steklena brv s kipi, sodoben dodatek.',
          'Šuštarjev most — širok, nizek Plečkov prehod z vrsto svetilk.',
        ],
      },
      {
        id: 'photo',
        title: 'Kaj fotografirati',
        paragraphs: [
          'Vsak most okvirja reko in staromestne fasade drugače. Pozno popoldanska svetloba na vodi in modra ura s prižganimi svetilkami sta najboljši okni; zmaji Zmajskega mostu in simetrija Tromostovja sta prepoznavna posnetka.',
        ],
      },
    ],
    faq: [
      {
        question: 'Kako dolga je zanka mostov?',
        answer:
          'Okoli 1,5–2 km kot ravna zanka, približno 45–70 min s postanki za branje vsakega mostu.',
      },
      {
        question: 'Kateri mostovi so na poti?',
        answer:
          'Tromostovje, Zmajski most, Mesarski most, Šuštarjev most in po želji Hradeckega in Čevljarski za celoten niz.',
      },
      {
        question: 'Je brez stopnic?',
        answer:
          'Da — nabrežja in mostne ploščadi so ravne in tlakovane, kar naredi lahko zanko brez stopnic.',
      },
    ],
    related: ['dragon-bridge', 'triple-bridge', 'one-hour-walk', 'evening-walk'],
    updated: 'Viri: Visit Ljubljana, MOL. Pot preverjena oktober 2026.',
  },
  'pedestrian-zone-arrival': {
    slug: 'pedestrian-zone-arrival',
    title: 'Prihod na Prešernov trg z avtom, taksijem in prtljago',
    description:
      'Kje vozila smejo in ne smejo: meja pešcone cone, najbližji izhod taksija in raven vstop s prtljago.',
    h1: 'Prihod na Prešernov trg z bagažo',
    intro:
      'Trg in staro mesto okoli njega sta pešcona cona, zato avtomobili in taksiji ne morejo pripeljati do spomenika. Ta stran pojasnjuje mejo in najlažji vstop s prtljago, vozičkom ali invalidskim vozičkom.',
    facts: [
      { label: 'Cona', value: 'Trg in staro mesto sta brez avtomobilov' },
      { label: 'Izhod taksija', value: 'Na robu pešcone cone, 1–2 min hoje' },
      { label: 'Od postaje', value: 'Raven sprehod po Slovenski cesti, ~10 min' },
      { label: 'Parkiranje', value: 'Garaže ob robu središča, nato peš' },
      { label: 'Prtljaga', value: 'Kolesa OK do roba; kockasto v središču' },
      { label: 'Uradno', value: 'Pravila prometa MOL' },
    ],
    sections: [
      {
        id: 'boundary',
        title: 'Meja pešcone cone',
        paragraphs: [
          'Pešcona cona zajema trg in srednjeveško jedro. Vozila so omejena na zunanji obroč ulic, zato voznik, ki pravi „spustil vas bom na Prešernovem trgu“, misli rob pešcone cone — kratek, raven sprehod od tam.',
          'Zato trg ostaja miren: ni prehodnega prometa, le dostave in nujni dostopi ob določenih urah.',
        ],
      },
      {
        id: 'taxi',
        title: 'Izhod taksija',
        bullets: [
          'Prosite za izhod na robu pešcone cone (npr. ob Slovenski cesti ali obrežni cesti).',
          'Od tam je raven 1–2 min hoje do spomenika.',
          'Če vas kdo pobira, dogovorite isti robni točki, da se izognete kazni za vstop v cono.',
        ],
      },
      {
        id: 'luggage',
        title: 'S prtljago ali invalidskim vozičkom',
        paragraphs: [
          'Pot od avtobusne in železniške postaje je ravna in tlakovana po Slovenski cesti — najlažji prihod s kolesi. Kocka in občasne stopnice se začnejo šele v staromestnih ulicah, zato ostanite na glavnih pristopih.',
          'Za parkiranje uporabite garažo ob robu središča in peš pridite; glejte stran o parkiranju za konkretne garaže in poti.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ali lahko taksi pripelje na trg?',
        answer:
          'Na rob pešcone cone, približno 1–2 min hoje od spomenika. Notranji trg je brez avtomobilov, zato se vozniki ustavijo na meji cone.',
      },
      {
        question: 'Ali lahko z avtom na Prešernov trg?',
        answer:
          'Ne — to je pešcona cona. Parkirajte v garaži ob robu središča in peš pridite ali vas taksi spusti na meji.',
      },
    ],
    related: ['parking', 'accessibility', 'station-to-square', 'map'],
    updated: 'Viri: Pravila prometa MOL, Visit Ljubljana. Preverjeno oktober 2026.',
  },

  'public-toilets': {
    slug: 'public-toilets',
    title: 'Javna stranišča blizu Prešernovega trga (brezplačno)',
    description:
      'Kje najti brezplačna javna stranišča blizu Prešernovega trga: lokacije, odpiralni čas in dostopnost.',
    h1: 'Javna stranišča blizu Prešernovega trga',
    intro:
      'Ljubljanska javna stranišča so brezplačna — to velja vedeti, saj starejši vodniki omenjajo plačilo s kovanci ali kartico. Ta stran našteva primerne možnosti blizu trga in ob reki.',
    facts: [
      { label: 'Cena', value: 'Brezplačno (javna stranišča MOL)' },
      { label: 'Najbližje', value: 'Ob nabrežju, kratek sprehod od trga' },
      { label: 'Ure', value: 'Podnevi; poleti dlje' },
      { label: 'Dostop', value: 'Brez stopnic na glavnih mestih' },
      { label: 'Tudi', value: 'Kavarne in tržnica imajo sanitarije' },
      { label: 'Vir', value: 'Visit Ljubljana (osnovni podatki)' },
    ],
    sections: [
      {
        id: 'locations',
        title: 'Kje jih najti',
        bullets: [
          'Javna stranišča ob nabrežju Ljubljanice, nekaj minut hoje južno od trga.',
          'Druga javna stranišča v širšem središču, označena ob glavnih pešpotih.',
          'Kavarne, tržna dvorana in večji muzeji ponujajo sanitarije za goste.',
        ],
      },
      {
        id: 'practical',
        title: 'Praktični nasveti',
        paragraphs: [
          'Ker so stranišča brezplačna, ne potrebujete kovancev ali kartice — sledite oznakam do najbližjega obrežnega objekta, ko ste ob trgu.',
          'Dostopnost: glavna javna stranišča so brez stopnic. Pozimi ali pozno zvečer preverite trenutne ure lokalno, saj se sezonski urnik razlikuje.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ali so javna stranišča v Ljubljani brezplačna?',
        answer:
          'Da. Javna stranišča MOL so brezplačna; ne potrebujete kovancev ali kartice.',
      },
      {
        question: 'Kje je najbližje stranišče trgu?',
        answer:
          'Obrežna javna stranišča nekaj minut južno od trga so najprimernejša; druga so označena ob pešpotih v središču.',
      },
    ],
    related: ['map', 'accessibility', 'drinking-water', 'central-market'],
    updated: 'Viri: Visit Ljubljana, MOL. Preverjeno oktober 2026.',
  },

  'drinking-water': {
    slug: 'drinking-water',
    title: 'Pitna voda blizu Prešernovega trga',
    description:
      'Kje napolniti flašo blizu Prešernovega trga: javne pitne točke, poletna mreža in kratek hidracijski krog.',
    h1: 'Pitna voda okoli trga',
    intro:
      'Ljubljanska vodovodna voda je varna za pitje, mesto pa postavlja javne pitne točke v središču, zlasti poleti. Ta stran kaže, kje napolniti flašo blizu trga, da hodite lahki.',
    facts: [
      { label: 'Vodovod', value: 'Varni za pitje po vsem mestu' },
      { label: 'Točke', value: 'Javne pitne točke v središču' },
      { label: 'Sezona', value: 'Mreža se poleti razširi' },
      { label: 'Blizu trga', value: 'Ob nabrežju in glavnih trgih' },
      { label: 'Prinesite', value: 'Flašo za večkratno uporabo' },
      { label: 'Cena', value: 'Brezplačno' },
    ],
    sections: [
      {
        id: 'points',
        title: 'Kje napolniti',
        bullets: [
          'Javne pitne točke na ali blizu glavnih trgov in obrežne promenade.',
          'Širša mreža za polnjenje je aktivna poleti po pešconem središču.',
          'Kavarne običajno napolnijo flašo na vprašanje, če ste gost.',
        ],
      },
      {
        id: 'loop',
        title: 'Kratek hidracijski krog',
        paragraphs: [
          'Od trga se spustite do nabrežja, kjer so pitne točke ob promenadi, in se vrnite mimo tržnice. To je raven, senčen korak v vročem dnevu in se poveže s stranjo o javnih straniščih.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ali lahko pijem ljubljansko vodovodno vodo?',
        answer:
          'Da. Ljubljanska vodovodna voda je varna za pitje, mesto pa postavlja javne pitne točke, poleti še več.',
      },
      {
        question: 'Kje napolnim flašo blizu trga?',
        answer:
          'Javne pitne točke ob obrežni promenadi in na glavnih trgih; mreža je najširša poleti.',
      },
    ],
    related: ['public-toilets', 'map', 'one-hour-walk'],
    updated: 'Viri: Visit Ljubljana, MOL. Preverjeno oktober 2026.',
  },

  'half-day-itinerary': {
    slug: 'half-day-itinerary',
    title: 'Ljubljana v pol dneva: od Prešernovega trga',
    description:
      'Načrt 4–5 ur od Prešernovega trga: trg, Osrednja tržnica, staro mesto, stolnica in kosilo, z vrstnim redom in časom.',
    h1: 'Ljubljana v pol dneva od trga',
    intro:
      'Če imate na voljo pol dneva, začnite na Prešernovem trgu in se širite navzven. Ta načrt uravnoteži trg, reko, tržnico in staro mesto z sproščenim kosilom — drugačen od urnega ali celodnevnega.',
    facts: [
      { label: 'Čas', value: 'Približno 4–5 ur' },
      { label: 'Tempo', value: 'Sproščeno, s sedečim kosilom' },
      { label: 'Obsega', value: 'Trg, tržnica, staro mesto, stolnica' },
      { label: 'Začetek', value: 'Pozno dopoldne, za tržnico' },
      { label: 'Hoja', value: 'Ravno ob reki; nekaj kock' },
      { label: 'Povezava', value: 'Kje jesti blizu trga' },
    ],
    sections: [
      {
        id: 'order',
        title: 'Vrstni red',
        bullets: [
          'Začetek na Prešernovem trgu: spomenik, cerkvena fasada, Tromostovje.',
          'Prečkajte reko in sledite ji do Osrednje tržnice (najbolje pozno dopoldne).',
          'Pojdite sever skozi staro mesto do Mestnega trga in stolnice.',
          'Kosilo v starem mestu ali ob reki, nato počasen povratek čez mostove.',
        ],
      },
      {
        id: 'timing',
        title: 'Prosti čas',
        paragraphs: [
          'Namestite trgu in mostu 30–40 min, tržnici 30–45, staromestnemu krogu do stolnice 60–90, kosilu 60–90. To pušča prostor za kavo in fotografije brez hitenja.',
          'Ta načrt je namenoma lažji od celodnevnega: brez vzpona na grad, brez muzejskih notranjosti, razen če jih izberete.',
        ],
      },
    ],
    faq: [
      {
        question: 'Kaj vidim v pol dneva v Ljubljani?',
        answer:
          'Prešernov trg, Tromostovje, Osrednjo tržnico, staro mesto do Mestnega trga in stolnico ter sproščeno kosilo — približno 4–5 ur v lahkem tempu.',
      },
      {
        question: 'Ali naj dodam grad?',
        answer:
          'Ne pri pol dnevu, razen če izpustite tržnico ali kosilo. Grad je bolje shranjen za celodnevni načrt.',
      },
    ],
    related: ['one-hour-walk', 'one-day-itinerary', 'central-market', 'food-and-cafes'],
    updated: 'Načrtovalski nasveti; časi so predlogi. Preverjeno oktober 2026.',
  },

  'one-day-itinerary': {
    slug: 'one-day-itinerary',
    title: 'Ljubljana v enem dnevu: od Prešernovega trga',
    description:
      'Celodnevni načrt od Prešernovega trga: jutranji trg in tržnica, opoldansko staro mesto in kosilo, popoldanski grad ali muzej, večernje obrežje.',
    h1: 'Ljubljana v enem dnevu od trga',
    intro:
      'Z vsem dnem lahko trg opravite prav in še vedno pridete do grada, starega mesta in reke zvečer. Ta načrt zaporedoma razporedi znamenitosti, da hodite po klancu in v svetlobo, ne proti njej.',
    facts: [
      { label: 'Čas', value: 'Cel dan, ~8 ur s odmori' },
      { label: 'Vrhunci', value: 'Trg, tržnica, staro mesto, grad, reka' },
      { label: 'Kosilo', value: 'Staro mesto ali obrežje' },
      { label: 'Popoldne', value: 'Grad ali muzej, po izbiri' },
      { label: 'Večer', value: 'Sprehod ob reki in lučeh' },
      { label: 'Tempo', value: 'Enakomeren, a ne hitri' },
    ],
    sections: [
      {
        id: 'morning',
        title: 'Jutro: trg in tržnica',
        bullets: [
          'Prešernov trg ob jutranji svetlobi: spomenik, cerkev, Tromostovje.',
          'Obrežje do Osrednje tržnice za sadež in vzdušje.',
          'Staromestne ulice sever do Mestnega trga in stolnice.',
        ],
      },
      {
        id: 'midday',
        title: 'Opoldne: kosilo in staro mesto',
        paragraphs: [
          'Kosilo v starem mestu ali ob reki, nato nadaljujte do Magistrata in Robovega vodnjaka. Popoldne pustite za izbiro: grad (vzpenjača gor, razgled dol) ali muzejska notranjost.',
        ],
      },
      {
        id: 'evening',
        title: 'Večer: reka in luči',
        bullets: [
          'Vrnite se ob reki, ko se prižgejo svetilke.',
          'Zadnji krog mostov za fotografije v modri uri.',
          'Večerja blizu trga ali v starem mestu.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ali lahko vidim Ljubljano v enem dnevu?',
        answer:
          'Da. Začnite na Prešernovem trgu, dodajte tržnico, staro mesto in stolnico, popoldne izberite grad ali muzej, zvečer pa obrežje — približno 8 ur z odmori.',
      },
      {
        question: 'Grad ali muzej?',
        answer:
          'Če prvič obiščete in je vreme jasno, je gradov razgled težko preseči. V dežju izberite muzejsko notranjost.',
      },
    ],
    related: ['half-day-itinerary', 'ljubljana-castle', 'evening-walk', 'food-and-cafes'],
    updated: 'Načrtovalski nasveti; časi so predlogi. Preverjeno oktober 2026.',
  },

  'free-sights': {
    slug: 'free-sights',
    title: 'Brezplačne znamenitosti blizu Prešernovega trga',
    description:
      'Kaj je brezplačno okoli Prešernovega trga: trg in mostovi, zunanji pogled na cerkev, vzdušje tržnice in kje se začnejo vstopnine.',
    h1: 'Brezplačne znamenitosti okoli Prešernovega trga',
    intro:
      'Večji del ljubljanskega središča je brezplačno uživati od zunaj. Ta stran loči brezplačne sprehajalne doživetja od plačljivih znamenitosti, da načrtujete dan z nizkimi stroški.',
    facts: [
      { label: 'Brezplačno', value: 'Trg, mostovi, nabrežje, staromestne ulice' },
      { label: 'Brezplačen razgled', value: 'Fasada cerkve, spomenik, tržnica' },
      { label: 'Plačano', value: 'Razgledni stolp grada, nekatere muzeje' },
      { label: 'Cerkev notri', value: 'Brezplačen vstop (dobrodošle donacije)' },
      { label: 'Nizki stroški', value: 'Hoja je glavna dejavnost' },
      { label: 'Nasvet', value: 'Plačljive vstopnice shranite za deževen popoldan' },
    ],
    sections: [
      {
        id: 'free',
        title: 'Kaj ne stane nič',
        bullets: [
          'Prešernov trg, Tromostovje in obrežna promenada.',
          'Hoja po staromestnih ulicah, Mestni trg in trg pred stolnico.',
          'Gledanje (ne vstop) frančiškanske cerkve in stojnic tržnice.',
        ],
      },
      {
        id: 'paid',
        title: 'Kje se začne denar',
        paragraphs: [
          'Razgledni stolp grada in nekatere muzejske notranjosti zaračunavajo vstopnino; frančiškanska cerkev je brezplačna za vstop (dobrodošle donacije). Če želite eno plačljivo točko, je gradov razgled običajna izbira — glejte stran o gradu za vstopnice.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ali je Prešernov trg brezplačen?',
        answer:
          'Da, trg in okolno pešcono središče so brezplačni, odprti 24 ur in brez vstopnin.',
      },
      {
        question: 'Kaj se splača plačati?',
        answer:
          'Razgledni stolp grada za razgled in izbrane muzejske notranjosti. Vse ostalo — mostovi, trgi, reka — je brezplačno za uživanje.',
      },
    ],
    related: ['one-hour-walk', 'ljubljana-castle', 'franciscan-church', 'map'],
    updated: 'Nasveti; cene vstopnic se spreminjajo — preverite uradne strani. Preverjeno oktober 2026.',
  },

  'evening-walk': {
    slug: 'evening-walk',
    title: 'Prešernov trg ponoči: večerni sprehod in fotografije',
    description:
      'Krog po mraku od Prešernovega trga: osvetljeni mostovi, odsevi na reki in najboljši vrstni red fotografiranja ob prižigu luči.',
    h1: 'Večerni sprehod od Prešernovega trga',
    intro:
      'Ljubljana je nočno mesto — svetilke ob reki in osvetljene fasade dajejo središču sijaj. Ta sprehod se začne v modri uri in sledi lučem, nazaj na trg.',
    facts: [
      { label: 'Začetek', value: 'Modra ura na trgu' },
      { label: 'Krog', value: 'Trg → Tromostovje → reka → Zmajski most → nazaj' },
      { label: 'Luči', value: 'Prižgane svetilke; fasade in mostovi osvetljeni' },
      { label: 'Foto', value: 'Simetrija Tromostovja, odsevi' },
      { label: 'Čas', value: 'Približno 45–60 min' },
      { label: 'Varnost', value: 'Središče, osvetljeno, pešcono' },
    ],
    sections: [
      {
        id: 'route',
        title: 'Večerni krog',
        bullets: [
          'Začnite na trgu ob prižigu luči; spomenik in cerkev žarita.',
          'Prečkajte Tromostovje in sledite osvetljeni promenadi jugovzhodno.',
          'Pristopite do Zmajskega mostu, nato se vrnite po drugem bregu za odseve.',
        ],
      },
      {
        id: 'photo',
        title: 'Vrstni red fotografiranja',
        paragraphs: [
          'Fotografirajte trg najprej (modra ura), nato Tromostovje s protiležečega kraka za simetrijo in nazadnje odseve na reki med vrnitvijo. Osvetljeni mostovi so znani nočni motivi.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ali je središče ponoči varno?',
        answer:
          'Območje okoli trga in reke je središčno, osvetljeno in pešcono — udobno za večerni sprehod.',
      },
      {
        question: 'Kdaj je najboljša svetloba?',
        answer:
          'Modra ura, ko se prižgejo ulične svetilke, z osvetljenimi mostovi in fasadami. Odsevi na mirni reki so bonus.',
      },
    ],
    related: ['photography', 'river-bridges-walk', 'one-hour-walk', 'christmas-lights'],
    updated: 'Nasveti; čas luči se sezonsko spreminja. Preverjeno oktober 2026.',
  },

  'new-years-eve': {
    slug: 'new-years-eve',
    title: 'Silvestrovo blizu Prešernovega trga',
    description:
      'Kaj se dogaja okoli Prešernovega trga na silvestrovo: glavne prireditve, trg s koncertom in nasveti za varno vrnitev.',
    h1: 'Silvestrovo blizu Prešernovega trga',
    intro:
      'Ljubljana praznuje novo leto s prosto dostopnimi koncerti in ognjemeti po središču, Prešernov trg pa je eno od središč. Ta stran opisuje, kaj pričakovati in kako se varno vrniti — program preverite blizu datuma.',
    facts: [
      { label: 'Kdaj', value: '31. december, zvečer do polnoči' },
      { label: 'Kje', value: 'Trgi v središču, vključno s Prešernovim trgom' },
      { label: 'Tipično', value: 'Koncerti na prostem in polnočni ognjemet' },
      { label: 'Gneča', value: 'Polno; pridite zgodaj' },
      { label: 'Prevoz', value: 'Preverite nočne vozne rede' },
      { label: 'Vir', value: 'Visit Ljubljana / MOL' },
    ],
    sections: [
      {
        id: 'what',
        title: 'Kaj se dogaja',
        paragraphs: [
          'Središče gosti koncerte na prostem in polnočni ognjemet za novo leto. Prešernov trg in bližnji trgi so pogosta zbirališča, reka pa kulisa. Točen program se vsako leto spremeni, zato preverite uradne strani Visit Ljubljana blizu 31. decembra.',
        ],
      },
      {
        id: 'tips',
        title: 'Praktični nasveti',
        bullets: [
          'Pridite zgodaj po prostor; središče se pred polnočjo napolni.',
          'Oblecite se toplo — trg je odprt rečnemu vetru.',
          'Načrtujte vrnitev: nočni javni prevoz je ob praznikih omejen, zato vnaprej veste taxi ali pešpot.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ali je silvestrovo prireditev na Prešernovem trgu?',
        answer:
          'Ljubljana ima javne silvestrske koncerte in ognjemet v središču, trgi okoli Prešernovega trga so med središči. Preverite letni program na Visit Ljubljana blizu datuma.',
      },
      {
        question: 'Kako se vrnem potem?',
        answer:
          'Nočni javni prevoz je omejen ob praznikih, zato načrtujte taxi ali znan pešpot vnaprej in se oblecite toplo za hojo.',
      },
    ],
    related: ['christmas-market', 'christmas-lights', 'evening-walk', 'map'],
    updated: 'Podrobnosti se vsako leto spreminjajo — preverite Visit Ljubljana. Preverjeno oktober 2026.',
  },

  'preseren-day': {
    slug: 'preseren-day',
    title: 'Prešernov dan (8. februar) na Prešernovem trgu',
    description:
      'Kaj je Prešernov dan, zakaj je trg njegovo središče 8. februarja in kako sodelovati — s programom preverjenim blizu datuma.',
    h1: 'Prešernov dan na Prešernovem trgu',
    intro:
      'Prešernov dan (8. februar) je slovenski kulturni praznik, obeležen pri pesnikovem spomeniku na Prešernovem trgu. Ta stran pojasnjuje dan in kaj pričakovati — trenutni program preverite lokalno.',
    facts: [
      { label: 'Datum', value: '8. februar vsako leto' },
      { label: 'Časti', value: 'Franceta Prešerna (umrl 8. februarja 1849)' },
      { label: 'Središče', value: 'Spomenik na Prešernovem trgu' },
      { label: 'Tipično', value: 'Polaganje venec, kulturne prireditve' },
      { label: 'Status', value: 'Državni kulturni praznik' },
      { label: 'Vir', value: 'Visit Ljubljana / kulturne ustanove' },
    ],
    sections: [
      {
        id: 'meaning',
        title: 'Zakaj 8. februar',
        paragraphs: [
          'Praznik obeležuje smrt Franceta Prešerna 8. februarja 1849. Časti slovensko kulturo in se obhaja pri pesnikovem spomeniku na Prešernovem trgu, kjer se tradicionalno položi venec.',
        ],
      },
      {
        id: 'attend',
        title: 'Kako sodelovati',
        bullets: [
          'Obisk trga v jutru 8. februarja za slovesnosti pri spomeniku.',
          'Pričakujte kulturne prireditve in mirnejše, državljansko vzdušje kot na novo leto.',
          'Točen urnik preverite na Visit Ljubljana ali kulturnih straneh blizu datuma.',
        ],
      },
    ],
    faq: [
      {
        question: 'Kaj je Prešernov dan?',
        answer:
          'Prešernov dan (8. februar) je slovenski kulturni praznik v čast pesniku Francetu Prešernu. Obhaja se pri njegovem spomeniku na Prešernovem trgu.',
      },
      {
        question: 'Ali lahko obiskovalci sodelujejo?',
        answer:
          'Da. Trg je javen; jutranje slovesnosti pri spomeniku so odprte za ogled. Trenutni program preverite lokalno.',
      },
    ],
    related: ['france-preseren', 'preseren-monument', 'history', 'map'],
    updated: 'Podatki o kulturnem prazniku; preverite letni program pri Visit Ljubljana. Preverjeno oktober 2026.',
  },

  'food-and-cafes': {
    slug: 'food-and-cafes',
    title: 'Kje jesti in piti blizu Prešernovega trga',
    description:
      'Hrana in kava okoli Prešernovega trga po območjih, vrsti in proračunu: obrežne terase, staromestne ulice in smer postaje.',
    h1: 'Hrana in kava blizu Prešernovega trga',
    intro:
      'Nikoli niste daleč od kavarne ali obroka okoli trga. Ta stran primerja območja po vzdušju in proračunu, da izberete brez tavanja — kaže na četrti, ne na posamezne lokale.',
    facts: [
      { label: 'Obrežje', value: 'Terase z razgledom; srednji razred' },
      { label: 'Staro mesto', value: 'Vzdušno; najširša izbira' },
      { label: 'Rob trga', value: 'Hitra kava in sladico' },
      { label: 'Smer postaje', value: 'Več proračunskih možnosti' },
      { label: 'Prehrana', value: 'Vegetarijansko in mednarodno pogosto' },
      { label: 'Opomba', value: 'Vodnik primerja območja, ne lokale' },
    ],
    sections: [
      {
        id: 'areas',
        title: 'Po območjih',
        bullets: [
          'Obrežne terase — sedite ob vodi; prijetne, a dražje na sedež.',
          'Staromestne ulice — najgloblja izbira, od pekarne do restavracij.',
          'Kavarne ob robu trga — najhitrejša kava in sladica med ogledi.',
        ],
      },
      {
        id: 'tips',
        title: 'Izbira',
        paragraphs: [
          'Za razgled vzemite obrežje; za raznolikost in vrednost se sprehodite v staromestne ulice severno od trga. Če ste na tesnem proračunu ali prispeli z vlakom, smer postaje ponuja preprostejše, cenejše možnosti.',
          'Vegetarijanska, veganska in mednarodna hrana je v središču pogosta; raje imejte dnevne specialitete kot turistične pasti točno na trgu.',
        ],
      },
    ],
    faq: [
      {
        question: 'Kje jesti blizu Prešernovega trga?',
        answer:
          'Obrežne terase za razgled, staromestne ulice severno od trga za najširšo izbiro in boljšo vrednost, smer postaje pa za proračunske možnosti.',
      },
      {
        question: 'Ali so vegetarijanske možnosti?',
        answer:
          'Da — vegetarijanska in mednarodna hrana je v središču pogosta; staromestne ulice imajo največ raznolikosti.',
      },
    ],
    related: ['where-to-stay', 'one-day-itinerary', 'central-market', 'evening-walk'],
    updated: 'Vodnik po območjih, ne priporočila lokalov. Preverjeno oktober 2026.',
  },
};
