import { useLocale, useTranslations } from 'next-intl';
import type { CurrentWeather, DayForecast } from './WeatherSection';

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

export default function WeatherView({
  current,
  daily,
  observationTime,
}: {
  current: CurrentWeather;
  daily: DayForecast[];
  observationTime: string;
}) {
  const t = useTranslations('weather');
  const locale = useLocale();
  const intlLocale = locale === 'zh' ? 'zh-CN' : locale;

  const obsTime = observationTime.length >= 16 ? observationTime.slice(11, 16) : observationTime;

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
                {t(`codes.${current.code}` as any) || t(`codes.3` as any)}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1">
            <Stat label={t('feels')} value={`${current.feelsLike}°`} />
            <Stat label={t('humidity')} value={`${current.humidity}%`} />
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
            <Stat label={t('precipToday')} value={`${current.precipitation} mm`} />
          </div>
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

        <p className="mt-4 text-xs" style={{ color: 'var(--text-muted)' }}>
          {t('advice')}
        </p>
      </div>
    </section>
  );
}
