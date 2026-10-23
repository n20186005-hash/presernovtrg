import { getTopic, topicLocales, type TopicContent } from '@/data/topics';
import { HREFLANG_TAGS, routing, type Locale } from '@/i18n/routing';

function prefixFor(locale: Locale) {
  return locale === routing.defaultLocale ? '' : `/${locale}`;
}

/**
 * Long-form topic page (history, monument, transport, routes, events…).
 * Rendered as a server component so every word of copy, route steps and FAQ
 * answers is in the HTML — no client-side loading required to read the page.
 */
export default function TopicPage({
  slug,
  locale,
}: {
  slug: string;
  locale: Locale;
}) {
  const topic = getTopic(slug, locale);
  if (!topic) return null;

  const prefix = prefixFor(locale);
  const related = topic.related
    .map((item) => ({ slug: item, content: getTopic(item, locale) }))
    .filter((item): item is { slug: string; content: TopicContent } => item.content !== null);
  const otherLocales = topicLocales(slug).filter((item) => item !== locale);

  return (
    <article>
      <header
        className="pt-24 pb-12 px-4 sm:px-6"
        style={{ background: 'var(--bg-secondary)' }}
      >
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
            <a href={`${prefix}/`} className="hover:underline" style={{ color: 'var(--accent)' }}>
              Prešernov trg
            </a>
            <span aria-hidden="true"> / </span>
            <span>{topic.h1}</span>
          </nav>
          <h1
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {topic.h1}
          </h1>
          <p className="text-lg leading-relaxed max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
            {topic.intro}
          </p>
        </div>
      </header>

      <div className="section-padding">
        <div className="max-w-4xl mx-auto space-y-14">
          {topic.facts.length > 0 && (
            <section aria-label="Key facts">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {topic.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-xl p-4"
                    style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
                  >
                    <dt className="text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>
                      {fact.label}
                    </dt>
                    <dd className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {topic.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2
                className="font-display text-2xl sm:text-3xl font-semibold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                {section.title}
              </h2>
              <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
              {(section.paragraphs ?? []).map((text, i) => (
                <p key={i} className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {text}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-2 mb-4">
                  {section.bullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ background: 'var(--accent)' }}
                      />
                      <span className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {section.table && (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        {section.table.columns.map((column) => (
                          <th
                            key={column}
                            className="text-left px-3 py-2 font-semibold"
                            style={{ color: 'var(--text-primary)', borderBottom: '2px solid var(--accent)' }}
                          >
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, i) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td
                              key={j}
                              className="px-3 py-2 align-top"
                              style={{
                                color: j === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
                                borderBottom: '1px solid var(--border-color)',
                              }}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          {topic.faq.length > 0 && (
            <section id="faq">
              <h2
                className="font-display text-2xl sm:text-3xl font-semibold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                Frequently asked questions
              </h2>
              <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
              <div className="space-y-3">
                {topic.faq.map((item, i) => (
                  <details
                    key={i}
                    className="rounded-xl"
                    style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
                  >
                    <summary
                      className="cursor-pointer px-5 py-4 font-medium"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.question}
                    </summary>
                    <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {related.length > 0 && (
            <section id="related">
              <h2
                className="font-display text-2xl sm:text-3xl font-semibold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                Related guides
              </h2>
              <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((item) => (
                  <a
                    key={item.slug}
                    href={`${prefix}/${item.slug}`}
                    className="rounded-xl p-5 transition-shadow hover:shadow-md"
                    style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
                  >
                    <h3 className="font-display font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                      {item.content.h1}
                    </h3>
                    <p className="text-sm line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                      {item.content.description}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          )}

          <section
            className="rounded-xl p-5 text-sm space-y-3"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <p style={{ color: 'var(--text-secondary)' }}>{topic.updated}</p>
            {otherLocales.length > 0 && (
              <p style={{ color: 'var(--text-muted)' }}>
                {otherLocales.map((item) => (
                  <a key={item} href={`${prefixFor(item)}/${slug}`} className="hover:underline mr-4" style={{ color: 'var(--accent)' }}>
                    {HREFLANG_TAGS[item]}
                  </a>
                ))}
              </p>
            )}
            <p>
              <a href={`${prefix}/`} className="hover:underline" style={{ color: 'var(--accent)' }}>
                &larr; Prešernov trg
              </a>
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
