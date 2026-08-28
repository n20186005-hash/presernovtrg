'use client';

import { useTranslations, useMessages } from 'next-intl';
import { useState } from 'react';

type FAQItem = { question: string; answer: string };

export default function FAQSection() {
  const t = useTranslations('faq');
  const messages = useMessages() as any;
  const items: FAQItem[] = (messages?.faq?.items || []) as FAQItem[];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section id="faq" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-xl overflow-hidden transition-all"
                style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span
                    className="font-display font-semibold text-base sm:text-lg"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.question}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="flex-shrink-0 transition-transform duration-200"
                    style={{
                      color: 'var(--accent)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className="grid transition-all duration-300"
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                  }}
                >
                  <div className="overflow-hidden">
                    <p
                      className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
