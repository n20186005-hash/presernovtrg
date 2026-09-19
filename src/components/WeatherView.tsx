import { useLocale, useTranslations } from 'next-intl';
import { buildWeatherAdvice, type AdviceItem } from '@/lib/weatherAdvice';
import type { CurrentWeather, DayForecast, WeatherAlert } from './WeatherSection';

function weatherEmoji(code: number, isDay: boolean): string {
  if (code === 0) return isDay ? '☀️' : '🌙';
  if (code === 1) return isDay ? '🌤️' : '☁️';
  if (code === 2) return '⛅';
  if (code === 3) return '☁️';
  if (code <= 48) return '🌫️';
  if (code >= 51 && code <= 67) return '🌧️';
  if (code >= 71 && code <= 77) return '🌨️';
  if (code >= 80 && code <= 82) return '🌦️';
  if (code >= 85 && code <= 86) return '🌨️';
  if (code >= 95) return '⛈️';
  return '🌡️';
}

function weekday(dateStr: string, intlLocale: string): string {
  const d = new Date(`${dateStr}T00:00:00`);
  return new Intl.DateTimeFormat(intlLocale, { weekday: 'short' }).format(d);
}

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div
      className="rounded-lg px-3 py-2 text-center"
      style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
    >
      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</div>
      <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>{value}</div>
    </div>
  );
}

function AdviceBlock({
  title,
  items,
  variant,
}: {
  title: string;
  items: AdviceItem[];
  variant: 'list' | 'chips';
}) {
  const raw = useTranslations('weather');
  const t = raw as unknown as (key: string, values?: Record<string, string | number>) => string;
  if (items.length === 0) return null;

  return (
    <div
      className="rounded-xl p-4"
      style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
    >
      <div className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
        {title}
      </div>
      {variant === 'list' ? (
        <ul className="space-y-1.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
          {items.map((it, i) => (
            <li key={i} className="flex gap-2">
              <span aria-hidden="true">·</span>
              <span>{t(`advice.${it.id}`, it.params)}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-wrap gap-2">
          {items.map((it, i) => (
            <span
              key={i}
              className="text-xs px-2.5 py-1 rounded-full"
              style={{
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
              }}
            >
              {t(`advice.${it.id}`, it.params)}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function WeatherView({
  current,
  daily,
  observationTime,
  alerts,
}: {
  current: CurrentWeather;
  daily: DayForecast[];
  observationTime: string;
  alerts: WeatherAlert[];
}) {
  const t = useTranslations('weather');
  const locale = useLocale();
  const intlLocale = locale === 'zh' ? 'zh-CN' : locale;

  const obsTime = observationTime.length >= 16 ? observationTime.slice(11, 16) : observationTime;
  const today = daily[0];

  const precipProb = today?.precipProb ?? null;
  const tmax = today?.tmax ?? current.temperature;
  const tmin = today?.tmin ?? current.temperature;
  const windMax = Math.max(current.windKmh, today?.windMax ?? 0);
  const uv = today?.uv ?? current.uv;

  const advice = buildWeatherAdvice({
    code: current.code,
    precipProb,
    precipToday: today?.precipSum ?? current.precipitation,
    tmax,
    tmin,
    windKmh: windMax,
    uv: uv ?? null,
    alerts,
  });

  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')} {obsTime && `· ${t('updated')} ${obsTime}`}
        </p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div
          className="rounded-2xl p-6 mb-8 flex flex-col sm:flex-row sm:items-center gap-6"
          style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
        >
          <div className="flex items-center gap-4">
            <span className="text-5xl leading-none">{weatherEmoji(current.code, current.isDay)}</span>
            <div>
              <div className="font-display text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {current.temperature}°
              </div>
              <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {t(`codes.${current.code}` as any) || t('codes.3' as any)}
              </div>
              {today && (
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {tmin}° / {tmax}°
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1">
            <Stat label={t('feels')} value={`${current.feelsLike}°`} />
            <Stat
              label={t('precipProb')}
              value={precipProb === null ? '–' : `${precipProb}%`}
            />
            <Stat
              label={t('wind')}
              value={
                <span className="inline-flex items-center gap-1">
                  <span
                    style={{
                      display: 'inline-block',
                      transform: `rotate(${current.windDir}deg)`,
                    }}
                  >
                    ↑
                  </span>
                  {current.windKmh} km/h
                </span>
              }
            />
            <Stat label={t('uv')} value={uv === null || uv === undefined ? '–' : uv} />
          </div>
        </div>

        <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
          {t('advisoryTitle')}
        </h3>

        {advice.risk.length > 0 ? (
          <div
            className="rounded-xl p-4 mb-4"
            style={{ background: 'rgba(220, 38, 38, 0.08)', border: '1px solid rgba(220, 38, 38, 0.35)' }}
          >
            <div className="font-semibold mb-2" style={{ color: '#b91c1c' }}>
              ⚠️ {t('buckets.risk')}
            </div>
            <ul className="space-y-1.5 text-sm" style={{ color: 'var(--text-primary)' }}>
              {advice.risk.map((it, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden="true">·</span>
                  <span>
                    {(t as unknown as (k: string, v?: Record<string, string | number>) => string)(
                      `advice.${it.id}`,
                      it.params,
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
            ✅ {t('noRisk')}
          </div>
        )}

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <AdviceBlock title={`👕 ${t('buckets.dress')}`} items={advice.dress} variant="list" />
          <AdviceBlock title={`🗺️ ${t('buckets.plan')}`} items={advice.plan} variant="list" />
          <AdviceBlock title={`🎒 ${t('buckets.items')}`} items={advice.items} variant="chips" />
        </div>

        <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
          {t('forecast')}
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-7 gap-3">
          {daily.map((d, i) => (
            <div
              key={i}
              className="rounded-xl p-3 text-center"
              style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
            >
              <div className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
                {i === 0 ? t('today') : weekday(d.date, intlLocale)}
              </div>
              <div className="text-2xl my-1">{weatherEmoji(d.code, true)}</div>
              <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                {d.tmax}°
              </div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
                {d.tmin}°
              </div>
              <div className="text-xs mt-1" style={{ color: 'var(--accent)' }}>
                💧 {d.precipProb ?? '–'}%
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs" style={{ color: 'var(--text-muted)' }}>
          {t('advisoryNote')}
        </p>
      </div>
    </section>
  );
}
