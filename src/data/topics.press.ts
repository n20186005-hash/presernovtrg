import type { TopicContent } from './topics';

export const PRESS_COVERAGE = 'ljubljanainfo-coverage';
export const EDITORIAL_INTERVIEW = 'ljubljanainfo-interview';

const articleUrl = 'https://ljubljanainfo.com/novica/lokalno/presernov-trg-ima-nov-spletni-vodnik-ne-le-za-turiste-tudi-za-ljubljancane/457137';

type PressCopy = {
  title: string;
  intro: string;
  sections: [heading: string, paragraph: string][];
  sourceLabel: string;
  updated: string;
};

function createTopic(slug: string, related: string, copy: PressCopy): TopicContent {
  return {
    slug,
    title: copy.title,
    h1: copy.title,
    intro: copy.intro,
    description: copy.intro,
    facts: [],
    sections: copy.sections.map(([title, paragraph], index) => ({
      id: `section-${index + 1}`,
      title,
      paragraphs: [paragraph],
    })),
    faq: [],
    related: [related],
    sources: [{ label: copy.sourceLabel, href: articleUrl }],
    updated: copy.updated,
  };
}

const coverage = {
  zh: {
    title: 'Ljubljanainfo 报道普列舍伦广场指南',
    intro: '2026 年 11 月 11 日，卢布尔雅那本地媒体 Ljubljanainfo 刊文介绍本站，并在报道中附上 presernovtrg.com 链接。',
    sections: [
      ['报道关注什么', '报道介绍了指南的由来：广场的历史、建筑与实用游览资料分散在多处，团队希望让读者在同一份指南中找到这些内容，再按自己的步调探索。'],
      ['游客与本地居民', '报道也关注广场作为日常通行与相聚空间的一面。游客可以用指南规划步行路线，本地读者则可以从诗歌、街道与建筑的联系重新认识这处熟悉的地方。'],
    ],
    sourceLabel: '阅读 Ljubljanainfo 斯洛文尼亚语原文',
    updated: '来源：Ljubljanainfo 本地新闻版，2026 年 11 月 11 日。',
  },
  en: {
    title: 'Ljubljanainfo covers our Prešeren Square guide',
    intro: 'On 11 November 2026, local news outlet Ljubljanainfo published a feature about this guide and linked to presernovtrg.com.',
    sections: [
      ['What the story covered', 'The article traces the guide to a practical problem: information about the square was scattered across multiple sources. It explains the team’s aim of bringing local history, architecture and visitor information into one place.'],
      ['A guide for locals as well as visitors', 'The story looks at the square as an everyday route and meeting place. Visitors can use the guide to plan a walk, while local readers can revisit familiar surroundings through the connections between poetry, streets and buildings.'],
    ],
    sourceLabel: 'Read the original article on Ljubljanainfo in Slovenian',
    updated: 'Source: Ljubljanainfo, Local News, 11 November 2026.',
  },
  sl: {
    title: 'Ljubljanainfo o vodniku po Prešernovem trgu',
    intro: 'Ljubljanainfo je 11. novembra 2026 objavil prispevek o našem vodniku in vanj vključil povezavo na presernovtrg.com.',
    sections: [
      ['Kaj je predstavil prispevek', 'Prispevek opisuje, kako je vodnik nastal iz potrebe po informacijah, razpršenih med različnimi viri. Pojasnjuje, zakaj želi ekipa na enem mestu zbrati podatke o zgodovini, arhitekturi in obisku trga.'],
      ['Za obiskovalce in domačine', 'Trg je tudi del vsakdanjih poti in kraj srečevanja. Obiskovalci lahko z vodnikom načrtujejo sprehod, domačini pa ga uporabijo za ponoven pogled na povezave med poezijo, ulicami in stavbami.'],
    ],
    sourceLabel: 'Preberite izvirni prispevek na Ljubljanainfo',
    updated: 'Vir: Ljubljanainfo, rubrika Lokalno, 11. november 2026.',
  },
} satisfies Record<string, PressCopy>;

const interview = {
  zh: {
    title: '接受 Ljubljanainfo 采访时，我们如何介绍这份指南',
    intro: 'Ljubljanainfo 的 Nejc Franko 来信询问项目起源、资料来源和后续计划。以下是我们于 2026 年 11 月 9 日给编辑部答复的整理。',
    sections: [
      ['为什么选择普列舍伦广场？', '我们当时说明，项目自 2026 年 5 月开始开发。准备游览公共广场和公园时，我们发现资料常散落在多个网站。普列舍伦广场既是读者熟悉的地标，也是本地居民每天经过和见面的地方，适合从这两种角度一起介绍。'],
      ['团队怎样整理和核对资料？', '采访时有一人全职投入，另有志愿者偶尔协助。项目由团队自行筹资，主要依据公开来源整理内容，收到有根据的纠错后再更新。团队当时尚未建立正式的专家合作关系。'],
      ['指南希望服务哪些人？', '最初的读者设想以外地访客为主，后来扩展到本地居民和国内游客。带孩子的家庭、年长读者和喜欢步行的人，可以按需要查找路线、景点背景和游览建议。'],
      ['后续会怎样扩展？', '我们计划先把广场与周边景点串成更完整的步行指南，再视资源补充卢布尔雅那其他公共空间。团队也希望收集当地居民、商户和访客的经历，帮助读者理解广场的日常用途。'],
    ],
    sourceLabel: '阅读采访后刊登的 Ljubljanainfo 报道',
    updated: '根据本站团队 2026 年 11 月 9 日发给 Ljubljanainfo 的采访答复整理。',
  },
  en: {
    title: 'Our interview with Ljubljanainfo about the guide',
    intro: 'Ljubljanainfo’s Nejc Franko asked us about the project’s origins, sources and plans. This page summarises the answers our team sent on 9 November 2026.',
    sections: [
      ['Why did we choose Prešeren Square?', 'We explained that work began in May 2026 after we found ourselves piecing together information about public squares and parks from many sites. Prešeren Square is both a recognisable landmark and part of everyday routes and gatherings in Ljubljana.'],
      ['Who makes the guide, and how is it checked?', 'At the time of the interview, one person worked on the project full-time with occasional volunteer help. The team funded the work itself, used public sources and welcomed corrections. No formal expert partnership was in place at the time.'],
      ['Who is it for?', 'We initially thought about international visitors. We broadened the audience to local residents and domestic visitors, with practical information for families, older visitors and people exploring on foot.'],
      ['What did we want to add?', 'Our first goal was to connect the square and its surroundings through walking guides. We also hoped to document other public spaces and include experiences from residents, local traders and visitors.'],
    ],
    sourceLabel: 'Read the Ljubljanainfo feature that followed the interview',
    updated: 'Adapted from our team’s interview answers sent to Ljubljanainfo on 9 November 2026.',
  },
  sl: {
    title: 'Kaj smo o vodniku povedali za Ljubljanainfo',
    intro: 'Nejc Franko iz Ljubljanainfo nas je vprašal o nastanku vodnika, virih in načrtih. Na tej strani povzemamo odgovore, ki smo jih uredništvu poslali 9. novembra 2026.',
    sections: [
      ['Zakaj Prešernov trg?', 'Delo smo začeli maja 2026, potem ko smo informacije o javnih trgih in parkih iskali na več različnih mestih. Prešernov trg je prepoznavna točka mesta in hkrati prostor vsakdanjih poti ter srečevanja.'],
      ['Kdo pripravlja vodnik in kako preverjamo podatke?', 'Ob intervjuju se je projektu polni delovni čas posvečala ena oseba, občasno so pomagali prostovoljci. Delo smo financirali sami, uporabljali javne vire in sprejemali popravke. Formalnega sodelovanja s strokovnjaki takrat še nismo vzpostavili.'],
      ['Komu je namenjen?', 'Sprva smo imeli v mislih obiskovalce iz tujine, pozneje pa tudi domače obiskovalce in prebivalce mesta. Praktične informacije naj pomagajo družinam, starejšim in ljudem, ki mesto raziskujejo peš.'],
      ['Kaj želimo dodati?', 'Najprej smo želeli povezati trg in bližnje znamenitosti v vodnike za pešce. Pozneje bi radi predstavili še druge javne prostore ter vključili izkušnje prebivalcev, trgovcev in obiskovalcev.'],
    ],
    sourceLabel: 'Preberite prispevek Ljubljanainfo, ki je nastal po pogovoru',
    updated: 'Povzetek odgovorov, poslanih uredništvu Ljubljanainfo 9. novembra 2026.',
  },
} satisfies Record<string, PressCopy>;

type PressLocale = keyof typeof coverage;

export const PRESS_TOPICS = Object.fromEntries(
  (Object.keys(coverage) as PressLocale[]).map((locale) => [
    locale,
    {
      coverage: createTopic(PRESS_COVERAGE, EDITORIAL_INTERVIEW, coverage[locale]),
      interview: createTopic(EDITORIAL_INTERVIEW, PRESS_COVERAGE, interview[locale]),
    },
  ]),
) as Record<PressLocale, { coverage: TopicContent; interview: TopicContent }>;
