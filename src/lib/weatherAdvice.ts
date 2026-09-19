/**
 * Turns raw forecast numbers into plain-language, visitor-facing advice.
 *
 * Design rules:
 * - Output is actionable ("bring an umbrella"), never raw meteorology.
 * - A rule only fires when its condition matches; unmatched advice is hidden.
 * - Official warnings always win: when one is active, generic planning advice
 *   is replaced by a single "adjust your plans" line.
 */

export type AdviceBucket = 'risk' | 'dress' | 'plan' | 'items';

export type AdviceItem = {
  /** Translation key, resolved as `weather.advice.<id>` */
  id: string;
  params?: Record<string, string | number>;
};

export type WeatherAlert = {
  event: string;
  description?: string;
};

export type WeatherAdviceInput = {
  code: number;
  precipProb: number | null;
  precipToday: number;
  tmax: number;
  tmin: number;
  windKmh: number;
  uv: number | null;
  alerts: WeatherAlert[];
};

export type WeatherAdvice = {
  hasAlert: boolean;
  risk: AdviceItem[];
  dress: AdviceItem[];
  plan: AdviceItem[];
  items: AdviceItem[];
};

type Rule = {
  id: string;
  bucket: AdviceBucket;
  when: (i: WeatherAdviceInput) => boolean;
};

const inList = (code: number, list: number[]) => list.includes(code);

const isSnow = (i: WeatherAdviceInput) => inList(i.code, [71, 73, 75, 77, 85, 86]);
const isThunder = (i: WeatherAdviceInput) => inList(i.code, [95, 96, 99]);
const isFog = (i: WeatherAdviceInput) => inList(i.code, [45, 48]);
const isWet = (i: WeatherAdviceInput) => i.code >= 51;
const isHeavy = (i: WeatherAdviceInput) =>
  isWet(i) && !isSnow(i) && (inList(i.code, [63, 65, 66, 67, 81, 82]) || i.precipToday >= 7.6);
/** Storm and snow have their own wording, so plain "heavy rain" steps aside for them. */
const isHeavyRain = (i: WeatherAdviceInput) => isHeavy(i) && !isThunder(i);
const isLight = (i: WeatherAdviceInput) =>
  isWet(i) && !isHeavy(i) && !isSnow(i) && !isThunder(i);
const rainChance = (i: WeatherAdviceInput) => i.precipProb ?? 0;

/** 5–6 Bft ≈ 29–50 km/h, 7 Bft and above ≈ 50 km/h */
const isWindy = (i: WeatherAdviceInput) => i.windKmh >= 29 && i.windKmh < 50;
const isGale = (i: WeatherAdviceInput) => i.windKmh >= 50;

const RULES: Rule[] = [
  // ---- risk ----
  {
    id: 'precip_thunder_risk',
    bucket: 'risk',
    when: (i) => isThunder(i),
  },
  {
    id: 'precip_heavy_risk',
    bucket: 'risk',
    when: (i) => isHeavyRain(i),
  },
  {
    id: 'wind_strong_risk',
    bucket: 'risk',
    when: (i) => isGale(i),
  },
  {
    id: 'fog_risk',
    bucket: 'risk',
    when: (i) => isFog(i),
  },

  // ---- what to wear ----
  {
    id: 'precip_prob_dress',
    bucket: 'dress',
    when: (i) => rainChance(i) >= 60 && !isWet(i),
  },
  {
    id: 'precip_heavy_dress',
    bucket: 'dress',
    when: (i) => isHeavyRain(i),
  },
  {
    id: 'precip_light_dress',
    bucket: 'dress',
    when: (i) => isLight(i),
  },
  {
    id: 'precip_snow_dress',
    bucket: 'dress',
    when: (i) => isSnow(i),
  },
  {
    id: 'heat_dress',
    bucket: 'dress',
    when: (i) => i.tmax >= 32,
  },
  {
    id: 'uv_dress',
    bucket: 'dress',
    when: (i) => (i.uv ?? 0) >= 5,
  },
  {
    id: 'cold_range_dress',
    bucket: 'dress',
    // Only meaningful when the day is not already hot.
    when: (i) => i.tmax - i.tmin > 8 && i.tmax < 28,
  },
  {
    id: 'cold_max_dress',
    bucket: 'dress',
    when: (i) => i.tmax <= 10,
  },
  {
    id: 'wind_mid_dress',
    bucket: 'dress',
    when: (i) => isWindy(i),
  },

  // ---- how to plan ----
  {
    id: 'precip_prob_plan',
    bucket: 'plan',
    when: (i) => rainChance(i) >= 60 && !isWet(i),
  },
  {
    id: 'precip_light_plan',
    bucket: 'plan',
    when: (i) => isLight(i),
  },
  {
    id: 'precip_heavy_plan',
    bucket: 'plan',
    when: (i) => isHeavyRain(i),
  },
  {
    id: 'precip_thunder_plan',
    bucket: 'plan',
    when: (i) => isThunder(i),
  },
  {
    id: 'precip_snow_plan',
    bucket: 'plan',
    when: (i) => isSnow(i),
  },
  {
    id: 'heat_plan',
    bucket: 'plan',
    when: (i) => i.tmax >= 32,
  },
  {
    id: 'urbanheat_plan',
    bucket: 'plan',
    when: (i) => i.tmax >= 26 && i.tmax < 32,
  },
  {
    id: 'cold_freeze_plan',
    bucket: 'plan',
    when: (i) => i.tmin <= 0,
  },
  {
    id: 'wind_mid_plan',
    bucket: 'plan',
    when: (i) => isWindy(i),
  },
  {
    id: 'wind_strong_plan',
    bucket: 'plan',
    when: (i) => isGale(i),
  },
  {
    id: 'sky_clear_plan',
    bucket: 'plan',
    when: (i) => inList(i.code, [0, 1]) && !isWet(i) && rainChance(i) < 30,
  },
  {
    id: 'sky_cloudy_plan',
    bucket: 'plan',
    when: (i) => inList(i.code, [2, 3]) && !isWet(i) && rainChance(i) < 30,
  },
  {
    id: 'fog_plan',
    bucket: 'plan',
    when: (i) => isFog(i),
  },

  // ---- what to bring ----
  {
    id: 'precip_prob_items',
    bucket: 'items',
    when: (i) => rainChance(i) >= 60 && !isWet(i),
  },
  {
    id: 'precip_light_items',
    bucket: 'items',
    when: (i) => isLight(i),
  },
  {
    id: 'precip_heavy_items',
    bucket: 'items',
    when: (i) => isHeavyRain(i),
  },
  {
    id: 'precip_thunder_items',
    bucket: 'items',
    when: (i) => isThunder(i),
  },
  {
    id: 'precip_snow_items',
    bucket: 'items',
    when: (i) => isSnow(i),
  },
  {
    id: 'heat_items',
    bucket: 'items',
    when: (i) => i.tmax >= 32,
  },
  {
    id: 'uv_items',
    bucket: 'items',
    when: (i) => (i.uv ?? 0) >= 5,
  },
  {
    id: 'cold_max_items',
    bucket: 'items',
    when: (i) => i.tmax <= 10,
  },
  {
    id: 'cold_freeze_items',
    bucket: 'items',
    when: (i) => i.tmin <= 0,
  },
  {
    id: 'sky_clear_items',
    bucket: 'items',
    when: (i) => inList(i.code, [0, 1]) && !isWet(i) && rainChance(i) < 30,
  },
  {
    id: 'fog_items',
    bucket: 'items',
    when: (i) => isFog(i),
  },
];

export function buildWeatherAdvice(input: WeatherAdviceInput): WeatherAdvice {
  const hasAlert = input.alerts.length > 0;

  const risk: AdviceItem[] = [];
  const dress: AdviceItem[] = [];
  const plan: AdviceItem[] = [];
  const items: AdviceItem[] = [];

  if (hasAlert) {
    // Warnings outrank everything else: lead with them, keep planning simple.
    for (const a of input.alerts) {
      risk.push({ id: 'alert_risk', params: { event: a.event || 'Weather' } });
    }
    plan.push({ id: 'alert_plan' });
  } else {
    for (const r of RULES) {
      if (r.bucket === 'risk' && r.when(input)) risk.push({ id: r.id });
    }
    for (const r of RULES) {
      if (r.bucket === 'plan' && r.when(input)) plan.push({ id: r.id });
    }
  }

  for (const r of RULES) {
    if (r.bucket === 'dress' && r.when(input)) dress.push({ id: r.id });
  }
  for (const r of RULES) {
    if (r.bucket === 'items' && r.when(input)) items.push({ id: r.id });
  }

  return { hasAlert, risk, dress, plan, items };
}
