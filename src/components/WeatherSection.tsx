import WeatherView from './WeatherView';

const LAT = 46.0514;
const LON = 14.506;

export type CurrentWeather = {
  temperature: number;
  feelsLike: number;
  humidity: number;
  code: number;
  isDay: boolean;
  windKmh: number;
  windDir: number;
  precipitation: number;
  uv: number | null;
};

export type WeatherAlert = {
  event: string;
  description?: string;
};

export type DayForecast = {
  date: string;
  code: number;
  tmax: number;
  tmin: number;
  precipSum: number;
  precipProb: number | null;
  windMax: number;
  uv: number;
};

/**
 * Pulls live conditions + a multi-day forecast on the server and caches the
 * response for 30 minutes. Visitors only ever see the resulting numbers.
 */
export default async function WeatherSection() {
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}` +
    `&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m,wind_direction_10m,uv_index` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,uv_index_max` +
    `&timezone=Europe%2FLjubljana&forecast_days=7&wind_speed_unit=kmh&alerts=true`;

  let current: CurrentWeather | null = null;
  let daily: DayForecast[] = [];
  let observationTime = '';
  let alerts: WeatherAlert[] = [];

  try {
    const res = await fetch(url, { next: { revalidate: 1800 } });
    if (res.ok) {
      const json = (await res.json()) as any;
      const c = json.current;
      current = {
        temperature: Math.round(c.temperature_2m),
        feelsLike: Math.round(c.apparent_temperature),
        humidity: c.relative_humidity_2m,
        code: c.weather_code,
        isDay: c.is_day === 1,
        windKmh: Math.round(c.wind_speed_10m),
        windDir: Math.round(c.wind_direction_10m),
        precipitation: c.precipitation,
        uv: typeof c.uv_index === 'number' ? c.uv_index : null,
      };
      observationTime = c.time;
      const d = json.daily;
      daily = d.time.map((date: string, i: number) => ({
        date,
        code: d.weather_code[i],
        tmax: Math.round(d.temperature_2m_max[i]),
        tmin: Math.round(d.temperature_2m_min[i]),
        precipSum: d.precipitation_sum[i],
        precipProb: d.precipitation_probability_max[i],
        windMax: Math.round(d.wind_speed_10m_max[i]),
        uv: d.uv_index_max[i],
      }));
      if (Array.isArray(json.alerts)) {
        alerts = json.alerts
          .filter((a: any) => a && typeof a.event === 'string')
          .slice(0, 3)
          .map((a: any) => ({ event: a.event, description: a.description }));
      }
    }
  } catch {
    current = null;
  }

  if (!current) return null;

  return (
    <WeatherView
      current={current}
      daily={daily}
      observationTime={observationTime}
      alerts={alerts}
    />
  );
}
